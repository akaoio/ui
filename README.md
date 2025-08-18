# 🎨 AKAO UI Framework

[![npm version](https://img.shields.io/npm/v/@akaoio/ui.svg)](https://www.npmjs.com/package/@akaoio/ui)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![GitHub Pages](https://img.shields.io/badge/demo-live-green.svg)](https://akaoio.github.io/ui/)

A powerful, modern UI framework built with pure vanilla JavaScript and Web Components. Zero dependencies, just web standards.

## ✨ [Live Demo & Documentation](https://akaoio.github.io/ui/)

Visit our interactive showcase to explore components, read documentation, and test code in the playground.

## 🚀 Features

- **🔧 Zero Dependencies** - Pure vanilla JavaScript, no frameworks required
- **📦 Web Components** - Native browser APIs with Shadow DOM encapsulation
- **🎨 CSS-in-JS** - Scoped styles with template literals
- **🌙 Theme System** - Built-in dark/light mode with CSS variables
- **📱 Responsive** - Mobile-first design that works everywhere
- **⚡ Lightning Fast** - Minimal overhead, maximum performance
- **🔒 Type Safe** - Full TypeScript support
- **🌳 Tree Shakeable** - Import only what you need
- **♿ Accessible** - ARIA compliant with keyboard navigation

## 📦 Installation

### NPM (Recommended)
```bash
npm install @akaoio/ui
# or
yarn add @akaoio/ui
# or
pnpm add @akaoio/ui
```

### CDN
```html
<script type="module">
  import { html, css, Component } from 'https://unpkg.com/@akaoio/ui@latest/src/index.js';
</script>
```

## 🎯 Quick Start

```javascript
import { html, css } from '@akaoio/ui';

class MyButton extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }
    
    connectedCallback() {
        this.shadowRoot.innerHTML = `
            <style>
                button {
                    padding: 12px 24px;
                    background: linear-gradient(135deg, #667eea, #764ba2);
                    color: white;
                    border: none;
                    border-radius: 8px;
                    font-size: 16px;
                    cursor: pointer;
                    transition: transform 0.2s;
                }
                
                button:hover {
                    transform: translateY(-2px);
                }
            </style>
            <button>
                <slot>Click me</slot>
            </button>
        `;
    }
}

customElements.define('my-button', MyButton);
```

Use it in your HTML:
```html
<my-button>Custom Text</my-button>
```

## 🧩 Built-in Components

### Core Components
- **Button** - Versatile button with variants and states
- **Modal** - Flexible modal dialogs
- **Card** - Container component with header/footer slots
- **Tabs** - Tabbed interface with multiple styles
- **Icon** - SVG icon system

### Form Components
- **Input** - Enhanced text input
- **Select** - Custom select dropdown
- **Checkbox** - Styled checkbox
- **Radio** - Radio button groups
- **Form** - Form wrapper with validation

### Layout Components
- **Container** - Responsive container
- **Grid** - CSS Grid system
- **Flex** - Flexbox utilities

## 🎨 Theming

AKAO UI uses CSS custom properties for theming:

```javascript
// Light theme (default)
document.documentElement.style.setProperty('--color-primary', '#667eea');
document.documentElement.style.setProperty('--bg-primary', '#ffffff');

// Dark theme
document.documentElement.setAttribute('data-theme', 'dark');
```

### CSS Variables
```css
:root {
    /* Colors */
    --color-primary: #667eea;
    --color-secondary: #764ba2;
    --bg-primary: #ffffff;
    --bg-secondary: #f7fafc;
    
    /* Spacing */
    --spacing-xs: 4px;
    --spacing-sm: 8px;
    --spacing-md: 16px;
    --spacing-lg: 24px;
    
    /* Typography */
    --font-family: system-ui, sans-serif;
    --font-size-base: 16px;
    
    /* Borders */
    --border-radius: 8px;
    --border-color: #e2e8f0;
    
    /* Shadows */
    --shadow-sm: 0 1px 3px rgba(0,0,0,0.12);
    --shadow-md: 0 4px 6px rgba(0,0,0,0.1);
}
```

## 🛠️ Development

### Setup
```bash
# Clone the repository
git clone https://github.com/akaoio/ui.git
cd ui

# Install dependencies
npm install

# Start development server (showcase)
npm run dev

# Or run examples
npm run dev:examples
```

### Scripts
- `npm run dev` - Start showcase development server
- `npm run dev:examples` - Start examples server
- `npm run format` - Format code with Prettier
- `npm run publish:npm` - Publish to NPM

### Project Structure
```
@akaoio/ui/
├── src/
│   ├── core/
│   │   ├── UI.js         # Core UI functions (html, css)
│   │   ├── Component.js  # Base component class
│   │   └── UI/           # UI utilities
│   ├── css/
│   │   ├── animations/   # Animation utilities
│   │   ├── elements/     # Element styles
│   │   ├── global.css.js # Global styles
│   │   ├── dark.css.js   # Dark theme
│   │   └── light.css.js  # Light theme
│   └── components/       # Built-in components
│       ├── button/
│       ├── modal/
│       ├── card/
│       ├── tabs/
│       └── icon/
├── docs/                 # Interactive documentation site
│   ├── pages/           # Documentation pages
│   ├── components/      # Showcase components
│   └── router.js        # Client-side routing
└── examples/            # Basic usage examples
```

## 📚 Documentation

### Core Concepts
- [Web Components](https://akaoio.github.io/ui/#/documentation/web-components)
- [Shadow DOM](https://akaoio.github.io/ui/#/documentation/shadow-dom)
- [CSS-in-JS](https://akaoio.github.io/ui/#/documentation/css-in-js)
- [State Management](https://akaoio.github.io/ui/#/documentation/state-management)

### Guides
- [Installation](https://akaoio.github.io/ui/#/documentation/installation)
- [Quick Start](https://akaoio.github.io/ui/#/documentation/quickstart)
- [Custom Components](https://akaoio.github.io/ui/#/documentation/custom-components)
- [Theming](https://akaoio.github.io/ui/#/documentation/theming)
- [Animations](https://akaoio.github.io/ui/#/documentation/animations)
- [TypeScript](https://akaoio.github.io/ui/#/documentation/typescript)

## 🎮 Interactive Playground

Try AKAO UI components directly in your browser with our [live playground](https://akaoio.github.io/ui/#/playground). Write code, see instant results, and experiment with different component configurations.

## 💡 Example: Complete Component

```javascript
import { html, css } from '@akaoio/ui';

class TodoList extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.todos = [];
    }
    
    connectedCallback() {
        this.render();
    }
    
    addTodo(text) {
        this.todos.push({ id: Date.now(), text, done: false });
        this.render();
    }
    
    toggleTodo(id) {
        const todo = this.todos.find(t => t.id === id);
        if (todo) {
            todo.done = !todo.done;
            this.render();
        }
    }
    
    render() {
        this.shadowRoot.innerHTML = `
            <style>
                :host {
                    display: block;
                    font-family: system-ui, sans-serif;
                }
                
                .container {
                    max-width: 500px;
                    padding: 20px;
                    background: white;
                    border-radius: 12px;
                    box-shadow: 0 4px 6px rgba(0,0,0,0.1);
                }
                
                .input-group {
                    display: flex;
                    gap: 8px;
                    margin-bottom: 20px;
                }
                
                input {
                    flex: 1;
                    padding: 10px;
                    border: 1px solid #e2e8f0;
                    border-radius: 6px;
                    font-size: 16px;
                }
                
                button {
                    padding: 10px 20px;
                    background: #667eea;
                    color: white;
                    border: none;
                    border-radius: 6px;
                    cursor: pointer;
                }
                
                .todo-item {
                    display: flex;
                    align-items: center;
                    padding: 12px;
                    background: #f7fafc;
                    border-radius: 6px;
                    margin-bottom: 8px;
                }
                
                .todo-item.done {
                    opacity: 0.6;
                    text-decoration: line-through;
                }
            </style>
            
            <div class="container">
                <h2>Todo List</h2>
                <div class="input-group">
                    <input type="text" placeholder="Add a todo..." id="todoInput">
                    <button onclick="this.getRootNode().host.handleAdd()">Add</button>
                </div>
                <div class="todos">
                    ${this.todos.map(todo => `
                        <div class="todo-item ${todo.done ? 'done' : ''}">
                            <input type="checkbox" 
                                ${todo.done ? 'checked' : ''}
                                onchange="this.getRootNode().host.toggleTodo(${todo.id})">
                            <span>${todo.text}</span>
                        </div>
                    `).join('')}
                </div>
            </div>
        `;
    }
    
    handleAdd() {
        const input = this.shadowRoot.getElementById('todoInput');
        if (input.value.trim()) {
            this.addTodo(input.value);
            input.value = '';
        }
    }
}

customElements.define('todo-list', TodoList);
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Built with love for the web platform
- Inspired by modern component libraries
- Thanks to all contributors and the web standards community

## 🔗 Links

- [NPM Package](https://www.npmjs.com/package/@akaoio/ui)
- [GitHub Repository](https://github.com/akaoio/ui)
- [Live Demo](https://akaoio.github.io/ui/)
- [Documentation](https://akaoio.github.io/ui/#/documentation)
- [Components](https://akaoio.github.io/ui/#/components)
- [Playground](https://akaoio.github.io/ui/#/playground)

## 🌟 Why AKAO UI?

- **Future Proof**: Built on web standards that will last
- **No Lock-in**: Your components work anywhere
- **Performance**: No virtual DOM, no diffing, just native speed
- **Simple**: No complex build tools or configurations
- **Powerful**: Everything you need for modern UIs

---

<p align="center">Made with ❤️ by AKAO</p>
<p align="center">
  <a href="https://akaoio.github.io/ui/">Demo</a> •
  <a href="https://akaoio.github.io/ui/#/documentation">Docs</a> •
  <a href="https://akaoio.github.io/ui/#/playground">Playground</a>
</p>