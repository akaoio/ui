// Progress Component
// A beautiful progress bar with animations

export class Progress extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this._value = 0;
    this._max = 100;
    this._type = "bar"; // bar, circle, dots
    this._color = "#667eea";
    this._animated = true;
  }

  static get observedAttributes() {
    return ["value", "max", "type", "color", "animated"];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    switch (name) {
      case "value":
        this._value = Number(newValue) || 0;
        break;
      case "max":
        this._max = Number(newValue) || 100;
        break;
      case "type":
        this._type = newValue || "bar";
        break;
      case "color":
        this._color = newValue || "#667eea";
        break;
      case "animated":
        this._animated = newValue !== "false";
        break;
    }
    this.render();
    this.updateProgress();
  }

  connectedCallback() {
    this.render();
    this.updateProgress();
  }

  render() {
    const percentage = (this._value / this._max) * 100;

    this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: block;
          width: 100%;
        }

        .progress-bar {
          width: 100%;
          height: 8px;
          background: #e2e8f0;
          border-radius: 4px;
          overflow: hidden;
          position: relative;
        }

        .progress-fill {
          height: 100%;
          background: ${this._color};
          border-radius: 4px;
          transition: ${this._animated ? "width 0.5s ease" : "none"};
          position: relative;
          overflow: hidden;
        }

        .progress-fill::after {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(255, 255, 255, 0.3),
            transparent
          );
          animation: ${this._animated ? "shimmer 2s infinite" : "none"};
        }

        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }

        .progress-circle {
          width: 120px;
          height: 120px;
          position: relative;
        }

        .progress-circle svg {
          transform: rotate(-90deg);
        }

        .progress-circle-bg {
          fill: none;
          stroke: #e2e8f0;
          stroke-width: 8;
        }

        .progress-circle-fill {
          fill: none;
          stroke: ${this._color};
          stroke-width: 8;
          stroke-linecap: round;
          stroke-dasharray: 339.292;
          stroke-dashoffset: 339.292;
          transition: ${this._animated ? "stroke-dashoffset 0.5s ease" : "none"};
        }

        .progress-text {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          font-size: 24px;
          font-weight: bold;
          color: ${this._color};
        }

        .progress-dots {
          display: flex;
          gap: 8px;
          align-items: center;
          justify-content: center;
        }

        .dot {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background: #e2e8f0;
          animation: ${this._animated ? "pulse 1.5s infinite" : "none"};
        }

        .dot.active {
          background: ${this._color};
        }

        .dot:nth-child(1) { animation-delay: 0s; }
        .dot:nth-child(2) { animation-delay: 0.2s; }
        .dot:nth-child(3) { animation-delay: 0.4s; }
        .dot:nth-child(4) { animation-delay: 0.6s; }
        .dot:nth-child(5) { animation-delay: 0.8s; }

        @keyframes pulse {
          0%, 100% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.5); opacity: 0.5; }
        }

        .progress-label {
          display: flex;
          justify-content: space-between;
          margin-top: 8px;
          font-size: 12px;
          color: #666;
        }
      </style>

      ${this.renderProgress(percentage)}
    `;
  }

  renderProgress(percentage) {
    switch (this._type) {
      case "circle":
        return `
          <div class="progress-circle">
            <svg width="120" height="120">
              <circle cx="60" cy="60" r="54" class="progress-circle-bg"></circle>
              <circle cx="60" cy="60" r="54" class="progress-circle-fill"></circle>
            </svg>
            <div class="progress-text">${Math.round(percentage)}%</div>
          </div>
        `;

      case "dots":
        const dotCount = 5;
        const activeDots = Math.round((percentage / 100) * dotCount);
        return `
          <div class="progress-dots">
            ${Array.from(
              { length: dotCount },
              (_, i) =>
                `<div class="dot ${i < activeDots ? "active" : ""}"></div>`,
            ).join("")}
          </div>
        `;

      default: // bar
        return `
          <div class="progress-bar">
            <div class="progress-fill" style="width: 0%"></div>
          </div>
          <div class="progress-label">
            <span>${this._value} / ${this._max}</span>
            <span>${Math.round(percentage)}%</span>
          </div>
        `;
    }
  }

  updateProgress() {
    requestAnimationFrame(() => {
      const percentage = (this._value / this._max) * 100;

      if (this._type === "bar") {
        const fill = this.shadowRoot.querySelector(".progress-fill");
        if (fill) {
          fill.style.width = `${percentage}%`;
        }
      } else if (this._type === "circle") {
        const circle = this.shadowRoot.querySelector(".progress-circle-fill");
        if (circle) {
          const circumference = 2 * Math.PI * 54;
          const offset = circumference - (percentage / 100) * circumference;
          circle.style.strokeDashoffset = offset;
        }
      }
    });
  }

  set value(val) {
    this.setAttribute("value", val);
  }

  get value() {
    return this._value;
  }
}

customElements.define("ui-progress", Progress);

export default Progress;
