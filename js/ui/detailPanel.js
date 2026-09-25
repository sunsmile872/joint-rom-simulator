import { getArthrokinematicsActionData } from '../data/arthrokinematicsData.js';

export class DetailPanel {
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

    const vectorsHtml = actionData.vectors.map(v => `
      <div class="arthro-vector-pill">
        <span class="vector-tag">${v.label}:</span>
        <span class="vector-val">${v.value}</span>
      </div>
    `).join('');

    const primeMoversHtml = muscles.primeMovers.map(m => `
      <div class="muscle-item">
        <div class="muscle-name">${m.name}</div>
        <div class="muscle-nerve">
          <span class="nerve-icon">⚡</span> ${m.innervation}
        </div>
      </div>
    `).join('');

    const citationsHtml = citations.map(c => `
      <div class="citation-badge">
        <span class="citation-book">📖 ${c.book}</span>: 
        <span class="citation-detail">${c.chapter} (${c.page})</span>
      </div>
    `).join('');

    const html = `
      <div class="detail-header">
        <div class="joint-title-group">
          <span class="plane-tag">${plane} Plane • ${axis}</span>
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
          <span class="icon">💪</span> Prime Movers & Innervation (Daniels & Worthingham)
        </div>
        <div class="muscle-list">
          ${primeMoversHtml}
        </div>
        <div class="muscle-subgroups">
          <div class="subgroup">
            <span class="subgroup-title">Synergists:</span>
            <span class="subgroup-content">${Array.isArray(muscles.synergists) ? muscles.synergists.map(s => typeof s === 'string' ? s : s.name).join(', ') : muscles.synergists}</span>
          </div>
          <div class="subgroup">
            <span class="subgroup-title">Antagonists:</span>
            <span class="subgroup-content">${muscles.antagonists.join(', ')}</span>
          </div>
        </div>
      </div>

      <!-- Standard Goniometry Protocol (Braddom / AAOS) -->
      <div class="section-card">
        <div class="section-title">
          <span class="icon">📐</span> Goniometric Alignment Protocol (Braddom & AAOS)
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
          <span class="caution-icon">⚠️</span>
          <div class="caution-text">
            <strong>Compensatory Trick Movements to Stabilize:</strong> ${goniometry.substitutions}
          </div>
        </div>
      </div>

      <!-- Textbook Bibliography & Citations -->
      <div class="citations-card">
        <div class="citations-header">📚 Textbook References & Evidence Base</div>
        <div class="citations-list">
          ${citationsHtml}
        </div>
      </div>

      <!-- Arthrokinematics & Joint Play (Neumann) - Moved to bottom as Visual Action Cards -->
      <div class="section-card arthro-section-card">
        <div class="section-title">
          <span class="icon">🔄</span> Arthrokinematics & Joint Play (Neumann)
        </div>
        <div class="arthro-rule-badge">${actionData.rule}</div>

        <div class="arthro-action-grid">
          <!-- Vectors Card -->
          <div class="arthro-action-card vector-card">
            <div class="arthro-card-header">
              <span class="card-icon">🎯</span>
              <span class="card-title">ทิศทางการเคลื่อนไหวระดับผิวข้อ (Vectors)</span>
            </div>
            <div class="arthro-vector-list">
              ${vectorsHtml}
            </div>
          </div>

          <!-- Clinical Significance Card -->
          <div class="arthro-action-card clinical-card">
            <div class="arthro-card-header">
              <span class="card-icon">⚠️</span>
              <span class="card-title">ทำไมต้องรู้? (Clinical Significance)</span>
            </div>
            <div class="arthro-card-body">
              ${actionData.clinicalWhy}
            </div>
          </div>

          <!-- Joint Mobilization Card -->
          <div class="arthro-action-card mob-card">
            <div class="arthro-card-header">
              <span class="card-icon">🩺</span>
              <span class="card-title">ทิศทางการดัดข้อแก้ข้อติด (Joint Mobilization)</span>
            </div>
            <div class="arthro-card-body">
              ${actionData.mobilization}
            </div>
          </div>
        </div>

        <div class="packed-grid">
          <div class="packed-box">
            <span class="packed-label">🔒 Close-Packed (ล็อกแน่นสุด):</span>
            <span class="packed-value">${actionData.closePacked}</span>
          </div>
          <div class="packed-box">
            <span class="packed-label">🔓 Loose-Packed (ท่าพัก/ดัดข้อ):</span>
            <span class="packed-value">${actionData.loosePacked}</span>
          </div>
        </div>
      </div>
    `;

    this.container.innerHTML = html;
  }
}
