import { css } from "../../core/UI.js";

export function styles() {
  const variants = {
    default: css`
      .tab-list {
        border-bottom: 2px solid var(--border-color, #e2e8f0);
      }

      .tab {
        background: transparent;
        border-bottom: 2px solid transparent;
        margin-bottom: -2px;
      }

      .tab:hover {
        color: var(--color-primary, #667eea);
        background: var(--bg-secondary, rgba(0, 0, 0, 0.05));
      }

      .tab.active {
        color: var(--color-primary, #667eea);
        border-bottom-color: var(--color-primary, #667eea);
      }
    `,

    pills: css`
      .tab-list {
        gap: 8px;
        padding: 4px;
        background: var(--bg-secondary, #f7fafc);
        border-radius: 12px;
      }

      .tab {
        background: transparent;
        border-radius: 8px;
        padding: 10px 20px;
      }

      .tab:hover {
        background: var(--bg-tertiary, #edf2f7);
      }

      .tab.active {
        background: var(--color-primary, #667eea);
        color: white;
      }
    `,

    underline: css`
      .tab-list {
        border-bottom: 1px solid var(--border-color, #e2e8f0);
      }

      .tab {
        background: transparent;
        position: relative;
        padding-bottom: 16px;
      }

      .tab::after {
        content: "";
        position: absolute;
        bottom: 0;
        left: 50%;
        width: 0;
        height: 3px;
        background: var(--color-primary, #667eea);
        transition: all 0.3s ease;
        transform: translateX(-50%);
      }

      .tab:hover::after {
        width: 50%;
      }

      .tab.active::after {
        width: 100%;
      }

      .tab.active {
        color: var(--color-primary, #667eea);
      }
    `,
  };

  return css`
    :host {
      display: block;
      --tab-transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    }

    .tabs-container {
      width: 100%;
    }

    .tab-list {
      display: flex;
      align-items: center;
      margin-bottom: 24px;
      overflow-x: auto;
      scrollbar-width: thin;
    }

    .tab-list::-webkit-scrollbar {
      height: 4px;
    }

    .tab-list::-webkit-scrollbar-track {
      background: var(--bg-secondary, #f7fafc);
    }

    .tab-list::-webkit-scrollbar-thumb {
      background: var(--border-color, #e2e8f0);
      border-radius: 2px;
    }

    .tab {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      padding: 12px 24px;
      border: none;
      background: transparent;
      color: var(--text-secondary, #4a5568);
      font-size: 16px;
      font-weight: 600;
      cursor: pointer;
      transition: var(--tab-transition);
      white-space: nowrap;
      user-select: none;
    }

    .tab:focus-visible {
      outline: 2px solid var(--color-primary, #667eea);
      outline-offset: 2px;
    }

    .tab-icon {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: 20px;
      height: 20px;
    }

    .tab-panels {
      position: relative;
    }

    .tab-panel {
      display: none;
      animation: fadeIn 0.3s ease-out;
    }

    .tab-panel.active {
      display: block;
    }

    @keyframes fadeIn {
      from {
        opacity: 0;
        transform: translateY(10px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    /* Apply variant styles */
    ${variants[this.variant] || variants.default}

    /* Responsive */
        @media (max-width: 640px) {
      .tab {
        padding: 10px 16px;
        font-size: 14px;
      }

      .tab-list {
        margin-bottom: 16px;
      }
    }
  `;
}
