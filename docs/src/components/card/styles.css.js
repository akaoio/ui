import { css } from "../../core/UI.js";

export function styles() {
  const elevations = {
    0: "none",
    1: "0 1px 3px rgba(0,0,0,0.12)",
    2: "0 4px 6px rgba(0,0,0,0.1)",
    3: "0 10px 15px rgba(0,0,0,0.1)",
    4: "0 20px 25px rgba(0,0,0,0.1)",
  };

  return css`
    :host {
      display: block;
      --card-padding: ${this.padding};
      --card-elevation: ${elevations[this.elevation] || elevations["1"]};
    }

    .card {
      background: var(--bg-primary, white);
      border-radius: var(--border-radius, 12px);
      box-shadow: var(--card-elevation);
      overflow: hidden;
      transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    }

    ${this.hoverable
      ? `
            .card:hover {
                transform: translateY(-4px);
                box-shadow: 0 12px 24px rgba(0,0,0,0.15);
            }
        `
      : ""}

    .card-header {
      padding: var(--card-padding);
      border-bottom: 1px solid var(--border-color, #e2e8f0);
    }

    .card-header:empty {
      display: none;
    }

    .card-body {
      padding: var(--card-padding);
    }

    .card-footer {
      padding: var(--card-padding);
      border-top: 1px solid var(--border-color, #e2e8f0);
    }

    .card-footer:empty {
      display: none;
    }

    ::slotted(*) {
      margin: 0;
    }

    ::slotted(h1),
    ::slotted(h2),
    ::slotted(h3),
    ::slotted(h4),
    ::slotted(h5),
    ::slotted(h6) {
      margin-bottom: 0.5em;
    }

    ::slotted(p) {
      line-height: 1.6;
    }
  `;
}
