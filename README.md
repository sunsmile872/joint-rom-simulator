# Antigravity Joint Range of Motion (ROM) Interactive Simulator

A medical-grade 3D biomechanical simulation web application for human joint Range of Motion (ROM), osteokinematics, arthrokinematics, and goniometry.

---

## 📖 Primary Textbook Bibliography & Evidence Base

This simulator is referenced directly from the physical medicine, rehabilitation, and kinesiology textbooks in the user's Google Drive archive:

1. **Donald A. Neumann, PT, PhD, FAPTA**  
   *Kinesiology of the Musculoskeletal System: Foundations for Rehabilitation* (3rd Edition, Elsevier, 2018)  
   - Chapter 1: *Getting Started (Osteokinematics & Arthrokinematics Principles)*  
   - Chapter 5: *Shoulder Complex (Scapulohumeral rhythm 2:1, GH roll & slide)*  
   - Chapter 6: *Elbow and Forearm (Humeroulnar hinge, Radioulnar pronation/supination)*  
   - Chapter 7 & 8: *Wrist and Hand (Carpal roll/slide, Thumb CMC saddle kinematics)*  
   - Chapter 9 & 10: *Axial Skeleton (Cervical apophyseal glide, Thoracolumbar flexion/extension)*  
   - Chapter 11: *Mastication and Ventilation (TMJ 2-phase roll-glide depression)*  
   - Chapter 12: *Hip (Coxofemoral ball-and-socket, Capsular windlass)*  
   - Chapter 13: *Knee (Tibiofemoral bicondylar hinge & Screw-Home rotational locking)*  
   - Chapter 14: *Ankle and Foot (Talocrural mortise, Subtalar triplanar, 1st MTP Windlass mechanism)*  

2. **David X. Cifu, MD et al.**  
   *Braddom's Physical Medicine and Rehabilitation* (6th/7th Edition, Elsevier, 2020)  
   - Musculoskeletal Examination and Standard Goniometric Bony Landmarks (Fulcrum, Stationary Arm, Movable Arm, and Stabilization)  
   - Functional ADL Thresholds and Contracture Management  

3. **Helen J. Hislop, PT, PhD et al.**  
   *Daniels and Worthingham's Muscle Testing: Techniques of Manual Examination and Performance Testing* (10th Edition, Saunders/Elsevier, 2018)  
   - Prime Movers, Synergists, Antagonists, and Peripheral Nerve / Spinal Root Innervations  

4. **American Academy of Orthopaedic Surgeons (AAOS)** & **AMA Guides to the Evaluation of Permanent Impairment**  
   - Standard reference normal range of motion values  

---

## 🌟 Key Features

1. **Hierarchical 3D Articulated Skeletal Rig (`Three.js`)**:
   - Accurate forward kinematics across all cardinal planes (Sagittal, Frontal, Transverse).
   - Real biomechanical coupling: **2:1 Scapulohumeral Rhythm**, **Knee Screw-Home External Rotation**, **TMJ 2-Phase Condylar Roll & Slide**, and **1st MTP Windlass Mechanism**.

2. **Interactive 3D Virtual Goniometer**:
   - Anchored directly to anatomical bony landmarks (e.g. acromion process, lateral epicondyle, greater trochanter, lateral malleolus, C7 spinous process, EAM).
   - Calibrated protractor dial with degree tick marks and dynamic swept arc angle display.

3. **Arthrokinematic Roll & Slide Visualizer**:
   - Dynamic 3D vector arrows representing Neumann's Convex-on-Concave (opposite directions) and Concave-on-Convex (same direction) arthrokinematic rules.

4. **Clinical Range Indicator & Animation Controller**:
   - Real-time numerical readout with color-coded status badges: Normal Physiological, Hypomobility / Restricted, Hypermobility / Laxity, and Impingement Risk.
   - Smooth physiological sinusoidal auto-cycle animation with speed adjustments (0.5x, 1.0x, 1.5x, 2.0x).

5. **Pathology Presets**:
   - Simulates common clinical restrictions including *Adhesive Capsulitis (Frozen Shoulder)*, *Knee Flexion Contracture*, *Hallux Rigidus*, and *Radial Nerve Palsy (Wrist Drop)*.

6. **Vertical A4 Medical Poster Infographic Mode**:
   - Renders a printable/exportable vertical A4 medical poster in dark navy blue, teal green, and mint theme, featuring:
     - Master Goniometric Comparison Table across all body joints
     - Clinical Diagnostic Algorithm Flowchart for evaluating restricted range of motion
     - Biomechanical Pearls summary.

---

## 🚀 How to Run

The application is built with modern, browser-native ES modules and includes local vendor libraries for offline operation.

### Option 1: Direct File Opening
Open `index.html` directly in any modern web browser (Google Chrome, Apple Safari, Mozilla Firefox, or Microsoft Edge).

### Option 2: Local HTTP Server
From the project directory:
```bash
python3 -m http.server 3000
```
Then navigate to `http://localhost:3000` in your web browser.
