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

  curlFingers(mcpRad, pipRad, dipRad, fingers = ['index', 'middle', 'ring', 'little']) {
    const joints = this.model.joints;
    fingers.forEach(name => {
      if (joints[`r_finger_${name}_mcp`]) joints[`r_finger_${name}_mcp`].rotation.x = -mcpRad;
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
      // WRIST JOINT
      // ----------------------------------------------------
      case 'wrist_flexion':
        if (joints['r_elbow']) joints['r_elbow'].rotation.x = -Math.PI / 2.5;
        if (joints['r_wrist']) joints['r_wrist'].rotation.x = -rad; // Palmar flexion anteriorly
        break;

      case 'wrist_extension':
        if (joints['r_elbow']) joints['r_elbow'].rotation.x = -Math.PI / 2.5;
        if (joints['r_wrist']) joints['r_wrist'].rotation.x = rad; // Dorsiflexion posteriorly
        break;

      case 'wrist_radial_deviation':
        if (joints['r_elbow']) joints['r_elbow'].rotation.x = -Math.PI / 2.5;
        if (joints['r_wrist']) joints['r_wrist'].rotation.z = rad; // Deviates towards thumb (+X)
        break;

      case 'wrist_ulnar_deviation':
        if (joints['r_elbow']) joints['r_elbow'].rotation.x = -Math.PI / 2.5;
        if (joints['r_wrist']) joints['r_wrist'].rotation.z = -rad; // Deviates towards pinky (-X)
        break;

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
      // ANKLE & FOOT
      // ----------------------------------------------------
      case 'ankle_dorsiflexion':
        if (joints['r_ankle']) joints['r_ankle'].rotation.x = -rad; // Foot lifts up
        break;

      case 'ankle_plantarflexion':
        if (joints['r_ankle']) joints['r_ankle'].rotation.x = rad; // Foot points down
        break;

      case 'subtalar_inversion':
        if (joints['r_subtalar']) {
          joints['r_subtalar'].rotation.z = rad * 0.85; // Calcaneal varus tilt
          joints['r_subtalar'].rotation.y = rad * 0.3;  // Forefoot adduction
        }
        break;

      case 'subtalar_eversion':
        if (joints['r_subtalar']) {
          joints['r_subtalar'].rotation.z = -rad * 0.85; // Calcaneal valgus tilt
          joints['r_subtalar'].rotation.y = -rad * 0.3;  // Forefoot abduction
        }
        break;

      case 'first_mtp_extension': {
        if (joints['r_first_mtp']) {
          joints['r_first_mtp'].rotation.x = -rad; // Great toe elevates
        }
        // Windlass mechanism: Plantar aponeurosis winds around metatarsal head, elevating arch
        if (joints['r_subtalar']) {
          const archElevation = Math.sin(rad) * 0.02;
          joints['r_subtalar'].position.y = archElevation;
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
  }
}
