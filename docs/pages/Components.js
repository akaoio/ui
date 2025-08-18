export class ComponentsPage {
    constructor(params, router) {
        this.params = params;
        this.router = router;
        this.currentComponent = params.component || 'button';
        
        this.components = {
            button: {
                name: 'Button',
                description: 'Versatile button component with multiple variants and states.',
                demo: this.renderButtonDemo,
                code: this.getButtonCode
            },
            modal: {
                name: 'Modal',
                description: 'Flexible modal dialog for displaying content overlays.',
                demo: this.renderModalDemo,
                code: this.getModalCode
            },
            card: {
                name: 'Card',
                description: 'Container component for grouped content with optional header and footer.',
                demo: this.renderCardDemo,
                code: this.getCardCode
            },
            tabs: {
                name: 'Tabs',
                description: 'Tabbed interface for organizing content into switchable panels.',
                demo: this.renderTabsDemo,
                code: this.getTabsCode
            },
            form: {
                name: 'Form Elements',
                description: 'Complete set of form controls including inputs, selects, and checkboxes.',
                demo: this.renderFormDemo,
                code: this.getFormCode
            }
        };
    }
    
    render() {
        const container = document.createElement('div');
        container.className = 'components-page';
        
        const component = this.components[this.currentComponent];
        
        container.innerHTML = `
            <style>
                .components-page {
                    max-width: 1200px;
                    margin: 0 auto;
                }
                
                .component-header {
                    margin-bottom: 32px;
                }
                
                .component-title {
                    font-size: 36px;
                    font-weight: 700;
                    color: var(--text-primary);
                    margin-bottom: 8px;
                }
                
                .component-description {
                    font-size: 18px;
                    color: var(--text-secondary);
                }
                
                .component-section {
                    background: var(--bg-primary);
                    border-radius: var(--radius);
                    padding: 32px;
                    margin-bottom: 24px;
                    box-shadow: var(--shadow-md);
                }
                
                .section-title {
                    font-size: 20px;
                    font-weight: 600;
                    margin-bottom: 24px;
                    color: var(--text-primary);
                }
                
                .demo-area {
                    padding: 32px;
                    background: var(--bg-secondary);
                    border-radius: var(--radius);
                    margin-bottom: 24px;
                    min-height: 200px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    flex-wrap: wrap;
                    gap: 16px;
                }
                
                .code-block {
                    background: var(--bg-tertiary);
                    border-radius: var(--radius);
                    padding: 24px;
                    overflow-x: auto;
                }
                
                .code-block pre {
                    margin: 0;
                    font-family: 'Consolas', 'Monaco', 'Courier New', monospace;
                    font-size: 14px;
                    line-height: 1.6;
                    color: var(--text-primary);
                }
                
                .props-table {
                    width: 100%;
                    border-collapse: collapse;
                }
                
                .props-table th {
                    text-align: left;
                    padding: 12px;
                    border-bottom: 2px solid var(--border);
                    color: var(--text-primary);
                    font-weight: 600;
                }
                
                .props-table td {
                    padding: 12px;
                    border-bottom: 1px solid var(--border);
                    color: var(--text-secondary);
                }
                
                .props-table code {
                    background: var(--bg-secondary);
                    padding: 2px 6px;
                    border-radius: 4px;
                    font-size: 13px;
                    color: var(--primary);
                }
                
                /* Demo styles */
                .demo-button {
                    padding: 12px 24px;
                    background: linear-gradient(135deg, var(--primary), var(--secondary));
                    color: white;
                    border: none;
                    border-radius: var(--radius);
                    font-size: 16px;
                    font-weight: 600;
                    cursor: pointer;
                    transition: var(--transition);
                }
                
                .demo-button:hover {
                    transform: translateY(-2px);
                    box-shadow: var(--shadow-lg);
                }
                
                .demo-button.outline {
                    background: transparent;
                    border: 2px solid var(--primary);
                    color: var(--primary);
                }
                
                .demo-button.outline:hover {
                    background: var(--primary);
                    color: white;
                }
                
                .demo-button:disabled {
                    opacity: 0.5;
                    cursor: not-allowed;
                    transform: none;
                }
                
                .demo-card {
                    background: white;
                    border-radius: var(--radius);
                    box-shadow: var(--shadow-md);
                    overflow: hidden;
                    max-width: 400px;
                    width: 100%;
                }
                
                .demo-card-header {
                    padding: 20px;
                    background: linear-gradient(135deg, var(--primary), var(--secondary));
                    color: white;
                }
                
                .demo-card-body {
                    padding: 20px;
                }
                
                .demo-card-footer {
                    padding: 20px;
                    border-top: 1px solid var(--border);
                    display: flex;
                    gap: 12px;
                    justify-content: flex-end;
                }
                
                .demo-tabs {
                    width: 100%;
                    max-width: 600px;
                }
                
                .demo-tab-list {
                    display: flex;
                    border-bottom: 2px solid var(--border);
                    margin-bottom: 24px;
                }
                
                .demo-tab {
                    padding: 12px 24px;
                    background: transparent;
                    border: none;
                    color: var(--text-secondary);
                    font-weight: 600;
                    cursor: pointer;
                    transition: var(--transition);
                    border-bottom: 2px solid transparent;
                    margin-bottom: -2px;
                }
                
                .demo-tab:hover {
                    color: var(--primary);
                }
                
                .demo-tab.active {
                    color: var(--primary);
                    border-bottom-color: var(--primary);
                }
                
                .demo-form {
                    max-width: 500px;
                    width: 100%;
                }
                
                .form-group {
                    margin-bottom: 20px;
                }
                
                .form-label {
                    display: block;
                    margin-bottom: 8px;
                    font-weight: 600;
                    color: var(--text-primary);
                }
                
                .form-input {
                    width: 100%;
                    padding: 10px 12px;
                    border: 1px solid var(--border);
                    border-radius: var(--radius);
                    font-size: 16px;
                    transition: var(--transition);
                    background: var(--bg-primary);
                    color: var(--text-primary);
                }
                
                .form-input:focus {
                    outline: none;
                    border-color: var(--primary);
                    box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
                }
                
                .form-select {
                    width: 100%;
                    padding: 10px 12px;
                    border: 1px solid var(--border);
                    border-radius: var(--radius);
                    font-size: 16px;
                    background: var(--bg-primary);
                    color: var(--text-primary);
                    cursor: pointer;
                }
                
                .form-checkbox {
                    display: flex;
                    align-items: center;
                    gap: 8px;
                }
                
                .form-checkbox input {
                    width: 20px;
                    height: 20px;
                    cursor: pointer;
                }
            </style>
            
            <div class="component-header">
                <h1 class="component-title">${component ? component.name : 'Components'}</h1>
                <p class="component-description">${component ? component.description : 'Browse all available components'}</p>
            </div>
            
            ${component ? this.renderComponent(component) : this.renderComponentList()}
        `;
        
        return container;
    }
    
    renderComponent(component) {
        return `
            <div class="component-section">
                <h2 class="section-title">Demo</h2>
                <div class="demo-area">
                    ${component.demo.call(this)}
                </div>
            </div>
            
            <div class="component-section">
                <h2 class="section-title">Code</h2>
                <div class="code-block">
                    <pre><code>${component.code.call(this)}</code></pre>
                </div>
            </div>
            
            <div class="component-section">
                <h2 class="section-title">Properties</h2>
                ${this.renderPropsTable()}
            </div>
        `;
    }
    
    renderComponentList() {
        return `
            <div class="component-section">
                <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); gap: 24px;">
                    ${Object.entries(this.components).map(([key, comp]) => `
                        <a href="/components/${key}" style="text-decoration: none;">
                            <div class="feature-card" style="height: 100%;">
                                <h3 style="color: var(--text-primary); margin-bottom: 8px;">${comp.name}</h3>
                                <p style="color: var(--text-secondary);">${comp.description}</p>
                            </div>
                        </a>
                    `).join('')}
                </div>
            </div>
        `;
    }
    
    renderButtonDemo() {
        return `
            <button class="demo-button">Default Button</button>
            <button class="demo-button outline">Outline Button</button>
            <button class="demo-button" disabled>Disabled Button</button>
        `;
    }
    
    getButtonCode() {
        return `import { Component, html, css } from '@akaoio/ui';

class Button extends Component {
    static get observedAttributes() {
        return ['variant', 'disabled'];
    }
    
    render() {
        return html\`
            <button class="btn \${this.variant}" ?disabled="\${this.disabled}">
                <slot></slot>
            </button>
        \`;
    }
    
    styles() {
        return css\`
            .btn {
                padding: 12px 24px;
                background: linear-gradient(135deg, var(--primary), var(--secondary));
                color: white;
                border: none;
                border-radius: var(--radius);
                font-size: 16px;
                cursor: pointer;
                transition: all 0.3s;
            }
            
            .btn:hover {
                transform: translateY(-2px);
            }
            
            .btn.outline {
                background: transparent;
                border: 2px solid var(--primary);
                color: var(--primary);
            }
        \`;
    }
}

customElements.define('ui-button', Button);`;
    }
    
    renderModalDemo() {
        return `
            <button class="demo-button" onclick="alert('Modal would open here')">Open Modal</button>
            <div style="padding: 20px; background: white; border-radius: 8px; box-shadow: var(--shadow-lg); max-width: 400px;">
                <h3 style="margin-bottom: 12px;">Modal Preview</h3>
                <p style="color: var(--text-secondary); margin-bottom: 20px;">This is what a modal would look like.</p>
                <div style="display: flex; gap: 12px; justify-content: flex-end;">
                    <button class="demo-button outline" style="padding: 8px 16px; font-size: 14px;">Cancel</button>
                    <button class="demo-button" style="padding: 8px 16px; font-size: 14px;">Confirm</button>
                </div>
            </div>
        `;
    }
    
    getModalCode() {
        return `import { Component, html, css } from '@akaoio/ui';

class Modal extends Component {
    constructor() {
        super();
        this.open = false;
    }
    
    show() {
        this.open = true;
        this.render();
    }
    
    hide() {
        this.open = false;
        this.render();
    }
    
    render() {
        if (!this.open) return html\`\`;
        
        return html\`
            <div class="modal-overlay" @click="\${this.hide}">
                <div class="modal-content" @click.stop>
                    <slot></slot>
                </div>
            </div>
        \`;
    }
}`;
    }
    
    renderCardDemo() {
        return `
            <div class="demo-card">
                <div class="demo-card-header">
                    <h3 style="margin: 0;">Card Header</h3>
                </div>
                <div class="demo-card-body">
                    <p style="margin: 0; color: var(--text-secondary);">This is a card component with header, body, and footer sections.</p>
                </div>
                <div class="demo-card-footer">
                    <button class="demo-button outline" style="padding: 8px 16px; font-size: 14px;">Cancel</button>
                    <button class="demo-button" style="padding: 8px 16px; font-size: 14px;">Save</button>
                </div>
            </div>
        `;
    }
    
    getCardCode() {
        return `import { Component, html, css } from '@akaoio/ui';

class Card extends Component {
    render() {
        return html\`
            <div class="card">
                <div class="card-header">
                    <slot name="header"></slot>
                </div>
                <div class="card-body">
                    <slot></slot>
                </div>
                <div class="card-footer">
                    <slot name="footer"></slot>
                </div>
            </div>
        \`;
    }
}`;
    }
    
    renderTabsDemo() {
        return `
            <div class="demo-tabs">
                <div class="demo-tab-list">
                    <button class="demo-tab active">Tab 1</button>
                    <button class="demo-tab">Tab 2</button>
                    <button class="demo-tab">Tab 3</button>
                </div>
                <div style="color: var(--text-secondary);">
                    <p>Tab content would appear here. Click on the tabs above to switch between different content panels.</p>
                </div>
            </div>
        `;
    }
    
    getTabsCode() {
        return `import { Component, html, css } from '@akaoio/ui';

class Tabs extends Component {
    constructor() {
        super();
        this.activeTab = 0;
    }
    
    selectTab(index) {
        this.activeTab = index;
        this.render();
    }
    
    render() {
        const tabs = this.querySelectorAll('[slot="tab"]');
        const panels = this.querySelectorAll('[slot="panel"]');
        
        return html\`
            <div class="tabs">
                <div class="tab-list">
                    \${Array.from(tabs).map((tab, i) => html\`
                        <button 
                            class="tab \${i === this.activeTab ? 'active' : ''}"
                            @click="\${() => this.selectTab(i)}"
                        >
                            \${tab.textContent}
                        </button>
                    \`)}
                </div>
                <div class="tab-panel">
                    \${panels[this.activeTab]}
                </div>
            </div>
        \`;
    }
}`;
    }
    
    renderFormDemo() {
        return `
            <form class="demo-form" onsubmit="event.preventDefault()">
                <div class="form-group">
                    <label class="form-label">Text Input</label>
                    <input type="text" class="form-input" placeholder="Enter text...">
                </div>
                
                <div class="form-group">
                    <label class="form-label">Select</label>
                    <select class="form-select">
                        <option>Option 1</option>
                        <option>Option 2</option>
                        <option>Option 3</option>
                    </select>
                </div>
                
                <div class="form-group">
                    <label class="form-checkbox">
                        <input type="checkbox">
                        <span>I agree to the terms</span>
                    </label>
                </div>
                
                <button type="submit" class="demo-button">Submit Form</button>
            </form>
        `;
    }
    
    getFormCode() {
        return `import { Component, html, css } from '@akaoio/ui';

class FormInput extends Component {
    static get observedAttributes() {
        return ['type', 'placeholder', 'value', 'label'];
    }
    
    render() {
        return html\`
            <div class="form-group">
                \${this.label ? html\`<label class="label">\${this.label}</label>\` : ''}
                <input 
                    type="\${this.type || 'text'}"
                    class="input"
                    placeholder="\${this.placeholder}"
                    value="\${this.value || ''}"
                    @input="\${this.handleInput}"
                />
            </div>
        \`;
    }
    
    handleInput(e) {
        this.dispatchEvent(new CustomEvent('change', {
            detail: { value: e.target.value }
        }));
    }
}`;
    }
    
    renderPropsTable() {
        const props = {
            button: [
                { name: 'variant', type: 'string', default: 'default', description: 'Button style variant' },
                { name: 'disabled', type: 'boolean', default: 'false', description: 'Disable the button' },
                { name: 'size', type: 'string', default: 'medium', description: 'Button size (small, medium, large)' }
            ],
            modal: [
                { name: 'open', type: 'boolean', default: 'false', description: 'Control modal visibility' },
                { name: 'closable', type: 'boolean', default: 'true', description: 'Allow closing via overlay click' },
                { name: 'title', type: 'string', default: '-', description: 'Modal title' }
            ],
            card: [
                { name: 'elevation', type: 'number', default: '1', description: 'Shadow elevation level' },
                { name: 'padding', type: 'string', default: '20px', description: 'Card padding' }
            ],
            tabs: [
                { name: 'activeTab', type: 'number', default: '0', description: 'Currently active tab index' },
                { name: 'variant', type: 'string', default: 'default', description: 'Tab style variant' }
            ],
            form: [
                { name: 'type', type: 'string', default: 'text', description: 'Input type' },
                { name: 'placeholder', type: 'string', default: '-', description: 'Placeholder text' },
                { name: 'value', type: 'string', default: '-', description: 'Input value' },
                { name: 'label', type: 'string', default: '-', description: 'Input label' }
            ]
        };
        
        const currentProps = props[this.currentComponent] || [];
        
        return `
            <table class="props-table">
                <thead>
                    <tr>
                        <th>Property</th>
                        <th>Type</th>
                        <th>Default</th>
                        <th>Description</th>
                    </tr>
                </thead>
                <tbody>
                    ${currentProps.map(prop => `
                        <tr>
                            <td><code>${prop.name}</code></td>
                            <td><code>${prop.type}</code></td>
                            <td><code>${prop.default}</code></td>
                            <td>${prop.description}</td>
                        </tr>
                    `).join('')}
                </tbody>
            </table>
        `;
    }
}