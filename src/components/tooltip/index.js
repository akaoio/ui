// Tooltip Component
// A flexible tooltip that can be attached to any element

export class Tooltip extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this._text = "";
    this._position = "top";
    this._visible = false;
  }

  static get observedAttributes() {
    return ["text", "position", "visible"];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    switch (name) {
      case "text":
        this._text = newValue;
        break;
      case "position":
        this._position = newValue;
        break;
      case "visible":
        this._visible = newValue === "true";
        break;
    }
    this.render();
  }

  connectedCallback() {
    this.render();
    this.setupEventListeners();
  }

  render() {
    this.shadowRoot.innerHTML = `
      <style>
        :host {
          position: relative;
          display: inline-block;
        }

        .tooltip {
          position: absolute;
          background: rgba(0, 0, 0, 0.9);
          color: white;
          padding: 8px 12px;
          border-radius: 6px;
          font-size: 14px;
          white-space: nowrap;
          z-index: 1000;
          pointer-events: none;
          opacity: 0;
          transform: scale(0.8);
          transition: all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
        }

        .tooltip.visible {
          opacity: 1;
          transform: scale(1);
        }

        .tooltip::after {
          content: '';
          position: absolute;
          width: 0;
          height: 0;
          border: 6px solid transparent;
        }

        /* Position variations */
        .tooltip.top {
          bottom: calc(100% + 10px);
          left: 50%;
          transform: translateX(-50%) scale(0.8);
        }

        .tooltip.top.visible {
          transform: translateX(-50%) scale(1);
        }

        .tooltip.top::after {
          top: 100%;
          left: 50%;
          transform: translateX(-50%);
          border-top-color: rgba(0, 0, 0, 0.9);
        }

        .tooltip.bottom {
          top: calc(100% + 10px);
          left: 50%;
          transform: translateX(-50%) scale(0.8);
        }

        .tooltip.bottom.visible {
          transform: translateX(-50%) scale(1);
        }

        .tooltip.bottom::after {
          bottom: 100%;
          left: 50%;
          transform: translateX(-50%);
          border-bottom-color: rgba(0, 0, 0, 0.9);
        }

        .tooltip.left {
          right: calc(100% + 10px);
          top: 50%;
          transform: translateY(-50%) scale(0.8);
        }

        .tooltip.left.visible {
          transform: translateY(-50%) scale(1);
        }

        .tooltip.left::after {
          left: 100%;
          top: 50%;
          transform: translateY(-50%);
          border-left-color: rgba(0, 0, 0, 0.9);
        }

        .tooltip.right {
          left: calc(100% + 10px);
          top: 50%;
          transform: translateY(-50%) scale(0.8);
        }

        .tooltip.right.visible {
          transform: translateY(-50%) scale(1);
        }

        .tooltip.right::after {
          right: 100%;
          top: 50%;
          transform: translateY(-50%);
          border-right-color: rgba(0, 0, 0, 0.9);
        }

        ::slotted(*) {
          cursor: pointer;
        }
      </style>
      <slot></slot>
      <div class="tooltip ${this._position} ${this._visible ? "visible" : ""}">
        ${this._text}
      </div>
    `;
  }

  setupEventListeners() {
    this.addEventListener("mouseenter", () => this.show());
    this.addEventListener("mouseleave", () => this.hide());
  }

  show() {
    this.setAttribute("visible", "true");
  }

  hide() {
    this.setAttribute("visible", "false");
  }
}

customElements.define("ui-tooltip", Tooltip);

export default Tooltip;
