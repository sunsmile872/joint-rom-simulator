const THREE = window.THREE;

export class SkeletonModel {
  constructor(scene) {
    this.scene = scene;
    this.root = new THREE.Group();
    this.joints = {};
    this.bones = {};
    this.meshes = {};
    this.activeHighlightMesh = null;

    // Materials
    this.boneMaterial = new THREE.MeshStandardMaterial({
      color: 0xe2e8f0,
      roughness: 0.35,
      metalness: 0.1,
    });

    this.jointHighlightMaterial = new THREE.MeshStandardMaterial({
      color: 0x14b8a6, // Teal
      emissive: 0x0d9488,
      emissiveIntensity: 0.6,
      roughness: 0.2,
      metalness: 0.3,
      transparent: true,
      opacity: 0.85
    });

    this.cartilageMaterial = new THREE.MeshStandardMaterial({
      color: 0x38bdf8, // Sky blue
      roughness: 0.4,
      metalness: 0.1,
      transparent: true,
      opacity: 0.6
    });

    this.buildSkeleton();
    this.scene.add(this.root);
  }

  createCylinderBone(radiusTop, radiusBottom, height, color = null) {
    const geo = new THREE.CylinderGeometry(radiusTop, radiusBottom, height, 16);
    // Shift pivot to top of cylinder so rotation happens naturally around joint
    geo.translate(0, -height / 2, 0);
    const mat = color ? this.boneMaterial.clone() : this.boneMaterial;
    if (color) mat.color.setHex(color);
    const mesh = new THREE.Mesh(geo, mat);
    mesh.castShadow = true;
    mesh.receiveShadow = true;
    return mesh;
  }

  createJointSphere(radius, isHighlighted = false) {
    const geo = new THREE.SphereGeometry(radius, 16, 16);
    const mat = isHighlighted ? this.jointHighlightMaterial : this.boneMaterial;
    const mesh = new THREE.Mesh(geo, mat);
    mesh.castShadow = true;
    mesh.receiveShadow = true;
    return mesh;
  }

  buildSkeleton() {
    // ----------------------------------------------------
    // PELVIS & BASE
    // ----------------------------------------------------
    const pelvisGroup = new THREE.Group();
    pelvisGroup.position.set(0, 0.98, 0);
    this.root.add(pelvisGroup);
    this.joints['pelvis'] = pelvisGroup;

    // Pelvic girdle mesh (sacrum + iliac crests)
    const iliumGeo = new THREE.TorusGeometry(0.16, 0.045, 12, 24, Math.PI);
    const iliumMesh = new THREE.Mesh(iliumGeo, this.boneMaterial);
    iliumMesh.rotation.x = Math.PI / 2;
    iliumMesh.position.set(0, 0, 0);
    pelvisGroup.add(iliumMesh);

    const sacrumGeo = new THREE.ConeGeometry(0.06, 0.12, 12);
    const sacrumMesh = new THREE.Mesh(sacrumGeo, this.boneMaterial);
    sacrumMesh.rotation.x = Math.PI;
    sacrumMesh.position.set(0, -0.04, -0.04);
    pelvisGroup.add(sacrumMesh);

    // ----------------------------------------------------
    // SPINE (LUMBAR -> THORACIC -> CERVICAL)
    // ----------------------------------------------------
    // Lumbar spine (L5-L1)
    const lumbarGroup = new THREE.Group();
    lumbarGroup.position.set(0, 0.05, 0);
    pelvisGroup.add(lumbarGroup);
    this.joints['lumbar'] = lumbarGroup;

    const lumbarMesh = this.createCylinderBone(0.045, 0.05, 0.16);
    lumbarMesh.position.set(0, 0.16, 0);
    lumbarGroup.add(lumbarMesh);

    // Thoracic spine & Ribcage (T12-T1)
    const thoracicGroup = new THREE.Group();
    thoracicGroup.position.set(0, 0.16, 0);
    lumbarGroup.add(thoracicGroup);
    this.joints['thoracic'] = thoracicGroup;

    const thoracicMesh = this.createCylinderBone(0.04, 0.045, 0.28);
    thoracicMesh.position.set(0, 0.28, 0);
    thoracicGroup.add(thoracicMesh);

    // Ribcage & Sternum
    const ribcageGeo = new THREE.SphereGeometry(0.18, 16, 12);
    ribcageGeo.scale(1.1, 1.4, 0.85);
    const ribcageMat = new THREE.MeshStandardMaterial({
      color: 0x94a3b8,
      wireframe: true,
      transparent: true,
      opacity: 0.45
    });
    const ribcageMesh = new THREE.Mesh(ribcageGeo, ribcageMat);
    ribcageMesh.position.set(0, 0.16, 0.01);
    thoracicGroup.add(ribcageMesh);

    // Sternum
    const sternumGeo = new THREE.BoxGeometry(0.045, 0.16, 0.02);
    const sternumMesh = new THREE.Mesh(sternumGeo, this.boneMaterial);
    sternumMesh.position.set(0, 0.17, 0.14);
    thoracicGroup.add(sternumMesh);

    // Cervical spine (C7-C1)
    const cervicalGroup = new THREE.Group();
    cervicalGroup.position.set(0, 0.28, 0);
    thoracicGroup.add(cervicalGroup);
    this.joints['cervical'] = cervicalGroup;

    const cervicalMesh = this.createCylinderBone(0.03, 0.035, 0.13);
    cervicalMesh.position.set(0, 0.13, 0);
    cervicalGroup.add(cervicalMesh);

    // Skull & Cranium
    const headGroup = new THREE.Group();
    headGroup.position.set(0, 0.13, 0);
    cervicalGroup.add(headGroup);
    this.joints['head'] = headGroup;

    // Cranium
    const skullGeo = new THREE.SphereGeometry(0.115, 20, 20);
    skullGeo.scale(0.9, 1.08, 1.05);
    const skullMesh = new THREE.Mesh(skullGeo, this.boneMaterial);
    skullMesh.position.set(0, 0.11, 0.01);
    headGroup.add(skullMesh);

    // Facial skeleton & Maxilla
    const maxillaGeo = new THREE.BoxGeometry(0.08, 0.065, 0.07);
    const maxillaMesh = new THREE.Mesh(maxillaGeo, this.boneMaterial);
    maxillaMesh.position.set(0, 0.06, 0.075);
    headGroup.add(maxillaMesh);

    // Mandible (TMJ articulation hinge!)
    const tmjGroup = new THREE.Group();
    tmjGroup.position.set(0, 0.05, 0.035); // TMJ condylar axis
    headGroup.add(tmjGroup);
    this.joints['tmj'] = tmjGroup;

    const mandibleGeo = new THREE.BoxGeometry(0.075, 0.04, 0.07);
    const mandibleMesh = new THREE.Mesh(mandibleGeo, this.boneMaterial);
    mandibleMesh.position.set(0, -0.03, 0.03);
    tmjGroup.add(mandibleMesh);

    // ----------------------------------------------------
    // UPPER EXTREMITY (RIGHT SIDE - Primary clinical focus)
    // ----------------------------------------------------
    // Sternoclavicular & Scapula
    const rClavicleGroup = new THREE.Group();
    rClavicleGroup.position.set(0.04, 0.26, 0.04);
    thoracicGroup.add(rClavicleGroup);
    this.joints['r_clavicle'] = rClavicleGroup;

    const rClavicleMesh = this.createCylinderBone(0.015, 0.015, 0.15);
    rClavicleMesh.rotation.z = -Math.PI / 2 + 0.1;
    rClavicleMesh.position.set(0, 0, 0);
    rClavicleGroup.add(rClavicleMesh);

    // Scapulothoracic Joint (Right Scapula)
    const rScapulaGroup = new THREE.Group();
    rScapulaGroup.position.set(0.15, 0, -0.06);
    rClavicleGroup.add(rScapulaGroup);
    this.joints['r_scapula'] = rScapulaGroup;

    // 1. Anatomical Scapular Blade (Body & Borders - Hugs Posterior Ribcage)
    const scapulaGeo = new THREE.BufferGeometry();
    const scapulaVerts = new Float32Array([
      // Anterior Surface (Costal Fossa)
      0.025, 0.01, 0.015,   -0.075, 0.02, -0.008,   -0.045, -0.115, 0.005,
      0.025, 0.01, 0.015,   -0.045, -0.115, 0.005,    0.01, -0.04, 0.015,
      // Posterior Surface (Infraspinous / Supraspinous)
      0.025, 0.01, 0.008,   -0.045, -0.115, -0.002,  -0.075, 0.02, -0.015,
      0.025, 0.01, 0.008,    0.01, -0.04, 0.008,     -0.045, -0.115, -0.002,
      // Medial Border Wall
      -0.075, 0.02, -0.008,  -0.075, 0.02, -0.015,   -0.045, -0.115, -0.002,
      -0.075, 0.02, -0.008,  -0.045, -0.115, -0.002, -0.045, -0.115, 0.005
    ]);
    scapulaGeo.setAttribute('position', new THREE.BufferAttribute(scapulaVerts, 3));
    scapulaGeo.computeVertexNormals();
    const scapulaMesh = new THREE.Mesh(scapulaGeo, this.boneMaterial);
    rScapulaGroup.add(scapulaMesh);
    this.meshes['r_scapula_blade'] = scapulaMesh;

    // 2. Spine of Scapula (Horizontal posterior ridge)
    const rSpineGeo = new THREE.BoxGeometry(0.09, 0.012, 0.014);
    const rSpineMesh = new THREE.Mesh(rSpineGeo, this.boneMaterial);
    rSpineMesh.position.set(-0.035, 0.015, -0.012);
    rSpineMesh.rotation.set(0, 0, 0.12);
    rScapulaGroup.add(rSpineMesh);

    // 3. Acromion Shelf (Anatomical roof arching over humeral head)
    const rAcromionGeo = new THREE.BoxGeometry(0.042, 0.014, 0.046);
    const rAcromionMesh = new THREE.Mesh(rAcromionGeo, this.boneMaterial);
    rAcromionMesh.position.set(0.035, 0.036, 0.02);
    rScapulaGroup.add(rAcromionMesh);
    this.meshes['r_acromion'] = rAcromionMesh;

    // 4. Coracoid Process (Anterior finger-like projection)
    const rCoracoidGeo = new THREE.BoxGeometry(0.014, 0.014, 0.038);
    const rCoracoidMesh = new THREE.Mesh(rCoracoidGeo, this.boneMaterial);
    rCoracoidMesh.position.set(0.012, 0.018, 0.048);
    rScapulaGroup.add(rCoracoidMesh);

    // 5. Subacromial Space Indicator (Bursa & Supraspinatus outlet)
    const bursaGeo = new THREE.CylinderGeometry(0.034, 0.034, 0.008, 16);
    bursaGeo.rotateX(Math.PI / 2);
    const bursaMat = new THREE.MeshStandardMaterial({
      color: 0x10b981,
      emissive: 0x059669,
      emissiveIntensity: 0.35,
      transparent: true,
      opacity: 0.65
    });
    const rBursaMesh = new THREE.Mesh(bursaGeo, bursaMat);
    rBursaMesh.position.set(0.035, 0.018, 0.02);
    rScapulaGroup.add(rBursaMesh);
    this.meshes['r_subacromial_bursa'] = rBursaMesh;

    // 6. Glenoid Fossa
    const glenoidMesh = this.createJointSphere(0.032, false);
    glenoidMesh.position.set(0.03, -0.01, 0.03);
    rScapulaGroup.add(glenoidMesh);

    // Glenohumeral Joint (Shoulder)
    const rShoulderGroup = new THREE.Group();
    rShoulderGroup.position.set(0.03, -0.01, 0.03);
    rScapulaGroup.add(rShoulderGroup);
    this.joints['r_shoulder'] = rShoulderGroup;

    // Humeral Head (Convex ball)
    const rHumeralHead = this.createJointSphere(0.042, true);
    rShoulderGroup.add(rHumeralHead);

    // Humerus Shaft
    const rHumerusMesh = this.createCylinderBone(0.03, 0.026, 0.32);
    rShoulderGroup.add(rHumerusMesh);

    // Elbow Joint (Humeroulnar & Humeroradial)
    const rElbowGroup = new THREE.Group();
    rElbowGroup.position.set(0, -0.32, 0);
    rShoulderGroup.add(rElbowGroup);
    this.joints['r_elbow'] = rElbowGroup;

    const rElbowJointMesh = this.createJointSphere(0.035, true);
    rElbowGroup.add(rElbowJointMesh);

    // Forearm (Radius & Ulna + Radioulnar Pronation/Supination pivot)
    const rForearmPronationGroup = new THREE.Group();
    rElbowGroup.add(rForearmPronationGroup);
    this.joints['r_forearm'] = rForearmPronationGroup;

    // Ulna (Stationary shaft along medial side of forearm: -X)
    const rUlnaMesh = this.createCylinderBone(0.018, 0.015, 0.27);
    rUlnaMesh.position.set(-0.014, 0, 0);
    rForearmPronationGroup.add(rUlnaMesh);

    // Radius (Shaft along lateral side of forearm: +X, rotates around ulna)
    const rRadiusGroup = new THREE.Group();
    rRadiusGroup.position.set(0.016, 0, 0);
    rForearmPronationGroup.add(rRadiusGroup);
    this.joints['r_radius'] = rRadiusGroup;

    const rRadiusMesh = this.createCylinderBone(0.018, 0.022, 0.27);
    rRadiusGroup.add(rRadiusMesh);

    // Wrist Joint (Radiocarpal & Midcarpal)
    const rWristGroup = new THREE.Group();
    rWristGroup.position.set(0, -0.27, 0);
    rForearmPronationGroup.add(rWristGroup);
    this.joints['r_wrist'] = rWristGroup;

    const rWristJointMesh = this.createJointSphere(0.028, true);
    rWristGroup.add(rWristJointMesh);

    // Hand & Fingers (Palm facing anteriorly +Z in anatomical neutral)
    const rHandGroup = new THREE.Group();
    rWristGroup.add(rHandGroup);
    this.joints['r_hand'] = rHandGroup;

    const rPalmMesh = new THREE.Mesh(new THREE.BoxGeometry(0.065, 0.09, 0.022), this.boneMaterial);
    rPalmMesh.position.set(0, -0.045, 0);
    rHandGroup.add(rPalmMesh);

    // Fingers MCP & IP (Digits 2-5)
    const rFingersGroup = new THREE.Group();
    rFingersGroup.position.set(0, -0.09, 0);
    rHandGroup.add(rFingersGroup);
    this.joints['r_fingers'] = rFingersGroup;

    const rFingersMesh = this.createCylinderBone(0.012, 0.009, 0.075);
    rFingersGroup.add(rFingersMesh);

    // Thumb (1st Ray - on LATERAL side +X pointing laterally/anteriorly)
    const rThumbCmcGroup = new THREE.Group();
    rThumbCmcGroup.position.set(0.038, -0.02, 0.008);
    rHandGroup.add(rThumbCmcGroup);
    this.joints['r_thumb'] = rThumbCmcGroup;

    const rThumbMesh = this.createCylinderBone(0.012, 0.009, 0.06);
    rThumbMesh.rotation.z = -Math.PI / 4;
    rThumbCmcGroup.add(rThumbMesh);

    // ----------------------------------------------------
    // LEFT UPPER EXTREMITY (Symmetrical Resting Posture)
    // ----------------------------------------------------
    const lClavicleGroup = new THREE.Group();
    lClavicleGroup.position.set(-0.04, 0.26, 0.04);
    thoracicGroup.add(lClavicleGroup);

    const lClavicleMesh = this.createCylinderBone(0.015, 0.015, 0.15);
    lClavicleMesh.rotation.z = Math.PI / 2 - 0.1;
    lClavicleGroup.add(lClavicleMesh);

    // Left Scapula
    const lScapulaGroup = new THREE.Group();
    lScapulaGroup.position.set(-0.15, 0, -0.06);
    lClavicleGroup.add(lScapulaGroup);

    const lScapulaGeo = new THREE.BufferGeometry();
    const lScapulaVerts = new Float32Array([
      -0.025, 0.01, 0.015,   0.075, 0.02, -0.008,   0.045, -0.115, 0.005,
      -0.025, 0.01, 0.015,   0.045, -0.115, 0.005,  -0.01, -0.04, 0.015,
      -0.025, 0.01, 0.008,   0.045, -0.115, -0.002,  0.075, 0.02, -0.015,
      -0.025, 0.01, 0.008,  -0.01, -0.04, 0.008,    0.045, -0.115, -0.002
    ]);
    lScapulaGeo.setAttribute('position', new THREE.BufferAttribute(lScapulaVerts, 3));
    lScapulaGeo.computeVertexNormals();
    lScapulaGroup.add(new THREE.Mesh(lScapulaGeo, this.boneMaterial));

    const lSpineMesh = new THREE.Mesh(new THREE.BoxGeometry(0.09, 0.012, 0.014), this.boneMaterial);
    lSpineMesh.position.set(0.035, 0.015, -0.012);
    lSpineMesh.rotation.set(0, 0, -0.12);
    lScapulaGroup.add(lSpineMesh);

    const lAcromionMesh = new THREE.Mesh(new THREE.BoxGeometry(0.042, 0.014, 0.046), this.boneMaterial);
    lAcromionMesh.position.set(-0.035, 0.036, 0.02);
    lScapulaGroup.add(lAcromionMesh);

    const lShoulderGroup = new THREE.Group();
    lShoulderGroup.position.set(-0.03, -0.01, 0.03);
    lScapulaGroup.add(lShoulderGroup);

    const lHumeralHead = this.createJointSphere(0.04, false);
    lShoulderGroup.add(lHumeralHead);

    const lHumerusMesh = this.createCylinderBone(0.028, 0.024, 0.32);
    lShoulderGroup.add(lHumerusMesh);

    const lElbowGroup = new THREE.Group();
    lElbowGroup.position.set(0, -0.32, 0);
    lShoulderGroup.add(lElbowGroup);

    const lForearmMesh = this.createCylinderBone(0.022, 0.018, 0.27);
    lElbowGroup.add(lForearmMesh);

    const lHandMesh = new THREE.Mesh(new THREE.BoxGeometry(0.06, 0.12, 0.02), this.boneMaterial);
    lHandMesh.position.set(0, -0.33, 0);
    lElbowGroup.add(lHandMesh);

    // ----------------------------------------------------
    // LOWER EXTREMITY (RIGHT SIDE - Primary clinical focus)
    // ----------------------------------------------------
    // Hip Joint (Coxofemoral)
    const rHipGroup = new THREE.Group();
    rHipGroup.position.set(0.12, -0.06, 0);
    pelvisGroup.add(rHipGroup);
    this.joints['r_hip'] = rHipGroup;

    // Femoral Head & Neck
    const rFemoralHead = this.createJointSphere(0.048, true);
    rHipGroup.add(rFemoralHead);

    // Greater Trochanter landmark
    const rGreaterTrochanter = new THREE.Mesh(new THREE.BoxGeometry(0.03, 0.04, 0.03), this.boneMaterial);
    rGreaterTrochanter.position.set(0.04, -0.04, 0);
    rHipGroup.add(rGreaterTrochanter);

    // Femur Shaft
    const rFemurMesh = this.createCylinderBone(0.036, 0.032, 0.44);
    rHipGroup.add(rFemurMesh);

    // Knee Joint (Tibiofemoral & Patellofemoral)
    const rKneeGroup = new THREE.Group();
    rKneeGroup.position.set(0, -0.44, 0);
    rHipGroup.add(rKneeGroup);
    this.joints['r_knee'] = rKneeGroup;

    const rKneeCondyleMesh = this.createJointSphere(0.045, true);
    rKneeGroup.add(rKneeCondyleMesh);

    // Patella (anterior knee cap)
    const rPatellaGeo = new THREE.SphereGeometry(0.026, 12, 12);
    rPatellaGeo.scale(1.0, 1.2, 0.5);
    const rPatellaMesh = new THREE.Mesh(rPatellaGeo, this.boneMaterial);
    rPatellaMesh.position.set(0, 0, 0.045);
    rKneeGroup.add(rPatellaMesh);

    // Tibial Screw-Home Rotation Pivot
    const rTibialRotationGroup = new THREE.Group();
    rKneeGroup.add(rTibialRotationGroup);
    this.joints['r_tibia_axial'] = rTibialRotationGroup;

    // Tibia & Fibula Shafts
    const rTibiaMesh = this.createCylinderBone(0.032, 0.026, 0.42);
    rTibialRotationGroup.add(rTibiaMesh);

    const rFibulaMesh = this.createCylinderBone(0.012, 0.012, 0.40);
    rFibulaMesh.position.set(0.034, 0, 0);
    rTibialRotationGroup.add(rFibulaMesh);

    // Ankle Joint (Talocrural Mortise)
    const rAnkleGroup = new THREE.Group();
    rAnkleGroup.position.set(0, -0.42, 0);
    rTibialRotationGroup.add(rAnkleGroup);
    this.joints['r_ankle'] = rAnkleGroup;

    const rAnkleJointMesh = this.createJointSphere(0.032, true);
    rAnkleGroup.add(rAnkleJointMesh);

    // Medial & Lateral Malleoli
    const rMalleolusLat = new THREE.Mesh(new THREE.BoxGeometry(0.018, 0.035, 0.02), this.boneMaterial);
    rMalleolusLat.position.set(0.032, 0.01, 0);
    rAnkleGroup.add(rMalleolusLat);

    const rMalleolusMed = new THREE.Mesh(new THREE.BoxGeometry(0.018, 0.03, 0.02), this.boneMaterial);
    rMalleolusMed.position.set(-0.028, 0.015, 0);
    rAnkleGroup.add(rMalleolusMed);

    // Subtalar & Transverse Tarsal (Inversion / Eversion pivot)
    const rSubtalarGroup = new THREE.Group();
    rAnkleGroup.add(rSubtalarGroup);
    this.joints['r_subtalar'] = rSubtalarGroup;

    // Calcaneus (Heel bone)
    const rCalcaneusGeo = new THREE.BoxGeometry(0.045, 0.04, 0.09);
    const rCalcaneusMesh = new THREE.Mesh(rCalcaneusGeo, this.boneMaterial);
    rCalcaneusMesh.position.set(0, -0.025, -0.03);
    rSubtalarGroup.add(rCalcaneusMesh);

    // Midfoot / Metatarsals
    const rMetatarsalsGeo = new THREE.BoxGeometry(0.065, 0.03, 0.12);
    const rMetatarsalsMesh = new THREE.Mesh(rMetatarsalsGeo, this.boneMaterial);
    rMetatarsalsMesh.position.set(0, -0.025, 0.065);
    rSubtalarGroup.add(rMetatarsalsMesh);

    // 1st Metatarsophalangeal Joint (1st MTP & Great Toe)
    const rFirstMtpGroup = new THREE.Group();
    rFirstMtpGroup.position.set(-0.02, -0.025, 0.125);
    rSubtalarGroup.add(rFirstMtpGroup);
    this.joints['r_first_mtp'] = rFirstMtpGroup;

    const rGreatToeMesh = new THREE.Mesh(new THREE.BoxGeometry(0.025, 0.022, 0.05), this.boneMaterial);
    rGreatToeMesh.position.set(0, 0, 0.025);
    rFirstMtpGroup.add(rGreatToeMesh);

    // ----------------------------------------------------
    // LEFT LOWER EXTREMITY (Symmetrical Stand)
    // ----------------------------------------------------
    const lHipGroup = new THREE.Group();
    lHipGroup.position.set(-0.12, -0.06, 0);
    pelvisGroup.add(lHipGroup);

    const lFemoralHead = this.createJointSphere(0.045, false);
    lHipGroup.add(lFemoralHead);

    const lFemurMesh = this.createCylinderBone(0.034, 0.03, 0.44);
    lHipGroup.add(lFemurMesh);

    const lKneeGroup = new THREE.Group();
    lKneeGroup.position.set(0, -0.44, 0);
    lHipGroup.add(lKneeGroup);

    const lTibiaMesh = this.createCylinderBone(0.03, 0.025, 0.42);
    lKneeGroup.add(lTibiaMesh);

    const lFootMesh = new THREE.Mesh(new THREE.BoxGeometry(0.07, 0.04, 0.18), this.boneMaterial);
    lFootMesh.position.set(0, -0.44, 0.04);
    lKneeGroup.add(lFootMesh);

    // Save default baseline transforms for all joint nodes
    this.initialTransforms = {};
    for (const key in this.joints) {
      const node = this.joints[key];
      this.initialTransforms[key] = {
        position: node.position.clone(),
        rotation: node.rotation.clone()
      };
    }
  }

  getJointPosition(jointId) {
    const node = this.joints[jointId];
    if (!node) return new THREE.Vector3(0, 1.1, 0);
    const worldPos = new THREE.Vector3();
    node.getWorldPosition(worldPos);
    return worldPos;
  }

  highlightJoint(jointKey) {
    // Reset any previous highlight ring
    if (this.activeHighlightMesh && this.activeHighlightMesh.parent) {
      this.activeHighlightMesh.parent.remove(this.activeHighlightMesh);
    }

    const jointNode = this.joints[jointKey];
    if (!jointNode) return;

    // Create a pulsing glowing medical target ring
    const ringGeo = new THREE.RingGeometry(0.06, 0.08, 32);
    const ringMat = new THREE.MeshBasicMaterial({
      color: 0x14b8a6,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.85
    });
    this.activeHighlightMesh = new THREE.Mesh(ringGeo, ringMat);
    this.activeHighlightMesh.rotation.x = Math.PI / 2;
    this.activeHighlightMesh.position.set(0, 0, 0);
    jointNode.add(this.activeHighlightMesh);
  }

  resetAllPoses() {
    for (const key in this.joints) {
      const node = this.joints[key];
      if (this.initialTransforms && this.initialTransforms[key]) {
        node.rotation.copy(this.initialTransforms[key].rotation);
        node.position.copy(this.initialTransforms[key].position);
      } else {
        node.rotation.set(0, 0, 0);
      }
    }
  }

  setImpingementState(isImpinging) {
    const bursa = this.meshes['r_subacromial_bursa'];
    const acromion = this.meshes['r_acromion'];
    if (bursa) {
      if (isImpinging) {
        bursa.material.color.setHex(0xf43f5e); // Pulsing Rose Red
        bursa.material.emissive.setHex(0xe11d48);
        bursa.material.emissiveIntensity = 0.95;
        bursa.scale.set(1.2, 0.2, 1.2); // Compressed / pinched subacromial space!
      } else {
        bursa.material.color.setHex(0x10b981); // Mint healthy space
        bursa.material.emissive.setHex(0x059669);
        bursa.material.emissiveIntensity = 0.35;
        bursa.scale.set(1, 1, 1); // Normal unhindered 10mm outlet
      }
    }
    if (acromion) {
      acromion.material = isImpinging ? this.highlightMaterial : this.boneMaterial;
    }
  }
}
