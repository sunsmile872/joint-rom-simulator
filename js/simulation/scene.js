const THREE = window.THREE;
const OrbitControls = (window.THREE && window.THREE.OrbitControls) || window.OrbitControls;

export class SimulationScene {
  constructor(containerElement) {
    this.container = containerElement;
    this.scene = null;
    this.camera = null;
    this.renderer = null;
    this.controls = null;
    this.grid = null;
    this.animId = null;
    this.currentCameraPreset = 'front';
    this.onUpdateCallbacks = [];

    this.init();
  }

  init() {
    const THREE = window.THREE;
    const width = this.container.clientWidth || 800;
    const height = this.container.clientHeight || 600;

    // Scene
    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color(0x060c1a); // Deep Navy
    this.scene.fog = new THREE.FogExp2(0x060c1a, 0.025);

    // Camera
    this.camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    this.camera.position.set(0, 1.4, 3.8);

    // Renderer
    this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: false });
    this.renderer.setSize(width, height);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    this.renderer.shadowMap.enabled = true;
    this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
    this.renderer.toneMappingExposure = 1.1;
    this.container.appendChild(this.renderer.domElement);

    // Controls
    const OrbitControlsClass = (THREE && THREE.OrbitControls) || window.OrbitControls;
    if (OrbitControlsClass) {
      this.controls = new OrbitControlsClass(this.camera, this.renderer.domElement);
      this.controls.enableDamping = true;
      this.controls.dampingFactor = 0.05;
      this.controls.target.set(0, 1.1, 0);
      this.controls.maxPolarAngle = Math.PI / 2 + 0.1;
      this.controls.minDistance = 0.6;
      this.controls.maxDistance = 6.0;
    }

    // Lighting
    this.setupLighting();

    // Studio Floor Grid
    this.setupFloor();

    // Handle Window Resizing
    window.addEventListener('resize', () => this.onWindowResize());

    // Start Render Loop
    this.animate = this.animate.bind(this);
    this.animate();
  }

  setupLighting() {
    // Ambient Light
    const ambientLight = new THREE.AmbientLight(0x2d3a5a, 1.2);
    this.scene.add(ambientLight);

    // Key Light (Teal medical tone)
    const keyLight = new THREE.DirectionalLight(0xe0f7fa, 1.6);
    keyLight.position.set(3, 4, 3);
    keyLight.castShadow = true;
    keyLight.shadow.mapSize.width = 1024;
    keyLight.shadow.mapSize.height = 1024;
    keyLight.shadow.camera.near = 0.5;
    keyLight.shadow.camera.far = 10;
    keyLight.shadow.camera.left = -2;
    keyLight.shadow.camera.right = 2;
    keyLight.shadow.camera.top = 2.5;
    keyLight.shadow.camera.bottom = -0.5;
    keyLight.shadow.bias = -0.001;
    this.scene.add(keyLight);

    // Fill Light (Soft Mint)
    const fillLight = new THREE.DirectionalLight(0x10b981, 0.6);
    fillLight.position.set(-3, 2, -2);
    this.scene.add(fillLight);

    // Rim / Back Light (Cyan)
    const rimLight = new THREE.DirectionalLight(0x06b6d4, 1.0);
    rimLight.position.set(0, 3, -3);
    this.scene.add(rimLight);
  }

  setupFloor() {
    // Elegant Medical Circular Grid Floor
    const gridHelper = new THREE.GridHelper(10, 30, 0x14b8a6, 0x1e293b);
    gridHelper.position.y = 0;
    this.scene.add(gridHelper);

    const floorGeo = new THREE.PlaneGeometry(14, 14);
    const floorMat = new THREE.MeshStandardMaterial({
      color: 0x070e1e,
      roughness: 0.85,
      metalness: 0.2
    });
    const floor = new THREE.Mesh(floorGeo, floorMat);
    floor.rotation.x = -Math.PI / 2;
    floor.position.y = -0.005;
    floor.receiveShadow = true;
    this.scene.add(floor);
  }

  setCameraPreset(preset, targetJointPos = null, instant = false) {
    this.currentCameraPreset = preset;
    const duration = 800;
    const startTime = performance.now();
    const startPos = this.camera.position.clone();
    const startTarget = this.controls.target.clone();

    let targetPos = new THREE.Vector3();
    let newTarget = targetJointPos ? targetJointPos.clone() : new THREE.Vector3(0, 1.1, 0);

    switch (preset) {
      case 'front':
        targetPos.set(0, 1.3, 3.2);
        newTarget.set(0, 1.1, 0);
        break;
      case 'lateral_right':
        targetPos.set(3.2, 1.3, 0);
        newTarget.set(0, 1.1, 0);
        break;
      case 'lateral_left':
        targetPos.set(-3.2, 1.3, 0);
        newTarget.set(0, 1.1, 0);
        break;
      case 'posterior':
        targetPos.set(0, 1.3, -3.2);
        newTarget.set(0, 1.1, 0);
        break;
      case 'superior':
        targetPos.set(0, 3.5, 0.5);
        newTarget.set(0, 1.1, 0);
        break;
      case 'joint_focus':
        if (targetJointPos) {
          targetPos.copy(targetJointPos).add(new THREE.Vector3(0.5, 0.2, 1.1));
          newTarget.copy(targetJointPos);
        } else {
          targetPos.set(0.6, 1.35, 1.2);
          newTarget.set(0.2, 1.3, 0);
        }
        break;
      default:
        targetPos.set(0, 1.3, 3.2);
    }

    if (instant) {
      this.camera.position.copy(targetPos);
      this.controls.target.copy(newTarget);
      this.controls.update();
      if (this.renderer && this.scene && this.camera) {
        this.renderer.render(this.scene, this.camera);
      }
      return;
    }

    // Smooth transition
    const tweenCamera = (time) => {
      const elapsed = time - startTime;
      const progress = Math.min(elapsed / duration, 1.0);
      const ease = 0.5 - Math.cos(progress * Math.PI) / 2; // Smooth cosine ease

      this.camera.position.lerpVectors(startPos, targetPos, ease);
      this.controls.target.lerpVectors(startTarget, newTarget, ease);

      if (progress < 1.0) {
        requestAnimationFrame(tweenCamera);
      }
    };
    requestAnimationFrame(tweenCamera);
  }

  onWindowResize() {
    if (!this.container || !this.renderer || !this.camera) return;
    const width = this.container.clientWidth;
    const height = this.container.clientHeight;
    this.camera.aspect = width / height;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(width, height);
  }

  addUpdateCallback(cb) {
    this.onUpdateCallbacks.push(cb);
  }

  animate() {
    this.animId = requestAnimationFrame(this.animate);
    if (this.controls) this.controls.update();

    for (const cb of this.onUpdateCallbacks) {
      cb();
    }

    if (this.renderer && this.scene && this.camera) {
      this.renderer.render(this.scene, this.camera);
    }
  }

  destroy() {
    if (this.animId) cancelAnimationFrame(this.animId);
    window.removeEventListener('resize', this.onWindowResize);
    if (this.renderer && this.renderer.domElement) {
      this.container.removeChild(this.renderer.domElement);
    }
  }
}
