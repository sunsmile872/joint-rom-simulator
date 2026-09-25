/**
 * Comprehensive Arthrokinematics & Joint Play Action Data
 * Based on Donald A. Neumann (Kinesiology of the Musculoskeletal System)
 * and Manual Therapy Protocols (Kaltenborn / Maitland)
 */

export const ARTHRO_ACTION_DATA = {
  // =================== SHOULDER ===================
  shoulder_abduction: {
    rule: 'Convex-on-Concave (หัวกระดูกนูนบนเบ้าเว้า: ทิศทางสวนกัน ⇄)',
    vectors: [
      { label: 'Roll (กลิ้ง)', value: '⬆️ Superior (ขึ้นด้านบน)' },
      { label: 'Slide (ไถล)', value: '⬇️ Inferior (ลงด้านล่าง)' }
    ],
    clinicalWhy: '⚠️ ป้องกันการชน (Impingement): หากขาดการ Slide ลงล่าง หัวกระดูกจะลอยขึ้นชนขอบ Acromion ที่ 22° จนเอ็น Supraspinatus ฉีกขาด',
    mobilization: '🩺 Inferior Glide (กดหัวกระดูกลงล่าง): ดันหัวกระดูกต้นแขนลงล่าง เพื่อยืดแคปซูลด้านล่างและเพิ่มองศาการกางแขน'
  },
  shoulder_adduction: {
    rule: 'Convex-on-Concave (หัวกระดูกนูนบนเบ้าเว้า: ทิศทางสวนกัน ⇄)',
    vectors: [
      { label: 'Roll (กลิ้ง)', value: '⬇️ Inferior (ลงด้านล่าง)' },
      { label: 'Slide (ไถล)', value: '⬆️ Superior (ขึ้นด้านบน)' }
    ],
    clinicalWhy: 'คืนแขนกลับเข้าสู่แนวแกนลำตัว อาศัยแรงโน้มถ่วงและกล้ามเนื้อ Pectoralis major / Latissimus dorsi',
    mobilization: '🩺 Superior Glide (ดันหัวกระดูกขึ้นบน): เพื่อคลายแคปซูลด้านบน'
  },
  shoulder_flexion: {
    rule: 'Spin + Scapulohumeral Rhythm (สัดส่วน 2:1)',
    vectors: [
      { label: 'Spin (ควงสว่าน)', value: '🌀 หมุนรอบแกน ML อยู่กับที่' },
      { label: 'Slide', value: '↙️ Postero-inferior ช่วงปลาย' }
    ],
    clinicalWhy: 'ทุก ๆ 3° ที่ยกแขน จะเกิดที่ข้อไหล่ 2° และสะบักหมุนขึ้น 1° (Serratus anterior & Trapezius force-couple)',
    mobilization: '🩺 Postero-inferior Glide: ดันหัวกระดูกไปทางด้านหลังและล่าง เพื่อเพิ่มมุมงอแขนไปข้างหน้า'
  },
  shoulder_extension: {
    rule: 'Spin บนเบ้า Glenoid',
    vectors: [
      { label: 'Spin (ควงสว่าน)', value: '🌀 หมุนรอบแกน ML' },
      { label: 'Slide', value: '↗️ Anterior เล็กน้อย' }
    ],
    clinicalWhy: 'เอื้อมมือไปด้านหลัง ลิมิตโดย Anterior capsule และกล้ามเนื้อด้านหน้า',
    mobilization: '🩺 Anterior Glide: ดันหัวกระดูกมาทางด้านหน้า เพื่อเพิ่มมุมเหยียดแขนไปข้างหลัง'
  },
  shoulder_external_rotation: {
    rule: 'Convex-on-Concave (ทิศทางสวนกัน ⇄)',
    vectors: [
      { label: 'Roll (กลิ้ง)', value: '➡️ Posterior (ไปด้านหลัง)' },
      { label: 'Slide (ไถล)', value: '⬅️ Anterior (มาด้านหน้า)' }
    ],
    clinicalWhy: 'จำเป็นอย่างยิ่งในการกางแขนพ้น 90° เพื่อหมุนปุ่มกระดูกใหญ่ (Greater Tubercle) หลบขอบ Acromion',
    mobilization: '🩺 Anterior Glide (ดันหัวกระดูกมาด้านหน้า): ดันจากด้านหลังมาด้านหน้าเพื่อเพิ่ม External Rotation'
  },
  shoulder_internal_rotation: {
    rule: 'Convex-on-Concave (ทิศทางสวนกัน ⇄)',
    vectors: [
      { label: 'Roll (กลิ้ง)', value: '⬅️ Anterior (มาด้านหน้า)' },
      { label: 'Slide (ไถล)', value: '➡️ Posterior (ไปด้านหลัง)' }
    ],
    clinicalWhy: 'มักจำกัดในผู้ที่มี Posterior capsule ตึงตัว (GIRD - Glenohumeral Internal Rotation Deficit ในนักกีฬาขว้าง)',
    mobilization: '🩺 Posterior Glide (ดันหัวกระดูกไปด้านหลัง): กดหัวกระดูกลงไปด้านหลังเพื่อเพิ่ม Internal Rotation'
  },

  // =================== ELBOW & FOREARM ===================
  elbow_flexion: {
    rule: 'Concave-on-Convex (เบ้า Trochlear notch เว้าบน Trochlea นูน: ทางเดียวกัน ⇉)',
    vectors: [
      { label: 'Roll (กลิ้ง)', value: '⬆️ Anterior (ไปข้างหน้า)' },
      { label: 'Slide (ไถล)', value: '⬆️ Anterior (ไปข้างหน้า)' }
    ],
    clinicalWhy: 'มุมงอศอกสำคัญที่สุดในชีวิตประจำวันเพื่อหยิบอาหารเข้าปาก (ต้องการมุมงออย่างน้อย 130°)',
    mobilization: '🩺 Anterior Glide of Ulna/Radius: ดันกระดูกปลายแขนไปข้างหน้าเพื่อเพิ่มมุมงอศอก'
  },
  elbow_extension: {
    rule: 'Concave-on-Convex (ทิศทางเดียวกัน ⇉)',
    vectors: [
      { label: 'Roll (กลิ้ง)', value: '⬇️ Posterior (ไปข้างหลัง)' },
      { label: 'Slide (ไถล)', value: '⬇️ Posterior (ไปข้างหลัง)' }
    ],
    clinicalWhy: 'เหยียดสุดจนปุ่ม Olecranon ล็อกสนิทใน Olecranon fossa เป็น Close-packed มั่นคงสูงสุด',
    mobilization: '🩺 Posterior Glide of Ulna/Radius: ดันกระดูกปลายแขนไปข้างหลังเพื่อเพิ่มมุมเหยียดศอก'
  },
  forearm_pronation: {
    rule: 'Proximal: Convex on Concave / Distal: Concave on Convex',
    vectors: [
      { label: 'Proximal RU', value: 'Roll Anterior ⬅️, Slide Posterior ➡️' },
      { label: 'Distal RU', value: 'Roll & Slide Anterior ⬅️' }
    ],
    clinicalWhy: 'คว่ำมือเพื่อพิมพ์งานหรือหยิบจับสิ่งของบนโต๊ะ',
    mobilization: '🩺 Dorsal glide ของ Radial head ที่ข้อบน + Volar glide ของ Radius ที่ข้อมือ'
  },
  forearm_supination: {
    rule: 'Proximal: Convex on Concave / Distal: Concave on Convex',
    vectors: [
      { label: 'Proximal RU', value: 'Roll Posterior ➡️, Slide Anterior ⬅️' },
      { label: 'Distal RU', value: 'Roll & Slide Posterior ➡️' }
    ],
    clinicalWhy: 'หงายมือเพื่อรับของหรือตักอาหารเข้าปาก',
    mobilization: '🩺 Volar glide ของ Radial head ที่ข้อบน + Dorsal glide ของ Radius ที่ข้อมือ'
  },

  // =================== WRIST & HAND ===================
  wrist_flexion: {
    rule: 'Convex-on-Concave (กระดูก Carpal นูนบน Radius เว้า: สวนทางกัน ⇄)',
    vectors: [
      { label: 'Roll (กลิ้ง)', value: '⬇️ Palmar / Volar (ไปทางฝ่ามือ)' },
      { label: 'Slide (ไถล)', value: '⬆️ Dorsal (ไปทางหลังมือ)' }
    ],
    clinicalWhy: 'งอข้อมือเพื่อจับหรือลากสิ่งของ ลิมิตโดย Dorsal radiocarpal ligament',
    mobilization: '🩺 Dorsal Glide of Carpals: ดันกระดูกข้อมือไปทางหลังมือเพื่อเพิ่มมุมงอข้อมือ'
  },
  wrist_extension: {
    rule: 'Convex-on-Concave (ทิศทางสวนกัน ⇄)',
    vectors: [
      { label: 'Roll (กลิ้ง)', value: '⬆️ Dorsal (ไปทางหลังมือ)' },
      { label: 'Slide (ไถล)', value: '⬇️ Palmar / Volar (ไปทางฝ่ามือ)' }
    ],
    clinicalWhy: 'ท่าทรงพลังของมือ (Grip posture): ข้อมือต้องเหยียด 20-30° เพื่อให้กล้ามเนื้อกำมือมีแรงบีบสูงสุด',
    mobilization: '🩺 Palmar (Volar) Glide: ดันกระดูกข้อมือไปทางฝ่ามือเพื่อเพิ่มมุมกระดกข้อมือ'
  },
  wrist_radial_deviation: {
    rule: 'Convex-on-Concave (ทิศทางสวนกัน ⇄)',
    vectors: [
      { label: 'Roll (กลิ้ง)', value: '⬅️ Radial (ไปทางนิ้วโป้ง)' },
      { label: 'Slide (ไถล)', value: '➡️ Ulnar (ไปทางนิ้วก้อย)' }
    ],
    clinicalWhy: 'กระดูก Scaphoid กระดกงอลงและติดขอบ Radial styloid มุมจึงแคบกว่า (~20°)',
    mobilization: '🩺 Medial (Ulnar) Glide: ดันกระดูกข้อมือไปทางฝั่งนิ้วก้อย'
  },
  wrist_ulnar_deviation: {
    rule: 'Convex-on-Concave (ทิศทางสวนกัน ⇄)',
    vectors: [
      { label: 'Roll (กลิ้ง)', value: '➡️ Ulnar (ไปทางนิ้วก้อย)' },
      { label: 'Slide (ไถล)', value: '⬅️ Radial (ไปทางนิ้วโป้ง)' }
    ],
    clinicalWhy: 'มุมกว้างกว่า (~30°) เพราะฝั่งอัลนามีช่องว่างแผ่นกระดูกอ่อน TFCC รองรับ',
    mobilization: '🩺 Lateral (Radial) Glide: ดันกระดูกข้อมือไปทางฝั่งนิ้วโป้ง'
  },
  thumb_cmc_abduction: {
    rule: 'Saddle Joint: Convex Metacarpal on Concave Trapezium (สวนทางกัน ⇄)',
    vectors: [
      { label: 'Roll (กลิ้ง)', value: 'Palmar (ไปข้างหน้า)' },
      { label: 'Slide (ไถล)', value: 'Dorsal (ไปข้างหลัง)' }
    ],
    clinicalWhy: 'กางนิ้วโป้งออกจากฝ่ามือเพื่ออ้ามือจับแก้วน้ำหรือวัตถุทรงกลม',
    mobilization: '🩺 Dorsal Glide of 1st Metacarpal: เพื่อเพิ่มมุมกางนิ้วโป้ง'
  },
  thumb_cmc_flexion: {
    rule: 'Saddle Joint: Concave Metacarpal on Convex Trapezium (ทางเดียวกัน ⇉)',
    vectors: [
      { label: 'Roll (กลิ้ง)', value: 'Medial (เข้าด้านในฝ่ามือ)' },
      { label: 'Slide (ไถล)', value: 'Medial (เข้าด้านในฝ่ามือ)' }
    ],
    clinicalWhy: 'งอนิ้วโป้งพาดข้ามฝ่ามือ เป็นกลไกหลักร่วมกับการทำ Opposition',
    mobilization: '🩺 Medial / Ulnar Glide: เพื่อเพิ่มมุมงอนิ้วโป้ง'
  },
  thumb_opposition: {
    rule: 'Sequential Multi-planar Saddle Gliding (Neumann Ch. 8)',
    vectors: [
      { label: 'Phase 1', value: 'Abduction (Roll Palmar, Slide Dorsal)' },
      { label: 'Phase 2', value: 'Flexion & Medial Axial Rotation' }
    ],
    clinicalWhy: 'การเคลื่อนไหวสำคัญที่สุดของมือมนุษย์ ใช้ประกบปลายนิ้วหยิบจับสิ่งของทุกชนิด',
    mobilization: '🩺 Long-axis Distraction ร่วมกับ Palmar & Medial glide ของข้อ CMC 1'
  },

  // =================== HIP ===================
  hip_flexion: {
    rule: 'Convex-on-Concave (หัวกระดูกต้นขานูนในเบ้าก้นกระทะเว้า: สวนทางกัน ⇄)',
    vectors: [
      { label: 'Roll (กลิ้ง)', value: '⬆️ Anterior/Superior' },
      { label: 'Slide (ไถล)', value: '⬇️ Posterior/Inferior' }
    ],
    clinicalWhy: 'ก้าวขาขึ้นบันไดและนั่งเก้าอี้ ลิมิตโดย Posterior capsule และ Gluteus maximus',
    mobilization: '🩺 Posterior & Inferior Glide: ดันหัวกระดูกต้นขาไปด้านหลังและล่าง'
  },
  hip_extension: {
    rule: 'Convex-on-Concave (สวนทางกัน ⇄)',
    vectors: [
      { label: 'Roll (กลิ้ง)', value: '⬇️ Posterior' },
      { label: 'Slide (ไถล)', value: '⬆️ Anterior' }
    ],
    clinicalWhy: 'ยืดเหยียดเพื่อก้าวขาเดิน ลิมิตโดย Iliofemoral ligament (Y-ligament) ที่แข็งแรงที่สุดในร่างกาย',
    mobilization: '🩺 Anterior Glide: ดันหัวกระดูกต้นขามาด้านหน้า'
  },
  hip_abduction: {
    rule: 'Convex-on-Concave (สวนทางกัน ⇄)',
    vectors: [
      { label: 'Roll (กลิ้ง)', value: '↗️ Superior/Lateral' },
      { label: 'Slide (ไถล)', value: '↙️ Inferior/Medial' }
    ],
    clinicalWhy: 'ก้าวขาลงจากรถ ก้าวข้ามสิ่งกีดขวาง ลิมิตโดย Pubofemoral ligament',
    mobilization: '🩺 Inferior Glide of Femur: ดึง/ดันหัวกระดูกต้นขาลงล่าง'
  },
  hip_adduction: {
    rule: 'Convex-on-Concave (สวนทางกัน ⇄)',
    vectors: [
      { label: 'Roll (กลิ้ง)', value: '↙️ Medial' },
      { label: 'Slide (ไถล)', value: '↗️ Lateral' }
    ],
    clinicalWhy: 'การไขว่ห้างและการทรงตัวยืนขาเดียว',
    mobilization: '🩺 Lateral Glide: ดันหัวกระดูกต้นขาออกด้านนอก'
  },
  hip_internal_rotation: {
    rule: 'Convex-on-Concave (สวนทางกัน ⇄)',
    vectors: [
      { label: 'Roll (กลิ้ง)', value: '⬅️ Anterior' },
      { label: 'Slide (ไถล)', value: '➡️ Posterior' }
    ],
    clinicalWhy: 'สำคัญใน Stance phase ของการเดินเพื่อให้เชิงกรานหมุนไปข้างหน้า',
    mobilization: '🩺 Posterior Glide: ดันหัวกระดูกต้นขาไปด้านหลัง'
  },
  hip_external_rotation: {
    rule: 'Convex-on-Concave (สวนทางกัน ⇄)',
    vectors: [
      { label: 'Roll (กลิ้ง)', value: '➡️ Posterior' },
      { label: 'Slide (ไถล)', value: '⬅️ Anterior' }
    ],
    clinicalWhy: 'ท่านั่งขัดสมาธิ ลิมิตโดย Iliofemoral lig. ด้านหน้า',
    mobilization: '🩺 Anterior Glide: ดันหัวกระดูกต้นขามาด้านหน้า'
  },

  // =================== KNEE ===================
  knee_flexion: {
    rule: 'Concave-on-Convex (Open Chain: หน้าแข้งเว้าบนกระดูกต้นขานูน: ทางเดียวกัน ⇉)',
    vectors: [
      { label: 'Roll (กลิ้ง)', value: '⬇️ Posterior (ไปด้านหลัง)' },
      { label: 'Slide (ไถล)', value: '⬇️ Posterior (ไปด้านหลัง)' }
    ],
    clinicalWhy: 'งอเข่าเพื่อลงนั่ง คุกเข่า หรือวิ่ง ขณะงอ Meniscus จะถูกดึงถอยไปด้านหลัง',
    mobilization: '🩺 Posterior Glide of Tibia: ดันหัวกระดูกหน้าแข้งไปด้านหลังเพื่อเพิ่มมุมงอเข่า'
  },
  knee_extension: {
    rule: 'Concave-on-Convex (Open Chain: ทางเดียวกัน ⇉)',
    vectors: [
      { label: 'Roll (กลิ้ง)', value: '⬆️ Anterior (ไปด้านหน้า)' },
      { label: 'Slide (ไถล)', value: '⬆️ Anterior (ไปด้านหน้า)' }
    ],
    clinicalWhy: 'Screw-Home Mechanism: 10° สุดท้าย Tibia หมุนออกนอกเพื่อล็อกเข่าตรงรับน้ำหนักโดยไม่ต้องเกร็งกล้ามเนื้อ',
    mobilization: '🩺 Anterior Glide of Tibia: ดันหัวกระดูกหน้าแข้งมาด้านหน้าเพื่อเพิ่มมุมเหยียดเข่าตรง'
  },

  // =================== ANKLE & FOOT ===================
  ankle_dorsiflexion: {
    rule: 'Convex-on-Concave (กระดูก Talus ทรงโดมนูนในเบ้า Mortise เว้า: สวนทางกัน ⇄)',
    vectors: [
      { label: 'Roll (กลิ้ง)', value: '⬆️ Anterior (ไปข้างหน้า)' },
      { label: 'Slide (ไถล)', value: '⬇️ Posterior (ไปข้างหลัง)' }
    ],
    clinicalWhy: '⚠️ สำคัญที่สุดในการเดินและลงบันได: หากขาด Posterior slide ข้อเท้าจะติดกระดกไม่ขึ้นและเดินกะเผลก',
    mobilization: '🩺 Posterior Glide of Talus: ใช้มือกดดันกระดูก Talus ไปด้านหลังเพื่อเพิ่มมุมกระดกข้อเท้า'
  },
  ankle_plantarflexion: {
    rule: 'Convex-on-Concave (สวนทางกัน ⇄)',
    vectors: [
      { label: 'Roll (กลิ้ง)', value: '⬇️ Posterior (ไปข้างหลัง)' },
      { label: 'Slide (ไถล)', value: '⬆️ Anterior (ไปข้างหน้า)' }
    ],
    clinicalWhy: 'การเขย่งเท้า ถีบตัวกระโดด และกดคันเร่ง',
    mobilization: '🩺 Anterior Glide of Talus: ดึงกระดูก Talus มาข้างหน้า'
  },
  subtalar_inversion: {
    rule: 'Convex Calcaneus on Concave Talus (สวนทางกัน ⇄)',
    vectors: [
      { label: 'Roll (กลิ้ง)', value: '⬅️ Medial (เข้าด้านใน)' },
      { label: 'Slide (ไถล)', value: '➡️ Lateral (ออกด้านนอก)' }
    ],
    clinicalWhy: 'บิดฝ่าเท้าเข้าด้านใน เป็นแกนหลักของการทรงตัวเดินบนพื้นขรุขระ',
    mobilization: '🩺 Lateral Glide of Calcaneus: ดึงส้นเท้าไถลออกด้านข้าง'
  },
  subtalar_eversion: {
    rule: 'Convex Calcaneus on Concave Talus (สวนทางกัน ⇄)',
    vectors: [
      { label: 'Roll (กลิ้ง)', value: '➡️ Lateral (ออกด้านนอก)' },
      { label: 'Slide (ไถล)', value: '⬅️ Medial (เข้าด้านใน)' }
    ],
    clinicalWhy: 'บิดฝ่าเท้าออกด้านนอก ช่วยดูดซับแรงกระแทกตอนส้นเท้าสัมผัสพื้น (Initial Contact)',
    mobilization: '🩺 Medial Glide of Calcaneus: ดันส้นเท้าไถลเข้าด้านใน'
  },
  subtalar_pronation: {
    rule: 'Mobile Adapter (เท้ายืดหยุ่นเพื่อซับแรงกระแทก)',
    vectors: [
      { label: 'Triplanar (3 มิติ)', value: 'Eversion + Abduction + Dorsiflexion' },
      { label: 'Midtarsal Joint', value: 'แกนขนานกัน อุ้งเท้าคลายตัวแนบพื้น' }
    ],
    clinicalWhy: 'ปลดล็อกข้อเท้าให้อ่อนนุ่ม ซับแรงกระแทกได้เต็มที่ช่วงต้นของการรับน้ำหนัก',
    mobilization: '🩺 Calcaneal medial glide ร่วมกับ Forefoot pronation mobilization'
  },
  subtalar_supination: {
    rule: 'Rigid Lever (คานแข็งเพื่อดีดส่งแรงเดิน)',
    vectors: [
      { label: 'Triplanar (3 มิติ)', value: 'Inversion + Adduction + Plantarflexion' },
      { label: 'Midtarsal Joint', value: 'แกนไขว้ล็อกกันแน่น เท้ากลายเป็นคานแข็ง' }
    ],
    clinicalWhy: 'ล็อกกระดูกเท้าทั้งหมดให้เป็นคานแข็ง ดีดส่งตัวก้าวไปข้างหน้า (Push-off)',
    mobilization: '🩺 Calcaneal lateral glide ร่วมกับ Forefoot supination mobilization'
  },
  first_mtp_extension: {
    rule: 'Concave Phalanx on Convex Metatarsal head (ทางเดียวกัน ⇉)',
    vectors: [
      { label: 'Roll & Slide', value: 'Dorsal (ขึ้นด้านบนทั้งคู่)' }
    ],
    clinicalWhy: 'ต้องการอย่างน้อย 65° ในช่วง Push-off (Windlass mechanism ดึง Plantar fascia ตึงช่วยพยุงอุ้งเท้า)',
    mobilization: '🩺 Dorsal Glide of 1st Phalanx: ดันข้อนิ้วโป้งเท้าขึ้นด้านบน'
  },
  first_mtp_flexion: {
    rule: 'Concave-on-Convex (ทางเดียวกัน ⇉)',
    vectors: [
      { label: 'Roll & Slide', value: 'Plantar (ลงด้านล่างทั้งคู่)' }
    ],
    clinicalWhy: 'เกาะพื้นช่วยทรงตัวในขณะยืน',
    mobilization: '🩺 Plantar Glide of 1st Phalanx: กดข้อนิ้วโป้งเท้าลงด้านล่าง'
  },

  // =================== SPINE & TMJ ===================
  cervical_flexion: {
    rule: 'Bilateral Symmetrical Facet Gliding (Neumann Ch. 9)',
    vectors: [
      { label: 'Facet Joints', value: '⬆️ Superior & Anterior slide' },
      { label: 'C0-C1', value: 'Roll Anterior, Slide Posterior' }
    ],
    clinicalWhy: 'เปิดช่องว่าง Intervertebral Foramen กว้างขึ้น ลดการกดทับรากประสาทคอ',
    mobilization: '🩺 Bilateral PA Glide บนกระดูกคอชิ้นล่าง'
  },
  cervical_extension: {
    rule: 'Bilateral Symmetrical Facet Gliding',
    vectors: [
      { label: 'Facet Joints', value: '⬇️ Inferior & Posterior slide' },
      { label: 'C0-C1', value: 'Roll Posterior, Slide Anterior' }
    ],
    clinicalWhy: 'กระดูก Facet ประกบชิดกัน ช่องรากประสาทแคบลง ระวังในผู้ป่วย Cervical Radiculopathy',
    mobilization: '🩺 Central PA Glide with extension bias'
  },
  cervical_lateral_flexion: {
    rule: 'Coupled Motion with Cervical Rotation',
    vectors: [
      { label: 'ข้างที่เอียง', value: '⬇️ Inferior & Posterior slide (ปิดช่อง)' },
      { label: 'ข้างตรงข้าม', value: '⬆️ Superior & Anterior slide (เปิดช่อง)' }
    ],
    clinicalWhy: 'เอียงคอด้านไหน ช่องรากประสาทด้านนั้นจะแคบลง',
    mobilization: '🩺 Unilateral PA glide บนข้อต่อข้างที่ติดขัด'
  },
  cervical_rotation: {
    rule: 'Pivot Articulation around Odontoid process (Dens)',
    vectors: [
      { label: 'C1-C2 (AA)', value: '🌀 50% ของการหมุนเกิดขึ้นที่นี่' },
      { label: 'C2-C7', value: 'Ipsilateral inferior, Contralateral superior slide' }
    ],
    clinicalWhy: 'หันหน้าซ้ายขวา อาศัย Alar ligament ป้องกันการหมุนเกิน 45°',
    mobilization: '🩺 AA unilateral anterior glide of C1 transverse process'
  },
  thoracolumbar_flexion: {
    rule: 'Bilateral Facet Gliding',
    vectors: [
      { label: 'Facet Joints', value: '⬆️ Upward & Forward gliding' }
    ],
    clinicalWhy: 'เปิดขยายช่องกระดูกสันหลัง ช่วยบรรเทาอาการในผู้ป่วย Spinal Stenosis',
    mobilization: '🩺 Central PA pressure on lumbar spinous processes'
  },
  thoracolumbar_extension: {
    rule: 'Bilateral Facet Gliding',
    vectors: [
      { label: 'Facet Joints', value: '⬇️ Downward & Backward gliding' }
    ],
    clinicalWhy: 'ปิดช่องกระดูกสันหลัง เพิ่มแรงกดบน Facet joints ดันหมอนรองกระดูกไปข้างหน้า',
    mobilization: '🩺 Prone PA mobilization (ตามหลัก McKenzie extension)'
  },
  tmj_depression: {
    rule: 'Two-compartment Articulation (Lower: Roll / Upper: Slide)',
    vectors: [
      { label: 'ช่วงแรก 0-25 mm', value: '🔄 Rotation / Roll ในช่องข้อล่าง' },
      { label: 'ช่วงหลัง 25-45 mm', value: '↔️ Anterior & Inferior Slide ในช่องข้อบน' }
    ],
    clinicalWhy: 'หมอนรองข้อ (Disc) จะเลื่อนตาม Condyle หากเคลื่อนไม่สัมพันธ์กันจะเกิดเสียงคลิก (Clicking/Popping)',
    mobilization: '🩺 Inferior & Anterior Glide of Mandible (กดกรามลงล่างและดึงมาข้างหน้า)'
  },

  // =================== HAND PREHENSION & GRIPS ===================
  power_grip: {
    rule: 'Multi-joint Synergistic Tenodesis & Cylindrical Grasp',
    vectors: [
      { label: 'MCP Joints', value: 'Flexion 70°-80° (Roll & Slide Palmar)' },
      { label: 'PIP/DIP Joints', value: 'Flexion 80°-90° (Tendon Excursion)' },
      { label: 'Wrist Stabilization', value: 'Extension 20°-30° (ป้องกัน Active Insufficiency)' }
    ],
    clinicalWhy: 'กำวัตถุทรงกระบอก (เช่น ค้อนหรือด้ามจับ) กล้ามเนื้อ ECRB ทำงานพยุงข้อมือเพื่อให้ FDS/FDP บีบจับได้แรงสูงสุด',
    mobilization: '🩺 Volar glide of MCP/IP joints ร่วมกับ Dorsal radiocarpal mobilization'
  },
  tip_pinch: {
    rule: 'Precision Prehension (FDP + FPL Index-Thumb Opposition)',
    vectors: [
      { label: 'Thumb IP', value: 'Flexion 30° (FPL tendon pull)' },
      { label: 'Index DIP', value: 'Flexion 40° (FDP tendon pull)' },
      { label: 'Shape', value: '⭕ วงกลมสมบูรณ์ "OK Sign" (Ainsworth circle)' }
    ],
    clinicalWhy: 'หยิบของเล็กจิ๋ว (เช่น เมล็ดถั่วหรือเข็ม) อาศัย Anterior Interosseous Nerve (AIN) ควบคุม หากเส้นประสาทเสียจะเป็นแบบ Flat pinch',
    mobilization: '🩺 Distraction & Palmar glide of 1st IP & Index DIP'
  },
  key_pinch: {
    rule: 'Lateral Pinch (1st Dorsal Interosseous + Adductor Pollicis)',
    vectors: [
      { label: 'Thumb Pad', value: 'กดแนบกับด้านข้าง Radial aspect ของนิ้วชี้' },
      { label: 'Thumb CMC', value: 'Adduction & Flexion มั่นคงสูงสุด' }
    ],
    clinicalWhy: 'บิดกุญแจ เสียบบัตร รูดซิป อาศัย Adductor pollicis และ 1st Dorsal Interosseous (Ulnar Nerve)',
    mobilization: '🩺 Medial glide of 1st Metacarpal บน Trapezium'
  },
  spherical_grip: {
    rule: 'Spherical Grasp (Palmar Arch Cupping & Digital Abduction)',
    vectors: [
      { label: 'MCP Joints', value: 'Abduction กางออกโอบล้อมวัตถุทรงกลม' },
      { label: 'Palmar Arch', value: 'Transverse & Longitudinal Arch ยกโค้งลึก' }
    ],
    clinicalWhy: 'จับลูกเทนนิส ลูกบอล หรือลูกบิดประตู อาศัยกลุ่มกล้ามเนื้อ Hypothenar และ Interossei ยกอุ้งมือ',
    mobilization: '🩺 Cupping mobilization ของ Transverse carpal arch'
  },
  open_hand: {
    rule: 'Complete Digital Release & Extension (Extensor Digitorum)',
    vectors: [
      { label: 'MCP Joints', value: 'Extension 0° (EDC + Lumbricals)' },
      { label: 'Thumb CMC', value: 'Abduction & Extension 40°-50°' }
    ],
    clinicalWhy: 'ปล่อยวัตถุและเหยียดมือเตรียมจับระนาบแบน ลิมิตโดย Flexor tendon sheath tightness',
    mobilization: '🩺 Dorsal glide of MCP & IP joints'
  }
};

/**
 * Returns structured Arthrokinematics action data with fallback
 */
export function getArthrokinematicsActionData(motionId, fallbackArthro = {}) {
  const custom = ARTHRO_ACTION_DATA[motionId];
  if (custom) {
    return {
      rule: custom.rule || fallbackArthro.rule || 'Convex-Concave Articulation',
      vectors: custom.vectors || [],
      clinicalWhy: custom.clinicalWhy || fallbackArthro.description || '',
      mobilization: custom.mobilization || '🩺 ตามแนวแกนระนาบการเคลื่อนไหวของข้อต่อ',
      closePacked: fallbackArthro.closePacked || 'N/A',
      loosePacked: fallbackArthro.loosePacked || 'N/A'
    };
  }

  // Fallback if not specifically mapped
  return {
    rule: fallbackArthro.rule || 'Arthrokinematic Articulation (Neumann)',
    vectors: [
      { label: 'Kinematic Rule', value: fallbackArthro.rule || 'Gliding & Translation' }
    ],
    clinicalWhy: fallbackArthro.description || '',
    mobilization: '🩺 Joint Mobilization: ตามกฎ Convex-Concave Rule เพื่อคลายเยื่อหุ้มข้อ',
    closePacked: fallbackArthro.closePacked || 'N/A',
    loosePacked: fallbackArthro.loosePacked || 'N/A'
  };
}
