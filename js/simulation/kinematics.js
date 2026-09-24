const THREE = window.THREE;

export class KinematicsEngine {
  constructor(skeletonModel) {
    this.model = skeletonModel;
    this.currentMotionId = null;
    this.currentValue = 0;
    this.isScapulaLocked = false;
    this.isImpinging = false;
    this.isWeightBearing = false; // Foot: WB Closed Chain vs NWB Open Chain
    this.isTenodesisPassive = true; // Hand: Tenodesis coupling active
    this.currentGrip = 'none'; // Prehension Grip preset
  }

  setScapulaLocked(locked) {
    this.isScapulaLocked = !!locked;
    if (this.currentMotionId) {
      this.applyMotion(this.currentMotionId, this.currentValue);
    }
  }

  setWeightBearing(isWb) {
    this.isWeightBearing = !!isWb;
    if (this.currentMotionId) {
      this.applyMotion(this.currentMotionId, this.currentValue);
    }
  }

  setTenodesis(isPassive) {
    this.isTenodesisPassive = !!isPassive;
    if (this.currentMotionId) {
      this.applyMotion(this.currentMotionId, this.currentValue);
    }
  }

  setGrip(gripId) {
    this.currentGrip = gripId;
    if (this.currentMotionId) {
      this.applyMotion(this.currentMotionId, this.currentValue);
    }
  }

  curlFingers(mcpRad, pipRad, dipRad, fingers = ['index', 'middle', 'ring', 'little'], convergence = false) {
    const joints = this.model.joints;
    const convergenceFactors = {
      index: { rotZ: -0.03, rotY: 0 },
      middle: { rotZ: 0, rotY: 0 },
      ring: { rotZ: 0.08, rotY: 0 },
      little: { rotZ: 0.16, rotY: -0.10 }
    };
    fingers.forEach(name => {
      if (joints[`r_finger_${name}_mcp`]) {
        joints[`r_finger_${name}_mcp`].rotation.x = -mcpRad;
        if (convergence && convergenceFactors[name]) {
          joints[`r_finger_${name}_mcp`].rotation.z = convergenceFactors[name].rotZ;
          joints[`r_finger_${name}_mcp`].rotation.y = convergenceFactors[name].rotY;
        }
      }
      if (joints[`r_finger_${name}_pip`]) joints[`r_finger_${name}_pip`].rotation.x = -pipRad;
      if (joints[`r_finger_${name}_dip`]) joints[`r_finger_${name}_dip`].rotation.x = -dipRad;
    });
  }

  setPathology(pathologyId) {
    this.currentPathology = pathologyId;
  }

  getScapulohumeralBreakdown(totalDeg = this.currentValue) {
    if (this.currentPathology === 'adhesive_capsulitis') {
      // In Frozen Shoulder: GH joint is severely restricted by capsular fibrosis (max ~25°)
      // Any elevation up to ~65° is driven almost entirely by scapular hiking compensation!
      const ghDeg = Math.min(25, totalDeg * 0.38);
      const stDeg = Math.min(40, totalDeg - ghDeg);
      return {
        ghDeg: Math.round(ghDeg),
        stDeg: Math.round(stDeg),
        maxGh: 120,
        maxSt: 60,
        totalDeg: Math.round(totalDeg),
        isLocked: false,
        isImpinging: false,
        isFrozen: true
      };
    }

    if (this.isScapulaLocked) {
      const ghDeg = Math.min(totalDeg, 120);
      const stDeg = 0;
      const isImpinging = totalDeg >= 120;
      return {
        ghDeg: Math.round(ghDeg),
        stDeg: 0,
        maxGh: 120,
        maxSt: 60,
        totalDeg: Math.round(totalDeg),
        isLocked: true,
        isImpinging
      };
    } else {
      let ghDeg = 0;
      let stDeg = 0;
      if (totalDeg <= 30) {
        // Setting phase
        ghDeg = totalDeg * (5 / 6);
        stDeg = totalDeg * (1 / 6);
      } else {
        // 2:1 synchronized ratio: reaches exactly 120° GH and 60° ST at 180°
        ghDeg = 25 + (totalDeg - 30) * (95 / 150);
        stDeg = 5 + (totalDeg - 30) * (55 / 150);
      }
      return {
        ghDeg: Math.round(ghDeg),
        stDeg: Math.round(stDeg),
        maxGh: 120,
        maxSt: 60,
        totalDeg: Math.round(totalDeg),
        isLocked: false,
        isImpinging: false
      };
    }
  }

  getFootBiomechanicsState(val = this.currentValue, motionId = this.currentMotionId) {
    if (!motionId) return null;
    const isPronation = motionId.includes('eversion') || motionId.includes('pronation');
    const isSupination = motionId.includes('inversion') || motionId.includes('supination');
    const isWindlass = motionId.includes('first_mtp_extension');

    let frontalDeg = 0;
    let transverseDeg = 0;
    let sagittalDeg = 0;
    let tnccLocked = false;
    let tibialRotDeg = 0;
    let tibialRotType = 'Neutral (0°)';
    let fasciaTensionPercent = 10;
    let mlaHeightMm = 15;
    let windlassActive = false;

    if (isPronation) {
      frontalDeg = Math.round(val * 0.85);
      transverseDeg = Math.round(val * 0.35);
      sagittalDeg = Math.round(val * 0.25);
      tnccLocked = false;
      if (this.isWeightBearing) {
        tibialRotDeg = Math.round(val * 0.55);
        tibialRotType = `Internal Rot. (${tibialRotDeg}°)`;
      }
      fasciaTensionPercent = Math.max(5, Math.round(15 - val * 0.4));
      mlaHeightMm = Math.max(8, Math.round(15 - val * 0.3));
    } else if (isSupination) {
      frontalDeg = Math.round(val * 0.85);
      transverseDeg = Math.round(val * 0.35);
      sagittalDeg = Math.round(val * 0.25);
      tnccLocked = true;
      if (this.isWeightBearing) {
        tibialRotDeg = Math.round(val * 0.45);
        tibialRotType = `External Rot. (${tibialRotDeg}°)`;
      }
      fasciaTensionPercent = Math.min(65, Math.round(15 + val * 0.9));
      mlaHeightMm = Math.min(22, Math.round(15 + val * 0.2));
    } else if (isWindlass) {
      windlassActive = val > 20;
      tnccLocked = val > 35;
      const sinVal = Math.sin(THREE.MathUtils.degToRad(val));
      fasciaTensionPercent = Math.round(15 + sinVal * 85);
      mlaHeightMm = Math.round(15 + sinVal * 9);
      if (this.isWeightBearing) {
        tibialRotDeg = Math.round(sinVal * 7);
        tibialRotType = `External Rot. (${tibialRotDeg}°)`;
      }
    }

    return {
      motionId,
      isPronation,
      isSupination,
      isWindlass,
      isWeightBearing: this.isWeightBearing,
      frontalDeg,
      transverseDeg,
      sagittalDeg,
      tnccLocked,
      tnccStatusText: tnccLocked ? '🔒 LOCKED (Rigid Propulsion Lever)' : '🔓 UNLOCKED (Flexible Shock Absorber)',
      tnccAxesText: tnccLocked ? 'Convergent / Crossed (36°)' : 'Parallel Axes (0°)',
      tibialRotDeg,
      tibialRotType,
      fasciaTensionPercent,
      mlaHeightMm,
      windlassActive
    };
  }

  getHandBiomechanicsState(val = this.currentValue, motionId = this.currentMotionId) {
    if (!motionId) return null;
    const isWrist = motionId.startsWith('wrist');
    const isThumbCmc = motionId.startsWith('thumb');
    const isGripActive = this.currentGrip !== 'none';

    let arthroRule = 'Standard Articular Gliding';
    let rollDir = 'Neutral';
    let slideDir = 'Neutral';
    let isOpposite = false;
    let tenodesisFlexionDeg = 0;
    let tenodesisStatusText = 'Tenodesis Inactive';

    if (motionId === 'thumb_cmc_abduction') {
      arthroRule = 'Convex-on-Concave (Orthogonal Saddle Rule)';
      rollDir = 'Palmar (Anterior)';
      slideDir = 'Dorsal (Posterior)';
      isOpposite = true;
    } else if (motionId === 'thumb_cmc_flexion') {
      arthroRule = 'Concave-on-Convex (Orthogonal Saddle Rule)';
      rollDir = 'Ulnar / Medial';
      slideDir = 'Ulnar / Medial (Same)';
      isOpposite = false;
    } else if (motionId === 'thumb_opposition') {
      arthroRule = 'Compound Triplanar Saddle Coupling';
      rollDir = 'Palmar-Ulnar Complex';
      slideDir = 'Axial Medial Rotation';
      isOpposite = true;
    } else if (motionId === 'wrist_extension') {
      arthroRule = 'Convex Proximal Carpals on Concave Radius';
      rollDir = 'Dorsal (Posterior)';
      slideDir = 'Palmar (Anterior)';
      isOpposite = true;
      if (this.isTenodesisPassive) {
        tenodesisFlexionDeg = Math.round(Math.min(1, val / 60) * 65);
        tenodesisStatusText = `Automatic Passive Grasp (${tenodesisFlexionDeg}° Finger Flexion)`;
      }
    } else if (motionId === 'wrist_flexion') {
      arthroRule = 'Convex Proximal Carpals on Concave Radius';
      rollDir = 'Palmar (Anterior)';
      slideDir = 'Dorsal (Posterior)';
      isOpposite = true;
      if (this.isTenodesisPassive) {
        tenodesisStatusText = 'Passive Finger Release (Flat Open Hand)';
      }
    }

    return {
      motionId,
      isWrist,
      isThumbCmc,
      isGripActive,
      currentGrip: this.currentGrip,
      isTenodesisPassive: this.isTenodesisPassive,
      arthroRule,
      rollDir,
      slideDir,
      isOpposite,
      tenodesisFlexionDeg,
      tenodesisStatusText
    };
  }

  applyGrip(gripId) {
    const joints = this.model.joints;
    if (gripId === 'power_grip') {
      if (joints['r_wrist']) {
        joints['r_wrist'].rotation.x = THREE.MathUtils.degToRad(25);
        joints['r_wrist'].rotation.z = -THREE.MathUtils.degToRad(10);
      }
      // Authentic Flexion Cascade & Ulnar Convergence toward scaphoid tubercle (Neumann Ch. 8)
      // Index: 55° / 85° / 50°
      if (joints['r_finger_index_mcp']) joints['r_finger_index_mcp'].rotation.set(-0.96, 0, -0.04);
      if (joints['r_finger_index_pip']) joints['r_finger_index_pip'].rotation.set(-1.48, 0, 0);
      if (joints['r_finger_index_dip']) joints['r_finger_index_dip'].rotation.set(-0.87, 0, 0);

      // Middle: 65° / 90° / 55°
      if (joints['r_finger_middle_mcp']) joints['r_finger_middle_mcp'].rotation.set(-1.13, 0, 0);
      if (joints['r_finger_middle_pip']) joints['r_finger_middle_pip'].rotation.set(-1.57, 0, 0);
      if (joints['r_finger_middle_dip']) joints['r_finger_middle_dip'].rotation.set(-0.96, 0, 0);

      // Ring: 72° / 95° / 60°, convergent tilt
      if (joints['r_finger_ring_mcp']) joints['r_finger_ring_mcp'].rotation.set(-1.25, 0, 0.08);
      if (joints['r_finger_ring_pip']) joints['r_finger_ring_pip'].rotation.set(-1.65, 0, 0);
      if (joints['r_finger_ring_dip']) joints['r_finger_ring_dip'].rotation.set(-1.05, 0, 0);

      // Little: 80° / 100° / 65°, convergent tilt & slight opposition
      if (joints['r_finger_little_mcp']) joints['r_finger_little_mcp'].rotation.set(-1.40, -0.10, 0.16);
      if (joints['r_finger_little_pip']) joints['r_finger_little_pip'].rotation.set(-1.75, 0, 0);
      if (joints['r_finger_little_dip']) joints['r_finger_little_dip'].rotation.set(-1.13, 0, 0);

      // Thumb lock across digits: wraps firmly over index & middle proximal phalanges
      if (joints['r_thumb_cmc']) joints['r_thumb_cmc'].rotation.set(0.35, -0.30, -0.28);
      if (joints['r_thumb_mcp']) joints['r_thumb_mcp'].rotation.x = -0.75;
      if (joints['r_thumb_ip']) joints['r_thumb_ip'].rotation.x = -0.85;

    } else if (gripId === 'tip_pinch') {
      if (joints['r_wrist']) joints['r_wrist'].rotation.set(THREE.MathUtils.degToRad(15), 0, 0);

      // Perfect precision "O" ring (exact fingertip contact d < 1.8mm)
      if (joints['r_finger_index_mcp']) joints['r_finger_index_mcp'].rotation.set(-0.78, 0, -0.06);
      if (joints['r_finger_index_pip']) joints['r_finger_index_pip'].rotation.set(-1.10, 0, 0);
      if (joints['r_finger_index_dip']) joints['r_finger_index_dip'].rotation.set(-0.75, 0, 0);

      // Relaxed cascade for digits 3-5 (clears visual and functional space)
      if (joints['r_finger_middle_mcp']) joints['r_finger_middle_mcp'].rotation.set(-0.95, 0, 0);
      if (joints['r_finger_middle_pip']) joints['r_finger_middle_pip'].rotation.set(-1.22, 0, 0);
      if (joints['r_finger_middle_dip']) joints['r_finger_middle_dip'].rotation.set(-0.61, 0, 0);

      if (joints['r_finger_ring_mcp']) joints['r_finger_ring_mcp'].rotation.set(-1.12, 0, 0.05);
      if (joints['r_finger_ring_pip']) joints['r_finger_ring_pip'].rotation.set(-1.40, 0, 0);
      if (joints['r_finger_ring_dip']) joints['r_finger_ring_dip'].rotation.set(-0.70, 0, 0);

      if (joints['r_finger_little_mcp']) joints['r_finger_little_mcp'].rotation.set(-1.22, -0.05, 0.12);
      if (joints['r_finger_little_pip']) joints['r_finger_little_pip'].rotation.set(-1.48, 0, 0);
      if (joints['r_finger_little_dip']) joints['r_finger_little_dip'].rotation.set(-0.75, 0, 0);

      // Opposed and flexed thumb to meet index fingertip exactly
      if (joints['r_thumb_cmc']) joints['r_thumb_cmc'].rotation.set(0, -0.60, -0.10);
      if (joints['r_thumb_mcp']) joints['r_thumb_mcp'].rotation.set(-0.85, 0, 0);
      if (joints['r_thumb_ip']) joints['r_thumb_ip'].rotation.set(-1.00, 0, 0);

    } else if (gripId === 'key_pinch') {
      if (joints['r_wrist']) joints['r_wrist'].rotation.set(THREE.MathUtils.degToRad(20), 0, -THREE.MathUtils.degToRad(5));

      // Index finger forms rigid, stable shelf
      if (joints['r_finger_index_mcp']) joints['r_finger_index_mcp'].rotation.set(-0.62, 0, 0);
      if (joints['r_finger_index_pip']) joints['r_finger_index_pip'].rotation.set(-1.18, 0, 0);
      if (joints['r_finger_index_dip']) joints['r_finger_index_dip'].rotation.set(-0.55, 0, 0);

      // Digits 3-5 curled deep underneath into palm to buttress index
      if (joints['r_finger_middle_mcp']) joints['r_finger_middle_mcp'].rotation.set(-1.05, 0, 0);
      if (joints['r_finger_middle_pip']) joints['r_finger_middle_pip'].rotation.set(-1.40, 0, 0);
      if (joints['r_finger_middle_dip']) joints['r_finger_middle_dip'].rotation.set(-0.70, 0, 0);

      if (joints['r_finger_ring_mcp']) joints['r_finger_ring_mcp'].rotation.set(-1.18, 0, 0.06);
      if (joints['r_finger_ring_pip']) joints['r_finger_ring_pip'].rotation.set(-1.48, 0, 0);
      if (joints['r_finger_ring_dip']) joints['r_finger_ring_dip'].rotation.set(-0.75, 0, 0);

      if (joints['r_finger_little_mcp']) joints['r_finger_little_mcp'].rotation.set(-1.28, -0.06, 0.14);
      if (joints['r_finger_little_pip']) joints['r_finger_little_pip'].rotation.set(-1.52, 0, 0);
      if (joints['r_finger_little_dip']) joints['r_finger_little_dip'].rotation.set(-0.80, 0, 0);

      // Thumb pulp presses against lateral/radial aspect of index middle phalanx
      if (joints['r_thumb_cmc']) joints['r_thumb_cmc'].rotation.set(0.12, -0.38, -0.28);
      if (joints['r_thumb_mcp']) joints['r_thumb_mcp'].rotation.set(-0.35, 0, 0);
      if (joints['r_thumb_ip']) joints['r_thumb_ip'].rotation.set(-0.15, 0, 0);

    } else if (gripId === 'spherical_grip') {
      if (joints['r_wrist']) joints['r_wrist'].rotation.set(THREE.MathUtils.degToRad(20), 0, 0);

      // Abducted digits cupping a spherical ball
      if (joints['r_finger_index_mcp']) joints['r_finger_index_mcp'].rotation.set(-0.70, 0, -0.16);
      if (joints['r_finger_index_pip']) joints['r_finger_index_pip'].rotation.set(-0.96, 0, 0);
      if (joints['r_finger_index_dip']) joints['r_finger_index_dip'].rotation.set(-0.52, 0, 0);

      if (joints['r_finger_middle_mcp']) joints['r_finger_middle_mcp'].rotation.set(-0.78, 0, 0);
      if (joints['r_finger_middle_pip']) joints['r_finger_middle_pip'].rotation.set(-1.05, 0, 0);
      if (joints['r_finger_middle_dip']) joints['r_finger_middle_dip'].rotation.set(-0.61, 0, 0);

      if (joints['r_finger_ring_mcp']) joints['r_finger_ring_mcp'].rotation.set(-0.85, 0, 0.12);
      if (joints['r_finger_ring_pip']) joints['r_finger_ring_pip'].rotation.set(-1.10, 0, 0);
      if (joints['r_finger_ring_dip']) joints['r_finger_ring_dip'].rotation.set(-0.65, 0, 0);

      if (joints['r_finger_little_mcp']) joints['r_finger_little_mcp'].rotation.set(-0.92, -0.08, 0.22);
      if (joints['r_finger_little_pip']) joints['r_finger_little_pip'].rotation.set(-1.15, 0, 0);
      if (joints['r_finger_little_dip']) joints['r_finger_little_dip'].rotation.set(-0.70, 0, 0);

      // Wide opposition
      if (joints['r_thumb_cmc']) joints['r_thumb_cmc'].rotation.set(0.45, -0.45, -0.20);
      if (joints['r_thumb_mcp']) joints['r_thumb_mcp'].rotation.set(-0.55, 0, 0);
      if (joints['r_thumb_ip']) joints['r_thumb_ip'].rotation.set(-0.50, 0, 0);

    } else if (gripId === 'open_hand') {
      if (joints['r_wrist']) joints['r_wrist'].rotation.set(0, 0, 0);

      // Gentle natural resting cascade
      if (joints['r_finger_index_mcp']) joints['r_finger_index_mcp'].rotation.set(-0.14, 0, 0);
      if (joints['r_finger_index_pip']) joints['r_finger_index_pip'].rotation.set(-0.18, 0, 0);
      if (joints['r_finger_index_dip']) joints['r_finger_index_dip'].rotation.set(-0.10, 0, 0);

      if (joints['r_finger_middle_mcp']) joints['r_finger_middle_mcp'].rotation.set(-0.20, 0, 0);
      if (joints['r_finger_middle_pip']) joints['r_finger_middle_pip'].rotation.set(-0.25, 0, 0);
      if (joints['r_finger_middle_dip']) joints['r_finger_middle_dip'].rotation.set(-0.12, 0, 0);

      if (joints['r_finger_ring_mcp']) joints['r_finger_ring_mcp'].rotation.set(-0.26, 0, 0.02);
      if (joints['r_finger_ring_pip']) joints['r_finger_ring_pip'].rotation.set(-0.30, 0, 0);
      if (joints['r_finger_ring_dip']) joints['r_finger_ring_dip'].rotation.set(-0.14, 0, 0);

      if (joints['r_finger_little_mcp']) joints['r_finger_little_mcp'].rotation.set(-0.32, 0, 0.04);
      if (joints['r_finger_little_pip']) joints['r_finger_little_pip'].rotation.set(-0.35, 0, 0);
      if (joints['r_finger_little_dip']) joints['r_finger_little_dip'].rotation.set(-0.16, 0, 0);

      if (joints['r_thumb_cmc']) joints['r_thumb_cmc'].rotation.set(0.2, 0.15, -0.45);
      if (joints['r_thumb_mcp']) joints['r_thumb_mcp'].rotation.set(0, 0, 0);
      if (joints['r_thumb_ip']) joints['r_thumb_ip'].rotation.set(0, 0, 0);
    }
  }

  applyMotion(motionId, value) {
    this.currentMotionId = motionId;
    this.currentValue = value;

    // Reset base rotations before applying specific pose
    this.model.resetAllPoses();

    const rad = THREE.MathUtils.degToRad(value);
    const joints = this.model.joints;

    switch (motionId) {
      // ----------------------------------------------------
      // CERVICAL SPINE
      // ----------------------------------------------------
      case 'cervical_flexion':
        if (joints['cervical']) joints['cervical'].rotation.x = rad * 0.65;
        if (joints['head']) joints['head'].rotation.x = rad * 0.35;
        break;

      case 'cervical_extension':
        if (joints['cervical']) joints['cervical'].rotation.x = -rad * 0.65;
        if (joints['head']) joints['head'].rotation.x = -rad * 0.35;
        break;

      case 'cervical_lateral_flexion':
        // Lateral flexion to right side (coupled with slight ipsilateral rotation)
        if (joints['cervical']) {
          joints['cervical'].rotation.z = -rad * 0.75;
          joints['cervical'].rotation.y = -rad * 0.15;
        }
        if (joints['head']) {
          joints['head'].rotation.z = -rad * 0.25;
        }
        break;

      case 'cervical_rotation':
        // C1-C2 atlantoaxial accounts for ~50%, C2-C7 for the rest
        if (joints['cervical']) joints['cervical'].rotation.y = -rad * 0.5;
        if (joints['head']) joints['head'].rotation.y = -rad * 0.5;
        break;

      // ----------------------------------------------------
      // THORACOLUMBAR SPINE
      // ----------------------------------------------------
      case 'thoracolumbar_flexion':
        if (joints['lumbar']) joints['lumbar'].rotation.x = rad * 0.65;
        if (joints['thoracic']) joints['thoracic'].rotation.x = rad * 0.35;
        break;

      case 'thoracolumbar_extension':
        if (joints['lumbar']) joints['lumbar'].rotation.x = -rad * 0.65;
        if (joints['thoracic']) joints['thoracic'].rotation.x = -rad * 0.35;
        break;

      case 'thoracolumbar_lat_flexion':
        if (joints['lumbar']) joints['lumbar'].rotation.z = -rad * 0.65;
        if (joints['thoracic']) joints['thoracic'].rotation.z = -rad * 0.35;
        break;

      case 'thoracolumbar_rotation':
        if (joints['thoracic']) joints['thoracic'].rotation.y = -rad * 0.85;
        if (joints['lumbar']) joints['lumbar'].rotation.y = -rad * 0.15;
        break;

      // ----------------------------------------------------
      // TEMPOROMANDIBULAR JOINT (TMJ)
      // ----------------------------------------------------
      case 'tmj_depression': {
        const mm = value;
        if (joints['tmj']) {
          // Phase 1 (0-25 mm): Condyle rolls posteriorly (hinge opening)
          const rollAngle = THREE.MathUtils.degToRad(Math.min(mm, 25) * 0.45);
          // Phase 2 (25-50 mm): Condyle-disc complex translates anterior-inferiorly
          const translation = Math.max(0, mm - 25) * 0.0006;
          const lateRoll = THREE.MathUtils.degToRad(Math.max(0, mm - 25) * 0.2);

          joints['tmj'].rotation.x = rollAngle + lateRoll;
          joints['tmj'].position.set(0, 0.05 - translation, 0.035 + translation * 0.8);
        }
        break;
      }

      // ----------------------------------------------------
      // SHOULDER COMPLEX
      // ----------------------------------------------------
      case 'shoulder_flexion': {
        const totalDeg = value;
        const breakdown = this.getScapulohumeralBreakdown(totalDeg);
        this.isImpinging = breakdown.isImpinging;

        const ghRad = THREE.MathUtils.degToRad(breakdown.ghDeg);
        const stRad = THREE.MathUtils.degToRad(breakdown.stDeg);

        if (joints['r_shoulder']) {
          // Pure sagittal forward elevation
          joints['r_shoulder'].rotation.x = -ghRad;
        }

        if (joints['r_scapula']) {
          const glideRatio = breakdown.stDeg / 60;
          // Upward rotation, posterior tilt, and protraction around ribcage
          joints['r_scapula'].rotation.z = THREE.MathUtils.degToRad(breakdown.stDeg * 0.35);
          joints['r_scapula'].rotation.x = -THREE.MathUtils.degToRad(breakdown.stDeg * 0.2);
          joints['r_scapula'].rotation.y = THREE.MathUtils.degToRad(breakdown.stDeg * 0.22);

          // Anterior glide around thorax in forward flexion
          joints['r_scapula'].position.x = 0.15 - glideRatio * 0.025;
          joints['r_scapula'].position.y = glideRatio * 0.022;
          joints['r_scapula'].position.z = -0.06 + glideRatio * 0.045;
        }

        if (joints['r_clavicle']) {
          // Clavicular elevation (+Z rotation) and slight protraction (+Y)
          joints['r_clavicle'].rotation.z = THREE.MathUtils.degToRad(breakdown.stDeg * 0.38);
          joints['r_clavicle'].rotation.y = THREE.MathUtils.degToRad(breakdown.stDeg * 0.18);
        }

        this.model.setImpingementState(this.isImpinging);
        break;
      }

      case 'shoulder_extension': {
        this.model.setImpingementState(false);
        if (joints['r_shoulder']) {
          joints['r_shoulder'].rotation.x = rad; // Posterior backward extension (0° to 60°)
        }
        break;
      }

      case 'shoulder_abduction': {
        const totalDeg = value;
        const breakdown = this.getScapulohumeralBreakdown(totalDeg);
        this.isImpinging = breakdown.isImpinging;

        const ghRad = THREE.MathUtils.degToRad(breakdown.ghDeg);
        const stRad = THREE.MathUtils.degToRad(breakdown.stDeg);
        const glideRatio = breakdown.stDeg / 60; // 0 to 1

        if (joints['r_shoulder']) {
          // Glenohumeral abduction
          joints['r_shoulder'].rotation.z = ghRad;
          // Humeral external rotation clearance above 60° (Neumann p. 154)
          if (!this.isScapulaLocked && totalDeg > 60) {
            const extRot = THREE.MathUtils.degToRad((totalDeg - 60) * 0.32);
            joints['r_shoulder'].rotation.y = extRot;
          }
        }

        if (joints['r_scapula']) {
          // 3D Scapular movement (Neumann Ch. 5):
          // 1. Upward rotation at AC joint: ~20° (synchronized with clavicular elevation ~24°)
          joints['r_scapula'].rotation.z = THREE.MathUtils.degToRad(breakdown.stDeg * 0.38);
          // 2. Posterior tilting: ~15° (tilts back, opening subacromial space, avoids anterior winging)
          joints['r_scapula'].rotation.x = -THREE.MathUtils.degToRad(breakdown.stDeg * 0.25);
          // 3. Ribcage curvature wrap (External rotation around curved thorax):
          joints['r_scapula'].rotation.y = -THREE.MathUtils.degToRad(breakdown.stDeg * 0.18);

          // 4. Scapulothoracic gliding translation (hugging the ribcage cylinder):
          // Serratus anterior keeps the inferior angle flush against the thorax,
          // preventing the scapular tip from flaring or protruding laterally into space!
          joints['r_scapula'].position.x = 0.15 - glideRatio * 0.038;
          joints['r_scapula'].position.y = glideRatio * 0.022;
          joints['r_scapula'].position.z = -0.06 + glideRatio * 0.025;
        }

        if (joints['r_clavicle']) {
          // Clavicular elevation at SC joint (+Z rotation raises lateral clavicle up ~24°)
          joints['r_clavicle'].rotation.z = THREE.MathUtils.degToRad(breakdown.stDeg * 0.4);
          // Clavicular retraction: slight posterior movement
          joints['r_clavicle'].rotation.y = -THREE.MathUtils.degToRad(breakdown.stDeg * 0.15);
        }

        this.model.setImpingementState(this.isImpinging);
        break;
      }

      case 'shoulder_adduction': {
        this.model.setImpingementState(false);
        if (joints['r_shoulder']) {
          joints['r_shoulder'].rotation.z = -rad; // Medial sweep across trunk (0° to 30°)
        }
        break;
      }

      case 'shoulder_external_rotation': {
        // Standard clinical test position: Arm abducted 90°, elbow flexed 90°
        // External rotation rotates forearm upward toward the ceiling (0° to 90°)
        if (joints['r_shoulder']) {
          joints['r_shoulder'].rotation.z = Math.PI / 2; // 90° abduction
          joints['r_shoulder'].rotation.x = -rad;        // External rotation upward
        }
        if (joints['r_elbow']) {
          joints['r_elbow'].rotation.x = -Math.PI / 2;   // 90° elbow flexion
        }
        break;
      }

      case 'shoulder_internal_rotation': {
        // Standard clinical test position: Arm abducted 90°, elbow flexed 90°
        // Internal rotation rotates forearm downward toward the floor (0° to 70°)
        if (joints['r_shoulder']) {
          joints['r_shoulder'].rotation.z = Math.PI / 2; // 90° abduction
          joints['r_shoulder'].rotation.x = rad;          // Internal rotation downward
        }
        if (joints['r_elbow']) {
          joints['r_elbow'].rotation.x = -Math.PI / 2;   // 90° elbow flexion
        }
        break;
      }

      // ----------------------------------------------------
      // ELBOW & FOREARM
      // ----------------------------------------------------
      case 'elbow_flexion':
        if (joints['r_shoulder']) joints['r_shoulder'].rotation.x = -THREE.MathUtils.degToRad(15);
        if (joints['r_elbow']) joints['r_elbow'].rotation.x = -rad; // Forearm flexes anteriorly & upward
        break;

      case 'elbow_extension':
        if (joints['r_shoulder']) joints['r_shoulder'].rotation.x = -THREE.MathUtils.degToRad(15);
        if (joints['r_elbow']) joints['r_elbow'].rotation.x = rad; // Straightens to 0° / hyperextension
        break;

      case 'forearm_pronation':
        // Test posture: elbow flexed 90°
        // Pronation: palm turns down, thumb rotates medially
        if (joints['r_elbow']) joints['r_elbow'].rotation.x = -Math.PI / 2;
        if (joints['r_forearm']) joints['r_forearm'].rotation.y = rad;
        break;

      case 'forearm_supination':
        // Supination: palm turns up, thumb rotates laterally
        if (joints['r_elbow']) joints['r_elbow'].rotation.x = -Math.PI / 2;
        if (joints['r_forearm']) joints['r_forearm'].rotation.y = -rad;
        break;

      // ----------------------------------------------------
      // WRIST & HAND COMPLEX
      // ----------------------------------------------------
      case 'wrist_flexion':
        if (joints['r_elbow']) joints['r_elbow'].rotation.x = -Math.PI / 2.5;
        if (joints['r_wrist']) joints['r_wrist'].rotation.x = -rad; // Palmar flexion anteriorly
        if (this.isTenodesisPassive) {
          // Passive extensor digitorum tension straightens fingers flat / open
          this.curlFingers(0, 0, 0);
          if (joints['r_thumb_cmc']) joints['r_thumb_cmc'].rotation.set(0.2, 0.15, -0.45);
        }
        break;

      case 'wrist_extension':
        if (joints['r_elbow']) joints['r_elbow'].rotation.x = -Math.PI / 2.5;
        if (joints['r_wrist']) joints['r_wrist'].rotation.x = rad; // Dorsiflexion posteriorly
        if (this.isTenodesisPassive) {
          // Passive FDP/FDS flexor tension curls fingers automatically into a functional grasp!
          const ratio = Math.min(1, value / 65);
          const mcp = THREE.MathUtils.degToRad(55 * ratio);
          const pip = THREE.MathUtils.degToRad(70 * ratio);
          const dip = THREE.MathUtils.degToRad(40 * ratio);
          this.curlFingers(mcp, pip, dip);
          if (joints['r_thumb_cmc']) {
            joints['r_thumb_cmc'].rotation.y = 0.15 + ratio * 0.35;
          }
        }
        break;

      case 'wrist_radial_deviation':
        if (joints['r_elbow']) joints['r_elbow'].rotation.x = -Math.PI / 2.5;
        if (joints['r_wrist']) joints['r_wrist'].rotation.z = rad; // Deviates towards thumb (+X)
        break;

      case 'wrist_ulnar_deviation':
        if (joints['r_elbow']) joints['r_elbow'].rotation.x = -Math.PI / 2.5;
        if (joints['r_wrist']) joints['r_wrist'].rotation.z = -rad; // Deviates towards pinky (-X)
        break;

      case 'thumb_cmc_abduction': {
        if (joints['r_elbow']) joints['r_elbow'].rotation.x = -Math.PI / 2.5;
        if (joints['r_thumb_cmc']) {
          // Palmar abduction: rolls palmarward (+Y), slides dorsalward
          joints['r_thumb_cmc'].rotation.y = 0.15 + rad * 0.85;
          joints['r_thumb_cmc'].rotation.x = 0.2 + rad * 0.25;
        }
        break;
      }

      case 'thumb_cmc_flexion': {
        if (joints['r_elbow']) joints['r_elbow'].rotation.x = -Math.PI / 2.5;
        if (joints['r_thumb_cmc']) {
          // Flexion across palm: sweeps medially (-Z)
          joints['r_thumb_cmc'].rotation.z = -0.45 - rad * 0.75;
          joints['r_thumb_cmc'].rotation.x = 0.2 - rad * 0.2;
        }
        break;
      }

      case 'thumb_opposition': {
        if (joints['r_elbow']) joints['r_elbow'].rotation.x = -Math.PI / 2.5;
        if (joints['r_thumb_cmc']) {
          // Coordinated Abduction + Medial Flexion + Axial Internal Rotation
          joints['r_thumb_cmc'].rotation.x = 0.2 + rad * 0.45;
          joints['r_thumb_cmc'].rotation.y = 0.15 + rad * 0.65;
          joints['r_thumb_cmc'].rotation.z = -0.45 - rad * 0.55;
        }
        if (joints['r_thumb_mcp']) joints['r_thumb_mcp'].rotation.x = -rad * 0.35;
        if (joints['r_thumb_ip']) joints['r_thumb_ip'].rotation.x = -rad * 0.30;
        // Little finger opposing cupping
        const oppFlex = rad * 0.25;
        if (joints['r_finger_little_mcp']) joints['r_finger_little_mcp'].rotation.x = -oppFlex;
        if (joints['r_finger_ring_mcp']) joints['r_finger_ring_mcp'].rotation.x = -oppFlex * 0.6;
        break;
      }

      // ----------------------------------------------------
      // HIP JOINT
      // ----------------------------------------------------
      case 'hip_flexion':
        if (joints['r_hip']) {
          joints['r_hip'].rotation.x = -rad; // Thigh swings forward anteriorly
        }
        if (joints['r_knee']) {
          joints['r_knee'].rotation.x = rad * 0.9; // Knee bends naturally to relax hamstrings
        }
        break;

      case 'hip_extension':
        if (joints['r_hip']) joints['r_hip'].rotation.x = rad; // Thigh swings backward posteriorly
        break;

      case 'hip_abduction':
        if (joints['r_hip']) joints['r_hip'].rotation.z = rad; // Leg swings laterally away from midline
        break;

      case 'hip_adduction':
        if (joints['r_hip']) joints['r_hip'].rotation.z = -rad; // Leg swings medially across midline
        break;

      case 'hip_internal_rotation':
        // Standard seated clinical test position:
        if (joints['r_hip']) {
          joints['r_hip'].rotation.x = -Math.PI / 2; // Thigh horizontal
          joints['r_hip'].rotation.y = -rad;         // Internal rotation swings lower leg laterally
        }
        if (joints['r_knee']) {
          joints['r_knee'].rotation.x = Math.PI / 2; // Knee flexed 90°
        }
        break;

      case 'hip_external_rotation':
        // Standard seated clinical test position:
        if (joints['r_hip']) {
          joints['r_hip'].rotation.x = -Math.PI / 2;
          joints['r_hip'].rotation.y = rad;          // External rotation swings lower leg medially
        }
        if (joints['r_knee']) {
          joints['r_knee'].rotation.x = Math.PI / 2;
        }
        break;

      // ----------------------------------------------------
      // KNEE JOINT
      // ----------------------------------------------------
      case 'knee_flexion':
        if (joints['r_hip']) joints['r_hip'].rotation.x = -THREE.MathUtils.degToRad(35);
        if (joints['r_knee']) joints['r_knee'].rotation.x = rad; // Shank bends posteriorly towards buttock
        break;

      case 'knee_extension': {
        if (joints['r_knee']) joints['r_knee'].rotation.x = -rad; // Hyperextension
        if (joints['r_tibia_axial']) {
          const terminalRatio = Math.max(0, (30 - Math.abs(value)) / 30);
          const screwHomeAngle = THREE.MathUtils.degToRad(10 * terminalRatio);
          joints['r_tibia_axial'].rotation.y = -screwHomeAngle; // Screw-home external rotation
        }
        break;
      }

      // ----------------------------------------------------
      // ANKLE & FOOT COMPLEX
      // ----------------------------------------------------
      case 'ankle_dorsiflexion':
        if (joints['r_ankle']) joints['r_ankle'].rotation.x = -rad; // Foot lifts up
        break;

      case 'ankle_plantarflexion':
        if (joints['r_ankle']) joints['r_ankle'].rotation.x = rad; // Foot points down
        break;

      case 'subtalar_inversion':
      case 'subtalar_supination': {
        if (joints['r_subtalar']) {
          joints['r_subtalar'].rotation.z = -rad * 0.85; // Inversion / Varus (tilts sole medially toward -X)
          joints['r_subtalar'].rotation.y = -rad * 0.35; // Adduction (toes point medially)
          joints['r_subtalar'].rotation.x = rad * 0.25;  // Plantarflexion
        }
        // TNCC Crossed / Converging lock (rigid lever)
        this.model.setTnccAxesState(false, 36);
        this.model.setPlantarFasciaTension(rad * 0.25);

        // Weight-Bearing Closed Chain Coupling
        if (this.isWeightBearing && joints['r_tibia_axial']) {
          // Supination drives Tibial External Rotation!
          joints['r_tibia_axial'].rotation.y = rad * 0.45;
        }
        break;
      }

      case 'subtalar_eversion':
      case 'subtalar_pronation': {
        if (joints['r_subtalar']) {
          joints['r_subtalar'].rotation.z = rad * 0.85;  // Eversion / Valgus (tilts sole laterally toward +X)
          joints['r_subtalar'].rotation.y = rad * 0.35;  // Abduction (toes point laterally)
          joints['r_subtalar'].rotation.x = -rad * 0.25; // Dorsiflexion
        }
        // TNCC Parallel alignment (unlocked shock absorber)
        this.model.setTnccAxesState(true, 0);
        this.model.setPlantarFasciaTension(0.08);

        // Weight-Bearing Closed Chain Coupling
        if (this.isWeightBearing && joints['r_tibia_axial']) {
          // Pronation drives Tibial Internal Rotation!
          joints['r_tibia_axial'].rotation.y = -rad * 0.55;
        }
        break;
      }

      case 'first_mtp_extension': {
        if (joints['r_first_mtp']) {
          joints['r_first_mtp'].rotation.x = -rad; // Great toe elevates
        }
        if (joints['r_toe_ip']) {
          joints['r_toe_ip'].rotation.x = -rad * 0.25;
        }
        // Windlass mechanism: Plantar aponeurosis winds around metatarsal head
        const sinRad = Math.sin(rad);
        if (joints['r_subtalar']) {
          joints['r_subtalar'].position.y = sinRad * 0.024; // Elevate MLA
          joints['r_subtalar'].rotation.z = -sinRad * 0.14;  // Inversion / Supination (Varus tilt)
        }
        const tensionRatio = Math.min(1.0, sinRad * 1.15);
        this.model.setPlantarFasciaTension(tensionRatio);
        this.model.setTnccAxesState(value < 35, 36);

        if (this.isWeightBearing && joints['r_tibia_axial']) {
          joints['r_tibia_axial'].rotation.y = sinRad * 0.25; // Tibial external rotation
        }
        break;
      }

      case 'first_mtp_flexion': {
        if (joints['r_first_mtp']) {
          joints['r_first_mtp'].rotation.x = rad; // Great toe flexes down
        }
        break;
      }

      default:
        console.warn(`Unrecognized motion ID: ${motionId}`);
    }

    // Apply Active Functional Prehension Grip Override if selected
    if (this.currentGrip !== 'none') {
      this.applyGrip(this.currentGrip);
    }
  }
}

