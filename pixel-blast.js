/* Pixel Blast — standalone WebGL adaptation for the static portfolio.
   Inspired by the supplied React Bits component and its Bayer-dither shader. */
(function () {
  'use strict';

  const VERTEX_SHADER = `#version 300 es
    in vec2 a_position;
    void main() {
      gl_Position = vec4(a_position, 0.0, 1.0);
    }
  `;

  const FRAGMENT_SHADER = `#version 300 es
    precision highp float;

    uniform vec2 u_resolution;
    uniform vec3 u_color;
    uniform float u_time;
    uniform vec2 u_ripple_positions[6];
    uniform float u_ripple_times[6];
    uniform float u_pixel_size;
    out vec4 fragColor;

    float hash(vec2 p) {
      return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453123);
    }

    float noise(vec2 p) {
      vec2 i = floor(p);
      vec2 f = fract(p);
      vec2 u = f * f * (3.0 - 2.0 * f);
      return mix(mix(hash(i), hash(i + vec2(1.0, 0.0)), u.x),
                 mix(hash(i + vec2(0.0, 1.0)), hash(i + vec2(1.0, 1.0)), u.x), u.y);
    }

    float fbm(vec2 p) {
      float sum = 0.0;
      float amp = 0.55;
      for (int i = 0; i < 4; i++) {
        sum += noise(p) * amp;
        p = p * 1.92 + vec2(5.7, 2.4);
        amp *= 0.52;
      }
      return sum;
    }

    float bayer4(vec2 id) {
      vec2 p = mod(id, 4.0);
      float x = p.x;
      float y = p.y;
      float index = 0.0;
      index += mod(x, 2.0) * 2.0;
      index += mod(y, 2.0) * 3.0;
      index += floor(x / 2.0) * 3.0;
      index += floor(y / 2.0) * 2.0;
      return mod(index, 8.0) / 8.0;
    }

    void main() {
      vec2 resolution = max(u_resolution, vec2(1.0));
      vec2 uv = gl_FragCoord.xy / resolution;
      float aspect = resolution.x / resolution.y;
      vec2 centered = (uv - 0.5) * vec2(aspect, 1.0);

      vec2 cellId = floor(gl_FragCoord.xy / u_pixel_size);
      vec2 cellUv = fract(gl_FragCoord.xy / u_pixel_size);
      vec2 fieldUv = centered * 2.15;
      fieldUv += vec2(u_time * 0.05, -u_time * 0.035);

      float field = fbm(fieldUv * 2.4);
      field += 0.18 * sin(fieldUv.x * 3.3 + u_time * 0.28);
      float breath = sin(u_time * 0.78) * 0.055;
      float threshold = 0.58 + breath + (bayer4(cellId) - 0.5) * 0.34;

      for (int i = 0; i < 6; i++) {
        if (u_ripple_positions[i].x >= 0.0) {
          vec2 pointer = (u_ripple_positions[i] - 0.5) * vec2(aspect, 1.0);
          float pointerDistance = distance(centered, pointer);
          float age = max(u_time - u_ripple_times[i], 0.0);
          float radius = age * 0.19;
          float ring = exp(-pow((pointerDistance - radius) / 0.035, 2.0));
          ring *= exp(-age * 0.72);
          field += ring * 0.42;
        }
      }

      float coverage = step(threshold, field);
      float dotRadius = mix(0.13, 0.39, clamp(field - breath, 0.0, 1.0));
      float dotMask = 1.0 - smoothstep(dotRadius, dotRadius + 0.08, distance(cellUv, vec2(0.5)));

      float edge = min(min(uv.x, uv.y), min(1.0 - uv.x, 1.0 - uv.y));
      float edgeFade = smoothstep(0.0, 0.19, edge);
      float centerFade = 1.0 - smoothstep(0.24, 0.86, length(centered));
      float alpha = coverage * dotMask * edgeFade * mix(0.38, 1.0, centerFade);

      fragColor = vec4(u_color, alpha * 0.72);
    }
  `;

  const hexToRgb = hex => {
    const value = hex.replace('#', '').trim();
    const normalized = value.length === 3 ? value.split('').map(char => char + char).join('') : value;
    const number = Number.parseInt(normalized, 16);
    return [((number >> 16) & 255) / 255, ((number >> 8) & 255) / 255, (number & 255) / 255];
  };

  class PortfolioPixelBlast {
    constructor(container, options = {}) {
      this.container = container;
      this.options = {
        color: '#6d58ff',
        pixelSize: 7,
        speed: 0.82,
        ...options
      };
      this.canvas = document.createElement('canvas');
      this.canvas.className = 'pixel-blast-canvas';
      this.container.appendChild(this.canvas);
      this.gl = this.canvas.getContext('webgl2', {
        alpha: true,
        antialias: false,
        powerPreference: 'high-performance'
      });
      if (!this.gl) {
        this.container.classList.add('pixel-blast-fallback');
        return;
      }

      this.startedAt = performance.now();
      this.ripples = Array.from({ length: 6 }, () => ({ position: [-1, -1], time: -100 }));
      this.rippleIndex = 0;
      this.visible = true;
      this.reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      this.createProgram();
      this.bindEvents();
      this.resize();
      this.render();
    }

    compile(type, source) {
      const shader = this.gl.createShader(type);
      this.gl.shaderSource(shader, source);
      this.gl.compileShader(shader);
      if (!this.gl.getShaderParameter(shader, this.gl.COMPILE_STATUS)) {
        const message = this.gl.getShaderInfoLog(shader);
        this.gl.deleteShader(shader);
        throw new Error(`Pixel Blast shader error: ${message}`);
      }
      return shader;
    }

    createProgram() {
      const gl = this.gl;
      const program = gl.createProgram();
      gl.attachShader(program, this.compile(gl.VERTEX_SHADER, VERTEX_SHADER));
      gl.attachShader(program, this.compile(gl.FRAGMENT_SHADER, FRAGMENT_SHADER));
      gl.linkProgram(program);
      if (!gl.getProgramParameter(program, gl.LINK_STATUS)) throw new Error(gl.getProgramInfoLog(program));
      gl.useProgram(program);
      this.program = program;

      const vertices = new Float32Array([-1, -1, 3, -1, -1, 3]);
      const buffer = gl.createBuffer();
      gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
      gl.bufferData(gl.ARRAY_BUFFER, vertices, gl.STATIC_DRAW);
      const position = gl.getAttribLocation(program, 'a_position');
      gl.enableVertexAttribArray(position);
      gl.vertexAttribPointer(position, 2, gl.FLOAT, false, 0, 0);

      this.uniforms = {
        resolution: gl.getUniformLocation(program, 'u_resolution'),
        color: gl.getUniformLocation(program, 'u_color'),
        time: gl.getUniformLocation(program, 'u_time'),
        ripplePositions: gl.getUniformLocation(program, 'u_ripple_positions[0]'),
        rippleTimes: gl.getUniformLocation(program, 'u_ripple_times[0]'),
        pixelSize: gl.getUniformLocation(program, 'u_pixel_size')
      };
      const color = hexToRgb(this.options.color);
      gl.uniform3f(this.uniforms.color, color[0], color[1], color[2]);
      gl.enable(gl.BLEND);
      gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);
      gl.clearColor(0, 0, 0, 0);
    }

    bindEvents() {
      const surface = this.container.closest('.hero-section') || this.container;
      const setRippleOrigin = event => {
        const rect = this.container.getBoundingClientRect();
        const position = [
          Math.min(1, Math.max(0, (event.clientX - rect.left) / rect.width)),
          1 - Math.min(1, Math.max(0, (event.clientY - rect.top) / rect.height))
        ];
        this.ripples[this.rippleIndex] = { position, time: this.getTime() };
        this.rippleIndex = (this.rippleIndex + 1) % this.ripples.length;
      };
      surface.addEventListener('pointerdown', event => {
        setRippleOrigin(event);
        const rect = this.container.getBoundingClientRect();
        surface.dispatchEvent(new CustomEvent('portfolio:ripple', {
          detail: {
            x: event.clientX,
            y: event.clientY,
            startedAt: performance.now(),
            fieldHeight: rect.height,
            speed: this.options.speed
          }
        }));
        if (this.reducedMotion) this.draw(18);
      }, { passive: true });

      this.resizeObserver = new ResizeObserver(() => this.resize());
      this.resizeObserver.observe(this.container);
      this.intersectionObserver = new IntersectionObserver(entries => {
        this.visible = entries[0]?.isIntersecting !== false;
      }, { threshold: 0.02 });
      this.intersectionObserver.observe(this.container);
    }

    resize() {
      if (!this.gl) return;
      const ratio = Math.min(window.devicePixelRatio || 1, 1.5);
      const width = Math.max(1, Math.round(this.container.clientWidth * ratio));
      const height = Math.max(1, Math.round(this.container.clientHeight * ratio));
      if (this.canvas.width !== width || this.canvas.height !== height) {
        this.canvas.width = width;
        this.canvas.height = height;
        this.gl.viewport(0, 0, width, height);
      }
      this.gl.useProgram(this.program);
      this.gl.uniform2f(this.uniforms.resolution, width, height);
      this.gl.uniform1f(this.uniforms.pixelSize, this.options.pixelSize * ratio);
      if (this.reducedMotion) this.draw(18);
    }

    getTime() {
      return ((performance.now() - this.startedAt) / 1000) * this.options.speed;
    }

    draw(time) {
      const gl = this.gl;
      gl.clear(gl.COLOR_BUFFER_BIT);
      gl.useProgram(this.program);
      gl.uniform1f(this.uniforms.time, time);
      const positions = new Float32Array(this.ripples.flatMap(ripple => ripple.position));
      const times = new Float32Array(this.ripples.map(ripple => ripple.time));
      gl.uniform2fv(this.uniforms.ripplePositions, positions);
      gl.uniform1fv(this.uniforms.rippleTimes, times);
      gl.drawArrays(gl.TRIANGLES, 0, 3);
    }

    render = () => {
      if (!this.gl) return;
      if (this.visible && !document.hidden) this.draw(this.reducedMotion ? 18 : this.getTime());
      if (!this.reducedMotion) this.raf = requestAnimationFrame(this.render);
    };
  }

  const target = document.querySelector('#pixel-blast');
  if (target) {
    try {
      window.portfolioPixelBlast = new PortfolioPixelBlast(target, {
        color: '#6d58ff',
        pixelSize: 7,
        speed: 0.82
      });
    } catch (error) {
      target.classList.add('pixel-blast-fallback');
      console.warn(error);
    }
  }
})();
