const THREE = window.THREE;

export class ArthrokinematicsVisualizer {
  constructor(scene) {
    this.scene = scene;
    this.group = new THREE.Group();
    this.group.visible = true;
    this.scene.add(this.group);

    this.rollArrow = null;
    this.slideArrow = null;
    this.contactPointMesh = null;

    this.buildVisualizer();
  }

  buildVisualizer() {
    // Articular contact indicator dot
    const contactGeo = new THREE.SphereGeometry(0.018, 16, 16);
    const contactMat = new THREE.MeshBasicMaterial({ color: 0x38bdf8 });
    this.contactPointMesh = new THREE.Mesh(contactGeo, contactMat);
    this.group.add(this.contactPointMesh);

    // Roll Vector Arrow (Emerald Green)
    const rollDir = new THREE.Vector3(0, 1, 0);
    this.rollArrow = new THREE.ArrowHelper(rollDir, new THREE.Vector3(0, 0, 0), 0.12, 0x10b981, 0.035, 0.02);
    this.group.add(this.rollArrow);

    // Slide Vector Arrow (Bright Magenta / Rose)
    const slideDir = new THREE.Vector3(0, -1, 0);
    this.slideArrow = new THREE.ArrowHelper(slideDir, new THREE.Vector3(0, 0, 0), 0.12, 0xf43f5e, 0.035, 0.02);
    this.group.add(this.slideArrow);
  }

  update(jointPos, motionData, currentDeg) {
    if (!this.group.visible) return;

    // Anchor at joint contact location
    this.group.position.copy(jointPos);

    const isConvexOnConcave = motionData.arthrokinematics.rule.toLowerCase().includes('convex');
    const isConcaveOnConvex = motionData.arthrokinematics.rule.toLowerCase().includes('concave');

    // Determine direction based on motion and plane
    let rollDir = new THREE.Vector3(0, 1, 0);
    let slideDir = new THREE.Vector3(0, -1, 0);

    if (motionData.id.includes('shoulder_abduction')) {
      // Convex on concave: Superior roll, Inferior slide
      rollDir.set(0, 1, 0);
      slideDir.set(0, -1, 0);
    } else if (motionData.id.includes('elbow_flexion')) {
      // Concave on convex: Anterior roll, Anterior slide (same direction!)
      rollDir.set(0, 0.7, 0.7).normalize();
      slideDir.set(0, 0.7, 0.7).normalize();
    } else if (motionData.id.includes('knee_flexion')) {
      // Concave on convex (open chain): Posterior roll, Posterior slide (same direction!)
      rollDir.set(0, -0.6, -0.8).normalize();
      slideDir.set(0, -0.6, -0.8).normalize();
    } else if (motionData.id.includes('ankle_dorsiflexion')) {
      // Convex on concave: Anterior roll, Posterior slide
      rollDir.set(0, 0.5, 0.86).normalize();
      slideDir.set(0, -0.5, -0.86).normalize();
    } else if (motionData.id.includes('hip_flexion')) {
      // Convex on concave: Anterior/superior roll, Posterior/inferior slide
      rollDir.set(0, 0.8, 0.6).normalize();
      slideDir.set(0, -0.8, -0.6).normalize();
    } else {
      // General default: Convex opposite, Concave same
      if (isConvexOnConcave) {
        rollDir.set(0, 1, 0);
        slideDir.set(0, -1, 0);
      } else {
        rollDir.set(0, 1, 0);
        slideDir.set(0, 1, 0);
      }
    }

    this.rollArrow.setDirection(rollDir);
    this.slideArrow.setDirection(slideDir);

    // Animate arrow pulsing slightly with current motion value
    const pulse = 0.10 + Math.sin(Date.now() * 0.005) * 0.02;
    this.rollArrow.setLength(pulse, 0.035, 0.02);
    this.slideArrow.setLength(pulse, 0.035, 0.02);
  }

  setVisible(visible) {
    this.group.visible = visible;
  }
}
