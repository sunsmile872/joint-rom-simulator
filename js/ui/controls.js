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

    // Scapulohumeral Rhythm Elements
    this.rhythmPanel = document.getElementById('scapular-rhythm-panel');
    this.toggleLockScapula = document.getElementById('toggle-lock-scapula');
    this.ghDegVal = document.getElementById('gh-deg-val');
    this.stDegVal = document.getElementById('st-deg-val');
    this.ghProgressFill = document.getElementById('gh-progress-fill');
    this.stProgressFill = document.getElementById('st-progress-fill');
    this.impingementAlert = document.getElementById('impingement-alert');

    // Pathology Alert Elements
    this.pathologyAlert = document.getElementById('pathology-alert');
    this.pathologyAlertTitle = document.getElementById('pathology-alert-title');
    this.pathologyAlertBadge = document.getElementById('pathology-alert-badge');
    this.pathologyAlertDesc = document.getElementById('pathology-alert-desc');

    // Foot Biomechanics HUD Elements
    this.footPanel = document.getElementById('foot-biomechanics-panel');
    this.toggleWb = document.getElementById('toggle-weight-bearing');
    this.footCouplingBadge = document.getElementById('foot-coupling-badge');
    this.footFrontalVal = document.getElementById('foot-frontal-val');
    this.footTransverseVal = document.getElementById('foot-transverse-val');
    this.footSagittalVal = document.getElementById('foot-sagittal-val');
    this.tnccStatusPill = document.getElementById('tncc-status-pill');
    this.tnccAxesVal = document.getElementById('tncc-axes-val');
    this.tibialRotVal = document.getElementById('tibial-rot-val');
    this.fasciaProgressFill = document.getElementById('fascia-progress-fill');
    this.fasciaPercentVal = document.getElementById('fascia-percent-val');
    this.mlaHeightVal = document.getElementById('mla-height-val');

    // Hand Biomechanics HUD Elements
    this.handPanel = document.getElementById('hand-biomechanics-panel');
    this.toggleTenodesis = document.getElementById('toggle-tenodesis');
    this.saddleRuleName = document.getElementById('saddle-rule-name');
    this.handRollVal = document.getElementById('hand-roll-val');
    this.handSlideVal = document.getElementById('hand-slide-val');
    this.vectorRelationSymbol = document.getElementById('vector-relation-symbol');
    this.tenodesisStatusPill = document.getElementById('tenodesis-status-pill');
    this.tenodesisDescVal = document.getElementById('tenodesis-desc-val');
    this.gripButtons = document.querySelectorAll('.grip-btn');
  }

  attachEventListeners() {
    // Scapula Lock Toggle
    if (this.toggleLockScapula) {
      this.toggleLockScapula.addEventListener('change', (e) => {
        const locked = e.target.checked;
        this.app.kinematics.setScapulaLocked(locked);
        this.app.setAngle(this.app.currentAngle, false);
        this.updateScapularRhythmUI(this.app.currentAngle, this.app.currentMotion);
      });
    }

    // Foot Weight-Bearing Toggle
    if (this.toggleWb) {
      this.toggleWb.addEventListener('change', (e) => {
        this.app.kinematics.setWeightBearing(e.target.checked);
        this.app.setAngle(this.app.currentAngle, false);
      });
    }

    // Hand Tenodesis Toggle
    if (this.toggleTenodesis) {
      this.toggleTenodesis.addEventListener('change', (e) => {
        this.app.kinematics.setTenodesis(e.target.checked);
        this.app.setAngle(this.app.currentAngle, false);
      });
    }

    // Prehension Grip Buttons
    this.gripButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        const grip = btn.getAttribute('data-grip');
        const isCurrentActive = btn.classList.contains('active');
        this.gripButtons.forEach(b => b.classList.remove('active'));

        if (isCurrentActive) {
          this.app.kinematics.setGrip('none');
        } else {
          btn.classList.add('active');
          this.app.kinematics.setGrip(grip);
        }
        this.app.setAngle(this.app.currentAngle, false);

        // On mobile, auto-collapse panel after selecting grip so user can immediately see the 3D model!
        if (window.innerWidth <= 768) {
          setTimeout(() => {
            if (this.handPanel && !this.handPanel.classList.contains('collapsed')) {
              this.handPanel.classList.add('collapsed');
              const textSpan = this.handPanel.querySelector('.collapse-text');
              if (textSpan) textSpan.textContent = 'ขยาย';
            }
          }, 350);
        }
      });
    });

    // Biomechanics HUD Panels Collapse / Expand Buttons
    document.querySelectorAll('.hud-collapse-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const targetId = btn.getAttribute('data-target');
        const panel = document.getElementById(targetId);
        if (!panel) return;
        const isCollapsed = panel.classList.toggle('collapsed');
        const textSpan = btn.querySelector('.collapse-text');
        if (textSpan) {
          textSpan.textContent = isCollapsed ? 'ขยาย' : 'ซ่อน';
        }
      });
    });

    // Tap header to toggle collapse / expand
    [this.rhythmPanel, this.footPanel, this.handPanel].forEach(panel => {
      if (!panel) return;
      const header = panel.querySelector('.hud-header, .rhythm-header');
      if (header) {
        header.addEventListener('click', (e) => {
          if (e.target.closest('input, button, label')) return;
          const btn = header.querySelector('.hud-collapse-btn');
          if (btn) btn.click();
        });
      }
    });

    // On mobile screens, tapping 3D canvas collapses any open HUD panel so animation is completely visible
    const canvas = document.querySelector('#viewport canvas');
    if (canvas) {
      canvas.addEventListener('pointerdown', () => {
        if (window.innerWidth <= 768) {
          [this.rhythmPanel, this.footPanel, this.handPanel].forEach(panel => {
            if (panel && !panel.classList.contains('hidden') && !panel.classList.contains('collapsed')) {
              panel.classList.add('collapsed');
              const textSpan = panel.querySelector('.collapse-text');
              if (textSpan) textSpan.textContent = 'ขยาย';
            }
          });
        }
      });
    }

    // Slider input with pathology resistance clamp
    this.slider.addEventListener('input', (e) => {
      let val = parseFloat(e.target.value);
      if (this.app.activeRestriction) {
        if (this.app.activeRestriction.max !== undefined && val > this.app.activeRestriction.max) {
          val = this.app.activeRestriction.max;
          this.slider.value = val;
        }
        if (this.app.activeRestriction.min !== undefined && val < this.app.activeRestriction.min) {
          val = this.app.activeRestriction.min;
          this.slider.value = val;
        }
      }
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

  updateScapularRhythmUI(val, motionData) {
    if (!this.rhythmPanel) return;

    const isShoulderElevation = motionData && (
      motionData.id === 'shoulder_abduction' || motionData.id === 'shoulder_flexion'
    );

    if (isShoulderElevation) {
      if (this.rhythmPanel.classList.contains('hidden')) {
        this.rhythmPanel.classList.remove('hidden');
        if (window.innerWidth <= 768) {
          this.rhythmPanel.classList.add('collapsed');
          const t = this.rhythmPanel.querySelector('.collapse-text');
          if (t) t.textContent = 'ขยาย';
        }
      }
      const bd = this.app.kinematics.getScapulohumeralBreakdown(val);

      if (this.ghDegVal) this.ghDegVal.textContent = `${bd.ghDeg}° / 120°`;
      if (this.stDegVal) {
        this.stDegVal.textContent = bd.isLocked ? '0° (🔒 LOCKED)' : `${bd.stDeg}° / 60°`;
      }

      if (this.ghProgressFill) {
        this.ghProgressFill.style.width = `${Math.min(100, (bd.ghDeg / 120) * 100)}%`;
      }
      if (this.stProgressFill) {
        this.stProgressFill.style.width = `${Math.min(100, (bd.stDeg / 60) * 100)}%`;
      }

      if (bd.isImpinging) {
        if (this.impingementAlert) this.impingementAlert.classList.remove('hidden');
        if (this.rangeBadge) {
          this.rangeBadge.className = 'status-badge status-risk';
          this.rangeBadge.textContent = '🚨 Subacromial Impingement!';
        }
      } else {
        if (this.impingementAlert) this.impingementAlert.classList.add('hidden');
      }
    } else {
      this.rhythmPanel.classList.add('hidden');
      if (this.impingementAlert) this.impingementAlert.classList.add('hidden');
    }
  }

  updateFootBiomechanicsUI(val, motionData) {
    if (!this.footPanel) return;

    const isFootMotion = motionData && (
      motionData.region === 'ankle_foot' ||
      motionData.id.startsWith('subtalar') ||
      motionData.id.startsWith('first_mtp') ||
      motionData.id.startsWith('ankle')
    );

    if (isFootMotion) {
      if (this.footPanel.classList.contains('hidden')) {
        this.footPanel.classList.remove('hidden');
        if (window.innerWidth <= 768) {
          this.footPanel.classList.add('collapsed');
          const t = this.footPanel.querySelector('.collapse-text');
          if (t) t.textContent = 'ขยาย';
        }
      }
      const state = this.app.kinematics.getFootBiomechanicsState(val, motionData.id);
      if (!state) return;

      if (this.footFrontalVal) {
        const dir = state.isPronation ? 'Eversion' : (state.isSupination ? 'Inversion' : 'Frontal');
        this.footFrontalVal.textContent = `${state.frontalDeg}° ${dir}`;
      }
      if (this.footTransverseVal) {
        const dir = state.isPronation ? 'Abduction' : (state.isSupination ? 'Adduction' : 'Transverse');
        this.footTransverseVal.textContent = `${state.transverseDeg}° ${dir}`;
      }
      if (this.footSagittalVal) {
        const dir = state.isPronation ? 'Dorsiflexion' : (state.isSupination ? 'Plantarflexion' : 'Sagittal');
        this.footSagittalVal.textContent = `${state.sagittalDeg}° ${dir}`;
      }

      if (this.tnccStatusPill) {
        this.tnccStatusPill.className = `status-pill ${state.tnccLocked ? 'status-locked' : 'status-unlocked'}`;
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
      this.footPanel.classList.add('hidden');
    }
  }

  updateHandBiomechanicsUI(val, motionData) {
    if (!this.handPanel) return;

    const isHandMotion = motionData && (
      motionData.region === 'wrist' ||
      motionData.id.startsWith('wrist') ||
      motionData.id.startsWith('thumb')
    );

    if (isHandMotion) {
      if (this.handPanel.classList.contains('hidden')) {
        this.handPanel.classList.remove('hidden');
        if (window.innerWidth <= 768) {
          this.handPanel.classList.add('collapsed');
          const t = this.handPanel.querySelector('.collapse-text');
          if (t) t.textContent = 'ขยาย';
        }
      }
      const state = this.app.kinematics.getHandBiomechanicsState(val, motionData.id);
      if (!state) return;

      if (this.saddleRuleName) this.saddleRuleName.textContent = state.arthroRule;
      if (this.handRollVal) this.handRollVal.textContent = state.rollDir;
      if (this.handSlideVal) this.handSlideVal.textContent = state.slideDir;
      if (this.vectorRelationSymbol) {
        this.vectorRelationSymbol.textContent = state.isOpposite ? '≠ OPPOSITE' : '= SAME DIR';
        this.vectorRelationSymbol.style.color = state.isOpposite ? '#f59e0b' : '#34d399';
      }

      if (this.tenodesisStatusPill) {
        this.tenodesisStatusPill.textContent = state.isTenodesisPassive ? '🔗 Tenodesis Active' : '⚪ Tenodesis Disabled';
      }
      if (this.tenodesisDescVal) {
        this.tenodesisDescVal.textContent = state.tenodesisStatusText;
      }
    } else {
      this.handPanel.classList.add('hidden');
    }
  }

  updateValueDisplay(val, motionData) {
    this.angleDisplay.textContent = Math.round(val * 10) / 10;

    // Update 2:1 Scapulohumeral Monitor if applicable
    this.updateScapularRhythmUI(val, motionData);

    // Update Foot & Ankle Biomechanics Monitor if applicable
    this.updateFootBiomechanicsUI(val, motionData);

    // Update Hand & Wrist Biomechanics Monitor if applicable
    this.updateHandBiomechanicsUI(val, motionData);

    // If active pathology restriction applies, override status badge with warning!
    if (this.app.activeRestriction) {
      this.rangeBadge.className = 'status-badge status-risk';
      this.rangeBadge.textContent = `🔒 ${this.app.activeRestriction.label}`;
      return;
    }

    // Evaluate Range Zone (only override if not impinging)
    const isImpinging = this.app.kinematics && this.app.kinematics.isImpinging;
    if (!isImpinging) {
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
  }

  showPathologyAlert(pathology, restriction) {
    if (!this.pathologyAlert) return;
    this.pathologyAlert.classList.remove('hidden');
    if (this.pathologyAlertTitle) {
      this.pathologyAlertTitle.textContent = `🔒 ${pathology.name}`;
    }
    if (this.pathologyAlertBadge) {
      const limitTxt = restriction.max !== undefined ? `LOCKED AT ${restriction.max}°` : `RESTRICTED`;
      this.pathologyAlertBadge.textContent = limitTxt;
    }
    if (this.pathologyAlertDesc) {
      this.pathologyAlertDesc.textContent = restriction.explanation;
    }
  }

  clearPathologyAlert() {
    if (this.pathologyAlert) {
      this.pathologyAlert.classList.add('hidden');
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
    let min = motionData.normalMin;
    let max = motionData.normalMax;

    if (this.app.activeRestriction) {
      if (this.app.activeRestriction.max !== undefined) max = this.app.activeRestriction.max;
      if (this.app.activeRestriction.min !== undefined) min = this.app.activeRestriction.min;
    }

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

  resetGripButtons() {
    if (this.gripButtons) {
      this.gripButtons.forEach(b => b.classList.remove('active'));
    }
  }
}
