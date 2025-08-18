import { html } from "../src/index.js";

export function HomePage() {
  return html`
    <div class="home-page">
      <!-- Hero Section -->
      <section class="hero">
        <div class="container">
          <div class="hero-content">
            <h1 class="hero-title">
              Build Modern UIs with
              <span class="gradient-text">Pure JavaScript</span>
            </h1>
            <p class="hero-subtitle">
              A powerful, dependency-free UI framework that brings reactive
              components, elegant styling, and modern development patterns to
              vanilla JavaScript.
            </p>
            <div class="hero-actions">
              <a href="/documentation" class="button primary large">
                Get Started
              </a>
              <a href="/components" class="button secondary large">
                Browse Components
              </a>
            </div>
            <div class="hero-stats">
              <div class="stat">
                <span class="stat-value">0kb</span>
                <span class="stat-label">Dependencies</span>
              </div>
              <div class="stat">
                <span class="stat-value">~15kb</span>
                <span class="stat-label">Bundle Size</span>
              </div>
              <div class="stat">
                <span class="stat-value">100%</span>
                <span class="stat-label">Vanilla JS</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Quick Start Section -->
      <section class="quick-start">
        <div class="container">
          <h2>Quick Start</h2>
          <div class="code-blocks">
            <div class="code-block">
              <h3>NPM Install</h3>
              <pre><code>npm install @akaoio/ui</code></pre>
            </div>
            <div class="code-block">
              <h3>Import & Use</h3>
              <pre><code>import { html, css, Component } from '@akaoio/ui';

class MyButton extends Component {
    render() {
        return html\`
            &lt;button class="my-button"&gt;
                Click Me
            &lt;/button&gt;
        \`;
    }
}</code></pre>
            </div>
          </div>
        </div>
      </section>

      <!-- Features Section -->
      <section class="features">
        <div class="container">
          <h2>Why AKAO UI?</h2>
          <div class="features-grid">
            <div class="feature-card">
              <div class="feature-icon">⚡</div>
              <h3>Lightning Fast</h3>
              <p>
                No virtual DOM overhead. Direct DOM manipulation with
                intelligent updates.
              </p>
            </div>
            <div class="feature-card">
              <div class="feature-icon">📦</div>
              <h3>Zero Dependencies</h3>
              <p>
                No build tools required. Works directly in the browser with ES
                modules.
              </p>
            </div>
            <div class="feature-card">
              <div class="feature-icon">🎨</div>
              <h3>CSS-in-JS</h3>
              <p>
                Scoped styles with template literals. Full CSS power without
                preprocessors.
              </p>
            </div>
            <div class="feature-card">
              <div class="feature-icon">🔧</div>
              <h3>Web Components</h3>
              <p>
                Built on web standards. Create reusable components that work
                everywhere.
              </p>
            </div>
            <div class="feature-card">
              <div class="feature-icon">🎯</div>
              <h3>Type Safe</h3>
              <p>
                Full TypeScript support with complete type definitions included.
              </p>
            </div>
            <div class="feature-card">
              <div class="feature-icon">🌙</div>
              <h3>Dark Mode</h3>
              <p>Built-in theme system with automatic dark mode support.</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Component Showcase -->
      <section class="showcase">
        <div class="container">
          <h2>Advanced Components</h2>
          <p class="section-subtitle">
            Beautiful, interactive components with pure CSS animations
          </p>
          
          <!-- Advanced Components Demo -->
          <div class="advanced-showcase">
            <div class="showcase-row">
              <div class="showcase-item">
                <h3>Theme Switcher</h3>
                <div style="transform: scale(1.5); margin: 20px 0;">
                  <theme-switcher></theme-switcher>
                </div>
                <p>Elegant theme toggle with rotation animation</p>
              </div>
              
              <div class="showcase-item">
                <h3>Progress Indicators</h3>
                <ui-progress value="75" type="bar" color="#667eea"></ui-progress>
                <div style="margin-top: 20px;">
                  <ui-progress value="60" type="circle" color="#764ba2"></ui-progress>
                </div>
                <p>Multiple styles: bar, circle, dots</p>
              </div>
              
              <div class="showcase-item">
                <h3>Interactive Tooltips</h3>
                <div style="display: flex; gap: 20px; justify-content: center;">
                  <ui-tooltip text="Top tooltip" position="top">
                    <button class="button small">Hover me</button>
                  </ui-tooltip>
                  <ui-tooltip text="Right tooltip" position="right">
                    <button class="button small">And me</button>
                  </ui-tooltip>
                </div>
                <p>Flexible positioning and animations</p>
              </div>
            </div>

            <div class="showcase-row">
              <div class="showcase-item full-width">
                <h3>Circle Navigation Menu</h3>
                <div style="height: 300px; display: flex; align-items: center; justify-content: center;">
                  <circle-nav id="demoNav"></circle-nav>
                </div>
                <p>Click the center button to expand the circular menu</p>
              </div>
            </div>
          </div>

          <!-- Basic Components -->
          <h3 style="margin-top: 40px;">Basic Components</h3>
          <div class="component-preview">
            <div class="preview-grid">
              <div class="preview-item">
                <button class="button primary">Primary Button</button>
              </div>
              <div class="preview-item">
                <button class="button secondary">Secondary</button>
              </div>
              <div class="preview-item">
                <button class="button success">Success</button>
              </div>
              <div class="preview-item">
                <button class="button danger">Danger</button>
              </div>
              <div class="preview-item">
                <input type="text" class="input" placeholder="Text input" />
              </div>
              <div class="preview-item">
                <select class="select">
                  <option>Select option</option>
                </select>
              </div>
            </div>
          </div>
          
          <div class="showcase-actions">
            <a href="/components" class="button primary">
              Explore All Components →
            </a>
          </div>
        </div>
      </section>
      
      <script type="module">
        // Import and setup advanced components
        import '../src/components/theme-switcher/index.js';
        import '../src/components/progress/index.js';
        import '../src/components/tooltip/index.js';
        import '../src/components/circle-nav/index.js';
        
        // Setup demo circle nav
        setTimeout(() => {
          const demoNav = document.getElementById('demoNav');
          if (demoNav) {
            const navItems = [
              { icon: '🏠', label: 'Home' },
              { icon: '📊', label: 'Dashboard' },
              { icon: '👤', label: 'Profile' },
              { icon: '⚙️', label: 'Settings' },
              { icon: '📧', label: 'Messages' },
              { icon: '🔔', label: 'Notifications' }
            ];
            demoNav.setAttribute('items', JSON.stringify(navItems));
          }
        }, 100);
      </script>

      <!-- Code Example Section -->
      <section class="code-example">
        <div class="container">
          <h2>Simple Yet Powerful</h2>
          <div class="example-grid">
            <div class="example-code">
              <h3>Create a Component</h3>
              <pre><code>import { html, css, Component } from '@akaoio/ui';

class TodoList extends Component {
    constructor() {
        super();
        this.todos = [];
    }
    
    styles() {
        return css\`
            .todo-list {
                padding: 20px;
                background: var(--surface);
            }
            .todo-item {
                padding: 10px;
                border-bottom: 1px solid var(--border);
            }
        \`;
    }
    
    addTodo(text) {
        this.todos.push({ text, done: false });
        this.update();
    }
    
    render() {
        return html\`
            &lt;div class="todo-list"&gt;
                \${this.todos.map(todo =&gt; html\`
                    &lt;div class="todo-item"&gt;
                        \${todo.text}
                    &lt;/div&gt;
                \`)}
            &lt;/div&gt;
        \`;
    }
}</code></pre>
            </div>
            <div class="example-result">
              <h3>Result</h3>
              <div class="todo-demo">
                <div class="todo-item">Learn AKAO UI</div>
                <div class="todo-item">Build awesome apps</div>
                <div class="todo-item">Ship to production</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- CTA Section -->
      <section class="cta">
        <div class="container">
          <div class="cta-content">
            <h2>Ready to Build?</h2>
            <p>Start creating modern web applications with AKAO UI today.</p>
            <div class="cta-actions">
              <a href="/documentation" class="button primary large">
                Read Documentation
              </a>
              <a href="/playground" class="button secondary large">
                Try Playground
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  `;
}
