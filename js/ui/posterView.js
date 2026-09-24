import { ROM_DATA } from '../data/romData.js';

export class PosterView {
  constructor() {
    this.modal = null;
    this.initModal();
  }

  initModal() {
    this.modal = document.createElement('div');
    this.modal.id = 'poster-modal';
    this.modal.className = 'poster-modal hidden';
    this.modal.innerHTML = `
      <div class="poster-modal-backdrop"></div>
      <div class="poster-modal-container">
        <div class="poster-toolbar">
          <div class="poster-toolbar-title">📄 Vertical A4 Medical Poster Infographic</div>
          <div class="poster-actions">
            <button id="btn-print-poster" class="btn-primary">🖨️ Print / Save PDF (A4)</button>
            <button id="btn-close-poster" class="btn-secondary">✕ Close</button>
          </div>
        </div>
        <div class="poster-content" id="printable-poster-area">
          <!-- Poster content dynamically generated -->
        </div>
      </div>
    `;
    document.body.appendChild(this.modal);

    // Event listeners
    this.modal.querySelector('.poster-modal-backdrop').addEventListener('click', () => this.hide());
    this.modal.querySelector('#btn-close-poster').addEventListener('click', () => this.hide());
    this.modal.querySelector('#btn-print-poster').addEventListener('click', () => {
      window.print();
    });
  }

  show() {
    this.renderPosterContent();
    this.modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
  }

  hide() {
    this.modal.classList.add('hidden');
    document.body.style.overflow = '';
  }

  renderPosterContent() {
    const posterArea = this.modal.querySelector('#printable-poster-area');

    const tableRows = Object.values(ROM_DATA).map(item => `
      <tr>
        <td class="td-joint">
          <strong>${item.jointName}</strong>
          <div class="sub-motion">${item.motionName} (${item.plane})</div>
        </td>
        <td class="td-rom">
          <span class="rom-val">${item.referenceRangeText}</span>
        </td>
        <td class="td-endfeel">
          <strong>${item.endFeel.type.split('(')[0]}</strong>
          <div class="endfeel-desc">${item.endFeel.type.includes('(') ? item.endFeel.type.slice(item.endFeel.type.indexOf('(')) : ''}</div>
        </td>
        <td class="td-arthro">
          <span class="arthro-badge">${item.arthrokinematics.rule.slice(0, 32)}...</span>
        </td>
        <td class="td-muscles">
          <div class="muscle-line"><strong>${item.muscles.primeMovers[0].name}</strong></div>
          <div class="nerve-line">⚡ ${item.muscles.primeMovers[0].innervation}</div>
        </td>
        <td class="td-adl">
          <span class="adl-badge">${item.functionalRange}</span>
        </td>
      </tr>
    `).join('');

    posterArea.innerHTML = `
      <div class="a4-poster-page">
        <!-- HEADER -->
        <header class="poster-header">
          <div class="header-badges">
            <span class="badge-accreditation">CLINICAL KINESIOLOGY & REHABILITATION</span>
            <span class="badge-standard">AAOS • AMA • NEUMANN EVIDENCE BASE</span>
          </div>
          <h1 class="poster-main-title">HUMAN JOINT RANGE OF MOTION (ROM)</h1>
          <h2 class="poster-sub-title">A Comprehensive Biomechanical & Goniometric Reference Poster</h2>
          <div class="poster-meta">
            <span>📚 Sources: Neumann 3rd Ed • Braddom PM&R 7th Ed • Daniels & Worthingham 10th Ed</span>
            <span>🏥 Physical Medicine, Orthopaedics & Biomechanics</span>
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
            <div class="algo-arrow">➔</div>
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
                <span class="pearl-icon">⚖️</span>
                <h4>Convex-on-Concave Rule</h4>
              </div>
              <p>When a convex articular surface moves on a stable concave surface (e.g. glenohumeral, hip), <strong>roll and slide occur in OPPOSITE directions</strong>. Inferior slide prevents humeral/femoral head abutment!</p>
            </div>

            <div class="pearl-card">
              <div class="pearl-header">
                <span class="pearl-icon">🔄</span>
                <h4>Scapulohumeral Rhythm (2:1)</h4>
              </div>
              <p>Full 180° shoulder elevation is distributed as <strong>120° Glenohumeral (GH)</strong> motion and <strong>60° Scapulothoracic (ST)</strong> upward rotation driven by the Serratus anterior & Trapezius force-couple.</p>
            </div>

            <div class="pearl-card">
              <div class="pearl-header">
                <span class="pearl-icon">🔩</span>
                <h4>Knee Screw-Home Mechanism</h4>
              </div>
              <p>During the final 30° of knee extension, the tibia automatically <strong>externally rotates ~10°</strong> on the femur to mechanically lock into close-packed stability for effortless upright stance.</p>
            </div>

            <div class="pearl-card">
              <div class="pearl-header">
                <span class="pearl-icon">⛵</span>
                <h4>1st MTP Windlass Mechanism</h4>
              </div>
              <p>Great toe extension (>60°) winds the plantar aponeurosis around the metatarsal head, raising the longitudinal arch and converting the foot into a <strong>rigid lever for terminal stance gait push-off</strong>.</p>
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
            <small>© Antigravity Medical Biomechanics</small>
          </div>
        </footer>
      </div>
    `;
  }
}
