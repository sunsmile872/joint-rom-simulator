/**
 * Joint Range of Motion (ROM) & Biomechanical Dataset
 * Primary Literature References:
 * - Donald A. Neumann: Kinesiology of the Musculoskeletal System: Foundations for Rehabilitation (3rd Ed., Elsevier, 2018)
 * - David X. Cifu et al.: Braddom's Physical Medicine and Rehabilitation (6th/7th Ed., Elsevier, 2020)
 * - Helen J. Hislop et al.: Daniels and Worthingham's Muscle Testing (10th Ed., Saunders/Elsevier, 2018)
 * - American Academy of Orthopaedic Surgeons (AAOS) & AMA Guides to the Evaluation of Permanent Impairment
 */

export const JOINT_REGIONS = [
  { id: 'cervical', name: 'Cervical Spine', icon: '🦴' },
  { id: 'thoracolumbar', name: 'Thoracolumbar Spine', icon: '🧍' },
  { id: 'tmj', name: 'Temporomandibular (TMJ)', icon: '🗣️' },
  { id: 'shoulder', name: 'Shoulder Complex', icon: '💪' },
  { id: 'elbow_forearm', name: 'Elbow & Forearm', icon: '🦾' },
  { id: 'wrist', name: 'Wrist & Hand Complex', icon: '🖐️' },
  { id: 'hip', name: 'Hip Joint', icon: '🦵' },
  { id: 'knee', name: 'Knee Joint', icon: '🦿' },
  { id: 'ankle_foot', name: 'Ankle & Foot', icon: '🦶' },
];

export const ROM_DATA = {
  // ==========================================
  // CERVICAL SPINE
  // ==========================================
  cervical_flexion: {
    id: 'cervical_flexion',
    region: 'cervical',
    jointName: 'Cervical Spine (C0-C7)',
    motionName: 'Flexion',
    plane: 'Sagittal',
    axis: 'Coronal (Mediolateral)',
    normalMin: 0,
    normalMax: 45,
    unit: 'degrees',
    referenceRangeText: '0° – 45° (AAOS: 45°, Neumann: 45°–50°)',
    functionalRange: '35° – 40° (Reading, looking downward)',
    hypermobilityThreshold: 55,
    impingementRiskThreshold: 65,
    sliderMin: 0,
    sliderMax: 70,
    endFeel: {
      type: 'Firm (Tissue stretch)',
      description: 'Tension in posterior longitudinal ligament, ligamentum nuchae, ligamentum flavum, interspinous ligaments, and posterior cervical muscles (semispinalis capitis, trapezius).',
      abnormalEndFeel: 'Empty (acute pain/spasm) or Hard (anterior osteophytes impingement).'
    },
    arthrokinematics: {
      type: 'Apophyseal (Facet) Joint Gliding',
      rule: 'Bilateral symmetrical sliding',
      description: 'Inferior articular facets of superior vertebrae slide superiorly and anteriorly relative to the superior articular facets of the inferior vertebrae (Neumann Table 9.5). Atlanto-occipital (C0-C1): Convex occipital condyles roll anteriorly and slide posteriorly on concave superior facets of C1.',
      closePacked: 'Full extension',
      loosePacked: 'Midway between flexion and extension'
    },
    muscles: {
      primeMovers: [
        { name: 'Sternocleidomastoid (bilateral)', innervation: 'Accessory Nerve (CN XI), C2-C3 roots' },
        { name: 'Longus colli & Longus capitis', innervation: 'C1-C6 cervical ventral rami' },
        { name: 'Scalenus anterior', innervation: 'C4-C6 ventral rami' },
        { name: 'Rectus capitis anterior (C0-C1)', innervation: 'C1-C2 ventral rami' }
      ],
      synergists: ['Suprahyoid & Infrahyoid muscles', 'Platysma'],
      antagonists: ['Splenius capitis/cervicis', 'Semispinalis capitis', 'Upper trapezius', 'Suboccipitals']
    },
    goniometry: {
      position: 'Patient seated comfortably, thoracic and lumbar spine supported, head in neutral anatomical alignment.',
      fulcrum: 'External auditory meatus (EAM).',
      stationaryArm: 'Perpendicular to the floor (or parallel to vertical reference line).',
      movableArm: 'Aligned with the base of the nares (nostrils).',
      substitutions: 'Trunk flexion, thoracic kyphosis slouching, or mandibular protraction/jutting.'
    },
    citations: [
      { book: 'Neumann (3rd Ed)', chapter: 'Chapter 9: Axial Skeleton: Osteology and Arthrology', page: 'p. 368, Table 9.7' },
      { book: "Braddom's PM&R (7th Ed)", chapter: 'Physical Examination of the Musculoskeletal System', page: 'Table 2.3' },
      { book: 'Daniels & Worthingham (10th Ed)', chapter: 'Cervical Spine Muscle Testing', page: 'pp. 142–148' }
    ]
  },

  cervical_extension: {
    id: 'cervical_extension',
    region: 'cervical',
    jointName: 'Cervical Spine (C0-C7)',
    motionName: 'Extension',
    plane: 'Sagittal',
    axis: 'Coronal (Mediolateral)',
    normalMin: 0,
    normalMax: 45,
    unit: 'degrees',
    referenceRangeText: '0° – 45° (AAOS: 45°, Neumann: 75°–80° full craniocervical extension)',
    functionalRange: '40° – 50° (Looking up at high shelves, ceiling inspection)',
    hypermobilityThreshold: 75,
    impingementRiskThreshold: 85,
    sliderMin: 0,
    sliderMax: 90,
    endFeel: {
      type: 'Hard (Bone-to-bone) or Firm (Ligamentous)',
      description: 'Contact between posterior spinous processes / laminae or tension in anterior longitudinal ligament (ALL) and anterior cervical muscles.',
      abnormalEndFeel: 'Empty (cervical radiculopathy pain during Spurling maneuver).'
    },
    arthrokinematics: {
      type: 'Apophyseal (Facet) Joint Gliding',
      rule: 'Bilateral symmetrical sliding',
      description: 'Inferior articular facets of superior vertebrae slide inferiorly and posteriorly on the superior articular facets of inferior vertebrae. C0-C1: Occipital condyles roll posteriorly and slide anteriorly.',
      closePacked: 'Full extension',
      loosePacked: 'Slight flexion'
    },
    muscles: {
      primeMovers: [
        { name: 'Splenius capitis & cervicis', innervation: 'C2-C5 posterior rami (lateral branches)' },
        { name: 'Semispinalis capitis & cervicis', innervation: 'C1-C5 posterior rami' },
        { name: 'Upper Trapezius', innervation: 'Spinal Accessory Nerve (CN XI), C3-C4' },
        { name: 'Rectus capitis posterior major/minor & Obliquus capitis superior', innervation: 'Suboccipital nerve (C1 posterior ramus)' }
      ],
      synergists: ['Levator scapulae', 'Longissimus capitis/cervicis', 'Spinalis capitis'],
      antagonists: ['Sternocleidomastoid', 'Longus colli', 'Longus capitis']
    },
    goniometry: {
      position: 'Seated erect with back supported, neutral cervical posture.',
      fulcrum: 'External auditory meatus.',
      stationaryArm: 'Perpendicular to the floor.',
      movableArm: 'Aligned with the base of the nares.',
      substitutions: 'Trunk extension, lumbar hyperextension, shoulder elevation.'
    },
    citations: [
      { book: 'Neumann (3rd Ed)', chapter: 'Chapter 9: Axial Skeleton', page: 'p. 368, Table 9.7' },
      { book: "Braddom's PM&R (7th Ed)", chapter: 'Musculoskeletal Examination', page: 'Ch. 2' }
    ]
  },

  cervical_lateral_flexion: {
    id: 'cervical_lateral_flexion',
    region: 'cervical',
    jointName: 'Cervical Spine (C0-C7)',
    motionName: 'Lateral Flexion (Side Bending)',
    plane: 'Frontal',
    axis: 'Anteroposterior (Sagittal)',
    normalMin: 0,
    normalMax: 45,
    unit: 'degrees',
    referenceRangeText: '0° – 45° (AAOS: 45°, Neumann: 35°–40°)',
    functionalRange: '30° – 35° (Cradling telephone, tilted inspection)',
    hypermobilityThreshold: 55,
    impingementRiskThreshold: 65,
    sliderMin: 0,
    sliderMax: 65,
    endFeel: {
      type: 'Firm (Tissue stretch)',
      description: 'Tension in contralateral intertransverse ligaments, contralateral scalenes, trapezius, and lateral annular fibers.',
      abnormalEndFeel: 'Hard (early uncinate process / facet impingement in cervical spondylosis).'
    },
    arthrokinematics: {
      type: 'Coupled Apophyseal Gliding',
      rule: 'Ipsilateral inferior-posterior, Contralateral superior-anterior',
      description: 'The inferior articular facet on the side of lateral flexion slides inferiorly and slightly posteriorly; the contralateral inferior facet slides superiorly and anteriorly (Neumann p. 370). Coupled with slight ipsilateral axial rotation in mid-to-lower cervical spine (C2-C7).',
      closePacked: 'Full extension with ipsilateral rotation',
      loosePacked: 'Neutral'
    },
    muscles: {
      primeMovers: [
        { name: 'Scalenus anterior, medius, and posterior (ipsilateral)', innervation: 'C3-C8 anterior rami' },
        { name: 'Sternocleidomastoid (ipsilateral)', innervation: 'Spinal Accessory Nerve (CN XI)' },
        { name: 'Splenius capitis/cervicis (ipsilateral)', innervation: 'C2-C5 posterior rami' },
        { name: 'Levator scapulae', innervation: 'Dorsal scapular nerve (C5), C3-C4' }
      ],
      synergists: ['Intertransversarii', 'Longissimus cervicis', 'Rectus capitis lateralis'],
      antagonists: ['Contralateral lateral flexors']
    },
    goniometry: {
      position: 'Patient seated with spine supported, head upright.',
      fulcrum: 'Spinous process of C7 vertebra.',
      stationaryArm: 'Aligned vertically with the spinous processes of the thoracic vertebrae (perpendicular to floor).',
      movableArm: 'Aligned with the dorsal midline of the head (external occipital protuberance).',
      substitutions: 'Shoulder elevation, lateral trunk flexion, rotation of the head.'
    },
    citations: [
      { book: 'Neumann (3rd Ed)', chapter: 'Chapter 9: Axial Skeleton', page: 'p. 368, Table 9.7' },
      { book: "Braddom's PM&R (7th Ed)", chapter: 'Goniometry & Joint Assessment', page: 'Table 2.3' }
    ]
  },

  cervical_rotation: {
    id: 'cervical_rotation',
    region: 'cervical',
    jointName: 'Cervical Spine (C0-C7)',
    motionName: 'Axial Rotation',
    plane: 'Transverse (Horizontal)',
    axis: 'Longitudinal (Vertical)',
    normalMin: 0,
    normalMax: 70,
    unit: 'degrees',
    referenceRangeText: '0° – 70° (AAOS: 60°–80°, Neumann: 65°–75°)',
    functionalRange: '60° – 65° (Shoulder-check while driving, looking over shoulder)',
    hypermobilityThreshold: 85,
    impingementRiskThreshold: 95,
    sliderMin: 0,
    sliderMax: 90,
    endFeel: {
      type: 'Firm (Tissue stretch)',
      description: 'Tension in alar ligaments (checks contralateral axial rotation), apophyseal capsule, and contralateral rotator muscles.',
      abnormalEndFeel: 'Hard (facet arthrosis) or Empty (atlantoaxial subluxation pain).'
    },
    arthrokinematics: {
      type: 'Pivot & Apophyseal Spin/Slide',
      rule: 'Atlanto-Axial (C1-C2) contributes ~50% (40-45°) of total cervical rotation',
      description: 'C1 ring spins around the vertical dens (odontoid process) of C2. C2-C7: The inferior facet on the ipsilateral side slides posteriorly and inferiorly, while the contralateral inferior facet slides anteriorly and superiorly.',
      closePacked: 'Full extension',
      loosePacked: 'Neutral position'
    },
    muscles: {
      primeMovers: [
        { name: 'Sternocleidomastoid (contralateral rotation)', innervation: 'Accessory Nerve (CN XI), C2-C3' },
        { name: 'Splenius capitis & cervicis (ipsilateral rotation)', innervation: 'C2-C5 posterior rami' },
        { name: 'Obliquus capitis inferior (ipsilateral atlantoaxial rotation)', innervation: 'Suboccipital nerve (C1)' },
        { name: 'Semispinalis capitis (contralateral rotation)', innervation: 'C1-C5 posterior rami' }
      ],
      synergists: ['Contralateral upper trapezius', 'Ipsilateral longus capitis', 'Rectus capitis posterior major'],
      antagonists: ['Ipsilateral SCM', 'Contralateral splenius capitis']
    },
    goniometry: {
      position: 'Patient seated with feet flat, upright torso.',
      fulcrum: 'Center of cranial vertex (top of head).',
      stationaryArm: 'Imaginary line connecting the two acromion processes.',
      movableArm: 'Aligned with the tip of the nose.',
      substitutions: 'Trunk rotation, cervical lateral flexion, shoulder protraction.'
    },
    citations: [
      { book: 'Neumann (3rd Ed)', chapter: 'Chapter 9: Axial Skeleton', page: 'p. 368, Table 9.7 & pp. 369–371' },
      { book: 'Daniels & Worthingham (10th Ed)', chapter: 'Cervical Muscle Testing', page: 'p. 154' }
    ]
  },

  // ==========================================
  // THORACOLUMBAR SPINE
  // ==========================================
  thoracolumbar_flexion: {
    id: 'thoracolumbar_flexion',
    region: 'thoracolumbar',
    jointName: 'Thoracolumbar Spine (T1-L5)',
    motionName: 'Trunk Flexion',
    plane: 'Sagittal',
    axis: 'Coronal (Mediolateral)',
    normalMin: 0,
    normalMax: 80,
    unit: 'degrees',
    referenceRangeText: '0° – 80° (Thoracic: 35°, Lumbar: 50°)',
    functionalRange: '60° (Reaching knees/picking objects from low tables)',
    hypermobilityThreshold: 95,
    impingementRiskThreshold: 105,
    sliderMin: 0,
    sliderMax: 100,
    endFeel: {
      type: 'Firm (Tissue stretch)',
      description: 'Tension in supraspinous, interspinous, and posterior longitudinal ligaments, ligamentum flavum, thoracolumbar fascia, and erector spinae stretch.',
      abnormalEndFeel: 'Empty (herniated disc compression) or Spasm (acute lumbago).'
    },
    arthrokinematics: {
      type: 'Facet Joint Upward/Anterior Slide',
      rule: 'Bilateral anterior-superior translation',
      description: 'The inferior articular facets of the superior vertebra slide superiorly and anteriorly relative to the superior facets below. Intervertebral discs undergo anterior compression and posterior tensile deformation.',
      closePacked: 'Full extension',
      loosePacked: 'Midway between flexion and extension'
    },
    muscles: {
      primeMovers: [
        { name: 'Rectus abdominis', innervation: 'Intercostal nerves (T7-T12)' },
        { name: 'External & Internal Oblique abdominis (bilateral)', innervation: 'Intercostal nerves (T7-T12), Iliohypogastric & Ilioinguinal (L1)' },
        { name: 'Psoas major', innervation: 'L1-L3 ventral rami' }
      ],
      synergists: ['Transversus abdominis', 'Pyramidalis'],
      antagonists: ['Erector spinae (Iliocostalis, Longissimus, Spinalis)', 'Multifidus']
    },
    goniometry: {
      position: 'Standing with feet shoulder-width apart, knees fully extended.',
      fulcrum: 'Modified Schober Test / Goniometer fulcrum at lateral midline of pelvis (iliac crest).',
      stationaryArm: 'Vertical or aligned with lateral midline of femur.',
      movableArm: 'Midaxillary line of thorax toward axilla.',
      substitutions: 'Hip flexion, pelvic anterior/posterior rotation, knee flexion.'
    },
    citations: [
      { book: 'Neumann (3rd Ed)', chapter: 'Chapter 9: Axial Skeleton', page: 'p. 376 (Table 9.8) & p. 383 (Table 9.9)' },
      { book: "Braddom's PM&R (7th Ed)", chapter: 'Low Back Pain & Spinal Examination', page: 'Ch. 36' }
    ]
  },

  thoracolumbar_extension: {
    id: 'thoracolumbar_extension',
    region: 'thoracolumbar',
    jointName: 'Thoracolumbar Spine (T1-L5)',
    motionName: 'Trunk Extension',
    plane: 'Sagittal',
    axis: 'Coronal (Mediolateral)',
    normalMin: 0,
    normalMax: 25,
    unit: 'degrees',
    referenceRangeText: '0° – 25° (Thoracic: 20°–25°, Lumbar: 15°–20°)',
    functionalRange: '20° (Overhead reaching, backward leaning)',
    hypermobilityThreshold: 35,
    impingementRiskThreshold: 45,
    sliderMin: 0,
    sliderMax: 40,
    endFeel: {
      type: 'Hard (Bone contact) / Firm',
      description: 'Contact of adjacent spinous processes / articular facets and tension in the anterior longitudinal ligament (ALL) and abdominal wall.',
      abnormalEndFeel: 'Hard / Sharp pain (spondylolysis, facet syndrome).'
    },
    arthrokinematics: {
      type: 'Facet Joint Inferior/Posterior Slide',
      rule: 'Bilateral posterior-inferior translation',
      description: 'The inferior articular facets slide inferiorly and posteriorly. The anterior disc is under tension while the posterior disc is compressed, nudging the nucleus pulposus anteriorly (Neumann p. 383).',
      closePacked: 'Full extension',
      loosePacked: 'Slight flexion'
    },
    muscles: {
      primeMovers: [
        { name: 'Erector Spinae (Iliocostalis, Longissimus, Spinalis)', innervation: 'Thoracic and lumbar spinal nerves (posterior rami)' },
        { name: 'Multifidus (lumbar)', innervation: 'Medial branch of posterior rami (L1-L5)' },
        { name: 'Semispinalis thoracis', innervation: 'Thoracic posterior rami' }
      ],
      synergists: ['Interspinales', 'Rotatores', 'Quadratus lumborum'],
      antagonists: ['Rectus abdominis', 'External/Internal obliques']
    },
    goniometry: {
      position: 'Standing erect or prone (active trunk lift).',
      fulcrum: 'Lateral midline of the iliac crest.',
      stationaryArm: 'Vertical or aligned with lateral thigh.',
      movableArm: 'Midaxillary line of the thorax.',
      substitutions: 'Knee flexion, excessive hip extension, anterior pelvic tilt.'
    },
    citations: [
      { book: 'Neumann (3rd Ed)', chapter: 'Chapter 9: Axial Skeleton', page: 'p. 383, Table 9.9' },
      { book: 'Daniels & Worthingham (10th Ed)', chapter: 'Trunk Extension Muscle Testing', page: 'pp. 162–167' }
    ]
  },

  thoracolumbar_lat_flexion: {
    id: 'thoracolumbar_lat_flexion',
    region: 'thoracolumbar',
    jointName: 'Thoracolumbar Spine (T1-L5)',
    motionName: 'Trunk Lateral Flexion',
    plane: 'Frontal',
    axis: 'Anteroposterior',
    normalMin: 0,
    normalMax: 35,
    unit: 'degrees',
    referenceRangeText: '0° – 35° (AAOS: 35°, Thoracic: 25°, Lumbar: 20°)',
    functionalRange: '25° (Side reaching, picking up objects at side)',
    hypermobilityThreshold: 45,
    impingementRiskThreshold: 55,
    sliderMin: 0,
    sliderMax: 50,
    endFeel: {
      type: 'Firm (Ligamentous / Muscular)',
      description: 'Tension in contralateral intertransverse ligaments, quadratus lumborum, and lateral abdominal musculature.',
      abnormalEndFeel: 'Hard (facet arthrosis / lateral disc osteophytes).'
    },
    arthrokinematics: {
      type: 'Asymmetric Facet Glide',
      rule: 'Ipsilateral inferior slide, Contralateral superior slide',
      description: 'Inferior facet on side of lateral flexion slides inferiorly; contralateral inferior facet slides superiorly.',
      closePacked: 'Full extension',
      loosePacked: 'Neutral'
    },
    muscles: {
      primeMovers: [
        { name: 'Quadratus lumborum', innervation: 'T12 subcostal & L1-L4 anterior rami' },
        { name: 'Internal & External Obliques (ipsilateral)', innervation: 'Intercostal nerves (T7-T12)' },
        { name: 'Iliocostalis lumborum/thoracis', innervation: 'Posterior rami' }
      ],
      synergists: ['Intertransversarii', 'Psoas major'],
      antagonists: ['Contralateral lateral flexors']
    },
    goniometry: {
      position: 'Standing erect, feet shoulder width apart.',
      fulcrum: 'Spinous process of S1.',
      stationaryArm: 'Perpendicular to the floor.',
      movableArm: 'Aligned with spinous process of C7.',
      substitutions: 'Pelvic tilt, knee flexion, trunk rotation.'
    },
    citations: [
      { book: 'Neumann (3rd Ed)', chapter: 'Chapter 9: Axial Skeleton', page: 'p. 376 (Table 9.8) & p. 383' },
      { book: "Braddom's PM&R (7th Ed)", chapter: 'Spine Goniometry', page: 'Table 2.3' }
    ]
  },

  thoracolumbar_rotation: {
    id: 'thoracolumbar_rotation',
    region: 'thoracolumbar',
    jointName: 'Thoracolumbar Spine (T1-L5)',
    motionName: 'Trunk Rotation',
    plane: 'Transverse',
    axis: 'Vertical',
    normalMin: 0,
    normalMax: 45,
    unit: 'degrees',
    referenceRangeText: '0° – 45° (AAOS: 45°, Thoracic: 35°, Lumbar: 5°)',
    functionalRange: '30° – 35° (Turning in car seat, reaching behind)',
    hypermobilityThreshold: 55,
    impingementRiskThreshold: 65,
    sliderMin: 0,
    sliderMax: 60,
    endFeel: {
      type: 'Firm (Ligamentous / Capsular)',
      description: 'Tension in costovertebral ligaments, thoracic capsule, and contralateral rotators (lumbar facets are sagittally oriented, mechanically blocking rotation to ~5°).',
      abnormalEndFeel: 'Hard (facet lock / costovertebral joint subluxation).'
    },
    arthrokinematics: {
      type: 'Thoracic Slide & Lumbar Facet Impingement',
      rule: 'Thoracic facets slide horizontally; Lumbar facets impact contralaterally',
      description: 'Thoracic articular facets are aligned in the frontal plane, allowing free sliding. In the lumbar spine, sagittal orientation allows only ~1° per segment before bony impact occurs (Neumann p. 382).',
      closePacked: 'Full extension',
      loosePacked: 'Neutral'
    },
    muscles: {
      primeMovers: [
        { name: 'Internal Oblique (ipsilateral)', innervation: 'Intercostal N. (T7-T12), Iliohypogastric (L1)' },
        { name: 'External Oblique (contralateral)', innervation: 'Intercostal N. (T7-T12)' },
        { name: 'Rotatores & Multifidus', innervation: 'Posterior rami' }
      ],
      synergists: ['Semispinalis thoracis', 'Latissimus dorsi'],
      antagonists: ['Contralateral rotators']
    },
    goniometry: {
      position: 'Seated (stabilizes pelvis and prevents hip rotation).',
      fulcrum: 'Center of cranial vertex.',
      stationaryArm: 'Imaginary line connecting the two ASIS prominences.',
      movableArm: 'Imaginary line connecting the two acromion processes.',
      substitutions: 'Pelvic rotation off the chair, lateral trunk flexion.'
    },
    citations: [
      { book: 'Neumann (3rd Ed)', chapter: 'Chapter 9: Axial Skeleton', page: 'p. 376 & p. 382' },
      { book: 'Daniels & Worthingham (10th Ed)', chapter: 'Trunk Rotation Testing', page: 'pp. 168–172' }
    ]
  },

  // ==========================================
  // TEMPOROMANDIBULAR JOINT (TMJ)
  // ==========================================
  tmj_depression: {
    id: 'tmj_depression',
    region: 'tmj',
    jointName: 'Temporomandibular Joint (TMJ)',
    motionName: 'Mandibular Depression (Mouth Opening)',
    plane: 'Sagittal',
    axis: 'Transverse Condylar Axis',
    normalMin: 35,
    normalMax: 50,
    unit: 'mm',
    referenceRangeText: '35 – 50 mm (Functional: 35–40 mm or 3 patient PIP finger breadths)',
    functionalRange: '35 – 40 mm (Eating standard solid food, yawning)',
    hypermobilityThreshold: 55,
    impingementRiskThreshold: 65,
    sliderMin: 0,
    sliderMax: 60,
    endFeel: {
      type: 'Firm (Capsular / Ligamentous)',
      description: 'Tension in lateral (temporomandibular) ligament, stylomandibular ligament, sphenomandibular ligament, and closing muscles (masseter, temporalis).',
      abnormalEndFeel: 'Hard (anterior disc displacement without reduction / closed lock) or Empty.'
    },
    arthrokinematics: {
      type: '2-Phase Bicompartmental (Rotational + Translational)',
      rule: 'Lower joint = Roll; Upper joint = Slide',
      description: 'Phase 1 (Early 0–25 mm, Lower joint cavity): Condyle rolls posteriorly relative to the inferior surface of the articular disc. Phase 2 (Late 25–50 mm, Upper joint cavity): Disc-condyle complex translates anteriorly and inferiorly down the articular eminence (Neumann p. 464, Fig 11.13).',
      closePacked: 'Full dental occlusion (teeth tightly clenched) or maximal depression',
      loosePacked: 'Mouth slightly open, lips together, teeth not in contact (freeway space 2-4 mm)'
    },
    muscles: {
      primeMovers: [
        { name: 'Lateral pterygoid (inferior head)', innervation: 'Mandibular nerve (CN V3)' },
        { name: 'Digastric (anterior belly: CN V3; posterior belly: CN VII)', innervation: 'CN V3 & CN VII' },
        { name: 'Mylohyoid & Geniohyoid', innervation: 'Nerve to mylohyoid (CN V3) & C1 via hypoglossal' }
      ],
      synergists: ['Platysma', 'Infrahyoid muscles (stabilize hyoid bone)'],
      antagonists: ['Masseter', 'Temporalis', 'Medial pterygoid']
    },
    goniometry: {
      position: 'Patient seated with head supported.',
      fulcrum: 'Incisal edge of upper central incisor.',
      stationaryArm: 'Calibrated millimeter ruler or Therabite scale aligned vertically.',
      movableArm: 'Incisal edge of lower central incisor at maximal active opening.',
      substitutions: 'Cervical extension compensation.'
    },
    citations: [
      { book: 'Neumann (3rd Ed)', chapter: 'Chapter 11: Mastication and Ventilation', page: 'pp. 464–467, Table 11.3' },
      { book: "Braddom's PM&R (7th Ed)", chapter: 'Facial and Craniofacial Pain', page: 'Ch. 38' }
    ]
  },

  // ==========================================
  // SHOULDER COMPLEX
  // ==========================================
  shoulder_flexion: {
    id: 'shoulder_flexion',
    region: 'shoulder',
    jointName: 'Shoulder Complex (Glenohumeral & Scapulothoracic)',
    motionName: 'Flexion',
    plane: 'Sagittal',
    axis: 'Coronal (Mediolateral)',
    normalMin: 0,
    normalMax: 180,
    unit: 'degrees',
    referenceRangeText: '0° – 180° (GH: ~120°, ST upward rotation: ~60°)',
    functionalRange: '120° – 140° (Combing hair, reaching overhead shelves)',
    hypermobilityThreshold: 185,
    impingementRiskThreshold: 195,
    sliderMin: 0,
    sliderMax: 190,
    endFeel: {
      type: 'Firm (Capsular / Muscular)',
      description: 'Tension in posterior-inferior glenohumeral capsule, coracohumeral ligament, and extensor muscles (latissimus dorsi, teres major).',
      abnormalEndFeel: 'Hard (subacromial impingement) or Empty (acute subacromial bursitis / rotator cuff tear).'
    },
    arthrokinematics: {
      type: 'Spin + Scapulohumeral Rhythm (2:1 Ratio)',
      rule: 'Predominantly spin of humeral head on glenoid',
      description: 'The humeral head spins in place around a mediolateral axis with slight anterior/superior translation. Coordinated 2:1 Scapulohumeral rhythm: for every 3° of total shoulder elevation, 2° occurs at the GH joint and 1° occurs at the ST joint (upward rotation driven by Serratus anterior & Trapezius force-couple, Neumann Table 5.2).',
      closePacked: 'Abduction and full external rotation',
      loosePacked: '55° abduction, 30° horizontal adduction (scapular plane)'
    },
    muscles: {
      primeMovers: [
        { name: 'Anterior Deltoid', innervation: 'Axillary Nerve (C5-C6)' },
        { name: 'Coracobrachialis', innervation: 'Musculocutaneous Nerve (C5-C7)' },
        { name: 'Pectoralis major (clavicular head)', innervation: 'Lateral pectoral nerve (C5-C7)' },
        { name: 'Biceps brachii (long head)', innervation: 'Musculocutaneous Nerve (C5-C6)' }
      ],
      synergists: ['Serratus anterior (scapular upward rotation)', 'Upper & Lower Trapezius', 'Supraspinatus'],
      antagonists: ['Latissimus dorsi', 'Teres major', 'Posterior Deltoid', 'Triceps (long head)']
    },
    goniometry: {
      position: 'Supine (to stabilize lumbar spine and prevent arching), knees flexed, arm in anatomical neutral at side.',
      fulcrum: 'Lateral aspect of greater tubercle of humerus (or acromion process lateral border).',
      stationaryArm: 'Midaxillary line of thorax.',
      movableArm: 'Lateral midline of the humerus (toward lateral epicondyle).',
      substitutions: 'Trunk extension / lumbar lordosis, shoulder shrugging / scapular elevation.'
    },
    citations: [
      { book: 'Neumann (3rd Ed)', chapter: 'Chapter 5: Shoulder Complex', page: 'pp. 147–152, Table 5.2' },
      { book: "Braddom's PM&R (7th Ed)", chapter: 'Upper Limb Assessment', page: 'Ch. 3' },
      { book: 'Daniels & Worthingham (10th Ed)', chapter: 'Shoulder Muscle Testing', page: 'pp. 64–69' }
    ]
  },

  shoulder_extension: {
    id: 'shoulder_extension',
    region: 'shoulder',
    jointName: 'Shoulder Complex (Glenohumeral & Scapulothoracic)',
    motionName: 'Extension',
    plane: 'Sagittal',
    axis: 'Coronal (Mediolateral)',
    normalMin: 0,
    normalMax: 60,
    unit: 'degrees',
    referenceRangeText: '0° – 60° (AAOS: 50°–60°)',
    functionalRange: '40° – 50° (Reaching into back pocket, dressing, perineal care)',
    hypermobilityThreshold: 70,
    impingementRiskThreshold: 80,
    sliderMin: 0,
    sliderMax: 70,
    endFeel: {
      type: 'Firm (Capsular / Ligamentous)',
      description: 'Tension in anterior capsule, superior glenohumeral ligament, coracohumeral ligament, and shoulder flexors (anterior deltoid, biceps).',
      abnormalEndFeel: 'Hard (bony block) or Empty.'
    },
    arthrokinematics: {
      type: 'Convex-on-Concave Spin & Glide',
      rule: 'Convex Humeral Head on Concave Glenoid',
      description: 'Spin with slight anterior glide of the humeral head on the glenoid fossa. Scapula adducts/retracts and downwardly rotates.',
      closePacked: 'Abduction and full external rotation',
      loosePacked: '55° abduction, 30° horizontal adduction'
    },
    muscles: {
      primeMovers: [
        { name: 'Latissimus dorsi', innervation: 'Thoracodorsal Nerve (C6-C8)' },
        { name: 'Posterior Deltoid', innervation: 'Axillary Nerve (C5-C6)' },
        { name: 'Teres major', innervation: 'Lower Subscapular Nerve (C5-C6)' },
        { name: 'Triceps brachii (long head)', innervation: 'Radial Nerve (C6-C8)' }
      ],
      synergists: ['Rhomboid major/minor (scapular retraction)', 'Pectoralis major (sternocostal head from flexion)'],
      antagonists: ['Anterior Deltoid', 'Coracobrachialis', 'Biceps brachii']
    },
    goniometry: {
      position: 'Prone, head turned to opposite side, arm at side.',
      fulcrum: 'Lateral aspect of greater tubercle / acromion.',
      stationaryArm: 'Midaxillary line of thorax.',
      movableArm: 'Lateral midline of humerus.',
      substitutions: 'Trunk rotation, anterior tipping of scapula.'
    },
    citations: [
      { book: 'Neumann (3rd Ed)', chapter: 'Chapter 5: Shoulder Complex', page: 'p. 152, Table 5.2' },
      { book: "Braddom's PM&R (7th Ed)", chapter: 'Shoulder Examination', page: 'Table 2.4' },
      { book: 'Daniels & Worthingham (10th Ed)', chapter: 'Shoulder Extension Testing', page: 'pp. 70–75' }
    ]
  },

  shoulder_abduction: {
    id: 'shoulder_abduction',
    region: 'shoulder',
    jointName: 'Shoulder Complex (Glenohumeral & Scapulothoracic)',
    motionName: 'Abduction',
    plane: 'Frontal (Coronal)',
    axis: 'Anteroposterior (Sagittal)',
    normalMin: 0,
    normalMax: 180,
    unit: 'degrees',
    referenceRangeText: '0° – 180° (GH: ~120°, Scapula: ~60° with concurrent clavicular elevation & posterior rotation)',
    functionalRange: '120° (Reaching into cupboards, washing hair)',
    hypermobilityThreshold: 185,
    impingementRiskThreshold: 195,
    sliderMin: 0,
    sliderMax: 190,
    endFeel: {
      type: 'Firm (Capsular / Ligamentous)',
      description: 'Tension in inferior glenohumeral ligament (IGHL) complex (anterior and posterior bands), axillary pouch, and adductor muscles (pectoralis major, latissimus dorsi).',
      abnormalEndFeel: 'Hard (greater tubercle abutment on acromion if external rotation is prevented) or Empty.'
    },
    arthrokinematics: {
      type: 'Convex-on-Concave Arthrology',
      rule: 'Convex Humeral Head on Concave Glenoid Fossa',
      description: 'Convex humeral head rolls superiorly and slides inferiorly on the concave glenoid (Neumann p. 154, Fig 5.27). The inferior slide is essential: without it, the humeral head would migrate 10 mm upward and impinge against the subacromial arch at 22° of abduction! Rotator cuff depression prevents superior escape.',
      closePacked: 'Full abduction and external rotation',
      loosePacked: '55° abduction, 30° horizontal adduction'
    },
    muscles: {
      primeMovers: [
        { name: 'Middle Deltoid', innervation: 'Axillary Nerve (C5-C6)' },
        { name: 'Supraspinatus (initiates first 15° & stabilizes)', innervation: 'Suprascapular Nerve (C5-C6)' },
        { name: 'Serratus anterior (upward rotator)', innervation: 'Long Thoracic Nerve (C5-C7)' },
        { name: 'Upper & Lower Trapezius', innervation: 'Spinal Accessory Nerve (CN XI), C3-C4' }
      ],
      synergists: ['Anterior deltoid', 'Infraspinatus & Teres minor (external rotators to clear greater tubercle)'],
      antagonists: ['Pectoralis major', 'Latissimus dorsi', 'Teres major', 'Triceps (long head)']
    },
    goniometry: {
      position: 'Supine or seated upright, arm externally rotated so palm faces forward/upward (prevents greater tuberosity impingement).',
      fulcrum: 'Anterior or posterior aspect of acromion process.',
      stationaryArm: 'Parallel to the sternum (anterior) or spine (posterior).',
      movableArm: 'Anterior midline of humerus (medial epicondyle reference).',
      substitutions: 'Lateral trunk flexion to contralateral side, shoulder shrugging.'
    },
    citations: [
      { book: 'Neumann (3rd Ed)', chapter: 'Chapter 5: Shoulder Complex', page: 'pp. 153–158, Table 5.2' },
      { book: "Braddom's PM&R (7th Ed)", chapter: 'Rehabilitation of Shoulder Impingement', page: 'Ch. 37' },
      { book: 'Daniels & Worthingham (10th Ed)', chapter: 'Shoulder Abduction', page: 'pp. 76–81' }
    ]
  },

  shoulder_adduction: {
    id: 'shoulder_adduction',
    region: 'shoulder',
    jointName: 'Shoulder Complex',
    motionName: 'Adduction (Horizontal / Cross-body)',
    plane: 'Transverse / Frontal',
    axis: 'Vertical / AP Axis',
    normalMin: 0,
    normalMax: 50,
    unit: 'degrees',
    referenceRangeText: '0° – 50° (Horizontal Adduction: 0° – 120° across chest)',
    functionalRange: '40° (Reaching across chest to wash opposite axilla / arm)',
    hypermobilityThreshold: 65,
    impingementRiskThreshold: 75,
    sliderMin: 0,
    sliderMax: 65,
    endFeel: {
      type: 'Firm or Soft (Tissue contact)',
      description: 'Contact with trunk / chest, or tension in posterior capsule and posterior deltoid/infraspinatus.',
      abnormalEndFeel: 'Hard (AC joint impingement pain).'
    },
    arthrokinematics: {
      type: 'Convex-on-Concave Arthrology',
      rule: 'Convex Humeral Head rolls anteriorly and slides posteriorly',
      description: 'In horizontal adduction, humeral head rolls anteriorly/medially and slides posteriorly/laterally across glenoid.',
      closePacked: 'Full abduction and external rotation',
      loosePacked: '55° abduction'
    },
    muscles: {
      primeMovers: [
        { name: 'Pectoralis major (sternocostal & clavicular heads)', innervation: 'Medial & Lateral Pectoral Nerves (C5-T1)' },
        { name: 'Anterior Deltoid', innervation: 'Axillary Nerve (C5-C6)' },
        { name: 'Coracobrachialis', innervation: 'Musculocutaneous Nerve (C5-C7)' }
      ],
      synergists: ['Subscapularis', 'Biceps short head'],
      antagonists: ['Posterior Deltoid', 'Infraspinatus', 'Teres minor', 'Rhomboids']
    },
    goniometry: {
      position: 'Seated, shoulder abducted 90°, humerus horizontal.',
      fulcrum: 'Superior aspect of acromion process.',
      stationaryArm: 'Perpendicular to trunk (along coronal acromion line).',
      movableArm: 'Longitudinal axis of humerus.',
      substitutions: 'Trunk rotation toward the measured side.'
    },
    citations: [
      { book: 'Neumann (3rd Ed)', chapter: 'Chapter 5: Shoulder Complex', page: 'p. 157, Table 5.2' },
      { book: 'Daniels & Worthingham (10th Ed)', chapter: 'Shoulder Horizontal Adduction', page: 'pp. 82–85' }
    ]
  },

  shoulder_external_rotation: {
    id: 'shoulder_external_rotation',
    region: 'shoulder',
    jointName: 'Glenohumeral Joint',
    motionName: 'External (Lateral) Rotation',
    plane: 'Transverse (at 90° Abduction)',
    axis: 'Longitudinal Humerus Axis',
    normalMin: 0,
    normalMax: 90,
    unit: 'degrees',
    referenceRangeText: '0° – 90° (at 90° abduction; 0°–60° at side)',
    functionalRange: '60° (Fastening necklace, washing back of head, throwing late cocking)',
    hypermobilityThreshold: 105,
    impingementRiskThreshold: 115,
    sliderMin: 0,
    sliderMax: 110,
    endFeel: {
      type: 'Firm (Capsular)',
      description: 'Tension in anterior band of inferior glenohumeral ligament (IGHL) at 90° abduction (or middle/superior GHL and subscapularis tendon at 0° abduction).',
      abnormalEndFeel: 'Hard or Empty (Adhesive Capsulitis - typically most severely restricted motion in capsular pattern ER > Abd > IR).'
    },
    arthrokinematics: {
      type: 'Convex-on-Concave Arthrology',
      rule: 'Convex Humeral Head on Concave Glenoid',
      description: 'Convex humeral head rolls posteriorly and slides anteriorly on the concave glenoid fossa (Neumann p. 156, Fig 5.30). At 90° abduction, anterior slide tensions the anterior-inferior capsule.',
      closePacked: 'Full abduction and external rotation',
      loosePacked: '55° abduction, 30° horizontal adduction'
    },
    muscles: {
      primeMovers: [
        { name: 'Infraspinatus', innervation: 'Suprascapular Nerve (C5-C6)' },
        { name: 'Teres minor', innervation: 'Axillary Nerve (C5-C6)' },
        { name: 'Posterior Deltoid', innervation: 'Axillary Nerve (C5-C6)' }
      ],
      synergists: ['Supraspinatus (subtle initiator)'],
      antagonists: ['Subscapularis', 'Pectoralis major', 'Latissimus dorsi', 'Teres major', 'Anterior Deltoid']
    },
    goniometry: {
      position: 'Supine, shoulder abducted to 90°, elbow flexed to 90°, forearm neutral, towel roll under distal humerus.',
      fulcrum: 'Olecranon process of ulna.',
      stationaryArm: 'Perpendicular to the floor (vertical reference).',
      movableArm: 'Aligned with the styloid process of the ulna.',
      substitutions: 'Scapular retraction, trunk rotation, shoulder extension.'
    },
    citations: [
      { book: 'Neumann (3rd Ed)', chapter: 'Chapter 5: Shoulder Complex', page: 'p. 156, Table 5.2' },
      { book: "Braddom's PM&R (7th Ed)", chapter: 'Adhesive Capsulitis Diagnosis', page: 'Ch. 37' },
      { book: 'Daniels & Worthingham (10th Ed)', chapter: 'External Rotation Testing', page: 'pp. 88–91' }
    ]
  },

  shoulder_internal_rotation: {
    id: 'shoulder_internal_rotation',
    region: 'shoulder',
    jointName: 'Glenohumeral Joint',
    motionName: 'Internal (Medial) Rotation',
    plane: 'Transverse (at 90° Abduction)',
    axis: 'Longitudinal Humerus Axis',
    normalMin: 0,
    normalMax: 70,
    unit: 'degrees',
    referenceRangeText: '0° – 70° (AAOS: 70°–80° at 90° abduction; 0°–60° at side)',
    functionalRange: '50° – 60° (Fastening bra behind back, reaching back pocket / perineal care)',
    hypermobilityThreshold: 85,
    impingementRiskThreshold: 95,
    sliderMin: 0,
    sliderMax: 85,
    endFeel: {
      type: 'Firm (Capsular / Muscular)',
      description: 'Tension in posterior capsule, posterior band of IGHL, and infraspinatus/teres minor stretch.',
      abnormalEndFeel: 'Hard (GIRD: Glenohumeral Internal Rotation Deficit in overhead athletes with posterior capsule contracture).'
    },
    arthrokinematics: {
      type: 'Convex-on-Concave Arthrology',
      rule: 'Convex Humeral Head on Concave Glenoid',
      description: 'Convex humeral head rolls anteriorly and slides posteriorly on the concave glenoid fossa (Neumann p. 156). Posterior slide stretches the posterior-inferior capsule.',
      closePacked: 'Full abduction and external rotation',
      loosePacked: '55° abduction, 30° horizontal adduction'
    },
    muscles: {
      primeMovers: [
        { name: 'Subscapularis', innervation: 'Upper & Lower Subscapular Nerves (C5-C6)' },
        { name: 'Pectoralis major', innervation: 'Medial & Lateral Pectoral Nerves (C5-T1)' },
        { name: 'Latissimus dorsi', innervation: 'Thoracodorsal Nerve (C6-C8)' },
        { name: 'Teres major', innervation: 'Lower Subscapular Nerve (C5-C6)' },
        { name: 'Anterior Deltoid', innervation: 'Axillary Nerve (C5-C6)' }
      ],
      synergists: ['Pectoralis minor (anterior tilt)', 'Serratus anterior'],
      antagonists: ['Infraspinatus', 'Teres minor', 'Posterior Deltoid']
    },
    goniometry: {
      position: 'Supine, shoulder abducted to 90°, elbow flexed to 90°, humerus supported level with acromion.',
      fulcrum: 'Olecranon process of ulna.',
      stationaryArm: 'Perpendicular to the floor (vertical reference).',
      movableArm: 'Aligned with the styloid process of the ulna.',
      substitutions: 'Anterior scapular tipping / protraction (clinician must stabilize coracoid process).'
    },
    citations: [
      { book: 'Neumann (3rd Ed)', chapter: 'Chapter 5: Shoulder Complex', page: 'p. 156, Table 5.2' },
      { book: "Braddom's PM&R (7th Ed)", chapter: 'Overhead Throwing Shoulder & GIRD', page: 'Ch. 37' },
      { book: 'Daniels & Worthingham (10th Ed)', chapter: 'Internal Rotation Testing', page: 'pp. 92–95' }
    ]
  },

  // ==========================================
  // ELBOW & FOREARM
  // ==========================================
  elbow_flexion: {
    id: 'elbow_flexion',
    region: 'elbow_forearm',
    jointName: 'Elbow Joint (Humeroulnar & Humeroradial)',
    motionName: 'Flexion',
    plane: 'Sagittal',
    axis: 'Coronal Axis (through Humerus Epicondyles)',
    normalMin: 0,
    normalMax: 145,
    unit: 'degrees',
    referenceRangeText: '0° – 145° (AAOS: 150°, Neumann: up to 150°)',
    functionalRange: '30° – 130° (Functional Arc of Morrey: 100° needed for feeding, phone, hygiene)',
    hypermobilityThreshold: 155,
    impingementRiskThreshold: 165,
    sliderMin: 0,
    sliderMax: 160,
    endFeel: {
      type: 'Soft (Soft tissue approximation)',
      description: 'Contact between anterior forearm muscle mass and biceps brachii muscle belly. If patient is extremely thin, may feel Firm (posterior capsule and triceps stretch).',
      abnormalEndFeel: 'Hard (coronoid osteophytes hitting coronoid fossa or heterotopic ossification).'
    },
    arthrokinematics: {
      type: 'Concave-on-Convex Arthrology',
      rule: 'Concave Trochlear Notch of Ulna on Convex Trochlea of Humerus',
      description: 'Concave trochlear notch rolls and slides anteriorly on the convex humeral trochlea (same direction! Neumann p. 182). Humeroradial joint: concave fovea of radial head rolls and slides anteriorly on the convex capitulum.',
      closePacked: 'Full extension with supination',
      loosePacked: '70° flexion, 10° supination'
    },
    muscles: {
      primeMovers: [
        { name: 'Brachialis (workhorse flexor in all forearm positions)', innervation: 'Musculocutaneous Nerve (C5-C6), small branch from Radial (C7)' },
        { name: 'Biceps brachii (most powerful with supination)', innervation: 'Musculocutaneous Nerve (C5-C6)' },
        { name: 'Brachioradialis (active during rapid/loaded flexion in neutral)', innervation: 'Radial Nerve (C5-C6)' }
      ],
      synergists: ['Pronator teres', 'Flexor carpi radialis', 'Palmaris longus'],
      antagonists: ['Triceps brachii', 'Anconeus']
    },
    goniometry: {
      position: 'Supine, arm supported in anatomical extension, forearm fully supinated.',
      fulcrum: 'Lateral epicondyle of humerus.',
      stationaryArm: 'Lateral midline of humerus (referencing acromion tip).',
      movableArm: 'Lateral midline of radius (referencing radial styloid process).',
      substitutions: 'Shoulder flexion, wrist flexion substitution.'
    },
    citations: [
      { book: 'Neumann (3rd Ed)', chapter: 'Chapter 6: Elbow and Forearm', page: 'pp. 180–186, Table 6.5' },
      { book: "Braddom's PM&R (7th Ed)", chapter: 'Elbow Biomechanics & Contracture', page: 'Ch. 3' },
      { book: 'Daniels & Worthingham (10th Ed)', chapter: 'Elbow Flexion Muscle Testing', page: 'pp. 102–107' }
    ]
  },

  elbow_extension: {
    id: 'elbow_extension',
    region: 'elbow_forearm',
    jointName: 'Elbow Joint (Humeroulnar & Humeroradial)',
    motionName: 'Extension',
    plane: 'Sagittal',
    axis: 'Coronal Axis',
    normalMin: 0,
    normalMax: 0,
    unit: 'degrees',
    referenceRangeText: '0° (Normal hyperextension up to -5° to -10° especially in females)',
    functionalRange: '30° flexion (functional extension limit for most daily activities)',
    hypermobilityThreshold: -10,
    impingementRiskThreshold: -18,
    sliderMin: -15,
    sliderMax: 30,
    endFeel: {
      type: 'Hard (Bone-to-bone) / Firm',
      description: 'Olecranon process of ulna impacts the olecranon fossa of humerus, accompanied by tension in anterior capsule and anterior band of medial collateral ligament (MCL).',
      abnormalEndFeel: 'Springy block (loose body/osteochondritis dissecans) or Firm contracture.'
    },
    arthrokinematics: {
      type: 'Concave-on-Convex Arthrology',
      rule: 'Concave Ulna on Convex Humerus',
      description: 'Concave trochlear notch rolls and slides posteriorly across the convex trochlea of the humerus until olecranon process seats tightly in olecranon fossa (Neumann p. 182).',
      closePacked: 'Full extension with supination',
      loosePacked: '70° flexion, 10° supination'
    },
    muscles: {
      primeMovers: [
        { name: 'Triceps brachii (Medial, Lateral, and Long heads)', innervation: 'Radial Nerve (C6-C8)' },
        { name: 'Anconeus (initiates and stabilizes extension)', innervation: 'Radial Nerve (C7-C8)' }
      ],
      synergists: ['Extensor carpi ulnaris (subtle stabilizer)'],
      antagonists: ['Brachialis', 'Biceps brachii', 'Brachioradialis']
    },
    goniometry: {
      position: 'Supine, towel under distal humerus to permit full unhindered elbow extension.',
      fulcrum: 'Lateral epicondyle of humerus.',
      stationaryArm: 'Lateral midline of humerus.',
      movableArm: 'Lateral midline of radius (radial styloid process).',
      substitutions: 'Shoulder hyperextension / retraction.'
    },
    citations: [
      { book: 'Neumann (3rd Ed)', chapter: 'Chapter 6: Elbow and Forearm', page: 'pp. 182–188, Table 6.7' },
      { book: "Braddom's PM&R (7th Ed)", chapter: 'Elbow Joint Goniometry', page: 'Table 2.4' }
    ]
  },

  forearm_pronation: {
    id: 'forearm_pronation',
    region: 'elbow_forearm',
    jointName: 'Radioulnar Joints (Proximal & Distal)',
    motionName: 'Pronation',
    plane: 'Transverse',
    axis: 'Oblique Axis (Radial head center to Ulnar head center)',
    normalMin: 0,
    normalMax: 80,
    unit: 'degrees',
    referenceRangeText: '0° – 80° (AAOS: 80°, Neumann: up to 90°)',
    functionalRange: '50° (Typing on keyboard, holding eating utensils)',
    hypermobilityThreshold: 90,
    impingementRiskThreshold: 100,
    sliderMin: 0,
    sliderMax: 95,
    endFeel: {
      type: 'Firm or Hard',
      description: 'Firm tension in dorsal radioulnar ligament, interosseous membrane, and supinator muscle stretch; Hard if radius physically abuts ulna.',
      abnormalEndFeel: 'Hard (malunited Colles fracture / distal radioulnar subluxation).'
    },
    arthrokinematics: {
      type: 'Pivot & Trochoid Joint Complex',
      rule: 'Proximal = Spin; Distal = Concave on Convex Roll & Slide',
      description: 'Proximal radioulnar joint: radial head spins within annular ligament and radial notch of ulna. Distal radioulnar joint: concave ulnar notch of radius rolls and slides anteriorly (palmar direction) across the convex ulnar head (Neumann p. 192, Table 6.3).',
      closePacked: '5° supination',
      loosePacked: '10° supination'
    },
    muscles: {
      primeMovers: [
        { name: 'Pronator quadratus (consistently recruited prime mover)', innervation: 'Anterior Interosseous Nerve from Median (C8-T1)' },
        { name: 'Pronator teres (recruited during resisted/high-speed pronation)', innervation: 'Median Nerve (C6-C7)' }
      ],
      synergists: ['Flexor carpi radialis', 'Brachioradialis (assists pronation from full supination to neutral)'],
      antagonists: ['Supinator', 'Biceps brachii']
    },
    goniometry: {
      position: 'Seated, elbow flexed to 90° and held snugly against trunk, forearm neutral (thumb pointing to ceiling).',
      fulcrum: 'Lateral to ulnar styloid process (or center of third metacarpal head with pencil in fist).',
      stationaryArm: 'Parallel to anterior mid-longitudinal axis of humerus (vertical).',
      movableArm: 'Across dorsal aspect of distal radius and ulna, just proximal to styloid processes.',
      substitutions: 'Shoulder abduction and internal rotation (elbow flaring out).'
    },
    citations: [
      { book: 'Neumann (3rd Ed)', chapter: 'Chapter 6: Elbow and Forearm', page: 'pp. 191–194, Table 6.3' },
      { book: "Braddom's PM&R (7th Ed)", chapter: 'Forearm Function & Pronation Deficits', page: 'Ch. 3' },
      { book: 'Daniels & Worthingham (10th Ed)', chapter: 'Forearm Pronation', page: 'pp. 116–119' }
    ]
  },

  forearm_supination: {
    id: 'forearm_supination',
    region: 'elbow_forearm',
    jointName: 'Radioulnar Joints (Proximal & Distal)',
    motionName: 'Supination',
    plane: 'Transverse',
    axis: 'Oblique Axis (Radial head to Ulnar head)',
    normalMin: 0,
    normalMax: 80,
    unit: 'degrees',
    referenceRangeText: '0° – 80° (AAOS: 80°, Neumann: up to 90°)',
    functionalRange: '50° (Receiving coins in palm, turning doorknob, washing face)',
    hypermobilityThreshold: 90,
    impingementRiskThreshold: 100,
    sliderMin: 0,
    sliderMax: 95,
    endFeel: {
      type: 'Firm (Capsular / Ligamentous)',
      description: 'Tension in palmar radioulnar ligament, oblique cord, interosseous membrane, and pronator muscles.',
      abnormalEndFeel: 'Hard (synostosis / heterotopic bone bridge).'
    },
    arthrokinematics: {
      type: 'Pivot & Trochoid Joint Complex',
      rule: 'Proximal = Spin; Distal = Roll & Slide in same direction',
      description: 'Proximal radioulnar joint: radial head spins within the fibro-osseous ring. Distal radioulnar joint: concave ulnar notch of radius rolls and slides posteriorly (dorsal direction) across the convex ulnar head (Neumann Table 6.3).',
      closePacked: '5° supination',
      loosePacked: '10° supination'
    },
    muscles: {
      primeMovers: [
        { name: 'Supinator (acts continuously during low-load supination)', innervation: 'Deep branch of Radial Nerve / PIN (C6-C7)' },
        { name: 'Biceps brachii (tremendous power generator when elbow is flexed 90°)', innervation: 'Musculocutaneous Nerve (C5-C6)' }
      ],
      synergists: ['Brachioradialis (from full pronation to neutral)', 'Extensor pollicis longus'],
      antagonists: ['Pronator teres', 'Pronator quadratus']
    },
    goniometry: {
      position: 'Seated, elbow flexed to 90° against trunk, forearm neutral.',
      fulcrum: 'Medial to ulnar styloid process (or palmar surface of wrist).',
      stationaryArm: 'Parallel to anterior mid-longitudinal axis of humerus.',
      movableArm: 'Across the volar (palmar) aspect of distal radius and ulna.',
      substitutions: 'Shoulder adduction and external rotation.'
    },
    citations: [
      { book: 'Neumann (3rd Ed)', chapter: 'Chapter 6: Elbow and Forearm', page: 'pp. 191–194, Table 6.3' },
      { book: 'Daniels & Worthingham (10th Ed)', chapter: 'Forearm Supination', page: 'pp. 112–115' }
    ]
  },

  // ==========================================
  // WRIST JOINT
  // ==========================================
  wrist_flexion: {
    id: 'wrist_flexion',
    region: 'wrist',
    jointName: 'Wrist Joint (Radiocarpal & Midcarpal)',
    motionName: 'Flexion (Palmarflexion)',
    plane: 'Sagittal',
    axis: 'Coronal Axis (through Capitate head)',
    normalMin: 0,
    normalMax: 70,
    unit: 'degrees',
    referenceRangeText: '0° – 70° (AAOS: 80°, Neumann: 70°–80°)',
    functionalRange: '40° (Typing, opening door handles, hygiene)',
    hypermobilityThreshold: 85,
    impingementRiskThreshold: 95,
    sliderMin: 0,
    sliderMax: 85,
    endFeel: {
      type: 'Firm (Ligamentous / Capsular)',
      description: 'Tension in dorsal radiocarpal ligament, dorsal intercarpal ligament, and wrist extensor muscle tendons (ECRL, ECRB, ECU).',
      abnormalEndFeel: 'Hard (carpal collapse/SLAC wrist) or Empty (carpal tunnel syndrome flare).'
    },
    arthrokinematics: {
      type: 'Convex-on-Concave Arthrology',
      rule: 'Convex Proximal Carpal Row on Concave Distal Radius & TFC',
      description: 'Radiocarpal joint: convex scaphoid and lunate roll anteriorly (palmar direction) and slide posteriorly (dorsal direction) across the concave radius (Neumann p. 228, Fig 7.15). Midcarpal joint: capitate rolls anteriorly and slides posteriorly on scaphoid/lunate.',
      closePacked: 'Full extension with radial deviation',
      loosePacked: 'Neutral with slight ulnar deviation'
    },
    muscles: {
      primeMovers: [
        { name: 'Flexor carpi radialis (FCR)', innervation: 'Median Nerve (C6-C7)' },
        { name: 'Flexor carpi ulnaris (FCU)', innervation: 'Ulnar Nerve (C8-T1)' }
      ],
      synergists: ['Palmaris longus', 'Flexor digitorum superficialis (FDS)', 'Flexor digitorum profundus (FDP)', 'Flexor pollicis longus'],
      antagonists: ['Extensor carpi radialis longus (ECRL)', 'ECRB', 'Extensor carpi ulnaris (ECU)']
    },
    goniometry: {
      position: 'Patient seated next to table, forearm pronated and resting flat on table, fingers relaxed.',
      fulcrum: 'Lateral aspect of triquetrum (distal to ulnar styloid process).',
      stationaryArm: 'Lateral midline of ulna (referencing olecranon process).',
      movableArm: 'Lateral midline of 5th metacarpal.',
      substitutions: 'Forearm lifting off table, active finger extension.'
    },
    citations: [
      { book: 'Neumann (3rd Ed)', chapter: 'Chapter 7: Wrist', page: 'pp. 226–231, Table 7.1' },
      { book: "Braddom's PM&R (7th Ed)", chapter: 'Hand & Wrist Rehabilitation', page: 'Ch. 3' },
      { book: 'Daniels & Worthingham (10th Ed)', chapter: 'Wrist Flexion', page: 'pp. 122–126' }
    ]
  },

  wrist_extension: {
    id: 'wrist_extension',
    region: 'wrist',
    jointName: 'Wrist Joint (Radiocarpal & Midcarpal)',
    motionName: 'Extension (Dorsiflexion)',
    plane: 'Sagittal',
    axis: 'Coronal Axis (through Capitate)',
    normalMin: 0,
    normalMax: 70,
    unit: 'degrees',
    referenceRangeText: '0° – 70° (AAOS standard: 70°)',
    functionalRange: '40° (Pushing off chair, powerful power-grip tenodesis)',
    hypermobilityThreshold: 85,
    impingementRiskThreshold: 95,
    sliderMin: 0,
    sliderMax: 85,
    endFeel: {
      type: 'Firm (Ligamentous)',
      description: 'Tension in palmar radiocarpal ligaments (radiocapitate, radioscapholunate), palmar midcarpal ligaments, and flexor tendon stretch.',
      abnormalEndFeel: 'Hard (dorsal carpal impingement) or Empty.'
    },
    arthrokinematics: {
      type: 'Convex-on-Concave Arthrology',
      rule: 'Convex Carpals on Concave Radius',
      description: 'Convex proximal carpal row rolls posteriorly (dorsally) and slides anteriorly (volarly) on the concave distal radius (Neumann p. 228). Palmar slide tightens the thick palmar radiocarpal ligaments, stabilizing the wrist for heavy grip.',
      closePacked: 'Full extension with radial deviation',
      loosePacked: 'Neutral with slight ulnar deviation'
    },
    muscles: {
      primeMovers: [
        { name: 'Extensor carpi radialis longus (ECRL)', innervation: 'Radial Nerve (C6-C7)' },
        { name: 'Extensor carpi radialis brevis (ECRB - primary workhorse)', innervation: 'Radial Nerve / PIN (C6-C7)' },
        { name: 'Extensor carpi ulnaris (ECU)', innervation: 'Posterior Interosseous Nerve (C7-C8)' }
      ],
      synergists: ['Extensor digitorum', 'Extensor indicis', 'Extensor digiti minimi', 'Extensor pollicis longus'],
      antagonists: ['Flexor carpi radialis', 'Flexor carpi ulnaris', 'FDS', 'FDP']
    },
    goniometry: {
      position: 'Patient seated with forearm pronated on table, fingers loosely flexed.',
      fulcrum: 'Lateral aspect of triquetrum.',
      stationaryArm: 'Lateral midline of ulna.',
      movableArm: 'Lateral midline of 5th metacarpal.',
      substitutions: 'Finger extension (passive tenodesis stretching finger flexors).'
    },
    citations: [
      { book: 'Neumann (3rd Ed)', chapter: 'Chapter 7: Wrist', page: 'pp. 226–231, Table 7.1' },
      { book: 'Daniels & Worthingham (10th Ed)', chapter: 'Wrist Extension', page: 'pp. 127–131' }
    ]
  },

  wrist_radial_deviation: {
    id: 'wrist_radial_deviation',
    region: 'wrist',
    jointName: 'Wrist Joint',
    motionName: 'Radial Deviation (Abduction)',
    plane: 'Frontal',
    axis: 'Anteroposterior (through Capitate)',
    normalMin: 0,
    normalMax: 20,
    unit: 'degrees',
    referenceRangeText: '0° – 20° (AAOS: 20°)',
    functionalRange: '10° (Hammering, cutlery control)',
    hypermobilityThreshold: 28,
    impingementRiskThreshold: 35,
    sliderMin: 0,
    sliderMax: 30,
    endFeel: {
      type: 'Hard (Bony block) or Firm',
      description: 'Contact of scaphoid against radial styloid process or tension in ulnar collateral ligament and ulnocarpal complex.',
      abnormalEndFeel: 'Hard / Painful (scaphoid fracture non-union, radial styloid impingement).'
    },
    arthrokinematics: {
      type: 'Convex-on-Concave Arthrology',
      rule: 'Carpals roll radially and slide ulnarly',
      description: 'Proximal carpal row rolls laterally (radially) and slides medially (ulnarly) on radius (Neumann p. 229, Fig 7.16).',
      closePacked: 'Full extension with radial deviation',
      loosePacked: 'Neutral'
    },
    muscles: {
      primeMovers: [
        { name: 'Extensor carpi radialis longus & brevis', innervation: 'Radial Nerve (C6-C7)' },
        { name: 'Flexor carpi radialis', innervation: 'Median Nerve (C6-C7)' },
        { name: 'Abductor pollicis longus (APL)', innervation: 'PIN (C7-C8)' }
      ],
      synergists: ['Extensor pollicis longus/brevis'],
      antagonists: ['FCU', 'ECU']
    },
    goniometry: {
      position: 'Forearm pronated flat on table, fingers extended.',
      fulcrum: 'Dorsal aspect of capitate.',
      stationaryArm: 'Dorsal midline of forearm (lateral epicondyle line).',
      movableArm: 'Dorsal midline of 3rd metacarpal.',
      substitutions: 'Forearm pronation/supination, wrist flexion.'
    },
    citations: [
      { book: 'Neumann (3rd Ed)', chapter: 'Chapter 7: Wrist', page: 'p. 229, Table 7.1' },
      { book: 'Daniels & Worthingham (10th Ed)', chapter: 'Wrist Deviation', page: 'p. 132' }
    ]
  },

  wrist_ulnar_deviation: {
    id: 'wrist_ulnar_deviation',
    region: 'wrist',
    jointName: 'Wrist Joint',
    motionName: 'Ulnar Deviation (Adduction)',
    plane: 'Frontal',
    axis: 'Anteroposterior (through Capitate)',
    normalMin: 0,
    normalMax: 30,
    unit: 'degrees',
    referenceRangeText: '0° – 30° (AAOS: 30°, Neumann: up to 35°)',
    functionalRange: '20° – 25° (Pouring water, handwriting, golf swing)',
    hypermobilityThreshold: 40,
    impingementRiskThreshold: 48,
    sliderMin: 0,
    sliderMax: 40,
    endFeel: {
      type: 'Firm (Ligamentous)',
      description: 'Tension in radial collateral ligament and palmar/dorsal radiocarpal ligaments (capsular).',
      abnormalEndFeel: 'Hard (TFCC tear / ulnar abutment syndrome).'
    },
    arthrokinematics: {
      type: 'Convex-on-Concave Arthrology',
      rule: 'Carpals roll ulnarly and slide radially',
      description: 'Proximal carpal row rolls medially (ulnarly) and slides laterally (radially) on radius (Neumann p. 229).',
      closePacked: 'Full extension',
      loosePacked: 'Neutral'
    },
    muscles: {
      primeMovers: [
        { name: 'Extensor carpi ulnaris (ECU)', innervation: 'PIN / Radial (C7-C8)' },
        { name: 'Flexor carpi ulnaris (FCU)', innervation: 'Ulnar Nerve (C8-T1)' }
      ],
      synergists: ['Extensor digiti minimi', 'FDS/FDP (ulnar slips)'],
      antagonists: ['FCR', 'ECRL', 'ECRB']
    },
    goniometry: {
      position: 'Forearm pronated flat on table.',
      fulcrum: 'Dorsal aspect of capitate.',
      stationaryArm: 'Dorsal midline of forearm.',
      movableArm: 'Dorsal midline of 3rd metacarpal.',
      substitutions: 'Elbow movement, wrist extension.'
    },
    citations: [
      { book: 'Neumann (3rd Ed)', chapter: 'Chapter 7: Wrist', page: 'p. 229, Table 7.1' },
      { book: 'Daniels & Worthingham (10th Ed)', chapter: 'Wrist Deviation', page: 'p. 132' }
    ]
  },

  // ==========================================
  // HIP JOINT
  // ==========================================
  hip_flexion: {
    id: 'hip_flexion',
    region: 'hip',
    jointName: 'Hip Joint (Coxofemoral)',
    motionName: 'Flexion',
    plane: 'Sagittal',
    axis: 'Coronal Axis (through Femoral Head center)',
    normalMin: 0,
    normalMax: 120,
    unit: 'degrees',
    referenceRangeText: '0° – 120° (AAOS: 120° with knee flexed; ~90° with knee extended)',
    functionalRange: '110° – 120° (Squatting, tying shoelaces, sitting in low chair: 90°–100°)',
    hypermobilityThreshold: 130,
    impingementRiskThreshold: 140,
    sliderMin: 0,
    sliderMax: 135,
    endFeel: {
      type: 'Soft (Soft tissue contact) or Firm',
      description: 'Contact between anterior thigh and lower abdomen (knee flexed); or Firm tension in posterior capsule, ischiofemoral ligament, and gluteus maximus.',
      abnormalEndFeel: 'Hard (Femoroacetabular Impingement - FAI CAM/Pincer lesion) or Empty.'
    },
    arthrokinematics: {
      type: 'Convex-on-Concave Ball-and-Socket (Enarthrodial)',
      rule: 'Convex Femoral Head within Concave Acetabulum',
      description: 'Convex femoral head spins and rolls anteriorly/superiorly while sliding posteriorly/inferiorly within the deep concave acetabulum (Neumann p. 493, Fig 12.23). Posterior slide maintains central congruence and prevents superior abutment against acetabular rim.',
      closePacked: 'Full extension, slight internal rotation, and abduction',
      loosePacked: '30° flexion, 30° abduction, slight external rotation'
    },
    muscles: {
      primeMovers: [
        { name: 'Iliopsoas (Psoas major & Iliacus)', innervation: 'Femoral Nerve (L2-L4) & L1-L3 ventral rami' },
        { name: 'Rectus femoris', innervation: 'Femoral Nerve (L2-L4)' },
        { name: 'Tensor fasciae latae (TFL)', innervation: 'Superior Gluteal Nerve (L4-S1)' },
        { name: 'Sartorius', innervation: 'Femoral Nerve (L2-L3)' },
        { name: 'Pectineus', innervation: 'Femoral Nerve (L2-L3)' }
      ],
      synergists: ['Adductor longus (when hip is in extension)', 'Gracilis'],
      antagonists: ['Gluteus maximus', 'Hamstrings (Biceps femoris, Semitendinosus, Semimembranosus)']
    },
    goniometry: {
      position: 'Supine, contralateral leg fully extended flat on table to stabilize pelvis, ipsilateral knee allowed to flex naturally.',
      fulcrum: 'Greater trochanter of the femur.',
      stationaryArm: 'Lateral midline of the pelvis (referencing mid-iliac crest line).',
      movableArm: 'Lateral midline of the femur (referencing lateral femoral condyle).',
      substitutions: 'Posterior pelvic tilt, lumbar spine flattening/flexion.'
    },
    citations: [
      { book: 'Neumann (3rd Ed)', chapter: 'Chapter 12: Hip', page: 'pp. 491–496, Table 12.3' },
      { book: "Braddom's PM&R (7th Ed)", chapter: 'Hip Osteoarthritis & Biomechanics', page: 'Ch. 4' },
      { book: 'Daniels & Worthingham (10th Ed)', chapter: 'Hip Flexion Muscle Testing', page: 'pp. 182–186' }
    ]
  },

  hip_extension: {
    id: 'hip_extension',
    region: 'hip',
    jointName: 'Hip Joint (Coxofemoral)',
    motionName: 'Extension',
    plane: 'Sagittal',
    axis: 'Coronal Axis (through Femoral Head)',
    normalMin: 0,
    normalMax: 20,
    unit: 'degrees',
    referenceRangeText: '0° – 20° (AAOS: 20°–30°, Neumann: up to 30° with pelvis free)',
    functionalRange: '10° – 15° (Essential for normal terminal stance gait stride length)',
    hypermobilityThreshold: 30,
    impingementRiskThreshold: 40,
    sliderMin: 0,
    sliderMax: 35,
    endFeel: {
      type: 'Firm (Ligamentous)',
      description: 'Massive tension in Iliofemoral ligament of Bigelow (strongest ligament in human body), pubofemoral/ischiofemoral ligaments, and iliopsoas muscle stretch.',
      abnormalEndFeel: 'Firm contracture (hip flexion contracture in sedentary or stroke patients).'
    },
    arthrokinematics: {
      type: 'Convex-on-Concave Arthrology',
      rule: 'Convex Femoral Head within Concave Acetabulum',
      description: 'Convex femoral head rolls posteriorly and slides anteriorly within the acetabulum (Neumann p. 493). Anterior slide winds the spiral orientation of the capsular ligaments taut, locking the joint into its close-packed stability.',
      closePacked: 'Full extension, slight abduction, and internal rotation',
      loosePacked: '30° flexion, 30° abduction, slight ER'
    },
    muscles: {
      primeMovers: [
        { name: 'Gluteus maximus', innervation: 'Inferior Gluteal Nerve (L5-S2)' },
        { name: 'Semimembranosus & Semitendinosus', innervation: 'Tibial division of Sciatic Nerve (L5-S2)' },
        { name: 'Biceps femoris (long head)', innervation: 'Tibial division of Sciatic Nerve (L5-S2)' },
        { name: 'Adductor magnus (posterior extensor head)', innervation: 'Tibial Nerve (L4-S1)' }
      ],
      synergists: ['Gluteus medius (posterior fibers)'],
      antagonists: ['Iliopsoas', 'Rectus femoris', 'Pectineus', 'TFL']
    },
    goniometry: {
      position: 'Prone, pelvis stabilized with straps or clinician hand over sacrum/PSIS, knee fully extended.',
      fulcrum: 'Greater trochanter of the femur.',
      stationaryArm: 'Lateral midline of the pelvis.',
      movableArm: 'Lateral midline of the femur (lateral femoral condyle).',
      substitutions: 'Anterior pelvic tilt, lumbar hyperextension (lordosis).'
    },
    citations: [
      { book: 'Neumann (3rd Ed)', chapter: 'Chapter 12: Hip', page: 'pp. 493–498, Table 12.3' },
      { book: "Braddom's PM&R (7th Ed)", chapter: 'Gait Impairment & Hip Extension', page: 'Ch. 5' },
      { book: 'Daniels & Worthingham (10th Ed)', chapter: 'Hip Extension Testing', page: 'pp. 187–193' }
    ]
  },

  hip_abduction: {
    id: 'hip_abduction',
    region: 'hip',
    jointName: 'Hip Joint (Coxofemoral)',
    motionName: 'Abduction',
    plane: 'Frontal',
    axis: 'Anteroposterior Axis (through Femoral Head)',
    normalMin: 0,
    normalMax: 40,
    unit: 'degrees',
    referenceRangeText: '0° – 40° (AAOS: 40°–45°)',
    functionalRange: '20° – 25° (Getting in/out of car, sidestepping, stair climbing)',
    hypermobilityThreshold: 50,
    impingementRiskThreshold: 60,
    sliderMin: 0,
    sliderMax: 50,
    endFeel: {
      type: 'Firm (Ligamentous / Muscular)',
      description: 'Tension in pubofemoral ligament, inferior joint capsule, and hip adductor muscles (adductor longus/brevis/magnus, gracilis).',
      abnormalEndFeel: 'Hard (superior femoral neck contact on acetabular rim).'
    },
    arthrokinematics: {
      type: 'Convex-on-Concave Arthrology',
      rule: 'Convex Femoral Head within Concave Acetabulum',
      description: 'Convex femoral head rolls superiorly and slides inferiorly within the acetabulum (Neumann p. 494, Fig 12.24). Inferior slide tensions the pubofemoral ligament and inferior capsule.',
      closePacked: 'Full extension, abduction, and internal rotation',
      loosePacked: '30° flexion, 30° abduction'
    },
    muscles: {
      primeMovers: [
        { name: 'Gluteus medius (primary pelvic stabilizer in single-leg stance)', innervation: 'Superior Gluteal Nerve (L4-S1)' },
        { name: 'Gluteus minimus', innervation: 'Superior Gluteal Nerve (L4-S1)' },
        { name: 'Tensor fasciae latae (TFL)', innervation: 'Superior Gluteal Nerve (L4-S1)' }
      ],
      synergists: ['Piriformis', 'Sartorius'],
      antagonists: ['Adductor longus', 'Adductor brevis', 'Adductor magnus', 'Pectineus', 'Gracilis']
    },
    goniometry: {
      position: 'Supine, legs in anatomical position, pelvis level.',
      fulcrum: 'Anterior superior iliac spine (ASIS) of the measured limb.',
      stationaryArm: 'Horizontal line connecting both ASIS prominences.',
      movableArm: 'Anterior midline of the femur (referencing patella center).',
      substitutions: 'Lateral trunk flexion, hip external rotation and flexion.'
    },
    citations: [
      { book: 'Neumann (3rd Ed)', chapter: 'Chapter 12: Hip', page: 'pp. 494–499, Table 12.3' },
      { book: 'Daniels & Worthingham (10th Ed)', chapter: 'Hip Abduction Testing (Trendelenburg)', page: 'pp. 194–199' }
    ]
  },

  hip_adduction: {
    id: 'hip_adduction',
    region: 'hip',
    jointName: 'Hip Joint (Coxofemoral)',
    motionName: 'Adduction',
    plane: 'Frontal',
    axis: 'Anteroposterior',
    normalMin: 0,
    normalMax: 25,
    unit: 'degrees',
    referenceRangeText: '0° – 25° (AAOS: 25°–30°)',
    functionalRange: '15° – 20° (Crossing legs while seated)',
    hypermobilityThreshold: 35,
    impingementRiskThreshold: 45,
    sliderMin: 0,
    sliderMax: 35,
    endFeel: {
      type: 'Firm (Ligamentous / Muscular)',
      description: 'Tension in ischiofemoral ligament, superior capsule, and abductor muscles (gluteus medius, TFL).',
      abnormalEndFeel: 'Hard (bony block) or Empty.'
    },
    arthrokinematics: {
      type: 'Convex-on-Concave Arthrology',
      rule: 'Femoral head rolls inferiorly and slides superiorly',
      description: 'Femoral head rolls inferiorly/medially and slides superiorly/laterally within the acetabulum.',
      closePacked: 'Full extension, abduction, and internal rotation',
      loosePacked: '30° flexion, 30° abduction'
    },
    muscles: {
      primeMovers: [
        { name: 'Adductor longus & brevis', innervation: 'Obturator Nerve (L2-L4)' },
        { name: 'Adductor magnus (anterior head)', innervation: 'Obturator Nerve (L2-L4)' },
        { name: 'Gracilis', innervation: 'Obturator Nerve (L2-L3)' },
        { name: 'Pectineus', innervation: 'Femoral Nerve (L2-L3)' }
      ],
      synergists: ['Adductor magnus posterior head', 'Quadratus femoris'],
      antagonists: ['Gluteus medius', 'Gluteus minimus', 'TFL']
    },
    goniometry: {
      position: 'Supine, contralateral limb slightly abducted to allow room for measured limb to cross.',
      fulcrum: 'ASIS of measured limb.',
      stationaryArm: 'Horizontal line connecting both ASIS.',
      movableArm: 'Anterior midline of femur.',
      substitutions: 'Hip internal rotation, lateral pelvic tilt.'
    },
    citations: [
      { book: 'Neumann (3rd Ed)', chapter: 'Chapter 12: Hip', page: 'p. 494, Table 12.3' },
      { book: 'Daniels & Worthingham (10th Ed)', chapter: 'Hip Adduction Testing', page: 'pp. 200–204' }
    ]
  },

  hip_internal_rotation: {
    id: 'hip_internal_rotation',
    region: 'hip',
    jointName: 'Hip Joint (Coxofemoral)',
    motionName: 'Internal (Medial) Rotation',
    plane: 'Transverse',
    axis: 'Longitudinal Femur Axis',
    normalMin: 0,
    normalMax: 35,
    unit: 'degrees',
    referenceRangeText: '0° – 35° (AAOS: 35°–45°)',
    functionalRange: '20° – 25° (Normal gait pelvic rotation during stance)',
    hypermobilityThreshold: 50,
    impingementRiskThreshold: 60,
    sliderMin: 0,
    sliderMax: 50,
    endFeel: {
      type: 'Firm (Capsular)',
      description: 'Tension in posterior joint capsule, ischiofemoral ligament, and external rotators (piriformis, gluteus maximus).',
      abnormalEndFeel: 'Hard (femoroacetabular impingement).'
    },
    arthrokinematics: {
      type: 'Convex-on-Concave Arthrology',
      rule: 'Femoral head rolls anteriorly and slides posteriorly',
      description: 'Convex femoral head rolls anteriorly and slides posteriorly within the acetabulum.',
      closePacked: 'Full extension, abduction, and internal rotation',
      loosePacked: '30° flexion, 30° abduction'
    },
    muscles: {
      primeMovers: [
        { name: 'Gluteus minimus (anterior fibers)', innervation: 'Superior Gluteal Nerve (L4-S1)' },
        { name: 'Gluteus medius (anterior fibers)', innervation: 'Superior Gluteal Nerve (L4-S1)' },
        { name: 'Tensor fasciae latae (TFL)', innervation: 'Superior Gluteal Nerve (L4-S1)' }
      ],
      synergists: ['Adductor longus', 'Pectineus', 'Semimembranosus'],
      antagonists: ['Gluteus maximus', 'Piriformis', 'Deep rotators']
    },
    goniometry: {
      position: 'Seated with knees flexed 90° over edge of table, towel roll under distal thigh.',
      fulcrum: 'Anterior aspect of patella.',
      stationaryArm: 'Perpendicular to floor (vertical reference).',
      movableArm: 'Anterior midline of tibia (between malleoli). Leg moves laterally for hip IR!',
      substitutions: 'Lateral pelvic tilt, trunk leaning.'
    },
    citations: [
      { book: 'Neumann (3rd Ed)', chapter: 'Chapter 12: Hip', page: 'p. 495, Table 12.3' },
      { book: 'Daniels & Worthingham (10th Ed)', chapter: 'Hip Internal Rotation', page: 'pp. 204–207' }
    ]
  },

  hip_external_rotation: {
    id: 'hip_external_rotation',
    region: 'hip',
    jointName: 'Hip Joint (Coxofemoral)',
    motionName: 'External (Lateral) Rotation',
    plane: 'Transverse',
    axis: 'Longitudinal Femur Axis',
    normalMin: 0,
    normalMax: 45,
    unit: 'degrees',
    referenceRangeText: '0° – 45° (AAOS: 45°–50°)',
    functionalRange: '30° (Crossing legs ankle-on-knee, putting on socks)',
    hypermobilityThreshold: 60,
    impingementRiskThreshold: 70,
    sliderMin: 0,
    sliderMax: 60,
    endFeel: {
      type: 'Firm (Ligamentous)',
      description: 'Tension in iliofemoral ligament (lateral band), pubofemoral ligament, anterior capsule, and internal rotator muscles.',
      abnormalEndFeel: 'Hard or Empty.'
    },
    arthrokinematics: {
      type: 'Convex-on-Concave Arthrology',
      rule: 'Femoral head rolls posteriorly and slides anteriorly',
      description: 'Convex femoral head rolls posteriorly and slides anteriorly within the acetabulum.',
      closePacked: 'Full extension, abduction, and internal rotation',
      loosePacked: '30° flexion, 30° abduction'
    },
    muscles: {
      primeMovers: [
        { name: 'Gluteus maximus', innervation: 'Inferior Gluteal Nerve (L5-S2)' },
        { name: 'Piriformis', innervation: 'Nerve to Piriformis (S1-S2)' },
        { name: 'Obturator internus & externus', innervation: 'Nerve to Obturator internus (L5-S1) & Obturator N. (L3-L4)' },
        { name: 'Quadratus femoris', innervation: 'Nerve to Quadratus femoris (L4-S1)' }
      ],
      synergists: ['Gemellus superior/inferior', 'Sartorius', 'Biceps femoris'],
      antagonists: ['Gluteus minimus', 'Gluteus medius (anterior)', 'TFL']
    },
    goniometry: {
      position: 'Seated with knee flexed 90° over edge of table.',
      fulcrum: 'Anterior aspect of patella.',
      stationaryArm: 'Perpendicular to floor.',
      movableArm: 'Anterior midline of tibia. Leg moves medially across opposite shin for hip ER!',
      substitutions: 'Pelvic elevation on measured side, contralateral trunk tilt.'
    },
    citations: [
      { book: 'Neumann (3rd Ed)', chapter: 'Chapter 12: Hip', page: 'p. 495, Table 12.3' },
      { book: 'Daniels & Worthingham (10th Ed)', chapter: 'Hip External Rotation', page: 'pp. 200–203' }
    ]
  },

  // ==========================================
  // KNEE JOINT
  // ==========================================
  knee_flexion: {
    id: 'knee_flexion',
    region: 'knee',
    jointName: 'Knee Joint (Tibiofemoral & Patellofemoral)',
    motionName: 'Flexion',
    plane: 'Sagittal',
    axis: 'Coronal Axis (through Femoral Condyles, Migrating Centrode)',
    normalMin: 0,
    normalMax: 135,
    unit: 'degrees',
    referenceRangeText: '0° – 135° (AAOS: 135°, Neumann: up to 145° in full deep squat)',
    functionalRange: '60° (Level walking), 90° (Stair climbing), 105°–115° (Rising from chair), 130° (Deep squat)',
    hypermobilityThreshold: 150,
    impingementRiskThreshold: 160,
    sliderMin: 0,
    sliderMax: 150,
    endFeel: {
      type: 'Soft (Soft tissue approximation) or Firm',
      description: 'Contact between posterior calf musculature and hamstring/thigh mass; or Firm tension in anterior joint capsule, patellar retinacula, and quadriceps femoris.',
      abnormalEndFeel: 'Springy block (meniscal bucket-handle tear) or Empty (acute ACL/PCL hemarthrosis).'
    },
    arthrokinematics: {
      type: 'Bicondylar Modified Hinge',
      rule: 'Open Chain: Concave Tibia rolls and slides posteriorly on Convex Femoral Condyles',
      description: 'In open kinetic chain (tibial-on-femoral): concave tibial condyles roll and slide posteriorly on the convex femoral condyles. In closed kinetic chain (femoral-on-tibial squat): convex femoral condyles roll posteriorly and slide anteriorly (Neumann p. 543, Fig 13.12). Popliteus contracts to "unlock" the knee by externally rotating femur relative to tibia.',
      closePacked: 'Full extension with external rotation of tibia',
      loosePacked: '25° – 30° flexion'
    },
    muscles: {
      primeMovers: [
        { name: 'Biceps femoris (long and short heads)', innervation: 'Sciatic Nerve (Tibial & Common Peroneal divisions, L5-S2)' },
        { name: 'Semitendinosus', innervation: 'Tibial Nerve (L5-S2)' },
        { name: 'Semimembranosus', innervation: 'Tibial Nerve (L5-S2)' }
      ],
      synergists: [
        { name: 'Gastrocnemius', innervation: 'Tibial Nerve (S1-S2)' },
        { name: 'Popliteus (unlocks knee)', innervation: 'Tibial Nerve (L4-S1)' },
        { name: 'Gracilis & Sartorius', innervation: 'Obturator N. & Femoral N.' }
      ],
      antagonists: ['Quadriceps femoris (Rectus femoris, Vastus lateralis, medialis, intermedius)']
    },
    goniometry: {
      position: 'Supine (or prone), hip flexed to 90° or allowed to flex naturally to relieve rectus femoris passive tension.',
      fulcrum: 'Lateral epicondyle of the femur.',
      stationaryArm: 'Lateral midline of the femur (referencing greater trochanter).',
      movableArm: 'Lateral midline of the fibula (referencing lateral malleolus and fibular head).',
      substitutions: 'Hip abduction, pelvic rotation.'
    },
    citations: [
      { book: 'Neumann (3rd Ed)', chapter: 'Chapter 13: Knee', page: 'pp. 542–548, Table 13.5' },
      { book: "Braddom's PM&R (7th Ed)", chapter: 'Total Knee Arthroplasty Rehabilitation', page: 'Ch. 4' },
      { book: 'Daniels & Worthingham (10th Ed)', chapter: 'Knee Flexion Testing', page: 'pp. 214–218' }
    ]
  },

  knee_extension: {
    id: 'knee_extension',
    region: 'knee',
    jointName: 'Knee Joint (Tibiofemoral & Patellofemoral)',
    motionName: 'Extension & Screw-Home Mechanism',
    plane: 'Sagittal (with coupled transverse rotation)',
    axis: 'Coronal Axis',
    normalMin: 0,
    normalMax: 0,
    unit: 'degrees',
    referenceRangeText: '0° (AAOS: 0°, Normal hyperextension / genu recurvatum up to 3°–5°)',
    functionalRange: '0° (Full extension essential for stable locked stance without quadriceps fatigue)',
    hypermobilityThreshold: -5,
    impingementRiskThreshold: -15,
    sliderMin: -10,
    sliderMax: 15,
    endFeel: {
      type: 'Firm (Ligamentous / Capsular)',
      description: 'Tension in posterior joint capsule, oblique popliteal ligament, arcuate ligament, ACL and PCL, and collateral ligaments.',
      abnormalEndFeel: 'Hard (bony impingement in genu recurvatum) or Springy (locked meniscus).'
    },
    arthrokinematics: {
      type: 'Modified Hinge with "Screw-Home" Rotational Locking',
      rule: 'Terminal 30° Extension: Tibia externally rotates ~10° on Femur',
      description: 'During the final 30° of knee extension, the tibia automatically rotates externally approximately 10° relative to the femur (Neumann p. 546, Fig 13.14). Biomechanical drivers: (1) Medial femoral condyle articular curve is longer than lateral; (2) Passive tension in ACL; (3) Slight lateral pull of quadriceps. This mechanically locks the knee joint in full extension for upright standing with minimal muscular effort.',
      closePacked: 'Full extension with tibial external rotation',
      loosePacked: '25° – 30° flexion'
    },
    muscles: {
      primeMovers: [
        { name: 'Rectus femoris', innervation: 'Femoral Nerve (L2-L4)' },
        { name: 'Vastus lateralis', innervation: 'Femoral Nerve (L2-L4)' },
        { name: 'Vastus medialis (including VMO fibers)', innervation: 'Femoral Nerve (L2-L4)' },
        { name: 'Vastus intermedius', innervation: 'Femoral Nerve (L2-L4)' }
      ],
      synergists: ['Tensor fasciae latae (via iliotibial band stabilizing lateral knee)'],
      antagonists: ['Hamstrings', 'Gastrocnemius', 'Popliteus']
    },
    goniometry: {
      position: 'Supine, towel roll under calcaneus/ankle to permit full knee extension uninhibited by table contact.',
      fulcrum: 'Lateral epicondyle of the femur.',
      stationaryArm: 'Lateral midline of the femur (greater trochanter).',
      movableArm: 'Lateral midline of the fibula (lateral malleolus).',
      substitutions: 'Hip external rotation, pelvic elevation.'
    },
    citations: [
      { book: 'Neumann (3rd Ed)', chapter: 'Chapter 13: Knee', page: 'pp. 545–549, Table 13.5 & Fig 13.14' },
      { book: "Braddom's PM&R (7th Ed)", chapter: 'Gait Biomechanics: Stance Stability', page: 'Ch. 5' },
      { book: 'Daniels & Worthingham (10th Ed)', chapter: 'Knee Extension Testing', page: 'pp. 208–213' }
    ]
  },

  // ==========================================
  // ANKLE & FOOT
  // ==========================================
  ankle_dorsiflexion: {
    id: 'ankle_dorsiflexion',
    region: 'ankle_foot',
    jointName: 'Ankle Joint (Talocrural)',
    motionName: 'Dorsiflexion',
    plane: 'Sagittal',
    axis: 'Oblique Trimalleolar Axis',
    normalMin: 0,
    normalMax: 20,
    unit: 'degrees',
    referenceRangeText: '0° – 20° (AAOS: 20° with knee flexed; ~10° with knee extended)',
    functionalRange: '10° (Essential for stance phase progression, stair descent, squatting)',
    hypermobilityThreshold: 25,
    impingementRiskThreshold: 35,
    sliderMin: 0,
    sliderMax: 30,
    endFeel: {
      type: 'Firm (Ligamentous / Muscular)',
      description: 'Tension in Achilles tendon (calcaneal tendon) / gastrocnemius-soleus complex, posterior talofibular ligament, and calcaneofibular ligament.',
      abnormalEndFeel: 'Hard (anterior osseous ankle impingement: anterior tibial osteophyte hitting talar neck).'
    },
    arthrokinematics: {
      type: 'Convex-on-Concave Mortise Joint',
      rule: 'Convex Trochlea of Talus on Concave Tibiofibular Mortise',
      description: 'Convex dome of the talus rolls anteriorly and slides posteriorly within the mortise (Neumann p. 608, Fig 14.16). Because the anterior talar dome is 2.5 mm wider than the posterior dome, dorsiflexion wedges the talus firmly into the mortise, spreading the malleoli and making dorsiflexion the close-packed position.',
      closePacked: 'Full dorsiflexion',
      loosePacked: '10° plantarflexion, midway between inversion and eversion'
    },
    muscles: {
      primeMovers: [
        { name: 'Tibialis anterior (primary dorsiflexor and inverter)', innervation: 'Deep Peroneal (Fibular) Nerve (L4-S1)' },
        { name: 'Extensor digitorum longus', innervation: 'Deep Peroneal Nerve (L5-S1)' },
        { name: 'Extensor hallucis longus', innervation: 'Deep Peroneal Nerve (L5-S1)' },
        { name: 'Peroneus (Fibularis) tertius', innervation: 'Deep Peroneal Nerve (L5-S1)' }
      ],
      synergists: ['Peroneus longus/brevis (balance inversion)'],
      antagonists: ['Gastrocnemius', 'Soleus', 'Plantaris', 'Tibialis posterior']
    },
    goniometry: {
      position: 'Seated with knee flexed to 90° over edge of table (relaxes gastrocnemius), ankle in 90° neutral.',
      fulcrum: 'Lateral malleolus of the fibula.',
      stationaryArm: 'Lateral midline of the fibula (referencing fibular head).',
      movableArm: 'Parallel to the lateral aspect of the 5th metatarsal bone.',
      substitutions: 'Knee extension, subtalar pronation/eversion (midfoot collapse break).'
    },
    citations: [
      { book: 'Neumann (3rd Ed)', chapter: 'Chapter 14: Ankle and Foot', page: 'pp. 607–612, Table 14.5' },
      { book: "Braddom's PM&R (7th Ed)", chapter: 'Ankle & Foot Biomechanics & Orthotics', page: 'Ch. 4' },
      { book: 'Daniels & Worthingham (10th Ed)', chapter: 'Ankle Dorsiflexion', page: 'pp. 222–225' }
    ]
  },

  ankle_plantarflexion: {
    id: 'ankle_plantarflexion',
    region: 'ankle_foot',
    jointName: 'Ankle Joint (Talocrural)',
    motionName: 'Plantarflexion',
    plane: 'Sagittal',
    axis: 'Oblique Trimalleolar Axis',
    normalMin: 0,
    normalMax: 50,
    unit: 'degrees',
    referenceRangeText: '0° – 50° (AAOS standard: 50°)',
    functionalRange: '20° – 25° (Essential for terminal stance push-off during walking & running)',
    hypermobilityThreshold: 60,
    impingementRiskThreshold: 70,
    sliderMin: 0,
    sliderMax: 60,
    endFeel: {
      type: 'Firm (Ligamentous / Capsular) or Hard',
      description: 'Tension in anterior talofibular ligament (ATFL), anterior capsule, and dorsiflexor muscles; or Hard contact of posterior talar process with posterior tibia (os trigonum impingement).',
      abnormalEndFeel: 'Hard / Sharp pain in posterior ankle (os trigonum syndrome in ballet dancers).'
    },
    arthrokinematics: {
      type: 'Convex-on-Concave Mortise Joint',
      rule: 'Convex Talus on Concave Mortise',
      description: 'Convex trochlea of talus rolls posteriorly and slides anteriorly within the mortise (Neumann p. 608). The narrower posterior talus enters the mortise, creating significant ligamentous laxity and making plantarflexion the most common position for inversion ankle sprains.',
      closePacked: 'Full dorsiflexion',
      loosePacked: '10° plantarflexion'
    },
    muscles: {
      primeMovers: [
        { name: 'Gastrocnemius (fast power push-off)', innervation: 'Tibial Nerve (S1-S2)' },
        { name: 'Soleus (tonic postural antigravity muscle)', innervation: 'Tibial Nerve (S1-S2)' }
      ],
      synergists: [
        { name: 'Tibialis posterior', innervation: 'Tibial Nerve (L4-L5)' },
        { name: 'Flexor hallucis longus & Flexor digitorum longus', innervation: 'Tibial Nerve (L5-S2)' },
        { name: 'Peroneus longus & brevis', innervation: 'Superficial Peroneal Nerve (L5-S1)' }
      ],
      antagonists: ['Tibialis anterior', 'Extensor digitorum longus', 'EHL']
    },
    goniometry: {
      position: 'Prone with foot off edge of table, or seated with knee flexed 90°.',
      fulcrum: 'Lateral malleolus.',
      stationaryArm: 'Lateral midline of the fibula.',
      movableArm: 'Parallel to the lateral aspect of 5th metatarsal.',
      substitutions: 'Knee flexion, toe curling.'
    },
    citations: [
      { book: 'Neumann (3rd Ed)', chapter: 'Chapter 14: Ankle and Foot', page: 'pp. 607–612, Table 14.5' },
      { book: 'Daniels & Worthingham (10th Ed)', chapter: 'Ankle Plantarflexion Testing', page: 'pp. 226–231' }
    ]
  },

  subtalar_inversion: {
    id: 'subtalar_inversion',
    region: 'ankle_foot',
    jointName: 'Subtalar & Transverse Tarsal Joints',
    motionName: 'Inversion (Supination component)',
    plane: 'Frontal (Triplanar component)',
    axis: 'Oblique Subtalar Axis (42° from horizontal, 16° from sagittal)',
    normalMin: 0,
    normalMax: 30,
    unit: 'degrees',
    referenceRangeText: '0° – 30° (AAOS: 30°–35°)',
    functionalRange: '20° (Walking across sloping ground, trail running)',
    hypermobilityThreshold: 40,
    impingementRiskThreshold: 48,
    sliderMin: 0,
    sliderMax: 40,
    endFeel: {
      type: 'Firm (Ligamentous)',
      description: 'Tension in calcaneofibular ligament, lateral talocalcaneal ligament, cervical ligament, and lateral peroneus muscle stretch.',
      abnormalEndFeel: 'Empty (acute ATFL/CFL grade III ligament rupture).'
    },
    arthrokinematics: {
      type: 'Triplanar Multi-Articular Gliding',
      rule: 'Inversion = Calcaneus tilts medially + Adduction + Plantarflexion',
      description: 'Calcaneus tilts into varus (medially) and adducts relative to the talus. Transverse tarsal joint axes cross and lock, turning the foot into a rigid lever (Neumann p. 614, Fig 14.24).',
      closePacked: 'Full inversion (supination)',
      loosePacked: 'Midway between extremes'
    },
    muscles: {
      primeMovers: [
        { name: 'Tibialis posterior (primary dynamic arch supporter)', innervation: 'Tibial Nerve (L4-L5)' },
        { name: 'Tibialis anterior', innervation: 'Deep Peroneal Nerve (L4-L5)' }
      ],
      synergists: ['Flexor digitorum longus', 'Flexor hallucis longus'],
      antagonists: ['Peroneus longus', 'Peroneus brevis']
    },
    goniometry: {
      position: 'Prone with foot over end of table, hip and knee in neutral.',
      fulcrum: 'Posterior aspect of ankle midway between the malleoli.',
      stationaryArm: 'Posterior midline of the lower leg (calcaneal tendon line).',
      movableArm: 'Posterior midline of the calcaneus.',
      substitutions: 'Tibial internal rotation, hip internal rotation.'
    },
    citations: [
      { book: 'Neumann (3rd Ed)', chapter: 'Chapter 14: Ankle and Foot', page: 'pp. 613–618, Table 14.5' },
      { book: 'Daniels & Worthingham (10th Ed)', chapter: 'Foot Inversion', page: 'pp. 232–235' }
    ]
  },

  subtalar_eversion: {
    id: 'subtalar_eversion',
    region: 'ankle_foot',
    jointName: 'Subtalar & Transverse Tarsal Joints',
    motionName: 'Eversion (Pronation component)',
    plane: 'Frontal',
    axis: 'Oblique Subtalar Axis',
    normalMin: 0,
    normalMax: 15,
    unit: 'degrees',
    referenceRangeText: '0° – 15° (AAOS: 15°–20°)',
    functionalRange: '10° – 15° (Adapting to uneven surfaces, loading response in gait)',
    hypermobilityThreshold: 25,
    impingementRiskThreshold: 32,
    sliderMin: 0,
    sliderMax: 25,
    endFeel: {
      type: 'Hard (Bone block) or Firm',
      description: 'Contact between lateral calcaneus and lateral malleolus, or tension in deltoid ligament.',
      abnormalEndFeel: 'Hard / Painful (subtalar coalition).'
    },
    arthrokinematics: {
      type: 'Triplanar Gliding',
      rule: 'Eversion = Calcaneus tilts laterally + Abduction + Dorsiflexion',
      description: 'Calcaneus tilts into valgus (laterally) and abducts relative to the talus, unlocking midtarsal joints for shock absorption.',
      closePacked: 'Full inversion (supination)',
      loosePacked: 'Neutral'
    },
    muscles: {
      primeMovers: [
        { name: 'Peroneus (Fibularis) longus', innervation: 'Superficial Peroneal Nerve (L5-S1)' },
        { name: 'Peroneus (Fibularis) brevis', innervation: 'Superficial Peroneal Nerve (L5-S1)' }
      ],
      synergists: ['Peroneus tertius', 'Extensor digitorum longus'],
      antagonists: ['Tibialis posterior', 'Tibialis anterior']
    },
    goniometry: {
      position: 'Prone, foot over end of table.',
      fulcrum: 'Posterior aspect of ankle midway between malleoli.',
      stationaryArm: 'Posterior midline of lower leg.',
      movableArm: 'Posterior midline of calcaneus.',
      substitutions: 'Hip external rotation, knee flexion.'
    },
    citations: [
      { book: 'Neumann (3rd Ed)', chapter: 'Chapter 14: Ankle and Foot', page: 'p. 614, Table 14.5' },
      { book: 'Daniels & Worthingham (10th Ed)', chapter: 'Foot Eversion Testing', page: 'pp. 236–239' }
    ]
  },

  first_mtp_extension: {
    id: 'first_mtp_extension',
    region: 'ankle_foot',
    jointName: '1st Metatarsophalangeal Joint (1st MTP)',
    motionName: 'Great Toe Extension & Windlass Mechanism',
    plane: 'Sagittal',
    axis: 'Coronal Axis (through 1st Metatarsal Head)',
    normalMin: 0,
    normalMax: 70,
    unit: 'degrees',
    referenceRangeText: '0° – 70° (AAOS: 70°–90° passively)',
    functionalRange: '60° – 65° (Critical threshold for normal push-off in terminal stance gait)',
    hypermobilityThreshold: 85,
    impingementRiskThreshold: 95,
    sliderMin: 0,
    sliderMax: 90,
    endFeel: {
      type: 'Firm (Ligamentous / Plantar Fascia)',
      description: 'Tension in plantar plate, collateral ligaments, flexor hallucis brevis, and the plantar aponeurosis.',
      abnormalEndFeel: 'Hard (Hallux rigidus - osteophytes on dorsal metatarsal head preventing push-off).'
    },
    arthrokinematics: {
      type: 'Concave-on-Convex Condyloid Joint',
      rule: 'Concave Phalanx rolls and slides dorsally on Convex Metatarsal Head',
      description: 'The Windlass Mechanism (Hicks, 1954; Neumann p. 627, Fig 14.39): Extension of the 1st MTP winds the plantar aponeurosis around the metatarsal head, pulling the calcaneus forward, raising the medial longitudinal arch, and inverting the hindfoot into a rigid propulsion lever for gait push-off!',
      closePacked: 'Full extension',
      loosePacked: '10° extension'
    },
    muscles: {
      primeMovers: [
        { name: 'Extensor hallucis longus (EHL)', innervation: 'Deep Peroneal Nerve (L5-S1)' },
        { name: 'Extensor hallucis brevis (EHB)', innervation: 'Deep Peroneal Nerve (S1-S2)' }
      ],
      synergists: ['Extensor digitorum longus'],
      antagonists: ['Flexor hallucis longus', 'Flexor hallucis brevis']
    },
    goniometry: {
      position: 'Seated or supine, ankle in 90° neutral.',
      fulcrum: 'Medial aspect of the 1st metatarsophalangeal joint.',
      stationaryArm: 'Medial midline of 1st metatarsal bone.',
      movableArm: 'Medial midline of proximal phalanx of great toe.',
      substitutions: 'Ankle plantarflexion, interphalangeal joint flexion.'
    },
    citations: [
      { book: 'Neumann (3rd Ed)', chapter: 'Chapter 14: Ankle and Foot', page: 'pp. 625–629, Fig 14.39 & Table 14.6' },
      { book: "Braddom's PM&R (7th Ed)", chapter: 'Gait Biomechanics: Terminal Stance Windlass', page: 'Ch. 5' },
      { book: 'Daniels & Worthingham (10th Ed)', chapter: 'Toe Extension Testing', page: 'pp. 240–243' }
    ]
  },

  first_mtp_flexion: {
    id: 'first_mtp_flexion',
    region: 'ankle_foot',
    jointName: '1st Metatarsophalangeal Joint (1st MTP)',
    motionName: 'Great Toe Flexion',
    plane: 'Sagittal',
    axis: 'Coronal',
    normalMin: 0,
    normalMax: 45,
    unit: 'degrees',
    referenceRangeText: '0° – 45° (AAOS: 45°)',
    functionalRange: '30° (Gripping ground during balance and barefoot ambulation)',
    hypermobilityThreshold: 55,
    impingementRiskThreshold: 65,
    sliderMin: 0,
    sliderMax: 50,
    endFeel: {
      type: 'Firm (Ligamentous)',
      description: 'Tension in dorsal capsule and collateral ligaments.',
      abnormalEndFeel: 'Hard (arthrosis).'
    },
    arthrokinematics: {
      type: 'Concave-on-Convex',
      rule: 'Phalanx rolls and slides plantarly on metatarsal head',
      description: 'Concave base of proximal phalanx rolls and slides plantarly across convex metatarsal head.',
      closePacked: 'Full extension',
      loosePacked: '10° extension'
    },
    muscles: {
      primeMovers: [
        { name: 'Flexor hallucis brevis', innervation: 'Medial Plantar Nerve (S1-S2)' },
        { name: 'Flexor hallucis longus (FHL)', innervation: 'Tibial Nerve (S1-S2)' }
      ],
      synergists: ['Abductor hallucis', 'Adductor hallucis'],
      antagonists: ['Extensor hallucis longus', 'EHB']
    },
    goniometry: {
      position: 'Supine or seated, ankle neutral.',
      fulcrum: 'Dorsal / medial aspect of 1st MTP.',
      stationaryArm: 'Dorsal midline of 1st metatarsal.',
      movableArm: 'Dorsal midline of proximal phalanx.',
      substitutions: 'Ankle dorsiflexion.'
    },
    citations: [
      { book: 'Neumann (3rd Ed)', chapter: 'Chapter 14: Ankle and Foot', page: 'p. 627, Table 14.6' },
      { book: 'Daniels & Worthingham (10th Ed)', chapter: 'Toe Flexion Testing', page: 'p. 244' }
    ]
  }
};

/**
 * Clinical Pathology Presets to demonstrate restricted ROM patterns
 */
/**
 * Clinical Pathology Presets to demonstrate restricted ROM patterns & Capsular End-Feels
 */
export const PATHOLOGY_PRESETS = [
  {
    id: 'normal',
    name: 'Normal Physiological Mobility',
    description: 'Full unhindered textbook range of motion across all planes.'
  },
  {
    id: 'adhesive_capsulitis',
    name: 'Adhesive Capsulitis (Frozen Shoulder)',
    primaryJointId: 'shoulder_abduction',
    description: 'Classic Cyriax Capsular Pattern: Severe limitation in ER > Abduction > IR due to contracture of axillary pouch, coracohumeral ligament (CHL), and rotator interval fibrosis.',
    restrictions: {
      shoulder_abduction: {
        max: 65,
        targetDegrees: 65,
        label: 'Frozen Shoulder (Abduction: 65° Max)',
        explanation: 'พังผืดหดรั้งของ Inferior Capsule (Axillary Pouch) ขัดขวางการเลื่อนตัวลง (Inferior Slide) ของหัว Humerus ทำให้แขนกางติดล็อกที่ ~65° ทันที!'
      },
      shoulder_external_rotation: {
        max: 20,
        targetDegrees: 20,
        label: 'Frozen Shoulder (External Rotation: 20° Max)',
        explanation: 'Coracohumeral Ligament และ Rotator Interval พังผืดหดรั้งรุนแรงที่สุดตาม Capsular Pattern จำกัดการหมุนออกไม่เกิน 20° (ปกติ 90°)'
      },
      shoulder_flexion: {
        max: 80,
        targetDegrees: 80,
        label: 'Frozen Shoulder (Flexion: 80° Max)',
        explanation: 'Anterior Capsule และ Axillary Pouch ติดล็อก หยุดการยกแขนไปข้างหน้าไว้ที่ ~80°'
      },
      shoulder_internal_rotation: {
        max: 35,
        targetDegrees: 35,
        label: 'Frozen Shoulder (Internal Rotation: 35° Max)',
        explanation: 'Posterior Capsule พังผืดตึงรั้ง จำกัดการเอื้อมมือไปด้านหลัง'
      }
    }
  },
  {
    id: 'subacromial_impingement',
    name: 'Subacromial Impingement Syndrome',
    primaryJointId: 'shoulder_abduction',
    description: 'Painful Arc between 60° and 120° of abduction caused by supraspinatus tendon & subacromial bursa compression.',
    restrictions: {
      shoulder_abduction: {
        max: 120,
        targetDegrees: 90,
        label: 'Impingement Painful Arc (60°–120°)',
        explanation: 'เส้นเอ็น Supraspinatus และถุง Bursa ถูกเพดาน Acromion กดเบียดรุนแรงในช่วง 60°–120° ทำให้เจ็บขัดและชะงักการยกแขน'
      }
    }
  },
  {
    id: 'knee_flexion_contracture',
    name: 'Knee Flexion Contracture (Post-Op/Stroke)',
    primaryJointId: 'knee_extension',
    description: 'Inability to achieve terminal 0° extension due to posterior capsular tightening and hamstring spasticity.',
    restrictions: {
      knee_extension: {
        min: 15,
        max: 15,
        targetDegrees: 15,
        label: 'Knee Contracture (Lacks 15° Extension)',
        explanation: 'ผู้ป่วยขาดการเหยียดเข่าสุด 15° (Terminal extension deficit) จาก posterior capsule และ hamstrings หดเกร็ง'
      }
    }
  },
  {
    id: 'hallux_rigidus',
    name: 'Hallux Rigidus (1st MTP Arthrosis)',
    primaryJointId: 'first_mtp_extension',
    description: 'Severe loss of great toe extension (<30°) leading to apropulsive gait and compensatory lateral foot rolling.',
    restrictions: {
      first_mtp_extension: {
        max: 25,
        targetDegrees: 25,
        label: 'Hallux Rigidus (25° Max)',
        explanation: 'กระดูกงอก Dorsal Osteophyte ที่หัวกระดูก Metatarsal ขัดขวางการกระดกนิ้วโป้งเท้า ไม่สามารถเดินลงน้ำหนักแบบปกติได้'
      }
    }
  },
  {
    id: 'wrist_drop',
    name: 'Radial Nerve Palsy (Wrist Drop)',
    primaryJointId: 'wrist_extension',
    description: 'Flaccid paralysis of wrist and finger extensors resulting in inability to extend wrist against gravity.',
    restrictions: {
      wrist_extension: {
        max: 0,
        targetDegrees: 0,
        label: 'Radial Nerve Palsy (Wrist Drop 0°)',
        explanation: 'เส้นประสาท Radial บาดเจ็บ อัมพาตกล้ามเนื้อเหยียดข้อมือ ไม่สามารถกระดกข้อมือต้านแรงโน้มถ่วงได้เลย (0°)'
      }
    }
  }
];
