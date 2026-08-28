(() => {
  const STORAGE_KEY = 'cky-portfolio-avatar-config-v1';
  const DEFAULTS = Object.freeze({ tilt:12, displacementScale:.45, background:'transparent' });
  const clamp = (value, min, max) => Math.min(max, Math.max(min, value));

  function readConfig() {
    try {
      const stored = JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}');
      return {
        tilt:clamp(Number(stored.tilt) || DEFAULTS.tilt, 2, 12),
        displacementScale:clamp(Number.isFinite(Number(stored.displacementScale)) ? Number(stored.displacementScale) : DEFAULTS.displacementScale, 0, .5),
        background:stored.background === 'white' ? 'white' : DEFAULTS.background
      };
    } catch { return {...DEFAULTS}; }
  }

  document.querySelectorAll('[data-avatar-depth]').forEach(root => {
    const canvas = root.querySelector('.profile-avatar-canvas');
    const fallback = root.querySelector('.profile-avatar-fallback');
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)');
    let config = readConfig();
    let target = {x:0, y:0, active:false};
    let current = {x:0, y:0};
    let mesh = null;
    let renderer = null;
    let camera = null;
    let scene = null;
    let keyLight = null;
    let visible = true;
    let orientationReady = false;
    let orientationPermissionRequested = false;
    let orientationResetTimer = 0;

    function applyConfig(next=readConfig()) {
      config = next;
      root.classList.toggle('is-white', config.background === 'white');
      if (mesh?.userData.applyDepth) mesh.userData.applyDepth(config.displacementScale);
    }

    function setTarget(event) {
      if (reduced.matches) return;
      const rect = root.getBoundingClientRect();
      target = {
        x:clamp(((event.clientX - rect.left) / rect.width) * 2 - 1, -1, 1),
        y:clamp(((event.clientY - rect.top) / rect.height) * 2 - 1, -1, 1),
        active:true
      };
      root.classList.add('is-active');
    }

    function resetTarget() {
      if (orientationReady) return;
      target = {x:0, y:0, active:false};
      root.classList.remove('is-active');
    }

    function setOrientationTarget(event) {
      if (reduced.matches) return;
      const gamma = Number(event.gamma);
      const beta = Number(event.beta);
      if (!Number.isFinite(gamma) || !Number.isFinite(beta)) return;
      target = {
        x:clamp(gamma / 28, -1, 1),
        y:clamp((beta - 45) / 28, -1, 1),
        active:true
      };
      orientationReady = true;
      root.classList.add('is-active');
    }

    function enableOrientation() {
      if (orientationPermissionRequested || !('DeviceOrientationEvent' in window)) return;
      orientationPermissionRequested = true;
      const permissionRequest = typeof DeviceOrientationEvent.requestPermission === 'function'
        ? DeviceOrientationEvent.requestPermission()
        : Promise.resolve('granted');
      Promise.resolve(permissionRequest).then(permission => {
        if (permission === 'granted' || permission === undefined) {
          window.addEventListener('deviceorientation', setOrientationTarget, {passive:true});
        }
      }).catch(() => {});
    }

    function resize() {
      if (!renderer || !camera) return;
      const rect = root.getBoundingClientRect();
      if (!rect.width || !rect.height) return;
      renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
      renderer.setSize(rect.width, rect.height, false);
      camera.aspect = rect.width / rect.height;
      camera.updateProjectionMatrix();
    }

    function tick() {
      const ease = reduced.matches ? 1 : .12;
      if (reduced.matches) target = {x:0, y:0, active:false};
      current.x += (target.x - current.x) * ease;
      current.y += (target.y - current.y) * ease;
      const rotateY = current.x * config.tilt;
      const rotateX = current.y * -config.tilt * .72;
      root.style.setProperty('--avatar-ry', `${(rotateY * -.24).toFixed(3)}deg`);
      root.style.setProperty('--avatar-rx', `${(rotateX * -.24).toFixed(3)}deg`);
      root.style.setProperty('--avatar-sheen-shift', `${(current.x * 34 + current.y * 10).toFixed(2)}px`);
      root.style.setProperty('--avatar-light-angle', `${(106 + current.x * 16 - current.y * 10).toFixed(2)}deg`);
      if (keyLight) {
        keyLight.position.x = -2.2 - current.x * 1.1;
        keyLight.position.y = 2.4 + current.y * .8;
      }
      if (mesh && camera) {
        const viewOffset = Math.tan(THREE.MathUtils.degToRad(config.tilt)) * camera.position.z;
        camera.position.x = current.x * viewOffset;
        camera.position.y = current.y * -viewOffset * .72;
        camera.lookAt(0, 0, .08);
      } else {
        root.style.setProperty('--avatar-sx', `${(current.x * config.displacementScale * 120).toFixed(2)}px`);
        root.style.setProperty('--avatar-sy', `${(current.y * config.displacementScale * 60).toFixed(2)}px`);
      }
      if (visible && renderer && scene && camera) renderer.render(scene, camera);
      requestAnimationFrame(tick);
    }

    function initThree() {
      if (!window.THREE || !canvas) return;
      scene = new THREE.Scene();
      camera = new THREE.PerspectiveCamera(28, 1, .1, 100);
      camera.position.z = 5.6;
      renderer = new THREE.WebGLRenderer({canvas, alpha:true, antialias:true, premultipliedAlpha:true});
      renderer.outputColorSpace = THREE.SRGBColorSpace;
      renderer.setClearColor(0x000000, 0);
      scene.add(new THREE.AmbientLight(0xffffff, .92));
      keyLight = new THREE.DirectionalLight(0xffffff, .56);
      keyLight.position.set(-2.2, 2.4, 4);
      scene.add(keyLight);
      const fillLight = new THREE.DirectionalLight(0xd8e4ff, .14);
      fillLight.position.set(2, .5, 2);
      scene.add(fillLight);
      const loader = new THREE.TextureLoader();
      const avatarAssets = window.__CKY_AVATAR_ASSETS__ || {};
      loader.load(avatarAssets.color || 'avatar-cutout.png', colorTexture => {
        loader.load(avatarAssets.depth || 'avatar-depth-soft.png', depthTexture => {
          try {
            colorTexture.colorSpace = THREE.SRGBColorSpace;
            depthTexture.colorSpace = THREE.NoColorSpace;
            const aspect = colorTexture.image.height / colorTexture.image.width;
            const geometry = new THREE.PlaneGeometry(2, 2 * aspect, 160, 190);
            const depthCanvas = document.createElement('canvas');
            depthCanvas.width = depthTexture.image.naturalWidth || depthTexture.image.width;
            depthCanvas.height = depthTexture.image.naturalHeight || depthTexture.image.height;
            const depthContext = depthCanvas.getContext('2d', {willReadFrequently:true});
            depthContext.drawImage(depthTexture.image, 0, 0, depthCanvas.width, depthCanvas.height);
            const depthPixels = depthContext.getImageData(0, 0, depthCanvas.width, depthCanvas.height).data;
            const positions = geometry.attributes.position;
            const baseDepth = new Float32Array(positions.count);
            for (let i = 0; i < positions.count; i += 1) {
              const u = clamp((positions.getX(i) + 1) / 2, 0, 1);
              const v = clamp(1 - ((positions.getY(i) + aspect) / (2 * aspect)), 0, 1);
              const px = Math.min(depthCanvas.width - 1, Math.floor(u * (depthCanvas.width - 1)));
              const py = Math.min(depthCanvas.height - 1, Math.floor(v * (depthCanvas.height - 1)));
              baseDepth[i] = depthPixels[(py * depthCanvas.width + px) * 4] / 255;
            }
            const applyDepth = scale => {
              for (let i = 0; i < positions.count; i += 1) positions.setZ(i, baseDepth[i] * clamp(Number(scale), 0, .5));
              positions.needsUpdate = true;
              geometry.computeVertexNormals();
              geometry.attributes.normal.needsUpdate = true;
            };
            applyDepth(config.displacementScale);
            colorTexture.premultiplyAlpha = true;
            colorTexture.needsUpdate = true;
            const material = new THREE.MeshStandardMaterial({map:colorTexture, transparent:true, alphaTest:.22, alphaToCoverage:true, depthWrite:false, side:THREE.DoubleSide, roughness:.74, metalness:0});
            mesh = new THREE.Mesh(geometry, material);
            mesh.userData.applyDepth = applyDepth;
            scene.add(mesh);
            fallback?.classList.add('is-hidden');
            root.classList.add('is-ready');
            resize();
          } catch (_) {
            fallback?.classList.remove('is-hidden');
          }
        }, undefined, () => fallback?.classList.remove('is-hidden'));
      }, undefined, () => fallback?.classList.remove('is-hidden'));
    }

    root.addEventListener('pointerdown', event => {
      enableOrientation();
      if (event.pointerType !== 'mouse') setTarget(event);
    }, {passive:true});
    root.addEventListener('pointermove', event => {
      if (!orientationReady || event.pointerType === 'mouse') setTarget(event);
    }, {passive:true});
    root.addEventListener('pointerleave', resetTarget, {passive:true});
    root.addEventListener('pointercancel', resetTarget, {passive:true});
    root.addEventListener('pointerup', () => {
      if (orientationReady) return;
      window.clearTimeout(orientationResetTimer);
      orientationResetTimer = window.setTimeout(resetTarget, 180);
    }, {passive:true});
    window.addEventListener('storage', event => { if (event.key === STORAGE_KEY) applyConfig(); });
    if ('BroadcastChannel' in window) {
      const channel = new BroadcastChannel('cky-portfolio-sync');
      channel.addEventListener('message', event => { if (event.data?.type === 'avatar') applyConfig(); });
    }
    new ResizeObserver(resize).observe(root);
    if ('IntersectionObserver' in window) new IntersectionObserver(entries => { visible = entries[0]?.isIntersecting !== false; }, {rootMargin:'120px'}).observe(root);
    applyConfig();
    initThree();
    requestAnimationFrame(tick);
  });
})();



