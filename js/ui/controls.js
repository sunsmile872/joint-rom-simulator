export class ControlsManager {
  constructor(app) {
    this.app = app;
    this.isPlaying = false;
    this.playbackSpeed = 1.0;
    this.animStartTime = 0;
    this.animFrameId = null;

    this.initElements();
    this.attachEventListeners();
  }

  initElements() {
    this.slider = document.getElementById('rom-slider');
    this.angleDisplay = document.getElementById('current-angle-val');
    this.angleUnit = document.getElementById('current-angle-unit');
    this.playBtn = document.getElementById('btn-play-pause');
    this.speedSelect = document.getElementById('speed-select');
    this.regionSelect = document.getElementById('region-select');
    this.motionSelect = document.getElementById('motion-select');
    this.pathologySelect = document.getElementById('pathology-select');

    // Layer toggles
    this.toggleGoniometer = document.getElementById('toggle-goniometer');
    this.toggleArthro = document.getElementById('toggle-arthro');

    // Camera preset buttons
    this.camButtons = document.querySelectorAll('.cam-btn');

    // Range status pill
    this.rangeBadge = document.getElementById('range-status-badge');
  }

  attachEventListeners() {
    // Slider input
    this.slider.addEventListener('input', (e) => {
      const val = parseFloat(e.target.value);
      this.app.setAngle(val, false);
      if (this.isPlaying) this.pause();
    });

    // Play / Pause toggle
    this.playBtn.addEventListener('click', () => {
      if (this.isPlaying) {
        this.pause();
      } else {
        this.play();
      }
    });

    // Speed select
    this.speedSelect.addEventListener('change', (e) => {
      this.playbackSpeed = parseFloat(e.target.value);
    });

    // Region change
    this.regionSelect.addEventListener('change', (e) => {
      this.app.onRegionChange(e.target.value);
    });

    // Motion change
    this.motionSelect.addEventListener('change', (e) => {
      this.app.onMotionChange(e.target.value);
    });

    // Pathology preset
    this.pathologySelect.addEventListener('change', (e) => {
      this.app.onPathologyChange(e.target.value);
    });

    // Layer toggles
    this.toggleGoniometer.addEventListener('change', (e) => {
      this.app.goniometer.setVisible(e.target.checked);
    });

    this.toggleArthro.addEventListener('change', (e) => {
      this.app.arthrokinematics.setVisible(e.target.checked);
    });

    // Camera preset buttons
    this.camButtons.forEach((btn) => {
      btn.addEventListener('click', (e) => {
        const preset = btn.getAttribute('data-cam');
        this.camButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        this.app.setCameraPreset(preset);
      });
    });
  }

  updateSliderRange(motionData) {
    this.slider.min = motionData.sliderMin;
    this.slider.max = motionData.sliderMax;
    this.slider.step = motionData.unit === 'mm' ? '0.5' : '1';
    this.slider.value = motionData.normalMin;

    this.angleUnit.textContent = motionData.unit === 'mm' ? 'mm' : '°';
    this.updateValueDisplay(motionData.normalMin, motionData);
  }

  updateValueDisplay(val, motionData) {
    this.angleDisplay.textContent = Math.round(val * 10) / 10;

    // Evaluate Range Zone
    if (val < motionData.normalMin) {
      this.rangeBadge.className = 'status-badge status-subnormal';
      this.rangeBadge.textContent = 'Restricted / Hypomobile';
    } else if (val <= motionData.normalMax) {
      this.rangeBadge.className = 'status-badge status-normal';
      this.rangeBadge.textContent = 'Normal Physiological Range';
    } else if (val <= motionData.hypermobilityThreshold) {
      this.rangeBadge.className = 'status-badge status-hyper';
      this.rangeBadge.textContent = 'Hypermobility / Laxity Zone';
    } else {
      this.rangeBadge.className = 'status-badge status-risk';
      this.rangeBadge.textContent = 'Excessive / Impingement Risk';
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
    this.playBtn.classList.add('btn-active');
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
    this.playBtn.classList.remove('btn-active');
    if (this.animFrameId) cancelAnimationFrame(this.animFrameId);
  }

  runAnimation() {
    if (!this.isPlaying) return;

    const motionData = this.app.currentMotion;
    const min = motionData.normalMin;
    const max = motionData.normalMax;
    const range = max - min;

    // Physiological smooth sinusoidal oscillation (period: 3 seconds at 1x speed)
    const elapsedSec = (performance.now() - this.animStartTime) / 1000;
    const frequency = 0.35 * this.playbackSpeed;
    // (1 - cos(2*pi*f*t)) / 2 gives smooth 0 -> 1 -> 0 oscillation
    const progress = (1 - Math.cos(2 * Math.PI * frequency * elapsedSec)) / 2;
    const currentVal = min + progress * range;

    this.slider.value = currentVal;
    this.app.setAngle(currentVal, true);

    this.animFrameId = requestAnimationFrame(() => this.runAnimation());
  }
}
