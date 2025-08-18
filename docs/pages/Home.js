import { html } from '../../src/index.js';

export class HomePage {
    constructor() {
        this.features = [
            {
                icon: '🚀',
                title: 'Zero Dependencies',
                description: 'Pure vanilla JavaScript. No frameworks, no build tools, just web standards.'
            },
            {
                icon: '⚡',
                title: 'Lightning Fast',
                description: 'Minimal overhead with native Web Components and efficient rendering.'
            },
            {
                icon: '🎨',
                title: 'CSS-in-JS',
                description: 'Scoped styles with template literals. No CSS conflicts, ever.'
            },
            {
                icon: '📦',
                title: 'Tree Shakeable',
                description: 'Import only what you need. Optimized for modern bundlers.'
            },
            {
                icon: '🔒',
                title: 'Type Safe',
                description: 'Full TypeScript support with comprehensive type definitions.'
            },
            {
                icon: '🌙',
                title: 'Dark Mode Ready',
                description: 'Built-in theming system with automatic dark mode support.'
            }
        ];
    }
    
    render() {
        const container = document.createElement('div');
        container.className = 'home-page';
        
        container.innerHTML = `
            <style>
                .home-page {
                    max-width: 1200px;
                    margin: 0 auto;
                }
                
                .hero {
                    text-align: center;
                    padding: 80px 20px;
                    background: linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%);
                    border-radius: 16px;
                    color: white;
                    margin-bottom: 60px;
                }
                
                .hero h1 {
                    font-size: 48px;
                    font-weight: 700;
                    margin-bottom: 16px;
                    animation: fadeInUp 0.6s ease-out;
                }
                
                .hero p {
                    font-size: 20px;
                    opacity: 0.95;
                    max-width: 600px;
                    margin: 0 auto 32px;
                    animation: fadeInUp 0.6s ease-out 0.1s both;
                }
                
                .hero-buttons {
                    display: flex;
                    gap: 16px;
                    justify-content: center;
                    flex-wrap: wrap;
                    animation: fadeInUp 0.6s ease-out 0.2s both;
                }
                
                .btn {
                    padding: 12px 32px;
                    border-radius: var(--radius);
                    font-size: 16px;
                    font-weight: 600;
                    text-decoration: none;
                    transition: var(--transition);
                    display: inline-flex;
                    align-items: center;
                    gap: 8px;
                }
                
                .btn-primary {
                    background: white;
                    color: var(--primary);
                }
                
                .btn-primary:hover {
                    transform: translateY(-2px);
                    box-shadow: 0 10px 20px rgba(0,0,0,0.2);
                }
                
                .btn-secondary {
                    background: rgba(255, 255, 255, 0.2);
                    color: white;
                    border: 2px solid white;
                }
                
                .btn-secondary:hover {
                    background: white;
                    color: var(--primary);
                }
                
                .features {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
                    gap: 24px;
                    margin-bottom: 60px;
                }
                
                .feature-card {
                    background: var(--bg-primary);
                    padding: 32px;
                    border-radius: var(--radius);
                    box-shadow: var(--shadow-md);
                    transition: var(--transition);
                    animation: fadeInUp 0.6s ease-out;
                }
                
                .feature-card:hover {
                    transform: translateY(-4px);
                    box-shadow: var(--shadow-xl);
                }
                
                .feature-icon {
                    font-size: 48px;
                    margin-bottom: 16px;
                }
                
                .feature-title {
                    font-size: 20px;
                    font-weight: 600;
                    margin-bottom: 8px;
                    color: var(--text-primary);
                }
                
                .feature-description {
                    color: var(--text-secondary);
                    line-height: 1.6;
                }
                
                .code-example {
                    background: var(--bg-primary);
                    border-radius: var(--radius);
                    padding: 32px;
                    margin-bottom: 60px;
                    box-shadow: var(--shadow-md);
                }
                
                .code-example h2 {
                    font-size: 28px;
                    margin-bottom: 24px;
                    color: var(--text-primary);
                }
                
                .code-tabs {
                    display: flex;
                    gap: 8px;
                    margin-bottom: 16px;
                    border-bottom: 2px solid var(--border);
                }
                
                .code-tab {
                    padding: 8px 16px;
                    background: transparent;
                    border: none;
                    color: var(--text-secondary);
                    font-weight: 600;
                    cursor: pointer;
                    transition: var(--transition);
                    border-bottom: 2px solid transparent;
                    margin-bottom: -2px;
                }
                
                .code-tab:hover {
                    color: var(--primary);
                }
                
                .code-tab.active {
                    color: var(--primary);
                    border-bottom-color: var(--primary);
                }
                
                .code-content {
                    background: var(--bg-tertiary);
                    border-radius: var(--radius);
                    padding: 24px;
                    overflow-x: auto;
                }
                
                .code-content pre {
                    margin: 0;
                    font-family: 'Consolas', 'Monaco', 'Courier New', monospace;
                    font-size: 14px;
                    line-height: 1.6;
                    color: var(--text-primary);
                }
                
                .code-panel {
                    display: none;
                }
                
                .code-panel.active {
                    display: block;
                }
                
                @keyframes fadeInUp {
                    from {
                        opacity: 0;
                        transform: translateY(20px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
                
                @media (max-width: 768px) {
                    .hero h1 {
                        font-size: 36px;
                    }
                    
                    .hero p {
                        font-size: 18px;
                    }
                    
                    .features {
                        grid-template-columns: 1fr;
                    }
                }
            </style>
            
            <section class="hero">
                <h1>AKAO UI Framework</h1>
                <p>Build modern web applications with pure vanilla JavaScript and Web Components. No dependencies, just web standards.</p>
                <div class="hero-buttons">
                    <a href="/documentation/quickstart" class="btn btn-primary">
                        Get Started →
                    </a>
                    <a href="/components" class="btn btn-secondary">
                        Browse Components
                    </a>
                </div>
            </section>
            
            <section class="features">
                ${this.features.map(feature => `
                    <div class="feature-card">
                        <div class="feature-icon">${feature.icon}</div>
                        <h3 class="feature-title">${feature.title}</h3>
                        <p class="feature-description">${feature.description}</p>
                    </div>
                `).join('')}
            </section>
            
            <section class="code-example">
                <h2>Simple & Powerful</h2>
                <div class="code-tabs">
                    <button class="code-tab active" data-tab="component">Component</button>
                    <button class="code-tab" data-tab="usage">Usage</button>
                    <button class="code-tab" data-tab="styling">Styling</button>
                </div>
                
                <div class="code-content">
                    <div class="code-panel active" data-panel="component">
                        <pre><code>import { html, css } from '@akaoio/ui';

class MyButton extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }
    
    connectedCallback() {
        this.shadowRoot.appendChild(html\`
            <style>
                \${this.styles()}
            </style>
            <button class="btn">
                <slot>Click me</slot>
            </button>
        \`);
    }
    
    styles() {
        return css\`
            .btn {
                padding: 12px 24px;
                background: linear-gradient(135deg, #667eea, #764ba2);
                color: white;
                border: none;
                border-radius: 8px;
                font-size: 16px;
                cursor: pointer;
                transition: transform 0.2s;
            }
            
            .btn:hover {
                transform: translateY(-2px);
            }
        \`;
    }
}

customElements.define('my-button', MyButton);</code></pre>
                    </div>
                    
                    <div class="code-panel" data-panel="usage">
                        <pre><code>// In your HTML
<my-button>Custom Text</my-button>

// With event handling
<my-button onclick="handleClick()">
    Click me!
</my-button>

// Dynamic creation
const button = document.createElement('my-button');
button.textContent = 'Dynamic Button';
document.body.appendChild(button);</code></pre>
                    </div>
                    
                    <div class="code-panel" data-panel="styling">
                        <pre><code>// CSS-in-JS with template literals
const styles = css\`
    :host {
        display: inline-block;
    }
    
    :host([disabled]) {
        opacity: 0.5;
        pointer-events: none;
    }
    
    :host([variant="outline"]) .btn {
        background: transparent;
        border: 2px solid #667eea;
        color: #667eea;
    }
    
    @media (max-width: 768px) {
        .btn {
            width: 100%;
        }
    }
\`;</code></pre>
                    </div>
                </div>
            </section>
        `;
        
        // Add tab functionality
        setTimeout(() => {
            const tabs = container.querySelectorAll('.code-tab');
            const panels = container.querySelectorAll('.code-panel');
            
            tabs.forEach(tab => {
                tab.addEventListener('click', () => {
                    const targetTab = tab.dataset.tab;
                    
                    tabs.forEach(t => t.classList.remove('active'));
                    panels.forEach(p => p.classList.remove('active'));
                    
                    tab.classList.add('active');
                    const targetPanel = container.querySelector(`[data-panel="${targetTab}"]`);
                    if (targetPanel) {
                        targetPanel.classList.add('active');
                    }
                });
            });
        }, 0);
        
        return container;
    }
}