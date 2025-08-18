import { html } from '../../core/UI.js';
import { styles } from './styles.css.js';
import { template } from './template.js';

export class Card extends HTMLElement {
    static get observedAttributes() {
        return ['elevation', 'padding', 'hoverable'];
    }
    
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }
    
    connectedCallback() {
        this.render();
    }
    
    attributeChangedCallback() {
        this.render();
    }
    
    get elevation() {
        return this.getAttribute('elevation') || '1';
    }
    
    get padding() {
        return this.getAttribute('padding') || '24px';
    }
    
    get hoverable() {
        return this.hasAttribute('hoverable');
    }
    
    render() {
        const element = template.call(this);
        const style = document.createElement('style');
        style.textContent = styles.call(this);
        
        this.shadowRoot.innerHTML = '';
        this.shadowRoot.appendChild(style);
        this.shadowRoot.appendChild(element);
    }
}

// Auto-register if customElements is available
if (typeof customElements !== 'undefined') {
    customElements.define('ui-card', Card);
}

export default Card;