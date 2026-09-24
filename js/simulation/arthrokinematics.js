const THREE = window.THREE;

function drawRoundRect(ctx, x, y, w, h, r) {
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.lineTo(x + w - r, y);
  ctx.quadraticCurveTo(x + w, y, x + w, y + r);
  ctx.lineTo(x + w, y + h - r);
  ctx.quadraticCurveTo(x + w, y + h, x + w - r, y + h);
  ctx.lineTo(x + r, y + h);
  ctx.quadraticCurveTo(x, y + h, x, y + h - r);
  ctx.lineTo(x, y + r);
  ctx.quadraticCurveTo(x, y, x + r, y);
  ctx.closePath();
}

const textureCache = new Map();
function getBadgeTexture(text, bgColor) {
  const key = `${text}_${bgColor}`;
  if (textureCache.has(key)) return textureCache.get(key);
  const canvas = document.createElement('canvas');
  canvas.width = 256;
  canvas.height = 72;
  const ctx = canvas.getContext('2d');

  ctx.clearRect(0, 0, 256, 72);
  drawRoundRect(ctx, 6, 6, 244, 60, 18);
  ctx.fillStyle = bgColor;
  ctx.fill();
  ctx.strokeStyle = '#ffffff';
  ctx.lineWidth = 3.5;
  ctx.stroke();

  ctx.fillStyle = '#ffffff';
  ctx.font = 'bold 28px system-ui, -apple-system, sans-serif';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText(text, 128, 36);

  const texture = new THREE.CanvasTexture(canvas);
  texture.minFilter = THREE.LinearFilter;
  textureCache.set(key, texture);
  return texture;
}

/**
 * Biomechanical Arthrokinematic Vectors
 * Donald A. Neumann: Kinesiology of the Musculoskeletal System (3rd Ed.)
 * Coordinate System:
 *   +X: Right / Lateral (right limb)
 *   -X: Left / Medial
 *   +Y: Superior / Cranial
 *   -Y: Inferior / Caudal
 *   +Z: Anterior / Ventral
 *   -Z: Posterior / Dorsal
 */
export const MOTION_ARTHRO_VECTORS = {
  // --- CERVICAL SPINE ---
  cervical_flexion: {
    roll: [0, 0.45, 0.89],
    slide: [0, -0.45, -0.89],
    isConcave: false,
    labelRoll: 'Ant Roll',
    labelSlide: 'Post Slide'
  },
  cervical_extension: {
    roll: [0, -0.45, -0.89],
    slide: [0, 0.45, 0.89],
    isConcave: false,
    labelRoll: 'Post Roll',
    labelSlide: 'Ant Slide'
  },
  cervical_lateral_flexion: {
    roll: [0.89, -0.45, 0],
    slide: [-0.89, 0.45, 0],
    isConcave: false,
    labelRoll: 'Lat Roll',
    labelSlide: 'Med Slide'
  },
  cervical_rotation: {
    roll: [0.92, 0, -0.38],
    slide: [-0.92, 0, 0.38],
    isConcave: false,
    labelRoll: 'Rot Roll',
    labelSlide: 'Rot Slide'
  },

  // --- THORACOLUMBAR SPINE ---
  thoracolumbar_flexion: {
    roll: [0, 0.45, 0.89],
    slide: [0, 0.65, 0.76],
    isConcave: true,
    labelRoll: 'Ant Roll',
    labelSlide: 'Sup-Ant Slide'
  },
  thoracolumbar_extension: {
    roll: [0, -0.45, -0.89],
    slide: [0, -0.65, -0.76],
    isConcave: true,
    labelRoll: 'Post Roll',
    labelSlide: 'Inf-Post Slide'
  },
  thoracolumbar_lat_flexion: {
    roll: [0.89, -0.45, 0],
    slide: [-0.89, 0.45, 0],
    isConcave: false,
    labelRoll: 'Lat Roll',
    labelSlide: 'Med Slide'
  },
  thoracolumbar_rotation: {
    roll: [0.92, 0, -0.38],
    slide: [0.92, 0, -0.38],
    isConcave: true,
    labelRoll: 'Rot Roll',
    labelSlide: 'Facet Slide'
  },

  // --- TMJ ---
  tmj_depression: {
    roll: [0, -0.3, -0.95],
    slide: [0, -0.5, 0.86],
    isConcave: false,
    labelRoll: 'Post Roll',
    labelSlide: 'Ant-Inf Slide'
  },

  // --- SHOULDER COMPLEX (Glenohumeral - Convex on Concave) ---
  shoulder_abduction: {
    roll: [0, 1, 0],
    slide: [0, -1, 0],
    isConcave: false,
    labelRoll: 'Sup Roll',
    labelSlide: 'Inf Slide'
  },
  shoulder_adduction: {
    roll: [0, -1, 0],
    slide: [0, 1, 0],
    isConcave: false,
    labelRoll: 'Inf Roll',
    labelSlide: 'Sup Slide'
  },
  shoulder_flexion: {
    roll: [0, 0.35, 0.94],
    slide: [0, -0.35, -0.94],
    isConcave: false,
    labelRoll: 'Ant-Sup Roll',
    labelSlide: 'Post-Inf Slide'
  },
  shoulder_extension: {
    roll: [0, -0.35, -0.94],
    slide: [0, 0.35, 0.94],
    isConcave: false,
    labelRoll: 'Post-Inf Roll',
    labelSlide: 'Ant-Sup Slide'
  },
  shoulder_external_rotation: {
    roll: [0.15, 0, -0.99],
    slide: [-0.15, 0, 0.99],
    isConcave: false,
    labelRoll: 'Post Roll',
    labelSlide: 'Ant Slide'
  },
  shoulder_internal_rotation: {
    roll: [-0.15, 0, 0.99],
    slide: [0.15, 0, -0.99],
    isConcave: false,
    labelRoll: 'Ant Roll',
    labelSlide: 'Post Slide'
  },

  // --- ELBOW & FOREARM (Concave on Convex / Radioulnar) ---
  elbow_flexion: {
    roll: [0, 0.65, 0.76],
    slide: [0, 0.65, 0.76],
    isConcave: true,
    labelRoll: 'Ant Roll',
    labelSlide: 'Ant Slide'
  },
  elbow_extension: {
    roll: [0, -0.65, -0.76],
    slide: [0, -0.65, -0.76],
    isConcave: true,
    labelRoll: 'Post Roll',
    labelSlide: 'Post Slide'
  },
  forearm_pronation: {
    roll: [-0.92, 0, 0.38],
    slide: [-0.92, 0, 0.38],
    isConcave: true,
    labelRoll: 'Palmar Roll',
    labelSlide: 'Palmar Slide'
  },
  forearm_supination: {
    roll: [0.92, 0, -0.38],
    slide: [0.92, 0, -0.38],
    isConcave: true,
    labelRoll: 'Dorsal Roll',
    labelSlide: 'Dorsal Slide'
  },

  // --- WRIST & HAND COMPLEX ---
  wrist_flexion: {
    roll: [0, 0.15, 0.99],
    slide: [0, -0.15, -0.99],
    isConcave: false,
    labelRoll: 'Palmar Roll',
    labelSlide: 'Dorsal Slide'
  },
  wrist_extension: {
    roll: [0, -0.15, -0.99],
    slide: [0, 0.15, 0.99],
    isConcave: false,
    labelRoll: 'Dorsal Roll',
    labelSlide: 'Palmar Slide'
  },
  wrist_radial_deviation: {
    roll: [0.99, 0.12, 0],
    slide: [-0.99, -0.12, 0],
    isConcave: false,
    labelRoll: 'Radial Roll',
    labelSlide: 'Ulnar Slide'
  },
  wrist_ulnar_deviation: {
    roll: [-0.99, -0.12, 0],
    slide: [0.99, 0.12, 0],
    isConcave: false,
    labelRoll: 'Ulnar Roll',
    labelSlide: 'Radial Slide'
  },
  thumb_cmc_abduction: {
    roll: [0.1, 0.2, 0.97],
    slide: [-0.1, -0.2, -0.97],
    isConcave: false,
    labelRoll: 'Palmar Roll',
    labelSlide: 'Dorsal Slide'
  },
  thumb_cmc_flexion: {
    roll: [-0.97, -0.15, 0.15],
    slide: [-0.97, -0.15, 0.15],
    isConcave: true,
    labelRoll: 'Ulnar Roll',
    labelSlide: 'Ulnar Slide'
  },
  thumb_opposition: {
    roll: [-0.7, 0.3, 0.65],
    slide: [0.7, -0.3, -0.65],
    isConcave: false,
    labelRoll: 'Med-Ant Roll',
    labelSlide: 'Lat-Post Slide'
  },

  // --- HIP JOINT (Convex on Concave) ---
  hip_flexion: {
    roll: [0, 0.55, 0.83],
    slide: [0, -0.55, -0.83],
    isConcave: false,
    labelRoll: 'Ant-Sup Roll',
    labelSlide: 'Post-Inf Slide'
  },
  hip_extension: {
    roll: [0, -0.55, -0.83],
    slide: [0, 0.55, 0.83],
    isConcave: false,
    labelRoll: 'Post-Inf Roll',
    labelSlide: 'Ant-Sup Slide'
  },
  hip_abduction: {
    roll: [0.75, 0.66, 0],
    slide: [-0.75, -0.66, 0],
    isConcave: false,
    labelRoll: 'Sup-Lat Roll',
    labelSlide: 'Inf-Med Slide'
  },
  hip_adduction: {
    roll: [-0.75, -0.66, 0],
    slide: [0.75, 0.66, 0],
    isConcave: false,
    labelRoll: 'Inf-Med Roll',
    labelSlide: 'Sup-Lat Slide'
  },
  hip_external_rotation: {
    roll: [0.2, 0, -0.98],
    slide: [-0.2, 0, 0.98],
    isConcave: false,
    labelRoll: 'Post Roll',
    labelSlide: 'Ant Slide'
  },
  hip_internal_rotation: {
    roll: [-0.2, 0, 0.98],
    slide: [0.2, 0, -0.98],
    isConcave: false,
    labelRoll: 'Ant Roll',
    labelSlide: 'Post Slide'
  },

  // --- KNEE JOINT (Open Chain: Concave on Convex) ---
  knee_flexion: {
    roll: [0, 0.45, -0.89],
    slide: [0, 0.45, -0.89],
    isConcave: true,
    labelRoll: 'Post Roll',
    labelSlide: 'Post Slide'
  },
  knee_extension: {
    roll: [0, 0.45, 0.89],
    slide: [0, 0.45, 0.89],
    isConcave: true,
    labelRoll: 'Ant Roll',
    labelSlide: 'Ant Slide'
  },

  // --- ANKLE & FOOT COMPLEX ---
  ankle_dorsiflexion: {
    roll: [0, 0.35, 0.94],
    slide: [0, -0.35, -0.94],
    isConcave: false,
    labelRoll: 'Ant Roll',
    labelSlide: 'Post Slide'
  },
  ankle_plantarflexion: {
    roll: [0, -0.35, -0.94],
    slide: [0, 0.35, 0.94],
    isConcave: false,
    labelRoll: 'Post Roll',
    labelSlide: 'Ant Slide'
  },
  subtalar_inversion: {
    roll: [-0.88, 0.35, -0.32],
    slide: [0.88, -0.35, 0.32],
    isConcave: false,
    labelRoll: 'Medial Roll',
    labelSlide: 'Lateral Slide'
  },
  subtalar_eversion: {
    roll: [0.88, -0.35, 0.32],
    slide: [-0.88, 0.35, -0.32],
    isConcave: false,
    labelRoll: 'Lateral Roll',
    labelSlide: 'Medial Slide'
  },
  subtalar_pronation: {
    roll: [0.82, 0.3, 0.48],
    slide: [-0.82, -0.3, -0.48],
    isConcave: false,
    labelRoll: 'Evert-Ant Roll',
    labelSlide: 'Invert-Post Slide'
  },
  subtalar_supination: {
    roll: [-0.82, -0.3, -0.48],
    slide: [0.82, 0.3, 0.48],
    isConcave: false,
    labelRoll: 'Invert-Post Roll',
    labelSlide: 'Evert-Ant Slide'
  },
  first_mtp_extension: {
    roll: [0, 0.85, -0.53],
    slide: [0, 0.85, -0.53],
    isConcave: true,
    labelRoll: 'Dorsal Roll',
    labelSlide: 'Dorsal Slide'
  },
  first_mtp_flexion: {
    roll: [0, -0.85, 0.53],
    slide: [0, -0.85, 0.53],
    isConcave: true,
    labelRoll: 'Plantar Roll',
    labelSlide: 'Plantar Slide'
  }
};

export class ArthrokinematicsVisualizer {
  constructor(scene) {
    this.scene = scene;
    this.group = new THREE.Group();
    this.group.visible = true;
    this.scene.add(this.group);

    this.rollArrow = null;
    this.slideArrow = null;
    this.contactPointMesh = null;
    this.rollSprite = null;
    this.slideSprite = null;

    this.buildVisualizer();
  }

  buildVisualizer() {
    // Articular contact indicator dot (Glowing cyan sphere)
    const contactGeo = new THREE.SphereGeometry(0.018, 16, 16);
    const contactMat = new THREE.MeshBasicMaterial({
      color: 0x38bdf8,
      depthTest: false
    });
    this.contactPointMesh = new THREE.Mesh(contactGeo, contactMat);
    this.contactPointMesh.renderOrder = 997;
    this.group.add(this.contactPointMesh);

    // Roll Vector Arrow (Emerald Green)
    const rollDir = new THREE.Vector3(0, 1, 0);
    this.rollArrow = new THREE.ArrowHelper(rollDir, new THREE.Vector3(0, 0, 0), 0.13, 0x10b981, 0.04, 0.024);
    this.rollArrow.line.material.depthTest = false;
    this.rollArrow.line.renderOrder = 998;
    this.rollArrow.cone.material.depthTest = false;
    this.rollArrow.cone.renderOrder = 998;
    this.group.add(this.rollArrow);

    // Slide Vector Arrow (Bright Magenta / Crimson)
    const slideDir = new THREE.Vector3(0, -1, 0);
    this.slideArrow = new THREE.ArrowHelper(slideDir, new THREE.Vector3(0, 0, 0), 0.13, 0xf43f5e, 0.04, 0.024);
    this.slideArrow.line.material.depthTest = false;
    this.slideArrow.line.renderOrder = 998;
    this.slideArrow.cone.material.depthTest = false;
    this.slideArrow.cone.renderOrder = 998;
    this.group.add(this.slideArrow);

    // 3D Billboard text badges
    const rollSpriteMat = new THREE.SpriteMaterial({
      map: getBadgeTexture('ROLL', '#059669'),
      depthTest: false,
      depthWrite: false
    });
    this.rollSprite = new THREE.Sprite(rollSpriteMat);
    this.rollSprite.scale.set(0.072, 0.024, 1);
    this.rollSprite.renderOrder = 1000;
    this.group.add(this.rollSprite);

    const slideSpriteMat = new THREE.SpriteMaterial({
      map: getBadgeTexture('SLIDE', '#e11d48'),
      depthTest: false,
      depthWrite: false
    });
    this.slideSprite = new THREE.Sprite(slideSpriteMat);
    this.slideSprite.scale.set(0.072, 0.024, 1);
    this.slideSprite.renderOrder = 1000;
    this.group.add(this.slideSprite);
  }

  update(jointPos, motionData, currentDeg) {
    if (!this.group.visible) return;

    // Anchor at joint contact location
    this.group.position.copy(jointPos);

    const motionId = motionData?.id || '';
    const config = MOTION_ARTHRO_VECTORS[motionId];

    let rollDir = new THREE.Vector3(0, 1, 0);
    let slideDir = new THREE.Vector3(0, -1, 0);
    let labelRoll = 'ROLL';
    let labelSlide = 'SLIDE';
    let isSame = false;

    if (config) {
      rollDir.fromArray(config.roll).normalize();
      slideDir.fromArray(config.slide).normalize();
      labelRoll = config.labelRoll || 'ROLL';
      labelSlide = config.labelSlide || 'SLIDE';
      isSame = config.isConcave || rollDir.dot(slideDir) > 0.7;
    } else {
      const isConcave = motionData?.arthrokinematics?.rule?.toLowerCase().includes('concave');
      if (isConcave) {
        rollDir.set(0, 0.7, 0.7).normalize();
        slideDir.set(0, 0.7, 0.7).normalize();
        isSame = true;
      } else {
        rollDir.set(0, 1, 0);
        slideDir.set(0, -1, 0);
        isSame = false;
      }
    }

    // Dynamic length with subtle pulsing
    const pulse = 0.12 + Math.sin(Date.now() * 0.005) * 0.015;

    // Side-by-side parallel separation for Concave-on-Convex joints (same direction)
    // to prevent the slide arrow from completely obscuring the roll arrow
    if (isSame) {
      let perp = new THREE.Vector3().crossVectors(rollDir, new THREE.Vector3(0, 1, 0));
      if (perp.lengthSq() < 0.001) {
        perp.crossVectors(rollDir, new THREE.Vector3(1, 0, 0));
      }
      perp.normalize().multiplyScalar(0.034); // 3.4cm side-by-side separation

      this.rollArrow.position.copy(perp);
      this.slideArrow.position.copy(perp.clone().negate());
    } else {
      this.rollArrow.position.set(0, 0, 0);
      this.slideArrow.position.set(0, 0, 0);
    }

    this.rollArrow.setDirection(rollDir);
    this.slideArrow.setDirection(slideDir);
    this.rollArrow.setLength(pulse, 0.04, 0.024);
    this.slideArrow.setLength(pulse, 0.04, 0.024);

    // Stagger badges along vector axis for parallel joints to prevent badge overlap
    let rollDist = pulse + 0.038;
    let slideDist = pulse + 0.038;
    if (isSame) {
      rollDist = pulse + 0.052;
      slideDist = pulse + 0.022;
    }

    // Update 3D Billboard text badges
    this.rollSprite.material.map = getBadgeTexture(labelRoll, '#059669');
    this.rollSprite.position.copy(this.rollArrow.position).addScaledVector(rollDir, rollDist);

    this.slideSprite.material.map = getBadgeTexture(labelSlide, '#e11d48');
    this.slideSprite.position.copy(this.slideArrow.position).addScaledVector(slideDir, slideDist);
  }

  setVisible(visible) {
    this.group.visible = visible;
  }
}
