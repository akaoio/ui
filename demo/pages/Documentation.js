export class DocumentationPage {
    constructor(params) {
        this.topic = params.topic || 'installation';
        
        this.docs = {
            installation: {
                title: 'Installation',
                content: this.getInstallationContent()
            },
            quickstart: {
                title: 'Quick Start',
                content: this.getQuickStartContent()
            },
            philosophy: {
                title: 'Philosophy',
                content: this.getPhilosophyContent()
            },
            'web-components': {
                title: 'Web Components',
                content: this.getWebComponentsContent()
            },
            'shadow-dom': {
                title: 'Shadow DOM',
                content: this.getShadowDOMContent()
            },
            'css-in-js': {
                title: 'CSS-in-JS',
                content: this.getCSSinJSContent()
            },
            'state-management': {
                title: 'State Management',
                content: this.getStateManagementContent()
            },
            animations: {
                title: 'Animations',
                content: this.getAnimationsContent()
            },
            theming: {
                title: 'Theming',
                content: this.getThemingContent()
            },
            typography: {
                title: 'Typography',
                content: this.getTypographyContent()
            },
            colors: {
                title: 'Colors',
                content: this.getColorsContent()
            },
            'custom-components': {
                title: 'Custom Components',
                content: this.getCustomComponentsContent()
            },
            performance: {
                title: 'Performance',
                content: this.getPerformanceContent()
            },
            typescript: {
                title: 'TypeScript',
                content: this.getTypeScriptContent()
            },
            testing: {
                title: 'Testing',
                content: this.getTestingContent()
            }
        };
    }
    
    render() {
        const container = document.createElement('div');
        container.className = 'documentation-page';
        
        const doc = this.docs[this.topic];
        
        container.innerHTML = `
            <style>
                .documentation-page {
                    max-width: 900px;
                    margin: 0 auto;
                }
                
                .doc-header {
                    margin-bottom: 40px;
                }
                
                .doc-title {
                    font-size: 36px;
                    font-weight: 700;
                    color: var(--text-primary);
                    margin-bottom: 16px;
                }
                
                .doc-content {
                    background: var(--bg-primary);
                    border-radius: var(--radius);
                    padding: 40px;
                    box-shadow: var(--shadow-md);
                }
                
                .doc-content h2 {
                    font-size: 28px;
                    font-weight: 600;
                    color: var(--text-primary);
                    margin-top: 40px;
                    margin-bottom: 16px;
                }
                
                .doc-content h2:first-child {
                    margin-top: 0;
                }
                
                .doc-content h3 {
                    font-size: 20px;
                    font-weight: 600;
                    color: var(--text-primary);
                    margin-top: 32px;
                    margin-bottom: 12px;
                }
                
                .doc-content p {
                    color: var(--text-secondary);
                    line-height: 1.8;
                    margin-bottom: 16px;
                }
                
                .doc-content ul, .doc-content ol {
                    color: var(--text-secondary);
                    line-height: 1.8;
                    margin-bottom: 16px;
                    padding-left: 24px;
                }
                
                .doc-content li {
                    margin-bottom: 8px;
                }
                
                .doc-content code {
                    background: var(--bg-secondary);
                    padding: 2px 6px;
                    border-radius: 4px;
                    font-size: 14px;
                    color: var(--primary);
                    font-family: 'Consolas', 'Monaco', 'Courier New', monospace;
                }
                
                .doc-content pre {
                    background: var(--bg-tertiary);
                    border-radius: var(--radius);
                    padding: 20px;
                    overflow-x: auto;
                    margin-bottom: 24px;
                }
                
                .doc-content pre code {
                    background: transparent;
                    padding: 0;
                    color: var(--text-primary);
                    font-size: 14px;
                    line-height: 1.6;
                }
                
                .doc-content blockquote {
                    border-left: 4px solid var(--primary);
                    padding-left: 20px;
                    margin: 24px 0;
                    color: var(--text-secondary);
                    font-style: italic;
                }
                
                .doc-content table {
                    width: 100%;
                    border-collapse: collapse;
                    margin-bottom: 24px;
                }
                
                .doc-content th {
                    text-align: left;
                    padding: 12px;
                    border-bottom: 2px solid var(--border);
                    color: var(--text-primary);
                    font-weight: 600;
                }
                
                .doc-content td {
                    padding: 12px;
                    border-bottom: 1px solid var(--border);
                    color: var(--text-secondary);
                }
                
                .alert {
                    padding: 16px 20px;
                    border-radius: var(--radius);
                    margin-bottom: 24px;
                }
                
                .alert-info {
                    background: rgba(102, 126, 234, 0.1);
                    border-left: 4px solid var(--primary);
                    color: var(--text-primary);
                }
                
                .alert-warning {
                    background: rgba(245, 158, 11, 0.1);
                    border-left: 4px solid #f59e0b;
                    color: var(--text-primary);
                }
                
                .alert-success {
                    background: rgba(16, 185, 129, 0.1);
                    border-left: 4px solid #10b981;
                    color: var(--text-primary);
                }
                
                .next-prev {
                    display: flex;
                    justify-content: space-between;
                    margin-top: 60px;
                    padding-top: 40px;
                    border-top: 1px solid var(--border);
                }
                
                .next-prev a {
                    color: var(--primary);
                    text-decoration: none;
                    font-weight: 600;
                    display: flex;
                    align-items: center;
                    gap: 8px;
                    transition: var(--transition);
                }
                
                .next-prev a:hover {
                    gap: 12px;
                }
            </style>
            
            <div class="doc-header">
                <h1 class="doc-title">${doc ? doc.title : 'Documentation'}</h1>
            </div>
            
            <div class="doc-content">
                ${doc ? doc.content : this.getDefaultContent()}
            </div>
        `;
        
        return container;
    }
    
    getInstallationContent() {
        return `
            <h2>Installation Methods</h2>
            
            <h3>NPM (Recommended)</h3>
            <p>Install AKAO UI using npm or yarn:</p>
            <pre><code># Using npm
npm install @akaoio/ui

# Using yarn
yarn add @akaoio/ui

# Using pnpm
pnpm add @akaoio/ui</code></pre>
            
            <h3>CDN</h3>
            <p>You can also include AKAO UI directly from a CDN:</p>
            <pre><code>&lt;script type="module"&gt;
  import { html, css, Component } from 'https://unpkg.com/@akaoio/ui@latest/src/index.js';
&lt;/script&gt;</code></pre>
            
            <div class="alert alert-info">
                <strong>Note:</strong> When using the CDN version, make sure your script tag has <code>type="module"</code> attribute.
            </div>
            
            <h3>Local Development</h3>
            <p>For local development, you can clone the repository:</p>
            <pre><code>git clone https://github.com/akaoio/ui.git
cd ui
npm install
npm run dev</code></pre>
            
            <h2>Project Setup</h2>
            
            <h3>Basic HTML Setup</h3>
            <pre><code>&lt;!DOCTYPE html&gt;
&lt;html lang="en"&gt;
&lt;head&gt;
    &lt;meta charset="UTF-8"&gt;
    &lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;
    &lt;title&gt;My App&lt;/title&gt;
    &lt;script type="module" src="app.js"&gt;&lt;/script&gt;
&lt;/head&gt;
&lt;body&gt;
    &lt;div id="app"&gt;&lt;/div&gt;
&lt;/body&gt;
&lt;/html&gt;</code></pre>
            
            <h3>JavaScript Module</h3>
            <pre><code>// app.js
import { html, css, init } from '@akaoio/ui';

// Initialize the UI system
await init();

// Create your first component
class MyApp extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }
    
    connectedCallback() {
        this.render();
    }
    
    render() {
        this.shadowRoot.innerHTML = \`
            &lt;h1&gt;Hello AKAO UI!&lt;/h1&gt;
        \`;
    }
}

customElements.define('my-app', MyApp);

// Mount the app
document.getElementById('app').innerHTML = '&lt;my-app&gt;&lt;/my-app&gt;';</code></pre>
            
            <h2>Next Steps</h2>
            <ul>
                <li>Read the <a href="/documentation/quickstart">Quick Start Guide</a></li>
                <li>Explore <a href="/components">Available Components</a></li>
                <li>Learn about <a href="/documentation/web-components">Web Components</a></li>
                <li>Understand <a href="/documentation/philosophy">Our Philosophy</a></li>
            </ul>
        `;
    }
    
    getQuickStartContent() {
        return `
            <h2>Your First Component</h2>
            <p>Let's create a simple counter component to understand the basics of AKAO UI:</p>
            
            <pre><code>import { html, css } from '@akaoio/ui';

class Counter extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.count = 0;
    }
    
    connectedCallback() {
        this.render();
    }
    
    increment() {
        this.count++;
        this.render();
    }
    
    decrement() {
        this.count--;
        this.render();
    }
    
    render() {
        this.shadowRoot.innerHTML = \`
            <style>
                :host {
                    display: inline-block;
                    padding: 20px;
                    background: linear-gradient(135deg, #667eea, #764ba2);
                    border-radius: 12px;
                    color: white;
                    font-family: sans-serif;
                }
                
                .counter {
                    display: flex;
                    align-items: center;
                    gap: 20px;
                }
                
                button {
                    width: 40px;
                    height: 40px;
                    border: 2px solid white;
                    background: transparent;
                    color: white;
                    border-radius: 50%;
                    font-size: 20px;
                    cursor: pointer;
                    transition: all 0.3s;
                }
                
                button:hover {
                    background: white;
                    color: #667eea;
                }
                
                .count {
                    font-size: 32px;
                    font-weight: bold;
                    min-width: 60px;
                    text-align: center;
                }
            </style>
            
            <div class="counter">
                <button onclick="this.getRootNode().host.decrement()">-</button>
                <span class="count">\${this.count}</span>
                <button onclick="this.getRootNode().host.increment()">+</button>
            </div>
        \`;
    }
}

customElements.define('my-counter', Counter);</code></pre>
            
            <h2>Using the Component</h2>
            <p>Once defined, you can use your component anywhere in your HTML:</p>
            
            <pre><code>&lt;my-counter&gt;&lt;/my-counter&gt;</code></pre>
            
            <h2>Component Features</h2>
            
            <h3>Props and Attributes</h3>
            <pre><code>class MyButton extends HTMLElement {
    static get observedAttributes() {
        return ['variant', 'size', 'disabled'];
    }
    
    attributeChangedCallback(name, oldValue, newValue) {
        if (oldValue !== newValue) {
            this.render();
        }
    }
    
    get variant() {
        return this.getAttribute('variant') || 'default';
    }
    
    get size() {
        return this.getAttribute('size') || 'medium';
    }
    
    get disabled() {
        return this.hasAttribute('disabled');
    }
}</code></pre>
            
            <h3>Event Handling</h3>
            <pre><code>class ClickableCard extends HTMLElement {
    connectedCallback() {
        this.addEventListener('click', this.handleClick);
    }
    
    disconnectedCallback() {
        this.removeEventListener('click', this.handleClick);
    }
    
    handleClick = (event) => {
        // Dispatch custom event
        this.dispatchEvent(new CustomEvent('card-click', {
            detail: { timestamp: Date.now() },
            bubbles: true,
            composed: true
        }));
    }
}</code></pre>
            
            <h3>Lifecycle Methods</h3>
            <ul>
                <li><code>constructor()</code> - Called when element is created</li>
                <li><code>connectedCallback()</code> - Called when element is added to DOM</li>
                <li><code>disconnectedCallback()</code> - Called when element is removed from DOM</li>
                <li><code>attributeChangedCallback()</code> - Called when observed attribute changes</li>
                <li><code>adoptedCallback()</code> - Called when element is moved to new document</li>
            </ul>
            
            <div class="alert alert-success">
                <strong>Tip:</strong> Always use Shadow DOM for style encapsulation and better performance.
            </div>
        `;
    }
    
    getPhilosophyContent() {
        return `
            <h2>Core Principles</h2>
            
            <h3>1. Zero Dependencies</h3>
            <p>AKAO UI is built entirely with vanilla JavaScript and Web APIs. We believe in leveraging the platform's native capabilities rather than abstracting them away. This means:</p>
            <ul>
                <li>No framework lock-in</li>
                <li>Smaller bundle sizes</li>
                <li>Better performance</li>
                <li>Future-proof code</li>
            </ul>
            
            <h3>2. Web Standards First</h3>
            <p>We embrace web standards and use them as our foundation:</p>
            <ul>
                <li><strong>Web Components:</strong> Native component model</li>
                <li><strong>Shadow DOM:</strong> True style encapsulation</li>
                <li><strong>Custom Elements:</strong> First-class HTML citizens</li>
                <li><strong>ES Modules:</strong> Native JavaScript modules</li>
            </ul>
            
            <h3>3. Progressive Enhancement</h3>
            <p>Our components work everywhere and enhance progressively:</p>
            <blockquote>
                Start with semantic HTML, enhance with Web Components, and add interactivity with JavaScript.
            </blockquote>
            
            <h3>4. Developer Experience</h3>
            <p>We prioritize developer happiness without sacrificing performance:</p>
            <ul>
                <li>Intuitive APIs</li>
                <li>Clear documentation</li>
                <li>TypeScript support</li>
                <li>Excellent debugging experience</li>
            </ul>
            
            <h2>Design Decisions</h2>
            
            <h3>Why Web Components?</h3>
            <p>Web Components are the platform's native component model. They provide:</p>
            <ul>
                <li>True encapsulation with Shadow DOM</li>
                <li>Framework agnostic - works everywhere</li>
                <li>Standard lifecycle hooks</li>
                <li>Native browser optimization</li>
            </ul>
            
            <h3>Why CSS-in-JS?</h3>
            <p>Our CSS-in-JS approach using template literals offers:</p>
            <ul>
                <li>Scoped styles without tooling</li>
                <li>Dynamic styling based on props</li>
                <li>Type safety with TypeScript</li>
                <li>No build step required</li>
            </ul>
            
            <h3>Why No Build Tools?</h3>
            <p>While build tools have their place, we believe in:</p>
            <ul>
                <li>Instant development feedback</li>
                <li>Simplified debugging</li>
                <li>Reduced complexity</li>
                <li>Platform alignment</li>
            </ul>
            
            <div class="alert alert-info">
                <strong>Note:</strong> You can still use build tools if you want. AKAO UI works great with Vite, Webpack, Rollup, and others.
            </div>
            
            <h2>When to Use AKAO UI</h2>
            
            <h3>Perfect For:</h3>
            <ul>
                <li>Modern web applications</li>
                <li>Component libraries</li>
                <li>Design systems</li>
                <li>Micro-frontends</li>
                <li>Progressive web apps</li>
            </ul>
            
            <h3>Consider Alternatives When:</h3>
            <ul>
                <li>You need IE11 support</li>
                <li>Your team is deeply invested in a specific framework</li>
                <li>You require server-side rendering (though Web Components can SSR)</li>
            </ul>
        `;
    }
    
    getWebComponentsContent() {
        return `
            <h2>Understanding Web Components</h2>
            <p>Web Components are a set of web platform APIs that allow you to create custom, reusable HTML elements. They consist of three main technologies:</p>
            
            <h3>1. Custom Elements</h3>
            <p>Define new HTML elements with custom behavior:</p>
            <pre><code>class MyElement extends HTMLElement {
    constructor() {
        super();
        console.log('Element created!');
    }
}

customElements.define('my-element', MyElement);</code></pre>
            
            <h3>2. Shadow DOM</h3>
            <p>Encapsulate styles and markup:</p>
            <pre><code>class EncapsulatedElement extends HTMLElement {
    constructor() {
        super();
        const shadow = this.attachShadow({ mode: 'open' });
        
        shadow.innerHTML = \`
            <style>
                /* These styles are scoped! */
                p { color: blue; }
            </style>
            <p>This text is blue!</p>
        \`;
    }
}</code></pre>
            
            <h3>3. HTML Templates</h3>
            <p>Define reusable markup structures:</p>
            <pre><code><template id="my-template">
    <style>
        .container { padding: 20px; }
    </style>
    <div class="container">
        <slot></slot>
    </div>
</template>

<script>
class TemplatedElement extends HTMLElement {
    constructor() {
        super();
        const template = document.getElementById('my-template');
        const shadow = this.attachShadow({ mode: 'open' });
        shadow.appendChild(template.content.cloneNode(true));
    }
}
</script></code></pre>
            
            <h2>Component Lifecycle</h2>
            
            <h3>Creation and Initialization</h3>
            <pre><code>class LifecycleDemo extends HTMLElement {
    constructor() {
        super();
        // Element is being created
        // Set up initial state, shadow DOM
        this.attachShadow({ mode: 'open' });
        this._data = {};
    }
    
    connectedCallback() {
        // Element added to the DOM
        // Good place to fetch data, add listeners
        this.render();
        this.addEventListener('click', this.handleClick);
    }
    
    disconnectedCallback() {
        // Element removed from the DOM
        // Clean up listeners, timers, observers
        this.removeEventListener('click', this.handleClick);
    }
    
    adoptedCallback() {
        // Element moved to a new document
        // Rarely used in practice
    }
}</code></pre>
            
            <h2>Attributes and Properties</h2>
            
            <h3>Observing Attribute Changes</h3>
            <pre><code>class ObservedElement extends HTMLElement {
    static get observedAttributes() {
        return ['color', 'size', 'disabled'];
    }
    
    attributeChangedCallback(name, oldValue, newValue) {
        console.log(\`\${name} changed from \${oldValue} to \${newValue}\`);
        
        switch(name) {
            case 'color':
                this.updateColor(newValue);
                break;
            case 'size':
                this.updateSize(newValue);
                break;
            case 'disabled':
                this.updateDisabled(newValue !== null);
                break;
        }
    }
}</code></pre>
            
            <h3>Properties vs Attributes</h3>
            <pre><code>class PropertyElement extends HTMLElement {
    // Attribute (HTML)
    get color() {
        return this.getAttribute('color') || 'blue';
    }
    
    set color(value) {
        this.setAttribute('color', value);
    }
    
    // Property (JavaScript)
    _data = null;
    
    get data() {
        return this._data;
    }
    
    set data(value) {
        this._data = value;
        this.render(); // Re-render on data change
    }
}</code></pre>
            
            <h2>Slots and Composition</h2>
            
            <h3>Using Slots</h3>
            <pre><code>class CardElement extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        
        this.shadowRoot.innerHTML = \`
            <style>
                .card { border: 1px solid #ccc; padding: 20px; }
                .header { font-weight: bold; margin-bottom: 10px; }
                .footer { margin-top: 10px; color: #666; }
            </style>
            <div class="card">
                <div class="header">
                    <slot name="header">Default Header</slot>
                </div>
                <div class="body">
                    <slot>Default Content</slot>
                </div>
                <div class="footer">
                    <slot name="footer">Default Footer</slot>
                </div>
            </div>
        \`;
    }
}

// Usage:
<card-element>
    <span slot="header">Custom Header</span>
    <p>This is the main content</p>
    <span slot="footer">Custom Footer</span>
</card-element></code></pre>
            
            <div class="alert alert-success">
                <strong>Best Practice:</strong> Always use Shadow DOM for style encapsulation unless you specifically need global styles.
            </div>
        `;
    }
    
    getShadowDOMContent() {
        return `
            <h2>What is Shadow DOM?</h2>
            <p>Shadow DOM is a web standard that provides encapsulation for JavaScript, CSS, and templating in a Web Component. It allows you to create isolated DOM trees that are separate from the main document DOM.</p>
            
            <h3>Key Benefits</h3>
            <ul>
                <li><strong>Style Encapsulation:</strong> Styles defined inside Shadow DOM don't leak out</li>
                <li><strong>DOM Encapsulation:</strong> Internal DOM structure is hidden from outside JavaScript</li>
                <li><strong>Composition:</strong> Build complex components from simpler ones</li>
                <li><strong>Simplified CSS:</strong> No need for BEM or complex naming conventions</li>
            </ul>
            
            <h2>Creating Shadow DOM</h2>
            
            <h3>Open vs Closed Mode</h3>
            <pre><code>class ShadowComponent extends HTMLElement {
    constructor() {
        super();
        
        // Open mode (recommended) - shadowRoot is accessible
        this.attachShadow({ mode: 'open' });
        
        // Closed mode - shadowRoot is not accessible from outside
        // this.attachShadow({ mode: 'closed' });
    }
}</code></pre>
            
            <div class="alert alert-info">
                <strong>Recommendation:</strong> Always use <code>mode: 'open'</code> unless you have specific security requirements. Closed mode doesn't provide real security and makes debugging harder.
            </div>
            
            <h2>Styling Shadow DOM</h2>
            
            <h3>Internal Styles</h3>
            <pre><code>class StyledComponent extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        
        this.shadowRoot.innerHTML = \`
            <style>
                /* These styles only apply inside this component */
                :host {
                    display: block;
                    padding: 20px;
                    border: 1px solid #ccc;
                }
                
                :host([disabled]) {
                    opacity: 0.5;
                    pointer-events: none;
                }
                
                :host(:hover) {
                    border-color: #666;
                }
                
                :host-context(.dark-theme) {
                    background: #333;
                    color: white;
                }
                
                p {
                    margin: 0;
                    color: blue;
                }
            </style>
            <p>This text is blue!</p>
        \`;
    }
}</code></pre>
            
            <h3>CSS Custom Properties</h3>
            <p>CSS custom properties (CSS variables) pierce the Shadow DOM boundary:</p>
            <pre><code>class ThemedComponent extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        
        this.shadowRoot.innerHTML = \`
            <style>
                :host {
                    /* Use CSS variables for theming */
                    background: var(--bg-color, white);
                    color: var(--text-color, black);
                    padding: var(--spacing, 20px);
                }
                
                button {
                    background: var(--primary-color, blue);
                    color: white;
                    border: none;
                    padding: 10px 20px;
                    border-radius: var(--border-radius, 4px);
                }
            </style>
            <button>Themed Button</button>
        \`;
    }
}

// Usage with CSS variables:
<style>
    themed-component {
        --bg-color: #f0f0f0;
        --text-color: #333;
        --primary-color: #007bff;
        --border-radius: 8px;
    }
</style></code></pre>
            
            <h2>Slots and Light DOM</h2>
            
            <h3>Default and Named Slots</h3>
            <pre><code>class SlottedComponent extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        
        this.shadowRoot.innerHTML = \`
            <style>
                .container {
                    border: 2px solid #ccc;
                    padding: 20px;
                }
                
                ::slotted(*) {
                    /* Style slotted elements */
                    margin: 10px 0;
                }
                
                ::slotted(h2) {
                    color: blue;
                }
            </style>
            <div class="container">
                <slot name="header"></slot>
                <slot>Default content if no slot provided</slot>
                <slot name="footer"></slot>
            </div>
        \`;
    }
}

// Usage:
<slotted-component>
    <h2 slot="header">Header Content</h2>
    <p>Main content goes here</p>
    <div slot="footer">Footer Content</div>
</slotted-component></code></pre>
            
            <h3>Slot Change Events</h3>
            <pre><code>class SlotMonitor extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        
        this.shadowRoot.innerHTML = \`
            <slot></slot>
        \`;
        
        const slot = this.shadowRoot.querySelector('slot');
        slot.addEventListener('slotchange', (e) => {
            const nodes = slot.assignedNodes();
            console.log('Slot content changed:', nodes);
        });
    }
}</code></pre>
            
            <h2>Event Handling</h2>
            
            <h3>Event Retargeting</h3>
            <p>Events that bubble up from Shadow DOM are retargeted to maintain encapsulation:</p>
            <pre><code>class EventComponent extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        
        this.shadowRoot.innerHTML = \`
            <button id="internal">Click me</button>
        \`;
        
        this.shadowRoot.getElementById('internal').addEventListener('click', (e) => {
            // Inside shadow DOM: target is the button
            console.log('Inside:', e.target); // <button>
            
            // Dispatch custom event
            this.dispatchEvent(new CustomEvent('button-click', {
                bubbles: true,
                composed: true, // Allow event to cross shadow boundary
                detail: { timestamp: Date.now() }
            }));
        });
    }
}

// Outside listener sees the custom element as target
document.addEventListener('button-click', (e) => {
    console.log('Outside:', e.target); // <event-component>
});</code></pre>
            
            <div class="alert alert-warning">
                <strong>Important:</strong> Set <code>composed: true</code> on custom events if you want them to bubble through Shadow DOM boundaries.
            </div>
        `;
    }
    
    getCSSinJSContent() {
        return `
            <h2>CSS-in-JS with AKAO UI</h2>
            <p>AKAO UI provides a powerful CSS-in-JS solution using template literals, offering all the benefits of CSS-in-JS without any build-time dependencies.</p>
            
            <h3>Basic Usage</h3>
            <pre><code>import { css } from '@akaoio/ui';

const styles = css\`
    .container {
        display: flex;
        padding: 20px;
        background: linear-gradient(135deg, #667eea, #764ba2);
        border-radius: 12px;
    }
    
    .title {
        font-size: 24px;
        font-weight: bold;
        color: white;
    }
\`;</code></pre>
            
            <h2>Dynamic Styles</h2>
            
            <h3>Props-based Styling</h3>
            <pre><code>class DynamicButton extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }
    
    get variant() {
        return this.getAttribute('variant') || 'primary';
    }
    
    get size() {
        return this.getAttribute('size') || 'medium';
    }
    
    styles() {
        const variants = {
            primary: css\`
                background: linear-gradient(135deg, #667eea, #764ba2);
                color: white;
            \`,
            secondary: css\`
                background: transparent;
                color: #667eea;
                border: 2px solid #667eea;
            \`,
            danger: css\`
                background: #ef4444;
                color: white;
            \`
        };
        
        const sizes = {
            small: css\`
                padding: 8px 16px;
                font-size: 14px;
            \`,
            medium: css\`
                padding: 12px 24px;
                font-size: 16px;
            \`,
            large: css\`
                padding: 16px 32px;
                font-size: 18px;
            \`
        };
        
        return css\`
            button {
                border: none;
                border-radius: 8px;
                cursor: pointer;
                transition: all 0.3s;
                \${variants[this.variant]}
                \${sizes[this.size]}
            }
            
            button:hover {
                transform: translateY(-2px);
                box-shadow: 0 4px 12px rgba(0,0,0,0.15);
            }
        \`;
    }
    
    render() {
        this.shadowRoot.innerHTML = \`
            <style>\${this.styles()}</style>
            <button><slot></slot></button>
        \`;
    }
}</code></pre>
            
            <h2>Theme Variables</h2>
            
            <h3>Design Tokens</h3>
            <pre><code>const theme = {
    colors: {
        primary: '#667eea',
        secondary: '#764ba2',
        success: '#10b981',
        danger: '#ef4444',
        warning: '#f59e0b'
    },
    spacing: {
        xs: '4px',
        sm: '8px',
        md: '16px',
        lg: '24px',
        xl: '32px'
    },
    typography: {
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
        sizes: {
            xs: '12px',
            sm: '14px',
            md: '16px',
            lg: '18px',
            xl: '20px',
            '2xl': '24px',
            '3xl': '30px'
        }
    },
    borderRadius: {
        sm: '4px',
        md: '8px',
        lg: '12px',
        full: '9999px'
    },
    shadows: {
        sm: '0 1px 3px rgba(0,0,0,0.12)',
        md: '0 4px 6px rgba(0,0,0,0.1)',
        lg: '0 10px 15px rgba(0,0,0,0.1)',
        xl: '0 20px 25px rgba(0,0,0,0.1)'
    }
};

// Using theme in styles
const componentStyles = css\`
    .card {
        padding: \${theme.spacing.lg};
        background: white;
        border-radius: \${theme.borderRadius.lg};
        box-shadow: \${theme.shadows.md};
    }
    
    .card-title {
        font-size: \${theme.typography.sizes.xl};
        color: \${theme.colors.primary};
        margin-bottom: \${theme.spacing.md};
    }
\`;</code></pre>
            
            <h2>Animations</h2>
            
            <h3>Keyframe Animations</h3>
            <pre><code>const animations = css\`
    @keyframes fadeIn {
        from {
            opacity: 0;
            transform: translateY(20px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
    
    @keyframes pulse {
        0% {
            transform: scale(1);
        }
        50% {
            transform: scale(1.05);
        }
        100% {
            transform: scale(1);
        }
    }
    
    .fade-in {
        animation: fadeIn 0.3s ease-out;
    }
    
    .pulse {
        animation: pulse 2s infinite;
    }
\`;</code></pre>
            
            <h2>Media Queries</h2>
            
            <h3>Responsive Styles</h3>
            <pre><code>const responsiveStyles = css\`
    .container {
        display: grid;
        gap: 20px;
        padding: 20px;
    }
    
    /* Mobile first approach */
    .container {
        grid-template-columns: 1fr;
    }
    
    @media (min-width: 640px) {
        .container {
            grid-template-columns: repeat(2, 1fr);
        }
    }
    
    @media (min-width: 1024px) {
        .container {
            grid-template-columns: repeat(3, 1fr);
            gap: 30px;
            padding: 30px;
        }
    }
    
    @media (min-width: 1280px) {
        .container {
            grid-template-columns: repeat(4, 1fr);
        }
    }
\`;</code></pre>
            
            <h2>CSS Modules Pattern</h2>
            
            <h3>Scoped Styles</h3>
            <pre><code>// styles.js
export const buttonStyles = css\`
    .btn {
        padding: 12px 24px;
        border: none;
        border-radius: 8px;
        cursor: pointer;
    }
    
    .btn-primary {
        background: #667eea;
        color: white;
    }
    
    .btn-secondary {
        background: #e5e7eb;
        color: #374151;
    }
\`;

export const cardStyles = css\`
    .card {
        background: white;
        border-radius: 12px;
        padding: 24px;
        box-shadow: 0 4px 6px rgba(0,0,0,0.1);
    }
\`;

// component.js
import { buttonStyles, cardStyles } from './styles.js';

class StyledComponent extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        
        this.shadowRoot.innerHTML = \`
            <style>
                \${buttonStyles}
                \${cardStyles}
            </style>
            <div class="card">
                <button class="btn btn-primary">Click me</button>
            </div>
        \`;
    }
}</code></pre>
            
            <div class="alert alert-success">
                <strong>Pro Tip:</strong> Use CSS custom properties for theming and keep component-specific styles in the component file for better maintainability.
            </div>
        `;
    }
    
    getStateManagementContent() {
        return `
            <h2>State in Web Components</h2>
            <p>AKAO UI components manage state using native JavaScript patterns, making them predictable and easy to debug.</p>
            
            <h3>Local Component State</h3>
            <pre><code>class StatefulComponent extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        
        // Initialize state
        this.state = {
            count: 0,
            user: null,
            loading: false
        };
    }
    
    // State setter with automatic re-render
    setState(updates) {
        this.state = { ...this.state, ...updates };
        this.render();
    }
    
    increment() {
        this.setState({ count: this.state.count + 1 });
    }
    
    async loadUser() {
        this.setState({ loading: true });
        
        try {
            const response = await fetch('/api/user');
            const user = await response.json();
            this.setState({ user, loading: false });
        } catch (error) {
            this.setState({ loading: false, error: error.message });
        }
    }
    
    render() {
        this.shadowRoot.innerHTML = \`
            <div>
                <p>Count: \${this.state.count}</p>
                <button onclick="this.getRootNode().host.increment()">
                    Increment
                </button>
                \${this.state.loading ? '<p>Loading...</p>' : ''}
                \${this.state.user ? \`<p>User: \${this.state.user.name}</p>\` : ''}
            </div>
        \`;
    }
}</code></pre>
            
            <h2>Reactive Properties</h2>
            
            <h3>Property Observers</h3>
            <pre><code>class ReactiveComponent extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this._data = null;
    }
    
    // Reactive property with getter/setter
    get data() {
        return this._data;
    }
    
    set data(value) {
        const oldValue = this._data;
        this._data = value;
        
        // Trigger update if value changed
        if (oldValue !== value) {
            this.onDataChange(oldValue, value);
            this.render();
        }
    }
    
    onDataChange(oldValue, newValue) {
        console.log('Data changed:', { oldValue, newValue });
        
        // Dispatch custom event
        this.dispatchEvent(new CustomEvent('datachange', {
            detail: { oldValue, newValue },
            bubbles: true
        }));
    }
    
    render() {
        if (!this.data) {
            this.shadowRoot.innerHTML = '<p>No data</p>';
            return;
        }
        
        this.shadowRoot.innerHTML = \`
            <div>
                <h3>\${this.data.title}</h3>
                <p>\${this.data.description}</p>
            </div>
        \`;
    }
}</code></pre>
            
            <h2>Global State Management</h2>
            
            <h3>Simple Store Pattern</h3>
            <pre><code>// store.js
class Store {
    constructor(initialState = {}) {
        this.state = initialState;
        this.listeners = new Set();
    }
    
    getState() {
        return this.state;
    }
    
    setState(updates) {
        this.state = { ...this.state, ...updates };
        this.notify();
    }
    
    subscribe(listener) {
        this.listeners.add(listener);
        return () => this.listeners.delete(listener);
    }
    
    notify() {
        this.listeners.forEach(listener => listener(this.state));
    }
}

// Create global store
export const store = new Store({
    user: null,
    theme: 'light',
    cart: []
});

// Component using store
class ConnectedComponent extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.unsubscribe = null;
    }
    
    connectedCallback() {
        // Subscribe to store changes
        this.unsubscribe = store.subscribe(state => {
            this.onStateChange(state);
        });
        
        // Initial render
        this.render(store.getState());
    }
    
    disconnectedCallback() {
        // Clean up subscription
        if (this.unsubscribe) {
            this.unsubscribe();
        }
    }
    
    onStateChange(state) {
        this.render(state);
    }
    
    render(state) {
        this.shadowRoot.innerHTML = \`
            <div>
                <p>Theme: \${state.theme}</p>
                <p>Cart items: \${state.cart.length}</p>
            </div>
        \`;
    }
}</code></pre>
            
            <h2>Event-Driven State</h2>
            
            <h3>Custom Events for State Changes</h3>
            <pre><code>// Event bus for communication
class EventBus extends EventTarget {
    emit(type, detail) {
        this.dispatchEvent(new CustomEvent(type, { detail }));
    }
}

export const eventBus = new EventBus();

// Component A - Emitter
class EmitterComponent extends HTMLElement {
    handleClick() {
        eventBus.emit('user-action', {
            action: 'click',
            timestamp: Date.now()
        });
    }
    
    connectedCallback() {
        this.innerHTML = \`
            <button onclick="this.handleClick()">
                Emit Event
            </button>
        \`;
    }
}

// Component B - Listener
class ListenerComponent extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.events = [];
    }
    
    connectedCallback() {
        eventBus.addEventListener('user-action', this.handleEvent);
        this.render();
    }
    
    disconnectedCallback() {
        eventBus.removeEventListener('user-action', this.handleEvent);
    }
    
    handleEvent = (event) => {
        this.events.push(event.detail);
        this.render();
    }
    
    render() {
        this.shadowRoot.innerHTML = \`
            <div>
                <h3>Events received: \${this.events.length}</h3>
                <ul>
                    \${this.events.map(e => \`
                        <li>\${e.action} at \${e.timestamp}</li>
                    \`).join('')}
                </ul>
            </div>
        \`;
    }
}</code></pre>
            
            <h2>Form State Management</h2>
            
            <h3>Controlled Forms</h3>
            <pre><code>class FormComponent extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        
        this.formData = {
            name: '',
            email: '',
            message: ''
        };
    }
    
    handleInput(field, value) {
        this.formData[field] = value;
        this.validate();
    }
    
    validate() {
        const errors = {};
        
        if (!this.formData.name) {
            errors.name = 'Name is required';
        }
        
        if (!this.formData.email.includes('@')) {
            errors.email = 'Valid email required';
        }
        
        this.errors = errors;
        this.render();
    }
    
    handleSubmit(e) {
        e.preventDefault();
        
        if (Object.keys(this.errors).length === 0) {
            console.log('Form submitted:', this.formData);
            // Send data to server
        }
    }
    
    render() {
        this.shadowRoot.innerHTML = \`
            <form onsubmit="this.getRootNode().host.handleSubmit(event)">
                <div>
                    <input
                        type="text"
                        placeholder="Name"
                        value="\${this.formData.name}"
                        oninput="this.getRootNode().host.handleInput('name', this.value)"
                    />
                    \${this.errors?.name ? \`<span class="error">\${this.errors.name}</span>\` : ''}
                </div>
                
                <div>
                    <input
                        type="email"
                        placeholder="Email"
                        value="\${this.formData.email}"
                        oninput="this.getRootNode().host.handleInput('email', this.value)"
                    />
                    \${this.errors?.email ? \`<span class="error">\${this.errors.email}</span>\` : ''}
                </div>
                
                <div>
                    <textarea
                        placeholder="Message"
                        oninput="this.getRootNode().host.handleInput('message', this.value)"
                    >\${this.formData.message}</textarea>
                </div>
                
                <button type="submit">Submit</button>
            </form>
        \`;
    }
}</code></pre>
            
            <div class="alert alert-info">
                <strong>Best Practice:</strong> Keep component state local when possible. Use global state only for data that needs to be shared across multiple components.
            </div>
        `;
    }
    
    getAnimationsContent() {
        return `
            <h2>Animation System</h2>
            <p>AKAO UI provides a comprehensive animation system that works seamlessly with Web Components.</p>
            
            <h3>Built-in Animations</h3>
            <pre><code>import { animations } from '@akaoio/ui';

// Available animations
const { fadeIn, fadeOut, slideIn, slideOut, bloom } = animations;

class AnimatedComponent extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }
    
    connectedCallback() {
        this.shadowRoot.innerHTML = \`
            <style>
                \${fadeIn}
                \${slideIn}
                
                .card {
                    animation: fadeIn 0.5s ease-out;
                }
                
                .slide-element {
                    animation: slideIn 0.3s ease-out;
                }
            </style>
            <div class="card">Fading in!</div>
            <div class="slide-element">Sliding in!</div>
        \`;
    }
}</code></pre>
            
            <h2>Custom Animations</h2>
            
            <h3>Keyframe Animations</h3>
            <pre><code>const customAnimations = css\`
    @keyframes bounce {
        0%, 100% {
            transform: translateY(0);
        }
        50% {
            transform: translateY(-20px);
        }
    }
    
    @keyframes rotate {
        from {
            transform: rotate(0deg);
        }
        to {
            transform: rotate(360deg);
        }
    }
    
    @keyframes pulse {
        0% {
            transform: scale(1);
            opacity: 1;
        }
        50% {
            transform: scale(1.1);
            opacity: 0.8;
        }
        100% {
            transform: scale(1);
            opacity: 1;
        }
    }
    
    .bounce {
        animation: bounce 1s ease-in-out infinite;
    }
    
    .rotate {
        animation: rotate 2s linear infinite;
    }
    
    .pulse {
        animation: pulse 1.5s ease-in-out infinite;
    }
\`;</code></pre>
            
            <h2>Transition Effects</h2>
            
            <h3>Smooth Transitions</h3>
            <pre><code>class TransitionComponent extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.expanded = false;
    }
    
    styles() {
        return css\`
            .container {
                background: white;
                border-radius: 12px;
                padding: 20px;
                box-shadow: 0 4px 6px rgba(0,0,0,0.1);
                transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
            }
            
            .container:hover {
                transform: translateY(-4px);
                box-shadow: 0 10px 20px rgba(0,0,0,0.15);
            }
            
            .content {
                max-height: 0;
                overflow: hidden;
                opacity: 0;
                transition: all 0.3s ease-out;
            }
            
            .content.expanded {
                max-height: 500px;
                opacity: 1;
            }
            
            .button {
                background: #667eea;
                color: white;
                border: none;
                padding: 10px 20px;
                border-radius: 8px;
                cursor: pointer;
                transition: all 0.2s;
            }
            
            .button:hover {
                background: #5a67d8;
                transform: scale(1.05);
            }
            
            .button:active {
                transform: scale(0.95);
            }
        \`;
    }
    
    toggle() {
        this.expanded = !this.expanded;
        this.render();
    }
    
    render() {
        this.shadowRoot.innerHTML = \`
            <style>\${this.styles()}</style>
            <div class="container">
                <button class="button" onclick="this.getRootNode().host.toggle()">
                    \${this.expanded ? 'Collapse' : 'Expand'}
                </button>
                <div class="content \${this.expanded ? 'expanded' : ''}">
                    <p>This content smoothly expands and collapses!</p>
                    <p>Add as much content as you want here.</p>
                </div>
            </div>
        \`;
    }
}</code></pre>
            
            <h2>Animation Timing</h2>
            
            <h3>Staggered Animations</h3>
            <pre><code>class StaggeredList extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.items = ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5'];
    }
    
    connectedCallback() {
        this.shadowRoot.innerHTML = \`
            <style>
                @keyframes slideInLeft {
                    from {
                        transform: translateX(-100%);
                        opacity: 0;
                    }
                    to {
                        transform: translateX(0);
                        opacity: 1;
                    }
                }
                
                .list {
                    list-style: none;
                    padding: 0;
                }
                
                .list-item {
                    padding: 16px;
                    margin-bottom: 8px;
                    background: white;
                    border-radius: 8px;
                    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
                    animation: slideInLeft 0.5s ease-out forwards;
                    opacity: 0;
                }
                
                \${this.items.map((_, index) => \`
                    .list-item:nth-child(\${index + 1}) {
                        animation-delay: \${index * 0.1}s;
                    }
                \`).join('')}
            </style>
            <ul class="list">
                \${this.items.map(item => \`
                    <li class="list-item">\${item}</li>
                \`).join('')}
            </ul>
        \`;
    }
}</code></pre>
            
            <h2>Performance Tips</h2>
            
            <h3>GPU Acceleration</h3>
            <pre><code>const performantAnimations = css\`
    /* Use transform and opacity for smooth animations */
    .smooth-animation {
        /* Trigger GPU acceleration */
        will-change: transform, opacity;
        transform: translateZ(0);
        
        transition: transform 0.3s, opacity 0.3s;
    }
    
    /* Avoid animating these properties */
    .bad-animation {
        /* These cause layout recalculation */
        transition: width 0.3s, height 0.3s; /* Avoid */
        transition: padding 0.3s, margin 0.3s; /* Avoid */
    }
    
    /* Use transform instead */
    .good-animation {
        transform: scale(1.2); /* Good */
        transform: translateX(100px); /* Good */
    }
\`;</code></pre>
            
            <h3>Animation Observer</h3>
            <pre><code>class ObservedAnimation extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }
    
    connectedCallback() {
        this.shadowRoot.innerHTML = \`
            <style>
                @keyframes fadeInUp {
                    from {
                        opacity: 0;
                        transform: translateY(30px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
                
                .animate-on-scroll {
                    opacity: 0;
                }
                
                .animate-on-scroll.visible {
                    animation: fadeInUp 0.6s ease-out forwards;
                }
            </style>
            <div class="animate-on-scroll">
                <h2>I animate when visible!</h2>
            </div>
        \`;
        
        // Set up Intersection Observer
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                    }
                });
            },
            { threshold: 0.1 }
        );
        
        const element = this.shadowRoot.querySelector('.animate-on-scroll');
        observer.observe(element);
    }
}</code></pre>
            
            <div class="alert alert-success">
                <strong>Performance Tip:</strong> Always use <code>transform</code> and <code>opacity</code> for animations as they can be GPU-accelerated and don't trigger layout recalculation.
            </div>
        `;
    }
    
    getThemingContent() {
        return `
            <h2>Theming System</h2>
            <p>AKAO UI provides a flexible theming system using CSS custom properties that work seamlessly with Shadow DOM.</p>
            
            <h3>Theme Structure</h3>
            <pre><code>// theme.js
export const lightTheme = {
    // Colors
    '--color-primary': '#667eea',
    '--color-primary-dark': '#5a67d8',
    '--color-secondary': '#764ba2',
    '--color-success': '#10b981',
    '--color-danger': '#ef4444',
    '--color-warning': '#f59e0b',
    
    // Background colors
    '--bg-primary': '#ffffff',
    '--bg-secondary': '#f7fafc',
    '--bg-tertiary': '#edf2f7',
    
    // Text colors
    '--text-primary': '#2d3748',
    '--text-secondary': '#4a5568',
    '--text-tertiary': '#718096',
    
    // Borders
    '--border-color': '#e2e8f0',
    '--border-radius': '8px',
    
    // Shadows
    '--shadow-sm': '0 1px 3px rgba(0,0,0,0.12)',
    '--shadow-md': '0 4px 6px rgba(0,0,0,0.1)',
    '--shadow-lg': '0 10px 15px rgba(0,0,0,0.1)',
    '--shadow-xl': '0 20px 25px rgba(0,0,0,0.1)'
};

export const darkTheme = {
    // Colors remain vibrant
    '--color-primary': '#818cf8',
    '--color-primary-dark': '#6366f1',
    '--color-secondary': '#a78bfa',
    '--color-success': '#34d399',
    '--color-danger': '#f87171',
    '--color-warning': '#fbbf24',
    
    // Dark backgrounds
    '--bg-primary': '#1a202c',
    '--bg-secondary': '#2d3748',
    '--bg-tertiary': '#4a5568',
    
    // Light text
    '--text-primary': '#f7fafc',
    '--text-secondary': '#e2e8f0',
    '--text-tertiary': '#cbd5e0',
    
    // Dark borders
    '--border-color': '#4a5568',
    '--border-radius': '8px',
    
    // Adjusted shadows for dark mode
    '--shadow-sm': '0 1px 3px rgba(0,0,0,0.3)',
    '--shadow-md': '0 4px 6px rgba(0,0,0,0.3)',
    '--shadow-lg': '0 10px 15px rgba(0,0,0,0.3)',
    '--shadow-xl': '0 20px 25px rgba(0,0,0,0.3)'
};</code></pre>
            
            <h2>Applying Themes</h2>
            
            <h3>Theme Provider</h3>
            <pre><code>class ThemeProvider {
    constructor() {
        this.currentTheme = 'light';
        this.themes = {
            light: lightTheme,
            dark: darkTheme
        };
        
        // Check for saved preference
        const saved = localStorage.getItem('theme');
        if (saved && this.themes[saved]) {
            this.currentTheme = saved;
        } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
            this.currentTheme = 'dark';
        }
        
        this.applyTheme();
    }
    
    applyTheme() {
        const theme = this.themes[this.currentTheme];
        
        // Apply CSS variables to root
        Object.entries(theme).forEach(([property, value]) => {
            document.documentElement.style.setProperty(property, value);
        });
        
        // Update data attribute
        document.documentElement.setAttribute('data-theme', this.currentTheme);
        
        // Save preference
        localStorage.setItem('theme', this.currentTheme);
        
        // Dispatch event
        window.dispatchEvent(new CustomEvent('themechange', {
            detail: { theme: this.currentTheme }
        }));
    }
    
    setTheme(themeName) {
        if (this.themes[themeName]) {
            this.currentTheme = themeName;
            this.applyTheme();
        }
    }
    
    toggleTheme() {
        this.currentTheme = this.currentTheme === 'light' ? 'dark' : 'light';
        this.applyTheme();
    }
}

// Initialize theme provider
export const themeProvider = new ThemeProvider();</code></pre>
            
            <h2>Themed Components</h2>
            
            <h3>Using Theme Variables</h3>
            <pre><code>class ThemedCard extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }
    
    connectedCallback() {
        this.render();
        
        // Listen for theme changes
        window.addEventListener('themechange', () => this.render());
    }
    
    styles() {
        return css\`
            :host {
                display: block;
            }
            
            .card {
                /* Use theme variables */
                background: var(--bg-primary);
                color: var(--text-primary);
                border: 1px solid var(--border-color);
                border-radius: var(--border-radius);
                padding: 24px;
                box-shadow: var(--shadow-md);
                transition: all 0.3s ease;
            }
            
            .card:hover {
                box-shadow: var(--shadow-lg);
                transform: translateY(-2px);
            }
            
            .card-title {
                color: var(--color-primary);
                font-size: 24px;
                font-weight: 600;
                margin-bottom: 12px;
            }
            
            .card-content {
                color: var(--text-secondary);
                line-height: 1.6;
            }
            
            .card-footer {
                margin-top: 20px;
                padding-top: 20px;
                border-top: 1px solid var(--border-color);
            }
            
            .button {
                background: var(--color-primary);
                color: white;
                border: none;
                padding: 10px 20px;
                border-radius: calc(var(--border-radius) / 2);
                cursor: pointer;
                transition: background 0.2s;
            }
            
            .button:hover {
                background: var(--color-primary-dark);
            }
        \`;
    }
    
    render() {
        this.shadowRoot.innerHTML = \`
            <style>\${this.styles()}</style>
            <div class="card">
                <h2 class="card-title">
                    <slot name="title">Card Title</slot>
                </h2>
                <div class="card-content">
                    <slot>Card content goes here</slot>
                </div>
                <div class="card-footer">
                    <button class="button">Action</button>
                </div>
            </div>
        \`;
    }
}</code></pre>
            
            <h2>Custom Themes</h2>
            
            <h3>Creating Custom Themes</h3>
            <pre><code>// custom-theme.js
export const customTheme = {
    // Brand colors
    '--color-primary': '#ff6b6b',
    '--color-primary-dark': '#ff5252',
    '--color-secondary': '#4ecdc4',
    '--color-accent': '#ffe66d',
    
    // Unique color scheme
    '--bg-primary': '#fafafa',
    '--bg-secondary': '#fff5f5',
    '--bg-tertiary': '#ffe0e0',
    
    // Custom typography
    '--font-family': '"Inter", -apple-system, sans-serif',
    '--font-size-base': '16px',
    '--font-size-lg': '18px',
    '--font-size-xl': '24px',
    '--font-size-2xl': '32px',
    
    // Custom spacing
    '--spacing-xs': '4px',
    '--spacing-sm': '8px',
    '--spacing-md': '16px',
    '--spacing-lg': '24px',
    '--spacing-xl': '32px',
    
    // Custom effects
    '--transition': 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    '--border-radius': '12px',
    '--border-radius-lg': '20px'
};

// Register custom theme
themeProvider.themes.custom = customTheme;</code></pre>
            
            <h2>Theme Toggle Component</h2>
            
            <h3>Interactive Theme Switcher</h3>
            <pre><code>class ThemeToggle extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }
    
    connectedCallback() {
        this.render();
        this.updateToggle();
        
        window.addEventListener('themechange', () => {
            this.updateToggle();
        });
    }
    
    styles() {
        return css\`
            :host {
                display: inline-block;
            }
            
            .toggle {
                position: relative;
                width: 60px;
                height: 30px;
                background: var(--bg-tertiary);
                border-radius: 30px;
                border: 2px solid var(--border-color);
                cursor: pointer;
                transition: all 0.3s;
            }
            
            .toggle-slider {
                position: absolute;
                top: 2px;
                left: 2px;
                width: 22px;
                height: 22px;
                background: white;
                border-radius: 50%;
                transition: transform 0.3s;
                display: flex;
                align-items: center;
                justify-content: center;
                font-size: 12px;
            }
            
            .toggle.dark .toggle-slider {
                transform: translateX(30px);
            }
            
            .toggle.dark {
                background: var(--color-primary);
            }
        \`;
    }
    
    toggle() {
        themeProvider.toggleTheme();
    }
    
    updateToggle() {
        const toggle = this.shadowRoot.querySelector('.toggle');
        const slider = this.shadowRoot.querySelector('.toggle-slider');
        
        if (themeProvider.currentTheme === 'dark') {
            toggle.classList.add('dark');
            slider.textContent = '🌙';
        } else {
            toggle.classList.remove('dark');
            slider.textContent = '☀️';
        }
    }
    
    render() {
        this.shadowRoot.innerHTML = \`
            <style>\${this.styles()}</style>
            <div class="toggle" onclick="this.getRootNode().host.toggle()">
                <div class="toggle-slider"></div>
            </div>
        \`;
    }
}

customElements.define('theme-toggle', ThemeToggle);</code></pre>
            
            <div class="alert alert-info">
                <strong>Best Practice:</strong> Always provide both light and dark themes, and respect the user's system preference with <code>prefers-color-scheme</code>.
            </div>
        `;
    }
    
    // Add more content methods...
    
    getTypographyContent() {
        return `<h2>Typography System</h2><p>Coming soon...</p>`;
    }
    
    getColorsContent() {
        return `<h2>Color Palette</h2><p>Coming soon...</p>`;
    }
    
    getCustomComponentsContent() {
        return `<h2>Building Custom Components</h2><p>Coming soon...</p>`;
    }
    
    getPerformanceContent() {
        return `<h2>Performance Optimization</h2><p>Coming soon...</p>`;
    }
    
    getTypeScriptContent() {
        return `<h2>TypeScript Integration</h2><p>Coming soon...</p>`;
    }
    
    getTestingContent() {
        return `<h2>Testing Components</h2><p>Coming soon...</p>`;
    }
    
    getDefaultContent() {
        return `
            <h2>Documentation</h2>
            <p>Select a topic from the sidebar to view documentation.</p>
        `;
    }
}