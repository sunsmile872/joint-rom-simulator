const THREE = window.THREE;

export class VirtualGoniometer {
  constructor(scene) {
    this.scene = scene;
    this.group = new THREE.Group();
    this.group.visible = true;
    this.scene.add(this.group);

    this.fulcrumMesh = null;
    this.stationaryArm = null;
    this.movableArm = null;
    this.arcMesh = null;

    this.buildGoniometer();
  }

  buildGoniometer() {
    // 1. Fulcrum Disk (Protractor Dial)
    const dialGeo = new THREE.CylinderGeometry(0.085, 0.085, 0.006, 48);
    dialGeo.rotateX(Math.PI / 2);
    const dialMat = new THREE.MeshStandardMaterial({
      color: 0x091428,
      emissive: 0x0284c7,
      emissiveIntensity: 0.35,
      roughness: 0.25,
      metalness: 0.7,
      transparent: true,
      opacity: 0.88,
      side: THREE.DoubleSide
    });
    this.fulcrumMesh = new THREE.Mesh(dialGeo, dialMat);
    this.group.add(this.fulcrumMesh);

    // Degree Ticks on Fulcrum (0° to 360°, major every 30°, intermediate every 10°)
    const tickMat = new THREE.LineBasicMaterial({ color: 0x38bdf8, linewidth: 2 });
    const tickPoints = [];
    for (let i = 0; i < 360; i += 10) {
      const angle = THREE.MathUtils.degToRad(i);
      const isMajor = (i % 30 === 0);
      const isCardinal = (i % 90 === 0);
      const r1 = 0.066;
      const r2 = isCardinal ? 0.083 : (isMajor ? 0.078 : 0.072);
      tickPoints.push(
        Math.cos(angle) * r1, Math.sin(angle) * r1, 0.005,
        Math.cos(angle) * r2, Math.sin(angle) * r2, 0.005,
        Math.cos(angle) * r1, Math.sin(angle) * r1, -0.005,
        Math.cos(angle) * r2, Math.sin(angle) * r2, -0.005
      );
    }
    const tickGeo = new THREE.BufferGeometry();
    tickGeo.setAttribute('position', new THREE.Float32BufferAttribute(tickPoints, 3));
    const ticksLine = new THREE.LineSegments(tickGeo, tickMat);
    this.fulcrumMesh.add(ticksLine);

    // Center pivot rivet
    const rivetGeo = new THREE.CylinderGeometry(0.016, 0.016, 0.018, 20);
    rivetGeo.rotateX(Math.PI / 2);
    const rivetMat = new THREE.MeshStandardMaterial({
      color: 0x14b8a6,
      emissive: 0x0f766e,
      emissiveIntensity: 0.6,
      metalness: 0.9,
      roughness: 0.1
    });
    const rivet = new THREE.Mesh(rivetGeo, rivetMat);
    this.fulcrumMesh.add(rivet);

    // 2. Stationary Arm (Neutral anatomical reference axis - Silver Slate)
    const statArmGeo = new THREE.BoxGeometry(0.016, 0.32, 0.004);
    statArmGeo.translate(0, -0.16, 0.004); // Pivot at top (joint fulcrum)
    const statArmMat = new THREE.MeshStandardMaterial({
      color: 0x94a3b8,
      emissive: 0x334155,
      emissiveIntensity: 0.2,
      metalness: 0.5,
      roughness: 0.2,
      transparent: true,
      opacity: 0.92,
      side: THREE.DoubleSide
    });
    this.stationaryArm = new THREE.Mesh(statArmGeo, statArmMat);
    this.group.add(this.stationaryArm);

    // Stationary arm indicator line
    const statLineGeo = new THREE.BufferGeometry().setFromPoints([
      new THREE.Vector3(0, 0, 0.007),
      new THREE.Vector3(0, -0.32, 0.007)
    ]);
    const statLineMat = new THREE.LineBasicMaterial({ color: 0xffffff });
    this.stationaryArm.add(new THREE.Line(statLineGeo, statLineMat));

    // 3. Movable Arm (Dynamic tracking arm - Vibrant Mint/Teal)
    const movArmGroup = new THREE.Group();
    this.group.add(movArmGroup);
    this.movableArm = movArmGroup;

    const movArmGeo = new THREE.BoxGeometry(0.016, 0.32, 0.004);
    movArmGeo.translate(0, -0.16, 0.009); // Pivot at top
    const movArmMat = new THREE.MeshStandardMaterial({
      color: 0x10b981,
      emissive: 0x059669,
      emissiveIntensity: 0.6,
      metalness: 0.6,
      roughness: 0.15,
      transparent: true,
      opacity: 0.95,
      side: THREE.DoubleSide
    });
    const movArmMesh = new THREE.Mesh(movArmGeo, movArmMat);
    movArmGroup.add(movArmMesh);

    // Center indicator line & pointer tip on movable arm
    const centerLineGeo = new THREE.BufferGeometry().setFromPoints([
      new THREE.Vector3(0, 0, 0.012),
      new THREE.Vector3(0, -0.32, 0.012)
    ]);
    const centerLineMat = new THREE.LineBasicMaterial({ color: 0xffffff, linewidth: 2 });
    movArmGroup.add(new THREE.Line(centerLineGeo, centerLineMat));

    // Tip pointer chevron
    const tipGeo = new THREE.ConeGeometry(0.012, 0.024, 4);
    tipGeo.rotateZ(Math.PI);
    tipGeo.translate(0, -0.32, 0.009);
    const tipMesh = new THREE.Mesh(tipGeo, new THREE.MeshBasicMaterial({ color: 0x34d399 }));
    movArmGroup.add(tipMesh);

    // 4. Dynamic Angle Arc Sector
    this.updateArc(30, 1);
  }

  updateArc(angleDeg, rotDirection = 1) {
    if (this.arcMesh) {
      this.group.remove(this.arcMesh);
      if (this.arcMesh.geometry) this.arcMesh.geometry.dispose();
    }

    const rad = THREE.MathUtils.degToRad(Math.abs(angleDeg));
    if (rad < 0.005) return;

    const shape = new THREE.Shape();
    shape.moveTo(0, 0);
    const segments = 32;
    for (let i = 0; i <= segments; i++) {
      const theta = -Math.PI / 2 + (rad * i / segments) * rotDirection;
      shape.lineTo(Math.cos(theta) * 0.22, Math.sin(theta) * 0.22);
    }
    shape.lineTo(0, 0);

    const arcGeo = new THREE.ShapeGeometry(shape);
    const arcMat = new THREE.MeshBasicMaterial({
      color: 0x14b8a6,
      transparent: true,
      opacity: 0.42,
      side: THREE.DoubleSide
    });
    this.arcMesh = new THREE.Mesh(arcGeo, arcMat);
    this.arcMesh.position.set(0, 0, 0.003);
    this.group.add(this.arcMesh);
  }

  updatePose(motionId, angleVal, fulcrumWorldPos, plane = 'Sagittal') {
    if (!this.group.visible) return;

    // Determine motion characteristics
    let planeRot = new THREE.Euler(0, 0, 0);
    let surfaceOffset = new THREE.Vector3(0, 0, 0);
    let rotDirection = 1; // 1 = counter-clockwise in local 2D, -1 = clockwise

    // Clinical alignment based on standard goniometry (AAOS & Norkin & White)
    switch (motionId) {
      // --------------------------------------------------
      // SHOULDER
      // --------------------------------------------------
      case 'shoulder_flexion':
        // Fulcrum: Lateral aspect of greater tubercle
        // Sagittal plane, dial faces laterally (+X)
        // Moving arm flexes anteriorly & upward (+Z, +Y) -> rotDirection = -1
        planeRot.set(0, Math.PI / 2, 0);
        surfaceOffset.set(0.065, 0, 0);
        rotDirection = -1;
        break;

      case 'shoulder_extension':
        planeRot.set(0, Math.PI / 2, 0);
        surfaceOffset.set(0.065, 0, 0);
        rotDirection = 1;
        break;

      case 'shoulder_abduction':
        planeRot.set(0, 0, 0);
        surfaceOffset.set(0, 0, 0.065);
        rotDirection = 1;
        break;

      case 'shoulder_adduction':
        planeRot.set(0, 0, 0);
        surfaceOffset.set(0, 0, 0.065);
        rotDirection = -1;
        break;

      case 'shoulder_external_rotation':
      case 'shoulder_internal_rotation':
        // Fulcrum: Olecranon process
        planeRot.set(0, Math.PI / 2, 0);
        surfaceOffset.set(0.065, 0, 0);
        rotDirection = (motionId === 'shoulder_external_rotation') ? -1 : 1;
        break;

      // --------------------------------------------------
      // ELBOW & FOREARM
      // --------------------------------------------------
      case 'elbow_flexion':
        planeRot.set(0, Math.PI / 2, 0);
        surfaceOffset.set(0.055, 0, 0);
        rotDirection = -1;
        break;

      case 'elbow_extension':
        planeRot.set(0, Math.PI / 2, 0);
        surfaceOffset.set(0.055, 0, 0);
        rotDirection = 1;
        break;

      case 'forearm_pronation':
      case 'forearm_supination':
        planeRot.set(0, 0, 0);
        surfaceOffset.set(0, 0, 0.045);
        rotDirection = (motionId === 'forearm_pronation') ? 1 : -1;
        break;

      // --------------------------------------------------
      // WRIST
      // --------------------------------------------------
      case 'wrist_flexion':
        planeRot.set(0, Math.PI / 2, 0);
        surfaceOffset.set(0.045, 0, 0);
        rotDirection = -1;
        break;

      case 'wrist_extension':
        planeRot.set(0, Math.PI / 2, 0);
        surfaceOffset.set(0.045, 0, 0);
        rotDirection = 1;
        break;

      case 'wrist_radial_deviation':
        planeRot.set(0, 0, 0);
        surfaceOffset.set(0, 0, 0.04);
        rotDirection = 1;
        break;

      case 'wrist_ulnar_deviation':
        planeRot.set(0, 0, 0);
        surfaceOffset.set(0, 0, 0.04);
        rotDirection = -1;
        break;

      // --------------------------------------------------
      // HIP
      // --------------------------------------------------
      case 'hip_flexion':
        planeRot.set(0, Math.PI / 2, 0);
        surfaceOffset.set(0.075, 0, 0);
        rotDirection = -1;
        break;

      case 'hip_extension':
        planeRot.set(0, Math.PI / 2, 0);
        surfaceOffset.set(0.075, 0, 0);
        rotDirection = 1;
        break;

      case 'hip_abduction':
        planeRot.set(0, 0, 0);
        surfaceOffset.set(0, 0, 0.065);
        rotDirection = 1;
        break;

      case 'hip_adduction':
        planeRot.set(0, 0, 0);
        surfaceOffset.set(0, 0, 0.065);
        rotDirection = -1;
        break;

      case 'hip_internal_rotation':
      case 'hip_external_rotation':
        planeRot.set(0, 0, 0);
        surfaceOffset.set(0, 0, 0.065);
        rotDirection = (motionId === 'hip_internal_rotation') ? 1 : -1;
        break;

      // --------------------------------------------------
      // KNEE
      // --------------------------------------------------
      case 'knee_flexion':
        // Shank flexes POSTERIORLY (-Z) towards buttocks -> rotDirection = 1
        planeRot.set(0, Math.PI / 2, 0);
        surfaceOffset.set(0.065, 0, 0);
        rotDirection = 1;
        break;

      case 'knee_extension':
        planeRot.set(0, Math.PI / 2, 0);
        surfaceOffset.set(0.065, 0, 0);
        rotDirection = -1;
        break;

      // --------------------------------------------------
      // ANKLE & FOOT
      // --------------------------------------------------
      case 'ankle_dorsiflexion':
        planeRot.set(0, Math.PI / 2, 0);
        surfaceOffset.set(0.055, 0, 0);
        rotDirection = -1;
        break;

      case 'ankle_plantarflexion':
        planeRot.set(0, Math.PI / 2, 0);
        surfaceOffset.set(0.055, 0, 0);
        rotDirection = 1;
        break;

      case 'subtalar_inversion':
      case 'subtalar_supination':
        planeRot.set(0, 0, 0);
        surfaceOffset.set(0, 0, -0.065);
        rotDirection = -1;
        break;

      case 'subtalar_eversion':
      case 'subtalar_pronation':
        planeRot.set(0, 0, 0);
        surfaceOffset.set(0, 0, -0.065);
        rotDirection = 1;
        break;

      case 'first_mtp_extension':
      case 'first_mtp_flexion':
        planeRot.set(0, Math.PI / 2, 0);
        surfaceOffset.set(-0.045, 0, 0);
        rotDirection = (motionId === 'first_mtp_extension') ? -1 : 1;
        break;

      // --------------------------------------------------
      // SPINE & TMJ
      // --------------------------------------------------
      case 'cervical_flexion':
      case 'thoracolumbar_flexion':
        planeRot.set(0, Math.PI / 2, 0);
        surfaceOffset.set(0.06, 0, 0);
        rotDirection = -1;
        break;

      case 'cervical_extension':
      case 'thoracolumbar_extension':
        planeRot.set(0, Math.PI / 2, 0);
        surfaceOffset.set(0.06, 0, 0);
        rotDirection = 1;
        break;

      case 'cervical_lateral_flexion':
      case 'thoracolumbar_lat_flexion':
        planeRot.set(0, 0, 0);
        surfaceOffset.set(0, 0, 0.08);
        rotDirection = 1;
        break;

      default:
        if (plane === 'Sagittal') {
          planeRot.set(0, Math.PI / 2, 0);
          surfaceOffset.set(0.055, 0, 0);
          rotDirection = -1;
        } else if (plane === 'Frontal') {
          planeRot.set(0, 0, 0);
          surfaceOffset.set(0, 0, 0.055);
          rotDirection = 1;
        } else {
          planeRot.set(Math.PI / 2, 0, 0);
          surfaceOffset.set(0, 0.055, 0);
          rotDirection = 1;
        }
    }

    // Position at joint fulcrum + surface anatomical offset
    this.group.position.copy(fulcrumWorldPos).add(surfaceOffset);
    this.group.rotation.copy(planeRot);

    // Rotate movable arm to track anatomical segment with correct direction
    const rad = THREE.MathUtils.degToRad(angleVal);
    this.movableArm.rotation.z = rad * rotDirection;

    // Update the shaded angle sector in sync
    this.updateArc(angleVal, rotDirection);
  }

  setVisible(visible) {
    this.group.visible = visible;
  }
}

