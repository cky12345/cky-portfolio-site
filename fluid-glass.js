/* Fluid Glass — a dependency-free surface treatment inspired by the supplied
   React Bits component. It keeps the site's dark editorial system intact while
   adding controlled refraction, specular movement and frosted depth to UI surfaces. */
(function () {
  'use strict';
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reducedMotion) return;

  const bind = surface => {
    if (surface.dataset.glassBound) return;
    surface.dataset.glassBound = 'true';
    surface.addEventListener('pointermove', event => {
      const rect = surface.getBoundingClientRect();
      const x = ((event.clientX - rect.left) / rect.width) * 100;
      const y = ((event.clientY - rect.top) / rect.height) * 100;
      surface.style.setProperty('--glass-x', `${Math.max(0, Math.min(100, x))}%`);
      surface.style.setProperty('--glass-y', `${Math.max(0, Math.min(100, y))}%`);
    }, { passive: true });
    surface.addEventListener('pointerleave', () => {
      surface.style.setProperty('--glass-x', '50%');
      surface.style.setProperty('--glass-y', '38%');
    }, { passive: true });
  };
  document.querySelectorAll('.fluid-glass').forEach(bind);
  const observer = new MutationObserver(() => document.querySelectorAll('.fluid-glass').forEach(bind));
  observer.observe(document.body, { childList: true, subtree: true });
})();
