import { JOINT_REGIONS, ROM_DATA, PATHOLOGY_PRESETS } from './data/romData.js';
import { SimulationScene } from './simulation/scene.js';
import { SkeletonModel } from './simulation/skeletonModel.js';
import { KinematicsEngine } from './simulation/kinematics.js';
import { VirtualGoniometer } from './simulation/goniometer.js';
import { ArthrokinematicsVisualizer } from './simulation/arthrokinematics.js';
import { ControlsManager } from './ui/controls.js';
import { DetailPanel } from './ui/detailPanel.js';
import { PosterView } from './ui/posterView.js';

class App {
  constructor() {
    this.currentRegionId = 'shoulder';
    this.currentMotionId = 'shoulder_abduction';
    this.currentMotion = ROM_DATA['shoulder_abduction'];
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
    // 1. Simulation 3D Viewport
    const viewportContainer = document.getElementById('viewport-container');
    this.scene = new SimulationScene(viewportContainer);
    this.skeleton = new SkeletonModel(this.scene.scene);
    this.kinematics = new KinematicsEngine(this.skeleton);
    this.goniometer = new VirtualGoniometer(this.scene.scene);
    this.arthrokinematics = new ArthrokinematicsVisualizer(this.scene.scene);

    // 2. UI Subsystems
    this.controls = new ControlsManager(this);
    this.detailPanel = new DetailPanel(document.getElementById('detail-content'));
    this.posterView = new PosterView();

    // 3. Populate Region & Motion Dropdowns
    this.populateDropdowns();

    // 4. Poster Mode Toggle Button
    const posterBtn = document.getElementById('btn-poster-mode');
    if (posterBtn) {
      posterBtn.addEventListener('click', () => {
        this.posterView.show();
      });
    }

    // 5. Connect Scene Update Loop
    this.scene.addUpdateCallback(() => {
      this.onSceneUpdate();
    });

    // 6. Set Initial Motion State
    this.setMotion('shoulder_abduction');
  }

  populateDropdowns() {
    const regionSelect = document.getElementById('region-select');
    regionSelect.innerHTML = JOINT_REGIONS.map(r => `
      <option value="${r.id}">${r.icon} ${r.name}</option>
    `).join('');
    regionSelect.value = this.currentRegionId;

    this.updateMotionDropdown(this.currentRegionId);

    const pathologySelect = document.getElementById('pathology-select');
    pathologySelect.innerHTML = PATHOLOGY_PRESETS.map(p => `
      <option value="${p.id}">${p.name}</option>
    `).join('');
  }

  updateMotionDropdown(regionId) {
    const motionSelect = document.getElementById('motion-select');
    const motionsInRegion = Object.values(ROM_DATA).filter(m => m.region === regionId);

    motionSelect.innerHTML = motionsInRegion.map(m => `
      <option value="${m.id}">${m.motionName} (${m.plane})</option>
    `).join('');

    if (motionsInRegion.length > 0) {
      this.setMotion(motionsInRegion[0].id);
    }
  }

  onRegionChange(regionId) {
    this.currentRegionId = regionId;
    this.updateMotionDropdown(regionId);
  }

  onMotionChange(motionId) {
    this.setMotion(motionId);
  }

  onPathologyChange(pathologyId) {
    const preset = PATHOLOGY_PRESETS.find(p => p.id === pathologyId);
    if (!preset) return;

    if (preset.id === 'normal') {
      this.setAngle(this.currentMotion.normalMin, false);
      return;
    }

    if (preset.jointId && ROM_DATA[preset.jointId]) {
      this.currentRegionId = ROM_DATA[preset.jointId].region;
      document.getElementById('region-select').value = this.currentRegionId;
      this.updateMotionDropdown(this.currentRegionId);
      document.getElementById('motion-select').value = preset.jointId;
      this.setMotion(preset.jointId);
      this.setAngle(preset.targetDegrees, false);
      this.controls.slider.value = preset.targetDegrees;
    }
  }

  setMotion(motionId) {
    if (!ROM_DATA[motionId]) return;

    this.currentMotionId = motionId;
    this.currentMotion = ROM_DATA[motionId];
    this.currentAngle = this.currentMotion.normalMin;

    // Highlight Joint Mesh
    const jointMeshKey = this.getJointKeyForMotion(motionId);
    this.skeleton.highlightJoint(jointMeshKey);

    // Update Slider & Values
    this.controls.updateSliderRange(this.currentMotion);

    // Update Clinical Details Panel
    this.detailPanel.render(this.currentMotion);

    // Apply zero pose
    this.kinematics.applyMotion(motionId, this.currentAngle);

    // Update camera focus if in joint_focus mode
    if (this.scene.currentCameraPreset === 'joint_focus') {
      const jointPos = this.skeleton.getJointPosition(jointMeshKey);
      this.scene.setCameraPreset('joint_focus', jointPos);
    }
  }

  setAngle(angle, fromAnimation = false) {
    this.currentAngle = angle;
    this.kinematics.applyMotion(this.currentMotionId, angle);
    this.controls.updateValueDisplay(angle, this.currentMotion);
  }

  getJointKeyForMotion(motionId) {
    if (motionId.startsWith('cervical')) return 'cervical';
    if (motionId.startsWith('thoracolumbar')) return 'lumbar';
    if (motionId.startsWith('tmj')) return 'tmj';
    if (motionId.startsWith('shoulder')) return 'r_shoulder';
    if (motionId.startsWith('elbow')) return 'r_elbow';
    if (motionId.startsWith('forearm')) return 'r_forearm';
    if (motionId.startsWith('wrist')) return 'r_wrist';
    if (motionId.startsWith('hip')) return 'r_hip';
    if (motionId.startsWith('knee')) return 'r_knee';
    if (motionId.startsWith('ankle')) return 'r_ankle';
    if (motionId.startsWith('subtalar')) return 'r_subtalar';
    if (motionId.startsWith('first_mtp')) return 'r_first_mtp';
    return 'r_shoulder';
  }

  setCameraPreset(preset, instant = false) {
    const jointMeshKey = this.getJointKeyForMotion(this.currentMotionId);
    const jointPos = this.skeleton.getJointPosition(jointMeshKey);
    this.scene.setCameraPreset(preset, jointPos, instant);
  }

  onSceneUpdate() {
    // Keep 3D Goniometer aligned with moving joint
    const jointMeshKey = this.getJointKeyForMotion(this.currentMotionId);
    const jointPos = this.skeleton.getJointPosition(jointMeshKey);

    this.goniometer.updatePose(
      this.currentMotionId,
      this.currentAngle,
      jointPos,
      this.currentMotion.plane
    );

    // Keep Arthrokinematic vectors updated
    this.arthrokinematics.update(jointPos, this.currentMotion, this.currentAngle);
  }
}

// Bootstrap Application safely whether document is loading or already ready
function startApp() {
  if (!window.app) {
    window.app = new App();
  }
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', startApp);
} else {
  startApp();
}
