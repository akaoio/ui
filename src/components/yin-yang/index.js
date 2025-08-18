// Yin-Yang Theme Switcher Component
// A beautiful circular theme toggle with yin-yang design

export class YinYang extends HTMLElement {
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
          --size: 60px;
          --transition: 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55);
        }

        .yin-yang {
          width: var(--size);
          height: var(--size);
          position: relative;
          cursor: pointer;
          border-radius: 50%;
          background: linear-gradient(90deg, #000 50%, #fff 50%);
          transition: transform var(--transition);
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
        }

        .yin-yang:hover {
          transform: scale(1.1);
        }

        .yin-yang.rotating {
          animation: rotate 0.6s ease-in-out;
        }

        @keyframes rotate {
          from { transform: rotate(0deg); }
          to { transform: rotate(180deg); }
        }

        .yin-yang::before,
        .yin-yang::after {
          content: '';
          position: absolute;
          border-radius: 50%;
        }

        .yin-yang::before {
          width: 50%;
          height: 50%;
          background: #fff;
          top: 0;
          left: 25%;
          box-shadow: 
            0 calc(var(--size) / 2) 0 #000;
        }

        .yin-yang::after {
          width: 15%;
          height: 15%;
          background: #000;
          top: 17.5%;
          left: 42.5%;
          box-shadow: 
            0 calc(var(--size) / 2) 0 #fff;
        }

        :host([theme="dark"]) .yin-yang {
          background: linear-gradient(90deg, #fff 50%, #000 50%);
        }

        :host([theme="dark"]) .yin-yang::before {
          background: #000;
          box-shadow: 0 calc(var(--size) / 2) 0 #fff;
        }

        :host([theme="dark"]) .yin-yang::after {
          background: #fff;
          box-shadow: 0 calc(var(--size) / 2) 0 #000;
        }
      </style>
      <div class="yin-yang"></div>
    `;
  }

  setupEventListeners() {
    const yinYang = this.shadowRoot.querySelector('.yin-yang');
    
    yinYang.addEventListener('click', () => {
      yinYang.classList.add('rotating');
      
      setTimeout(() => {
        this.isLight = !this.isLight;
        this.setAttribute('theme', this.isLight ? 'light' : 'dark');
        
        // Dispatch theme change event
        this.dispatchEvent(new CustomEvent('theme-change', {
          detail: { theme: this.isLight ? 'light' : 'dark' },
          bubbles: true,
          composed: true
        }));
        
        yinYang.classList.remove('rotating');
      }, 300);
    });
  }
}

customElements.define('yin-yang', YinYang);

export default YinYang;