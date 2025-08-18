import { html } from "../src/index.js";

export function DocumentationPage() {
  return html`
    <div class="documentation-page">
      <div class="container">
        <div class="docs-layout">
          <aside class="docs-sidebar">
            <nav class="docs-nav">
              <div class="nav-section">
                <h3>Getting Started</h3>
                <a href="#installation">Installation</a>
                <a href="#quick-start">Quick Start</a>
                <a href="#project-setup">Project Setup</a>
                <a href="#browser-support">Browser Support</a>
              </div>
              <div class="nav-section">
                <h3>Core Concepts</h3>
                <a href="#components">Components</a>
                <a href="#templating">HTML Templating</a>
                <a href="#styling">CSS-in-JS</a>
                <a href="#state">State Management</a>
                <a href="#lifecycle">Lifecycle</a>
              </div>
              <div class="nav-section">
                <h3>API Reference</h3>
                <a href="#html-api">html()</a>
                <a href="#css-api">css()</a>
                <a href="#component-api">Component Class</a>
                <a href="#render-api">render()</a>
                <a href="#init-api">init()</a>
              </div>
              <div class="nav-section">
                <h3>Advanced</h3>
                <a href="#custom-elements">Custom Elements</a>
                <a href="#performance">Performance</a>
                <a href="#testing">Testing</a>
                <a href="#typescript">TypeScript</a>
              </div>
            </nav>
          </aside>

          <main class="docs-content">
            <h1>Documentation</h1>

            <section id="installation">
              <h2>Installation</h2>
              <p>
                AKAO UI can be installed via NPM or used directly from a CDN.
              </p>

              <h3>NPM Installation</h3>
              <pre><code>npm install @akaoio/ui</code></pre>

              <h3>CDN Usage</h3>
              <pre><code>&lt;script type="module"&gt;
    import { html, css, Component } from 'https://unpkg.com/@akaoio/ui@latest/src/index.js';
&lt;/script&gt;</code></pre>
            </section>

            <section id="quick-start">
              <h2>Quick Start</h2>
              <p>Create your first component in just a few lines of code:</p>

              <pre><code>import { html, css, Component } from '@akaoio/ui';

class HelloWorld extends Component {
    render() {
        return html\`&lt;h1&gt;Hello, World!&lt;/h1&gt;\`;
    }
}

// Register as custom element
customElements.define('hello-world', HelloWorld);

// Use in HTML
// &lt;hello-world&gt;&lt;/hello-world&gt;</code></pre>
            </section>

            <section id="components">
              <h2>Components</h2>
              <p>Components are the building blocks of AKAO UI applications.</p>

              <h3>Creating a Component</h3>
              <pre><code>class MyComponent extends Component {
    constructor() {
        super();
        this.state = { count: 0 };
    }
    
    increment() {
        this.state.count++;
        this.update();
    }
    
    render() {
        return html\`
            &lt;div&gt;
                &lt;p&gt;Count: \${this.state.count}&lt;/p&gt;
                &lt;button onclick="\${() => this.increment()}"&gt;
                    Increment
                &lt;/button&gt;
            &lt;/div&gt;
        \`;
    }
}</code></pre>
            </section>

            <section id="templating">
              <h2>HTML Templating</h2>
              <p>
                The html template literal tag provides powerful templating
                capabilities.
              </p>

              <h3>Basic Usage</h3>
              <pre><code>const name = 'AKAO';
const template = html\`&lt;h1&gt;Hello, \${name}!&lt;/h1&gt;\`;</code></pre>

              <h3>Conditional Rendering</h3>
              <pre><code>html\`
    \${isLoggedIn ? 
        html\`&lt;p&gt;Welcome back!&lt;/p&gt;\` : 
        html\`&lt;p&gt;Please log in&lt;/p&gt;\`
    }
\`;</code></pre>

              <h3>List Rendering</h3>
              <pre><code>html\`
    &lt;ul&gt;
        \${items.map(item => html\`
            &lt;li&gt;\${item.name}&lt;/li&gt;
        \`)}
    &lt;/ul&gt;
\`;</code></pre>
            </section>

            <section id="styling">
              <h2>CSS-in-JS</h2>
              <p>Style your components with the css template literal tag.</p>

              <h3>Component Styles</h3>
              <pre><code>class StyledComponent extends Component {
    styles() {
        return css\`
            .container {
                padding: 20px;
                background: var(--surface);
                border-radius: 8px;
            }
            
            .title {
                color: var(--primary);
                font-size: 24px;
            }
        \`;
    }
    
    render() {
        return html\`
            &lt;div class="container"&gt;
                &lt;h2 class="title"&gt;Styled Component&lt;/h2&gt;
            &lt;/div&gt;
        \`;
    }
}</code></pre>

              <h3>Dynamic Styles</h3>
              <pre><code>styles() {
    return css\`
        .button {
            background: \${this.props.color || 'blue'};
            padding: \${this.props.size === 'large' ? '15px' : '10px'};
        }
    \`;
}</code></pre>
            </section>

            <section id="state">
              <h2>State Management</h2>
              <p>Manage component state with built-in reactive updates.</p>

              <h3>Local State</h3>
              <pre><code>class StatefulComponent extends Component {
    constructor() {
        super();
        this.state = {
            user: null,
            loading: false
        };
    }
    
    async loadUser() {
        this.state.loading = true;
        this.update();
        
        const user = await fetchUser();
        this.state.user = user;
        this.state.loading = false;
        this.update();
    }
}</code></pre>

              <h3>Props</h3>
              <pre><code>class PropsComponent extends Component {
    render() {
        return html\`
            &lt;div&gt;
                &lt;h3&gt;\${this.props.title}&lt;/h3&gt;
                &lt;p&gt;\${this.props.description}&lt;/p&gt;
            &lt;/div&gt;
        \`;
    }
}

// Usage
const component = new PropsComponent({
    title: 'Hello',
    description: 'World'
});</code></pre>
            </section>

            <section id="lifecycle">
              <h2>Lifecycle Methods</h2>
              <p>Components have several lifecycle methods you can override.</p>

              <pre><code>class LifecycleComponent extends Component {
    connectedCallback() {
        super.connectedCallback();
        console.log('Component mounted');
    }
    
    disconnectedCallback() {
        super.disconnectedCallback();
        console.log('Component unmounted');
    }
    
    attributeChangedCallback(name, oldValue, newValue) {
        super.attributeChangedCallback(name, oldValue, newValue);
        console.log(\`Attribute \${name} changed\`);
    }
}</code></pre>
            </section>

            <section id="custom-elements">
              <h2>Custom Elements</h2>
              <p>Register components as custom HTML elements.</p>

              <pre><code>// Define the component
class UserCard extends Component {
    static get observedAttributes() {
        return ['name', 'email'];
    }
    
    render() {
        return html\`
            &lt;div class="user-card"&gt;
                &lt;h3&gt;\${this.getAttribute('name')}&lt;/h3&gt;
                &lt;p&gt;\${this.getAttribute('email')}&lt;/p&gt;
            &lt;/div&gt;
        \`;
    }
}

// Register the element
customElements.define('user-card', UserCard);

// Use in HTML
// &lt;user-card name="John" email="john@example.com"&gt;&lt;/user-card&gt;</code></pre>
            </section>

            <section id="typescript">
              <h2>TypeScript Support</h2>
              <p>AKAO UI includes full TypeScript definitions.</p>

              <pre><code>import { Component, html, css } from '@akaoio/ui';

interface TodoItem {
    id: number;
    text: string;
    done: boolean;
}

class TodoList extends Component {
    private todos: TodoItem[] = [];
    
    addTodo(text: string): void {
        this.todos.push({
            id: Date.now(),
            text,
            done: false
        });
        this.update();
    }
    
    render() {
        return html\`...todo list template...\`;
    }
}</code></pre>
            </section>
          </main>
        </div>
      </div>
    </div>
  `;
}
