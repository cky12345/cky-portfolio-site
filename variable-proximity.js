/* Variable Proximity — lightweight static-site adaptation of the supplied
   React Bits component. It preserves the proximity/falloff behaviour without
   requiring React or Motion, and supports Chinese glyphs through a scale/weight fallback. */
(function () {
  'use strict';

  class VariableProximity {
    constructor(element, options = {}) {
      this.element = element;
      this.container = element.closest('.hero-section') || element.parentElement;
      this.options = {
        radius: 170,
        falloff: 'gaussian',
        fromWeight: Number.parseInt(getComputedStyle(element).fontWeight, 10) || 500,
        toWeight: 850,
        fromOpticalSize: 18,
        toOpticalSize: 92,
        ...options
      };
      this.pointer = null;
      this.ripples = [];
      this.frame = 0;
      this.reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      this.buildCharacters();
      if (!this.reducedMotion) this.bindEvents();
    }

    buildCharacters() {
      const label = this.element.textContent || '';
      const fragment = document.createDocumentFragment();
      this.characters = Array.from(label).map(character => {
        const span = document.createElement('span');
        span.className = 'proximity-character';
        span.setAttribute('aria-hidden', 'true');
        span.textContent = character === ' ' ? '\u00a0' : character;
        fragment.appendChild(span);
        return span;
      });
      this.element.textContent = '';
      this.element.appendChild(fragment);
      this.element.classList.add('variable-proximity');
    }

    bindEvents() {
      const update = event => {
        this.pointer = { x: event.clientX, y: event.clientY };
        if (!this.frame) this.frame = requestAnimationFrame(() => this.render());
      };
      this.container.addEventListener('pointermove', update, { passive: true });
      this.container.addEventListener('pointerleave', () => {
        this.pointer = null;
        if (!this.frame) this.frame = requestAnimationFrame(() => this.render());
      }, { passive: true });
      this.container.addEventListener('portfolio:ripple', event => {
        const detail = event.detail || {};
        this.ripples.push({
          x: Number(detail.x) || 0,
          y: Number(detail.y) || 0,
          startedAt: Number(detail.startedAt) || performance.now(),
          fieldHeight:Math.max(1, Number(detail.fieldHeight) || this.container.clientHeight),
          speed:Number(detail.speed) || .82
        });
        this.ripples = this.ripples.slice(-6);
        if (!this.frame) this.frame = requestAnimationFrame(() => this.render());
      });
    }

    falloff(distance) {
      const normalized = Math.min(Math.max(1 - distance / this.options.radius, 0), 1);
      if (this.options.falloff === 'exponential') return normalized ** 2;
      if (this.options.falloff === 'gaussian') {
        const ratio = distance / (this.options.radius * 0.48);
        return Math.exp(-(ratio ** 2) / 2);
      }
      return normalized;
    }

    render() {
      this.frame = 0;
      const now = performance.now();
      this.ripples = this.ripples.filter(ripple => (now - ripple.startedAt) < 4600);
      this.characters.forEach(character => {
        let influence = 0;
        const rect = character.getBoundingClientRect();
        if (this.pointer) {
          const dx = this.pointer.x - (rect.left + rect.width / 2);
          const dy = this.pointer.y - (rect.top + rect.height / 2);
          const distance = Math.sqrt(dx * dx + dy * dy);
          if (distance < this.options.radius) influence = this.falloff(distance);
        }
        this.ripples.forEach(ripple => {
          const age = ((now - ripple.startedAt) / 1000) * ripple.speed;
          const radius = age * .19 * ripple.fieldHeight;
          const dx = ripple.x - (rect.left + rect.width / 2);
          const dy = ripple.y - (rect.top + rect.height / 2);
          const distance = Math.sqrt(dx * dx + dy * dy);
          const ringWidth = Math.max(34, ripple.fieldHeight * .048);
          const ring = Math.exp(-(((distance - radius) / ringWidth) ** 2)) * Math.exp(-age * .72);
          influence = Math.max(influence, Math.min(1, ring * 1.32));
        });

        const weight = this.options.fromWeight + (this.options.toWeight - this.options.fromWeight) * influence;
        const opticalSize = this.options.fromOpticalSize + (this.options.toOpticalSize - this.options.fromOpticalSize) * influence;
        character.style.fontVariationSettings = `'wght' ${weight.toFixed(1)}, 'opsz' ${opticalSize.toFixed(1)}`;
        character.style.fontWeight = String(Math.round(weight));
        character.style.setProperty('--proximity', influence.toFixed(3));
        character.style.transform = `translateY(${(-influence * 0.035).toFixed(3)}em) scale(${(1 + influence * 0.038).toFixed(3)})`;
      });
      if (this.ripples.length) this.frame = requestAnimationFrame(() => this.render());
    }
  }

  document.querySelectorAll('[data-variable-proximity]').forEach(element => {
    const isYear = element.matches('em');
    new VariableProximity(element, {
      radius: isYear ? 135 : 185,
      falloff: 'gaussian',
      fromWeight: isYear ? 500 : 600,
      toWeight: isYear ? 760 : 900,
      fromOpticalSize: isYear ? 24 : 18,
      toOpticalSize: 100
    });
  });
})();
