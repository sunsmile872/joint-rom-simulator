(() => {
  // js/data/romData.js
  var JOINT_REGIONS = [
    { id: "cervical", name: "Cervical Spine", icon: "\u{1F9B4}" },
    { id: "thoracolumbar", name: "Thoracolumbar Spine", icon: "\u{1F9CD}" },
    { id: "tmj", name: "Temporomandibular (TMJ)", icon: "\u{1F5E3}\uFE0F" },
    { id: "shoulder", name: "Shoulder Complex", icon: "\u{1F4AA}" },
    { id: "elbow_forearm", name: "Elbow & Forearm", icon: "\u{1F9BE}" },
    { id: "wrist", name: "Wrist & Hand Complex", icon: "\u{1F590}\uFE0F" },
    { id: "hip", name: "Hip Joint", icon: "\u{1F9B5}" },
    { id: "knee", name: "Knee Joint", icon: "\u{1F9BF}" },
    { id: "ankle_foot", name: "Ankle & Foot", icon: "\u{1F9B6}" }
  ];
  var ROM_DATA = {
    // ==========================================
    // CERVICAL SPINE
    // ==========================================
    cervical_flexion: {
      id: "cervical_flexion",
      region: "cervical",
      jointName: "Cervical Spine (C0-C7)",
      motionName: "Flexion",
      plane: "Sagittal",
      axis: "Coronal (Mediolateral)",
      normalMin: 0,
      normalMax: 45,
      unit: "degrees",
      referenceRangeText: "0\xB0 \u2013 45\xB0 (AAOS: 45\xB0, Neumann: 45\xB0\u201350\xB0)",
      functionalRange: "35\xB0 \u2013 40\xB0 (Reading, looking downward)",
      hypermobilityThreshold: 55,
      impingementRiskThreshold: 65,
      sliderMin: 0,
      sliderMax: 70,
      endFeel: {
        type: "Firm (Tissue stretch)",
        description: "Tension in posterior longitudinal ligament, ligamentum nuchae, ligamentum flavum, interspinous ligaments, and posterior cervical muscles (semispinalis capitis, trapezius).",
        abnormalEndFeel: "Empty (acute pain/spasm) or Hard (anterior osteophytes impingement)."
      },
      arthrokinematics: {
        type: "Apophyseal (Facet) Joint Gliding",
        rule: "Bilateral symmetrical sliding",
        description: "Inferior articular facets of superior vertebrae slide superiorly and anteriorly relative to the superior articular facets of the inferior vertebrae (Neumann Table 9.5). Atlanto-occipital (C0-C1): Convex occipital condyles roll anteriorly and slide posteriorly on concave superior facets of C1.",
        closePacked: "Full extension",
        loosePacked: "Midway between flexion and extension"
      },
      muscles: {
        primeMovers: [
          { name: "Sternocleidomastoid (bilateral)", innervation: "Accessory Nerve (CN XI), C2-C3 roots" },
          { name: "Longus colli & Longus capitis", innervation: "C1-C6 cervical ventral rami" },
          { name: "Scalenus anterior", innervation: "C4-C6 ventral rami" },
          { name: "Rectus capitis anterior (C0-C1)", innervation: "C1-C2 ventral rami" }
        ],
        synergists: ["Suprahyoid & Infrahyoid muscles", "Platysma"],
        antagonists: ["Splenius capitis/cervicis", "Semispinalis capitis", "Upper trapezius", "Suboccipitals"]
      },
      goniometry: {
        position: "Patient seated comfortably, thoracic and lumbar spine supported, head in neutral anatomical alignment.",
        fulcrum: "External auditory meatus (EAM).",
        stationaryArm: "Perpendicular to the floor (or parallel to vertical reference line).",
        movableArm: "Aligned with the base of the nares (nostrils).",
        substitutions: "Trunk flexion, thoracic kyphosis slouching, or mandibular protraction/jutting."
      },
      citations: [
        { book: "Neumann (3rd Ed)", chapter: "Chapter 9: Axial Skeleton: Osteology and Arthrology", page: "p. 368, Table 9.7" },
        { book: "Braddom's PM&R (7th Ed)", chapter: "Physical Examination of the Musculoskeletal System", page: "Table 2.3" },
        { book: "Daniels & Worthingham (10th Ed)", chapter: "Cervical Spine Muscle Testing", page: "pp. 142\u2013148" }
      ]
    },
    cervical_extension: {
      id: "cervical_extension",
      region: "cervical",
      jointName: "Cervical Spine (C0-C7)",
      motionName: "Extension",
      plane: "Sagittal",
      axis: "Coronal (Mediolateral)",
      normalMin: 0,
      normalMax: 45,
      unit: "degrees",
      referenceRangeText: "0\xB0 \u2013 45\xB0 (AAOS: 45\xB0, Neumann: 75\xB0\u201380\xB0 full craniocervical extension)",
      functionalRange: "40\xB0 \u2013 50\xB0 (Looking up at high shelves, ceiling inspection)",
      hypermobilityThreshold: 75,
      impingementRiskThreshold: 85,
      sliderMin: 0,
      sliderMax: 90,
      endFeel: {
        type: "Hard (Bone-to-bone) or Firm (Ligamentous)",
        description: "Contact between posterior spinous processes / laminae or tension in anterior longitudinal ligament (ALL) and anterior cervical muscles.",
        abnormalEndFeel: "Empty (cervical radiculopathy pain during Spurling maneuver)."
      },
      arthrokinematics: {
        type: "Apophyseal (Facet) Joint Gliding",
        rule: "Bilateral symmetrical sliding",
        description: "Inferior articular facets of superior vertebrae slide inferiorly and posteriorly on the superior articular facets of inferior vertebrae. C0-C1: Occipital condyles roll posteriorly and slide anteriorly.",
        closePacked: "Full extension",
        loosePacked: "Slight flexion"
      },
      muscles: {
        primeMovers: [
          { name: "Splenius capitis & cervicis", innervation: "C2-C5 posterior rami (lateral branches)" },
          { name: "Semispinalis capitis & cervicis", innervation: "C1-C5 posterior rami" },
          { name: "Upper Trapezius", innervation: "Spinal Accessory Nerve (CN XI), C3-C4" },
          { name: "Rectus capitis posterior major/minor & Obliquus capitis superior", innervation: "Suboccipital nerve (C1 posterior ramus)" }
        ],
        synergists: ["Levator scapulae", "Longissimus capitis/cervicis", "Spinalis capitis"],
        antagonists: ["Sternocleidomastoid", "Longus colli", "Longus capitis"]
      },
      goniometry: {
        position: "Seated erect with back supported, neutral cervical posture.",
        fulcrum: "External auditory meatus.",
        stationaryArm: "Perpendicular to the floor.",
        movableArm: "Aligned with the base of the nares.",
        substitutions: "Trunk extension, lumbar hyperextension, shoulder elevation."
      },
      citations: [
        { book: "Neumann (3rd Ed)", chapter: "Chapter 9: Axial Skeleton", page: "p. 368, Table 9.7" },
        { book: "Braddom's PM&R (7th Ed)", chapter: "Musculoskeletal Examination", page: "Ch. 2" }
      ]
    },
    cervical_lateral_flexion: {
      id: "cervical_lateral_flexion",
      region: "cervical",
      jointName: "Cervical Spine (C0-C7)",
      motionName: "Lateral Flexion (Side Bending)",
      plane: "Frontal",
      axis: "Anteroposterior (Sagittal)",
      normalMin: 0,
      normalMax: 45,
      unit: "degrees",
      referenceRangeText: "0\xB0 \u2013 45\xB0 (AAOS: 45\xB0, Neumann: 35\xB0\u201340\xB0)",
      functionalRange: "30\xB0 \u2013 35\xB0 (Cradling telephone, tilted inspection)",
      hypermobilityThreshold: 55,
      impingementRiskThreshold: 65,
      sliderMin: 0,
      sliderMax: 65,
      endFeel: {
        type: "Firm (Tissue stretch)",
        description: "Tension in contralateral intertransverse ligaments, contralateral scalenes, trapezius, and lateral annular fibers.",
        abnormalEndFeel: "Hard (early uncinate process / facet impingement in cervical spondylosis)."
      },
      arthrokinematics: {
        type: "Coupled Apophyseal Gliding",
        rule: "Ipsilateral inferior-posterior, Contralateral superior-anterior",
        description: "The inferior articular facet on the side of lateral flexion slides inferiorly and slightly posteriorly; the contralateral inferior facet slides superiorly and anteriorly (Neumann p. 370). Coupled with slight ipsilateral axial rotation in mid-to-lower cervical spine (C2-C7).",
        closePacked: "Full extension with ipsilateral rotation",
        loosePacked: "Neutral"
      },
      muscles: {
        primeMovers: [
          { name: "Scalenus anterior, medius, and posterior (ipsilateral)", innervation: "C3-C8 anterior rami" },
          { name: "Sternocleidomastoid (ipsilateral)", innervation: "Spinal Accessory Nerve (CN XI)" },
          { name: "Splenius capitis/cervicis (ipsilateral)", innervation: "C2-C5 posterior rami" },
          { name: "Levator scapulae", innervation: "Dorsal scapular nerve (C5), C3-C4" }
        ],
        synergists: ["Intertransversarii", "Longissimus cervicis", "Rectus capitis lateralis"],
        antagonists: ["Contralateral lateral flexors"]
      },
      goniometry: {
        position: "Patient seated with spine supported, head upright.",
        fulcrum: "Spinous process of C7 vertebra.",
        stationaryArm: "Aligned vertically with the spinous processes of the thoracic vertebrae (perpendicular to floor).",
        movableArm: "Aligned with the dorsal midline of the head (external occipital protuberance).",
        substitutions: "Shoulder elevation, lateral trunk flexion, rotation of the head."
      },
      citations: [
        { book: "Neumann (3rd Ed)", chapter: "Chapter 9: Axial Skeleton", page: "p. 368, Table 9.7" },
        { book: "Braddom's PM&R (7th Ed)", chapter: "Goniometry & Joint Assessment", page: "Table 2.3" }
      ]
    },
    cervical_rotation: {
      id: "cervical_rotation",
      region: "cervical",
      jointName: "Cervical Spine (C0-C7)",
      motionName: "Axial Rotation",
      plane: "Transverse (Horizontal)",
      axis: "Longitudinal (Vertical)",
      normalMin: 0,
      normalMax: 70,
      unit: "degrees",
      referenceRangeText: "0\xB0 \u2013 70\xB0 (AAOS: 60\xB0\u201380\xB0, Neumann: 65\xB0\u201375\xB0)",
      functionalRange: "60\xB0 \u2013 65\xB0 (Shoulder-check while driving, looking over shoulder)",
      hypermobilityThreshold: 85,
      impingementRiskThreshold: 95,
      sliderMin: 0,
      sliderMax: 90,
      endFeel: {
        type: "Firm (Tissue stretch)",
        description: "Tension in alar ligaments (checks contralateral axial rotation), apophyseal capsule, and contralateral rotator muscles.",
        abnormalEndFeel: "Hard (facet arthrosis) or Empty (atlantoaxial subluxation pain)."
      },
      arthrokinematics: {
        type: "Pivot & Apophyseal Spin/Slide",
        rule: "Atlanto-Axial (C1-C2) contributes ~50% (40-45\xB0) of total cervical rotation",
        description: "C1 ring spins around the vertical dens (odontoid process) of C2. C2-C7: The inferior facet on the ipsilateral side slides posteriorly and inferiorly, while the contralateral inferior facet slides anteriorly and superiorly.",
        closePacked: "Full extension",
        loosePacked: "Neutral position"
      },
      muscles: {
        primeMovers: [
          { name: "Sternocleidomastoid (contralateral rotation)", innervation: "Accessory Nerve (CN XI), C2-C3" },
          { name: "Splenius capitis & cervicis (ipsilateral rotation)", innervation: "C2-C5 posterior rami" },
          { name: "Obliquus capitis inferior (ipsilateral atlantoaxial rotation)", innervation: "Suboccipital nerve (C1)" },
          { name: "Semispinalis capitis (contralateral rotation)", innervation: "C1-C5 posterior rami" }
        ],
        synergists: ["Contralateral upper trapezius", "Ipsilateral longus capitis", "Rectus capitis posterior major"],
        antagonists: ["Ipsilateral SCM", "Contralateral splenius capitis"]
      },
      goniometry: {
        position: "Patient seated with feet flat, upright torso.",
        fulcrum: "Center of cranial vertex (top of head).",
        stationaryArm: "Imaginary line connecting the two acromion processes.",
        movableArm: "Aligned with the tip of the nose.",
        substitutions: "Trunk rotation, cervical lateral flexion, shoulder protraction."
      },
      citations: [
        { book: "Neumann (3rd Ed)", chapter: "Chapter 9: Axial Skeleton", page: "p. 368, Table 9.7 & pp. 369\u2013371" },
        { book: "Daniels & Worthingham (10th Ed)", chapter: "Cervical Muscle Testing", page: "p. 154" }
      ]
    },
    // ==========================================
    // THORACOLUMBAR SPINE
    // ==========================================
    thoracolumbar_flexion: {
      id: "thoracolumbar_flexion",
      region: "thoracolumbar",
      jointName: "Thoracolumbar Spine (T1-L5)",
      motionName: "Trunk Flexion",
      plane: "Sagittal",
      axis: "Coronal (Mediolateral)",
      normalMin: 0,
      normalMax: 80,
      unit: "degrees",
      referenceRangeText: "0\xB0 \u2013 80\xB0 (Thoracic: 35\xB0, Lumbar: 50\xB0)",
      functionalRange: "60\xB0 (Reaching knees/picking objects from low tables)",
      hypermobilityThreshold: 95,
      impingementRiskThreshold: 105,
      sliderMin: 0,
      sliderMax: 100,
      endFeel: {
        type: "Firm (Tissue stretch)",
        description: "Tension in supraspinous, interspinous, and posterior longitudinal ligaments, ligamentum flavum, thoracolumbar fascia, and erector spinae stretch.",
        abnormalEndFeel: "Empty (herniated disc compression) or Spasm (acute lumbago)."
      },
      arthrokinematics: {
        type: "Facet Joint Upward/Anterior Slide",
        rule: "Bilateral anterior-superior translation",
        description: "The inferior articular facets of the superior vertebra slide superiorly and anteriorly relative to the superior facets below. Intervertebral discs undergo anterior compression and posterior tensile deformation.",
        closePacked: "Full extension",
        loosePacked: "Midway between flexion and extension"
      },
      muscles: {
        primeMovers: [
          { name: "Rectus abdominis", innervation: "Intercostal nerves (T7-T12)" },
          { name: "External & Internal Oblique abdominis (bilateral)", innervation: "Intercostal nerves (T7-T12), Iliohypogastric & Ilioinguinal (L1)" },
          { name: "Psoas major", innervation: "L1-L3 ventral rami" }
        ],
        synergists: ["Transversus abdominis", "Pyramidalis"],
        antagonists: ["Erector spinae (Iliocostalis, Longissimus, Spinalis)", "Multifidus"]
      },
      goniometry: {
        position: "Standing with feet shoulder-width apart, knees fully extended.",
        fulcrum: "Modified Schober Test / Goniometer fulcrum at lateral midline of pelvis (iliac crest).",
        stationaryArm: "Vertical or aligned with lateral midline of femur.",
        movableArm: "Midaxillary line of thorax toward axilla.",
        substitutions: "Hip flexion, pelvic anterior/posterior rotation, knee flexion."
      },
      citations: [
        { book: "Neumann (3rd Ed)", chapter: "Chapter 9: Axial Skeleton", page: "p. 376 (Table 9.8) & p. 383 (Table 9.9)" },
        { book: "Braddom's PM&R (7th Ed)", chapter: "Low Back Pain & Spinal Examination", page: "Ch. 36" }
      ]
    },
    thoracolumbar_extension: {
      id: "thoracolumbar_extension",
      region: "thoracolumbar",
      jointName: "Thoracolumbar Spine (T1-L5)",
      motionName: "Trunk Extension",
      plane: "Sagittal",
      axis: "Coronal (Mediolateral)",
      normalMin: 0,
      normalMax: 25,
      unit: "degrees",
      referenceRangeText: "0\xB0 \u2013 25\xB0 (Thoracic: 20\xB0\u201325\xB0, Lumbar: 15\xB0\u201320\xB0)",
      functionalRange: "20\xB0 (Overhead reaching, backward leaning)",
      hypermobilityThreshold: 35,
      impingementRiskThreshold: 45,
      sliderMin: 0,
      sliderMax: 40,
      endFeel: {
        type: "Hard (Bone contact) / Firm",
        description: "Contact of adjacent spinous processes / articular facets and tension in the anterior longitudinal ligament (ALL) and abdominal wall.",
        abnormalEndFeel: "Hard / Sharp pain (spondylolysis, facet syndrome)."
      },
      arthrokinematics: {
        type: "Facet Joint Inferior/Posterior Slide",
        rule: "Bilateral posterior-inferior translation",
        description: "The inferior articular facets slide inferiorly and posteriorly. The anterior disc is under tension while the posterior disc is compressed, nudging the nucleus pulposus anteriorly (Neumann p. 383).",
        closePacked: "Full extension",
        loosePacked: "Slight flexion"
      },
      muscles: {
        primeMovers: [
          { name: "Erector Spinae (Iliocostalis, Longissimus, Spinalis)", innervation: "Thoracic and lumbar spinal nerves (posterior rami)" },
          { name: "Multifidus (lumbar)", innervation: "Medial branch of posterior rami (L1-L5)" },
          { name: "Semispinalis thoracis", innervation: "Thoracic posterior rami" }
        ],
        synergists: ["Interspinales", "Rotatores", "Quadratus lumborum"],
        antagonists: ["Rectus abdominis", "External/Internal obliques"]
      },
      goniometry: {
        position: "Standing erect or prone (active trunk lift).",
        fulcrum: "Lateral midline of the iliac crest.",
        stationaryArm: "Vertical or aligned with lateral thigh.",
        movableArm: "Midaxillary line of the thorax.",
        substitutions: "Knee flexion, excessive hip extension, anterior pelvic tilt."
      },
      citations: [
        { book: "Neumann (3rd Ed)", chapter: "Chapter 9: Axial Skeleton", page: "p. 383, Table 9.9" },
        { book: "Daniels & Worthingham (10th Ed)", chapter: "Trunk Extension Muscle Testing", page: "pp. 162\u2013167" }
      ]
    },
    thoracolumbar_lat_flexion: {
      id: "thoracolumbar_lat_flexion",
      region: "thoracolumbar",
      jointName: "Thoracolumbar Spine (T1-L5)",
      motionName: "Trunk Lateral Flexion",
      plane: "Frontal",
      axis: "Anteroposterior",
      normalMin: 0,
      normalMax: 35,
      unit: "degrees",
      referenceRangeText: "0\xB0 \u2013 35\xB0 (AAOS: 35\xB0, Thoracic: 25\xB0, Lumbar: 20\xB0)",
      functionalRange: "25\xB0 (Side reaching, picking up objects at side)",
      hypermobilityThreshold: 45,
      impingementRiskThreshold: 55,
      sliderMin: 0,
      sliderMax: 50,
      endFeel: {
        type: "Firm (Ligamentous / Muscular)",
        description: "Tension in contralateral intertransverse ligaments, quadratus lumborum, and lateral abdominal musculature.",
        abnormalEndFeel: "Hard (facet arthrosis / lateral disc osteophytes)."
      },
      arthrokinematics: {
        type: "Asymmetric Facet Glide",
        rule: "Ipsilateral inferior slide, Contralateral superior slide",
        description: "Inferior facet on side of lateral flexion slides inferiorly; contralateral inferior facet slides superiorly.",
        closePacked: "Full extension",
        loosePacked: "Neutral"
      },
      muscles: {
        primeMovers: [
          { name: "Quadratus lumborum", innervation: "T12 subcostal & L1-L4 anterior rami" },
          { name: "Internal & External Obliques (ipsilateral)", innervation: "Intercostal nerves (T7-T12)" },
          { name: "Iliocostalis lumborum/thoracis", innervation: "Posterior rami" }
        ],
        synergists: ["Intertransversarii", "Psoas major"],
        antagonists: ["Contralateral lateral flexors"]
      },
      goniometry: {
        position: "Standing erect, feet shoulder width apart.",
        fulcrum: "Spinous process of S1.",
        stationaryArm: "Perpendicular to the floor.",
        movableArm: "Aligned with spinous process of C7.",
        substitutions: "Pelvic tilt, knee flexion, trunk rotation."
      },
      citations: [
        { book: "Neumann (3rd Ed)", chapter: "Chapter 9: Axial Skeleton", page: "p. 376 (Table 9.8) & p. 383" },
        { book: "Braddom's PM&R (7th Ed)", chapter: "Spine Goniometry", page: "Table 2.3" }
      ]
    },
    thoracolumbar_rotation: {
      id: "thoracolumbar_rotation",
      region: "thoracolumbar",
      jointName: "Thoracolumbar Spine (T1-L5)",
      motionName: "Trunk Rotation",
      plane: "Transverse",
      axis: "Vertical",
      normalMin: 0,
      normalMax: 45,
      unit: "degrees",
      referenceRangeText: "0\xB0 \u2013 45\xB0 (AAOS: 45\xB0, Thoracic: 35\xB0, Lumbar: 5\xB0)",
      functionalRange: "30\xB0 \u2013 35\xB0 (Turning in car seat, reaching behind)",
      hypermobilityThreshold: 55,
      impingementRiskThreshold: 65,
      sliderMin: 0,
      sliderMax: 60,
      endFeel: {
        type: "Firm (Ligamentous / Capsular)",
        description: "Tension in costovertebral ligaments, thoracic capsule, and contralateral rotators (lumbar facets are sagittally oriented, mechanically blocking rotation to ~5\xB0).",
        abnormalEndFeel: "Hard (facet lock / costovertebral joint subluxation)."
      },
      arthrokinematics: {
        type: "Thoracic Slide & Lumbar Facet Impingement",
        rule: "Thoracic facets slide horizontally; Lumbar facets impact contralaterally",
        description: "Thoracic articular facets are aligned in the frontal plane, allowing free sliding. In the lumbar spine, sagittal orientation allows only ~1\xB0 per segment before bony impact occurs (Neumann p. 382).",
        closePacked: "Full extension",
        loosePacked: "Neutral"
      },
      muscles: {
        primeMovers: [
          { name: "Internal Oblique (ipsilateral)", innervation: "Intercostal N. (T7-T12), Iliohypogastric (L1)" },
          { name: "External Oblique (contralateral)", innervation: "Intercostal N. (T7-T12)" },
          { name: "Rotatores & Multifidus", innervation: "Posterior rami" }
        ],
        synergists: ["Semispinalis thoracis", "Latissimus dorsi"],
        antagonists: ["Contralateral rotators"]
      },
      goniometry: {
        position: "Seated (stabilizes pelvis and prevents hip rotation).",
        fulcrum: "Center of cranial vertex.",
        stationaryArm: "Imaginary line connecting the two ASIS prominences.",
        movableArm: "Imaginary line connecting the two acromion processes.",
        substitutions: "Pelvic rotation off the chair, lateral trunk flexion."
      },
      citations: [
        { book: "Neumann (3rd Ed)", chapter: "Chapter 9: Axial Skeleton", page: "p. 376 & p. 382" },
        { book: "Daniels & Worthingham (10th Ed)", chapter: "Trunk Rotation Testing", page: "pp. 168\u2013172" }
      ]
    },
    // ==========================================
    // TEMPOROMANDIBULAR JOINT (TMJ)
    // ==========================================
    tmj_depression: {
      id: "tmj_depression",
      region: "tmj",
      jointName: "Temporomandibular Joint (TMJ)",
      motionName: "Mandibular Depression (Mouth Opening)",
      plane: "Sagittal",
      axis: "Transverse Condylar Axis",
      normalMin: 35,
      normalMax: 50,
      unit: "mm",
      referenceRangeText: "35 \u2013 50 mm (Functional: 35\u201340 mm or 3 patient PIP finger breadths)",
      functionalRange: "35 \u2013 40 mm (Eating standard solid food, yawning)",
      hypermobilityThreshold: 55,
      impingementRiskThreshold: 65,
      sliderMin: 0,
      sliderMax: 60,
      endFeel: {
        type: "Firm (Capsular / Ligamentous)",
        description: "Tension in lateral (temporomandibular) ligament, stylomandibular ligament, sphenomandibular ligament, and closing muscles (masseter, temporalis).",
        abnormalEndFeel: "Hard (anterior disc displacement without reduction / closed lock) or Empty."
      },
      arthrokinematics: {
        type: "2-Phase Bicompartmental (Rotational + Translational)",
        rule: "Lower joint = Roll; Upper joint = Slide",
        description: "Phase 1 (Early 0\u201325 mm, Lower joint cavity): Condyle rolls posteriorly relative to the inferior surface of the articular disc. Phase 2 (Late 25\u201350 mm, Upper joint cavity): Disc-condyle complex translates anteriorly and inferiorly down the articular eminence (Neumann p. 464, Fig 11.13).",
        closePacked: "Full dental occlusion (teeth tightly clenched) or maximal depression",
        loosePacked: "Mouth slightly open, lips together, teeth not in contact (freeway space 2-4 mm)"
      },
      muscles: {
        primeMovers: [
          { name: "Lateral pterygoid (inferior head)", innervation: "Mandibular nerve (CN V3)" },
          { name: "Digastric (anterior belly: CN V3; posterior belly: CN VII)", innervation: "CN V3 & CN VII" },
          { name: "Mylohyoid & Geniohyoid", innervation: "Nerve to mylohyoid (CN V3) & C1 via hypoglossal" }
        ],
        synergists: ["Platysma", "Infrahyoid muscles (stabilize hyoid bone)"],
        antagonists: ["Masseter", "Temporalis", "Medial pterygoid"]
      },
      goniometry: {
        position: "Patient seated with head supported.",
        fulcrum: "Incisal edge of upper central incisor.",
        stationaryArm: "Calibrated millimeter ruler or Therabite scale aligned vertically.",
        movableArm: "Incisal edge of lower central incisor at maximal active opening.",
        substitutions: "Cervical extension compensation."
      },
      citations: [
        { book: "Neumann (3rd Ed)", chapter: "Chapter 11: Mastication and Ventilation", page: "pp. 464\u2013467, Table 11.3" },
        { book: "Braddom's PM&R (7th Ed)", chapter: "Facial and Craniofacial Pain", page: "Ch. 38" }
      ]
    },
    // ==========================================
    // SHOULDER COMPLEX
    // ==========================================
    shoulder_flexion: {
      id: "shoulder_flexion",
      region: "shoulder",
      jointName: "Shoulder Complex (Glenohumeral & Scapulothoracic)",
      motionName: "Flexion",
      plane: "Sagittal",
      axis: "Coronal (Mediolateral)",
      normalMin: 0,
      normalMax: 180,
      unit: "degrees",
      referenceRangeText: "0\xB0 \u2013 180\xB0 (GH: ~120\xB0, ST upward rotation: ~60\xB0)",
      functionalRange: "120\xB0 \u2013 140\xB0 (Combing hair, reaching overhead shelves)",
      hypermobilityThreshold: 185,
      impingementRiskThreshold: 195,
      sliderMin: 0,
      sliderMax: 190,
      endFeel: {
        type: "Firm (Capsular / Muscular)",
        description: "Tension in posterior-inferior glenohumeral capsule, coracohumeral ligament, and extensor muscles (latissimus dorsi, teres major).",
        abnormalEndFeel: "Hard (subacromial impingement) or Empty (acute subacromial bursitis / rotator cuff tear)."
      },
      arthrokinematics: {
        type: "Spin + Scapulohumeral Rhythm (2:1 Ratio)",
        rule: "Predominantly spin of humeral head on glenoid",
        description: "The humeral head spins in place around a mediolateral axis with slight anterior/superior translation. Coordinated 2:1 Scapulohumeral rhythm: for every 3\xB0 of total shoulder elevation, 2\xB0 occurs at the GH joint and 1\xB0 occurs at the ST joint (upward rotation driven by Serratus anterior & Trapezius force-couple, Neumann Table 5.2).",
        closePacked: "Abduction and full external rotation",
        loosePacked: "55\xB0 abduction, 30\xB0 horizontal adduction (scapular plane)"
      },
      muscles: {
        primeMovers: [
          { name: "Anterior Deltoid", innervation: "Axillary Nerve (C5-C6)" },
          { name: "Coracobrachialis", innervation: "Musculocutaneous Nerve (C5-C7)" },
          { name: "Pectoralis major (clavicular head)", innervation: "Lateral pectoral nerve (C5-C7)" },
          { name: "Biceps brachii (long head)", innervation: "Musculocutaneous Nerve (C5-C6)" }
        ],
        synergists: ["Serratus anterior (scapular upward rotation)", "Upper & Lower Trapezius", "Supraspinatus"],
        antagonists: ["Latissimus dorsi", "Teres major", "Posterior Deltoid", "Triceps (long head)"]
      },
      goniometry: {
        position: "Supine (to stabilize lumbar spine and prevent arching), knees flexed, arm in anatomical neutral at side.",
        fulcrum: "Lateral aspect of greater tubercle of humerus (or acromion process lateral border).",
        stationaryArm: "Midaxillary line of thorax.",
        movableArm: "Lateral midline of the humerus (toward lateral epicondyle).",
        substitutions: "Trunk extension / lumbar lordosis, shoulder shrugging / scapular elevation."
      },
      citations: [
        { book: "Neumann (3rd Ed)", chapter: "Chapter 5: Shoulder Complex", page: "pp. 147\u2013152, Table 5.2" },
        { book: "Braddom's PM&R (7th Ed)", chapter: "Upper Limb Assessment", page: "Ch. 3" },
        { book: "Daniels & Worthingham (10th Ed)", chapter: "Shoulder Muscle Testing", page: "pp. 64\u201369" }
      ]
    },
    shoulder_extension: {
      id: "shoulder_extension",
      region: "shoulder",
      jointName: "Shoulder Complex (Glenohumeral & Scapulothoracic)",
      motionName: "Extension",
      plane: "Sagittal",
      axis: "Coronal (Mediolateral)",
      normalMin: 0,
      normalMax: 60,
      unit: "degrees",
      referenceRangeText: "0\xB0 \u2013 60\xB0 (AAOS: 50\xB0\u201360\xB0)",
      functionalRange: "40\xB0 \u2013 50\xB0 (Reaching into back pocket, dressing, perineal care)",
      hypermobilityThreshold: 70,
      impingementRiskThreshold: 80,
      sliderMin: 0,
      sliderMax: 70,
      endFeel: {
        type: "Firm (Capsular / Ligamentous)",
        description: "Tension in anterior capsule, superior glenohumeral ligament, coracohumeral ligament, and shoulder flexors (anterior deltoid, biceps).",
        abnormalEndFeel: "Hard (bony block) or Empty."
      },
      arthrokinematics: {
        type: "Convex-on-Concave Spin & Glide",
        rule: "Convex Humeral Head on Concave Glenoid",
        description: "Spin with slight anterior glide of the humeral head on the glenoid fossa. Scapula adducts/retracts and downwardly rotates.",
        closePacked: "Abduction and full external rotation",
        loosePacked: "55\xB0 abduction, 30\xB0 horizontal adduction"
      },
      muscles: {
        primeMovers: [
          { name: "Latissimus dorsi", innervation: "Thoracodorsal Nerve (C6-C8)" },
          { name: "Posterior Deltoid", innervation: "Axillary Nerve (C5-C6)" },
          { name: "Teres major", innervation: "Lower Subscapular Nerve (C5-C6)" },
          { name: "Triceps brachii (long head)", innervation: "Radial Nerve (C6-C8)" }
        ],
        synergists: ["Rhomboid major/minor (scapular retraction)", "Pectoralis major (sternocostal head from flexion)"],
        antagonists: ["Anterior Deltoid", "Coracobrachialis", "Biceps brachii"]
      },
      goniometry: {
        position: "Prone, head turned to opposite side, arm at side.",
        fulcrum: "Lateral aspect of greater tubercle / acromion.",
        stationaryArm: "Midaxillary line of thorax.",
        movableArm: "Lateral midline of humerus.",
        substitutions: "Trunk rotation, anterior tipping of scapula."
      },
      citations: [
        { book: "Neumann (3rd Ed)", chapter: "Chapter 5: Shoulder Complex", page: "p. 152, Table 5.2" },
        { book: "Braddom's PM&R (7th Ed)", chapter: "Shoulder Examination", page: "Table 2.4" },
        { book: "Daniels & Worthingham (10th Ed)", chapter: "Shoulder Extension Testing", page: "pp. 70\u201375" }
      ]
    },
    shoulder_abduction: {
      id: "shoulder_abduction",
      region: "shoulder",
      jointName: "Shoulder Complex (Glenohumeral & Scapulothoracic)",
      motionName: "Abduction",
      plane: "Frontal (Coronal)",
      axis: "Anteroposterior (Sagittal)",
      normalMin: 0,
      normalMax: 180,
      unit: "degrees",
      referenceRangeText: "0\xB0 \u2013 180\xB0 (GH: ~120\xB0, Scapula: ~60\xB0 with concurrent clavicular elevation & posterior rotation)",
      functionalRange: "120\xB0 (Reaching into cupboards, washing hair)",
      hypermobilityThreshold: 185,
      impingementRiskThreshold: 195,
      sliderMin: 0,
      sliderMax: 190,
      endFeel: {
        type: "Firm (Capsular / Ligamentous)",
        description: "Tension in inferior glenohumeral ligament (IGHL) complex (anterior and posterior bands), axillary pouch, and adductor muscles (pectoralis major, latissimus dorsi).",
        abnormalEndFeel: "Hard (greater tubercle abutment on acromion if external rotation is prevented) or Empty."
      },
      arthrokinematics: {
        type: "Convex-on-Concave Arthrology",
        rule: "Convex Humeral Head on Concave Glenoid Fossa",
        description: "Convex humeral head rolls superiorly and slides inferiorly on the concave glenoid (Neumann p. 154, Fig 5.27). The inferior slide is essential: without it, the humeral head would migrate 10 mm upward and impinge against the subacromial arch at 22\xB0 of abduction! Rotator cuff depression prevents superior escape.",
        closePacked: "Full abduction and external rotation",
        loosePacked: "55\xB0 abduction, 30\xB0 horizontal adduction"
      },
      muscles: {
        primeMovers: [
          { name: "Middle Deltoid", innervation: "Axillary Nerve (C5-C6)" },
          { name: "Supraspinatus (initiates first 15\xB0 & stabilizes)", innervation: "Suprascapular Nerve (C5-C6)" },
          { name: "Serratus anterior (upward rotator)", innervation: "Long Thoracic Nerve (C5-C7)" },
          { name: "Upper & Lower Trapezius", innervation: "Spinal Accessory Nerve (CN XI), C3-C4" }
        ],
        synergists: ["Anterior deltoid", "Infraspinatus & Teres minor (external rotators to clear greater tubercle)"],
        antagonists: ["Pectoralis major", "Latissimus dorsi", "Teres major", "Triceps (long head)"]
      },
      goniometry: {
        position: "Supine or seated upright, arm externally rotated so palm faces forward/upward (prevents greater tuberosity impingement).",
        fulcrum: "Anterior or posterior aspect of acromion process.",
        stationaryArm: "Parallel to the sternum (anterior) or spine (posterior).",
        movableArm: "Anterior midline of humerus (medial epicondyle reference).",
        substitutions: "Lateral trunk flexion to contralateral side, shoulder shrugging."
      },
      citations: [
        { book: "Neumann (3rd Ed)", chapter: "Chapter 5: Shoulder Complex", page: "pp. 153\u2013158, Table 5.2" },
        { book: "Braddom's PM&R (7th Ed)", chapter: "Rehabilitation of Shoulder Impingement", page: "Ch. 37" },
        { book: "Daniels & Worthingham (10th Ed)", chapter: "Shoulder Abduction", page: "pp. 76\u201381" }
      ]
    },
    shoulder_adduction: {
      id: "shoulder_adduction",
      region: "shoulder",
      jointName: "Shoulder Complex",
      motionName: "Adduction (Horizontal / Cross-body)",
      plane: "Transverse / Frontal",
      axis: "Vertical / AP Axis",
      normalMin: 0,
      normalMax: 50,
      unit: "degrees",
      referenceRangeText: "0\xB0 \u2013 50\xB0 (Horizontal Adduction: 0\xB0 \u2013 120\xB0 across chest)",
      functionalRange: "40\xB0 (Reaching across chest to wash opposite axilla / arm)",
      hypermobilityThreshold: 65,
      impingementRiskThreshold: 75,
      sliderMin: 0,
      sliderMax: 65,
      endFeel: {
        type: "Firm or Soft (Tissue contact)",
        description: "Contact with trunk / chest, or tension in posterior capsule and posterior deltoid/infraspinatus.",
        abnormalEndFeel: "Hard (AC joint impingement pain)."
      },
      arthrokinematics: {
        type: "Convex-on-Concave Arthrology",
        rule: "Convex Humeral Head rolls anteriorly and slides posteriorly",
        description: "In horizontal adduction, humeral head rolls anteriorly/medially and slides posteriorly/laterally across glenoid.",
        closePacked: "Full abduction and external rotation",
        loosePacked: "55\xB0 abduction"
      },
      muscles: {
        primeMovers: [
          { name: "Pectoralis major (sternocostal & clavicular heads)", innervation: "Medial & Lateral Pectoral Nerves (C5-T1)" },
          { name: "Anterior Deltoid", innervation: "Axillary Nerve (C5-C6)" },
          { name: "Coracobrachialis", innervation: "Musculocutaneous Nerve (C5-C7)" }
        ],
        synergists: ["Subscapularis", "Biceps short head"],
        antagonists: ["Posterior Deltoid", "Infraspinatus", "Teres minor", "Rhomboids"]
      },
      goniometry: {
        position: "Seated, shoulder abducted 90\xB0, humerus horizontal.",
        fulcrum: "Superior aspect of acromion process.",
        stationaryArm: "Perpendicular to trunk (along coronal acromion line).",
        movableArm: "Longitudinal axis of humerus.",
        substitutions: "Trunk rotation toward the measured side."
      },
      citations: [
        { book: "Neumann (3rd Ed)", chapter: "Chapter 5: Shoulder Complex", page: "p. 157, Table 5.2" },
        { book: "Daniels & Worthingham (10th Ed)", chapter: "Shoulder Horizontal Adduction", page: "pp. 82\u201385" }
      ]
    },
    shoulder_external_rotation: {
      id: "shoulder_external_rotation",
      region: "shoulder",
      jointName: "Glenohumeral Joint",
      motionName: "External (Lateral) Rotation",
      plane: "Transverse (at 90\xB0 Abduction)",
      axis: "Longitudinal Humerus Axis",
      normalMin: 0,
      normalMax: 90,
      unit: "degrees",
      referenceRangeText: "0\xB0 \u2013 90\xB0 (at 90\xB0 abduction; 0\xB0\u201360\xB0 at side)",
      functionalRange: "60\xB0 (Fastening necklace, washing back of head, throwing late cocking)",
      hypermobilityThreshold: 105,
      impingementRiskThreshold: 115,
      sliderMin: 0,
      sliderMax: 110,
      endFeel: {
        type: "Firm (Capsular)",
        description: "Tension in anterior band of inferior glenohumeral ligament (IGHL) at 90\xB0 abduction (or middle/superior GHL and subscapularis tendon at 0\xB0 abduction).",
        abnormalEndFeel: "Hard or Empty (Adhesive Capsulitis - typically most severely restricted motion in capsular pattern ER > Abd > IR)."
      },
      arthrokinematics: {
        type: "Convex-on-Concave Arthrology",
        rule: "Convex Humeral Head on Concave Glenoid",
        description: "Convex humeral head rolls posteriorly and slides anteriorly on the concave glenoid fossa (Neumann p. 156, Fig 5.30). At 90\xB0 abduction, anterior slide tensions the anterior-inferior capsule.",
        closePacked: "Full abduction and external rotation",
        loosePacked: "55\xB0 abduction, 30\xB0 horizontal adduction"
      },
      muscles: {
        primeMovers: [
          { name: "Infraspinatus", innervation: "Suprascapular Nerve (C5-C6)" },
          { name: "Teres minor", innervation: "Axillary Nerve (C5-C6)" },
          { name: "Posterior Deltoid", innervation: "Axillary Nerve (C5-C6)" }
        ],
        synergists: ["Supraspinatus (subtle initiator)"],
        antagonists: ["Subscapularis", "Pectoralis major", "Latissimus dorsi", "Teres major", "Anterior Deltoid"]
      },
      goniometry: {
        position: "Supine, shoulder abducted to 90\xB0, elbow flexed to 90\xB0, forearm neutral, towel roll under distal humerus.",
        fulcrum: "Olecranon process of ulna.",
        stationaryArm: "Perpendicular to the floor (vertical reference).",
        movableArm: "Aligned with the styloid process of the ulna.",
        substitutions: "Scapular retraction, trunk rotation, shoulder extension."
      },
      citations: [
        { book: "Neumann (3rd Ed)", chapter: "Chapter 5: Shoulder Complex", page: "p. 156, Table 5.2" },
        { book: "Braddom's PM&R (7th Ed)", chapter: "Adhesive Capsulitis Diagnosis", page: "Ch. 37" },
        { book: "Daniels & Worthingham (10th Ed)", chapter: "External Rotation Testing", page: "pp. 88\u201391" }
      ]
    },
    shoulder_internal_rotation: {
      id: "shoulder_internal_rotation",
      region: "shoulder",
      jointName: "Glenohumeral Joint",
      motionName: "Internal (Medial) Rotation",
      plane: "Transverse (at 90\xB0 Abduction)",
      axis: "Longitudinal Humerus Axis",
      normalMin: 0,
      normalMax: 70,
      unit: "degrees",
      referenceRangeText: "0\xB0 \u2013 70\xB0 (AAOS: 70\xB0\u201380\xB0 at 90\xB0 abduction; 0\xB0\u201360\xB0 at side)",
      functionalRange: "50\xB0 \u2013 60\xB0 (Fastening bra behind back, reaching back pocket / perineal care)",
      hypermobilityThreshold: 85,
      impingementRiskThreshold: 95,
      sliderMin: 0,
      sliderMax: 85,
      endFeel: {
        type: "Firm (Capsular / Muscular)",
        description: "Tension in posterior capsule, posterior band of IGHL, and infraspinatus/teres minor stretch.",
        abnormalEndFeel: "Hard (GIRD: Glenohumeral Internal Rotation Deficit in overhead athletes with posterior capsule contracture)."
      },
      arthrokinematics: {
        type: "Convex-on-Concave Arthrology",
        rule: "Convex Humeral Head on Concave Glenoid",
        description: "Convex humeral head rolls anteriorly and slides posteriorly on the concave glenoid fossa (Neumann p. 156). Posterior slide stretches the posterior-inferior capsule.",
        closePacked: "Full abduction and external rotation",
        loosePacked: "55\xB0 abduction, 30\xB0 horizontal adduction"
      },
      muscles: {
        primeMovers: [
          { name: "Subscapularis", innervation: "Upper & Lower Subscapular Nerves (C5-C6)" },
          { name: "Pectoralis major", innervation: "Medial & Lateral Pectoral Nerves (C5-T1)" },
          { name: "Latissimus dorsi", innervation: "Thoracodorsal Nerve (C6-C8)" },
          { name: "Teres major", innervation: "Lower Subscapular Nerve (C5-C6)" },
          { name: "Anterior Deltoid", innervation: "Axillary Nerve (C5-C6)" }
        ],
        synergists: ["Pectoralis minor (anterior tilt)", "Serratus anterior"],
        antagonists: ["Infraspinatus", "Teres minor", "Posterior Deltoid"]
      },
      goniometry: {
        position: "Supine, shoulder abducted to 90\xB0, elbow flexed to 90\xB0, humerus supported level with acromion.",
        fulcrum: "Olecranon process of ulna.",
        stationaryArm: "Perpendicular to the floor (vertical reference).",
        movableArm: "Aligned with the styloid process of the ulna.",
        substitutions: "Anterior scapular tipping / protraction (clinician must stabilize coracoid process)."
      },
      citations: [
        { book: "Neumann (3rd Ed)", chapter: "Chapter 5: Shoulder Complex", page: "p. 156, Table 5.2" },
        { book: "Braddom's PM&R (7th Ed)", chapter: "Overhead Throwing Shoulder & GIRD", page: "Ch. 37" },
        { book: "Daniels & Worthingham (10th Ed)", chapter: "Internal Rotation Testing", page: "pp. 92\u201395" }
      ]
    },
    // ==========================================
    // ELBOW & FOREARM
    // ==========================================
    elbow_flexion: {
      id: "elbow_flexion",
      region: "elbow_forearm",
      jointName: "Elbow Joint (Humeroulnar & Humeroradial)",
      motionName: "Flexion",
      plane: "Sagittal",
      axis: "Coronal Axis (through Humerus Epicondyles)",
      normalMin: 0,
      normalMax: 145,
      unit: "degrees",
      referenceRangeText: "0\xB0 \u2013 145\xB0 (AAOS: 150\xB0, Neumann: up to 150\xB0)",
      functionalRange: "30\xB0 \u2013 130\xB0 (Functional Arc of Morrey: 100\xB0 needed for feeding, phone, hygiene)",
      hypermobilityThreshold: 155,
      impingementRiskThreshold: 165,
      sliderMin: 0,
      sliderMax: 160,
      endFeel: {
        type: "Soft (Soft tissue approximation)",
        description: "Contact between anterior forearm muscle mass and biceps brachii muscle belly. If patient is extremely thin, may feel Firm (posterior capsule and triceps stretch).",
        abnormalEndFeel: "Hard (coronoid osteophytes hitting coronoid fossa or heterotopic ossification)."
      },
      arthrokinematics: {
        type: "Concave-on-Convex Arthrology",
        rule: "Concave Trochlear Notch of Ulna on Convex Trochlea of Humerus",
        description: "Concave trochlear notch rolls and slides anteriorly on the convex humeral trochlea (same direction! Neumann p. 182). Humeroradial joint: concave fovea of radial head rolls and slides anteriorly on the convex capitulum.",
        closePacked: "Full extension with supination",
        loosePacked: "70\xB0 flexion, 10\xB0 supination"
      },
      muscles: {
        primeMovers: [
          { name: "Brachialis (workhorse flexor in all forearm positions)", innervation: "Musculocutaneous Nerve (C5-C6), small branch from Radial (C7)" },
          { name: "Biceps brachii (most powerful with supination)", innervation: "Musculocutaneous Nerve (C5-C6)" },
          { name: "Brachioradialis (active during rapid/loaded flexion in neutral)", innervation: "Radial Nerve (C5-C6)" }
        ],
        synergists: ["Pronator teres", "Flexor carpi radialis", "Palmaris longus"],
        antagonists: ["Triceps brachii", "Anconeus"]
      },
      goniometry: {
        position: "Supine, arm supported in anatomical extension, forearm fully supinated.",
        fulcrum: "Lateral epicondyle of humerus.",
        stationaryArm: "Lateral midline of humerus (referencing acromion tip).",
        movableArm: "Lateral midline of radius (referencing radial styloid process).",
        substitutions: "Shoulder flexion, wrist flexion substitution."
      },
      citations: [
        { book: "Neumann (3rd Ed)", chapter: "Chapter 6: Elbow and Forearm", page: "pp. 180\u2013186, Table 6.5" },
        { book: "Braddom's PM&R (7th Ed)", chapter: "Elbow Biomechanics & Contracture", page: "Ch. 3" },
        { book: "Daniels & Worthingham (10th Ed)", chapter: "Elbow Flexion Muscle Testing", page: "pp. 102\u2013107" }
      ]
    },
    elbow_extension: {
      id: "elbow_extension",
      region: "elbow_forearm",
      jointName: "Elbow Joint (Humeroulnar & Humeroradial)",
      motionName: "Extension",
      plane: "Sagittal",
      axis: "Coronal Axis",
      normalMin: 0,
      normalMax: 0,
      unit: "degrees",
      referenceRangeText: "0\xB0 (Normal hyperextension up to -5\xB0 to -10\xB0 especially in females)",
      functionalRange: "30\xB0 flexion (functional extension limit for most daily activities)",
      hypermobilityThreshold: -10,
      impingementRiskThreshold: -18,
      sliderMin: -15,
      sliderMax: 30,
      endFeel: {
        type: "Hard (Bone-to-bone) / Firm",
        description: "Olecranon process of ulna impacts the olecranon fossa of humerus, accompanied by tension in anterior capsule and anterior band of medial collateral ligament (MCL).",
        abnormalEndFeel: "Springy block (loose body/osteochondritis dissecans) or Firm contracture."
      },
      arthrokinematics: {
        type: "Concave-on-Convex Arthrology",
        rule: "Concave Ulna on Convex Humerus",
        description: "Concave trochlear notch rolls and slides posteriorly across the convex trochlea of the humerus until olecranon process seats tightly in olecranon fossa (Neumann p. 182).",
        closePacked: "Full extension with supination",
        loosePacked: "70\xB0 flexion, 10\xB0 supination"
      },
      muscles: {
        primeMovers: [
          { name: "Triceps brachii (Medial, Lateral, and Long heads)", innervation: "Radial Nerve (C6-C8)" },
          { name: "Anconeus (initiates and stabilizes extension)", innervation: "Radial Nerve (C7-C8)" }
        ],
        synergists: ["Extensor carpi ulnaris (subtle stabilizer)"],
        antagonists: ["Brachialis", "Biceps brachii", "Brachioradialis"]
      },
      goniometry: {
        position: "Supine, towel under distal humerus to permit full unhindered elbow extension.",
        fulcrum: "Lateral epicondyle of humerus.",
        stationaryArm: "Lateral midline of humerus.",
        movableArm: "Lateral midline of radius (radial styloid process).",
        substitutions: "Shoulder hyperextension / retraction."
      },
      citations: [
        { book: "Neumann (3rd Ed)", chapter: "Chapter 6: Elbow and Forearm", page: "pp. 182\u2013188, Table 6.7" },
        { book: "Braddom's PM&R (7th Ed)", chapter: "Elbow Joint Goniometry", page: "Table 2.4" }
      ]
    },
    forearm_pronation: {
      id: "forearm_pronation",
      region: "elbow_forearm",
      jointName: "Radioulnar Joints (Proximal & Distal)",
      motionName: "Pronation",
      plane: "Transverse",
      axis: "Oblique Axis (Radial head center to Ulnar head center)",
      normalMin: 0,
      normalMax: 80,
      unit: "degrees",
      referenceRangeText: "0\xB0 \u2013 80\xB0 (AAOS: 80\xB0, Neumann: up to 90\xB0)",
      functionalRange: "50\xB0 (Typing on keyboard, holding eating utensils)",
      hypermobilityThreshold: 90,
      impingementRiskThreshold: 100,
      sliderMin: 0,
      sliderMax: 95,
      endFeel: {
        type: "Firm or Hard",
        description: "Firm tension in dorsal radioulnar ligament, interosseous membrane, and supinator muscle stretch; Hard if radius physically abuts ulna.",
        abnormalEndFeel: "Hard (malunited Colles fracture / distal radioulnar subluxation)."
      },
      arthrokinematics: {
        type: "Pivot & Trochoid Joint Complex",
        rule: "Proximal = Spin; Distal = Concave on Convex Roll & Slide",
        description: "Proximal radioulnar joint: radial head spins within annular ligament and radial notch of ulna. Distal radioulnar joint: concave ulnar notch of radius rolls and slides anteriorly (palmar direction) across the convex ulnar head (Neumann p. 192, Table 6.3).",
        closePacked: "5\xB0 supination",
        loosePacked: "10\xB0 supination"
      },
      muscles: {
        primeMovers: [
          { name: "Pronator quadratus (consistently recruited prime mover)", innervation: "Anterior Interosseous Nerve from Median (C8-T1)" },
          { name: "Pronator teres (recruited during resisted/high-speed pronation)", innervation: "Median Nerve (C6-C7)" }
        ],
        synergists: ["Flexor carpi radialis", "Brachioradialis (assists pronation from full supination to neutral)"],
        antagonists: ["Supinator", "Biceps brachii"]
      },
      goniometry: {
        position: "Seated, elbow flexed to 90\xB0 and held snugly against trunk, forearm neutral (thumb pointing to ceiling).",
        fulcrum: "Lateral to ulnar styloid process (or center of third metacarpal head with pencil in fist).",
        stationaryArm: "Parallel to anterior mid-longitudinal axis of humerus (vertical).",
        movableArm: "Across dorsal aspect of distal radius and ulna, just proximal to styloid processes.",
        substitutions: "Shoulder abduction and internal rotation (elbow flaring out)."
      },
      citations: [
        { book: "Neumann (3rd Ed)", chapter: "Chapter 6: Elbow and Forearm", page: "pp. 191\u2013194, Table 6.3" },
        { book: "Braddom's PM&R (7th Ed)", chapter: "Forearm Function & Pronation Deficits", page: "Ch. 3" },
        { book: "Daniels & Worthingham (10th Ed)", chapter: "Forearm Pronation", page: "pp. 116\u2013119" }
      ]
    },
    forearm_supination: {
      id: "forearm_supination",
      region: "elbow_forearm",
      jointName: "Radioulnar Joints (Proximal & Distal)",
      motionName: "Supination",
      plane: "Transverse",
      axis: "Oblique Axis (Radial head to Ulnar head)",
      normalMin: 0,
      normalMax: 80,
      unit: "degrees",
      referenceRangeText: "0\xB0 \u2013 80\xB0 (AAOS: 80\xB0, Neumann: up to 90\xB0)",
      functionalRange: "50\xB0 (Receiving coins in palm, turning doorknob, washing face)",
      hypermobilityThreshold: 90,
      impingementRiskThreshold: 100,
      sliderMin: 0,
      sliderMax: 95,
      endFeel: {
        type: "Firm (Capsular / Ligamentous)",
        description: "Tension in palmar radioulnar ligament, oblique cord, interosseous membrane, and pronator muscles.",
        abnormalEndFeel: "Hard (synostosis / heterotopic bone bridge)."
      },
      arthrokinematics: {
        type: "Pivot & Trochoid Joint Complex",
        rule: "Proximal = Spin; Distal = Roll & Slide in same direction",
        description: "Proximal radioulnar joint: radial head spins within the fibro-osseous ring. Distal radioulnar joint: concave ulnar notch of radius rolls and slides posteriorly (dorsal direction) across the convex ulnar head (Neumann Table 6.3).",
        closePacked: "5\xB0 supination",
        loosePacked: "10\xB0 supination"
      },
      muscles: {
        primeMovers: [
          { name: "Supinator (acts continuously during low-load supination)", innervation: "Deep branch of Radial Nerve / PIN (C6-C7)" },
          { name: "Biceps brachii (tremendous power generator when elbow is flexed 90\xB0)", innervation: "Musculocutaneous Nerve (C5-C6)" }
        ],
        synergists: ["Brachioradialis (from full pronation to neutral)", "Extensor pollicis longus"],
        antagonists: ["Pronator teres", "Pronator quadratus"]
      },
      goniometry: {
        position: "Seated, elbow flexed to 90\xB0 against trunk, forearm neutral.",
        fulcrum: "Medial to ulnar styloid process (or palmar surface of wrist).",
        stationaryArm: "Parallel to anterior mid-longitudinal axis of humerus.",
        movableArm: "Across the volar (palmar) aspect of distal radius and ulna.",
        substitutions: "Shoulder adduction and external rotation."
      },
      citations: [
        { book: "Neumann (3rd Ed)", chapter: "Chapter 6: Elbow and Forearm", page: "pp. 191\u2013194, Table 6.3" },
        { book: "Daniels & Worthingham (10th Ed)", chapter: "Forearm Supination", page: "pp. 112\u2013115" }
      ]
    },
    // ==========================================
    // WRIST JOINT
    // ==========================================
    wrist_flexion: {
      id: "wrist_flexion",
      region: "wrist",
      jointName: "Wrist Joint (Radiocarpal & Midcarpal)",
      motionName: "Flexion (Palmarflexion)",
      plane: "Sagittal",
      axis: "Coronal Axis (through Capitate head)",
      normalMin: 0,
      normalMax: 70,
      unit: "degrees",
      referenceRangeText: "0\xB0 \u2013 70\xB0 (AAOS: 80\xB0, Neumann: 70\xB0\u201380\xB0)",
      functionalRange: "40\xB0 (Typing, opening door handles, hygiene)",
      hypermobilityThreshold: 85,
      impingementRiskThreshold: 95,
      sliderMin: 0,
      sliderMax: 85,
      endFeel: {
        type: "Firm (Ligamentous / Capsular)",
        description: "Tension in dorsal radiocarpal ligament, dorsal intercarpal ligament, and wrist extensor muscle tendons (ECRL, ECRB, ECU).",
        abnormalEndFeel: "Hard (carpal collapse/SLAC wrist) or Empty (carpal tunnel syndrome flare)."
      },
      arthrokinematics: {
        type: "Convex-on-Concave Arthrology",
        rule: "Convex Proximal Carpal Row on Concave Distal Radius & TFC",
        description: "Radiocarpal joint: convex scaphoid and lunate roll anteriorly (palmar direction) and slide posteriorly (dorsal direction) across the concave radius (Neumann p. 228, Fig 7.15). Midcarpal joint: capitate rolls anteriorly and slides posteriorly on scaphoid/lunate.",
        closePacked: "Full extension with radial deviation",
        loosePacked: "Neutral with slight ulnar deviation"
      },
      muscles: {
        primeMovers: [
          { name: "Flexor carpi radialis (FCR)", innervation: "Median Nerve (C6-C7)" },
          { name: "Flexor carpi ulnaris (FCU)", innervation: "Ulnar Nerve (C8-T1)" }
        ],
        synergists: ["Palmaris longus", "Flexor digitorum superficialis (FDS)", "Flexor digitorum profundus (FDP)", "Flexor pollicis longus"],
        antagonists: ["Extensor carpi radialis longus (ECRL)", "ECRB", "Extensor carpi ulnaris (ECU)"]
      },
      goniometry: {
        position: "Patient seated next to table, forearm pronated and resting flat on table, fingers relaxed.",
        fulcrum: "Lateral aspect of triquetrum (distal to ulnar styloid process).",
        stationaryArm: "Lateral midline of ulna (referencing olecranon process).",
        movableArm: "Lateral midline of 5th metacarpal.",
        substitutions: "Forearm lifting off table, active finger extension."
      },
      citations: [
        { book: "Neumann (3rd Ed)", chapter: "Chapter 7: Wrist", page: "pp. 226\u2013231, Table 7.1" },
        { book: "Braddom's PM&R (7th Ed)", chapter: "Hand & Wrist Rehabilitation", page: "Ch. 3" },
        { book: "Daniels & Worthingham (10th Ed)", chapter: "Wrist Flexion", page: "pp. 122\u2013126" }
      ]
    },
    wrist_extension: {
      id: "wrist_extension",
      region: "wrist",
      jointName: "Wrist Joint (Radiocarpal & Midcarpal)",
      motionName: "Extension (Dorsiflexion)",
      plane: "Sagittal",
      axis: "Coronal Axis (through Capitate)",
      normalMin: 0,
      normalMax: 70,
      unit: "degrees",
      referenceRangeText: "0\xB0 \u2013 70\xB0 (AAOS standard: 70\xB0)",
      functionalRange: "40\xB0 (Pushing off chair, powerful power-grip tenodesis)",
      hypermobilityThreshold: 85,
      impingementRiskThreshold: 95,
      sliderMin: 0,
      sliderMax: 85,
      endFeel: {
        type: "Firm (Ligamentous)",
        description: "Tension in palmar radiocarpal ligaments (radiocapitate, radioscapholunate), palmar midcarpal ligaments, and flexor tendon stretch.",
        abnormalEndFeel: "Hard (dorsal carpal impingement) or Empty."
      },
      arthrokinematics: {
        type: "Convex-on-Concave Arthrology",
        rule: "Convex Carpals on Concave Radius",
        description: "Convex proximal carpal row rolls posteriorly (dorsally) and slides anteriorly (volarly) on the concave distal radius (Neumann p. 228). Palmar slide tightens the thick palmar radiocarpal ligaments, stabilizing the wrist for heavy grip.",
        closePacked: "Full extension with radial deviation",
        loosePacked: "Neutral with slight ulnar deviation"
      },
      muscles: {
        primeMovers: [
          { name: "Extensor carpi radialis longus (ECRL)", innervation: "Radial Nerve (C6-C7)" },
          { name: "Extensor carpi radialis brevis (ECRB - primary workhorse)", innervation: "Radial Nerve / PIN (C6-C7)" },
          { name: "Extensor carpi ulnaris (ECU)", innervation: "Posterior Interosseous Nerve (C7-C8)" }
        ],
        synergists: ["Extensor digitorum", "Extensor indicis", "Extensor digiti minimi", "Extensor pollicis longus"],
        antagonists: ["Flexor carpi radialis", "Flexor carpi ulnaris", "FDS", "FDP"]
      },
      goniometry: {
        position: "Patient seated with forearm pronated on table, fingers loosely flexed.",
        fulcrum: "Lateral aspect of triquetrum.",
        stationaryArm: "Lateral midline of ulna.",
        movableArm: "Lateral midline of 5th metacarpal.",
        substitutions: "Finger extension (passive tenodesis stretching finger flexors)."
      },
      citations: [
        { book: "Neumann (3rd Ed)", chapter: "Chapter 7: Wrist", page: "pp. 226\u2013231, Table 7.1" },
        { book: "Daniels & Worthingham (10th Ed)", chapter: "Wrist Extension", page: "pp. 127\u2013131" }
      ]
    },
    wrist_radial_deviation: {
      id: "wrist_radial_deviation",
      region: "wrist",
      jointName: "Wrist Joint",
      motionName: "Radial Deviation (Abduction)",
      plane: "Frontal",
      axis: "Anteroposterior (through Capitate)",
      normalMin: 0,
      normalMax: 20,
      unit: "degrees",
      referenceRangeText: "0\xB0 \u2013 20\xB0 (AAOS: 20\xB0)",
      functionalRange: "10\xB0 (Hammering, cutlery control)",
      hypermobilityThreshold: 28,
      impingementRiskThreshold: 35,
      sliderMin: 0,
      sliderMax: 30,
      endFeel: {
        type: "Hard (Bony block) or Firm",
        description: "Contact of scaphoid against radial styloid process or tension in ulnar collateral ligament and ulnocarpal complex.",
        abnormalEndFeel: "Hard / Painful (scaphoid fracture non-union, radial styloid impingement)."
      },
      arthrokinematics: {
        type: "Convex-on-Concave Arthrology",
        rule: "Carpals roll radially and slide ulnarly",
        description: "Proximal carpal row rolls laterally (radially) and slides medially (ulnarly) on radius (Neumann p. 229, Fig 7.16).",
        closePacked: "Full extension with radial deviation",
        loosePacked: "Neutral"
      },
      muscles: {
        primeMovers: [
          { name: "Extensor carpi radialis longus & brevis", innervation: "Radial Nerve (C6-C7)" },
          { name: "Flexor carpi radialis", innervation: "Median Nerve (C6-C7)" },
          { name: "Abductor pollicis longus (APL)", innervation: "PIN (C7-C8)" }
        ],
        synergists: ["Extensor pollicis longus/brevis"],
        antagonists: ["FCU", "ECU"]
      },
      goniometry: {
        position: "Forearm pronated flat on table, fingers extended.",
        fulcrum: "Dorsal aspect of capitate.",
        stationaryArm: "Dorsal midline of forearm (lateral epicondyle line).",
        movableArm: "Dorsal midline of 3rd metacarpal.",
        substitutions: "Forearm pronation/supination, wrist flexion."
      },
      citations: [
        { book: "Neumann (3rd Ed)", chapter: "Chapter 7: Wrist", page: "p. 229, Table 7.1" },
        { book: "Daniels & Worthingham (10th Ed)", chapter: "Wrist Deviation", page: "p. 132" }
      ]
    },
    wrist_ulnar_deviation: {
      id: "wrist_ulnar_deviation",
      region: "wrist",
      jointName: "Wrist Joint",
      motionName: "Ulnar Deviation (Adduction)",
      plane: "Frontal",
      axis: "Anteroposterior (through Capitate)",
      normalMin: 0,
      normalMax: 30,
      unit: "degrees",
      referenceRangeText: "0\xB0 \u2013 30\xB0 (AAOS: 30\xB0, Neumann: up to 35\xB0)",
      functionalRange: "20\xB0 \u2013 25\xB0 (Pouring water, handwriting, golf swing)",
      hypermobilityThreshold: 40,
      impingementRiskThreshold: 48,
      sliderMin: 0,
      sliderMax: 40,
      endFeel: {
        type: "Firm (Ligamentous)",
        description: "Tension in radial collateral ligament and palmar/dorsal radiocarpal ligaments (capsular).",
        abnormalEndFeel: "Hard (TFCC tear / ulnar abutment syndrome)."
      },
      arthrokinematics: {
        type: "Convex-on-Concave Arthrology",
        rule: "Carpals roll ulnarly and slide radially",
        description: "Proximal carpal row rolls medially (ulnarly) and slides laterally (radially) on radius (Neumann p. 229).",
        closePacked: "Full extension",
        loosePacked: "Neutral"
      },
      muscles: {
        primeMovers: [
          { name: "Extensor carpi ulnaris (ECU)", innervation: "PIN / Radial (C7-C8)" },
          { name: "Flexor carpi ulnaris (FCU)", innervation: "Ulnar Nerve (C8-T1)" }
        ],
        synergists: ["Extensor digiti minimi", "FDS/FDP (ulnar slips)"],
        antagonists: ["FCR", "ECRL", "ECRB"]
      },
      goniometry: {
        position: "Forearm pronated flat on table.",
        fulcrum: "Dorsal aspect of capitate.",
        stationaryArm: "Dorsal midline of forearm.",
        movableArm: "Dorsal midline of 3rd metacarpal.",
        substitutions: "Elbow movement, wrist extension."
      },
      citations: [
        { book: "Neumann (3rd Ed)", chapter: "Chapter 7: Wrist", page: "p. 229, Table 7.1" },
        { book: "Daniels & Worthingham (10th Ed)", chapter: "Wrist Deviation", page: "p. 132" }
      ]
    },
    thumb_cmc_abduction: {
      id: "thumb_cmc_abduction",
      region: "wrist",
      jointName: "1st Carpometacarpal (CMC / Trapeziometacarpal) Saddle Joint",
      motionName: "Thumb CMC Palmar Abduction",
      plane: "Sagittal",
      axis: "Anteroposterior Axis through Trapezium",
      normalMin: 0,
      normalMax: 45,
      unit: "degrees",
      referenceRangeText: "0\xB0 \u2013 45\xB0 (AAOS: 45\xB0\u201350\xB0, Neumann: 45\xB0)",
      functionalRange: "35\xB0 (Grasping large cups, bottles, opening grasp)",
      hypermobilityThreshold: 55,
      impingementRiskThreshold: 65,
      sliderMin: 0,
      sliderMax: 60,
      endFeel: {
        type: "Firm (Web space tissue stretch / Ligamentous)",
        description: "Tension in first web space fascia, intermetacarpal ligament, and adductor pollicis muscle.",
        abnormalEndFeel: "Hard (basilar thumb osteoarthritis / CMC spurring) or Empty."
      },
      arthrokinematics: {
        type: "Saddle Joint: Convex-on-Concave Orthogonal Rule",
        rule: "Convex 1st Metacarpal base rolls and slides in OPPOSITE directions on Concave Trapezium",
        description: "Orthogonal Saddle Kinematics (Neumann Ch. 8, pp. 268\u2013270): In palmar abduction, the convex diameter of the 1st metacarpal base rolls palmarward (anteriorly) and slides dorsalward (posteriorly) across the concave saddle surface of the trapezium.",
        closePacked: "Full opposition / extreme abduction",
        loosePacked: "Midway between abduction/adduction and flexion/extension"
      },
      muscles: {
        primeMovers: [
          { name: "Abductor pollicis brevis (APB)", innervation: "Median Nerve (C8-T1, Recurrent thenar motor branch)" },
          { name: "Abductor pollicis longus (APL)", innervation: "Posterior Interosseous Nerve / Radial (C7-C8)" }
        ],
        synergists: ["Opponens pollicis", "Flexor pollicis brevis (superficial head)"],
        antagonists: ["Adductor pollicis (transverse & oblique heads)", "First dorsal interosseous"]
      },
      goniometry: {
        position: "Forearm in mid-position resting on ulnar border on table, thumb alongside 2nd metacarpal.",
        fulcrum: "Junction of the bases of the 1st and 2nd metacarpals (anatomical snuffbox region).",
        stationaryArm: "Lateral midline of the 2nd metacarpal bone.",
        movableArm: "Lateral midline of the 1st metacarpal bone.",
        substitutions: "Thumb MCP/IP hyperextension, wrist radial deviation."
      },
      citations: [
        { book: "Neumann (3rd Ed)", chapter: "Chapter 8: Hand", page: "pp. 268\u2013272, Fig 8.13 & Table 8.3" },
        { book: "Braddom's PM&R (7th Ed)", chapter: "Hand & Upper Limb Examination", page: "Ch. 3" },
        { book: "Daniels & Worthingham (10th Ed)", chapter: "Thumb Abduction Testing", page: "pp. 134\u2013137" }
      ]
    },
    thumb_cmc_flexion: {
      id: "thumb_cmc_flexion",
      region: "wrist",
      jointName: "1st Carpometacarpal (CMC / Trapeziometacarpal) Saddle Joint",
      motionName: "Thumb CMC Flexion",
      plane: "Frontal",
      axis: "Oblique Coronal Axis through Trapezium",
      normalMin: 0,
      normalMax: 45,
      unit: "degrees",
      referenceRangeText: "0\xB0 \u2013 45\xB0 (AAOS: 45\xB0\u201350\xB0)",
      functionalRange: "30\xB0 (Holding pen, cutlery, fine key pinch)",
      hypermobilityThreshold: 55,
      impingementRiskThreshold: 65,
      sliderMin: 0,
      sliderMax: 55,
      endFeel: {
        type: "Soft (Soft tissue approximation) or Firm",
        description: "Contact with thenar eminence tissues; tension in posterior oblique ligament and dorsal CMC capsule.",
        abnormalEndFeel: "Hard (osteoarthritis / thumb CMC osteophytes)."
      },
      arthrokinematics: {
        type: "Saddle Joint: Concave-on-Convex Orthogonal Rule",
        rule: "Concave 1st Metacarpal base rolls and slides in the SAME direction on Convex Trapezium",
        description: "Orthogonal Saddle Kinematics (Neumann Ch. 8, pp. 268\u2013270): In flexion across the palm, the concave diameter of the 1st metacarpal base rolls and slides in the SAME ulnar/medial direction across the convex saddle surface of the trapezium.",
        closePacked: "Full opposition / extreme flexion",
        loosePacked: "Midway between abduction/adduction and flexion/extension"
      },
      muscles: {
        primeMovers: [
          { name: "Flexor pollicis brevis (FPB)", innervation: "Median (superficial head, C8-T1) & Deep Ulnar (deep head, C8-T1)" },
          { name: "Opponens pollicis", innervation: "Median Nerve (C8-T1)" }
        ],
        synergists: ["Flexor pollicis longus", "Adductor pollicis"],
        antagonists: ["Extensor pollicis longus (EPL)", "Extensor pollicis brevis (EPB)", "Abductor pollicis longus"]
      },
      goniometry: {
        position: "Forearm supinated, resting dorsal surface on table.",
        fulcrum: "Palmar / dorsal junction of 1st CMC joint.",
        stationaryArm: "Ventral midline of 2nd metacarpal.",
        movableArm: "Ventral midline of 1st metacarpal.",
        substitutions: "Thumb MCP flexion compensation."
      },
      citations: [
        { book: "Neumann (3rd Ed)", chapter: "Chapter 8: Hand", page: "pp. 268\u2013272, Fig 8.14 & Table 8.3" },
        { book: "Daniels & Worthingham (10th Ed)", chapter: "Thumb Flexion Testing", page: "pp. 138\u2013140" }
      ]
    },
    thumb_opposition: {
      id: "thumb_opposition",
      region: "wrist",
      jointName: "1st Ray & CMC Saddle Complex",
      motionName: "Thumb Opposition",
      plane: "Triplanar",
      axis: "Dynamic Sequential Saddle Helical Axis",
      normalMin: 0,
      normalMax: 60,
      unit: "degrees",
      referenceRangeText: "0\xB0 \u2013 60\xB0 (AAOS: Pad of thumb touches base or tip of 5th digit = 0 mm)",
      functionalRange: "45\xB0 (Writing, typing, buttoning shirts, precision pinch)",
      hypermobilityThreshold: 70,
      impingementRiskThreshold: 75,
      sliderMin: 0,
      sliderMax: 65,
      endFeel: {
        type: "Soft (Pulp contact) or Firm (Ligamentous)",
        description: "Contact between thumb pulp and fingertip pulp; tension in dorsoradial ligament complex.",
        abnormalEndFeel: "Empty (median nerve thenar motor branch palsy / severe CTS atrophy)."
      },
      arthrokinematics: {
        type: "Triplanar Compound Saddle Coupling",
        rule: "Phase 1: Abduction \u2192 Phase 2: Flexion \u2192 Phase 3: Medial Axial Rotation",
        description: "Evolutionary Hallux-Pollux Milestone (Neumann Ch. 8, pp. 270\u2013271): Opposition is a coordinated sequence where the 1st metacarpal abducts, flexes medially, and automatically rotates internally (~45\xB0\u201360\xB0) around its own long axis due to oblique pulling of Opponens Pollicis and helical tension in the anterior oblique (beak) ligament, presenting the thumb pulp directly face-to-face with the opposite fingers!",
        closePacked: "Full opposition (thumb tip pressing firmly against 5th digit)",
        loosePacked: "Anatomical neutral"
      },
      muscles: {
        primeMovers: [
          { name: "Opponens pollicis (primary workhorse for internal rotation)", innervation: "Median Nerve (C8-T1, Recurrent branch)" },
          { name: "Abductor pollicis brevis (APB)", innervation: "Median Nerve (C8-T1)" }
        ],
        synergists: ["Flexor pollicis brevis", "Adductor pollicis"],
        antagonists: ["Extensor pollicis longus", "Extensor pollicis brevis", "Abductor pollicis longus"]
      },
      goniometry: {
        position: "Forearm supinated, wrist in neutral.",
        fulcrum: "Linear millimeter ruler measuring distance from tip of thumb to base of 5th digit (or angular rotation of 1st metacarpal).",
        stationaryArm: "Palmar plane across metacarpal heads 2-5.",
        movableArm: "Plane across thumbnail / 1st metacarpal.",
        substitutions: "Cupping of palm by 5th digit flexion (opponens digiti minimi trick movement)."
      },
      citations: [
        { book: "Neumann (3rd Ed)", chapter: "Chapter 8: Hand", page: "pp. 270\u2013273, Fig 8.16 & Table 8.4" },
        { book: "Braddom's PM&R (7th Ed)", chapter: "Hand Functional Prehension Assessment", page: "Ch. 3" }
      ]
    },
    // ==========================================
    // HIP JOINT
    // ==========================================
    hip_flexion: {
      id: "hip_flexion",
      region: "hip",
      jointName: "Hip Joint (Coxofemoral)",
      motionName: "Flexion",
      plane: "Sagittal",
      axis: "Coronal Axis (through Femoral Head center)",
      normalMin: 0,
      normalMax: 120,
      unit: "degrees",
      referenceRangeText: "0\xB0 \u2013 120\xB0 (AAOS: 120\xB0 with knee flexed; ~90\xB0 with knee extended)",
      functionalRange: "110\xB0 \u2013 120\xB0 (Squatting, tying shoelaces, sitting in low chair: 90\xB0\u2013100\xB0)",
      hypermobilityThreshold: 130,
      impingementRiskThreshold: 140,
      sliderMin: 0,
      sliderMax: 135,
      endFeel: {
        type: "Soft (Soft tissue contact) or Firm",
        description: "Contact between anterior thigh and lower abdomen (knee flexed); or Firm tension in posterior capsule, ischiofemoral ligament, and gluteus maximus.",
        abnormalEndFeel: "Hard (Femoroacetabular Impingement - FAI CAM/Pincer lesion) or Empty."
      },
      arthrokinematics: {
        type: "Convex-on-Concave Ball-and-Socket (Enarthrodial)",
        rule: "Convex Femoral Head within Concave Acetabulum",
        description: "Convex femoral head spins and rolls anteriorly/superiorly while sliding posteriorly/inferiorly within the deep concave acetabulum (Neumann p. 493, Fig 12.23). Posterior slide maintains central congruence and prevents superior abutment against acetabular rim.",
        closePacked: "Full extension, slight internal rotation, and abduction",
        loosePacked: "30\xB0 flexion, 30\xB0 abduction, slight external rotation"
      },
      muscles: {
        primeMovers: [
          { name: "Iliopsoas (Psoas major & Iliacus)", innervation: "Femoral Nerve (L2-L4) & L1-L3 ventral rami" },
          { name: "Rectus femoris", innervation: "Femoral Nerve (L2-L4)" },
          { name: "Tensor fasciae latae (TFL)", innervation: "Superior Gluteal Nerve (L4-S1)" },
          { name: "Sartorius", innervation: "Femoral Nerve (L2-L3)" },
          { name: "Pectineus", innervation: "Femoral Nerve (L2-L3)" }
        ],
        synergists: ["Adductor longus (when hip is in extension)", "Gracilis"],
        antagonists: ["Gluteus maximus", "Hamstrings (Biceps femoris, Semitendinosus, Semimembranosus)"]
      },
      goniometry: {
        position: "Supine, contralateral leg fully extended flat on table to stabilize pelvis, ipsilateral knee allowed to flex naturally.",
        fulcrum: "Greater trochanter of the femur.",
        stationaryArm: "Lateral midline of the pelvis (referencing mid-iliac crest line).",
        movableArm: "Lateral midline of the femur (referencing lateral femoral condyle).",
        substitutions: "Posterior pelvic tilt, lumbar spine flattening/flexion."
      },
      citations: [
        { book: "Neumann (3rd Ed)", chapter: "Chapter 12: Hip", page: "pp. 491\u2013496, Table 12.3" },
        { book: "Braddom's PM&R (7th Ed)", chapter: "Hip Osteoarthritis & Biomechanics", page: "Ch. 4" },
        { book: "Daniels & Worthingham (10th Ed)", chapter: "Hip Flexion Muscle Testing", page: "pp. 182\u2013186" }
      ]
    },
    hip_extension: {
      id: "hip_extension",
      region: "hip",
      jointName: "Hip Joint (Coxofemoral)",
      motionName: "Extension",
      plane: "Sagittal",
      axis: "Coronal Axis (through Femoral Head)",
      normalMin: 0,
      normalMax: 20,
      unit: "degrees",
      referenceRangeText: "0\xB0 \u2013 20\xB0 (AAOS: 20\xB0\u201330\xB0, Neumann: up to 30\xB0 with pelvis free)",
      functionalRange: "10\xB0 \u2013 15\xB0 (Essential for normal terminal stance gait stride length)",
      hypermobilityThreshold: 30,
      impingementRiskThreshold: 40,
      sliderMin: 0,
      sliderMax: 35,
      endFeel: {
        type: "Firm (Ligamentous)",
        description: "Massive tension in Iliofemoral ligament of Bigelow (strongest ligament in human body), pubofemoral/ischiofemoral ligaments, and iliopsoas muscle stretch.",
        abnormalEndFeel: "Firm contracture (hip flexion contracture in sedentary or stroke patients)."
      },
      arthrokinematics: {
        type: "Convex-on-Concave Arthrology",
        rule: "Convex Femoral Head within Concave Acetabulum",
        description: "Convex femoral head rolls posteriorly and slides anteriorly within the acetabulum (Neumann p. 493). Anterior slide winds the spiral orientation of the capsular ligaments taut, locking the joint into its close-packed stability.",
        closePacked: "Full extension, slight abduction, and internal rotation",
        loosePacked: "30\xB0 flexion, 30\xB0 abduction, slight ER"
      },
      muscles: {
        primeMovers: [
          { name: "Gluteus maximus", innervation: "Inferior Gluteal Nerve (L5-S2)" },
          { name: "Semimembranosus & Semitendinosus", innervation: "Tibial division of Sciatic Nerve (L5-S2)" },
          { name: "Biceps femoris (long head)", innervation: "Tibial division of Sciatic Nerve (L5-S2)" },
          { name: "Adductor magnus (posterior extensor head)", innervation: "Tibial Nerve (L4-S1)" }
        ],
        synergists: ["Gluteus medius (posterior fibers)"],
        antagonists: ["Iliopsoas", "Rectus femoris", "Pectineus", "TFL"]
      },
      goniometry: {
        position: "Prone, pelvis stabilized with straps or clinician hand over sacrum/PSIS, knee fully extended.",
        fulcrum: "Greater trochanter of the femur.",
        stationaryArm: "Lateral midline of the pelvis.",
        movableArm: "Lateral midline of the femur (lateral femoral condyle).",
        substitutions: "Anterior pelvic tilt, lumbar hyperextension (lordosis)."
      },
      citations: [
        { book: "Neumann (3rd Ed)", chapter: "Chapter 12: Hip", page: "pp. 493\u2013498, Table 12.3" },
        { book: "Braddom's PM&R (7th Ed)", chapter: "Gait Impairment & Hip Extension", page: "Ch. 5" },
        { book: "Daniels & Worthingham (10th Ed)", chapter: "Hip Extension Testing", page: "pp. 187\u2013193" }
      ]
    },
    hip_abduction: {
      id: "hip_abduction",
      region: "hip",
      jointName: "Hip Joint (Coxofemoral)",
      motionName: "Abduction",
      plane: "Frontal",
      axis: "Anteroposterior Axis (through Femoral Head)",
      normalMin: 0,
      normalMax: 40,
      unit: "degrees",
      referenceRangeText: "0\xB0 \u2013 40\xB0 (AAOS: 40\xB0\u201345\xB0)",
      functionalRange: "20\xB0 \u2013 25\xB0 (Getting in/out of car, sidestepping, stair climbing)",
      hypermobilityThreshold: 50,
      impingementRiskThreshold: 60,
      sliderMin: 0,
      sliderMax: 50,
      endFeel: {
        type: "Firm (Ligamentous / Muscular)",
        description: "Tension in pubofemoral ligament, inferior joint capsule, and hip adductor muscles (adductor longus/brevis/magnus, gracilis).",
        abnormalEndFeel: "Hard (superior femoral neck contact on acetabular rim)."
      },
      arthrokinematics: {
        type: "Convex-on-Concave Arthrology",
        rule: "Convex Femoral Head within Concave Acetabulum",
        description: "Convex femoral head rolls superiorly and slides inferiorly within the acetabulum (Neumann p. 494, Fig 12.24). Inferior slide tensions the pubofemoral ligament and inferior capsule.",
        closePacked: "Full extension, abduction, and internal rotation",
        loosePacked: "30\xB0 flexion, 30\xB0 abduction"
      },
      muscles: {
        primeMovers: [
          { name: "Gluteus medius (primary pelvic stabilizer in single-leg stance)", innervation: "Superior Gluteal Nerve (L4-S1)" },
          { name: "Gluteus minimus", innervation: "Superior Gluteal Nerve (L4-S1)" },
          { name: "Tensor fasciae latae (TFL)", innervation: "Superior Gluteal Nerve (L4-S1)" }
        ],
        synergists: ["Piriformis", "Sartorius"],
        antagonists: ["Adductor longus", "Adductor brevis", "Adductor magnus", "Pectineus", "Gracilis"]
      },
      goniometry: {
        position: "Supine, legs in anatomical position, pelvis level.",
        fulcrum: "Anterior superior iliac spine (ASIS) of the measured limb.",
        stationaryArm: "Horizontal line connecting both ASIS prominences.",
        movableArm: "Anterior midline of the femur (referencing patella center).",
        substitutions: "Lateral trunk flexion, hip external rotation and flexion."
      },
      citations: [
        { book: "Neumann (3rd Ed)", chapter: "Chapter 12: Hip", page: "pp. 494\u2013499, Table 12.3" },
        { book: "Daniels & Worthingham (10th Ed)", chapter: "Hip Abduction Testing (Trendelenburg)", page: "pp. 194\u2013199" }
      ]
    },
    hip_adduction: {
      id: "hip_adduction",
      region: "hip",
      jointName: "Hip Joint (Coxofemoral)",
      motionName: "Adduction",
      plane: "Frontal",
      axis: "Anteroposterior",
      normalMin: 0,
      normalMax: 25,
      unit: "degrees",
      referenceRangeText: "0\xB0 \u2013 25\xB0 (AAOS: 25\xB0\u201330\xB0)",
      functionalRange: "15\xB0 \u2013 20\xB0 (Crossing legs while seated)",
      hypermobilityThreshold: 35,
      impingementRiskThreshold: 45,
      sliderMin: 0,
      sliderMax: 35,
      endFeel: {
        type: "Firm (Ligamentous / Muscular)",
        description: "Tension in ischiofemoral ligament, superior capsule, and abductor muscles (gluteus medius, TFL).",
        abnormalEndFeel: "Hard (bony block) or Empty."
      },
      arthrokinematics: {
        type: "Convex-on-Concave Arthrology",
        rule: "Femoral head rolls inferiorly and slides superiorly",
        description: "Femoral head rolls inferiorly/medially and slides superiorly/laterally within the acetabulum.",
        closePacked: "Full extension, abduction, and internal rotation",
        loosePacked: "30\xB0 flexion, 30\xB0 abduction"
      },
      muscles: {
        primeMovers: [
          { name: "Adductor longus & brevis", innervation: "Obturator Nerve (L2-L4)" },
          { name: "Adductor magnus (anterior head)", innervation: "Obturator Nerve (L2-L4)" },
          { name: "Gracilis", innervation: "Obturator Nerve (L2-L3)" },
          { name: "Pectineus", innervation: "Femoral Nerve (L2-L3)" }
        ],
        synergists: ["Adductor magnus posterior head", "Quadratus femoris"],
        antagonists: ["Gluteus medius", "Gluteus minimus", "TFL"]
      },
      goniometry: {
        position: "Supine, contralateral limb slightly abducted to allow room for measured limb to cross.",
        fulcrum: "ASIS of measured limb.",
        stationaryArm: "Horizontal line connecting both ASIS.",
        movableArm: "Anterior midline of femur.",
        substitutions: "Hip internal rotation, lateral pelvic tilt."
      },
      citations: [
        { book: "Neumann (3rd Ed)", chapter: "Chapter 12: Hip", page: "p. 494, Table 12.3" },
        { book: "Daniels & Worthingham (10th Ed)", chapter: "Hip Adduction Testing", page: "pp. 200\u2013204" }
      ]
    },
    hip_internal_rotation: {
      id: "hip_internal_rotation",
      region: "hip",
      jointName: "Hip Joint (Coxofemoral)",
      motionName: "Internal (Medial) Rotation",
      plane: "Transverse",
      axis: "Longitudinal Femur Axis",
      normalMin: 0,
      normalMax: 35,
      unit: "degrees",
      referenceRangeText: "0\xB0 \u2013 35\xB0 (AAOS: 35\xB0\u201345\xB0)",
      functionalRange: "20\xB0 \u2013 25\xB0 (Normal gait pelvic rotation during stance)",
      hypermobilityThreshold: 50,
      impingementRiskThreshold: 60,
      sliderMin: 0,
      sliderMax: 50,
      endFeel: {
        type: "Firm (Capsular)",
        description: "Tension in posterior joint capsule, ischiofemoral ligament, and external rotators (piriformis, gluteus maximus).",
        abnormalEndFeel: "Hard (femoroacetabular impingement)."
      },
      arthrokinematics: {
        type: "Convex-on-Concave Arthrology",
        rule: "Femoral head rolls anteriorly and slides posteriorly",
        description: "Convex femoral head rolls anteriorly and slides posteriorly within the acetabulum.",
        closePacked: "Full extension, abduction, and internal rotation",
        loosePacked: "30\xB0 flexion, 30\xB0 abduction"
      },
      muscles: {
        primeMovers: [
          { name: "Gluteus minimus (anterior fibers)", innervation: "Superior Gluteal Nerve (L4-S1)" },
          { name: "Gluteus medius (anterior fibers)", innervation: "Superior Gluteal Nerve (L4-S1)" },
          { name: "Tensor fasciae latae (TFL)", innervation: "Superior Gluteal Nerve (L4-S1)" }
        ],
        synergists: ["Adductor longus", "Pectineus", "Semimembranosus"],
        antagonists: ["Gluteus maximus", "Piriformis", "Deep rotators"]
      },
      goniometry: {
        position: "Seated with knees flexed 90\xB0 over edge of table, towel roll under distal thigh.",
        fulcrum: "Anterior aspect of patella.",
        stationaryArm: "Perpendicular to floor (vertical reference).",
        movableArm: "Anterior midline of tibia (between malleoli). Leg moves laterally for hip IR!",
        substitutions: "Lateral pelvic tilt, trunk leaning."
      },
      citations: [
        { book: "Neumann (3rd Ed)", chapter: "Chapter 12: Hip", page: "p. 495, Table 12.3" },
        { book: "Daniels & Worthingham (10th Ed)", chapter: "Hip Internal Rotation", page: "pp. 204\u2013207" }
      ]
    },
    hip_external_rotation: {
      id: "hip_external_rotation",
      region: "hip",
      jointName: "Hip Joint (Coxofemoral)",
      motionName: "External (Lateral) Rotation",
      plane: "Transverse",
      axis: "Longitudinal Femur Axis",
      normalMin: 0,
      normalMax: 45,
      unit: "degrees",
      referenceRangeText: "0\xB0 \u2013 45\xB0 (AAOS: 45\xB0\u201350\xB0)",
      functionalRange: "30\xB0 (Crossing legs ankle-on-knee, putting on socks)",
      hypermobilityThreshold: 60,
      impingementRiskThreshold: 70,
      sliderMin: 0,
      sliderMax: 60,
      endFeel: {
        type: "Firm (Ligamentous)",
        description: "Tension in iliofemoral ligament (lateral band), pubofemoral ligament, anterior capsule, and internal rotator muscles.",
        abnormalEndFeel: "Hard or Empty."
      },
      arthrokinematics: {
        type: "Convex-on-Concave Arthrology",
        rule: "Femoral head rolls posteriorly and slides anteriorly",
        description: "Convex femoral head rolls posteriorly and slides anteriorly within the acetabulum.",
        closePacked: "Full extension, abduction, and internal rotation",
        loosePacked: "30\xB0 flexion, 30\xB0 abduction"
      },
      muscles: {
        primeMovers: [
          { name: "Gluteus maximus", innervation: "Inferior Gluteal Nerve (L5-S2)" },
          { name: "Piriformis", innervation: "Nerve to Piriformis (S1-S2)" },
          { name: "Obturator internus & externus", innervation: "Nerve to Obturator internus (L5-S1) & Obturator N. (L3-L4)" },
          { name: "Quadratus femoris", innervation: "Nerve to Quadratus femoris (L4-S1)" }
        ],
        synergists: ["Gemellus superior/inferior", "Sartorius", "Biceps femoris"],
        antagonists: ["Gluteus minimus", "Gluteus medius (anterior)", "TFL"]
      },
      goniometry: {
        position: "Seated with knee flexed 90\xB0 over edge of table.",
        fulcrum: "Anterior aspect of patella.",
        stationaryArm: "Perpendicular to floor.",
        movableArm: "Anterior midline of tibia. Leg moves medially across opposite shin for hip ER!",
        substitutions: "Pelvic elevation on measured side, contralateral trunk tilt."
      },
      citations: [
        { book: "Neumann (3rd Ed)", chapter: "Chapter 12: Hip", page: "p. 495, Table 12.3" },
        { book: "Daniels & Worthingham (10th Ed)", chapter: "Hip External Rotation", page: "pp. 200\u2013203" }
      ]
    },
    // ==========================================
    // KNEE JOINT
    // ==========================================
    knee_flexion: {
      id: "knee_flexion",
      region: "knee",
      jointName: "Knee Joint (Tibiofemoral & Patellofemoral)",
      motionName: "Flexion",
      plane: "Sagittal",
      axis: "Coronal Axis (through Femoral Condyles, Migrating Centrode)",
      normalMin: 0,
      normalMax: 135,
      unit: "degrees",
      referenceRangeText: "0\xB0 \u2013 135\xB0 (AAOS: 135\xB0, Neumann: up to 145\xB0 in full deep squat)",
      functionalRange: "60\xB0 (Level walking), 90\xB0 (Stair climbing), 105\xB0\u2013115\xB0 (Rising from chair), 130\xB0 (Deep squat)",
      hypermobilityThreshold: 150,
      impingementRiskThreshold: 160,
      sliderMin: 0,
      sliderMax: 150,
      endFeel: {
        type: "Soft (Soft tissue approximation) or Firm",
        description: "Contact between posterior calf musculature and hamstring/thigh mass; or Firm tension in anterior joint capsule, patellar retinacula, and quadriceps femoris.",
        abnormalEndFeel: "Springy block (meniscal bucket-handle tear) or Empty (acute ACL/PCL hemarthrosis)."
      },
      arthrokinematics: {
        type: "Bicondylar Modified Hinge",
        rule: "Open Chain: Concave Tibia rolls and slides posteriorly on Convex Femoral Condyles",
        description: 'In open kinetic chain (tibial-on-femoral): concave tibial condyles roll and slide posteriorly on the convex femoral condyles. In closed kinetic chain (femoral-on-tibial squat): convex femoral condyles roll posteriorly and slide anteriorly (Neumann p. 543, Fig 13.12). Popliteus contracts to "unlock" the knee by externally rotating femur relative to tibia.',
        closePacked: "Full extension with external rotation of tibia",
        loosePacked: "25\xB0 \u2013 30\xB0 flexion"
      },
      muscles: {
        primeMovers: [
          { name: "Biceps femoris (long and short heads)", innervation: "Sciatic Nerve (Tibial & Common Peroneal divisions, L5-S2)" },
          { name: "Semitendinosus", innervation: "Tibial Nerve (L5-S2)" },
          { name: "Semimembranosus", innervation: "Tibial Nerve (L5-S2)" }
        ],
        synergists: [
          { name: "Gastrocnemius", innervation: "Tibial Nerve (S1-S2)" },
          { name: "Popliteus (unlocks knee)", innervation: "Tibial Nerve (L4-S1)" },
          { name: "Gracilis & Sartorius", innervation: "Obturator N. & Femoral N." }
        ],
        antagonists: ["Quadriceps femoris (Rectus femoris, Vastus lateralis, medialis, intermedius)"]
      },
      goniometry: {
        position: "Supine (or prone), hip flexed to 90\xB0 or allowed to flex naturally to relieve rectus femoris passive tension.",
        fulcrum: "Lateral epicondyle of the femur.",
        stationaryArm: "Lateral midline of the femur (referencing greater trochanter).",
        movableArm: "Lateral midline of the fibula (referencing lateral malleolus and fibular head).",
        substitutions: "Hip abduction, pelvic rotation."
      },
      citations: [
        { book: "Neumann (3rd Ed)", chapter: "Chapter 13: Knee", page: "pp. 542\u2013548, Table 13.5" },
        { book: "Braddom's PM&R (7th Ed)", chapter: "Total Knee Arthroplasty Rehabilitation", page: "Ch. 4" },
        { book: "Daniels & Worthingham (10th Ed)", chapter: "Knee Flexion Testing", page: "pp. 214\u2013218" }
      ]
    },
    knee_extension: {
      id: "knee_extension",
      region: "knee",
      jointName: "Knee Joint (Tibiofemoral & Patellofemoral)",
      motionName: "Extension & Screw-Home Mechanism",
      plane: "Sagittal (with coupled transverse rotation)",
      axis: "Coronal Axis",
      normalMin: 0,
      normalMax: 0,
      unit: "degrees",
      referenceRangeText: "0\xB0 (AAOS: 0\xB0, Normal hyperextension / genu recurvatum up to 3\xB0\u20135\xB0)",
      functionalRange: "0\xB0 (Full extension essential for stable locked stance without quadriceps fatigue)",
      hypermobilityThreshold: -5,
      impingementRiskThreshold: -15,
      sliderMin: -10,
      sliderMax: 15,
      endFeel: {
        type: "Firm (Ligamentous / Capsular)",
        description: "Tension in posterior joint capsule, oblique popliteal ligament, arcuate ligament, ACL and PCL, and collateral ligaments.",
        abnormalEndFeel: "Hard (bony impingement in genu recurvatum) or Springy (locked meniscus)."
      },
      arthrokinematics: {
        type: 'Modified Hinge with "Screw-Home" Rotational Locking',
        rule: "Terminal 30\xB0 Extension: Tibia externally rotates ~10\xB0 on Femur",
        description: "During the final 30\xB0 of knee extension, the tibia automatically rotates externally approximately 10\xB0 relative to the femur (Neumann p. 546, Fig 13.14). Biomechanical drivers: (1) Medial femoral condyle articular curve is longer than lateral; (2) Passive tension in ACL; (3) Slight lateral pull of quadriceps. This mechanically locks the knee joint in full extension for upright standing with minimal muscular effort.",
        closePacked: "Full extension with tibial external rotation",
        loosePacked: "25\xB0 \u2013 30\xB0 flexion"
      },
      muscles: {
        primeMovers: [
          { name: "Rectus femoris", innervation: "Femoral Nerve (L2-L4)" },
          { name: "Vastus lateralis", innervation: "Femoral Nerve (L2-L4)" },
          { name: "Vastus medialis (including VMO fibers)", innervation: "Femoral Nerve (L2-L4)" },
          { name: "Vastus intermedius", innervation: "Femoral Nerve (L2-L4)" }
        ],
        synergists: ["Tensor fasciae latae (via iliotibial band stabilizing lateral knee)"],
        antagonists: ["Hamstrings", "Gastrocnemius", "Popliteus"]
      },
      goniometry: {
        position: "Supine, towel roll under calcaneus/ankle to permit full knee extension uninhibited by table contact.",
        fulcrum: "Lateral epicondyle of the femur.",
        stationaryArm: "Lateral midline of the femur (greater trochanter).",
        movableArm: "Lateral midline of the fibula (lateral malleolus).",
        substitutions: "Hip external rotation, pelvic elevation."
      },
      citations: [
        { book: "Neumann (3rd Ed)", chapter: "Chapter 13: Knee", page: "pp. 545\u2013549, Table 13.5 & Fig 13.14" },
        { book: "Braddom's PM&R (7th Ed)", chapter: "Gait Biomechanics: Stance Stability", page: "Ch. 5" },
        { book: "Daniels & Worthingham (10th Ed)", chapter: "Knee Extension Testing", page: "pp. 208\u2013213" }
      ]
    },
    // ==========================================
    // ANKLE & FOOT
    // ==========================================
    ankle_dorsiflexion: {
      id: "ankle_dorsiflexion",
      region: "ankle_foot",
      jointName: "Ankle Joint (Talocrural)",
      motionName: "Dorsiflexion",
      plane: "Sagittal",
      axis: "Oblique Trimalleolar Axis",
      normalMin: 0,
      normalMax: 20,
      unit: "degrees",
      referenceRangeText: "0\xB0 \u2013 20\xB0 (AAOS: 20\xB0 with knee flexed; ~10\xB0 with knee extended)",
      functionalRange: "10\xB0 (Essential for stance phase progression, stair descent, squatting)",
      hypermobilityThreshold: 25,
      impingementRiskThreshold: 35,
      sliderMin: 0,
      sliderMax: 30,
      endFeel: {
        type: "Firm (Ligamentous / Muscular)",
        description: "Tension in Achilles tendon (calcaneal tendon) / gastrocnemius-soleus complex, posterior talofibular ligament, and calcaneofibular ligament.",
        abnormalEndFeel: "Hard (anterior osseous ankle impingement: anterior tibial osteophyte hitting talar neck)."
      },
      arthrokinematics: {
        type: "Convex-on-Concave Mortise Joint",
        rule: "Convex Trochlea of Talus on Concave Tibiofibular Mortise",
        description: "Convex dome of the talus rolls anteriorly and slides posteriorly within the mortise (Neumann p. 608, Fig 14.16). Because the anterior talar dome is 2.5 mm wider than the posterior dome, dorsiflexion wedges the talus firmly into the mortise, spreading the malleoli and making dorsiflexion the close-packed position.",
        closePacked: "Full dorsiflexion",
        loosePacked: "10\xB0 plantarflexion, midway between inversion and eversion"
      },
      muscles: {
        primeMovers: [
          { name: "Tibialis anterior (primary dorsiflexor and inverter)", innervation: "Deep Peroneal (Fibular) Nerve (L4-S1)" },
          { name: "Extensor digitorum longus", innervation: "Deep Peroneal Nerve (L5-S1)" },
          { name: "Extensor hallucis longus", innervation: "Deep Peroneal Nerve (L5-S1)" },
          { name: "Peroneus (Fibularis) tertius", innervation: "Deep Peroneal Nerve (L5-S1)" }
        ],
        synergists: ["Peroneus longus/brevis (balance inversion)"],
        antagonists: ["Gastrocnemius", "Soleus", "Plantaris", "Tibialis posterior"]
      },
      goniometry: {
        position: "Seated with knee flexed to 90\xB0 over edge of table (relaxes gastrocnemius), ankle in 90\xB0 neutral.",
        fulcrum: "Lateral malleolus of the fibula.",
        stationaryArm: "Lateral midline of the fibula (referencing fibular head).",
        movableArm: "Parallel to the lateral aspect of the 5th metatarsal bone.",
        substitutions: "Knee extension, subtalar pronation/eversion (midfoot collapse break)."
      },
      citations: [
        { book: "Neumann (3rd Ed)", chapter: "Chapter 14: Ankle and Foot", page: "pp. 607\u2013612, Table 14.5" },
        { book: "Braddom's PM&R (7th Ed)", chapter: "Ankle & Foot Biomechanics & Orthotics", page: "Ch. 4" },
        { book: "Daniels & Worthingham (10th Ed)", chapter: "Ankle Dorsiflexion", page: "pp. 222\u2013225" }
      ]
    },
    ankle_plantarflexion: {
      id: "ankle_plantarflexion",
      region: "ankle_foot",
      jointName: "Ankle Joint (Talocrural)",
      motionName: "Plantarflexion",
      plane: "Sagittal",
      axis: "Oblique Trimalleolar Axis",
      normalMin: 0,
      normalMax: 50,
      unit: "degrees",
      referenceRangeText: "0\xB0 \u2013 50\xB0 (AAOS standard: 50\xB0)",
      functionalRange: "20\xB0 \u2013 25\xB0 (Essential for terminal stance push-off during walking & running)",
      hypermobilityThreshold: 60,
      impingementRiskThreshold: 70,
      sliderMin: 0,
      sliderMax: 60,
      endFeel: {
        type: "Firm (Ligamentous / Capsular) or Hard",
        description: "Tension in anterior talofibular ligament (ATFL), anterior capsule, and dorsiflexor muscles; or Hard contact of posterior talar process with posterior tibia (os trigonum impingement).",
        abnormalEndFeel: "Hard / Sharp pain in posterior ankle (os trigonum syndrome in ballet dancers)."
      },
      arthrokinematics: {
        type: "Convex-on-Concave Mortise Joint",
        rule: "Convex Talus on Concave Mortise",
        description: "Convex trochlea of talus rolls posteriorly and slides anteriorly within the mortise (Neumann p. 608). The narrower posterior talus enters the mortise, creating significant ligamentous laxity and making plantarflexion the most common position for inversion ankle sprains.",
        closePacked: "Full dorsiflexion",
        loosePacked: "10\xB0 plantarflexion"
      },
      muscles: {
        primeMovers: [
          { name: "Gastrocnemius (fast power push-off)", innervation: "Tibial Nerve (S1-S2)" },
          { name: "Soleus (tonic postural antigravity muscle)", innervation: "Tibial Nerve (S1-S2)" }
        ],
        synergists: [
          { name: "Tibialis posterior", innervation: "Tibial Nerve (L4-L5)" },
          { name: "Flexor hallucis longus & Flexor digitorum longus", innervation: "Tibial Nerve (L5-S2)" },
          { name: "Peroneus longus & brevis", innervation: "Superficial Peroneal Nerve (L5-S1)" }
        ],
        antagonists: ["Tibialis anterior", "Extensor digitorum longus", "EHL"]
      },
      goniometry: {
        position: "Prone with foot off edge of table, or seated with knee flexed 90\xB0.",
        fulcrum: "Lateral malleolus.",
        stationaryArm: "Lateral midline of the fibula.",
        movableArm: "Parallel to the lateral aspect of 5th metatarsal.",
        substitutions: "Knee flexion, toe curling."
      },
      citations: [
        { book: "Neumann (3rd Ed)", chapter: "Chapter 14: Ankle and Foot", page: "pp. 607\u2013612, Table 14.5" },
        { book: "Daniels & Worthingham (10th Ed)", chapter: "Ankle Plantarflexion Testing", page: "pp. 226\u2013231" }
      ]
    },
    subtalar_inversion: {
      id: "subtalar_inversion",
      region: "ankle_foot",
      jointName: "Subtalar (Talocalcaneal) Joint",
      motionName: "Subtalar Inversion (Isolated Hindfoot)",
      plane: "Frontal",
      axis: "Oblique Subtalar Axis (42\xB0 from horizontal, 16\xB0 from sagittal)",
      normalMin: 0,
      normalMax: 20,
      unit: "degrees",
      referenceRangeText: "0\xB0 \u2013 20\xB0 (AAOS: 20\xB0\u201322\xB0 isolated hindfoot tilt)",
      functionalRange: "15\xB0 (Walking across sloping ground, trail running)",
      hypermobilityThreshold: 28,
      impingementRiskThreshold: 35,
      sliderMin: 0,
      sliderMax: 30,
      endFeel: {
        type: "Firm (Ligamentous)",
        description: "Tension in calcaneofibular ligament, lateral talocalcaneal ligament, cervical ligament, and lateral peroneus muscle stretch.",
        abnormalEndFeel: "Empty (acute ATFL/CFL grade III ligament rupture)."
      },
      arthrokinematics: {
        type: "Isolated Calcaneal Frontal Gliding",
        rule: "Convex Calcaneus rolls medially and slides laterally on concave Talus",
        description: "Isolated subtalar motion: Calcaneus tilts into inversion (medially) relative to the talus in the frontal plane (~20\xB0). Midfoot joints remain in baseline alignment.",
        closePacked: "Full inversion",
        loosePacked: "Neutral"
      },
      muscles: {
        primeMovers: [
          { name: "Tibialis posterior (primary dynamic arch supporter)", innervation: "Tibial Nerve (L4-L5)" },
          { name: "Tibialis anterior", innervation: "Deep Peroneal Nerve (L4-L5)" }
        ],
        synergists: ["Flexor digitorum longus", "Flexor hallucis longus"],
        antagonists: ["Peroneus longus", "Peroneus brevis"]
      },
      goniometry: {
        position: "Prone with foot over end of table, hip and knee in neutral.",
        fulcrum: "Posterior aspect of ankle midway between the malleoli.",
        stationaryArm: "Posterior midline of the lower leg (calcaneal tendon line).",
        movableArm: "Posterior midline of the calcaneus.",
        substitutions: "Tibial internal rotation, hip internal rotation."
      },
      citations: [
        { book: "Neumann (3rd Ed)", chapter: "Chapter 14: Ankle and Foot", page: "pp. 613\u2013618, Table 14.5" },
        { book: "Daniels & Worthingham (10th Ed)", chapter: "Foot Inversion", page: "pp. 232\u2013235" }
      ]
    },
    subtalar_eversion: {
      id: "subtalar_eversion",
      region: "ankle_foot",
      jointName: "Subtalar (Talocalcaneal) Joint",
      motionName: "Subtalar Eversion (Isolated Hindfoot)",
      plane: "Frontal",
      axis: "Oblique Subtalar Axis",
      normalMin: 0,
      normalMax: 10,
      unit: "degrees",
      referenceRangeText: "0\xB0 \u2013 10\xB0 (AAOS: 10\xB0\u201312\xB0 isolated hindfoot tilt)",
      functionalRange: "8\xB0 \u2013 10\xB0 (Adapting to uneven surfaces)",
      hypermobilityThreshold: 16,
      impingementRiskThreshold: 22,
      sliderMin: 0,
      sliderMax: 20,
      endFeel: {
        type: "Hard (Bone block) or Firm",
        description: "Contact between lateral calcaneus and lateral malleolus, or tension in deltoid ligament.",
        abnormalEndFeel: "Hard / Painful (subtalar coalition)."
      },
      arthrokinematics: {
        type: "Isolated Calcaneal Frontal Gliding",
        rule: "Convex Calcaneus rolls laterally and slides medially on concave Talus",
        description: "Isolated subtalar motion: Calcaneus tilts into eversion (laterally) relative to the talus in the frontal plane (~10\xB0). Midfoot remains in baseline alignment.",
        closePacked: "Full inversion",
        loosePacked: "Neutral"
      },
      muscles: {
        primeMovers: [
          { name: "Peroneus (Fibularis) longus", innervation: "Superficial Peroneal Nerve (L5-S1)" },
          { name: "Peroneus (Fibularis) brevis", innervation: "Superficial Peroneal Nerve (L5-S1)" }
        ],
        synergists: ["Peroneus tertius", "Extensor digitorum longus"],
        antagonists: ["Tibialis posterior", "Tibialis anterior"]
      },
      goniometry: {
        position: "Prone, foot over end of table.",
        fulcrum: "Posterior aspect of ankle midway between malleoli.",
        stationaryArm: "Posterior midline of lower leg.",
        movableArm: "Posterior midline of calcaneus.",
        substitutions: "Hip external rotation, knee flexion."
      },
      citations: [
        { book: "Neumann (3rd Ed)", chapter: "Chapter 14: Ankle and Foot", page: "p. 614, Table 14.5" },
        { book: "Daniels & Worthingham (10th Ed)", chapter: "Foot Eversion Testing", page: "pp. 236\u2013239" }
      ]
    },
    subtalar_pronation: {
      id: "subtalar_pronation",
      region: "ankle_foot",
      jointName: "Subtalar & Transverse Tarsal (Midfoot) Complex",
      motionName: "Foot Pronation (Combined Subtalar + Midfoot Complex)",
      plane: "Triplanar",
      axis: "Oblique Subtalar Axis (42\xB0 from horizontal, 16\xB0 from sagittal)",
      normalMin: 0,
      normalMax: 20,
      unit: "degrees",
      referenceRangeText: "0\xB0 \u2013 20\xB0 (Subtalar ~10\xB0 + Midfoot TNCC ~10\xB0)",
      functionalRange: "12\xB0 \u2013 15\xB0 (Loading response in gait, shock absorption, ground contouring)",
      hypermobilityThreshold: 28,
      impingementRiskThreshold: 35,
      sliderMin: 0,
      sliderMax: 30,
      endFeel: {
        type: "Firm (Ligamentous) or Hard",
        description: "Tension in medial deltoid ligament (tibionavicular/tibiocalcaneal fibers) and contact between lateral calcaneus and fibular malleolus.",
        abnormalEndFeel: "Hard / Painful (tarsal coalition / calcaneonavicular bar)."
      },
      arthrokinematics: {
        type: "Triplanar Multi-Articular Gliding & Chopart Unlocking",
        rule: "NWB: Calcaneal Eversion + Abduction + Dorsiflexion | WB: Calcaneal Eversion + Talar Adduction/Plantarflexion + Tibial Internal Rotation",
        description: "TNCC Parallel Alignment (Neumann Ch. 14, pp. 614\u2013616, Fig 14.24): In pronation, the Talonavicular (TN) and Calcaneocuboid (CC) joint axes align PARALLEL to one another, unlocking the transverse tarsal joint into a flexible shock absorber. Combined motion roughly doubles isolated subtalar range! In closed kinetic chain, drives ~6\xB0\u201310\xB0 of coupled Tibial Internal Rotation.",
        closePacked: "Full Supination (inversion)",
        loosePacked: "Pronated / Neutral"
      },
      muscles: {
        primeMovers: [
          { name: "Peroneus (Fibularis) longus", innervation: "Superficial Peroneal Nerve (L5-S1)" },
          { name: "Peroneus (Fibularis) brevis", innervation: "Superficial Peroneal Nerve (L5-S1)" }
        ],
        synergists: ["Peroneus tertius", "Extensor digitorum longus"],
        antagonists: ["Tibialis posterior", "Tibialis anterior"]
      },
      goniometry: {
        position: "Prone with foot over end of table (NWB) or standing alignment (WB Fick angle / resting calcaneal stance angle).",
        fulcrum: "Posterior ankle midway between malleoli.",
        stationaryArm: "Posterior midline of lower leg.",
        movableArm: "Posterior midline of calcaneus.",
        substitutions: "Knee external rotation, hip internal rotation."
      },
      citations: [
        { book: "Neumann (3rd Ed)", chapter: "Chapter 14: Ankle and Foot", page: "pp. 614\u2013618, Fig 14.24 & Table 14.5" },
        { book: "Braddom's PM&R (7th Ed)", chapter: "Biomechanics of Gait: Stance Phase Subtalar Function", page: "Ch. 5" }
      ]
    },
    subtalar_supination: {
      id: "subtalar_supination",
      region: "ankle_foot",
      jointName: "Subtalar & Transverse Tarsal (Midfoot) Complex",
      motionName: "Foot Supination (Combined Subtalar + Midfoot Complex)",
      plane: "Triplanar",
      axis: "Oblique Subtalar Axis (42\xB0 from horizontal, 16\xB0 from sagittal)",
      normalMin: 0,
      normalMax: 35,
      unit: "degrees",
      referenceRangeText: "0\xB0 \u2013 35\xB0 (Subtalar ~20\xB0 + Midfoot TNCC ~15\xB0)",
      functionalRange: "25\xB0 \u2013 30\xB0 (Terminal stance push-off, rigid propulsion lever)",
      hypermobilityThreshold: 45,
      impingementRiskThreshold: 52,
      sliderMin: 0,
      sliderMax: 45,
      endFeel: {
        type: "Firm (Ligamentous)",
        description: "Tension in calcaneofibular ligament, lateral talocalcaneal ligament, cervical ligament, and lateral peroneus tendons.",
        abnormalEndFeel: "Empty (grade III lateral ankle ligament sprain)."
      },
      arthrokinematics: {
        type: "Triplanar Multi-Articular Gliding & Chopart Locking",
        rule: "NWB: Calcaneal Inversion + Adduction + Plantarflexion | WB: Calcaneal Inversion + Talar Abduction/Dorsiflexion + Tibial External Rotation",
        description: "TNCC Convergent Locking (Neumann Ch. 14, pp. 614\u2013616, Fig 14.24): In supination, the Talonavicular (TN) and Calcaneocuboid (CC) joint axes CONVERGE and CROSS each other, mechanically locking the midtarsal joints into a rigid propulsion lever for push-off. In closed kinetic chain, this drives ~6\xB0\u201310\xB0 of coupled Tibial External Rotation and knee extension stability!",
        closePacked: "Full Supination",
        loosePacked: "Midway between extremes"
      },
      muscles: {
        primeMovers: [
          { name: "Tibialis posterior (primary dynamic arch stabilizer)", innervation: "Tibial Nerve (L4-L5)" },
          { name: "Tibialis anterior", innervation: "Deep Peroneal Nerve (L4-L5)" }
        ],
        synergists: ["Flexor digitorum longus", "Flexor hallucis longus"],
        antagonists: ["Peroneus longus", "Peroneus brevis"]
      },
      goniometry: {
        position: "Prone with foot over end of examination table.",
        fulcrum: "Posterior ankle midway between malleoli.",
        stationaryArm: "Posterior midline of lower leg.",
        movableArm: "Posterior midline of calcaneus.",
        substitutions: "Hip external rotation compensation."
      },
      citations: [
        { book: "Neumann (3rd Ed)", chapter: "Chapter 14: Ankle and Foot", page: "pp. 614\u2013618, Fig 14.24 & Table 14.5" },
        { book: "Daniels & Worthingham (10th Ed)", chapter: "Foot Inversion Testing", page: "pp. 232\u2013235" }
      ]
    },
    first_mtp_extension: {
      id: "first_mtp_extension",
      region: "ankle_foot",
      jointName: "1st Metatarsophalangeal Joint (1st MTP)",
      motionName: "Great Toe Extension (Windlass)",
      plane: "Sagittal",
      axis: "Coronal Axis (through 1st Metatarsal Head)",
      normalMin: 0,
      normalMax: 70,
      unit: "degrees",
      referenceRangeText: "0\xB0 \u2013 70\xB0 (AAOS: 70\xB0\u201390\xB0 passively)",
      functionalRange: "60\xB0 \u2013 65\xB0 (Critical threshold for normal push-off in terminal stance gait)",
      hypermobilityThreshold: 85,
      impingementRiskThreshold: 95,
      sliderMin: 0,
      sliderMax: 90,
      endFeel: {
        type: "Firm (Ligamentous / Plantar Fascia)",
        description: "Tension in plantar plate, collateral ligaments, flexor hallucis brevis, and the plantar aponeurosis.",
        abnormalEndFeel: "Hard (Hallux rigidus - osteophytes on dorsal metatarsal head preventing push-off)."
      },
      arthrokinematics: {
        type: "Concave-on-Convex Condyloid Joint",
        rule: "Concave Phalanx rolls and slides dorsally on Convex Metatarsal Head",
        description: "The Windlass Mechanism (Hicks, 1954; Neumann p. 627, Fig 14.39): Extension of the 1st MTP winds the plantar aponeurosis around the metatarsal head, pulling the calcaneus forward, raising the medial longitudinal arch, and inverting the hindfoot into a rigid propulsion lever for gait push-off!",
        closePacked: "Full extension",
        loosePacked: "10\xB0 extension"
      },
      muscles: {
        primeMovers: [
          { name: "Extensor hallucis longus (EHL)", innervation: "Deep Peroneal Nerve (L5-S1)" },
          { name: "Extensor hallucis brevis (EHB)", innervation: "Deep Peroneal Nerve (S1-S2)" }
        ],
        synergists: ["Extensor digitorum longus"],
        antagonists: ["Flexor hallucis longus", "Flexor hallucis brevis"]
      },
      goniometry: {
        position: "Seated or supine, ankle in 90\xB0 neutral.",
        fulcrum: "Medial aspect of the 1st metatarsophalangeal joint.",
        stationaryArm: "Medial midline of 1st metatarsal bone.",
        movableArm: "Medial midline of proximal phalanx of great toe.",
        substitutions: "Ankle plantarflexion, interphalangeal joint flexion."
      },
      citations: [
        { book: "Neumann (3rd Ed)", chapter: "Chapter 14: Ankle and Foot", page: "pp. 625\u2013629, Fig 14.39 & Table 14.6" },
        { book: "Braddom's PM&R (7th Ed)", chapter: "Gait Biomechanics: Terminal Stance Windlass", page: "Ch. 5" },
        { book: "Daniels & Worthingham (10th Ed)", chapter: "Toe Extension Testing", page: "pp. 240\u2013243" }
      ]
    },
    first_mtp_flexion: {
      id: "first_mtp_flexion",
      region: "ankle_foot",
      jointName: "1st Metatarsophalangeal Joint (1st MTP)",
      motionName: "Great Toe Flexion",
      plane: "Sagittal",
      axis: "Coronal",
      normalMin: 0,
      normalMax: 45,
      unit: "degrees",
      referenceRangeText: "0\xB0 \u2013 45\xB0 (AAOS: 45\xB0)",
      functionalRange: "30\xB0 (Gripping ground during balance and barefoot ambulation)",
      hypermobilityThreshold: 55,
      impingementRiskThreshold: 65,
      sliderMin: 0,
      sliderMax: 50,
      endFeel: {
        type: "Firm (Ligamentous)",
        description: "Tension in dorsal capsule and collateral ligaments.",
        abnormalEndFeel: "Hard (arthrosis)."
      },
      arthrokinematics: {
        type: "Concave-on-Convex",
        rule: "Phalanx rolls and slides plantarly on metatarsal head",
        description: "Concave base of proximal phalanx rolls and slides plantarly across convex metatarsal head.",
        closePacked: "Full extension",
        loosePacked: "10\xB0 extension"
      },
      muscles: {
        primeMovers: [
          { name: "Flexor hallucis brevis", innervation: "Medial Plantar Nerve (S1-S2)" },
          { name: "Flexor hallucis longus (FHL)", innervation: "Tibial Nerve (S1-S2)" }
        ],
        synergists: ["Abductor hallucis", "Adductor hallucis"],
        antagonists: ["Extensor hallucis longus", "EHB"]
      },
      goniometry: {
        position: "Supine or seated, ankle neutral.",
        fulcrum: "Dorsal / medial aspect of 1st MTP.",
        stationaryArm: "Dorsal midline of 1st metatarsal.",
        movableArm: "Dorsal midline of proximal phalanx.",
        substitutions: "Ankle dorsiflexion."
      },
      citations: [
        { book: "Neumann (3rd Ed)", chapter: "Chapter 14: Ankle and Foot", page: "p. 627, Table 14.6" },
        { book: "Daniels & Worthingham (10th Ed)", chapter: "Toe Flexion Testing", page: "p. 244" }
      ]
    }
  };
  var PATHOLOGY_PRESETS = [
    {
      id: "normal",
      name: "Normal Physiological Mobility",
      description: "Full unhindered textbook range of motion across all planes."
    },
    {
      id: "adhesive_capsulitis",
      name: "Adhesive Capsulitis (Frozen Shoulder)",
      primaryJointId: "shoulder_abduction",
      description: "Classic Cyriax Capsular Pattern: Severe limitation in ER > Abduction > IR due to contracture of axillary pouch, coracohumeral ligament (CHL), and rotator interval fibrosis.",
      restrictions: {
        shoulder_abduction: {
          max: 65,
          targetDegrees: 65,
          label: "Frozen Shoulder (Abduction: 65\xB0 Max)",
          explanation: "\u0E1E\u0E31\u0E07\u0E1C\u0E37\u0E14\u0E2B\u0E14\u0E23\u0E31\u0E49\u0E07\u0E02\u0E2D\u0E07 Inferior Capsule (Axillary Pouch) \u0E02\u0E31\u0E14\u0E02\u0E27\u0E32\u0E07\u0E01\u0E32\u0E23\u0E40\u0E25\u0E37\u0E48\u0E2D\u0E19\u0E15\u0E31\u0E27\u0E25\u0E07 (Inferior Slide) \u0E02\u0E2D\u0E07\u0E2B\u0E31\u0E27 Humerus \u0E17\u0E33\u0E43\u0E2B\u0E49\u0E41\u0E02\u0E19\u0E01\u0E32\u0E07\u0E15\u0E34\u0E14\u0E25\u0E47\u0E2D\u0E01\u0E17\u0E35\u0E48 ~65\xB0 \u0E17\u0E31\u0E19\u0E17\u0E35!"
        },
        shoulder_external_rotation: {
          max: 20,
          targetDegrees: 20,
          label: "Frozen Shoulder (External Rotation: 20\xB0 Max)",
          explanation: "Coracohumeral Ligament \u0E41\u0E25\u0E30 Rotator Interval \u0E1E\u0E31\u0E07\u0E1C\u0E37\u0E14\u0E2B\u0E14\u0E23\u0E31\u0E49\u0E07\u0E23\u0E38\u0E19\u0E41\u0E23\u0E07\u0E17\u0E35\u0E48\u0E2A\u0E38\u0E14\u0E15\u0E32\u0E21 Capsular Pattern \u0E08\u0E33\u0E01\u0E31\u0E14\u0E01\u0E32\u0E23\u0E2B\u0E21\u0E38\u0E19\u0E2D\u0E2D\u0E01\u0E44\u0E21\u0E48\u0E40\u0E01\u0E34\u0E19 20\xB0 (\u0E1B\u0E01\u0E15\u0E34 90\xB0)"
        },
        shoulder_flexion: {
          max: 80,
          targetDegrees: 80,
          label: "Frozen Shoulder (Flexion: 80\xB0 Max)",
          explanation: "Anterior Capsule \u0E41\u0E25\u0E30 Axillary Pouch \u0E15\u0E34\u0E14\u0E25\u0E47\u0E2D\u0E01 \u0E2B\u0E22\u0E38\u0E14\u0E01\u0E32\u0E23\u0E22\u0E01\u0E41\u0E02\u0E19\u0E44\u0E1B\u0E02\u0E49\u0E32\u0E07\u0E2B\u0E19\u0E49\u0E32\u0E44\u0E27\u0E49\u0E17\u0E35\u0E48 ~80\xB0"
        },
        shoulder_internal_rotation: {
          max: 35,
          targetDegrees: 35,
          label: "Frozen Shoulder (Internal Rotation: 35\xB0 Max)",
          explanation: "Posterior Capsule \u0E1E\u0E31\u0E07\u0E1C\u0E37\u0E14\u0E15\u0E36\u0E07\u0E23\u0E31\u0E49\u0E07 \u0E08\u0E33\u0E01\u0E31\u0E14\u0E01\u0E32\u0E23\u0E40\u0E2D\u0E37\u0E49\u0E2D\u0E21\u0E21\u0E37\u0E2D\u0E44\u0E1B\u0E14\u0E49\u0E32\u0E19\u0E2B\u0E25\u0E31\u0E07"
        }
      }
    },
    {
      id: "subacromial_impingement",
      name: "Subacromial Impingement Syndrome",
      primaryJointId: "shoulder_abduction",
      description: "Painful Arc between 60\xB0 and 120\xB0 of abduction caused by supraspinatus tendon & subacromial bursa compression.",
      restrictions: {
        shoulder_abduction: {
          max: 120,
          targetDegrees: 90,
          label: "Impingement Painful Arc (60\xB0\u2013120\xB0)",
          explanation: "\u0E40\u0E2A\u0E49\u0E19\u0E40\u0E2D\u0E47\u0E19 Supraspinatus \u0E41\u0E25\u0E30\u0E16\u0E38\u0E07 Bursa \u0E16\u0E39\u0E01\u0E40\u0E1E\u0E14\u0E32\u0E19 Acromion \u0E01\u0E14\u0E40\u0E1A\u0E35\u0E22\u0E14\u0E23\u0E38\u0E19\u0E41\u0E23\u0E07\u0E43\u0E19\u0E0A\u0E48\u0E27\u0E07 60\xB0\u2013120\xB0 \u0E17\u0E33\u0E43\u0E2B\u0E49\u0E40\u0E08\u0E47\u0E1A\u0E02\u0E31\u0E14\u0E41\u0E25\u0E30\u0E0A\u0E30\u0E07\u0E31\u0E01\u0E01\u0E32\u0E23\u0E22\u0E01\u0E41\u0E02\u0E19"
        }
      }
    },
    {
      id: "knee_flexion_contracture",
      name: "Knee Flexion Contracture (Post-Op/Stroke)",
      primaryJointId: "knee_extension",
      description: "Inability to achieve terminal 0\xB0 extension due to posterior capsular tightening and hamstring spasticity.",
      restrictions: {
        knee_extension: {
          min: 15,
          max: 15,
          targetDegrees: 15,
          label: "Knee Contracture (Lacks 15\xB0 Extension)",
          explanation: "\u0E1C\u0E39\u0E49\u0E1B\u0E48\u0E27\u0E22\u0E02\u0E32\u0E14\u0E01\u0E32\u0E23\u0E40\u0E2B\u0E22\u0E35\u0E22\u0E14\u0E40\u0E02\u0E48\u0E32\u0E2A\u0E38\u0E14 15\xB0 (Terminal extension deficit) \u0E08\u0E32\u0E01 posterior capsule \u0E41\u0E25\u0E30 hamstrings \u0E2B\u0E14\u0E40\u0E01\u0E23\u0E47\u0E07"
        }
      }
    },
    {
      id: "hallux_rigidus",
      name: "Hallux Rigidus (1st MTP Arthrosis)",
      primaryJointId: "first_mtp_extension",
      description: "Severe loss of great toe extension (<30\xB0) leading to apropulsive gait and compensatory lateral foot rolling.",
      restrictions: {
        first_mtp_extension: {
          max: 25,
          targetDegrees: 25,
          label: "Hallux Rigidus (25\xB0 Max)",
          explanation: "\u0E01\u0E23\u0E30\u0E14\u0E39\u0E01\u0E07\u0E2D\u0E01 Dorsal Osteophyte \u0E17\u0E35\u0E48\u0E2B\u0E31\u0E27\u0E01\u0E23\u0E30\u0E14\u0E39\u0E01 Metatarsal \u0E02\u0E31\u0E14\u0E02\u0E27\u0E32\u0E07\u0E01\u0E32\u0E23\u0E01\u0E23\u0E30\u0E14\u0E01\u0E19\u0E34\u0E49\u0E27\u0E42\u0E1B\u0E49\u0E07\u0E40\u0E17\u0E49\u0E32 \u0E44\u0E21\u0E48\u0E2A\u0E32\u0E21\u0E32\u0E23\u0E16\u0E40\u0E14\u0E34\u0E19\u0E25\u0E07\u0E19\u0E49\u0E33\u0E2B\u0E19\u0E31\u0E01\u0E41\u0E1A\u0E1A\u0E1B\u0E01\u0E15\u0E34\u0E44\u0E14\u0E49"
        }
      }
    },
    {
      id: "wrist_drop",
      name: "Radial Nerve Palsy (Wrist Drop)",
      primaryJointId: "wrist_extension",
      description: "Flaccid paralysis of wrist and finger extensors resulting in inability to extend wrist against gravity.",
      restrictions: {
        wrist_extension: {
          max: 0,
          targetDegrees: 0,
          label: "Radial Nerve Palsy (Wrist Drop 0\xB0)",
          explanation: "\u0E40\u0E2A\u0E49\u0E19\u0E1B\u0E23\u0E30\u0E2A\u0E32\u0E17 Radial \u0E1A\u0E32\u0E14\u0E40\u0E08\u0E47\u0E1A \u0E2D\u0E31\u0E21\u0E1E\u0E32\u0E15\u0E01\u0E25\u0E49\u0E32\u0E21\u0E40\u0E19\u0E37\u0E49\u0E2D\u0E40\u0E2B\u0E22\u0E35\u0E22\u0E14\u0E02\u0E49\u0E2D\u0E21\u0E37\u0E2D \u0E44\u0E21\u0E48\u0E2A\u0E32\u0E21\u0E32\u0E23\u0E16\u0E01\u0E23\u0E30\u0E14\u0E01\u0E02\u0E49\u0E2D\u0E21\u0E37\u0E2D\u0E15\u0E49\u0E32\u0E19\u0E41\u0E23\u0E07\u0E42\u0E19\u0E49\u0E21\u0E16\u0E48\u0E27\u0E07\u0E44\u0E14\u0E49\u0E40\u0E25\u0E22 (0\xB0)"
        }
      }
    },
    {
      id: "c6_tetraplegia_tenodesis",
      name: "C6 Tetraplegia (Tenodesis Grasp Candidate)",
      primaryJointId: "wrist_extension",
      description: "Intact wrist extensors (ECRL/ECRB, C6) allow active wrist extension to induce functional passive finger flexion via Tenodesis action.",
      restrictions: {
        wrist_extension: {
          max: 45,
          targetDegrees: 35,
          label: "Tenodesis Functional Grasp Zone (30\xB0\u201340\xB0 Extension)",
          explanation: "\u0E1C\u0E39\u0E49\u0E1B\u0E48\u0E27\u0E22\u0E2D\u0E31\u0E21\u0E1E\u0E32\u0E15\u0E23\u0E30\u0E14\u0E31\u0E1A C6 \u0E43\u0E0A\u0E49\u0E01\u0E25\u0E49\u0E32\u0E21\u0E40\u0E19\u0E37\u0E49\u0E2D\u0E40\u0E2B\u0E22\u0E35\u0E22\u0E14\u0E02\u0E49\u0E2D\u0E21\u0E37\u0E2D (ECRL/ECRB) \u0E01\u0E23\u0E30\u0E14\u0E01\u0E02\u0E49\u0E2D\u0E21\u0E37\u0E2D 35\xB0 \u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E14\u0E36\u0E07\u0E40\u0E2A\u0E49\u0E19\u0E40\u0E2D\u0E47\u0E19\u0E19\u0E34\u0E49\u0E27\u0E21\u0E37\u0E2D\u0E43\u0E2B\u0E49\u0E07\u0E2D\u0E08\u0E31\u0E1A\u0E2A\u0E34\u0E48\u0E07\u0E02\u0E2D\u0E07\u0E2D\u0E31\u0E15\u0E42\u0E19\u0E21\u0E31\u0E15\u0E34 (Tenodesis Grasp)"
        }
      }
    },
    {
      id: "pes_planus",
      name: "Severe Pes Planus / Posterior Tibial Dysfunction",
      primaryJointId: "subtalar_pronation",
      description: "Loss of medial longitudinal arch with excessive subtalar eversion, unlocked TNCC, and compensatory internal tibial torsion.",
      restrictions: {
        subtalar_supination: {
          max: 8,
          targetDegrees: 5,
          label: "Rigid Flatfoot (Locked in Pronation, Lacks Supination)",
          explanation: "\u0E40\u0E2D\u0E47\u0E19 Tibialis Posterior \u0E40\u0E2A\u0E37\u0E48\u0E2D\u0E21\u0E2A\u0E20\u0E32\u0E1E \u0E2D\u0E38\u0E49\u0E07\u0E40\u0E17\u0E49\u0E32\u0E41\u0E1A\u0E19\u0E22\u0E38\u0E1A \u0E40\u0E17\u0E49\u0E32\u0E25\u0E47\u0E2D\u0E01\u0E04\u0E49\u0E32\u0E07\u0E2D\u0E22\u0E39\u0E48\u0E43\u0E19\u0E17\u0E48\u0E32 Pronation \u0E44\u0E21\u0E48\u0E2A\u0E32\u0E21\u0E32\u0E23\u0E16 Supinate \u0E40\u0E1B\u0E47\u0E19\u0E04\u0E32\u0E19\u0E41\u0E02\u0E47\u0E07\u0E14\u0E35\u0E14\u0E15\u0E31\u0E27\u0E44\u0E14\u0E49"
        }
      }
    }
  ];

  // js/simulation/scene.js
  var THREE = window.THREE;
  var OrbitControls = window.THREE && window.THREE.OrbitControls || window.OrbitControls;
  var SimulationScene = class {
    constructor(containerElement) {
      this.container = containerElement;
      this.scene = null;
      this.camera = null;
      this.renderer = null;
      this.controls = null;
      this.grid = null;
      this.animId = null;
      this.currentCameraPreset = "front";
      this.onUpdateCallbacks = [];
      this.init();
    }
    init() {
      const THREE6 = window.THREE;
      const width = this.container.clientWidth || 800;
      const height = this.container.clientHeight || 600;
      this.scene = new THREE6.Scene();
      this.scene.background = new THREE6.Color(396314);
      this.scene.fog = new THREE6.FogExp2(396314, 0.025);
      this.camera = new THREE6.PerspectiveCamera(45, width / height, 0.1, 100);
      this.camera.position.set(0, 1.4, 3.8);
      this.renderer = new THREE6.WebGLRenderer({ antialias: true, alpha: false });
      this.renderer.setSize(width, height);
      this.renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
      this.renderer.shadowMap.enabled = true;
      this.renderer.shadowMap.type = THREE6.PCFSoftShadowMap;
      this.renderer.toneMapping = THREE6.ACESFilmicToneMapping;
      this.renderer.toneMappingExposure = 1.1;
      this.container.appendChild(this.renderer.domElement);
      const OrbitControlsClass = THREE6 && THREE6.OrbitControls || window.OrbitControls;
      if (OrbitControlsClass) {
        this.controls = new OrbitControlsClass(this.camera, this.renderer.domElement);
        this.controls.enableDamping = true;
        this.controls.dampingFactor = 0.05;
        this.controls.target.set(0, 1.1, 0);
        this.controls.maxPolarAngle = Math.PI / 2 + 0.1;
        this.controls.minDistance = 0.6;
        this.controls.maxDistance = 6;
      }
      this.setupLighting();
      this.setupFloor();
      window.addEventListener("resize", () => this.onWindowResize());
      this.animate = this.animate.bind(this);
      this.animate();
    }
    setupLighting() {
      const ambientLight = new THREE.AmbientLight(2964058, 1.2);
      this.scene.add(ambientLight);
      const keyLight = new THREE.DirectionalLight(14743546, 1.6);
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
      keyLight.shadow.bias = -1e-3;
      this.scene.add(keyLight);
      const fillLight = new THREE.DirectionalLight(1096065, 0.6);
      fillLight.position.set(-3, 2, -2);
      this.scene.add(fillLight);
      const rimLight = new THREE.DirectionalLight(440020, 1);
      rimLight.position.set(0, 3, -3);
      this.scene.add(rimLight);
    }
    setupFloor() {
      const gridHelper = new THREE.GridHelper(10, 30, 1357990, 1976635);
      gridHelper.position.y = 0;
      this.scene.add(gridHelper);
      const floorGeo = new THREE.PlaneGeometry(14, 14);
      const floorMat = new THREE.MeshStandardMaterial({
        color: 462366,
        roughness: 0.85,
        metalness: 0.2
      });
      const floor = new THREE.Mesh(floorGeo, floorMat);
      floor.rotation.x = -Math.PI / 2;
      floor.position.y = -5e-3;
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
        case "front":
          targetPos.set(0, 1.3, 3.2);
          newTarget.set(0, 1.1, 0);
          break;
        case "lateral_right":
          targetPos.set(3.2, 1.3, 0);
          newTarget.set(0, 1.1, 0);
          break;
        case "lateral_left":
          targetPos.set(-3.2, 1.3, 0);
          newTarget.set(0, 1.1, 0);
          break;
        case "posterior":
          targetPos.set(0, 1.3, -3.2);
          newTarget.set(0, 1.1, 0);
          break;
        case "superior":
          targetPos.set(0, 3.5, 0.5);
          newTarget.set(0, 1.1, 0);
          break;
        case "joint_focus":
          if (targetJointPos) {
            const isFoot = targetJointPos.y < 0.35;
            const isHand = targetJointPos.y < 1.25 && targetJointPos.x > 0.12;
            const offset = isFoot || isHand ? new THREE.Vector3(0.2, 0.1, 0.42) : new THREE.Vector3(0.5, 0.2, 1.1);
            targetPos.copy(targetJointPos).add(offset);
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
      const tweenCamera = (time) => {
        const elapsed = time - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const ease = 0.5 - Math.cos(progress * Math.PI) / 2;
        this.camera.position.lerpVectors(startPos, targetPos, ease);
        this.controls.target.lerpVectors(startTarget, newTarget, ease);
        if (progress < 1) {
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
      window.removeEventListener("resize", this.onWindowResize);
      if (this.renderer && this.renderer.domElement) {
        this.container.removeChild(this.renderer.domElement);
      }
    }
  };

  // js/simulation/skeletonModel.js
  var THREE2 = window.THREE;
  var SkeletonModel = class {
    constructor(scene) {
      this.scene = scene;
      this.root = new THREE2.Group();
      this.joints = {};
      this.bones = {};
      this.meshes = {};
      this.activeHighlightMesh = null;
      this.boneMaterial = new THREE2.MeshStandardMaterial({
        color: 14870768,
        roughness: 0.35,
        metalness: 0.1
      });
      this.jointHighlightMaterial = new THREE2.MeshStandardMaterial({
        color: 1357990,
        // Teal
        emissive: 889992,
        emissiveIntensity: 0.6,
        roughness: 0.2,
        metalness: 0.3,
        transparent: true,
        opacity: 0.85
      });
      this.cartilageMaterial = new THREE2.MeshStandardMaterial({
        color: 3718648,
        // Sky blue
        roughness: 0.4,
        metalness: 0.1,
        transparent: true,
        opacity: 0.6
      });
      this.buildSkeleton();
      this.scene.add(this.root);
    }
    createCylinderBone(radiusTop, radiusBottom, height, color = null) {
      const geo = new THREE2.CylinderGeometry(radiusTop, radiusBottom, height, 16);
      geo.translate(0, -height / 2, 0);
      const mat = color ? this.boneMaterial.clone() : this.boneMaterial;
      if (color) mat.color.setHex(color);
      const mesh = new THREE2.Mesh(geo, mat);
      mesh.castShadow = true;
      mesh.receiveShadow = true;
      return mesh;
    }
    createJointSphere(radius, isHighlighted = false) {
      const geo = new THREE2.SphereGeometry(radius, 16, 16);
      const mat = isHighlighted ? this.jointHighlightMaterial : this.boneMaterial;
      const mesh = new THREE2.Mesh(geo, mat);
      mesh.castShadow = true;
      mesh.receiveShadow = true;
      return mesh;
    }
    buildSkeleton() {
      const pelvisGroup = new THREE2.Group();
      pelvisGroup.position.set(0, 0.98, 0);
      this.root.add(pelvisGroup);
      this.joints["pelvis"] = pelvisGroup;
      const iliumGeo = new THREE2.TorusGeometry(0.16, 0.045, 12, 24, Math.PI);
      const iliumMesh = new THREE2.Mesh(iliumGeo, this.boneMaterial);
      iliumMesh.rotation.x = Math.PI / 2;
      iliumMesh.position.set(0, 0, 0);
      pelvisGroup.add(iliumMesh);
      const sacrumGeo = new THREE2.ConeGeometry(0.06, 0.12, 12);
      const sacrumMesh = new THREE2.Mesh(sacrumGeo, this.boneMaterial);
      sacrumMesh.rotation.x = Math.PI;
      sacrumMesh.position.set(0, -0.04, -0.04);
      pelvisGroup.add(sacrumMesh);
      const lumbarGroup = new THREE2.Group();
      lumbarGroup.position.set(0, 0.05, 0);
      pelvisGroup.add(lumbarGroup);
      this.joints["lumbar"] = lumbarGroup;
      const lumbarMesh = this.createCylinderBone(0.045, 0.05, 0.16);
      lumbarMesh.position.set(0, 0.16, 0);
      lumbarGroup.add(lumbarMesh);
      const thoracicGroup = new THREE2.Group();
      thoracicGroup.position.set(0, 0.16, 0);
      lumbarGroup.add(thoracicGroup);
      this.joints["thoracic"] = thoracicGroup;
      const thoracicMesh = this.createCylinderBone(0.04, 0.045, 0.28);
      thoracicMesh.position.set(0, 0.28, 0);
      thoracicGroup.add(thoracicMesh);
      const ribcageGeo = new THREE2.SphereGeometry(0.18, 16, 12);
      ribcageGeo.scale(1.1, 1.4, 0.85);
      const ribcageMat = new THREE2.MeshStandardMaterial({
        color: 9741240,
        wireframe: true,
        transparent: true,
        opacity: 0.45
      });
      const ribcageMesh = new THREE2.Mesh(ribcageGeo, ribcageMat);
      ribcageMesh.position.set(0, 0.16, 0.01);
      thoracicGroup.add(ribcageMesh);
      const sternumGeo = new THREE2.BoxGeometry(0.045, 0.16, 0.02);
      const sternumMesh = new THREE2.Mesh(sternumGeo, this.boneMaterial);
      sternumMesh.position.set(0, 0.17, 0.14);
      thoracicGroup.add(sternumMesh);
      const cervicalGroup = new THREE2.Group();
      cervicalGroup.position.set(0, 0.28, 0);
      thoracicGroup.add(cervicalGroup);
      this.joints["cervical"] = cervicalGroup;
      const cervicalMesh = this.createCylinderBone(0.03, 0.035, 0.13);
      cervicalMesh.position.set(0, 0.13, 0);
      cervicalGroup.add(cervicalMesh);
      const headGroup = new THREE2.Group();
      headGroup.position.set(0, 0.13, 0);
      cervicalGroup.add(headGroup);
      this.joints["head"] = headGroup;
      const skullGeo = new THREE2.SphereGeometry(0.115, 20, 20);
      skullGeo.scale(0.9, 1.08, 1.05);
      const skullMesh = new THREE2.Mesh(skullGeo, this.boneMaterial);
      skullMesh.position.set(0, 0.11, 0.01);
      headGroup.add(skullMesh);
      const maxillaGeo = new THREE2.BoxGeometry(0.08, 0.065, 0.07);
      const maxillaMesh = new THREE2.Mesh(maxillaGeo, this.boneMaterial);
      maxillaMesh.position.set(0, 0.06, 0.075);
      headGroup.add(maxillaMesh);
      const tmjGroup = new THREE2.Group();
      tmjGroup.position.set(0, 0.05, 0.035);
      headGroup.add(tmjGroup);
      this.joints["tmj"] = tmjGroup;
      const mandibleGeo = new THREE2.BoxGeometry(0.075, 0.04, 0.07);
      const mandibleMesh = new THREE2.Mesh(mandibleGeo, this.boneMaterial);
      mandibleMesh.position.set(0, -0.03, 0.03);
      tmjGroup.add(mandibleMesh);
      const rClavicleGroup = new THREE2.Group();
      rClavicleGroup.position.set(0.04, 0.26, 0.04);
      thoracicGroup.add(rClavicleGroup);
      this.joints["r_clavicle"] = rClavicleGroup;
      const rClavicleMesh = this.createCylinderBone(0.015, 0.015, 0.15);
      rClavicleMesh.rotation.z = -Math.PI / 2 + 0.1;
      rClavicleMesh.position.set(0, 0, 0);
      rClavicleGroup.add(rClavicleMesh);
      const rScapulaGroup = new THREE2.Group();
      rScapulaGroup.position.set(0.15, 0, -0.06);
      rClavicleGroup.add(rScapulaGroup);
      this.joints["r_scapula"] = rScapulaGroup;
      const scapulaGeo = new THREE2.BufferGeometry();
      const scapulaVerts = new Float32Array([
        // Anterior Surface (Costal Fossa)
        0.025,
        0.01,
        0.015,
        -0.075,
        0.02,
        -8e-3,
        -0.045,
        -0.115,
        5e-3,
        0.025,
        0.01,
        0.015,
        -0.045,
        -0.115,
        5e-3,
        0.01,
        -0.04,
        0.015,
        // Posterior Surface (Infraspinous / Supraspinous)
        0.025,
        0.01,
        8e-3,
        -0.045,
        -0.115,
        -2e-3,
        -0.075,
        0.02,
        -0.015,
        0.025,
        0.01,
        8e-3,
        0.01,
        -0.04,
        8e-3,
        -0.045,
        -0.115,
        -2e-3,
        // Medial Border Wall
        -0.075,
        0.02,
        -8e-3,
        -0.075,
        0.02,
        -0.015,
        -0.045,
        -0.115,
        -2e-3,
        -0.075,
        0.02,
        -8e-3,
        -0.045,
        -0.115,
        -2e-3,
        -0.045,
        -0.115,
        5e-3
      ]);
      scapulaGeo.setAttribute("position", new THREE2.BufferAttribute(scapulaVerts, 3));
      scapulaGeo.computeVertexNormals();
      const scapulaMesh = new THREE2.Mesh(scapulaGeo, this.boneMaterial);
      rScapulaGroup.add(scapulaMesh);
      this.meshes["r_scapula_blade"] = scapulaMesh;
      const rSpineGeo = new THREE2.BoxGeometry(0.09, 0.012, 0.014);
      const rSpineMesh = new THREE2.Mesh(rSpineGeo, this.boneMaterial);
      rSpineMesh.position.set(-0.035, 0.015, -0.012);
      rSpineMesh.rotation.set(0, 0, 0.12);
      rScapulaGroup.add(rSpineMesh);
      const rAcromionGeo = new THREE2.BoxGeometry(0.042, 0.014, 0.046);
      const rAcromionMesh = new THREE2.Mesh(rAcromionGeo, this.boneMaterial);
      rAcromionMesh.position.set(0.035, 0.036, 0.02);
      rScapulaGroup.add(rAcromionMesh);
      this.meshes["r_acromion"] = rAcromionMesh;
      const rCoracoidGeo = new THREE2.BoxGeometry(0.014, 0.014, 0.038);
      const rCoracoidMesh = new THREE2.Mesh(rCoracoidGeo, this.boneMaterial);
      rCoracoidMesh.position.set(0.012, 0.018, 0.048);
      rScapulaGroup.add(rCoracoidMesh);
      const bursaGeo = new THREE2.CylinderGeometry(0.034, 0.034, 8e-3, 16);
      bursaGeo.rotateX(Math.PI / 2);
      const bursaMat = new THREE2.MeshStandardMaterial({
        color: 1096065,
        emissive: 366185,
        emissiveIntensity: 0.35,
        transparent: true,
        opacity: 0.65
      });
      const rBursaMesh = new THREE2.Mesh(bursaGeo, bursaMat);
      rBursaMesh.position.set(0.035, 0.018, 0.02);
      rScapulaGroup.add(rBursaMesh);
      this.meshes["r_subacromial_bursa"] = rBursaMesh;
      const glenoidMesh = this.createJointSphere(0.032, false);
      glenoidMesh.position.set(0.03, -0.01, 0.03);
      rScapulaGroup.add(glenoidMesh);
      const rShoulderGroup = new THREE2.Group();
      rShoulderGroup.position.set(0.03, -0.01, 0.03);
      rScapulaGroup.add(rShoulderGroup);
      this.joints["r_shoulder"] = rShoulderGroup;
      const rHumeralHead = this.createJointSphere(0.042, true);
      rShoulderGroup.add(rHumeralHead);
      const rHumerusMesh = this.createCylinderBone(0.03, 0.026, 0.32);
      rShoulderGroup.add(rHumerusMesh);
      const rElbowGroup = new THREE2.Group();
      rElbowGroup.position.set(0, -0.32, 0);
      rShoulderGroup.add(rElbowGroup);
      this.joints["r_elbow"] = rElbowGroup;
      const rElbowJointMesh = this.createJointSphere(0.035, true);
      rElbowGroup.add(rElbowJointMesh);
      const rForearmPronationGroup = new THREE2.Group();
      rElbowGroup.add(rForearmPronationGroup);
      this.joints["r_forearm"] = rForearmPronationGroup;
      const rUlnaMesh = this.createCylinderBone(0.018, 0.015, 0.27);
      rUlnaMesh.position.set(-0.014, 0, 0);
      rForearmPronationGroup.add(rUlnaMesh);
      const rRadiusGroup = new THREE2.Group();
      rRadiusGroup.position.set(0.016, 0, 0);
      rForearmPronationGroup.add(rRadiusGroup);
      this.joints["r_radius"] = rRadiusGroup;
      const rRadiusMesh = this.createCylinderBone(0.018, 0.022, 0.27);
      rRadiusGroup.add(rRadiusMesh);
      const rWristGroup = new THREE2.Group();
      rWristGroup.position.set(0, -0.27, 0);
      rForearmPronationGroup.add(rWristGroup);
      this.joints["r_wrist"] = rWristGroup;
      const rWristJointMesh = this.createJointSphere(0.028, true);
      rWristGroup.add(rWristJointMesh);
      const rHandGroup = new THREE2.Group();
      rWristGroup.add(rHandGroup);
      this.joints["r_hand"] = rHandGroup;
      const rCarpusMesh = new THREE2.Mesh(new THREE2.BoxGeometry(0.058, 0.035, 0.024), this.boneMaterial);
      rCarpusMesh.position.set(0, -0.018, 0);
      rHandGroup.add(rCarpusMesh);
      const rPalmMesh = new THREE2.Mesh(new THREE2.BoxGeometry(0.062, 0.055, 0.02), this.boneMaterial);
      rPalmMesh.position.set(-5e-3, -0.055, 0);
      rHandGroup.add(rPalmMesh);
      const rTrapeziumMesh = new THREE2.Mesh(new THREE2.BoxGeometry(0.02, 0.018, 0.02), this.boneMaterial);
      rTrapeziumMesh.position.set(0.032, -0.022, 5e-3);
      rHandGroup.add(rTrapeziumMesh);
      this.meshes["r_trapezium"] = rTrapeziumMesh;
      const rThumbCmcGroup = new THREE2.Group();
      rThumbCmcGroup.position.set(0.034, -0.026, 8e-3);
      rThumbCmcGroup.rotation.set(0.2, 0.15, -0.45);
      rHandGroup.add(rThumbCmcGroup);
      this.joints["r_thumb_cmc"] = rThumbCmcGroup;
      this.joints["r_thumb"] = rThumbCmcGroup;
      const r1stMetacarpal = this.createCylinderBone(0.012, 0.01, 0.045);
      r1stMetacarpal.position.set(8e-3, -0.022, 4e-3);
      rThumbCmcGroup.add(r1stMetacarpal);
      const rThumbMcpGroup = new THREE2.Group();
      rThumbMcpGroup.position.set(0.016, -0.045, 8e-3);
      rThumbCmcGroup.add(rThumbMcpGroup);
      this.joints["r_thumb_mcp"] = rThumbMcpGroup;
      const rThumbProxPhalanx = this.createCylinderBone(0.01, 8e-3, 0.03);
      rThumbProxPhalanx.position.set(0, -0.015, 0);
      rThumbMcpGroup.add(rThumbProxPhalanx);
      const rThumbIpGroup = new THREE2.Group();
      rThumbIpGroup.position.set(0, -0.03, 0);
      rThumbMcpGroup.add(rThumbIpGroup);
      this.joints["r_thumb_ip"] = rThumbIpGroup;
      const rThumbDistPhalanx = this.createCylinderBone(8e-3, 6e-3, 0.022);
      rThumbDistPhalanx.position.set(0, -0.011, 0);
      rThumbIpGroup.add(rThumbDistPhalanx);
      const rFingersGroup = new THREE2.Group();
      rFingersGroup.position.set(-5e-3, -0.082, 0);
      rHandGroup.add(rFingersGroup);
      this.joints["r_fingers"] = rFingersGroup;
      const fingerDefs = [
        { name: "index", x: 0.022, lenProx: 0.036, lenMid: 0.022, lenDist: 0.018 },
        { name: "middle", x: 7e-3, lenProx: 0.04, lenMid: 0.025, lenDist: 0.02 },
        { name: "ring", x: -8e-3, lenProx: 0.036, lenMid: 0.022, lenDist: 0.018 },
        { name: "little", x: -0.022, lenProx: 0.028, lenMid: 0.018, lenDist: 0.016 }
      ];
      fingerDefs.forEach((f) => {
        const mcpGroup = new THREE2.Group();
        mcpGroup.position.set(f.x, 0, 0);
        rFingersGroup.add(mcpGroup);
        this.joints[`r_finger_${f.name}_mcp`] = mcpGroup;
        const proxMesh = this.createCylinderBone(8e-3, 7e-3, f.lenProx);
        proxMesh.position.set(0, -f.lenProx / 2, 0);
        mcpGroup.add(proxMesh);
        const pipGroup = new THREE2.Group();
        pipGroup.position.set(0, -f.lenProx, 0);
        mcpGroup.add(pipGroup);
        this.joints[`r_finger_${f.name}_pip`] = pipGroup;
        const midMesh = this.createCylinderBone(7e-3, 6e-3, f.lenMid);
        midMesh.position.set(0, -f.lenMid / 2, 0);
        pipGroup.add(midMesh);
        const dipGroup = new THREE2.Group();
        dipGroup.position.set(0, -f.lenMid, 0);
        pipGroup.add(dipGroup);
        this.joints[`r_finger_${f.name}_dip`] = dipGroup;
        const distMesh = this.createCylinderBone(6e-3, 4e-3, f.lenDist);
        distMesh.position.set(0, -f.lenDist / 2, 0);
        dipGroup.add(distMesh);
      });
      const lClavicleGroup = new THREE2.Group();
      lClavicleGroup.position.set(-0.04, 0.26, 0.04);
      thoracicGroup.add(lClavicleGroup);
      const lClavicleMesh = this.createCylinderBone(0.015, 0.015, 0.15);
      lClavicleMesh.rotation.z = Math.PI / 2 - 0.1;
      lClavicleGroup.add(lClavicleMesh);
      const lScapulaGroup = new THREE2.Group();
      lScapulaGroup.position.set(-0.15, 0, -0.06);
      lClavicleGroup.add(lScapulaGroup);
      const lScapulaGeo = new THREE2.BufferGeometry();
      const lScapulaVerts = new Float32Array([
        -0.025,
        0.01,
        0.015,
        0.075,
        0.02,
        -8e-3,
        0.045,
        -0.115,
        5e-3,
        -0.025,
        0.01,
        0.015,
        0.045,
        -0.115,
        5e-3,
        -0.01,
        -0.04,
        0.015,
        -0.025,
        0.01,
        8e-3,
        0.045,
        -0.115,
        -2e-3,
        0.075,
        0.02,
        -0.015,
        -0.025,
        0.01,
        8e-3,
        -0.01,
        -0.04,
        8e-3,
        0.045,
        -0.115,
        -2e-3
      ]);
      lScapulaGeo.setAttribute("position", new THREE2.BufferAttribute(lScapulaVerts, 3));
      lScapulaGeo.computeVertexNormals();
      lScapulaGroup.add(new THREE2.Mesh(lScapulaGeo, this.boneMaterial));
      const lSpineMesh = new THREE2.Mesh(new THREE2.BoxGeometry(0.09, 0.012, 0.014), this.boneMaterial);
      lSpineMesh.position.set(0.035, 0.015, -0.012);
      lSpineMesh.rotation.set(0, 0, -0.12);
      lScapulaGroup.add(lSpineMesh);
      const lAcromionMesh = new THREE2.Mesh(new THREE2.BoxGeometry(0.042, 0.014, 0.046), this.boneMaterial);
      lAcromionMesh.position.set(-0.035, 0.036, 0.02);
      lScapulaGroup.add(lAcromionMesh);
      const lShoulderGroup = new THREE2.Group();
      lShoulderGroup.position.set(-0.03, -0.01, 0.03);
      lScapulaGroup.add(lShoulderGroup);
      const lHumeralHead = this.createJointSphere(0.04, false);
      lShoulderGroup.add(lHumeralHead);
      const lHumerusMesh = this.createCylinderBone(0.028, 0.024, 0.32);
      lShoulderGroup.add(lHumerusMesh);
      const lElbowGroup = new THREE2.Group();
      lElbowGroup.position.set(0, -0.32, 0);
      lShoulderGroup.add(lElbowGroup);
      const lForearmMesh = this.createCylinderBone(0.022, 0.018, 0.27);
      lElbowGroup.add(lForearmMesh);
      const lHandMesh = new THREE2.Mesh(new THREE2.BoxGeometry(0.06, 0.12, 0.02), this.boneMaterial);
      lHandMesh.position.set(0, -0.33, 0);
      lElbowGroup.add(lHandMesh);
      const rHipGroup = new THREE2.Group();
      rHipGroup.position.set(0.12, -0.06, 0);
      pelvisGroup.add(rHipGroup);
      this.joints["r_hip"] = rHipGroup;
      const rFemoralHead = this.createJointSphere(0.048, true);
      rHipGroup.add(rFemoralHead);
      const rGreaterTrochanter = new THREE2.Mesh(new THREE2.BoxGeometry(0.03, 0.04, 0.03), this.boneMaterial);
      rGreaterTrochanter.position.set(0.04, -0.04, 0);
      rHipGroup.add(rGreaterTrochanter);
      const rFemurMesh = this.createCylinderBone(0.036, 0.032, 0.44);
      rHipGroup.add(rFemurMesh);
      const rKneeGroup = new THREE2.Group();
      rKneeGroup.position.set(0, -0.44, 0);
      rHipGroup.add(rKneeGroup);
      this.joints["r_knee"] = rKneeGroup;
      const rKneeCondyleMesh = this.createJointSphere(0.045, true);
      rKneeGroup.add(rKneeCondyleMesh);
      const rPatellaGeo = new THREE2.SphereGeometry(0.026, 12, 12);
      rPatellaGeo.scale(1, 1.2, 0.5);
      const rPatellaMesh = new THREE2.Mesh(rPatellaGeo, this.boneMaterial);
      rPatellaMesh.position.set(0, 0, 0.045);
      rKneeGroup.add(rPatellaMesh);
      const rTibialRotationGroup = new THREE2.Group();
      rKneeGroup.add(rTibialRotationGroup);
      this.joints["r_tibia_axial"] = rTibialRotationGroup;
      const rTibiaMesh = this.createCylinderBone(0.032, 0.026, 0.42);
      rTibialRotationGroup.add(rTibiaMesh);
      const rFibulaMesh = this.createCylinderBone(0.012, 0.012, 0.4);
      rFibulaMesh.position.set(0.034, 0, 0);
      rTibialRotationGroup.add(rFibulaMesh);
      const rAnkleGroup = new THREE2.Group();
      rAnkleGroup.position.set(0, -0.42, 0);
      rTibialRotationGroup.add(rAnkleGroup);
      this.joints["r_ankle"] = rAnkleGroup;
      const rAnkleJointMesh = this.createJointSphere(0.032, true);
      rAnkleGroup.add(rAnkleJointMesh);
      const rMalleolusLat = new THREE2.Mesh(new THREE2.BoxGeometry(0.018, 0.035, 0.02), this.boneMaterial);
      rMalleolusLat.position.set(0.032, 0.01, 0);
      rAnkleGroup.add(rMalleolusLat);
      const rMalleolusMed = new THREE2.Mesh(new THREE2.BoxGeometry(0.018, 0.03, 0.02), this.boneMaterial);
      rMalleolusMed.position.set(-0.028, 0.015, 0);
      rAnkleGroup.add(rMalleolusMed);
      const rTalusMesh = new THREE2.Mesh(new THREE2.BoxGeometry(0.04, 0.03, 0.052), this.boneMaterial);
      rTalusMesh.position.set(0, -0.014, 8e-3);
      rAnkleGroup.add(rTalusMesh);
      this.meshes["r_talus"] = rTalusMesh;
      const rSubtalarGroup = new THREE2.Group();
      rSubtalarGroup.position.set(0, -0.024, 0);
      rAnkleGroup.add(rSubtalarGroup);
      this.joints["r_subtalar"] = rSubtalarGroup;
      const rCalcaneusGroup = new THREE2.Group();
      rCalcaneusGroup.position.set(0, 0, 0);
      rSubtalarGroup.add(rCalcaneusGroup);
      this.joints["r_calcaneus"] = rCalcaneusGroup;
      const rCalcaneusGeo = new THREE2.BoxGeometry(0.044, 0.042, 0.088);
      const rCalcaneusMesh = new THREE2.Mesh(rCalcaneusGeo, this.boneMaterial);
      rCalcaneusMesh.position.set(0, -0.018, -0.038);
      rCalcaneusGroup.add(rCalcaneusMesh);
      const rSustentaculumMesh = new THREE2.Mesh(new THREE2.BoxGeometry(0.014, 0.012, 0.024), this.boneMaterial);
      rSustentaculumMesh.position.set(-0.025, -0.012, -0.022);
      rCalcaneusGroup.add(rSustentaculumMesh);
      const rTnccGroup = new THREE2.Group();
      rTnccGroup.position.set(0, -0.015, 0.022);
      rSubtalarGroup.add(rTnccGroup);
      this.joints["r_tncc"] = rTnccGroup;
      const rNavicularMesh = new THREE2.Mesh(new THREE2.BoxGeometry(0.026, 0.024, 0.026), this.boneMaterial);
      rNavicularMesh.position.set(-0.018, 6e-3, 0.012);
      rTnccGroup.add(rNavicularMesh);
      const rCuboidMesh = new THREE2.Mesh(new THREE2.BoxGeometry(0.024, 0.022, 0.032), this.boneMaterial);
      rCuboidMesh.position.set(0.018, -2e-3, 0.01);
      rTnccGroup.add(rCuboidMesh);
      const axisMatTn = new THREE2.MeshStandardMaterial({
        color: 440020,
        // Cyan
        emissive: 561586,
        emissiveIntensity: 0.6,
        transparent: true,
        opacity: 0.85
      });
      const axisMatCc = new THREE2.MeshStandardMaterial({
        color: 1096065,
        // Emerald
        emissive: 366185,
        emissiveIntensity: 0.6,
        transparent: true,
        opacity: 0.85
      });
      const rTnAxisGroup = new THREE2.Group();
      rTnAxisGroup.position.set(-0.018, 0.022, 0.012);
      rTnccGroup.add(rTnAxisGroup);
      this.joints["r_tn_axis"] = rTnAxisGroup;
      const rTnAxisMesh = new THREE2.Mesh(new THREE2.CylinderGeometry(25e-4, 25e-4, 0.045, 8), axisMatTn);
      rTnAxisMesh.rotation.z = Math.PI / 2;
      rTnAxisGroup.add(rTnAxisMesh);
      const rCcAxisGroup = new THREE2.Group();
      rCcAxisGroup.position.set(0.018, 0.018, 0.01);
      rTnccGroup.add(rCcAxisGroup);
      this.joints["r_cc_axis"] = rCcAxisGroup;
      const rCcAxisMesh = new THREE2.Mesh(new THREE2.CylinderGeometry(25e-4, 25e-4, 0.045, 8), axisMatCc);
      rCcAxisMesh.rotation.z = Math.PI / 2;
      rCcAxisGroup.add(rCcAxisMesh);
      const rForefootGroup = new THREE2.Group();
      rForefootGroup.position.set(0, 0, 0.026);
      rTnccGroup.add(rForefootGroup);
      this.joints["r_forefoot"] = rForefootGroup;
      const rMetatarsalsGeo = new THREE2.BoxGeometry(0.062, 0.024, 0.075);
      const rMetatarsalsMesh = new THREE2.Mesh(rMetatarsalsGeo, this.boneMaterial);
      rMetatarsalsMesh.position.set(0, -8e-3, 0.038);
      rForefootGroup.add(rMetatarsalsMesh);
      const fasciaMat = new THREE2.MeshStandardMaterial({
        color: 1096065,
        emissive: 366185,
        emissiveIntensity: 0.35,
        transparent: true,
        opacity: 0.85
      });
      const rPlantarFasciaMesh = new THREE2.Mesh(new THREE2.BoxGeometry(0.032, 3e-3, 0.12), fasciaMat);
      rPlantarFasciaMesh.position.set(-8e-3, -0.036, 0.025);
      rSubtalarGroup.add(rPlantarFasciaMesh);
      this.meshes["r_plantar_fascia"] = rPlantarFasciaMesh;
      const rFirstMtpGroup = new THREE2.Group();
      rFirstMtpGroup.position.set(-0.022, -8e-3, 0.076);
      rForefootGroup.add(rFirstMtpGroup);
      this.joints["r_first_mtp"] = rFirstMtpGroup;
      const rFirstMtpJointMesh = this.createJointSphere(0.013, true);
      rFirstMtpGroup.add(rFirstMtpJointMesh);
      const rToeProxMesh = this.createCylinderBone(0.01, 9e-3, 0.03);
      rToeProxMesh.position.set(0, 0, 0.015);
      rToeProxMesh.rotation.x = Math.PI / 2;
      rFirstMtpGroup.add(rToeProxMesh);
      const rToeIpGroup = new THREE2.Group();
      rToeIpGroup.position.set(0, 0, 0.03);
      rFirstMtpGroup.add(rToeIpGroup);
      this.joints["r_toe_ip"] = rToeIpGroup;
      const rToeDistMesh = this.createCylinderBone(9e-3, 7e-3, 0.022);
      rToeDistMesh.position.set(0, 0, 0.011);
      rToeDistMesh.rotation.x = Math.PI / 2;
      rToeIpGroup.add(rToeDistMesh);
      const lHipGroup = new THREE2.Group();
      lHipGroup.position.set(-0.12, -0.06, 0);
      pelvisGroup.add(lHipGroup);
      const lFemoralHead = this.createJointSphere(0.045, false);
      lHipGroup.add(lFemoralHead);
      const lFemurMesh = this.createCylinderBone(0.034, 0.03, 0.44);
      lHipGroup.add(lFemurMesh);
      const lKneeGroup = new THREE2.Group();
      lKneeGroup.position.set(0, -0.44, 0);
      lHipGroup.add(lKneeGroup);
      const lTibiaMesh = this.createCylinderBone(0.03, 0.025, 0.42);
      lKneeGroup.add(lTibiaMesh);
      const lFootMesh = new THREE2.Mesh(new THREE2.BoxGeometry(0.07, 0.04, 0.18), this.boneMaterial);
      lFootMesh.position.set(0, -0.44, 0.04);
      lKneeGroup.add(lFootMesh);
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
      if (!node) return new THREE2.Vector3(0, 1.1, 0);
      const worldPos = new THREE2.Vector3();
      node.getWorldPosition(worldPos);
      return worldPos;
    }
    highlightJoint(jointKey) {
      if (this.activeHighlightMesh && this.activeHighlightMesh.parent) {
        this.activeHighlightMesh.parent.remove(this.activeHighlightMesh);
      }
      const jointNode = this.joints[jointKey];
      if (!jointNode) return;
      const ringGeo = new THREE2.RingGeometry(0.06, 0.08, 32);
      const ringMat = new THREE2.MeshBasicMaterial({
        color: 1357990,
        side: THREE2.DoubleSide,
        transparent: true,
        opacity: 0.85
      });
      this.activeHighlightMesh = new THREE2.Mesh(ringGeo, ringMat);
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
      const bursa = this.meshes["r_subacromial_bursa"];
      const acromion = this.meshes["r_acromion"];
      if (bursa) {
        if (isImpinging) {
          bursa.material.color.setHex(16007006);
          bursa.material.emissive.setHex(14753096);
          bursa.material.emissiveIntensity = 0.95;
          bursa.scale.set(1.2, 0.2, 1.2);
        } else {
          bursa.material.color.setHex(1096065);
          bursa.material.emissive.setHex(366185);
          bursa.material.emissiveIntensity = 0.35;
          bursa.scale.set(1, 1, 1);
        }
      }
      if (acromion) {
        acromion.material = isImpinging ? this.highlightMaterial : this.boneMaterial;
      }
    }
    setTnccAxesState(isParallel, divergenceAngle = 36) {
      const tnAxis = this.joints["r_tn_axis"];
      const ccAxis = this.joints["r_cc_axis"];
      if (!tnAxis || !ccAxis) return;
      if (isParallel) {
        tnAxis.rotation.y = 0;
        ccAxis.rotation.y = 0;
      } else {
        const halfRad = THREE2.MathUtils.degToRad(divergenceAngle / 2);
        tnAxis.rotation.y = halfRad;
        ccAxis.rotation.y = -halfRad;
      }
    }
    setPlantarFasciaTension(tensionRatio) {
      const fascia = this.meshes["r_plantar_fascia"];
      if (!fascia) return;
      const clamped = Math.max(0, Math.min(1, tensionRatio));
      if (clamped > 0.6) {
        fascia.material.color.setHex(16096779);
        fascia.material.emissive.setHex(14251782);
        fascia.material.emissiveIntensity = 0.4 + clamped * 0.5;
        fascia.scale.set(1.05, 1.2, 0.95);
      } else if (clamped > 0.2) {
        fascia.material.color.setHex(440020);
        fascia.material.emissive.setHex(561586);
        fascia.material.emissiveIntensity = 0.35 + clamped * 0.3;
        fascia.scale.set(1, 1, 1);
      } else {
        fascia.material.color.setHex(1096065);
        fascia.material.emissive.setHex(366185);
        fascia.material.emissiveIntensity = 0.35;
        fascia.scale.set(1, 1, 1);
      }
    }
  };

  // js/simulation/kinematics.js
  var THREE3 = window.THREE;
  var KinematicsEngine = class {
    constructor(skeletonModel) {
      this.model = skeletonModel;
      this.currentMotionId = null;
      this.currentValue = 0;
      this.isScapulaLocked = false;
      this.isImpinging = false;
      this.isWeightBearing = false;
      this.isTenodesisPassive = true;
      this.currentGrip = "none";
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
    curlFingers(mcpRad, pipRad, dipRad, fingers = ["index", "middle", "ring", "little"], convergence = false) {
      const joints = this.model.joints;
      const convergenceFactors = {
        index: { rotZ: -0.03, rotY: 0 },
        middle: { rotZ: 0, rotY: 0 },
        ring: { rotZ: 0.08, rotY: 0 },
        little: { rotZ: 0.16, rotY: -0.1 }
      };
      fingers.forEach((name) => {
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
      if (this.currentPathology === "adhesive_capsulitis") {
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
          ghDeg = totalDeg * (5 / 6);
          stDeg = totalDeg * (1 / 6);
        } else {
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
      const isPronation = motionId.includes("eversion") || motionId.includes("pronation");
      const isSupination = motionId.includes("inversion") || motionId.includes("supination");
      const isWindlass = motionId.includes("first_mtp_extension");
      let frontalDeg = 0;
      let transverseDeg = 0;
      let sagittalDeg = 0;
      let tnccLocked = false;
      let tibialRotDeg = 0;
      let tibialRotType = "Neutral (0\xB0)";
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
          tibialRotType = `Internal Rot. (${tibialRotDeg}\xB0)`;
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
          tibialRotType = `External Rot. (${tibialRotDeg}\xB0)`;
        }
        fasciaTensionPercent = Math.min(65, Math.round(15 + val * 0.9));
        mlaHeightMm = Math.min(22, Math.round(15 + val * 0.2));
      } else if (isWindlass) {
        windlassActive = val > 20;
        tnccLocked = val > 35;
        const sinVal = Math.sin(THREE3.MathUtils.degToRad(val));
        fasciaTensionPercent = Math.round(15 + sinVal * 85);
        mlaHeightMm = Math.round(15 + sinVal * 9);
        if (this.isWeightBearing) {
          tibialRotDeg = Math.round(sinVal * 7);
          tibialRotType = `External Rot. (${tibialRotDeg}\xB0)`;
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
        tnccStatusText: tnccLocked ? "\u{1F512} LOCKED (Rigid Propulsion Lever)" : "\u{1F513} UNLOCKED (Flexible Shock Absorber)",
        tnccAxesText: tnccLocked ? "Convergent / Crossed (36\xB0)" : "Parallel Axes (0\xB0)",
        tibialRotDeg,
        tibialRotType,
        fasciaTensionPercent,
        mlaHeightMm,
        windlassActive
      };
    }
    getHandBiomechanicsState(val = this.currentValue, motionId = this.currentMotionId) {
      if (!motionId) return null;
      const isWrist = motionId.startsWith("wrist");
      const isThumbCmc = motionId.startsWith("thumb");
      const isGripActive = this.currentGrip !== "none";
      let arthroRule = "Standard Articular Gliding";
      let rollDir = "Neutral";
      let slideDir = "Neutral";
      let isOpposite = false;
      let tenodesisFlexionDeg = 0;
      let tenodesisStatusText = "Tenodesis Inactive";
      if (motionId === "thumb_cmc_abduction") {
        arthroRule = "Convex-on-Concave (Orthogonal Saddle Rule)";
        rollDir = "Palmar (Anterior)";
        slideDir = "Dorsal (Posterior)";
        isOpposite = true;
      } else if (motionId === "thumb_cmc_flexion") {
        arthroRule = "Concave-on-Convex (Orthogonal Saddle Rule)";
        rollDir = "Ulnar / Medial";
        slideDir = "Ulnar / Medial (Same)";
        isOpposite = false;
      } else if (motionId === "thumb_opposition") {
        arthroRule = "Compound Triplanar Saddle Coupling";
        rollDir = "Palmar-Ulnar Complex";
        slideDir = "Axial Medial Rotation";
        isOpposite = true;
      } else if (motionId === "wrist_extension") {
        arthroRule = "Convex Proximal Carpals on Concave Radius";
        rollDir = "Dorsal (Posterior)";
        slideDir = "Palmar (Anterior)";
        isOpposite = true;
        if (this.isTenodesisPassive) {
          tenodesisFlexionDeg = Math.round(Math.min(1, val / 60) * 65);
          tenodesisStatusText = `Automatic Passive Grasp (${tenodesisFlexionDeg}\xB0 Finger Flexion)`;
        }
      } else if (motionId === "wrist_flexion") {
        arthroRule = "Convex Proximal Carpals on Concave Radius";
        rollDir = "Palmar (Anterior)";
        slideDir = "Dorsal (Posterior)";
        isOpposite = true;
        if (this.isTenodesisPassive) {
          tenodesisStatusText = "Passive Finger Release (Flat Open Hand)";
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
      if (gripId === "power_grip") {
        if (joints["r_wrist"]) {
          joints["r_wrist"].rotation.x = THREE3.MathUtils.degToRad(25);
          joints["r_wrist"].rotation.z = -THREE3.MathUtils.degToRad(10);
        }
        if (joints["r_finger_index_mcp"]) joints["r_finger_index_mcp"].rotation.set(-0.96, 0, -0.04);
        if (joints["r_finger_index_pip"]) joints["r_finger_index_pip"].rotation.set(-1.48, 0, 0);
        if (joints["r_finger_index_dip"]) joints["r_finger_index_dip"].rotation.set(-0.87, 0, 0);
        if (joints["r_finger_middle_mcp"]) joints["r_finger_middle_mcp"].rotation.set(-1.13, 0, 0);
        if (joints["r_finger_middle_pip"]) joints["r_finger_middle_pip"].rotation.set(-1.57, 0, 0);
        if (joints["r_finger_middle_dip"]) joints["r_finger_middle_dip"].rotation.set(-0.96, 0, 0);
        if (joints["r_finger_ring_mcp"]) joints["r_finger_ring_mcp"].rotation.set(-1.25, 0, 0.08);
        if (joints["r_finger_ring_pip"]) joints["r_finger_ring_pip"].rotation.set(-1.65, 0, 0);
        if (joints["r_finger_ring_dip"]) joints["r_finger_ring_dip"].rotation.set(-1.05, 0, 0);
        if (joints["r_finger_little_mcp"]) joints["r_finger_little_mcp"].rotation.set(-1.4, -0.1, 0.16);
        if (joints["r_finger_little_pip"]) joints["r_finger_little_pip"].rotation.set(-1.75, 0, 0);
        if (joints["r_finger_little_dip"]) joints["r_finger_little_dip"].rotation.set(-1.13, 0, 0);
        if (joints["r_thumb_cmc"]) joints["r_thumb_cmc"].rotation.set(0.35, -0.3, -0.28);
        if (joints["r_thumb_mcp"]) joints["r_thumb_mcp"].rotation.x = -0.75;
        if (joints["r_thumb_ip"]) joints["r_thumb_ip"].rotation.x = -0.85;
      } else if (gripId === "tip_pinch") {
        if (joints["r_wrist"]) joints["r_wrist"].rotation.set(THREE3.MathUtils.degToRad(15), 0, 0);
        if (joints["r_finger_index_mcp"]) joints["r_finger_index_mcp"].rotation.set(-0.78, 0, -0.06);
        if (joints["r_finger_index_pip"]) joints["r_finger_index_pip"].rotation.set(-1.1, 0, 0);
        if (joints["r_finger_index_dip"]) joints["r_finger_index_dip"].rotation.set(-0.75, 0, 0);
        if (joints["r_finger_middle_mcp"]) joints["r_finger_middle_mcp"].rotation.set(-0.25, 0, 0);
        if (joints["r_finger_middle_pip"]) joints["r_finger_middle_pip"].rotation.set(-0.35, 0, 0);
        if (joints["r_finger_middle_dip"]) joints["r_finger_middle_dip"].rotation.set(-0.2, 0, 0);
        if (joints["r_finger_ring_mcp"]) joints["r_finger_ring_mcp"].rotation.set(-0.32, 0, 0.04);
        if (joints["r_finger_ring_pip"]) joints["r_finger_ring_pip"].rotation.set(-0.42, 0, 0);
        if (joints["r_finger_ring_dip"]) joints["r_finger_ring_dip"].rotation.set(-0.25, 0, 0);
        if (joints["r_finger_little_mcp"]) joints["r_finger_little_mcp"].rotation.set(-0.38, -0.05, 0.08);
        if (joints["r_finger_little_pip"]) joints["r_finger_little_pip"].rotation.set(-0.48, 0, 0);
        if (joints["r_finger_little_dip"]) joints["r_finger_little_dip"].rotation.set(-0.3, 0, 0);
        if (joints["r_thumb_cmc"]) joints["r_thumb_cmc"].rotation.set(0, -0.6, -0.1);
        if (joints["r_thumb_mcp"]) joints["r_thumb_mcp"].rotation.set(-0.85, 0, 0);
        if (joints["r_thumb_ip"]) joints["r_thumb_ip"].rotation.set(-1, 0, 0);
      } else if (gripId === "key_pinch") {
        if (joints["r_wrist"]) joints["r_wrist"].rotation.set(THREE3.MathUtils.degToRad(20), 0, -THREE3.MathUtils.degToRad(5));
        if (joints["r_finger_index_mcp"]) joints["r_finger_index_mcp"].rotation.set(-0.62, 0, 0);
        if (joints["r_finger_index_pip"]) joints["r_finger_index_pip"].rotation.set(-1.18, 0, 0);
        if (joints["r_finger_index_dip"]) joints["r_finger_index_dip"].rotation.set(-0.55, 0, 0);
        if (joints["r_finger_middle_mcp"]) joints["r_finger_middle_mcp"].rotation.set(-1.05, 0, 0);
        if (joints["r_finger_middle_pip"]) joints["r_finger_middle_pip"].rotation.set(-1.4, 0, 0);
        if (joints["r_finger_middle_dip"]) joints["r_finger_middle_dip"].rotation.set(-0.7, 0, 0);
        if (joints["r_finger_ring_mcp"]) joints["r_finger_ring_mcp"].rotation.set(-1.18, 0, 0.06);
        if (joints["r_finger_ring_pip"]) joints["r_finger_ring_pip"].rotation.set(-1.48, 0, 0);
        if (joints["r_finger_ring_dip"]) joints["r_finger_ring_dip"].rotation.set(-0.75, 0, 0);
        if (joints["r_finger_little_mcp"]) joints["r_finger_little_mcp"].rotation.set(-1.28, -0.06, 0.14);
        if (joints["r_finger_little_pip"]) joints["r_finger_little_pip"].rotation.set(-1.52, 0, 0);
        if (joints["r_finger_little_dip"]) joints["r_finger_little_dip"].rotation.set(-0.8, 0, 0);
        if (joints["r_thumb_cmc"]) joints["r_thumb_cmc"].rotation.set(0.12, -0.38, -0.28);
        if (joints["r_thumb_mcp"]) joints["r_thumb_mcp"].rotation.set(-0.35, 0, 0);
        if (joints["r_thumb_ip"]) joints["r_thumb_ip"].rotation.set(-0.15, 0, 0);
      } else if (gripId === "spherical_grip") {
        if (joints["r_wrist"]) joints["r_wrist"].rotation.set(THREE3.MathUtils.degToRad(20), 0, 0);
        if (joints["r_finger_index_mcp"]) joints["r_finger_index_mcp"].rotation.set(-0.7, 0, -0.16);
        if (joints["r_finger_index_pip"]) joints["r_finger_index_pip"].rotation.set(-0.96, 0, 0);
        if (joints["r_finger_index_dip"]) joints["r_finger_index_dip"].rotation.set(-0.52, 0, 0);
        if (joints["r_finger_middle_mcp"]) joints["r_finger_middle_mcp"].rotation.set(-0.78, 0, 0);
        if (joints["r_finger_middle_pip"]) joints["r_finger_middle_pip"].rotation.set(-1.05, 0, 0);
        if (joints["r_finger_middle_dip"]) joints["r_finger_middle_dip"].rotation.set(-0.61, 0, 0);
        if (joints["r_finger_ring_mcp"]) joints["r_finger_ring_mcp"].rotation.set(-0.85, 0, 0.12);
        if (joints["r_finger_ring_pip"]) joints["r_finger_ring_pip"].rotation.set(-1.1, 0, 0);
        if (joints["r_finger_ring_dip"]) joints["r_finger_ring_dip"].rotation.set(-0.65, 0, 0);
        if (joints["r_finger_little_mcp"]) joints["r_finger_little_mcp"].rotation.set(-0.92, -0.08, 0.22);
        if (joints["r_finger_little_pip"]) joints["r_finger_little_pip"].rotation.set(-1.15, 0, 0);
        if (joints["r_finger_little_dip"]) joints["r_finger_little_dip"].rotation.set(-0.7, 0, 0);
        if (joints["r_thumb_cmc"]) joints["r_thumb_cmc"].rotation.set(0.45, -0.45, -0.2);
        if (joints["r_thumb_mcp"]) joints["r_thumb_mcp"].rotation.set(-0.55, 0, 0);
        if (joints["r_thumb_ip"]) joints["r_thumb_ip"].rotation.set(-0.5, 0, 0);
      } else if (gripId === "open_hand") {
        if (joints["r_wrist"]) joints["r_wrist"].rotation.set(0, 0, 0);
        if (joints["r_finger_index_mcp"]) joints["r_finger_index_mcp"].rotation.set(-0.14, 0, 0);
        if (joints["r_finger_index_pip"]) joints["r_finger_index_pip"].rotation.set(-0.18, 0, 0);
        if (joints["r_finger_index_dip"]) joints["r_finger_index_dip"].rotation.set(-0.1, 0, 0);
        if (joints["r_finger_middle_mcp"]) joints["r_finger_middle_mcp"].rotation.set(-0.2, 0, 0);
        if (joints["r_finger_middle_pip"]) joints["r_finger_middle_pip"].rotation.set(-0.25, 0, 0);
        if (joints["r_finger_middle_dip"]) joints["r_finger_middle_dip"].rotation.set(-0.12, 0, 0);
        if (joints["r_finger_ring_mcp"]) joints["r_finger_ring_mcp"].rotation.set(-0.26, 0, 0.02);
        if (joints["r_finger_ring_pip"]) joints["r_finger_ring_pip"].rotation.set(-0.3, 0, 0);
        if (joints["r_finger_ring_dip"]) joints["r_finger_ring_dip"].rotation.set(-0.14, 0, 0);
        if (joints["r_finger_little_mcp"]) joints["r_finger_little_mcp"].rotation.set(-0.32, 0, 0.04);
        if (joints["r_finger_little_pip"]) joints["r_finger_little_pip"].rotation.set(-0.35, 0, 0);
        if (joints["r_finger_little_dip"]) joints["r_finger_little_dip"].rotation.set(-0.16, 0, 0);
        if (joints["r_thumb_cmc"]) joints["r_thumb_cmc"].rotation.set(0.2, 0.15, -0.45);
        if (joints["r_thumb_mcp"]) joints["r_thumb_mcp"].rotation.set(0, 0, 0);
        if (joints["r_thumb_ip"]) joints["r_thumb_ip"].rotation.set(0, 0, 0);
      }
    }
    applyMotion(motionId, value) {
      this.currentMotionId = motionId;
      this.currentValue = value;
      this.model.resetAllPoses();
      const rad = THREE3.MathUtils.degToRad(value);
      const joints = this.model.joints;
      switch (motionId) {
        // ----------------------------------------------------
        // CERVICAL SPINE
        // ----------------------------------------------------
        case "cervical_flexion":
          if (joints["cervical"]) joints["cervical"].rotation.x = rad * 0.65;
          if (joints["head"]) joints["head"].rotation.x = rad * 0.35;
          break;
        case "cervical_extension":
          if (joints["cervical"]) joints["cervical"].rotation.x = -rad * 0.65;
          if (joints["head"]) joints["head"].rotation.x = -rad * 0.35;
          break;
        case "cervical_lateral_flexion":
          if (joints["cervical"]) {
            joints["cervical"].rotation.z = -rad * 0.75;
            joints["cervical"].rotation.y = -rad * 0.15;
          }
          if (joints["head"]) {
            joints["head"].rotation.z = -rad * 0.25;
          }
          break;
        case "cervical_rotation":
          if (joints["cervical"]) joints["cervical"].rotation.y = -rad * 0.5;
          if (joints["head"]) joints["head"].rotation.y = -rad * 0.5;
          break;
        // ----------------------------------------------------
        // THORACOLUMBAR SPINE
        // ----------------------------------------------------
        case "thoracolumbar_flexion":
          if (joints["lumbar"]) joints["lumbar"].rotation.x = rad * 0.65;
          if (joints["thoracic"]) joints["thoracic"].rotation.x = rad * 0.35;
          break;
        case "thoracolumbar_extension":
          if (joints["lumbar"]) joints["lumbar"].rotation.x = -rad * 0.65;
          if (joints["thoracic"]) joints["thoracic"].rotation.x = -rad * 0.35;
          break;
        case "thoracolumbar_lat_flexion":
          if (joints["lumbar"]) joints["lumbar"].rotation.z = -rad * 0.65;
          if (joints["thoracic"]) joints["thoracic"].rotation.z = -rad * 0.35;
          break;
        case "thoracolumbar_rotation":
          if (joints["thoracic"]) joints["thoracic"].rotation.y = -rad * 0.85;
          if (joints["lumbar"]) joints["lumbar"].rotation.y = -rad * 0.15;
          break;
        // ----------------------------------------------------
        // TEMPOROMANDIBULAR JOINT (TMJ)
        // ----------------------------------------------------
        case "tmj_depression": {
          const mm = value;
          if (joints["tmj"]) {
            const rollAngle = THREE3.MathUtils.degToRad(Math.min(mm, 25) * 0.45);
            const translation = Math.max(0, mm - 25) * 6e-4;
            const lateRoll = THREE3.MathUtils.degToRad(Math.max(0, mm - 25) * 0.2);
            joints["tmj"].rotation.x = rollAngle + lateRoll;
            joints["tmj"].position.set(0, 0.05 - translation, 0.035 + translation * 0.8);
          }
          break;
        }
        // ----------------------------------------------------
        // SHOULDER COMPLEX
        // ----------------------------------------------------
        case "shoulder_flexion": {
          const totalDeg = value;
          const breakdown = this.getScapulohumeralBreakdown(totalDeg);
          this.isImpinging = breakdown.isImpinging;
          const ghRad = THREE3.MathUtils.degToRad(breakdown.ghDeg);
          const stRad = THREE3.MathUtils.degToRad(breakdown.stDeg);
          if (joints["r_shoulder"]) {
            joints["r_shoulder"].rotation.x = -ghRad;
          }
          if (joints["r_scapula"]) {
            const glideRatio = breakdown.stDeg / 60;
            joints["r_scapula"].rotation.z = THREE3.MathUtils.degToRad(breakdown.stDeg * 0.35);
            joints["r_scapula"].rotation.x = -THREE3.MathUtils.degToRad(breakdown.stDeg * 0.2);
            joints["r_scapula"].rotation.y = THREE3.MathUtils.degToRad(breakdown.stDeg * 0.22);
            joints["r_scapula"].position.x = 0.15 - glideRatio * 0.025;
            joints["r_scapula"].position.y = glideRatio * 0.022;
            joints["r_scapula"].position.z = -0.06 + glideRatio * 0.045;
          }
          if (joints["r_clavicle"]) {
            joints["r_clavicle"].rotation.z = THREE3.MathUtils.degToRad(breakdown.stDeg * 0.38);
            joints["r_clavicle"].rotation.y = THREE3.MathUtils.degToRad(breakdown.stDeg * 0.18);
          }
          this.model.setImpingementState(this.isImpinging);
          break;
        }
        case "shoulder_extension": {
          this.model.setImpingementState(false);
          if (joints["r_shoulder"]) {
            joints["r_shoulder"].rotation.x = rad;
          }
          break;
        }
        case "shoulder_abduction": {
          const totalDeg = value;
          const breakdown = this.getScapulohumeralBreakdown(totalDeg);
          this.isImpinging = breakdown.isImpinging;
          const ghRad = THREE3.MathUtils.degToRad(breakdown.ghDeg);
          const stRad = THREE3.MathUtils.degToRad(breakdown.stDeg);
          const glideRatio = breakdown.stDeg / 60;
          if (joints["r_shoulder"]) {
            joints["r_shoulder"].rotation.z = ghRad;
            if (!this.isScapulaLocked && totalDeg > 60) {
              const extRot = THREE3.MathUtils.degToRad((totalDeg - 60) * 0.32);
              joints["r_shoulder"].rotation.y = extRot;
            }
          }
          if (joints["r_scapula"]) {
            joints["r_scapula"].rotation.z = THREE3.MathUtils.degToRad(breakdown.stDeg * 0.38);
            joints["r_scapula"].rotation.x = -THREE3.MathUtils.degToRad(breakdown.stDeg * 0.25);
            joints["r_scapula"].rotation.y = -THREE3.MathUtils.degToRad(breakdown.stDeg * 0.18);
            joints["r_scapula"].position.x = 0.15 - glideRatio * 0.038;
            joints["r_scapula"].position.y = glideRatio * 0.022;
            joints["r_scapula"].position.z = -0.06 + glideRatio * 0.025;
          }
          if (joints["r_clavicle"]) {
            joints["r_clavicle"].rotation.z = THREE3.MathUtils.degToRad(breakdown.stDeg * 0.4);
            joints["r_clavicle"].rotation.y = -THREE3.MathUtils.degToRad(breakdown.stDeg * 0.15);
          }
          this.model.setImpingementState(this.isImpinging);
          break;
        }
        case "shoulder_adduction": {
          this.model.setImpingementState(false);
          if (joints["r_shoulder"]) {
            joints["r_shoulder"].rotation.z = -rad;
          }
          break;
        }
        case "shoulder_external_rotation": {
          if (joints["r_shoulder"]) {
            joints["r_shoulder"].rotation.z = Math.PI / 2;
            joints["r_shoulder"].rotation.x = -rad;
          }
          if (joints["r_elbow"]) {
            joints["r_elbow"].rotation.x = -Math.PI / 2;
          }
          break;
        }
        case "shoulder_internal_rotation": {
          if (joints["r_shoulder"]) {
            joints["r_shoulder"].rotation.z = Math.PI / 2;
            joints["r_shoulder"].rotation.x = rad;
          }
          if (joints["r_elbow"]) {
            joints["r_elbow"].rotation.x = -Math.PI / 2;
          }
          break;
        }
        // ----------------------------------------------------
        // ELBOW & FOREARM
        // ----------------------------------------------------
        case "elbow_flexion":
          if (joints["r_shoulder"]) joints["r_shoulder"].rotation.x = -THREE3.MathUtils.degToRad(15);
          if (joints["r_elbow"]) joints["r_elbow"].rotation.x = -rad;
          break;
        case "elbow_extension":
          if (joints["r_shoulder"]) joints["r_shoulder"].rotation.x = -THREE3.MathUtils.degToRad(15);
          if (joints["r_elbow"]) joints["r_elbow"].rotation.x = rad;
          break;
        case "forearm_pronation":
          if (joints["r_elbow"]) joints["r_elbow"].rotation.x = -Math.PI / 2;
          if (joints["r_forearm"]) joints["r_forearm"].rotation.y = rad;
          break;
        case "forearm_supination":
          if (joints["r_elbow"]) joints["r_elbow"].rotation.x = -Math.PI / 2;
          if (joints["r_forearm"]) joints["r_forearm"].rotation.y = -rad;
          break;
        // ----------------------------------------------------
        // WRIST & HAND COMPLEX
        // ----------------------------------------------------
        case "wrist_flexion":
          if (joints["r_elbow"]) joints["r_elbow"].rotation.x = -Math.PI / 2.5;
          if (joints["r_wrist"]) joints["r_wrist"].rotation.x = -rad;
          if (this.isTenodesisPassive) {
            this.curlFingers(0, 0, 0);
            if (joints["r_thumb_cmc"]) joints["r_thumb_cmc"].rotation.set(0.2, 0.15, -0.45);
          }
          break;
        case "wrist_extension":
          if (joints["r_elbow"]) joints["r_elbow"].rotation.x = -Math.PI / 2.5;
          if (joints["r_wrist"]) joints["r_wrist"].rotation.x = rad;
          if (this.isTenodesisPassive) {
            const ratio = Math.min(1, value / 65);
            const mcp = THREE3.MathUtils.degToRad(55 * ratio);
            const pip = THREE3.MathUtils.degToRad(70 * ratio);
            const dip = THREE3.MathUtils.degToRad(40 * ratio);
            this.curlFingers(mcp, pip, dip, ["index", "middle", "ring", "little"], true);
            if (joints["r_thumb_cmc"]) {
              joints["r_thumb_cmc"].rotation.y = 0.15 + ratio * 0.35;
            }
          }
          break;
        case "wrist_radial_deviation":
          if (joints["r_elbow"]) joints["r_elbow"].rotation.x = -Math.PI / 2.5;
          if (joints["r_wrist"]) joints["r_wrist"].rotation.z = rad;
          break;
        case "wrist_ulnar_deviation":
          if (joints["r_elbow"]) joints["r_elbow"].rotation.x = -Math.PI / 2.5;
          if (joints["r_wrist"]) joints["r_wrist"].rotation.z = -rad;
          break;
        case "thumb_cmc_abduction": {
          if (joints["r_elbow"]) joints["r_elbow"].rotation.x = -Math.PI / 2.5;
          if (joints["r_thumb_cmc"]) {
            joints["r_thumb_cmc"].rotation.x = 0.2 + rad * 0.95;
            joints["r_thumb_cmc"].rotation.z = -0.45 + rad * 0.35;
            joints["r_thumb_cmc"].rotation.y = 0.15 + rad * 0.15;
          }
          if (joints["r_thumb_mcp"]) joints["r_thumb_mcp"].rotation.x = rad * 0.1;
          break;
        }
        case "thumb_cmc_flexion": {
          if (joints["r_elbow"]) joints["r_elbow"].rotation.x = -Math.PI / 2.5;
          if (joints["r_thumb_cmc"]) {
            joints["r_thumb_cmc"].rotation.z = -0.45 - rad * 1.05;
            joints["r_thumb_cmc"].rotation.x = 0.2 - rad * 0.35;
            joints["r_thumb_cmc"].rotation.y = 0.15 - rad * 0.25;
          }
          if (joints["r_thumb_mcp"]) joints["r_thumb_mcp"].rotation.x = -rad * 0.65;
          if (joints["r_thumb_ip"]) joints["r_thumb_ip"].rotation.x = -rad * 0.45;
          break;
        }
        case "thumb_opposition": {
          if (joints["r_elbow"]) joints["r_elbow"].rotation.x = -Math.PI / 2.5;
          if (joints["r_thumb_cmc"]) {
            joints["r_thumb_cmc"].rotation.x = 0.2 + rad * 0.75;
            joints["r_thumb_cmc"].rotation.y = 0.15 + rad * 0.6;
            joints["r_thumb_cmc"].rotation.z = -0.45 - rad * 0.85;
          }
          if (joints["r_thumb_mcp"]) joints["r_thumb_mcp"].rotation.x = -rad * 0.6;
          if (joints["r_thumb_ip"]) joints["r_thumb_ip"].rotation.x = -rad * 0.5;
          const oppFlex = rad * 0.35;
          if (joints["r_finger_little_mcp"]) {
            joints["r_finger_little_mcp"].rotation.x = -oppFlex;
            joints["r_finger_little_mcp"].rotation.y = -oppFlex * 0.4;
          }
          if (joints["r_finger_ring_mcp"]) joints["r_finger_ring_mcp"].rotation.x = -oppFlex * 0.5;
          break;
        }
        // ----------------------------------------------------
        // HIP JOINT
        // ----------------------------------------------------
        case "hip_flexion":
          if (joints["r_hip"]) {
            joints["r_hip"].rotation.x = -rad;
          }
          if (joints["r_knee"]) {
            joints["r_knee"].rotation.x = rad * 0.9;
          }
          break;
        case "hip_extension":
          if (joints["r_hip"]) joints["r_hip"].rotation.x = rad;
          break;
        case "hip_abduction":
          if (joints["r_hip"]) joints["r_hip"].rotation.z = rad;
          break;
        case "hip_adduction":
          if (joints["r_hip"]) joints["r_hip"].rotation.z = -rad;
          break;
        case "hip_internal_rotation":
          if (joints["r_hip"]) {
            joints["r_hip"].rotation.x = -Math.PI / 2;
            joints["r_hip"].rotation.y = -rad;
          }
          if (joints["r_knee"]) {
            joints["r_knee"].rotation.x = Math.PI / 2;
          }
          break;
        case "hip_external_rotation":
          if (joints["r_hip"]) {
            joints["r_hip"].rotation.x = -Math.PI / 2;
            joints["r_hip"].rotation.y = rad;
          }
          if (joints["r_knee"]) {
            joints["r_knee"].rotation.x = Math.PI / 2;
          }
          break;
        // ----------------------------------------------------
        // KNEE JOINT
        // ----------------------------------------------------
        case "knee_flexion":
          if (joints["r_hip"]) joints["r_hip"].rotation.x = -THREE3.MathUtils.degToRad(35);
          if (joints["r_knee"]) joints["r_knee"].rotation.x = rad;
          break;
        case "knee_extension": {
          if (joints["r_knee"]) joints["r_knee"].rotation.x = -rad;
          if (joints["r_tibia_axial"]) {
            const terminalRatio = Math.max(0, (30 - Math.abs(value)) / 30);
            const screwHomeAngle = THREE3.MathUtils.degToRad(10 * terminalRatio);
            joints["r_tibia_axial"].rotation.y = -screwHomeAngle;
          }
          break;
        }
        // ----------------------------------------------------
        // ANKLE & FOOT COMPLEX
        // ----------------------------------------------------
        case "ankle_dorsiflexion":
          if (joints["r_ankle"]) joints["r_ankle"].rotation.x = -rad;
          break;
        case "ankle_plantarflexion":
          if (joints["r_ankle"]) joints["r_ankle"].rotation.x = rad;
          break;
        case "subtalar_inversion": {
          if (joints["r_subtalar"]) {
            joints["r_subtalar"].rotation.z = -rad * 0.95;
            joints["r_subtalar"].rotation.y = -rad * 0.12;
            joints["r_subtalar"].rotation.x = rad * 0.08;
          }
          if (joints["r_tncc"]) {
            joints["r_tncc"].rotation.set(0, 0, 0);
          }
          this.model.setTnccAxesState(false, 20);
          this.model.setPlantarFasciaTension(0.12);
          break;
        }
        case "subtalar_eversion": {
          if (joints["r_subtalar"]) {
            joints["r_subtalar"].rotation.z = rad * 0.95;
            joints["r_subtalar"].rotation.y = rad * 0.12;
            joints["r_subtalar"].rotation.x = -rad * 0.08;
          }
          if (joints["r_tncc"]) {
            joints["r_tncc"].rotation.set(0, 0, 0);
          }
          this.model.setTnccAxesState(true, 5);
          this.model.setPlantarFasciaTension(0.08);
          break;
        }
        case "subtalar_supination": {
          if (joints["r_subtalar"]) {
            joints["r_subtalar"].rotation.z = -rad * 0.58;
            joints["r_subtalar"].rotation.y = -rad * 0.28;
            joints["r_subtalar"].rotation.x = rad * 0.2;
            joints["r_subtalar"].position.y = Math.sin(rad) * 0.02;
          }
          if (joints["r_tncc"]) {
            joints["r_tncc"].rotation.z = -rad * 0.42;
            joints["r_tncc"].rotation.y = -rad * 0.22;
            joints["r_tncc"].rotation.x = rad * 0.18;
          }
          this.model.setTnccAxesState(false, 36);
          this.model.setPlantarFasciaTension(Math.min(1, rad * 0.75));
          if (this.isWeightBearing && joints["r_tibia_axial"]) {
            joints["r_tibia_axial"].rotation.y = rad * 0.45;
          }
          break;
        }
        case "subtalar_pronation": {
          if (joints["r_subtalar"]) {
            joints["r_subtalar"].rotation.z = rad * 0.55;
            joints["r_subtalar"].rotation.y = rad * 0.26;
            joints["r_subtalar"].rotation.x = -rad * 0.18;
            joints["r_subtalar"].position.y = -Math.sin(rad) * 0.012;
          }
          if (joints["r_tncc"]) {
            joints["r_tncc"].rotation.z = rad * 0.45;
            joints["r_tncc"].rotation.y = rad * 0.24;
            joints["r_tncc"].rotation.x = -rad * 0.16;
          }
          this.model.setTnccAxesState(true, 0);
          this.model.setPlantarFasciaTension(0.06);
          if (this.isWeightBearing && joints["r_tibia_axial"]) {
            joints["r_tibia_axial"].rotation.y = -rad * 0.55;
          }
          break;
        }
        case "first_mtp_extension": {
          if (joints["r_first_mtp"]) {
            joints["r_first_mtp"].rotation.x = -rad;
          }
          if (joints["r_toe_ip"]) {
            joints["r_toe_ip"].rotation.x = -rad * 0.25;
          }
          const sinRad = Math.sin(rad);
          if (joints["r_subtalar"]) {
            joints["r_subtalar"].position.y = sinRad * 0.024;
            joints["r_subtalar"].rotation.z = -sinRad * 0.14;
          }
          const tensionRatio = Math.min(1, sinRad * 1.15);
          this.model.setPlantarFasciaTension(tensionRatio);
          this.model.setTnccAxesState(value < 35, 36);
          if (this.isWeightBearing && joints["r_tibia_axial"]) {
            joints["r_tibia_axial"].rotation.y = sinRad * 0.25;
          }
          break;
        }
        case "first_mtp_flexion": {
          if (joints["r_first_mtp"]) {
            joints["r_first_mtp"].rotation.x = rad;
          }
          break;
        }
        default:
          console.warn(`Unrecognized motion ID: ${motionId}`);
      }
      if (this.currentGrip !== "none") {
        this.applyGrip(this.currentGrip);
      }
    }
  };

  // js/simulation/goniometer.js
  var THREE4 = window.THREE;
  var VirtualGoniometer = class {
    constructor(scene) {
      this.scene = scene;
      this.group = new THREE4.Group();
      this.group.visible = true;
      this.scene.add(this.group);
      this.fulcrumMesh = null;
      this.stationaryArm = null;
      this.movableArm = null;
      this.arcMesh = null;
      this.buildGoniometer();
    }
    buildGoniometer() {
      const dialGeo = new THREE4.CylinderGeometry(0.085, 0.085, 6e-3, 48);
      dialGeo.rotateX(Math.PI / 2);
      const dialMat = new THREE4.MeshStandardMaterial({
        color: 594984,
        emissive: 165063,
        emissiveIntensity: 0.35,
        roughness: 0.25,
        metalness: 0.7,
        transparent: true,
        opacity: 0.88,
        side: THREE4.DoubleSide
      });
      this.fulcrumMesh = new THREE4.Mesh(dialGeo, dialMat);
      this.group.add(this.fulcrumMesh);
      const tickMat = new THREE4.LineBasicMaterial({ color: 3718648, linewidth: 2 });
      const tickPoints = [];
      for (let i = 0; i < 360; i += 10) {
        const angle = THREE4.MathUtils.degToRad(i);
        const isMajor = i % 30 === 0;
        const isCardinal = i % 90 === 0;
        const r1 = 0.066;
        const r2 = isCardinal ? 0.083 : isMajor ? 0.078 : 0.072;
        tickPoints.push(
          Math.cos(angle) * r1,
          Math.sin(angle) * r1,
          5e-3,
          Math.cos(angle) * r2,
          Math.sin(angle) * r2,
          5e-3,
          Math.cos(angle) * r1,
          Math.sin(angle) * r1,
          -5e-3,
          Math.cos(angle) * r2,
          Math.sin(angle) * r2,
          -5e-3
        );
      }
      const tickGeo = new THREE4.BufferGeometry();
      tickGeo.setAttribute("position", new THREE4.Float32BufferAttribute(tickPoints, 3));
      const ticksLine = new THREE4.LineSegments(tickGeo, tickMat);
      this.fulcrumMesh.add(ticksLine);
      const rivetGeo = new THREE4.CylinderGeometry(0.016, 0.016, 0.018, 20);
      rivetGeo.rotateX(Math.PI / 2);
      const rivetMat = new THREE4.MeshStandardMaterial({
        color: 1357990,
        emissive: 1013358,
        emissiveIntensity: 0.6,
        metalness: 0.9,
        roughness: 0.1
      });
      const rivet = new THREE4.Mesh(rivetGeo, rivetMat);
      this.fulcrumMesh.add(rivet);
      const statArmGeo = new THREE4.BoxGeometry(0.016, 0.32, 4e-3);
      statArmGeo.translate(0, -0.16, 4e-3);
      const statArmMat = new THREE4.MeshStandardMaterial({
        color: 9741240,
        emissive: 3359061,
        emissiveIntensity: 0.2,
        metalness: 0.5,
        roughness: 0.2,
        transparent: true,
        opacity: 0.92,
        side: THREE4.DoubleSide
      });
      this.stationaryArm = new THREE4.Mesh(statArmGeo, statArmMat);
      this.group.add(this.stationaryArm);
      const statLineGeo = new THREE4.BufferGeometry().setFromPoints([
        new THREE4.Vector3(0, 0, 7e-3),
        new THREE4.Vector3(0, -0.32, 7e-3)
      ]);
      const statLineMat = new THREE4.LineBasicMaterial({ color: 16777215 });
      this.stationaryArm.add(new THREE4.Line(statLineGeo, statLineMat));
      const movArmGroup = new THREE4.Group();
      this.group.add(movArmGroup);
      this.movableArm = movArmGroup;
      const movArmGeo = new THREE4.BoxGeometry(0.016, 0.32, 4e-3);
      movArmGeo.translate(0, -0.16, 9e-3);
      const movArmMat = new THREE4.MeshStandardMaterial({
        color: 1096065,
        emissive: 366185,
        emissiveIntensity: 0.6,
        metalness: 0.6,
        roughness: 0.15,
        transparent: true,
        opacity: 0.95,
        side: THREE4.DoubleSide
      });
      const movArmMesh = new THREE4.Mesh(movArmGeo, movArmMat);
      movArmGroup.add(movArmMesh);
      const centerLineGeo = new THREE4.BufferGeometry().setFromPoints([
        new THREE4.Vector3(0, 0, 0.012),
        new THREE4.Vector3(0, -0.32, 0.012)
      ]);
      const centerLineMat = new THREE4.LineBasicMaterial({ color: 16777215, linewidth: 2 });
      movArmGroup.add(new THREE4.Line(centerLineGeo, centerLineMat));
      const tipGeo = new THREE4.ConeGeometry(0.012, 0.024, 4);
      tipGeo.rotateZ(Math.PI);
      tipGeo.translate(0, -0.32, 9e-3);
      const tipMesh = new THREE4.Mesh(tipGeo, new THREE4.MeshBasicMaterial({ color: 3462041 }));
      movArmGroup.add(tipMesh);
      this.updateArc(30, 1);
    }
    updateArc(angleDeg, rotDirection = 1) {
      if (this.arcMesh) {
        this.group.remove(this.arcMesh);
        if (this.arcMesh.geometry) this.arcMesh.geometry.dispose();
      }
      const rad = THREE4.MathUtils.degToRad(Math.abs(angleDeg));
      if (rad < 5e-3) return;
      const shape = new THREE4.Shape();
      shape.moveTo(0, 0);
      const segments = 32;
      for (let i = 0; i <= segments; i++) {
        const theta = -Math.PI / 2 + rad * i / segments * rotDirection;
        shape.lineTo(Math.cos(theta) * 0.22, Math.sin(theta) * 0.22);
      }
      shape.lineTo(0, 0);
      const arcGeo = new THREE4.ShapeGeometry(shape);
      const arcMat = new THREE4.MeshBasicMaterial({
        color: 1357990,
        transparent: true,
        opacity: 0.42,
        side: THREE4.DoubleSide
      });
      this.arcMesh = new THREE4.Mesh(arcGeo, arcMat);
      this.arcMesh.position.set(0, 0, 3e-3);
      this.group.add(this.arcMesh);
    }
    updatePose(motionId, angleVal, fulcrumWorldPos, plane = "Sagittal") {
      if (!this.group.visible) return;
      let planeRot = new THREE4.Euler(0, 0, 0);
      let surfaceOffset = new THREE4.Vector3(0, 0, 0);
      let rotDirection = 1;
      switch (motionId) {
        // --------------------------------------------------
        // SHOULDER
        // --------------------------------------------------
        case "shoulder_flexion":
          planeRot.set(0, Math.PI / 2, 0);
          surfaceOffset.set(0.065, 0, 0);
          rotDirection = -1;
          break;
        case "shoulder_extension":
          planeRot.set(0, Math.PI / 2, 0);
          surfaceOffset.set(0.065, 0, 0);
          rotDirection = 1;
          break;
        case "shoulder_abduction":
          planeRot.set(0, 0, 0);
          surfaceOffset.set(0, 0, 0.065);
          rotDirection = 1;
          break;
        case "shoulder_adduction":
          planeRot.set(0, 0, 0);
          surfaceOffset.set(0, 0, 0.065);
          rotDirection = -1;
          break;
        case "shoulder_external_rotation":
        case "shoulder_internal_rotation":
          planeRot.set(0, Math.PI / 2, 0);
          surfaceOffset.set(0.065, 0, 0);
          rotDirection = motionId === "shoulder_external_rotation" ? -1 : 1;
          break;
        // --------------------------------------------------
        // ELBOW & FOREARM
        // --------------------------------------------------
        case "elbow_flexion":
          planeRot.set(0, Math.PI / 2, 0);
          surfaceOffset.set(0.055, 0, 0);
          rotDirection = -1;
          break;
        case "elbow_extension":
          planeRot.set(0, Math.PI / 2, 0);
          surfaceOffset.set(0.055, 0, 0);
          rotDirection = 1;
          break;
        case "forearm_pronation":
        case "forearm_supination":
          planeRot.set(0, 0, 0);
          surfaceOffset.set(0, 0, 0.045);
          rotDirection = motionId === "forearm_pronation" ? 1 : -1;
          break;
        // --------------------------------------------------
        // WRIST
        // --------------------------------------------------
        case "wrist_flexion":
          planeRot.set(0, Math.PI / 2, 0);
          surfaceOffset.set(0.045, 0, 0);
          rotDirection = -1;
          break;
        case "wrist_extension":
          planeRot.set(0, Math.PI / 2, 0);
          surfaceOffset.set(0.045, 0, 0);
          rotDirection = 1;
          break;
        case "wrist_radial_deviation":
          planeRot.set(0, 0, 0);
          surfaceOffset.set(0, 0, 0.04);
          rotDirection = 1;
          break;
        case "wrist_ulnar_deviation":
          planeRot.set(0, 0, 0);
          surfaceOffset.set(0, 0, 0.04);
          rotDirection = -1;
          break;
        // --------------------------------------------------
        // HIP
        // --------------------------------------------------
        case "hip_flexion":
          planeRot.set(0, Math.PI / 2, 0);
          surfaceOffset.set(0.075, 0, 0);
          rotDirection = -1;
          break;
        case "hip_extension":
          planeRot.set(0, Math.PI / 2, 0);
          surfaceOffset.set(0.075, 0, 0);
          rotDirection = 1;
          break;
        case "hip_abduction":
          planeRot.set(0, 0, 0);
          surfaceOffset.set(0, 0, 0.065);
          rotDirection = 1;
          break;
        case "hip_adduction":
          planeRot.set(0, 0, 0);
          surfaceOffset.set(0, 0, 0.065);
          rotDirection = -1;
          break;
        case "hip_internal_rotation":
        case "hip_external_rotation":
          planeRot.set(0, 0, 0);
          surfaceOffset.set(0, 0, 0.065);
          rotDirection = motionId === "hip_internal_rotation" ? 1 : -1;
          break;
        // --------------------------------------------------
        // KNEE
        // --------------------------------------------------
        case "knee_flexion":
          planeRot.set(0, Math.PI / 2, 0);
          surfaceOffset.set(0.065, 0, 0);
          rotDirection = 1;
          break;
        case "knee_extension":
          planeRot.set(0, Math.PI / 2, 0);
          surfaceOffset.set(0.065, 0, 0);
          rotDirection = -1;
          break;
        // --------------------------------------------------
        // ANKLE & FOOT
        // --------------------------------------------------
        case "ankle_dorsiflexion":
          planeRot.set(0, Math.PI / 2, 0);
          surfaceOffset.set(0.055, 0, 0);
          rotDirection = -1;
          break;
        case "ankle_plantarflexion":
          planeRot.set(0, Math.PI / 2, 0);
          surfaceOffset.set(0.055, 0, 0);
          rotDirection = 1;
          break;
        case "subtalar_inversion":
        case "subtalar_supination":
          planeRot.set(0, 0, 0);
          surfaceOffset.set(0, 0, -0.065);
          rotDirection = -1;
          break;
        case "subtalar_eversion":
        case "subtalar_pronation":
          planeRot.set(0, 0, 0);
          surfaceOffset.set(0, 0, -0.065);
          rotDirection = 1;
          break;
        case "first_mtp_extension":
        case "first_mtp_flexion":
          planeRot.set(0, Math.PI / 2, 0);
          surfaceOffset.set(-0.045, 0, 0);
          rotDirection = motionId === "first_mtp_extension" ? -1 : 1;
          break;
        // --------------------------------------------------
        // SPINE & TMJ
        // --------------------------------------------------
        case "cervical_flexion":
        case "thoracolumbar_flexion":
          planeRot.set(0, Math.PI / 2, 0);
          surfaceOffset.set(0.06, 0, 0);
          rotDirection = -1;
          break;
        case "cervical_extension":
        case "thoracolumbar_extension":
          planeRot.set(0, Math.PI / 2, 0);
          surfaceOffset.set(0.06, 0, 0);
          rotDirection = 1;
          break;
        case "cervical_lateral_flexion":
        case "thoracolumbar_lat_flexion":
          planeRot.set(0, 0, 0);
          surfaceOffset.set(0, 0, 0.08);
          rotDirection = 1;
          break;
        default:
          if (plane === "Sagittal") {
            planeRot.set(0, Math.PI / 2, 0);
            surfaceOffset.set(0.055, 0, 0);
            rotDirection = -1;
          } else if (plane === "Frontal") {
            planeRot.set(0, 0, 0);
            surfaceOffset.set(0, 0, 0.055);
            rotDirection = 1;
          } else {
            planeRot.set(Math.PI / 2, 0, 0);
            surfaceOffset.set(0, 0.055, 0);
            rotDirection = 1;
          }
      }
      this.group.position.copy(fulcrumWorldPos).add(surfaceOffset);
      this.group.rotation.copy(planeRot);
      const rad = THREE4.MathUtils.degToRad(angleVal);
      this.movableArm.rotation.z = rad * rotDirection;
      this.updateArc(angleVal, rotDirection);
    }
    setVisible(visible) {
      this.group.visible = visible;
    }
  };

  // js/simulation/arthrokinematics.js
  var THREE5 = window.THREE;
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
  var textureCache = /* @__PURE__ */ new Map();
  function getBadgeTexture(text, bgColor) {
    const key = `${text}_${bgColor}`;
    if (textureCache.has(key)) return textureCache.get(key);
    const canvas = document.createElement("canvas");
    canvas.width = 256;
    canvas.height = 72;
    const ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, 256, 72);
    drawRoundRect(ctx, 6, 6, 244, 60, 18);
    ctx.fillStyle = bgColor;
    ctx.fill();
    ctx.strokeStyle = "#ffffff";
    ctx.lineWidth = 3.5;
    ctx.stroke();
    ctx.fillStyle = "#ffffff";
    ctx.font = "bold 28px system-ui, -apple-system, sans-serif";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText(text, 128, 36);
    const texture = new THREE5.CanvasTexture(canvas);
    texture.minFilter = THREE5.LinearFilter;
    textureCache.set(key, texture);
    return texture;
  }
  var MOTION_ARTHRO_VECTORS = {
    // --- CERVICAL SPINE ---
    cervical_flexion: {
      roll: [0, 0.45, 0.89],
      slide: [0, -0.45, -0.89],
      isConcave: false,
      labelRoll: "Ant Roll",
      labelSlide: "Post Slide"
    },
    cervical_extension: {
      roll: [0, -0.45, -0.89],
      slide: [0, 0.45, 0.89],
      isConcave: false,
      labelRoll: "Post Roll",
      labelSlide: "Ant Slide"
    },
    cervical_lateral_flexion: {
      roll: [0.89, -0.45, 0],
      slide: [-0.89, 0.45, 0],
      isConcave: false,
      labelRoll: "Lat Roll",
      labelSlide: "Med Slide"
    },
    cervical_rotation: {
      roll: [0.92, 0, -0.38],
      slide: [-0.92, 0, 0.38],
      isConcave: false,
      labelRoll: "Rot Roll",
      labelSlide: "Rot Slide"
    },
    // --- THORACOLUMBAR SPINE ---
    thoracolumbar_flexion: {
      roll: [0, 0.45, 0.89],
      slide: [0, 0.65, 0.76],
      isConcave: true,
      labelRoll: "Ant Roll",
      labelSlide: "Sup-Ant Slide"
    },
    thoracolumbar_extension: {
      roll: [0, -0.45, -0.89],
      slide: [0, -0.65, -0.76],
      isConcave: true,
      labelRoll: "Post Roll",
      labelSlide: "Inf-Post Slide"
    },
    thoracolumbar_lat_flexion: {
      roll: [0.89, -0.45, 0],
      slide: [-0.89, 0.45, 0],
      isConcave: false,
      labelRoll: "Lat Roll",
      labelSlide: "Med Slide"
    },
    thoracolumbar_rotation: {
      roll: [0.92, 0, -0.38],
      slide: [0.92, 0, -0.38],
      isConcave: true,
      labelRoll: "Rot Roll",
      labelSlide: "Facet Slide"
    },
    // --- TMJ ---
    tmj_depression: {
      roll: [0, -0.3, -0.95],
      slide: [0, -0.5, 0.86],
      isConcave: false,
      labelRoll: "Post Roll",
      labelSlide: "Ant-Inf Slide"
    },
    // --- SHOULDER COMPLEX (Glenohumeral - Convex on Concave) ---
    shoulder_abduction: {
      roll: [0, 1, 0],
      slide: [0, -1, 0],
      isConcave: false,
      labelRoll: "Sup Roll",
      labelSlide: "Inf Slide"
    },
    shoulder_adduction: {
      roll: [0, -1, 0],
      slide: [0, 1, 0],
      isConcave: false,
      labelRoll: "Inf Roll",
      labelSlide: "Sup Slide"
    },
    shoulder_flexion: {
      roll: [0, 0.35, 0.94],
      slide: [0, -0.35, -0.94],
      isConcave: false,
      labelRoll: "Ant-Sup Roll",
      labelSlide: "Post-Inf Slide"
    },
    shoulder_extension: {
      roll: [0, -0.35, -0.94],
      slide: [0, 0.35, 0.94],
      isConcave: false,
      labelRoll: "Post-Inf Roll",
      labelSlide: "Ant-Sup Slide"
    },
    shoulder_external_rotation: {
      roll: [0.15, 0, -0.99],
      slide: [-0.15, 0, 0.99],
      isConcave: false,
      labelRoll: "Post Roll",
      labelSlide: "Ant Slide"
    },
    shoulder_internal_rotation: {
      roll: [-0.15, 0, 0.99],
      slide: [0.15, 0, -0.99],
      isConcave: false,
      labelRoll: "Ant Roll",
      labelSlide: "Post Slide"
    },
    // --- ELBOW & FOREARM (Concave on Convex / Radioulnar) ---
    elbow_flexion: {
      roll: [0, 0.65, 0.76],
      slide: [0, 0.65, 0.76],
      isConcave: true,
      labelRoll: "Ant Roll",
      labelSlide: "Ant Slide"
    },
    elbow_extension: {
      roll: [0, -0.65, -0.76],
      slide: [0, -0.65, -0.76],
      isConcave: true,
      labelRoll: "Post Roll",
      labelSlide: "Post Slide"
    },
    forearm_pronation: {
      roll: [-0.92, 0, 0.38],
      slide: [-0.92, 0, 0.38],
      isConcave: true,
      labelRoll: "Palmar Roll",
      labelSlide: "Palmar Slide"
    },
    forearm_supination: {
      roll: [0.92, 0, -0.38],
      slide: [0.92, 0, -0.38],
      isConcave: true,
      labelRoll: "Dorsal Roll",
      labelSlide: "Dorsal Slide"
    },
    // --- WRIST & HAND COMPLEX ---
    wrist_flexion: {
      roll: [0, 0.15, 0.99],
      slide: [0, -0.15, -0.99],
      isConcave: false,
      labelRoll: "Palmar Roll",
      labelSlide: "Dorsal Slide"
    },
    wrist_extension: {
      roll: [0, -0.15, -0.99],
      slide: [0, 0.15, 0.99],
      isConcave: false,
      labelRoll: "Dorsal Roll",
      labelSlide: "Palmar Slide"
    },
    wrist_radial_deviation: {
      roll: [0.99, 0.12, 0],
      slide: [-0.99, -0.12, 0],
      isConcave: false,
      labelRoll: "Radial Roll",
      labelSlide: "Ulnar Slide"
    },
    wrist_ulnar_deviation: {
      roll: [-0.99, -0.12, 0],
      slide: [0.99, 0.12, 0],
      isConcave: false,
      labelRoll: "Ulnar Roll",
      labelSlide: "Radial Slide"
    },
    thumb_cmc_abduction: {
      roll: [0.1, 0.2, 0.97],
      slide: [-0.1, -0.2, -0.97],
      isConcave: false,
      labelRoll: "Palmar Roll",
      labelSlide: "Dorsal Slide"
    },
    thumb_cmc_flexion: {
      roll: [-0.97, -0.15, 0.15],
      slide: [-0.97, -0.15, 0.15],
      isConcave: true,
      labelRoll: "Ulnar Roll",
      labelSlide: "Ulnar Slide"
    },
    thumb_opposition: {
      roll: [-0.7, 0.3, 0.65],
      slide: [0.7, -0.3, -0.65],
      isConcave: false,
      labelRoll: "Med-Ant Roll",
      labelSlide: "Lat-Post Slide"
    },
    // --- HIP JOINT (Convex on Concave) ---
    hip_flexion: {
      roll: [0, 0.55, 0.83],
      slide: [0, -0.55, -0.83],
      isConcave: false,
      labelRoll: "Ant-Sup Roll",
      labelSlide: "Post-Inf Slide"
    },
    hip_extension: {
      roll: [0, -0.55, -0.83],
      slide: [0, 0.55, 0.83],
      isConcave: false,
      labelRoll: "Post-Inf Roll",
      labelSlide: "Ant-Sup Slide"
    },
    hip_abduction: {
      roll: [0.75, 0.66, 0],
      slide: [-0.75, -0.66, 0],
      isConcave: false,
      labelRoll: "Sup-Lat Roll",
      labelSlide: "Inf-Med Slide"
    },
    hip_adduction: {
      roll: [-0.75, -0.66, 0],
      slide: [0.75, 0.66, 0],
      isConcave: false,
      labelRoll: "Inf-Med Roll",
      labelSlide: "Sup-Lat Slide"
    },
    hip_external_rotation: {
      roll: [0.2, 0, -0.98],
      slide: [-0.2, 0, 0.98],
      isConcave: false,
      labelRoll: "Post Roll",
      labelSlide: "Ant Slide"
    },
    hip_internal_rotation: {
      roll: [-0.2, 0, 0.98],
      slide: [0.2, 0, -0.98],
      isConcave: false,
      labelRoll: "Ant Roll",
      labelSlide: "Post Slide"
    },
    // --- KNEE JOINT (Open Chain: Concave on Convex) ---
    knee_flexion: {
      roll: [0, 0.45, -0.89],
      slide: [0, 0.45, -0.89],
      isConcave: true,
      labelRoll: "Post Roll",
      labelSlide: "Post Slide"
    },
    knee_extension: {
      roll: [0, 0.45, 0.89],
      slide: [0, 0.45, 0.89],
      isConcave: true,
      labelRoll: "Ant Roll",
      labelSlide: "Ant Slide"
    },
    // --- ANKLE & FOOT COMPLEX ---
    ankle_dorsiflexion: {
      roll: [0, 0.35, 0.94],
      slide: [0, -0.35, -0.94],
      isConcave: false,
      labelRoll: "Ant Roll",
      labelSlide: "Post Slide"
    },
    ankle_plantarflexion: {
      roll: [0, -0.35, -0.94],
      slide: [0, 0.35, 0.94],
      isConcave: false,
      labelRoll: "Post Roll",
      labelSlide: "Ant Slide"
    },
    subtalar_inversion: {
      roll: [-0.88, 0.35, -0.32],
      slide: [0.88, -0.35, 0.32],
      isConcave: false,
      labelRoll: "Medial Roll",
      labelSlide: "Lateral Slide"
    },
    subtalar_eversion: {
      roll: [0.88, -0.35, 0.32],
      slide: [-0.88, 0.35, -0.32],
      isConcave: false,
      labelRoll: "Lateral Roll",
      labelSlide: "Medial Slide"
    },
    subtalar_pronation: {
      roll: [0.82, 0.3, 0.48],
      slide: [-0.82, -0.3, -0.48],
      isConcave: false,
      labelRoll: "Evert-Ant Roll",
      labelSlide: "Invert-Post Slide"
    },
    subtalar_supination: {
      roll: [-0.82, -0.3, -0.48],
      slide: [0.82, 0.3, 0.48],
      isConcave: false,
      labelRoll: "Invert-Post Roll",
      labelSlide: "Evert-Ant Slide"
    },
    first_mtp_extension: {
      roll: [0, 0.85, -0.53],
      slide: [0, 0.85, -0.53],
      isConcave: true,
      labelRoll: "Dorsal Roll",
      labelSlide: "Dorsal Slide"
    },
    first_mtp_flexion: {
      roll: [0, -0.85, 0.53],
      slide: [0, -0.85, 0.53],
      isConcave: true,
      labelRoll: "Plantar Roll",
      labelSlide: "Plantar Slide"
    }
  };
  var ArthrokinematicsVisualizer = class {
    constructor(scene) {
      this.scene = scene;
      this.group = new THREE5.Group();
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
      const contactGeo = new THREE5.SphereGeometry(0.018, 16, 16);
      const contactMat = new THREE5.MeshBasicMaterial({
        color: 3718648,
        depthTest: false
      });
      this.contactPointMesh = new THREE5.Mesh(contactGeo, contactMat);
      this.contactPointMesh.renderOrder = 997;
      this.group.add(this.contactPointMesh);
      const rollDir = new THREE5.Vector3(0, 1, 0);
      this.rollArrow = new THREE5.ArrowHelper(rollDir, new THREE5.Vector3(0, 0, 0), 0.13, 1096065, 0.04, 0.024);
      this.rollArrow.line.material.depthTest = false;
      this.rollArrow.line.renderOrder = 998;
      this.rollArrow.cone.material.depthTest = false;
      this.rollArrow.cone.renderOrder = 998;
      this.group.add(this.rollArrow);
      const slideDir = new THREE5.Vector3(0, -1, 0);
      this.slideArrow = new THREE5.ArrowHelper(slideDir, new THREE5.Vector3(0, 0, 0), 0.13, 16007006, 0.04, 0.024);
      this.slideArrow.line.material.depthTest = false;
      this.slideArrow.line.renderOrder = 998;
      this.slideArrow.cone.material.depthTest = false;
      this.slideArrow.cone.renderOrder = 998;
      this.group.add(this.slideArrow);
      const rollSpriteMat = new THREE5.SpriteMaterial({
        map: getBadgeTexture("ROLL", "#059669"),
        depthTest: false,
        depthWrite: false
      });
      this.rollSprite = new THREE5.Sprite(rollSpriteMat);
      this.rollSprite.scale.set(0.072, 0.024, 1);
      this.rollSprite.renderOrder = 1e3;
      this.group.add(this.rollSprite);
      const slideSpriteMat = new THREE5.SpriteMaterial({
        map: getBadgeTexture("SLIDE", "#e11d48"),
        depthTest: false,
        depthWrite: false
      });
      this.slideSprite = new THREE5.Sprite(slideSpriteMat);
      this.slideSprite.scale.set(0.072, 0.024, 1);
      this.slideSprite.renderOrder = 1e3;
      this.group.add(this.slideSprite);
    }
    update(jointPos, motionData, currentDeg) {
      if (!this.group.visible) return;
      this.group.position.copy(jointPos);
      const motionId = motionData?.id || "";
      const config = MOTION_ARTHRO_VECTORS[motionId];
      let rollDir = new THREE5.Vector3(0, 1, 0);
      let slideDir = new THREE5.Vector3(0, -1, 0);
      let labelRoll = "ROLL";
      let labelSlide = "SLIDE";
      let isSame = false;
      if (config) {
        rollDir.fromArray(config.roll).normalize();
        slideDir.fromArray(config.slide).normalize();
        labelRoll = config.labelRoll || "ROLL";
        labelSlide = config.labelSlide || "SLIDE";
        isSame = config.isConcave || rollDir.dot(slideDir) > 0.7;
      } else {
        const isConcave = motionData?.arthrokinematics?.rule?.toLowerCase().includes("concave");
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
      const pulse = 0.12 + Math.sin(Date.now() * 5e-3) * 0.015;
      if (isSame) {
        let perp = new THREE5.Vector3().crossVectors(rollDir, new THREE5.Vector3(0, 1, 0));
        if (perp.lengthSq() < 1e-3) {
          perp.crossVectors(rollDir, new THREE5.Vector3(1, 0, 0));
        }
        perp.normalize().multiplyScalar(0.034);
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
      let rollDist = pulse + 0.038;
      let slideDist = pulse + 0.038;
      if (isSame) {
        rollDist = pulse + 0.052;
        slideDist = pulse + 0.022;
      }
      this.rollSprite.material.map = getBadgeTexture(labelRoll, "#059669");
      this.rollSprite.position.copy(this.rollArrow.position).addScaledVector(rollDir, rollDist);
      this.slideSprite.material.map = getBadgeTexture(labelSlide, "#e11d48");
      this.slideSprite.position.copy(this.slideArrow.position).addScaledVector(slideDir, slideDist);
    }
    setVisible(visible) {
      this.group.visible = visible;
    }
  };

  // js/ui/controls.js
  var ControlsManager = class {
    constructor(app) {
      this.app = app;
      this.isPlaying = false;
      this.playbackSpeed = 1;
      this.animStartTime = 0;
      this.animFrameId = null;
      this.initElements();
      this.attachEventListeners();
    }
    initElements() {
      this.slider = document.getElementById("rom-slider");
      this.angleDisplay = document.getElementById("current-angle-val");
      this.angleUnit = document.getElementById("current-angle-unit");
      this.playBtn = document.getElementById("btn-play-pause");
      this.speedSelect = document.getElementById("speed-select");
      this.regionSelect = document.getElementById("region-select");
      this.motionSelect = document.getElementById("motion-select");
      this.pathologySelect = document.getElementById("pathology-select");
      this.toggleGoniometer = document.getElementById("toggle-goniometer");
      this.toggleArthro = document.getElementById("toggle-arthro");
      this.camButtons = document.querySelectorAll(".cam-btn");
      this.rangeBadge = document.getElementById("range-status-badge");
      this.rhythmPanel = document.getElementById("scapular-rhythm-panel");
      this.toggleLockScapula = document.getElementById("toggle-lock-scapula");
      this.ghDegVal = document.getElementById("gh-deg-val");
      this.stDegVal = document.getElementById("st-deg-val");
      this.ghProgressFill = document.getElementById("gh-progress-fill");
      this.stProgressFill = document.getElementById("st-progress-fill");
      this.impingementAlert = document.getElementById("impingement-alert");
      this.pathologyAlert = document.getElementById("pathology-alert");
      this.pathologyAlertTitle = document.getElementById("pathology-alert-title");
      this.pathologyAlertBadge = document.getElementById("pathology-alert-badge");
      this.pathologyAlertDesc = document.getElementById("pathology-alert-desc");
      this.footPanel = document.getElementById("foot-biomechanics-panel");
      this.toggleWb = document.getElementById("toggle-weight-bearing");
      this.footCouplingBadge = document.getElementById("foot-coupling-badge");
      this.footFrontalVal = document.getElementById("foot-frontal-val");
      this.footTransverseVal = document.getElementById("foot-transverse-val");
      this.footSagittalVal = document.getElementById("foot-sagittal-val");
      this.tnccStatusPill = document.getElementById("tncc-status-pill");
      this.tnccAxesVal = document.getElementById("tncc-axes-val");
      this.tibialRotVal = document.getElementById("tibial-rot-val");
      this.fasciaProgressFill = document.getElementById("fascia-progress-fill");
      this.fasciaPercentVal = document.getElementById("fascia-percent-val");
      this.mlaHeightVal = document.getElementById("mla-height-val");
      this.handPanel = document.getElementById("hand-biomechanics-panel");
      this.toggleTenodesis = document.getElementById("toggle-tenodesis");
      this.saddleRuleName = document.getElementById("saddle-rule-name");
      this.handRollVal = document.getElementById("hand-roll-val");
      this.handSlideVal = document.getElementById("hand-slide-val");
      this.vectorRelationSymbol = document.getElementById("vector-relation-symbol");
      this.tenodesisStatusPill = document.getElementById("tenodesis-status-pill");
      this.tenodesisDescVal = document.getElementById("tenodesis-desc-val");
      this.gripButtons = document.querySelectorAll(".grip-btn");
    }
    attachEventListeners() {
      if (this.toggleLockScapula) {
        this.toggleLockScapula.addEventListener("change", (e) => {
          const locked = e.target.checked;
          this.app.kinematics.setScapulaLocked(locked);
          this.app.setAngle(this.app.currentAngle, false);
          this.updateScapularRhythmUI(this.app.currentAngle, this.app.currentMotion);
        });
      }
      if (this.toggleWb) {
        this.toggleWb.addEventListener("change", (e) => {
          this.app.kinematics.setWeightBearing(e.target.checked);
          this.app.setAngle(this.app.currentAngle, false);
        });
      }
      if (this.toggleTenodesis) {
        this.toggleTenodesis.addEventListener("change", (e) => {
          this.app.kinematics.setTenodesis(e.target.checked);
          this.app.setAngle(this.app.currentAngle, false);
        });
      }
      this.gripButtons.forEach((btn) => {
        btn.addEventListener("click", () => {
          const grip = btn.getAttribute("data-grip");
          const isCurrentActive = btn.classList.contains("active");
          this.gripButtons.forEach((b) => b.classList.remove("active"));
          if (isCurrentActive) {
            this.app.kinematics.setGrip("none");
          } else {
            btn.classList.add("active");
            this.app.kinematics.setGrip(grip);
          }
          this.app.setAngle(this.app.currentAngle, false);
          if (window.innerWidth <= 768) {
            setTimeout(() => {
              if (this.handPanel && !this.handPanel.classList.contains("collapsed")) {
                this.handPanel.classList.add("collapsed");
                const textSpan = this.handPanel.querySelector(".collapse-text");
                if (textSpan) textSpan.textContent = "\u0E02\u0E22\u0E32\u0E22";
              }
            }, 350);
          }
        });
      });
      document.querySelectorAll(".hud-collapse-btn").forEach((btn) => {
        btn.addEventListener("click", (e) => {
          e.stopPropagation();
          const targetId = btn.getAttribute("data-target");
          const panel = document.getElementById(targetId);
          if (!panel) return;
          const isCollapsed = panel.classList.toggle("collapsed");
          const textSpan = btn.querySelector(".collapse-text");
          if (textSpan) {
            textSpan.textContent = isCollapsed ? "\u0E02\u0E22\u0E32\u0E22" : "\u0E0B\u0E48\u0E2D\u0E19";
          }
        });
      });
      [this.rhythmPanel, this.footPanel, this.handPanel].forEach((panel) => {
        if (!panel) return;
        const header = panel.querySelector(".hud-header, .rhythm-header");
        if (header) {
          header.addEventListener("click", (e) => {
            if (e.target.closest("input, button, label")) return;
            const btn = header.querySelector(".hud-collapse-btn");
            if (btn) btn.click();
          });
        }
      });
      const canvas = document.querySelector("#viewport canvas");
      if (canvas) {
        canvas.addEventListener("pointerdown", () => {
          if (window.innerWidth <= 768) {
            [this.rhythmPanel, this.footPanel, this.handPanel].forEach((panel) => {
              if (panel && !panel.classList.contains("hidden") && !panel.classList.contains("collapsed")) {
                panel.classList.add("collapsed");
                const textSpan = panel.querySelector(".collapse-text");
                if (textSpan) textSpan.textContent = "\u0E02\u0E22\u0E32\u0E22";
              }
            });
          }
        });
      }
      this.slider.addEventListener("input", (e) => {
        let val = parseFloat(e.target.value);
        if (this.app.activeRestriction) {
          if (this.app.activeRestriction.max !== void 0 && val > this.app.activeRestriction.max) {
            val = this.app.activeRestriction.max;
            this.slider.value = val;
          }
          if (this.app.activeRestriction.min !== void 0 && val < this.app.activeRestriction.min) {
            val = this.app.activeRestriction.min;
            this.slider.value = val;
          }
        }
        this.app.setAngle(val, false);
        if (this.isPlaying) this.pause();
      });
      this.playBtn.addEventListener("click", () => {
        if (this.isPlaying) {
          this.pause();
        } else {
          this.play();
        }
      });
      this.speedSelect.addEventListener("change", (e) => {
        this.playbackSpeed = parseFloat(e.target.value);
      });
      this.regionSelect.addEventListener("change", (e) => {
        this.app.onRegionChange(e.target.value);
      });
      this.motionSelect.addEventListener("change", (e) => {
        this.app.onMotionChange(e.target.value);
      });
      this.pathologySelect.addEventListener("change", (e) => {
        this.app.onPathologyChange(e.target.value);
      });
      this.toggleGoniometer.addEventListener("change", (e) => {
        this.app.goniometer.setVisible(e.target.checked);
      });
      this.toggleArthro.addEventListener("change", (e) => {
        this.app.arthrokinematics.setVisible(e.target.checked);
      });
      this.camButtons.forEach((btn) => {
        btn.addEventListener("click", (e) => {
          const preset = btn.getAttribute("data-cam");
          this.camButtons.forEach((b) => b.classList.remove("active"));
          btn.classList.add("active");
          this.app.setCameraPreset(preset);
        });
      });
    }
    updateSliderRange(motionData) {
      this.slider.min = motionData.sliderMin;
      this.slider.max = motionData.sliderMax;
      this.slider.step = motionData.unit === "mm" ? "0.5" : "1";
      this.slider.value = motionData.normalMin;
      this.angleUnit.textContent = motionData.unit === "mm" ? "mm" : "\xB0";
      this.updateValueDisplay(motionData.normalMin, motionData);
    }
    updateScapularRhythmUI(val, motionData) {
      if (!this.rhythmPanel) return;
      const isShoulderElevation = motionData && (motionData.id === "shoulder_abduction" || motionData.id === "shoulder_flexion");
      if (isShoulderElevation) {
        if (this.rhythmPanel.classList.contains("hidden")) {
          this.rhythmPanel.classList.remove("hidden");
          if (window.innerWidth <= 768) {
            this.rhythmPanel.classList.add("collapsed");
            const t = this.rhythmPanel.querySelector(".collapse-text");
            if (t) t.textContent = "\u0E02\u0E22\u0E32\u0E22";
          }
        }
        const bd = this.app.kinematics.getScapulohumeralBreakdown(val);
        if (this.ghDegVal) this.ghDegVal.textContent = `${bd.ghDeg}\xB0 / 120\xB0`;
        if (this.stDegVal) {
          this.stDegVal.textContent = bd.isLocked ? "0\xB0 (\u{1F512} LOCKED)" : `${bd.stDeg}\xB0 / 60\xB0`;
        }
        if (this.ghProgressFill) {
          this.ghProgressFill.style.width = `${Math.min(100, bd.ghDeg / 120 * 100)}%`;
        }
        if (this.stProgressFill) {
          this.stProgressFill.style.width = `${Math.min(100, bd.stDeg / 60 * 100)}%`;
        }
        if (bd.isImpinging) {
          if (this.impingementAlert) this.impingementAlert.classList.remove("hidden");
          if (this.rangeBadge) {
            this.rangeBadge.className = "status-badge status-risk";
            this.rangeBadge.textContent = "\u{1F6A8} Subacromial Impingement!";
          }
        } else {
          if (this.impingementAlert) this.impingementAlert.classList.add("hidden");
        }
      } else {
        this.rhythmPanel.classList.add("hidden");
        if (this.impingementAlert) this.impingementAlert.classList.add("hidden");
      }
    }
    updateFootBiomechanicsUI(val, motionData) {
      if (!this.footPanel) return;
      const isFootMotion = motionData && (motionData.region === "ankle_foot" || motionData.id.startsWith("subtalar") || motionData.id.startsWith("first_mtp") || motionData.id.startsWith("ankle"));
      if (isFootMotion) {
        if (this.footPanel.classList.contains("hidden")) {
          this.footPanel.classList.remove("hidden");
          if (window.innerWidth <= 768) {
            this.footPanel.classList.add("collapsed");
            const t = this.footPanel.querySelector(".collapse-text");
            if (t) t.textContent = "\u0E02\u0E22\u0E32\u0E22";
          }
        }
        const state = this.app.kinematics.getFootBiomechanicsState(val, motionData.id);
        if (!state) return;
        if (this.footFrontalVal) {
          const dir = state.isPronation ? "Eversion" : state.isSupination ? "Inversion" : "Frontal";
          this.footFrontalVal.textContent = `${state.frontalDeg}\xB0 ${dir}`;
        }
        if (this.footTransverseVal) {
          const dir = state.isPronation ? "Abduction" : state.isSupination ? "Adduction" : "Transverse";
          this.footTransverseVal.textContent = `${state.transverseDeg}\xB0 ${dir}`;
        }
        if (this.footSagittalVal) {
          const dir = state.isPronation ? "Dorsiflexion" : state.isSupination ? "Plantarflexion" : "Sagittal";
          this.footSagittalVal.textContent = `${state.sagittalDeg}\xB0 ${dir}`;
        }
        if (this.tnccStatusPill) {
          this.tnccStatusPill.className = `status-pill ${state.tnccLocked ? "status-locked" : "status-unlocked"}`;
          this.tnccStatusPill.textContent = state.tnccStatusText;
        }
        if (this.tnccAxesVal) {
          this.tnccAxesVal.textContent = state.tnccAxesText;
        }
        if (this.tibialRotVal) {
          this.tibialRotVal.textContent = state.tibialRotType;
        }
        if (this.fasciaProgressFill) {
          this.fasciaProgressFill.style.width = `${state.fasciaTensionPercent}%`;
        }
        if (this.fasciaPercentVal) {
          this.fasciaPercentVal.textContent = `${state.fasciaTensionPercent}%`;
        }
        if (this.mlaHeightVal) {
          this.mlaHeightVal.textContent = `${state.mlaHeightMm} mm`;
        }
      } else {
        this.footPanel.classList.add("hidden");
      }
    }
    updateHandBiomechanicsUI(val, motionData) {
      if (!this.handPanel) return;
      const isHandMotion = motionData && (motionData.region === "wrist" || motionData.id.startsWith("wrist") || motionData.id.startsWith("thumb"));
      if (isHandMotion) {
        if (this.handPanel.classList.contains("hidden")) {
          this.handPanel.classList.remove("hidden");
          if (window.innerWidth <= 768) {
            this.handPanel.classList.add("collapsed");
            const t = this.handPanel.querySelector(".collapse-text");
            if (t) t.textContent = "\u0E02\u0E22\u0E32\u0E22";
          }
        }
        const state = this.app.kinematics.getHandBiomechanicsState(val, motionData.id);
        if (!state) return;
        if (this.saddleRuleName) this.saddleRuleName.textContent = state.arthroRule;
        if (this.handRollVal) this.handRollVal.textContent = state.rollDir;
        if (this.handSlideVal) this.handSlideVal.textContent = state.slideDir;
        if (this.vectorRelationSymbol) {
          this.vectorRelationSymbol.textContent = state.isOpposite ? "\u2260 OPPOSITE" : "= SAME DIR";
          this.vectorRelationSymbol.style.color = state.isOpposite ? "#f59e0b" : "#34d399";
        }
        if (this.tenodesisStatusPill) {
          this.tenodesisStatusPill.textContent = state.isTenodesisPassive ? "\u{1F517} Tenodesis Active" : "\u26AA Tenodesis Disabled";
        }
        if (this.tenodesisDescVal) {
          this.tenodesisDescVal.textContent = state.tenodesisStatusText;
        }
      } else {
        this.handPanel.classList.add("hidden");
      }
    }
    updateValueDisplay(val, motionData) {
      this.angleDisplay.textContent = Math.round(val * 10) / 10;
      this.updateScapularRhythmUI(val, motionData);
      this.updateFootBiomechanicsUI(val, motionData);
      this.updateHandBiomechanicsUI(val, motionData);
      if (this.app.activeRestriction) {
        this.rangeBadge.className = "status-badge status-risk";
        this.rangeBadge.textContent = `\u{1F512} ${this.app.activeRestriction.label}`;
        return;
      }
      const isImpinging = this.app.kinematics && this.app.kinematics.isImpinging;
      if (!isImpinging) {
        if (val < motionData.normalMin) {
          this.rangeBadge.className = "status-badge status-subnormal";
          this.rangeBadge.textContent = "Restricted / Hypomobile";
        } else if (val <= motionData.normalMax) {
          this.rangeBadge.className = "status-badge status-normal";
          this.rangeBadge.textContent = "Normal Physiological Range";
        } else if (val <= motionData.hypermobilityThreshold) {
          this.rangeBadge.className = "status-badge status-hyper";
          this.rangeBadge.textContent = "Hypermobility / Laxity Zone";
        } else {
          this.rangeBadge.className = "status-badge status-risk";
          this.rangeBadge.textContent = "Excessive / Impingement Risk";
        }
      }
    }
    showPathologyAlert(pathology, restriction) {
      if (!this.pathologyAlert) return;
      this.pathologyAlert.classList.remove("hidden");
      if (this.pathologyAlertTitle) {
        this.pathologyAlertTitle.textContent = `\u{1F512} ${pathology.name}`;
      }
      if (this.pathologyAlertBadge) {
        const limitTxt = restriction.max !== void 0 ? `LOCKED AT ${restriction.max}\xB0` : `RESTRICTED`;
        this.pathologyAlertBadge.textContent = limitTxt;
      }
      if (this.pathologyAlertDesc) {
        this.pathologyAlertDesc.textContent = restriction.explanation;
      }
    }
    clearPathologyAlert() {
      if (this.pathologyAlert) {
        this.pathologyAlert.classList.add("hidden");
      }
    }
    play() {
      this.isPlaying = true;
      this.playBtn.innerHTML = `
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <rect x="6" y="4" width="4" height="16"/>
        <rect x="14" y="4" width="4" height="16"/>
      </svg>
      <span>Pause</span>
    `;
      this.playBtn.classList.add("btn-active");
      this.animStartTime = performance.now();
      this.runAnimation();
    }
    pause() {
      this.isPlaying = false;
      this.playBtn.innerHTML = `
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <polygon points="5 3 19 12 5 21 5 3"/>
      </svg>
      <span>Play Loop</span>
    `;
      this.playBtn.classList.remove("btn-active");
      if (this.animFrameId) cancelAnimationFrame(this.animFrameId);
    }
    runAnimation() {
      if (!this.isPlaying) return;
      const motionData = this.app.currentMotion;
      let min = motionData.normalMin;
      let max = motionData.normalMax;
      if (this.app.activeRestriction) {
        if (this.app.activeRestriction.max !== void 0) max = this.app.activeRestriction.max;
        if (this.app.activeRestriction.min !== void 0) min = this.app.activeRestriction.min;
      }
      const range = max - min;
      const elapsedSec = (performance.now() - this.animStartTime) / 1e3;
      const frequency = 0.35 * this.playbackSpeed;
      const progress = (1 - Math.cos(2 * Math.PI * frequency * elapsedSec)) / 2;
      const currentVal = min + progress * range;
      this.slider.value = currentVal;
      this.app.setAngle(currentVal, true);
      this.animFrameId = requestAnimationFrame(() => this.runAnimation());
    }
    resetGripButtons() {
      if (this.gripButtons) {
        this.gripButtons.forEach((b) => b.classList.remove("active"));
      }
    }
  };

  // js/data/arthrokinematicsData.js
  var ARTHRO_ACTION_DATA = {
    // =================== SHOULDER ===================
    shoulder_abduction: {
      rule: "Convex-on-Concave (\u0E2B\u0E31\u0E27\u0E01\u0E23\u0E30\u0E14\u0E39\u0E01\u0E19\u0E39\u0E19\u0E1A\u0E19\u0E40\u0E1A\u0E49\u0E32\u0E40\u0E27\u0E49\u0E32: \u0E17\u0E34\u0E28\u0E17\u0E32\u0E07\u0E2A\u0E27\u0E19\u0E01\u0E31\u0E19 \u21C4)",
      vectors: [
        { label: "Roll (\u0E01\u0E25\u0E34\u0E49\u0E07)", value: "\u2B06\uFE0F Superior (\u0E02\u0E36\u0E49\u0E19\u0E14\u0E49\u0E32\u0E19\u0E1A\u0E19)" },
        { label: "Slide (\u0E44\u0E16\u0E25)", value: "\u2B07\uFE0F Inferior (\u0E25\u0E07\u0E14\u0E49\u0E32\u0E19\u0E25\u0E48\u0E32\u0E07)" }
      ],
      clinicalWhy: "\u26A0\uFE0F \u0E1B\u0E49\u0E2D\u0E07\u0E01\u0E31\u0E19\u0E01\u0E32\u0E23\u0E0A\u0E19 (Impingement): \u0E2B\u0E32\u0E01\u0E02\u0E32\u0E14\u0E01\u0E32\u0E23 Slide \u0E25\u0E07\u0E25\u0E48\u0E32\u0E07 \u0E2B\u0E31\u0E27\u0E01\u0E23\u0E30\u0E14\u0E39\u0E01\u0E08\u0E30\u0E25\u0E2D\u0E22\u0E02\u0E36\u0E49\u0E19\u0E0A\u0E19\u0E02\u0E2D\u0E1A Acromion \u0E17\u0E35\u0E48 22\xB0 \u0E08\u0E19\u0E40\u0E2D\u0E47\u0E19 Supraspinatus \u0E09\u0E35\u0E01\u0E02\u0E32\u0E14",
      mobilization: "\u{1FA7A} Inferior Glide (\u0E01\u0E14\u0E2B\u0E31\u0E27\u0E01\u0E23\u0E30\u0E14\u0E39\u0E01\u0E25\u0E07\u0E25\u0E48\u0E32\u0E07): \u0E14\u0E31\u0E19\u0E2B\u0E31\u0E27\u0E01\u0E23\u0E30\u0E14\u0E39\u0E01\u0E15\u0E49\u0E19\u0E41\u0E02\u0E19\u0E25\u0E07\u0E25\u0E48\u0E32\u0E07 \u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E22\u0E37\u0E14\u0E41\u0E04\u0E1B\u0E0B\u0E39\u0E25\u0E14\u0E49\u0E32\u0E19\u0E25\u0E48\u0E32\u0E07\u0E41\u0E25\u0E30\u0E40\u0E1E\u0E34\u0E48\u0E21\u0E2D\u0E07\u0E28\u0E32\u0E01\u0E32\u0E23\u0E01\u0E32\u0E07\u0E41\u0E02\u0E19"
    },
    shoulder_adduction: {
      rule: "Convex-on-Concave (\u0E2B\u0E31\u0E27\u0E01\u0E23\u0E30\u0E14\u0E39\u0E01\u0E19\u0E39\u0E19\u0E1A\u0E19\u0E40\u0E1A\u0E49\u0E32\u0E40\u0E27\u0E49\u0E32: \u0E17\u0E34\u0E28\u0E17\u0E32\u0E07\u0E2A\u0E27\u0E19\u0E01\u0E31\u0E19 \u21C4)",
      vectors: [
        { label: "Roll (\u0E01\u0E25\u0E34\u0E49\u0E07)", value: "\u2B07\uFE0F Inferior (\u0E25\u0E07\u0E14\u0E49\u0E32\u0E19\u0E25\u0E48\u0E32\u0E07)" },
        { label: "Slide (\u0E44\u0E16\u0E25)", value: "\u2B06\uFE0F Superior (\u0E02\u0E36\u0E49\u0E19\u0E14\u0E49\u0E32\u0E19\u0E1A\u0E19)" }
      ],
      clinicalWhy: "\u0E04\u0E37\u0E19\u0E41\u0E02\u0E19\u0E01\u0E25\u0E31\u0E1A\u0E40\u0E02\u0E49\u0E32\u0E2A\u0E39\u0E48\u0E41\u0E19\u0E27\u0E41\u0E01\u0E19\u0E25\u0E33\u0E15\u0E31\u0E27 \u0E2D\u0E32\u0E28\u0E31\u0E22\u0E41\u0E23\u0E07\u0E42\u0E19\u0E49\u0E21\u0E16\u0E48\u0E27\u0E07\u0E41\u0E25\u0E30\u0E01\u0E25\u0E49\u0E32\u0E21\u0E40\u0E19\u0E37\u0E49\u0E2D Pectoralis major / Latissimus dorsi",
      mobilization: "\u{1FA7A} Superior Glide (\u0E14\u0E31\u0E19\u0E2B\u0E31\u0E27\u0E01\u0E23\u0E30\u0E14\u0E39\u0E01\u0E02\u0E36\u0E49\u0E19\u0E1A\u0E19): \u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E04\u0E25\u0E32\u0E22\u0E41\u0E04\u0E1B\u0E0B\u0E39\u0E25\u0E14\u0E49\u0E32\u0E19\u0E1A\u0E19"
    },
    shoulder_flexion: {
      rule: "Spin + Scapulohumeral Rhythm (\u0E2A\u0E31\u0E14\u0E2A\u0E48\u0E27\u0E19 2:1)",
      vectors: [
        { label: "Spin (\u0E04\u0E27\u0E07\u0E2A\u0E27\u0E48\u0E32\u0E19)", value: "\u{1F300} \u0E2B\u0E21\u0E38\u0E19\u0E23\u0E2D\u0E1A\u0E41\u0E01\u0E19 ML \u0E2D\u0E22\u0E39\u0E48\u0E01\u0E31\u0E1A\u0E17\u0E35\u0E48" },
        { label: "Slide", value: "\u2199\uFE0F Postero-inferior \u0E0A\u0E48\u0E27\u0E07\u0E1B\u0E25\u0E32\u0E22" }
      ],
      clinicalWhy: "\u0E17\u0E38\u0E01 \u0E46 3\xB0 \u0E17\u0E35\u0E48\u0E22\u0E01\u0E41\u0E02\u0E19 \u0E08\u0E30\u0E40\u0E01\u0E34\u0E14\u0E17\u0E35\u0E48\u0E02\u0E49\u0E2D\u0E44\u0E2B\u0E25\u0E48 2\xB0 \u0E41\u0E25\u0E30\u0E2A\u0E30\u0E1A\u0E31\u0E01\u0E2B\u0E21\u0E38\u0E19\u0E02\u0E36\u0E49\u0E19 1\xB0 (Serratus anterior & Trapezius force-couple)",
      mobilization: "\u{1FA7A} Postero-inferior Glide: \u0E14\u0E31\u0E19\u0E2B\u0E31\u0E27\u0E01\u0E23\u0E30\u0E14\u0E39\u0E01\u0E44\u0E1B\u0E17\u0E32\u0E07\u0E14\u0E49\u0E32\u0E19\u0E2B\u0E25\u0E31\u0E07\u0E41\u0E25\u0E30\u0E25\u0E48\u0E32\u0E07 \u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E40\u0E1E\u0E34\u0E48\u0E21\u0E21\u0E38\u0E21\u0E07\u0E2D\u0E41\u0E02\u0E19\u0E44\u0E1B\u0E02\u0E49\u0E32\u0E07\u0E2B\u0E19\u0E49\u0E32"
    },
    shoulder_extension: {
      rule: "Spin \u0E1A\u0E19\u0E40\u0E1A\u0E49\u0E32 Glenoid",
      vectors: [
        { label: "Spin (\u0E04\u0E27\u0E07\u0E2A\u0E27\u0E48\u0E32\u0E19)", value: "\u{1F300} \u0E2B\u0E21\u0E38\u0E19\u0E23\u0E2D\u0E1A\u0E41\u0E01\u0E19 ML" },
        { label: "Slide", value: "\u2197\uFE0F Anterior \u0E40\u0E25\u0E47\u0E01\u0E19\u0E49\u0E2D\u0E22" }
      ],
      clinicalWhy: "\u0E40\u0E2D\u0E37\u0E49\u0E2D\u0E21\u0E21\u0E37\u0E2D\u0E44\u0E1B\u0E14\u0E49\u0E32\u0E19\u0E2B\u0E25\u0E31\u0E07 \u0E25\u0E34\u0E21\u0E34\u0E15\u0E42\u0E14\u0E22 Anterior capsule \u0E41\u0E25\u0E30\u0E01\u0E25\u0E49\u0E32\u0E21\u0E40\u0E19\u0E37\u0E49\u0E2D\u0E14\u0E49\u0E32\u0E19\u0E2B\u0E19\u0E49\u0E32",
      mobilization: "\u{1FA7A} Anterior Glide: \u0E14\u0E31\u0E19\u0E2B\u0E31\u0E27\u0E01\u0E23\u0E30\u0E14\u0E39\u0E01\u0E21\u0E32\u0E17\u0E32\u0E07\u0E14\u0E49\u0E32\u0E19\u0E2B\u0E19\u0E49\u0E32 \u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E40\u0E1E\u0E34\u0E48\u0E21\u0E21\u0E38\u0E21\u0E40\u0E2B\u0E22\u0E35\u0E22\u0E14\u0E41\u0E02\u0E19\u0E44\u0E1B\u0E02\u0E49\u0E32\u0E07\u0E2B\u0E25\u0E31\u0E07"
    },
    shoulder_external_rotation: {
      rule: "Convex-on-Concave (\u0E17\u0E34\u0E28\u0E17\u0E32\u0E07\u0E2A\u0E27\u0E19\u0E01\u0E31\u0E19 \u21C4)",
      vectors: [
        { label: "Roll (\u0E01\u0E25\u0E34\u0E49\u0E07)", value: "\u27A1\uFE0F Posterior (\u0E44\u0E1B\u0E14\u0E49\u0E32\u0E19\u0E2B\u0E25\u0E31\u0E07)" },
        { label: "Slide (\u0E44\u0E16\u0E25)", value: "\u2B05\uFE0F Anterior (\u0E21\u0E32\u0E14\u0E49\u0E32\u0E19\u0E2B\u0E19\u0E49\u0E32)" }
      ],
      clinicalWhy: "\u0E08\u0E33\u0E40\u0E1B\u0E47\u0E19\u0E2D\u0E22\u0E48\u0E32\u0E07\u0E22\u0E34\u0E48\u0E07\u0E43\u0E19\u0E01\u0E32\u0E23\u0E01\u0E32\u0E07\u0E41\u0E02\u0E19\u0E1E\u0E49\u0E19 90\xB0 \u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E2B\u0E21\u0E38\u0E19\u0E1B\u0E38\u0E48\u0E21\u0E01\u0E23\u0E30\u0E14\u0E39\u0E01\u0E43\u0E2B\u0E0D\u0E48 (Greater Tubercle) \u0E2B\u0E25\u0E1A\u0E02\u0E2D\u0E1A Acromion",
      mobilization: "\u{1FA7A} Anterior Glide (\u0E14\u0E31\u0E19\u0E2B\u0E31\u0E27\u0E01\u0E23\u0E30\u0E14\u0E39\u0E01\u0E21\u0E32\u0E14\u0E49\u0E32\u0E19\u0E2B\u0E19\u0E49\u0E32): \u0E14\u0E31\u0E19\u0E08\u0E32\u0E01\u0E14\u0E49\u0E32\u0E19\u0E2B\u0E25\u0E31\u0E07\u0E21\u0E32\u0E14\u0E49\u0E32\u0E19\u0E2B\u0E19\u0E49\u0E32\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E40\u0E1E\u0E34\u0E48\u0E21 External Rotation"
    },
    shoulder_internal_rotation: {
      rule: "Convex-on-Concave (\u0E17\u0E34\u0E28\u0E17\u0E32\u0E07\u0E2A\u0E27\u0E19\u0E01\u0E31\u0E19 \u21C4)",
      vectors: [
        { label: "Roll (\u0E01\u0E25\u0E34\u0E49\u0E07)", value: "\u2B05\uFE0F Anterior (\u0E21\u0E32\u0E14\u0E49\u0E32\u0E19\u0E2B\u0E19\u0E49\u0E32)" },
        { label: "Slide (\u0E44\u0E16\u0E25)", value: "\u27A1\uFE0F Posterior (\u0E44\u0E1B\u0E14\u0E49\u0E32\u0E19\u0E2B\u0E25\u0E31\u0E07)" }
      ],
      clinicalWhy: "\u0E21\u0E31\u0E01\u0E08\u0E33\u0E01\u0E31\u0E14\u0E43\u0E19\u0E1C\u0E39\u0E49\u0E17\u0E35\u0E48\u0E21\u0E35 Posterior capsule \u0E15\u0E36\u0E07\u0E15\u0E31\u0E27 (GIRD - Glenohumeral Internal Rotation Deficit \u0E43\u0E19\u0E19\u0E31\u0E01\u0E01\u0E35\u0E2C\u0E32\u0E02\u0E27\u0E49\u0E32\u0E07)",
      mobilization: "\u{1FA7A} Posterior Glide (\u0E14\u0E31\u0E19\u0E2B\u0E31\u0E27\u0E01\u0E23\u0E30\u0E14\u0E39\u0E01\u0E44\u0E1B\u0E14\u0E49\u0E32\u0E19\u0E2B\u0E25\u0E31\u0E07): \u0E01\u0E14\u0E2B\u0E31\u0E27\u0E01\u0E23\u0E30\u0E14\u0E39\u0E01\u0E25\u0E07\u0E44\u0E1B\u0E14\u0E49\u0E32\u0E19\u0E2B\u0E25\u0E31\u0E07\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E40\u0E1E\u0E34\u0E48\u0E21 Internal Rotation"
    },
    // =================== ELBOW & FOREARM ===================
    elbow_flexion: {
      rule: "Concave-on-Convex (\u0E40\u0E1A\u0E49\u0E32 Trochlear notch \u0E40\u0E27\u0E49\u0E32\u0E1A\u0E19 Trochlea \u0E19\u0E39\u0E19: \u0E17\u0E32\u0E07\u0E40\u0E14\u0E35\u0E22\u0E27\u0E01\u0E31\u0E19 \u21C9)",
      vectors: [
        { label: "Roll (\u0E01\u0E25\u0E34\u0E49\u0E07)", value: "\u2B06\uFE0F Anterior (\u0E44\u0E1B\u0E02\u0E49\u0E32\u0E07\u0E2B\u0E19\u0E49\u0E32)" },
        { label: "Slide (\u0E44\u0E16\u0E25)", value: "\u2B06\uFE0F Anterior (\u0E44\u0E1B\u0E02\u0E49\u0E32\u0E07\u0E2B\u0E19\u0E49\u0E32)" }
      ],
      clinicalWhy: "\u0E21\u0E38\u0E21\u0E07\u0E2D\u0E28\u0E2D\u0E01\u0E2A\u0E33\u0E04\u0E31\u0E0D\u0E17\u0E35\u0E48\u0E2A\u0E38\u0E14\u0E43\u0E19\u0E0A\u0E35\u0E27\u0E34\u0E15\u0E1B\u0E23\u0E30\u0E08\u0E33\u0E27\u0E31\u0E19\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E2B\u0E22\u0E34\u0E1A\u0E2D\u0E32\u0E2B\u0E32\u0E23\u0E40\u0E02\u0E49\u0E32\u0E1B\u0E32\u0E01 (\u0E15\u0E49\u0E2D\u0E07\u0E01\u0E32\u0E23\u0E21\u0E38\u0E21\u0E07\u0E2D\u0E2D\u0E22\u0E48\u0E32\u0E07\u0E19\u0E49\u0E2D\u0E22 130\xB0)",
      mobilization: "\u{1FA7A} Anterior Glide of Ulna/Radius: \u0E14\u0E31\u0E19\u0E01\u0E23\u0E30\u0E14\u0E39\u0E01\u0E1B\u0E25\u0E32\u0E22\u0E41\u0E02\u0E19\u0E44\u0E1B\u0E02\u0E49\u0E32\u0E07\u0E2B\u0E19\u0E49\u0E32\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E40\u0E1E\u0E34\u0E48\u0E21\u0E21\u0E38\u0E21\u0E07\u0E2D\u0E28\u0E2D\u0E01"
    },
    elbow_extension: {
      rule: "Concave-on-Convex (\u0E17\u0E34\u0E28\u0E17\u0E32\u0E07\u0E40\u0E14\u0E35\u0E22\u0E27\u0E01\u0E31\u0E19 \u21C9)",
      vectors: [
        { label: "Roll (\u0E01\u0E25\u0E34\u0E49\u0E07)", value: "\u2B07\uFE0F Posterior (\u0E44\u0E1B\u0E02\u0E49\u0E32\u0E07\u0E2B\u0E25\u0E31\u0E07)" },
        { label: "Slide (\u0E44\u0E16\u0E25)", value: "\u2B07\uFE0F Posterior (\u0E44\u0E1B\u0E02\u0E49\u0E32\u0E07\u0E2B\u0E25\u0E31\u0E07)" }
      ],
      clinicalWhy: "\u0E40\u0E2B\u0E22\u0E35\u0E22\u0E14\u0E2A\u0E38\u0E14\u0E08\u0E19\u0E1B\u0E38\u0E48\u0E21 Olecranon \u0E25\u0E47\u0E2D\u0E01\u0E2A\u0E19\u0E34\u0E17\u0E43\u0E19 Olecranon fossa \u0E40\u0E1B\u0E47\u0E19 Close-packed \u0E21\u0E31\u0E48\u0E19\u0E04\u0E07\u0E2A\u0E39\u0E07\u0E2A\u0E38\u0E14",
      mobilization: "\u{1FA7A} Posterior Glide of Ulna/Radius: \u0E14\u0E31\u0E19\u0E01\u0E23\u0E30\u0E14\u0E39\u0E01\u0E1B\u0E25\u0E32\u0E22\u0E41\u0E02\u0E19\u0E44\u0E1B\u0E02\u0E49\u0E32\u0E07\u0E2B\u0E25\u0E31\u0E07\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E40\u0E1E\u0E34\u0E48\u0E21\u0E21\u0E38\u0E21\u0E40\u0E2B\u0E22\u0E35\u0E22\u0E14\u0E28\u0E2D\u0E01"
    },
    forearm_pronation: {
      rule: "Proximal: Convex on Concave / Distal: Concave on Convex",
      vectors: [
        { label: "Proximal RU", value: "Roll Anterior \u2B05\uFE0F, Slide Posterior \u27A1\uFE0F" },
        { label: "Distal RU", value: "Roll & Slide Anterior \u2B05\uFE0F" }
      ],
      clinicalWhy: "\u0E04\u0E27\u0E48\u0E33\u0E21\u0E37\u0E2D\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E1E\u0E34\u0E21\u0E1E\u0E4C\u0E07\u0E32\u0E19\u0E2B\u0E23\u0E37\u0E2D\u0E2B\u0E22\u0E34\u0E1A\u0E08\u0E31\u0E1A\u0E2A\u0E34\u0E48\u0E07\u0E02\u0E2D\u0E07\u0E1A\u0E19\u0E42\u0E15\u0E4A\u0E30",
      mobilization: "\u{1FA7A} Dorsal glide \u0E02\u0E2D\u0E07 Radial head \u0E17\u0E35\u0E48\u0E02\u0E49\u0E2D\u0E1A\u0E19 + Volar glide \u0E02\u0E2D\u0E07 Radius \u0E17\u0E35\u0E48\u0E02\u0E49\u0E2D\u0E21\u0E37\u0E2D"
    },
    forearm_supination: {
      rule: "Proximal: Convex on Concave / Distal: Concave on Convex",
      vectors: [
        { label: "Proximal RU", value: "Roll Posterior \u27A1\uFE0F, Slide Anterior \u2B05\uFE0F" },
        { label: "Distal RU", value: "Roll & Slide Posterior \u27A1\uFE0F" }
      ],
      clinicalWhy: "\u0E2B\u0E07\u0E32\u0E22\u0E21\u0E37\u0E2D\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E23\u0E31\u0E1A\u0E02\u0E2D\u0E07\u0E2B\u0E23\u0E37\u0E2D\u0E15\u0E31\u0E01\u0E2D\u0E32\u0E2B\u0E32\u0E23\u0E40\u0E02\u0E49\u0E32\u0E1B\u0E32\u0E01",
      mobilization: "\u{1FA7A} Volar glide \u0E02\u0E2D\u0E07 Radial head \u0E17\u0E35\u0E48\u0E02\u0E49\u0E2D\u0E1A\u0E19 + Dorsal glide \u0E02\u0E2D\u0E07 Radius \u0E17\u0E35\u0E48\u0E02\u0E49\u0E2D\u0E21\u0E37\u0E2D"
    },
    // =================== WRIST & HAND ===================
    wrist_flexion: {
      rule: "Convex-on-Concave (\u0E01\u0E23\u0E30\u0E14\u0E39\u0E01 Carpal \u0E19\u0E39\u0E19\u0E1A\u0E19 Radius \u0E40\u0E27\u0E49\u0E32: \u0E2A\u0E27\u0E19\u0E17\u0E32\u0E07\u0E01\u0E31\u0E19 \u21C4)",
      vectors: [
        { label: "Roll (\u0E01\u0E25\u0E34\u0E49\u0E07)", value: "\u2B07\uFE0F Palmar / Volar (\u0E44\u0E1B\u0E17\u0E32\u0E07\u0E1D\u0E48\u0E32\u0E21\u0E37\u0E2D)" },
        { label: "Slide (\u0E44\u0E16\u0E25)", value: "\u2B06\uFE0F Dorsal (\u0E44\u0E1B\u0E17\u0E32\u0E07\u0E2B\u0E25\u0E31\u0E07\u0E21\u0E37\u0E2D)" }
      ],
      clinicalWhy: "\u0E07\u0E2D\u0E02\u0E49\u0E2D\u0E21\u0E37\u0E2D\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E08\u0E31\u0E1A\u0E2B\u0E23\u0E37\u0E2D\u0E25\u0E32\u0E01\u0E2A\u0E34\u0E48\u0E07\u0E02\u0E2D\u0E07 \u0E25\u0E34\u0E21\u0E34\u0E15\u0E42\u0E14\u0E22 Dorsal radiocarpal ligament",
      mobilization: "\u{1FA7A} Dorsal Glide of Carpals: \u0E14\u0E31\u0E19\u0E01\u0E23\u0E30\u0E14\u0E39\u0E01\u0E02\u0E49\u0E2D\u0E21\u0E37\u0E2D\u0E44\u0E1B\u0E17\u0E32\u0E07\u0E2B\u0E25\u0E31\u0E07\u0E21\u0E37\u0E2D\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E40\u0E1E\u0E34\u0E48\u0E21\u0E21\u0E38\u0E21\u0E07\u0E2D\u0E02\u0E49\u0E2D\u0E21\u0E37\u0E2D"
    },
    wrist_extension: {
      rule: "Convex-on-Concave (\u0E17\u0E34\u0E28\u0E17\u0E32\u0E07\u0E2A\u0E27\u0E19\u0E01\u0E31\u0E19 \u21C4)",
      vectors: [
        { label: "Roll (\u0E01\u0E25\u0E34\u0E49\u0E07)", value: "\u2B06\uFE0F Dorsal (\u0E44\u0E1B\u0E17\u0E32\u0E07\u0E2B\u0E25\u0E31\u0E07\u0E21\u0E37\u0E2D)" },
        { label: "Slide (\u0E44\u0E16\u0E25)", value: "\u2B07\uFE0F Palmar / Volar (\u0E44\u0E1B\u0E17\u0E32\u0E07\u0E1D\u0E48\u0E32\u0E21\u0E37\u0E2D)" }
      ],
      clinicalWhy: "\u0E17\u0E48\u0E32\u0E17\u0E23\u0E07\u0E1E\u0E25\u0E31\u0E07\u0E02\u0E2D\u0E07\u0E21\u0E37\u0E2D (Grip posture): \u0E02\u0E49\u0E2D\u0E21\u0E37\u0E2D\u0E15\u0E49\u0E2D\u0E07\u0E40\u0E2B\u0E22\u0E35\u0E22\u0E14 20-30\xB0 \u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E43\u0E2B\u0E49\u0E01\u0E25\u0E49\u0E32\u0E21\u0E40\u0E19\u0E37\u0E49\u0E2D\u0E01\u0E33\u0E21\u0E37\u0E2D\u0E21\u0E35\u0E41\u0E23\u0E07\u0E1A\u0E35\u0E1A\u0E2A\u0E39\u0E07\u0E2A\u0E38\u0E14",
      mobilization: "\u{1FA7A} Palmar (Volar) Glide: \u0E14\u0E31\u0E19\u0E01\u0E23\u0E30\u0E14\u0E39\u0E01\u0E02\u0E49\u0E2D\u0E21\u0E37\u0E2D\u0E44\u0E1B\u0E17\u0E32\u0E07\u0E1D\u0E48\u0E32\u0E21\u0E37\u0E2D\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E40\u0E1E\u0E34\u0E48\u0E21\u0E21\u0E38\u0E21\u0E01\u0E23\u0E30\u0E14\u0E01\u0E02\u0E49\u0E2D\u0E21\u0E37\u0E2D"
    },
    wrist_radial_deviation: {
      rule: "Convex-on-Concave (\u0E17\u0E34\u0E28\u0E17\u0E32\u0E07\u0E2A\u0E27\u0E19\u0E01\u0E31\u0E19 \u21C4)",
      vectors: [
        { label: "Roll (\u0E01\u0E25\u0E34\u0E49\u0E07)", value: "\u2B05\uFE0F Radial (\u0E44\u0E1B\u0E17\u0E32\u0E07\u0E19\u0E34\u0E49\u0E27\u0E42\u0E1B\u0E49\u0E07)" },
        { label: "Slide (\u0E44\u0E16\u0E25)", value: "\u27A1\uFE0F Ulnar (\u0E44\u0E1B\u0E17\u0E32\u0E07\u0E19\u0E34\u0E49\u0E27\u0E01\u0E49\u0E2D\u0E22)" }
      ],
      clinicalWhy: "\u0E01\u0E23\u0E30\u0E14\u0E39\u0E01 Scaphoid \u0E01\u0E23\u0E30\u0E14\u0E01\u0E07\u0E2D\u0E25\u0E07\u0E41\u0E25\u0E30\u0E15\u0E34\u0E14\u0E02\u0E2D\u0E1A Radial styloid \u0E21\u0E38\u0E21\u0E08\u0E36\u0E07\u0E41\u0E04\u0E1A\u0E01\u0E27\u0E48\u0E32 (~20\xB0)",
      mobilization: "\u{1FA7A} Medial (Ulnar) Glide: \u0E14\u0E31\u0E19\u0E01\u0E23\u0E30\u0E14\u0E39\u0E01\u0E02\u0E49\u0E2D\u0E21\u0E37\u0E2D\u0E44\u0E1B\u0E17\u0E32\u0E07\u0E1D\u0E31\u0E48\u0E07\u0E19\u0E34\u0E49\u0E27\u0E01\u0E49\u0E2D\u0E22"
    },
    wrist_ulnar_deviation: {
      rule: "Convex-on-Concave (\u0E17\u0E34\u0E28\u0E17\u0E32\u0E07\u0E2A\u0E27\u0E19\u0E01\u0E31\u0E19 \u21C4)",
      vectors: [
        { label: "Roll (\u0E01\u0E25\u0E34\u0E49\u0E07)", value: "\u27A1\uFE0F Ulnar (\u0E44\u0E1B\u0E17\u0E32\u0E07\u0E19\u0E34\u0E49\u0E27\u0E01\u0E49\u0E2D\u0E22)" },
        { label: "Slide (\u0E44\u0E16\u0E25)", value: "\u2B05\uFE0F Radial (\u0E44\u0E1B\u0E17\u0E32\u0E07\u0E19\u0E34\u0E49\u0E27\u0E42\u0E1B\u0E49\u0E07)" }
      ],
      clinicalWhy: "\u0E21\u0E38\u0E21\u0E01\u0E27\u0E49\u0E32\u0E07\u0E01\u0E27\u0E48\u0E32 (~30\xB0) \u0E40\u0E1E\u0E23\u0E32\u0E30\u0E1D\u0E31\u0E48\u0E07\u0E2D\u0E31\u0E25\u0E19\u0E32\u0E21\u0E35\u0E0A\u0E48\u0E2D\u0E07\u0E27\u0E48\u0E32\u0E07\u0E41\u0E1C\u0E48\u0E19\u0E01\u0E23\u0E30\u0E14\u0E39\u0E01\u0E2D\u0E48\u0E2D\u0E19 TFCC \u0E23\u0E2D\u0E07\u0E23\u0E31\u0E1A",
      mobilization: "\u{1FA7A} Lateral (Radial) Glide: \u0E14\u0E31\u0E19\u0E01\u0E23\u0E30\u0E14\u0E39\u0E01\u0E02\u0E49\u0E2D\u0E21\u0E37\u0E2D\u0E44\u0E1B\u0E17\u0E32\u0E07\u0E1D\u0E31\u0E48\u0E07\u0E19\u0E34\u0E49\u0E27\u0E42\u0E1B\u0E49\u0E07"
    },
    thumb_cmc_abduction: {
      rule: "Saddle Joint: Convex Metacarpal on Concave Trapezium (\u0E2A\u0E27\u0E19\u0E17\u0E32\u0E07\u0E01\u0E31\u0E19 \u21C4)",
      vectors: [
        { label: "Roll (\u0E01\u0E25\u0E34\u0E49\u0E07)", value: "Palmar (\u0E44\u0E1B\u0E02\u0E49\u0E32\u0E07\u0E2B\u0E19\u0E49\u0E32)" },
        { label: "Slide (\u0E44\u0E16\u0E25)", value: "Dorsal (\u0E44\u0E1B\u0E02\u0E49\u0E32\u0E07\u0E2B\u0E25\u0E31\u0E07)" }
      ],
      clinicalWhy: "\u0E01\u0E32\u0E07\u0E19\u0E34\u0E49\u0E27\u0E42\u0E1B\u0E49\u0E07\u0E2D\u0E2D\u0E01\u0E08\u0E32\u0E01\u0E1D\u0E48\u0E32\u0E21\u0E37\u0E2D\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E2D\u0E49\u0E32\u0E21\u0E37\u0E2D\u0E08\u0E31\u0E1A\u0E41\u0E01\u0E49\u0E27\u0E19\u0E49\u0E33\u0E2B\u0E23\u0E37\u0E2D\u0E27\u0E31\u0E15\u0E16\u0E38\u0E17\u0E23\u0E07\u0E01\u0E25\u0E21",
      mobilization: "\u{1FA7A} Dorsal Glide of 1st Metacarpal: \u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E40\u0E1E\u0E34\u0E48\u0E21\u0E21\u0E38\u0E21\u0E01\u0E32\u0E07\u0E19\u0E34\u0E49\u0E27\u0E42\u0E1B\u0E49\u0E07"
    },
    thumb_cmc_flexion: {
      rule: "Saddle Joint: Concave Metacarpal on Convex Trapezium (\u0E17\u0E32\u0E07\u0E40\u0E14\u0E35\u0E22\u0E27\u0E01\u0E31\u0E19 \u21C9)",
      vectors: [
        { label: "Roll (\u0E01\u0E25\u0E34\u0E49\u0E07)", value: "Medial (\u0E40\u0E02\u0E49\u0E32\u0E14\u0E49\u0E32\u0E19\u0E43\u0E19\u0E1D\u0E48\u0E32\u0E21\u0E37\u0E2D)" },
        { label: "Slide (\u0E44\u0E16\u0E25)", value: "Medial (\u0E40\u0E02\u0E49\u0E32\u0E14\u0E49\u0E32\u0E19\u0E43\u0E19\u0E1D\u0E48\u0E32\u0E21\u0E37\u0E2D)" }
      ],
      clinicalWhy: "\u0E07\u0E2D\u0E19\u0E34\u0E49\u0E27\u0E42\u0E1B\u0E49\u0E07\u0E1E\u0E32\u0E14\u0E02\u0E49\u0E32\u0E21\u0E1D\u0E48\u0E32\u0E21\u0E37\u0E2D \u0E40\u0E1B\u0E47\u0E19\u0E01\u0E25\u0E44\u0E01\u0E2B\u0E25\u0E31\u0E01\u0E23\u0E48\u0E27\u0E21\u0E01\u0E31\u0E1A\u0E01\u0E32\u0E23\u0E17\u0E33 Opposition",
      mobilization: "\u{1FA7A} Medial / Ulnar Glide: \u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E40\u0E1E\u0E34\u0E48\u0E21\u0E21\u0E38\u0E21\u0E07\u0E2D\u0E19\u0E34\u0E49\u0E27\u0E42\u0E1B\u0E49\u0E07"
    },
    thumb_opposition: {
      rule: "Sequential Multi-planar Saddle Gliding (Neumann Ch. 8)",
      vectors: [
        { label: "Phase 1", value: "Abduction (Roll Palmar, Slide Dorsal)" },
        { label: "Phase 2", value: "Flexion & Medial Axial Rotation" }
      ],
      clinicalWhy: "\u0E01\u0E32\u0E23\u0E40\u0E04\u0E25\u0E37\u0E48\u0E2D\u0E19\u0E44\u0E2B\u0E27\u0E2A\u0E33\u0E04\u0E31\u0E0D\u0E17\u0E35\u0E48\u0E2A\u0E38\u0E14\u0E02\u0E2D\u0E07\u0E21\u0E37\u0E2D\u0E21\u0E19\u0E38\u0E29\u0E22\u0E4C \u0E43\u0E0A\u0E49\u0E1B\u0E23\u0E30\u0E01\u0E1A\u0E1B\u0E25\u0E32\u0E22\u0E19\u0E34\u0E49\u0E27\u0E2B\u0E22\u0E34\u0E1A\u0E08\u0E31\u0E1A\u0E2A\u0E34\u0E48\u0E07\u0E02\u0E2D\u0E07\u0E17\u0E38\u0E01\u0E0A\u0E19\u0E34\u0E14",
      mobilization: "\u{1FA7A} Long-axis Distraction \u0E23\u0E48\u0E27\u0E21\u0E01\u0E31\u0E1A Palmar & Medial glide \u0E02\u0E2D\u0E07\u0E02\u0E49\u0E2D CMC 1"
    },
    // =================== HIP ===================
    hip_flexion: {
      rule: "Convex-on-Concave (\u0E2B\u0E31\u0E27\u0E01\u0E23\u0E30\u0E14\u0E39\u0E01\u0E15\u0E49\u0E19\u0E02\u0E32\u0E19\u0E39\u0E19\u0E43\u0E19\u0E40\u0E1A\u0E49\u0E32\u0E01\u0E49\u0E19\u0E01\u0E23\u0E30\u0E17\u0E30\u0E40\u0E27\u0E49\u0E32: \u0E2A\u0E27\u0E19\u0E17\u0E32\u0E07\u0E01\u0E31\u0E19 \u21C4)",
      vectors: [
        { label: "Roll (\u0E01\u0E25\u0E34\u0E49\u0E07)", value: "\u2B06\uFE0F Anterior/Superior" },
        { label: "Slide (\u0E44\u0E16\u0E25)", value: "\u2B07\uFE0F Posterior/Inferior" }
      ],
      clinicalWhy: "\u0E01\u0E49\u0E32\u0E27\u0E02\u0E32\u0E02\u0E36\u0E49\u0E19\u0E1A\u0E31\u0E19\u0E44\u0E14\u0E41\u0E25\u0E30\u0E19\u0E31\u0E48\u0E07\u0E40\u0E01\u0E49\u0E32\u0E2D\u0E35\u0E49 \u0E25\u0E34\u0E21\u0E34\u0E15\u0E42\u0E14\u0E22 Posterior capsule \u0E41\u0E25\u0E30 Gluteus maximus",
      mobilization: "\u{1FA7A} Posterior & Inferior Glide: \u0E14\u0E31\u0E19\u0E2B\u0E31\u0E27\u0E01\u0E23\u0E30\u0E14\u0E39\u0E01\u0E15\u0E49\u0E19\u0E02\u0E32\u0E44\u0E1B\u0E14\u0E49\u0E32\u0E19\u0E2B\u0E25\u0E31\u0E07\u0E41\u0E25\u0E30\u0E25\u0E48\u0E32\u0E07"
    },
    hip_extension: {
      rule: "Convex-on-Concave (\u0E2A\u0E27\u0E19\u0E17\u0E32\u0E07\u0E01\u0E31\u0E19 \u21C4)",
      vectors: [
        { label: "Roll (\u0E01\u0E25\u0E34\u0E49\u0E07)", value: "\u2B07\uFE0F Posterior" },
        { label: "Slide (\u0E44\u0E16\u0E25)", value: "\u2B06\uFE0F Anterior" }
      ],
      clinicalWhy: "\u0E22\u0E37\u0E14\u0E40\u0E2B\u0E22\u0E35\u0E22\u0E14\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E01\u0E49\u0E32\u0E27\u0E02\u0E32\u0E40\u0E14\u0E34\u0E19 \u0E25\u0E34\u0E21\u0E34\u0E15\u0E42\u0E14\u0E22 Iliofemoral ligament (Y-ligament) \u0E17\u0E35\u0E48\u0E41\u0E02\u0E47\u0E07\u0E41\u0E23\u0E07\u0E17\u0E35\u0E48\u0E2A\u0E38\u0E14\u0E43\u0E19\u0E23\u0E48\u0E32\u0E07\u0E01\u0E32\u0E22",
      mobilization: "\u{1FA7A} Anterior Glide: \u0E14\u0E31\u0E19\u0E2B\u0E31\u0E27\u0E01\u0E23\u0E30\u0E14\u0E39\u0E01\u0E15\u0E49\u0E19\u0E02\u0E32\u0E21\u0E32\u0E14\u0E49\u0E32\u0E19\u0E2B\u0E19\u0E49\u0E32"
    },
    hip_abduction: {
      rule: "Convex-on-Concave (\u0E2A\u0E27\u0E19\u0E17\u0E32\u0E07\u0E01\u0E31\u0E19 \u21C4)",
      vectors: [
        { label: "Roll (\u0E01\u0E25\u0E34\u0E49\u0E07)", value: "\u2197\uFE0F Superior/Lateral" },
        { label: "Slide (\u0E44\u0E16\u0E25)", value: "\u2199\uFE0F Inferior/Medial" }
      ],
      clinicalWhy: "\u0E01\u0E49\u0E32\u0E27\u0E02\u0E32\u0E25\u0E07\u0E08\u0E32\u0E01\u0E23\u0E16 \u0E01\u0E49\u0E32\u0E27\u0E02\u0E49\u0E32\u0E21\u0E2A\u0E34\u0E48\u0E07\u0E01\u0E35\u0E14\u0E02\u0E27\u0E32\u0E07 \u0E25\u0E34\u0E21\u0E34\u0E15\u0E42\u0E14\u0E22 Pubofemoral ligament",
      mobilization: "\u{1FA7A} Inferior Glide of Femur: \u0E14\u0E36\u0E07/\u0E14\u0E31\u0E19\u0E2B\u0E31\u0E27\u0E01\u0E23\u0E30\u0E14\u0E39\u0E01\u0E15\u0E49\u0E19\u0E02\u0E32\u0E25\u0E07\u0E25\u0E48\u0E32\u0E07"
    },
    hip_adduction: {
      rule: "Convex-on-Concave (\u0E2A\u0E27\u0E19\u0E17\u0E32\u0E07\u0E01\u0E31\u0E19 \u21C4)",
      vectors: [
        { label: "Roll (\u0E01\u0E25\u0E34\u0E49\u0E07)", value: "\u2199\uFE0F Medial" },
        { label: "Slide (\u0E44\u0E16\u0E25)", value: "\u2197\uFE0F Lateral" }
      ],
      clinicalWhy: "\u0E01\u0E32\u0E23\u0E44\u0E02\u0E27\u0E48\u0E2B\u0E49\u0E32\u0E07\u0E41\u0E25\u0E30\u0E01\u0E32\u0E23\u0E17\u0E23\u0E07\u0E15\u0E31\u0E27\u0E22\u0E37\u0E19\u0E02\u0E32\u0E40\u0E14\u0E35\u0E22\u0E27",
      mobilization: "\u{1FA7A} Lateral Glide: \u0E14\u0E31\u0E19\u0E2B\u0E31\u0E27\u0E01\u0E23\u0E30\u0E14\u0E39\u0E01\u0E15\u0E49\u0E19\u0E02\u0E32\u0E2D\u0E2D\u0E01\u0E14\u0E49\u0E32\u0E19\u0E19\u0E2D\u0E01"
    },
    hip_internal_rotation: {
      rule: "Convex-on-Concave (\u0E2A\u0E27\u0E19\u0E17\u0E32\u0E07\u0E01\u0E31\u0E19 \u21C4)",
      vectors: [
        { label: "Roll (\u0E01\u0E25\u0E34\u0E49\u0E07)", value: "\u2B05\uFE0F Anterior" },
        { label: "Slide (\u0E44\u0E16\u0E25)", value: "\u27A1\uFE0F Posterior" }
      ],
      clinicalWhy: "\u0E2A\u0E33\u0E04\u0E31\u0E0D\u0E43\u0E19 Stance phase \u0E02\u0E2D\u0E07\u0E01\u0E32\u0E23\u0E40\u0E14\u0E34\u0E19\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E43\u0E2B\u0E49\u0E40\u0E0A\u0E34\u0E07\u0E01\u0E23\u0E32\u0E19\u0E2B\u0E21\u0E38\u0E19\u0E44\u0E1B\u0E02\u0E49\u0E32\u0E07\u0E2B\u0E19\u0E49\u0E32",
      mobilization: "\u{1FA7A} Posterior Glide: \u0E14\u0E31\u0E19\u0E2B\u0E31\u0E27\u0E01\u0E23\u0E30\u0E14\u0E39\u0E01\u0E15\u0E49\u0E19\u0E02\u0E32\u0E44\u0E1B\u0E14\u0E49\u0E32\u0E19\u0E2B\u0E25\u0E31\u0E07"
    },
    hip_external_rotation: {
      rule: "Convex-on-Concave (\u0E2A\u0E27\u0E19\u0E17\u0E32\u0E07\u0E01\u0E31\u0E19 \u21C4)",
      vectors: [
        { label: "Roll (\u0E01\u0E25\u0E34\u0E49\u0E07)", value: "\u27A1\uFE0F Posterior" },
        { label: "Slide (\u0E44\u0E16\u0E25)", value: "\u2B05\uFE0F Anterior" }
      ],
      clinicalWhy: "\u0E17\u0E48\u0E32\u0E19\u0E31\u0E48\u0E07\u0E02\u0E31\u0E14\u0E2A\u0E21\u0E32\u0E18\u0E34 \u0E25\u0E34\u0E21\u0E34\u0E15\u0E42\u0E14\u0E22 Iliofemoral lig. \u0E14\u0E49\u0E32\u0E19\u0E2B\u0E19\u0E49\u0E32",
      mobilization: "\u{1FA7A} Anterior Glide: \u0E14\u0E31\u0E19\u0E2B\u0E31\u0E27\u0E01\u0E23\u0E30\u0E14\u0E39\u0E01\u0E15\u0E49\u0E19\u0E02\u0E32\u0E21\u0E32\u0E14\u0E49\u0E32\u0E19\u0E2B\u0E19\u0E49\u0E32"
    },
    // =================== KNEE ===================
    knee_flexion: {
      rule: "Concave-on-Convex (Open Chain: \u0E2B\u0E19\u0E49\u0E32\u0E41\u0E02\u0E49\u0E07\u0E40\u0E27\u0E49\u0E32\u0E1A\u0E19\u0E01\u0E23\u0E30\u0E14\u0E39\u0E01\u0E15\u0E49\u0E19\u0E02\u0E32\u0E19\u0E39\u0E19: \u0E17\u0E32\u0E07\u0E40\u0E14\u0E35\u0E22\u0E27\u0E01\u0E31\u0E19 \u21C9)",
      vectors: [
        { label: "Roll (\u0E01\u0E25\u0E34\u0E49\u0E07)", value: "\u2B07\uFE0F Posterior (\u0E44\u0E1B\u0E14\u0E49\u0E32\u0E19\u0E2B\u0E25\u0E31\u0E07)" },
        { label: "Slide (\u0E44\u0E16\u0E25)", value: "\u2B07\uFE0F Posterior (\u0E44\u0E1B\u0E14\u0E49\u0E32\u0E19\u0E2B\u0E25\u0E31\u0E07)" }
      ],
      clinicalWhy: "\u0E07\u0E2D\u0E40\u0E02\u0E48\u0E32\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E25\u0E07\u0E19\u0E31\u0E48\u0E07 \u0E04\u0E38\u0E01\u0E40\u0E02\u0E48\u0E32 \u0E2B\u0E23\u0E37\u0E2D\u0E27\u0E34\u0E48\u0E07 \u0E02\u0E13\u0E30\u0E07\u0E2D Meniscus \u0E08\u0E30\u0E16\u0E39\u0E01\u0E14\u0E36\u0E07\u0E16\u0E2D\u0E22\u0E44\u0E1B\u0E14\u0E49\u0E32\u0E19\u0E2B\u0E25\u0E31\u0E07",
      mobilization: "\u{1FA7A} Posterior Glide of Tibia: \u0E14\u0E31\u0E19\u0E2B\u0E31\u0E27\u0E01\u0E23\u0E30\u0E14\u0E39\u0E01\u0E2B\u0E19\u0E49\u0E32\u0E41\u0E02\u0E49\u0E07\u0E44\u0E1B\u0E14\u0E49\u0E32\u0E19\u0E2B\u0E25\u0E31\u0E07\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E40\u0E1E\u0E34\u0E48\u0E21\u0E21\u0E38\u0E21\u0E07\u0E2D\u0E40\u0E02\u0E48\u0E32"
    },
    knee_extension: {
      rule: "Concave-on-Convex (Open Chain: \u0E17\u0E32\u0E07\u0E40\u0E14\u0E35\u0E22\u0E27\u0E01\u0E31\u0E19 \u21C9)",
      vectors: [
        { label: "Roll (\u0E01\u0E25\u0E34\u0E49\u0E07)", value: "\u2B06\uFE0F Anterior (\u0E44\u0E1B\u0E14\u0E49\u0E32\u0E19\u0E2B\u0E19\u0E49\u0E32)" },
        { label: "Slide (\u0E44\u0E16\u0E25)", value: "\u2B06\uFE0F Anterior (\u0E44\u0E1B\u0E14\u0E49\u0E32\u0E19\u0E2B\u0E19\u0E49\u0E32)" }
      ],
      clinicalWhy: "Screw-Home Mechanism: 10\xB0 \u0E2A\u0E38\u0E14\u0E17\u0E49\u0E32\u0E22 Tibia \u0E2B\u0E21\u0E38\u0E19\u0E2D\u0E2D\u0E01\u0E19\u0E2D\u0E01\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E25\u0E47\u0E2D\u0E01\u0E40\u0E02\u0E48\u0E32\u0E15\u0E23\u0E07\u0E23\u0E31\u0E1A\u0E19\u0E49\u0E33\u0E2B\u0E19\u0E31\u0E01\u0E42\u0E14\u0E22\u0E44\u0E21\u0E48\u0E15\u0E49\u0E2D\u0E07\u0E40\u0E01\u0E23\u0E47\u0E07\u0E01\u0E25\u0E49\u0E32\u0E21\u0E40\u0E19\u0E37\u0E49\u0E2D",
      mobilization: "\u{1FA7A} Anterior Glide of Tibia: \u0E14\u0E31\u0E19\u0E2B\u0E31\u0E27\u0E01\u0E23\u0E30\u0E14\u0E39\u0E01\u0E2B\u0E19\u0E49\u0E32\u0E41\u0E02\u0E49\u0E07\u0E21\u0E32\u0E14\u0E49\u0E32\u0E19\u0E2B\u0E19\u0E49\u0E32\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E40\u0E1E\u0E34\u0E48\u0E21\u0E21\u0E38\u0E21\u0E40\u0E2B\u0E22\u0E35\u0E22\u0E14\u0E40\u0E02\u0E48\u0E32\u0E15\u0E23\u0E07"
    },
    // =================== ANKLE & FOOT ===================
    ankle_dorsiflexion: {
      rule: "Convex-on-Concave (\u0E01\u0E23\u0E30\u0E14\u0E39\u0E01 Talus \u0E17\u0E23\u0E07\u0E42\u0E14\u0E21\u0E19\u0E39\u0E19\u0E43\u0E19\u0E40\u0E1A\u0E49\u0E32 Mortise \u0E40\u0E27\u0E49\u0E32: \u0E2A\u0E27\u0E19\u0E17\u0E32\u0E07\u0E01\u0E31\u0E19 \u21C4)",
      vectors: [
        { label: "Roll (\u0E01\u0E25\u0E34\u0E49\u0E07)", value: "\u2B06\uFE0F Anterior (\u0E44\u0E1B\u0E02\u0E49\u0E32\u0E07\u0E2B\u0E19\u0E49\u0E32)" },
        { label: "Slide (\u0E44\u0E16\u0E25)", value: "\u2B07\uFE0F Posterior (\u0E44\u0E1B\u0E02\u0E49\u0E32\u0E07\u0E2B\u0E25\u0E31\u0E07)" }
      ],
      clinicalWhy: "\u26A0\uFE0F \u0E2A\u0E33\u0E04\u0E31\u0E0D\u0E17\u0E35\u0E48\u0E2A\u0E38\u0E14\u0E43\u0E19\u0E01\u0E32\u0E23\u0E40\u0E14\u0E34\u0E19\u0E41\u0E25\u0E30\u0E25\u0E07\u0E1A\u0E31\u0E19\u0E44\u0E14: \u0E2B\u0E32\u0E01\u0E02\u0E32\u0E14 Posterior slide \u0E02\u0E49\u0E2D\u0E40\u0E17\u0E49\u0E32\u0E08\u0E30\u0E15\u0E34\u0E14\u0E01\u0E23\u0E30\u0E14\u0E01\u0E44\u0E21\u0E48\u0E02\u0E36\u0E49\u0E19\u0E41\u0E25\u0E30\u0E40\u0E14\u0E34\u0E19\u0E01\u0E30\u0E40\u0E1C\u0E25\u0E01",
      mobilization: "\u{1FA7A} Posterior Glide of Talus: \u0E43\u0E0A\u0E49\u0E21\u0E37\u0E2D\u0E01\u0E14\u0E14\u0E31\u0E19\u0E01\u0E23\u0E30\u0E14\u0E39\u0E01 Talus \u0E44\u0E1B\u0E14\u0E49\u0E32\u0E19\u0E2B\u0E25\u0E31\u0E07\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E40\u0E1E\u0E34\u0E48\u0E21\u0E21\u0E38\u0E21\u0E01\u0E23\u0E30\u0E14\u0E01\u0E02\u0E49\u0E2D\u0E40\u0E17\u0E49\u0E32"
    },
    ankle_plantarflexion: {
      rule: "Convex-on-Concave (\u0E2A\u0E27\u0E19\u0E17\u0E32\u0E07\u0E01\u0E31\u0E19 \u21C4)",
      vectors: [
        { label: "Roll (\u0E01\u0E25\u0E34\u0E49\u0E07)", value: "\u2B07\uFE0F Posterior (\u0E44\u0E1B\u0E02\u0E49\u0E32\u0E07\u0E2B\u0E25\u0E31\u0E07)" },
        { label: "Slide (\u0E44\u0E16\u0E25)", value: "\u2B06\uFE0F Anterior (\u0E44\u0E1B\u0E02\u0E49\u0E32\u0E07\u0E2B\u0E19\u0E49\u0E32)" }
      ],
      clinicalWhy: "\u0E01\u0E32\u0E23\u0E40\u0E02\u0E22\u0E48\u0E07\u0E40\u0E17\u0E49\u0E32 \u0E16\u0E35\u0E1A\u0E15\u0E31\u0E27\u0E01\u0E23\u0E30\u0E42\u0E14\u0E14 \u0E41\u0E25\u0E30\u0E01\u0E14\u0E04\u0E31\u0E19\u0E40\u0E23\u0E48\u0E07",
      mobilization: "\u{1FA7A} Anterior Glide of Talus: \u0E14\u0E36\u0E07\u0E01\u0E23\u0E30\u0E14\u0E39\u0E01 Talus \u0E21\u0E32\u0E02\u0E49\u0E32\u0E07\u0E2B\u0E19\u0E49\u0E32"
    },
    subtalar_inversion: {
      rule: "Convex Calcaneus on Concave Talus (\u0E2A\u0E27\u0E19\u0E17\u0E32\u0E07\u0E01\u0E31\u0E19 \u21C4)",
      vectors: [
        { label: "Roll (\u0E01\u0E25\u0E34\u0E49\u0E07)", value: "\u2B05\uFE0F Medial (\u0E40\u0E02\u0E49\u0E32\u0E14\u0E49\u0E32\u0E19\u0E43\u0E19)" },
        { label: "Slide (\u0E44\u0E16\u0E25)", value: "\u27A1\uFE0F Lateral (\u0E2D\u0E2D\u0E01\u0E14\u0E49\u0E32\u0E19\u0E19\u0E2D\u0E01)" }
      ],
      clinicalWhy: "\u0E1A\u0E34\u0E14\u0E1D\u0E48\u0E32\u0E40\u0E17\u0E49\u0E32\u0E40\u0E02\u0E49\u0E32\u0E14\u0E49\u0E32\u0E19\u0E43\u0E19 \u0E40\u0E1B\u0E47\u0E19\u0E41\u0E01\u0E19\u0E2B\u0E25\u0E31\u0E01\u0E02\u0E2D\u0E07\u0E01\u0E32\u0E23\u0E17\u0E23\u0E07\u0E15\u0E31\u0E27\u0E40\u0E14\u0E34\u0E19\u0E1A\u0E19\u0E1E\u0E37\u0E49\u0E19\u0E02\u0E23\u0E38\u0E02\u0E23\u0E30",
      mobilization: "\u{1FA7A} Lateral Glide of Calcaneus: \u0E14\u0E36\u0E07\u0E2A\u0E49\u0E19\u0E40\u0E17\u0E49\u0E32\u0E44\u0E16\u0E25\u0E2D\u0E2D\u0E01\u0E14\u0E49\u0E32\u0E19\u0E02\u0E49\u0E32\u0E07"
    },
    subtalar_eversion: {
      rule: "Convex Calcaneus on Concave Talus (\u0E2A\u0E27\u0E19\u0E17\u0E32\u0E07\u0E01\u0E31\u0E19 \u21C4)",
      vectors: [
        { label: "Roll (\u0E01\u0E25\u0E34\u0E49\u0E07)", value: "\u27A1\uFE0F Lateral (\u0E2D\u0E2D\u0E01\u0E14\u0E49\u0E32\u0E19\u0E19\u0E2D\u0E01)" },
        { label: "Slide (\u0E44\u0E16\u0E25)", value: "\u2B05\uFE0F Medial (\u0E40\u0E02\u0E49\u0E32\u0E14\u0E49\u0E32\u0E19\u0E43\u0E19)" }
      ],
      clinicalWhy: "\u0E1A\u0E34\u0E14\u0E1D\u0E48\u0E32\u0E40\u0E17\u0E49\u0E32\u0E2D\u0E2D\u0E01\u0E14\u0E49\u0E32\u0E19\u0E19\u0E2D\u0E01 \u0E0A\u0E48\u0E27\u0E22\u0E14\u0E39\u0E14\u0E0B\u0E31\u0E1A\u0E41\u0E23\u0E07\u0E01\u0E23\u0E30\u0E41\u0E17\u0E01\u0E15\u0E2D\u0E19\u0E2A\u0E49\u0E19\u0E40\u0E17\u0E49\u0E32\u0E2A\u0E31\u0E21\u0E1C\u0E31\u0E2A\u0E1E\u0E37\u0E49\u0E19 (Initial Contact)",
      mobilization: "\u{1FA7A} Medial Glide of Calcaneus: \u0E14\u0E31\u0E19\u0E2A\u0E49\u0E19\u0E40\u0E17\u0E49\u0E32\u0E44\u0E16\u0E25\u0E40\u0E02\u0E49\u0E32\u0E14\u0E49\u0E32\u0E19\u0E43\u0E19"
    },
    subtalar_pronation: {
      rule: "Mobile Adapter (\u0E40\u0E17\u0E49\u0E32\u0E22\u0E37\u0E14\u0E2B\u0E22\u0E38\u0E48\u0E19\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E0B\u0E31\u0E1A\u0E41\u0E23\u0E07\u0E01\u0E23\u0E30\u0E41\u0E17\u0E01)",
      vectors: [
        { label: "Triplanar (3 \u0E21\u0E34\u0E15\u0E34)", value: "Eversion + Abduction + Dorsiflexion" },
        { label: "Midtarsal Joint", value: "\u0E41\u0E01\u0E19\u0E02\u0E19\u0E32\u0E19\u0E01\u0E31\u0E19 \u0E2D\u0E38\u0E49\u0E07\u0E40\u0E17\u0E49\u0E32\u0E04\u0E25\u0E32\u0E22\u0E15\u0E31\u0E27\u0E41\u0E19\u0E1A\u0E1E\u0E37\u0E49\u0E19" }
      ],
      clinicalWhy: "\u0E1B\u0E25\u0E14\u0E25\u0E47\u0E2D\u0E01\u0E02\u0E49\u0E2D\u0E40\u0E17\u0E49\u0E32\u0E43\u0E2B\u0E49\u0E2D\u0E48\u0E2D\u0E19\u0E19\u0E38\u0E48\u0E21 \u0E0B\u0E31\u0E1A\u0E41\u0E23\u0E07\u0E01\u0E23\u0E30\u0E41\u0E17\u0E01\u0E44\u0E14\u0E49\u0E40\u0E15\u0E47\u0E21\u0E17\u0E35\u0E48\u0E0A\u0E48\u0E27\u0E07\u0E15\u0E49\u0E19\u0E02\u0E2D\u0E07\u0E01\u0E32\u0E23\u0E23\u0E31\u0E1A\u0E19\u0E49\u0E33\u0E2B\u0E19\u0E31\u0E01",
      mobilization: "\u{1FA7A} Calcaneal medial glide \u0E23\u0E48\u0E27\u0E21\u0E01\u0E31\u0E1A Forefoot pronation mobilization"
    },
    subtalar_supination: {
      rule: "Rigid Lever (\u0E04\u0E32\u0E19\u0E41\u0E02\u0E47\u0E07\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E14\u0E35\u0E14\u0E2A\u0E48\u0E07\u0E41\u0E23\u0E07\u0E40\u0E14\u0E34\u0E19)",
      vectors: [
        { label: "Triplanar (3 \u0E21\u0E34\u0E15\u0E34)", value: "Inversion + Adduction + Plantarflexion" },
        { label: "Midtarsal Joint", value: "\u0E41\u0E01\u0E19\u0E44\u0E02\u0E27\u0E49\u0E25\u0E47\u0E2D\u0E01\u0E01\u0E31\u0E19\u0E41\u0E19\u0E48\u0E19 \u0E40\u0E17\u0E49\u0E32\u0E01\u0E25\u0E32\u0E22\u0E40\u0E1B\u0E47\u0E19\u0E04\u0E32\u0E19\u0E41\u0E02\u0E47\u0E07" }
      ],
      clinicalWhy: "\u0E25\u0E47\u0E2D\u0E01\u0E01\u0E23\u0E30\u0E14\u0E39\u0E01\u0E40\u0E17\u0E49\u0E32\u0E17\u0E31\u0E49\u0E07\u0E2B\u0E21\u0E14\u0E43\u0E2B\u0E49\u0E40\u0E1B\u0E47\u0E19\u0E04\u0E32\u0E19\u0E41\u0E02\u0E47\u0E07 \u0E14\u0E35\u0E14\u0E2A\u0E48\u0E07\u0E15\u0E31\u0E27\u0E01\u0E49\u0E32\u0E27\u0E44\u0E1B\u0E02\u0E49\u0E32\u0E07\u0E2B\u0E19\u0E49\u0E32 (Push-off)",
      mobilization: "\u{1FA7A} Calcaneal lateral glide \u0E23\u0E48\u0E27\u0E21\u0E01\u0E31\u0E1A Forefoot supination mobilization"
    },
    first_mtp_extension: {
      rule: "Concave Phalanx on Convex Metatarsal head (\u0E17\u0E32\u0E07\u0E40\u0E14\u0E35\u0E22\u0E27\u0E01\u0E31\u0E19 \u21C9)",
      vectors: [
        { label: "Roll & Slide", value: "Dorsal (\u0E02\u0E36\u0E49\u0E19\u0E14\u0E49\u0E32\u0E19\u0E1A\u0E19\u0E17\u0E31\u0E49\u0E07\u0E04\u0E39\u0E48)" }
      ],
      clinicalWhy: "\u0E15\u0E49\u0E2D\u0E07\u0E01\u0E32\u0E23\u0E2D\u0E22\u0E48\u0E32\u0E07\u0E19\u0E49\u0E2D\u0E22 65\xB0 \u0E43\u0E19\u0E0A\u0E48\u0E27\u0E07 Push-off (Windlass mechanism \u0E14\u0E36\u0E07 Plantar fascia \u0E15\u0E36\u0E07\u0E0A\u0E48\u0E27\u0E22\u0E1E\u0E22\u0E38\u0E07\u0E2D\u0E38\u0E49\u0E07\u0E40\u0E17\u0E49\u0E32)",
      mobilization: "\u{1FA7A} Dorsal Glide of 1st Phalanx: \u0E14\u0E31\u0E19\u0E02\u0E49\u0E2D\u0E19\u0E34\u0E49\u0E27\u0E42\u0E1B\u0E49\u0E07\u0E40\u0E17\u0E49\u0E32\u0E02\u0E36\u0E49\u0E19\u0E14\u0E49\u0E32\u0E19\u0E1A\u0E19"
    },
    first_mtp_flexion: {
      rule: "Concave-on-Convex (\u0E17\u0E32\u0E07\u0E40\u0E14\u0E35\u0E22\u0E27\u0E01\u0E31\u0E19 \u21C9)",
      vectors: [
        { label: "Roll & Slide", value: "Plantar (\u0E25\u0E07\u0E14\u0E49\u0E32\u0E19\u0E25\u0E48\u0E32\u0E07\u0E17\u0E31\u0E49\u0E07\u0E04\u0E39\u0E48)" }
      ],
      clinicalWhy: "\u0E40\u0E01\u0E32\u0E30\u0E1E\u0E37\u0E49\u0E19\u0E0A\u0E48\u0E27\u0E22\u0E17\u0E23\u0E07\u0E15\u0E31\u0E27\u0E43\u0E19\u0E02\u0E13\u0E30\u0E22\u0E37\u0E19",
      mobilization: "\u{1FA7A} Plantar Glide of 1st Phalanx: \u0E01\u0E14\u0E02\u0E49\u0E2D\u0E19\u0E34\u0E49\u0E27\u0E42\u0E1B\u0E49\u0E07\u0E40\u0E17\u0E49\u0E32\u0E25\u0E07\u0E14\u0E49\u0E32\u0E19\u0E25\u0E48\u0E32\u0E07"
    },
    // =================== SPINE & TMJ ===================
    cervical_flexion: {
      rule: "Bilateral Symmetrical Facet Gliding (Neumann Ch. 9)",
      vectors: [
        { label: "Facet Joints", value: "\u2B06\uFE0F Superior & Anterior slide" },
        { label: "C0-C1", value: "Roll Anterior, Slide Posterior" }
      ],
      clinicalWhy: "\u0E40\u0E1B\u0E34\u0E14\u0E0A\u0E48\u0E2D\u0E07\u0E27\u0E48\u0E32\u0E07 Intervertebral Foramen \u0E01\u0E27\u0E49\u0E32\u0E07\u0E02\u0E36\u0E49\u0E19 \u0E25\u0E14\u0E01\u0E32\u0E23\u0E01\u0E14\u0E17\u0E31\u0E1A\u0E23\u0E32\u0E01\u0E1B\u0E23\u0E30\u0E2A\u0E32\u0E17\u0E04\u0E2D",
      mobilization: "\u{1FA7A} Bilateral PA Glide \u0E1A\u0E19\u0E01\u0E23\u0E30\u0E14\u0E39\u0E01\u0E04\u0E2D\u0E0A\u0E34\u0E49\u0E19\u0E25\u0E48\u0E32\u0E07"
    },
    cervical_extension: {
      rule: "Bilateral Symmetrical Facet Gliding",
      vectors: [
        { label: "Facet Joints", value: "\u2B07\uFE0F Inferior & Posterior slide" },
        { label: "C0-C1", value: "Roll Posterior, Slide Anterior" }
      ],
      clinicalWhy: "\u0E01\u0E23\u0E30\u0E14\u0E39\u0E01 Facet \u0E1B\u0E23\u0E30\u0E01\u0E1A\u0E0A\u0E34\u0E14\u0E01\u0E31\u0E19 \u0E0A\u0E48\u0E2D\u0E07\u0E23\u0E32\u0E01\u0E1B\u0E23\u0E30\u0E2A\u0E32\u0E17\u0E41\u0E04\u0E1A\u0E25\u0E07 \u0E23\u0E30\u0E27\u0E31\u0E07\u0E43\u0E19\u0E1C\u0E39\u0E49\u0E1B\u0E48\u0E27\u0E22 Cervical Radiculopathy",
      mobilization: "\u{1FA7A} Central PA Glide with extension bias"
    },
    cervical_lateral_flexion: {
      rule: "Coupled Motion with Cervical Rotation",
      vectors: [
        { label: "\u0E02\u0E49\u0E32\u0E07\u0E17\u0E35\u0E48\u0E40\u0E2D\u0E35\u0E22\u0E07", value: "\u2B07\uFE0F Inferior & Posterior slide (\u0E1B\u0E34\u0E14\u0E0A\u0E48\u0E2D\u0E07)" },
        { label: "\u0E02\u0E49\u0E32\u0E07\u0E15\u0E23\u0E07\u0E02\u0E49\u0E32\u0E21", value: "\u2B06\uFE0F Superior & Anterior slide (\u0E40\u0E1B\u0E34\u0E14\u0E0A\u0E48\u0E2D\u0E07)" }
      ],
      clinicalWhy: "\u0E40\u0E2D\u0E35\u0E22\u0E07\u0E04\u0E2D\u0E14\u0E49\u0E32\u0E19\u0E44\u0E2B\u0E19 \u0E0A\u0E48\u0E2D\u0E07\u0E23\u0E32\u0E01\u0E1B\u0E23\u0E30\u0E2A\u0E32\u0E17\u0E14\u0E49\u0E32\u0E19\u0E19\u0E31\u0E49\u0E19\u0E08\u0E30\u0E41\u0E04\u0E1A\u0E25\u0E07",
      mobilization: "\u{1FA7A} Unilateral PA glide \u0E1A\u0E19\u0E02\u0E49\u0E2D\u0E15\u0E48\u0E2D\u0E02\u0E49\u0E32\u0E07\u0E17\u0E35\u0E48\u0E15\u0E34\u0E14\u0E02\u0E31\u0E14"
    },
    cervical_rotation: {
      rule: "Pivot Articulation around Odontoid process (Dens)",
      vectors: [
        { label: "C1-C2 (AA)", value: "\u{1F300} 50% \u0E02\u0E2D\u0E07\u0E01\u0E32\u0E23\u0E2B\u0E21\u0E38\u0E19\u0E40\u0E01\u0E34\u0E14\u0E02\u0E36\u0E49\u0E19\u0E17\u0E35\u0E48\u0E19\u0E35\u0E48" },
        { label: "C2-C7", value: "Ipsilateral inferior, Contralateral superior slide" }
      ],
      clinicalWhy: "\u0E2B\u0E31\u0E19\u0E2B\u0E19\u0E49\u0E32\u0E0B\u0E49\u0E32\u0E22\u0E02\u0E27\u0E32 \u0E2D\u0E32\u0E28\u0E31\u0E22 Alar ligament \u0E1B\u0E49\u0E2D\u0E07\u0E01\u0E31\u0E19\u0E01\u0E32\u0E23\u0E2B\u0E21\u0E38\u0E19\u0E40\u0E01\u0E34\u0E19 45\xB0",
      mobilization: "\u{1FA7A} AA unilateral anterior glide of C1 transverse process"
    },
    thoracolumbar_flexion: {
      rule: "Bilateral Facet Gliding",
      vectors: [
        { label: "Facet Joints", value: "\u2B06\uFE0F Upward & Forward gliding" }
      ],
      clinicalWhy: "\u0E40\u0E1B\u0E34\u0E14\u0E02\u0E22\u0E32\u0E22\u0E0A\u0E48\u0E2D\u0E07\u0E01\u0E23\u0E30\u0E14\u0E39\u0E01\u0E2A\u0E31\u0E19\u0E2B\u0E25\u0E31\u0E07 \u0E0A\u0E48\u0E27\u0E22\u0E1A\u0E23\u0E23\u0E40\u0E17\u0E32\u0E2D\u0E32\u0E01\u0E32\u0E23\u0E43\u0E19\u0E1C\u0E39\u0E49\u0E1B\u0E48\u0E27\u0E22 Spinal Stenosis",
      mobilization: "\u{1FA7A} Central PA pressure on lumbar spinous processes"
    },
    thoracolumbar_extension: {
      rule: "Bilateral Facet Gliding",
      vectors: [
        { label: "Facet Joints", value: "\u2B07\uFE0F Downward & Backward gliding" }
      ],
      clinicalWhy: "\u0E1B\u0E34\u0E14\u0E0A\u0E48\u0E2D\u0E07\u0E01\u0E23\u0E30\u0E14\u0E39\u0E01\u0E2A\u0E31\u0E19\u0E2B\u0E25\u0E31\u0E07 \u0E40\u0E1E\u0E34\u0E48\u0E21\u0E41\u0E23\u0E07\u0E01\u0E14\u0E1A\u0E19 Facet joints \u0E14\u0E31\u0E19\u0E2B\u0E21\u0E2D\u0E19\u0E23\u0E2D\u0E07\u0E01\u0E23\u0E30\u0E14\u0E39\u0E01\u0E44\u0E1B\u0E02\u0E49\u0E32\u0E07\u0E2B\u0E19\u0E49\u0E32",
      mobilization: "\u{1FA7A} Prone PA mobilization (\u0E15\u0E32\u0E21\u0E2B\u0E25\u0E31\u0E01 McKenzie extension)"
    },
    tmj_depression: {
      rule: "Two-compartment Articulation (Lower: Roll / Upper: Slide)",
      vectors: [
        { label: "\u0E0A\u0E48\u0E27\u0E07\u0E41\u0E23\u0E01 0-25 mm", value: "\u{1F504} Rotation / Roll \u0E43\u0E19\u0E0A\u0E48\u0E2D\u0E07\u0E02\u0E49\u0E2D\u0E25\u0E48\u0E32\u0E07" },
        { label: "\u0E0A\u0E48\u0E27\u0E07\u0E2B\u0E25\u0E31\u0E07 25-45 mm", value: "\u2194\uFE0F Anterior & Inferior Slide \u0E43\u0E19\u0E0A\u0E48\u0E2D\u0E07\u0E02\u0E49\u0E2D\u0E1A\u0E19" }
      ],
      clinicalWhy: "\u0E2B\u0E21\u0E2D\u0E19\u0E23\u0E2D\u0E07\u0E02\u0E49\u0E2D (Disc) \u0E08\u0E30\u0E40\u0E25\u0E37\u0E48\u0E2D\u0E19\u0E15\u0E32\u0E21 Condyle \u0E2B\u0E32\u0E01\u0E40\u0E04\u0E25\u0E37\u0E48\u0E2D\u0E19\u0E44\u0E21\u0E48\u0E2A\u0E31\u0E21\u0E1E\u0E31\u0E19\u0E18\u0E4C\u0E01\u0E31\u0E19\u0E08\u0E30\u0E40\u0E01\u0E34\u0E14\u0E40\u0E2A\u0E35\u0E22\u0E07\u0E04\u0E25\u0E34\u0E01 (Clicking/Popping)",
      mobilization: "\u{1FA7A} Inferior & Anterior Glide of Mandible (\u0E01\u0E14\u0E01\u0E23\u0E32\u0E21\u0E25\u0E07\u0E25\u0E48\u0E32\u0E07\u0E41\u0E25\u0E30\u0E14\u0E36\u0E07\u0E21\u0E32\u0E02\u0E49\u0E32\u0E07\u0E2B\u0E19\u0E49\u0E32)"
    },
    // =================== HAND PREHENSION & GRIPS ===================
    power_grip: {
      rule: "Multi-joint Synergistic Tenodesis & Cylindrical Grasp",
      vectors: [
        { label: "MCP Joints", value: "Flexion 70\xB0-80\xB0 (Roll & Slide Palmar)" },
        { label: "PIP/DIP Joints", value: "Flexion 80\xB0-90\xB0 (Tendon Excursion)" },
        { label: "Wrist Stabilization", value: "Extension 20\xB0-30\xB0 (\u0E1B\u0E49\u0E2D\u0E07\u0E01\u0E31\u0E19 Active Insufficiency)" }
      ],
      clinicalWhy: "\u0E01\u0E33\u0E27\u0E31\u0E15\u0E16\u0E38\u0E17\u0E23\u0E07\u0E01\u0E23\u0E30\u0E1A\u0E2D\u0E01 (\u0E40\u0E0A\u0E48\u0E19 \u0E04\u0E49\u0E2D\u0E19\u0E2B\u0E23\u0E37\u0E2D\u0E14\u0E49\u0E32\u0E21\u0E08\u0E31\u0E1A) \u0E01\u0E25\u0E49\u0E32\u0E21\u0E40\u0E19\u0E37\u0E49\u0E2D ECRB \u0E17\u0E33\u0E07\u0E32\u0E19\u0E1E\u0E22\u0E38\u0E07\u0E02\u0E49\u0E2D\u0E21\u0E37\u0E2D\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E43\u0E2B\u0E49 FDS/FDP \u0E1A\u0E35\u0E1A\u0E08\u0E31\u0E1A\u0E44\u0E14\u0E49\u0E41\u0E23\u0E07\u0E2A\u0E39\u0E07\u0E2A\u0E38\u0E14",
      mobilization: "\u{1FA7A} Volar glide of MCP/IP joints \u0E23\u0E48\u0E27\u0E21\u0E01\u0E31\u0E1A Dorsal radiocarpal mobilization"
    },
    tip_pinch: {
      rule: "Precision Prehension (FDP + FPL Index-Thumb Opposition)",
      vectors: [
        { label: "Thumb IP", value: "Flexion 30\xB0 (FPL tendon pull)" },
        { label: "Index DIP", value: "Flexion 40\xB0 (FDP tendon pull)" },
        { label: "Shape", value: '\u2B55 \u0E27\u0E07\u0E01\u0E25\u0E21\u0E2A\u0E21\u0E1A\u0E39\u0E23\u0E13\u0E4C "OK Sign" (Ainsworth circle)' }
      ],
      clinicalWhy: "\u0E2B\u0E22\u0E34\u0E1A\u0E02\u0E2D\u0E07\u0E40\u0E25\u0E47\u0E01\u0E08\u0E34\u0E4B\u0E27 (\u0E40\u0E0A\u0E48\u0E19 \u0E40\u0E21\u0E25\u0E47\u0E14\u0E16\u0E31\u0E48\u0E27\u0E2B\u0E23\u0E37\u0E2D\u0E40\u0E02\u0E47\u0E21) \u0E2D\u0E32\u0E28\u0E31\u0E22 Anterior Interosseous Nerve (AIN) \u0E04\u0E27\u0E1A\u0E04\u0E38\u0E21 \u0E2B\u0E32\u0E01\u0E40\u0E2A\u0E49\u0E19\u0E1B\u0E23\u0E30\u0E2A\u0E32\u0E17\u0E40\u0E2A\u0E35\u0E22\u0E08\u0E30\u0E40\u0E1B\u0E47\u0E19\u0E41\u0E1A\u0E1A Flat pinch",
      mobilization: "\u{1FA7A} Distraction & Palmar glide of 1st IP & Index DIP"
    },
    key_pinch: {
      rule: "Lateral Pinch (1st Dorsal Interosseous + Adductor Pollicis)",
      vectors: [
        { label: "Thumb Pad", value: "\u0E01\u0E14\u0E41\u0E19\u0E1A\u0E01\u0E31\u0E1A\u0E14\u0E49\u0E32\u0E19\u0E02\u0E49\u0E32\u0E07 Radial aspect \u0E02\u0E2D\u0E07\u0E19\u0E34\u0E49\u0E27\u0E0A\u0E35\u0E49" },
        { label: "Thumb CMC", value: "Adduction & Flexion \u0E21\u0E31\u0E48\u0E19\u0E04\u0E07\u0E2A\u0E39\u0E07\u0E2A\u0E38\u0E14" }
      ],
      clinicalWhy: "\u0E1A\u0E34\u0E14\u0E01\u0E38\u0E0D\u0E41\u0E08 \u0E40\u0E2A\u0E35\u0E22\u0E1A\u0E1A\u0E31\u0E15\u0E23 \u0E23\u0E39\u0E14\u0E0B\u0E34\u0E1B \u0E2D\u0E32\u0E28\u0E31\u0E22 Adductor pollicis \u0E41\u0E25\u0E30 1st Dorsal Interosseous (Ulnar Nerve)",
      mobilization: "\u{1FA7A} Medial glide of 1st Metacarpal \u0E1A\u0E19 Trapezium"
    },
    spherical_grip: {
      rule: "Spherical Grasp (Palmar Arch Cupping & Digital Abduction)",
      vectors: [
        { label: "MCP Joints", value: "Abduction \u0E01\u0E32\u0E07\u0E2D\u0E2D\u0E01\u0E42\u0E2D\u0E1A\u0E25\u0E49\u0E2D\u0E21\u0E27\u0E31\u0E15\u0E16\u0E38\u0E17\u0E23\u0E07\u0E01\u0E25\u0E21" },
        { label: "Palmar Arch", value: "Transverse & Longitudinal Arch \u0E22\u0E01\u0E42\u0E04\u0E49\u0E07\u0E25\u0E36\u0E01" }
      ],
      clinicalWhy: "\u0E08\u0E31\u0E1A\u0E25\u0E39\u0E01\u0E40\u0E17\u0E19\u0E19\u0E34\u0E2A \u0E25\u0E39\u0E01\u0E1A\u0E2D\u0E25 \u0E2B\u0E23\u0E37\u0E2D\u0E25\u0E39\u0E01\u0E1A\u0E34\u0E14\u0E1B\u0E23\u0E30\u0E15\u0E39 \u0E2D\u0E32\u0E28\u0E31\u0E22\u0E01\u0E25\u0E38\u0E48\u0E21\u0E01\u0E25\u0E49\u0E32\u0E21\u0E40\u0E19\u0E37\u0E49\u0E2D Hypothenar \u0E41\u0E25\u0E30 Interossei \u0E22\u0E01\u0E2D\u0E38\u0E49\u0E07\u0E21\u0E37\u0E2D",
      mobilization: "\u{1FA7A} Cupping mobilization \u0E02\u0E2D\u0E07 Transverse carpal arch"
    },
    open_hand: {
      rule: "Complete Digital Release & Extension (Extensor Digitorum)",
      vectors: [
        { label: "MCP Joints", value: "Extension 0\xB0 (EDC + Lumbricals)" },
        { label: "Thumb CMC", value: "Abduction & Extension 40\xB0-50\xB0" }
      ],
      clinicalWhy: "\u0E1B\u0E25\u0E48\u0E2D\u0E22\u0E27\u0E31\u0E15\u0E16\u0E38\u0E41\u0E25\u0E30\u0E40\u0E2B\u0E22\u0E35\u0E22\u0E14\u0E21\u0E37\u0E2D\u0E40\u0E15\u0E23\u0E35\u0E22\u0E21\u0E08\u0E31\u0E1A\u0E23\u0E30\u0E19\u0E32\u0E1A\u0E41\u0E1A\u0E19 \u0E25\u0E34\u0E21\u0E34\u0E15\u0E42\u0E14\u0E22 Flexor tendon sheath tightness",
      mobilization: "\u{1FA7A} Dorsal glide of MCP & IP joints"
    }
  };
  function getArthrokinematicsActionData(motionId, fallbackArthro = {}) {
    const custom = ARTHRO_ACTION_DATA[motionId];
    if (custom) {
      return {
        rule: custom.rule || fallbackArthro.rule || "Convex-Concave Articulation",
        vectors: custom.vectors || [],
        clinicalWhy: custom.clinicalWhy || fallbackArthro.description || "",
        mobilization: custom.mobilization || "\u{1FA7A} \u0E15\u0E32\u0E21\u0E41\u0E19\u0E27\u0E41\u0E01\u0E19\u0E23\u0E30\u0E19\u0E32\u0E1A\u0E01\u0E32\u0E23\u0E40\u0E04\u0E25\u0E37\u0E48\u0E2D\u0E19\u0E44\u0E2B\u0E27\u0E02\u0E2D\u0E07\u0E02\u0E49\u0E2D\u0E15\u0E48\u0E2D",
        closePacked: fallbackArthro.closePacked || "N/A",
        loosePacked: fallbackArthro.loosePacked || "N/A"
      };
    }
    return {
      rule: fallbackArthro.rule || "Arthrokinematic Articulation (Neumann)",
      vectors: [
        { label: "Kinematic Rule", value: fallbackArthro.rule || "Gliding & Translation" }
      ],
      clinicalWhy: fallbackArthro.description || "",
      mobilization: "\u{1FA7A} Joint Mobilization: \u0E15\u0E32\u0E21\u0E01\u0E0E Convex-Concave Rule \u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E04\u0E25\u0E32\u0E22\u0E40\u0E22\u0E37\u0E48\u0E2D\u0E2B\u0E38\u0E49\u0E21\u0E02\u0E49\u0E2D",
      closePacked: fallbackArthro.closePacked || "N/A",
      loosePacked: fallbackArthro.loosePacked || "N/A"
    };
  }

  // js/ui/detailPanel.js
  var DetailPanel = class {
    constructor(containerElement) {
      this.container = containerElement;
    }
    render(motionData) {
      if (!motionData) return;
      const {
        id,
        jointName,
        motionName,
        plane,
        axis,
        referenceRangeText,
        functionalRange,
        endFeel,
        arthrokinematics,
        muscles,
        goniometry,
        citations
      } = motionData;
      const actionData = getArthrokinematicsActionData(id, arthrokinematics);
      const vectorsHtml = actionData.vectors.map((v) => `
      <div class="arthro-vector-pill">
        <span class="vector-tag">${v.label}:</span>
        <span class="vector-val">${v.value}</span>
      </div>
    `).join("");
      const primeMoversHtml = muscles.primeMovers.map((m) => `
      <div class="muscle-item">
        <div class="muscle-name">${m.name}</div>
        <div class="muscle-nerve">
          <span class="nerve-icon">\u26A1</span> ${m.innervation}
        </div>
      </div>
    `).join("");
      const citationsHtml = citations.map((c) => `
      <div class="citation-badge">
        <span class="citation-book">\u{1F4D6} ${c.book}</span>: 
        <span class="citation-detail">${c.chapter} (${c.page})</span>
      </div>
    `).join("");
      const html = `
      <div class="detail-header">
        <div class="joint-title-group">
          <span class="plane-tag">${plane} Plane \u2022 ${axis}</span>
          <h2 class="joint-name">${jointName}</h2>
          <h3 class="motion-name">${motionName}</h3>
        </div>
      </div>

      <!-- Quick Metrics Grid -->
      <div class="metrics-grid">
        <div class="metric-card">
          <div class="metric-label">Normal Range (AAOS/Neumann)</div>
          <div class="metric-value highlight-teal">${referenceRangeText}</div>
        </div>
        <div class="metric-card">
          <div class="metric-label">Functional ADL Threshold</div>
          <div class="metric-value highlight-mint">${functionalRange}</div>
        </div>
      </div>

      <!-- Musculature & Innervation Section -->
      <div class="section-card">
        <div class="section-title">
          <span class="icon">\u{1F4AA}</span> Prime Movers & Innervation (Daniels & Worthingham)
        </div>
        <div class="muscle-list">
          ${primeMoversHtml}
        </div>
        <div class="muscle-subgroups">
          <div class="subgroup">
            <span class="subgroup-title">Synergists:</span>
            <span class="subgroup-content">${Array.isArray(muscles.synergists) ? muscles.synergists.map((s) => typeof s === "string" ? s : s.name).join(", ") : muscles.synergists}</span>
          </div>
          <div class="subgroup">
            <span class="subgroup-title">Antagonists:</span>
            <span class="subgroup-content">${muscles.antagonists.join(", ")}</span>
          </div>
        </div>
      </div>

      <!-- Standard Goniometry Protocol (Braddom / AAOS) -->
      <div class="section-card">
        <div class="section-title">
          <span class="icon">\u{1F4D0}</span> Goniometric Alignment Protocol (Braddom & AAOS)
        </div>
        <div class="goniometry-step">
          <strong>Patient Starting Position:</strong> ${goniometry.position}
        </div>
        <div class="goniometry-landmarks">
          <div class="landmark-item">
            <span class="landmark-tag fulcrum">Fulcrum / Axis:</span>
            <span>${goniometry.fulcrum}</span>
          </div>
          <div class="landmark-item">
            <span class="landmark-tag stat-arm">Stationary Arm:</span>
            <span>${goniometry.stationaryArm}</span>
          </div>
          <div class="landmark-item">
            <span class="landmark-tag mov-arm">Movable Arm:</span>
            <span>${goniometry.movableArm}</span>
          </div>
        </div>
        <div class="caution-box">
          <span class="caution-icon">\u26A0\uFE0F</span>
          <div class="caution-text">
            <strong>Compensatory Trick Movements to Stabilize:</strong> ${goniometry.substitutions}
          </div>
        </div>
      </div>

      <!-- Textbook Bibliography & Citations -->
      <div class="citations-card">
        <div class="citations-header">\u{1F4DA} Textbook References & Evidence Base</div>
        <div class="citations-list">
          ${citationsHtml}
        </div>
      </div>

      <!-- Arthrokinematics & Joint Play (Neumann) - Moved to bottom as Visual Action Cards -->
      <div class="section-card arthro-section-card">
        <div class="section-title">
          <span class="icon">\u{1F504}</span> Arthrokinematics & Joint Play (Neumann)
        </div>
        <div class="arthro-rule-badge">${actionData.rule}</div>

        <div class="arthro-action-grid">
          <!-- Vectors Card -->
          <div class="arthro-action-card vector-card">
            <div class="arthro-card-header">
              <span class="card-icon">\u{1F3AF}</span>
              <span class="card-title">\u0E17\u0E34\u0E28\u0E17\u0E32\u0E07\u0E01\u0E32\u0E23\u0E40\u0E04\u0E25\u0E37\u0E48\u0E2D\u0E19\u0E44\u0E2B\u0E27\u0E23\u0E30\u0E14\u0E31\u0E1A\u0E1C\u0E34\u0E27\u0E02\u0E49\u0E2D (Vectors)</span>
            </div>
            <div class="arthro-vector-list">
              ${vectorsHtml}
            </div>
          </div>

          <!-- Clinical Significance Card -->
          <div class="arthro-action-card clinical-card">
            <div class="arthro-card-header">
              <span class="card-icon">\u26A0\uFE0F</span>
              <span class="card-title">\u0E17\u0E33\u0E44\u0E21\u0E15\u0E49\u0E2D\u0E07\u0E23\u0E39\u0E49? (Clinical Significance)</span>
            </div>
            <div class="arthro-card-body">
              ${actionData.clinicalWhy}
            </div>
          </div>

          <!-- Joint Mobilization Card -->
          <div class="arthro-action-card mob-card">
            <div class="arthro-card-header">
              <span class="card-icon">\u{1FA7A}</span>
              <span class="card-title">\u0E17\u0E34\u0E28\u0E17\u0E32\u0E07\u0E01\u0E32\u0E23\u0E14\u0E31\u0E14\u0E02\u0E49\u0E2D\u0E41\u0E01\u0E49\u0E02\u0E49\u0E2D\u0E15\u0E34\u0E14 (Joint Mobilization)</span>
            </div>
            <div class="arthro-card-body">
              ${actionData.mobilization}
            </div>
          </div>
        </div>

        <div class="packed-grid">
          <div class="packed-box">
            <span class="packed-label">\u{1F512} Close-Packed (\u0E25\u0E47\u0E2D\u0E01\u0E41\u0E19\u0E48\u0E19\u0E2A\u0E38\u0E14):</span>
            <span class="packed-value">${actionData.closePacked}</span>
          </div>
          <div class="packed-box">
            <span class="packed-label">\u{1F513} Loose-Packed (\u0E17\u0E48\u0E32\u0E1E\u0E31\u0E01/\u0E14\u0E31\u0E14\u0E02\u0E49\u0E2D):</span>
            <span class="packed-value">${actionData.loosePacked}</span>
          </div>
        </div>
      </div>
    `;
      this.container.innerHTML = html;
    }
  };

  // js/ui/posterView.js
  var PosterView = class {
    constructor() {
      this.modal = null;
      this.initModal();
    }
    initModal() {
      this.modal = document.createElement("div");
      this.modal.id = "poster-modal";
      this.modal.className = "poster-modal hidden";
      this.modal.innerHTML = `
      <div class="poster-modal-backdrop"></div>
      <div class="poster-modal-container">
        <div class="poster-toolbar">
          <div class="poster-toolbar-title">\u{1F4C4} Vertical A4 Medical Poster Infographic</div>
          <div class="poster-actions">
            <button id="btn-print-poster" class="btn-primary">\u{1F5A8}\uFE0F Print / Save PDF (A4)</button>
            <button id="btn-close-poster" class="btn-secondary">\u2715 Close</button>
          </div>
        </div>
        <div class="poster-content" id="printable-poster-area">
          <!-- Poster content dynamically generated -->
        </div>
      </div>
    `;
      document.body.appendChild(this.modal);
      this.modal.querySelector(".poster-modal-backdrop").addEventListener("click", () => this.hide());
      this.modal.querySelector("#btn-close-poster").addEventListener("click", () => this.hide());
      this.modal.querySelector("#btn-print-poster").addEventListener("click", () => {
        window.print();
      });
    }
    show() {
      this.renderPosterContent();
      this.modal.classList.remove("hidden");
      document.body.style.overflow = "hidden";
    }
    hide() {
      this.modal.classList.add("hidden");
      document.body.style.overflow = "";
    }
    renderPosterContent() {
      const posterArea = this.modal.querySelector("#printable-poster-area");
      const tableRows = Object.values(ROM_DATA).map((item) => `
      <tr>
        <td class="td-joint">
          <strong>${item.jointName}</strong>
          <div class="sub-motion">${item.motionName} (${item.plane})</div>
        </td>
        <td class="td-rom">
          <span class="rom-val">${item.referenceRangeText}</span>
        </td>
        <td class="td-endfeel">
          <strong>${item.endFeel.type.split("(")[0]}</strong>
          <div class="endfeel-desc">${item.endFeel.type.includes("(") ? item.endFeel.type.slice(item.endFeel.type.indexOf("(")) : ""}</div>
        </td>
        <td class="td-arthro">
          <span class="arthro-badge">${item.arthrokinematics.rule.slice(0, 32)}...</span>
        </td>
        <td class="td-muscles">
          <div class="muscle-line"><strong>${item.muscles.primeMovers[0].name}</strong></div>
          <div class="nerve-line">\u26A1 ${item.muscles.primeMovers[0].innervation}</div>
        </td>
        <td class="td-adl">
          <span class="adl-badge">${item.functionalRange}</span>
        </td>
      </tr>
    `).join("");
      posterArea.innerHTML = `
      <div class="a4-poster-page">
        <!-- HEADER -->
        <header class="poster-header">
          <div class="header-badges">
            <span class="badge-accreditation">CLINICAL KINESIOLOGY & REHABILITATION</span>
            <span class="badge-standard">AAOS \u2022 AMA \u2022 NEUMANN EVIDENCE BASE</span>
          </div>
          <h1 class="poster-main-title">HUMAN JOINT RANGE OF MOTION (ROM)</h1>
          <h2 class="poster-sub-title">A Comprehensive Biomechanical & Goniometric Reference Poster</h2>
          <div class="poster-meta">
            <span>\u{1F4DA} Sources: Neumann 3rd Ed \u2022 Braddom PM&R 7th Ed \u2022 Daniels & Worthingham 10th Ed</span>
            <span>\u{1F3E5} Physical Medicine, Orthopaedics & Biomechanics</span>
          </div>
        </header>

        <!-- CLINICAL DIAGNOSTIC ALGORITHM FLOWCHART -->
        <section class="poster-section">
          <div class="section-banner">
            <span class="banner-num">01</span> CLINICAL DIAGNOSTIC ALGORITHM: EVALUATION OF RESTRICTED JOINT MOBILITY
          </div>
          <div class="algorithm-flowchart">
            <div class="algo-node start">
              <strong>Patient with Decreased Active ROM</strong>
              <small>Loss of voluntary functional excursion</small>
            </div>
            <div class="algo-arrow">\u2794</div>
            <div class="algo-node decision">
              <strong>Examine Passive ROM (PROM)</strong>
              <small>Clinician applies overpressure at end-range</small>
            </div>
            <div class="algo-split">
              <div class="algo-branch">
                <div class="branch-label">PROM Normal > AROM</div>
                <div class="algo-card branch-weakness">
                  <strong>Muscular / Neurological Deficit</strong>
                  <ul>
                    <li>Tendon rupture or denervation</li>
                    <li>Upper/Lower motor neuron paresis</li>
                    <li>Pain inhibition / reflex spasm</li>
                  </ul>
                </div>
              </div>
              <div class="algo-branch">
                <div class="branch-label">PROM Restricted (= AROM)</div>
                <div class="algo-card branch-joint">
                  <strong>Joint Capsule / Articular Pathology</strong>
                  <div class="endfeel-triage">
                    <span class="ef-tag hard">Hard: Osteophyte / Bony block</span>
                    <span class="ef-tag firm">Firm: Capsular contracture</span>
                    <span class="ef-tag empty">Empty: Acute inflammation</span>
                    <span class="ef-tag spring">Springy: Meniscal displacement</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- MASTER COMPARISON TABLE -->
        <section class="poster-section">
          <div class="section-banner">
            <span class="banner-num">02</span> MASTER CLINICAL GONIOMETRIC & BIOMECHANICAL REFERENCE TABLE
          </div>
          <div class="table-container">
            <table class="poster-table">
              <thead>
                <tr>
                  <th>Joint Complex & Motion</th>
                  <th>Normal ROM</th>
                  <th>Normal End-Feel</th>
                  <th>Arthrokinematic Pattern</th>
                  <th>Primary Mover & Innervation</th>
                  <th>Functional ADL Threshold</th>
                </tr>
              </thead>
              <tbody>
                ${tableRows}
              </tbody>
            </table>
          </div>
        </section>

        <!-- CLINICAL BIOMECHANICAL PEARLS -->
        <section class="poster-section">
          <div class="section-banner">
            <span class="banner-num">03</span> ESSENTIAL BIOMECHANICAL PEARLS & COUPLING MECHANISMS (NEUMANN)
          </div>
          <div class="pearls-grid">
            <div class="pearl-card">
              <div class="pearl-header">
                <span class="pearl-icon">\u2696\uFE0F</span>
                <h4>Convex-on-Concave Rule</h4>
              </div>
              <p>When a convex articular surface moves on a stable concave surface (e.g. glenohumeral, hip), <strong>roll and slide occur in OPPOSITE directions</strong>. Inferior slide prevents humeral/femoral head abutment!</p>
            </div>

            <div class="pearl-card">
              <div class="pearl-header">
                <span class="pearl-icon">\u{1F504}</span>
                <h4>Scapulohumeral Rhythm (2:1)</h4>
              </div>
              <p>Full 180\xB0 shoulder elevation is distributed as <strong>120\xB0 Glenohumeral (GH)</strong> motion and <strong>60\xB0 Scapulothoracic (ST)</strong> upward rotation driven by the Serratus anterior & Trapezius force-couple.</p>
            </div>

            <div class="pearl-card">
              <div class="pearl-header">
                <span class="pearl-icon">\u{1F529}</span>
                <h4>Knee Screw-Home Mechanism</h4>
              </div>
              <p>During the final 30\xB0 of knee extension, the tibia automatically <strong>externally rotates ~10\xB0</strong> on the femur to mechanically lock into close-packed stability for effortless upright stance.</p>
            </div>

            <div class="pearl-card">
              <div class="pearl-header">
                <span class="pearl-icon">\u26F5</span>
                <h4>1st MTP Windlass Mechanism</h4>
              </div>
              <p>Great toe extension (>60\xB0) winds the plantar aponeurosis around the metatarsal head, raising the longitudinal arch and converting the foot into a <strong>rigid lever for terminal stance gait push-off</strong>.</p>
            </div>
          </div>
        </section>

        <!-- FOOTER -->
        <footer class="poster-footer">
          <div class="footer-left">
            <span>Department of Physical Medicine & Rehabilitation</span>
            <small>Interactive Anatomical Simulation Web Application Suite</small>
          </div>
          <div class="footer-right">
            <span>Format: Standard Medical Vertical A4 Infographic</span>
            <small>\xA9 Antigravity Medical Biomechanics</small>
          </div>
        </footer>
      </div>
    `;
    }
  };

  // js/app.js
  var App = class {
    constructor() {
      this.currentRegionId = "shoulder";
      this.currentMotionId = "shoulder_abduction";
      this.currentMotion = ROM_DATA["shoulder_abduction"];
      this.currentAngle = 0;
      this.activePathology = null;
      this.activeRestriction = null;
      this.scene = null;
      this.skeleton = null;
      this.kinematics = null;
      this.goniometer = null;
      this.arthrokinematics = null;
      this.controls = null;
      this.detailPanel = null;
      this.posterView = null;
      this.init();
    }
    init() {
      const viewportContainer = document.getElementById("viewport-container");
      this.scene = new SimulationScene(viewportContainer);
      this.skeleton = new SkeletonModel(this.scene.scene);
      this.kinematics = new KinematicsEngine(this.skeleton);
      this.goniometer = new VirtualGoniometer(this.scene.scene);
      this.arthrokinematics = new ArthrokinematicsVisualizer(this.scene.scene);
      this.controls = new ControlsManager(this);
      this.detailPanel = new DetailPanel(document.getElementById("detail-content"));
      this.posterView = new PosterView();
      this.populateDropdowns();
      const posterBtn = document.getElementById("btn-poster-mode");
      if (posterBtn) {
        posterBtn.addEventListener("click", () => {
          this.posterView.show();
        });
      }
      const toggleRefBtn = document.getElementById("btn-toggle-reference");
      const closeDetailBtn = document.getElementById("btn-close-detail");
      const detailPanel = document.getElementById("detail-panel");
      if (window.innerWidth <= 1024 && detailPanel) {
        detailPanel.classList.add("panel-collapsed");
      } else if (toggleRefBtn) {
        toggleRefBtn.classList.add("active");
      }
      if (toggleRefBtn && detailPanel) {
        toggleRefBtn.addEventListener("click", () => {
          const isCollapsed = detailPanel.classList.toggle("panel-collapsed");
          toggleRefBtn.classList.toggle("active", !isCollapsed);
          setTimeout(() => {
            window.dispatchEvent(new Event("resize"));
          }, 300);
        });
      }
      if (closeDetailBtn && detailPanel) {
        closeDetailBtn.addEventListener("click", () => {
          detailPanel.classList.add("panel-collapsed");
          if (toggleRefBtn) toggleRefBtn.classList.remove("active");
          setTimeout(() => {
            window.dispatchEvent(new Event("resize"));
          }, 300);
        });
      }
      this.scene.addUpdateCallback(() => {
        this.onSceneUpdate();
      });
      this.setMotion("shoulder_abduction");
    }
    populateDropdowns() {
      const regionSelect = document.getElementById("region-select");
      regionSelect.innerHTML = JOINT_REGIONS.map((r) => `
      <option value="${r.id}">${r.icon} ${r.name}</option>
    `).join("");
      regionSelect.value = this.currentRegionId;
      this.updateMotionDropdown(this.currentRegionId);
      const pathologySelect = document.getElementById("pathology-select");
      pathologySelect.innerHTML = PATHOLOGY_PRESETS.map((p) => `
      <option value="${p.id}">${p.name}</option>
    `).join("");
    }
    updateMotionDropdown(regionId) {
      const motionSelect = document.getElementById("motion-select");
      const motionsInRegion = Object.values(ROM_DATA).filter((m) => m.region === regionId);
      motionSelect.innerHTML = motionsInRegion.map((m) => `
      <option value="${m.id}">${m.motionName} \u2014 ${m.plane}</option>
    `).join("");
      if (motionsInRegion.length > 0) {
        this.setMotion(motionsInRegion[0].id);
      }
    }
    onRegionChange(regionId) {
      this.currentRegionId = regionId;
      const regionSelect = document.getElementById("region-select");
      if (regionSelect && regionSelect.value !== regionId) {
        regionSelect.value = regionId;
      }
      this.updateMotionDropdown(regionId);
    }
    onMotionChange(motionId) {
      this.setMotion(motionId);
    }
    onPathologyChange(pathologyId) {
      const preset = PATHOLOGY_PRESETS.find((p) => p.id === pathologyId);
      if (!preset || preset.id === "normal") {
        this.activePathology = null;
        this.activeRestriction = null;
        this.kinematics.setPathology(null);
        this.controls.clearPathologyAlert();
        this.controls.updateSliderRange(this.currentMotion);
        this.setAngle(this.currentMotion.normalMin, false);
        return;
      }
      this.activePathology = preset;
      this.kinematics.setPathology(preset.id);
      if (preset.restrictions && preset.restrictions[this.currentMotionId]) {
        this.applyActivePathology();
      } else if (preset.primaryJointId && ROM_DATA[preset.primaryJointId]) {
        const targetJoint = ROM_DATA[preset.primaryJointId];
        this.currentRegionId = targetJoint.region;
        document.getElementById("region-select").value = this.currentRegionId;
        this.updateMotionDropdown(this.currentRegionId);
        document.getElementById("motion-select").value = preset.primaryJointId;
        this.setMotion(preset.primaryJointId);
      }
    }
    applyActivePathology() {
      if (!this.activePathology || !this.activePathology.restrictions) {
        this.activeRestriction = null;
        this.controls.clearPathologyAlert();
        return;
      }
      const restriction = this.activePathology.restrictions[this.currentMotionId];
      if (restriction) {
        this.activeRestriction = restriction;
        this.controls.showPathologyAlert(this.activePathology, restriction);
        this.setAngle(restriction.targetDegrees, false);
        this.controls.slider.value = restriction.targetDegrees;
      } else {
        this.activeRestriction = null;
        this.controls.clearPathologyAlert();
      }
    }
    setMotion(motionId) {
      if (!ROM_DATA[motionId]) return;
      this.currentMotionId = motionId;
      this.currentMotion = ROM_DATA[motionId];
      this.currentAngle = this.currentMotion.normalMin;
      const motionSelect = document.getElementById("motion-select");
      if (motionSelect && motionSelect.value !== motionId) {
        motionSelect.value = motionId;
      }
      this.kinematics.setGrip("none");
      if (this.controls && this.controls.resetGripButtons) {
        this.controls.resetGripButtons();
      }
      if (this.activePathology && this.activePathology.restrictions && this.activePathology.restrictions[motionId]) {
        this.activeRestriction = this.activePathology.restrictions[motionId];
        this.controls.showPathologyAlert(this.activePathology, this.activeRestriction);
      } else {
        this.activeRestriction = null;
        this.controls.clearPathologyAlert();
      }
      const jointMeshKey = this.getJointKeyForMotion(motionId);
      this.skeleton.highlightJoint(jointMeshKey);
      this.controls.updateSliderRange(this.currentMotion);
      this.detailPanel.render(this.currentMotion);
      const initialAngle = this.activeRestriction ? this.activeRestriction.targetDegrees : this.currentAngle;
      this.setAngle(initialAngle, false);
      this.controls.slider.value = initialAngle;
      if (this.scene.currentCameraPreset === "joint_focus") {
        const jointPos = this.skeleton.getJointPosition(jointMeshKey);
        this.scene.setCameraPreset("joint_focus", jointPos);
      }
    }
    setAngle(angle, fromAnimation = false) {
      let effectiveAngle = angle;
      if (this.activeRestriction) {
        if (this.activeRestriction.max !== void 0 && effectiveAngle > this.activeRestriction.max) {
          effectiveAngle = this.activeRestriction.max;
        }
        if (this.activeRestriction.min !== void 0 && effectiveAngle < this.activeRestriction.min) {
          effectiveAngle = this.activeRestriction.min;
        }
      }
      this.currentAngle = effectiveAngle;
      this.kinematics.applyMotion(this.currentMotionId, effectiveAngle);
      this.controls.updateValueDisplay(effectiveAngle, this.currentMotion);
    }
    getJointKeyForMotion(motionId) {
      if (motionId.startsWith("cervical")) return "cervical";
      if (motionId.startsWith("thoracolumbar")) return "lumbar";
      if (motionId.startsWith("tmj")) return "tmj";
      if (motionId.startsWith("shoulder")) return "r_shoulder";
      if (motionId.startsWith("elbow")) return "r_elbow";
      if (motionId.startsWith("forearm")) return "r_forearm";
      if (motionId.startsWith("wrist")) return "r_wrist";
      if (motionId.startsWith("thumb")) return "r_thumb_cmc";
      if (motionId.startsWith("hip")) return "r_hip";
      if (motionId.startsWith("knee")) return "r_knee";
      if (motionId.startsWith("ankle")) return "r_ankle";
      if (motionId.startsWith("subtalar")) return "r_subtalar";
      if (motionId.startsWith("first_mtp")) return "r_first_mtp";
      return "r_shoulder";
    }
    setCameraPreset(preset, instant = false) {
      const jointMeshKey = this.getJointKeyForMotion(this.currentMotionId);
      const jointPos = this.skeleton.getJointPosition(jointMeshKey);
      this.scene.setCameraPreset(preset, jointPos, instant);
    }
    onSceneUpdate() {
      const jointMeshKey = this.getJointKeyForMotion(this.currentMotionId);
      const jointPos = this.skeleton.getJointPosition(jointMeshKey);
      this.goniometer.updatePose(
        this.currentMotionId,
        this.currentAngle,
        jointPos,
        this.currentMotion.plane
      );
      this.arthrokinematics.update(jointPos, this.currentMotion, this.currentAngle);
    }
  };
  function startApp() {
    if (!window.app) {
      window.app = new App();
    }
  }
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", startApp);
  } else {
    startApp();
  }
})();
