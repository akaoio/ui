// Theme Switcher Component
// A beautiful circular theme toggle with rotating animation

export class ThemeSwitcher extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.isLight = true;
  }

  connectedCallback() {
    this.render();
    this.setupEventListeners();
  }

  render() {
    this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: inline-block;
          --size: 32px;
          --transition: 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55);
        }

        .theme-switcher {
          width: var(--size);
          height: var(--size);
          position: relative;
          cursor: pointer;
          border-radius: 50%;
          background: linear-gradient(90deg, #000 50%, #fff 50%);
          transition: transform var(--transition);
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
        }

        .theme-switcher:hover {
          transform: scale(1.1);
        }

        .theme-switcher.rotating {
          animation: rotate 0.6s ease-in-out;
        }

        @keyframes rotate {
          from { transform: rotate(0deg); }
          to { transform: rotate(180deg); }
        }

        .theme-switcher::before,
        .theme-switcher::after {
          content: '';
          position: absolute;
          border-radius: 50%;
        }

        .theme-switcher::before {
          width: 50%;
          height: 50%;
          background: #fff;
          top: 0;
          left: 25%;
          box-shadow: 
            0 calc(var(--size) / 2) 0 #000;
        }

        .theme-switcher::after {
          width: 15%;
          height: 15%;
          background: #000;
          top: 17.5%;
          left: 42.5%;
          box-shadow: 
            0 calc(var(--size) / 2) 0 #fff;
        }

        :host([theme="dark"]) .theme-switcher {
          background: linear-gradient(90deg, #fff 50%, #000 50%);
        }

        :host([theme="dark"]) .theme-switcher::before {
          background: #000;
          box-shadow: 0 calc(var(--size) / 2) 0 #fff;
        }

        :host([theme="dark"]) .theme-switcher::after {
          background: #fff;
          box-shadow: 0 calc(var(--size) / 2) 0 #000;
        }
      </style>
      <div class="theme-switcher"></div>
    `;
  }

  setupEventListeners() {
    const themeSwitcher = this.shadowRoot.querySelector('.theme-switcher');
    
    themeSwitcher.addEventListener('click', () => {
      themeSwitcher.classList.add('rotating');
      
      setTimeout(() => {
        this.isLight = !this.isLight;
        this.setAttribute('theme', this.isLight ? 'light' : 'dark');
        
        // Dispatch theme change event
        this.dispatchEvent(new CustomEvent('theme-change', {
          detail: { theme: this.isLight ? 'light' : 'dark' },
          bubbles: true,
          composed: true
        }));
        
        themeSwitcher.classList.remove('rotating');
      }, 300);
    });
  }
}

customElements.define('theme-switcher', YinYang);

export default ThemeSwitcher;