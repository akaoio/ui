import { html } from '../../core/UI.js';
import { styles } from './styles.css.js';

export class Tabs extends HTMLElement {
    static get observedAttributes() {
        return ['active-tab', 'variant'];
    }
    
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this._activeIndex = 0;
        this._tabs = [];
        this._panels = [];
    }
    
    connectedCallback() {
        this.setupTabs();
        this.render();
        this.addEventListeners();
    }
    
    disconnectedCallback() {
        this.removeEventListeners();
    }
    
    attributeChangedCallback(name, oldValue, newValue) {
        if (name === 'active-tab' && oldValue !== newValue) {
            this._activeIndex = parseInt(newValue) || 0;
            this.render();
        }
    }
    
    get variant() {
        return this.getAttribute('variant') || 'default';
    }
    
    setupTabs() {
        // Get all tab and panel elements
        const tabElements = this.querySelectorAll('[slot="tab"]');
        const panelElements = this.querySelectorAll('[slot="panel"]');
        
        this._tabs = Array.from(tabElements).map(tab => ({
            label: tab.textContent,
            icon: tab.getAttribute('data-icon') || null
        }));
        
        this._panels = Array.from(panelElements);
        
        // Set initial active tab
        const activeAttr = this.getAttribute('active-tab');
        if (activeAttr !== null) {
            this._activeIndex = parseInt(activeAttr) || 0;
        }
    }
    
    selectTab(index) {
        if (index >= 0 && index < this._tabs.length) {
            this._activeIndex = index;
            this.setAttribute('active-tab', index.toString());
            
            // Dispatch custom event
            this.dispatchEvent(new CustomEvent('tab-change', {
                detail: { index, tab: this._tabs[index] },
                bubbles: true,
                composed: true
            }));
            
            this.render();
        }
    }
    
    addEventListeners() {
        // Keyboard navigation
        this.shadowRoot.addEventListener('keydown', this.handleKeydown);
    }
    
    removeEventListeners() {
        this.shadowRoot.removeEventListener('keydown', this.handleKeydown);
    }
    
    handleKeydown = (e) => {
        const tabList = e.target.closest('.tab-list');
        if (!tabList) return;
        
        switch (e.key) {
            case 'ArrowLeft':
                e.preventDefault();
                this.selectTab(Math.max(0, this._activeIndex - 1));
                break;
            case 'ArrowRight':
                e.preventDefault();
                this.selectTab(Math.min(this._tabs.length - 1, this._activeIndex + 1));
                break;
            case 'Home':
                e.preventDefault();
                this.selectTab(0);
                break;
            case 'End':
                e.preventDefault();
                this.selectTab(this._tabs.length - 1);
                break;
        }
    }
    
    render() {
        const style = document.createElement('style');
        style.textContent = styles.call(this);
        
        const template = html`
            <div class="tabs-container">
                <div class="tab-list" role="tablist">
                    ${this._tabs.map((tab, index) => html`
                        <button
                            class="tab ${index === this._activeIndex ? 'active' : ''}"
                            role="tab"
                            aria-selected="${index === this._activeIndex}"
                            tabindex="${index === this._activeIndex ? '0' : '-1'}"
                            onclick="this.getRootNode().host.selectTab(${index})"
                        >
                            ${tab.icon ? html`<span class="tab-icon">${tab.icon}</span>` : ''}
                            <span class="tab-label">${tab.label}</span>
                        </button>
                    `).join('')}
                </div>
                
                <div class="tab-panels">
                    ${this._panels.map((panel, index) => {
                        const wrapper = document.createElement('div');
                        wrapper.className = `tab-panel ${index === this._activeIndex ? 'active' : ''}`;
                        wrapper.role = 'tabpanel';
                        wrapper.setAttribute('aria-hidden', index !== this._activeIndex);
                        
                        if (index === this._activeIndex) {
                            wrapper.appendChild(panel.cloneNode(true));
                        }
                        
                        return wrapper.outerHTML;
                    }).join('')}
                </div>
            </div>
        `;
        
        this.shadowRoot.innerHTML = '';
        this.shadowRoot.appendChild(style);
        this.shadowRoot.appendChild(template);
    }
}

// Auto-register if customElements is available
if (typeof customElements !== 'undefined') {
    customElements.define('ui-tabs', Tabs);
}

export default Tabs;