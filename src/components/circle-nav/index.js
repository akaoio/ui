// Circle Navigation Component
// A beautiful circular navigation menu with yin-yang inspired design

export class CircleNav extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.isOpen = false;
    this.items = [];
  }

  static get observedAttributes() {
    return ['items'];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (name === 'items' && newValue) {
      try {
        this.items = JSON.parse(newValue);
        this.render();
      } catch (e) {
        console.error('Invalid items JSON:', e);
      }
    }
  }

  connectedCallback() {
    this.render();
    this.setupEventListeners();
  }

  render() {
    const itemCount = this.items.length || 6;
    const angleStep = 360 / itemCount;

    this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: inline-block;
          position: relative;
          --size: 250px;
          --center-size: 60px;
          --item-size: 40px;
          --radius: 80px;
        }

        .circle-nav {
          position: relative;
          width: var(--size);
          height: var(--size);
        }

        .center-button {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: var(--center-size);
          height: var(--center-size);
          border-radius: 50%;
          background: linear-gradient(45deg, #667eea, #764ba2);
          border: none;
          cursor: pointer;
          box-shadow: 0 4px 20px rgba(102, 126, 234, 0.4);
          transition: all 0.3s ease;
          z-index: 10;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .center-button:hover {
          transform: translate(-50%, -50%) scale(1.1);
          box-shadow: 0 6px 30px rgba(102, 126, 234, 0.6);
        }

        .center-button.active {
          transform: translate(-50%, -50%) rotate(45deg);
        }

        .hamburger {
          width: 24px;
          height: 16px;
          position: relative;
          transition: all 0.3s ease;
        }

        .hamburger span {
          position: absolute;
          left: 0;
          width: 100%;
          height: 2px;
          background: white;
          border-radius: 2px;
          transition: all 0.3s ease;
        }

        .hamburger span:nth-child(1) {
          top: 0;
        }

        .hamburger span:nth-child(2) {
          top: 50%;
          transform: translateY(-50%);
        }

        .hamburger span:nth-child(3) {
          bottom: 0;
        }

        .center-button.active .hamburger span:nth-child(1) {
          top: 50%;
          transform: translateY(-50%) rotate(45deg);
        }

        .center-button.active .hamburger span:nth-child(2) {
          opacity: 0;
        }

        .center-button.active .hamburger span:nth-child(3) {
          bottom: 50%;
          transform: translateY(50%) rotate(-45deg);
        }

        .nav-item {
          position: absolute;
          top: 50%;
          left: 50%;
          width: var(--item-size);
          height: var(--item-size);
          margin: calc(var(--item-size) / -2);
          border-radius: 50%;
          background: white;
          box-shadow: 0 3px 10px rgba(0, 0, 0, 0.2);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          opacity: 0;
          transform: translate(0, 0) scale(0);
          transition: all 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55);
          text-decoration: none;
          color: #333;
          font-size: 20px;
        }

        .nav-item:hover {
          transform: var(--transform) scale(1.2) !important;
          box-shadow: 0 5px 20px rgba(0, 0, 0, 0.3);
        }

        :host([open]) .nav-item {
          opacity: 1;
        }

        ${this.items.map((item, index) => {
          const angle = angleStep * index - 90; // Start from top
          const x = Math.cos(angle * Math.PI / 180) * 100;
          const y = Math.sin(angle * Math.PI / 180) * 100;
          return `
            :host([open]) .nav-item:nth-child(${index + 2}) {
              transform: translate(${x}px, ${y}px) scale(1);
              transition-delay: ${index * 0.05}s;
            }
          `;
        }).join('')}

        /* Orbit animation */
        @keyframes orbit {
          from { transform: rotate(0deg) translateX(var(--radius)) rotate(0deg); }
          to { transform: rotate(360deg) translateX(var(--radius)) rotate(-360deg); }
        }

        .ripple {
          position: absolute;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.5);
          transform: scale(0);
          animation: ripple 0.6s ease-out;
          pointer-events: none;
        }

        @keyframes ripple {
          to {
            transform: scale(4);
            opacity: 0;
          }
        }
      </style>

      <div class="circle-nav">
        <button class="center-button">
          <div class="hamburger">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </button>
        ${this.items.map(item => `
          <a href="${item.href || '#'}" class="nav-item" title="${item.label}">
            ${item.icon || item.label.charAt(0)}
          </a>
        `).join('')}
      </div>
    `;
  }

  setupEventListeners() {
    const centerButton = this.shadowRoot.querySelector('.center-button');
    const navItems = this.shadowRoot.querySelectorAll('.nav-item');

    centerButton.addEventListener('click', (e) => {
      this.toggleMenu();
      this.createRipple(e, centerButton);
    });

    navItems.forEach(item => {
      item.addEventListener('click', (e) => {
        if (item.getAttribute('href') === '#') {
          e.preventDefault();
        }
        this.dispatchEvent(new CustomEvent('nav-click', {
          detail: { href: item.getAttribute('href') },
          bubbles: true,
          composed: true
        }));
      });
    });
  }

  toggleMenu() {
    this.isOpen = !this.isOpen;
    const centerButton = this.shadowRoot.querySelector('.center-button');
    
    if (this.isOpen) {
      this.setAttribute('open', '');
      centerButton.classList.add('active');
    } else {
      this.removeAttribute('open');
      centerButton.classList.remove('active');
    }
  }

  createRipple(event, element) {
    const ripple = document.createElement('span');
    ripple.classList.add('ripple');
    
    const rect = element.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = event.clientX - rect.left - size / 2;
    const y = event.clientY - rect.top - size / 2;
    
    ripple.style.width = ripple.style.height = size + 'px';
    ripple.style.left = x + 'px';
    ripple.style.top = y + 'px';
    
    element.appendChild(ripple);
    
    setTimeout(() => ripple.remove(), 600);
  }
}

customElements.define('circle-nav', CircleNav);

export default CircleNav;