# AKAO UI Framework

A powerful, lightweight vanilla JavaScript UI framework built on Web Components and modern web standards. No dependencies, no build step required, just pure performance.

## ✨ Features

- 🚀 **Zero Dependencies** - Pure vanilla JavaScript, no external frameworks
- 🎯 **Web Standards** - Built on Web Components, Shadow DOM, and ES6 modules  
- 🎨 **CSS-in-JS** - Scoped styles with template literals
- ⚡ **Lightning Fast** - Minimal overhead, maximum performance
- 🔒 **Type Safe** - Full TypeScript support
- 📦 **Tree Shakeable** - Import only what you need
- 🌙 **Theme Support** - Built-in dark/light themes
- 🎭 **Animation Ready** - Smooth animations utilities included

## 🚀 Quick Start

### Installation

#### From NPM Registry
```bash
npm install @akaoio/ui
```

#### From GitHub (Latest)
```bash
npm install github:akaoio/ui
# or
npm install https://github.com/akaoio/ui.git
```

#### Via CDN
```html
<script type="module">
  import { html, css, Component } from 'https://unpkg.com/@akaoio/ui/src/index.js'
</script>
```

### Basic Usage

```javascript
import { html, css, Component } from '@akaoio/ui'

// Create a custom component
class MyButton extends Component {
    constructor() {
        super()
        
        const template = html`
            ${this.styles}
            <button>
                <slot>Click me!</slot>
            </button>
        `
        
        this.shadowRoot.appendChild(template)
    }
    
    get styles() {
        return css`
            :host {
                display: inline-block;
            }
            button {
                padding: 10px 20px;
                background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                color: white;
                border: none;
                border-radius: 4px;
                cursor: pointer;
                font-size: 16px;
            }
            button:hover {
                transform: translateY(-2px);
                box-shadow: 0 5px 15px rgba(0,0,0,0.2);
            }
        `
    }
}

// Register the component
customElements.define('my-button', MyButton)
```

Use in HTML:
```html
<my-button>Custom Button</my-button>
```

## 📚 Core Concepts

### Component Architecture

Every component follows a simple pattern:

1. **Extend Component class** - Provides lifecycle and utilities
2. **Use Shadow DOM** - For style encapsulation
3. **Template with html`` ** - Tagged template literals for HTML
4. **Style with css`` ** - Tagged template literals for CSS
5. **Register as Custom Element** - Make it usable in HTML

### Three-File Component Structure (Optional)

For larger components, use this structure:

```
my-component/
├── index.js       # Component class
├── template.js    # HTML template
└── styles.css.js  # Component styles
```

**index.js**
```javascript
import template from './template.js'

export class MY_COMPONENT extends Component {
    constructor() {
        super()
        this.shadowRoot.appendChild(template.cloneNode(true))
    }
}

customElements.define('my-component', MY_COMPONENT)
```

**template.js**
```javascript
import styles from './styles.css.js'
import { html } from '@akaoio/ui'

export default html`
    ${styles}
    <div class="container">
        <slot></slot>
    </div>
`
```

**styles.css.js**
```javascript
import { css } from '@akaoio/ui'

export default css`
    :host {
        display: block;
    }
    .container {
        padding: 20px;
    }
`
```

## 🎨 Styling

### CSS-in-JS with Shadow DOM

Styles are scoped to components using Shadow DOM:

```javascript
const styles = css`
    :host {
        /* Styles for the component itself */
        display: block;
    }
    
    :host([disabled]) {
        /* Styles when disabled attribute is present */
        opacity: 0.5;
    }
    
    :host-context(.dark-theme) {
        /* Styles when inside .dark-theme */
        background: #333;
    }
`
```

### Global Styles

Apply global styles to your application:

```javascript
import { globalCSS, darkTheme, lightTheme } from '@akaoio/ui'

// Apply global styles
document.head.appendChild(globalCSS)

// Apply theme
document.head.appendChild(darkTheme) // or lightTheme
```

### Animation Utilities

```javascript
import { animations } from '@akaoio/ui'

const styles = css`
    ${animations.fadeIn}
    
    :host {
        animation: fadeIn 0.3s ease-in;
    }
`
```

## 🔧 Advanced Features

### Reactive Properties

```javascript
class Counter extends Component {
    static get observedAttributes() {
        return ['count']
    }
    
    constructor() {
        super()
        this.count = 0
    }
    
    attributeChangedCallback(name, oldValue, newValue) {
        if (name === 'count') {
            this.render()
        }
    }
    
    increment = () => {
        this.setAttribute('count', ++this.count)
    }
}
```

### Event Handling

```javascript
class Interactive extends Component {
    connectedCallback() {
        this.addListener(
            this.$('button'),
            'click',
            this.handleClick
        )
    }
    
    handleClick = (e) => {
        console.log('Clicked!')
    }
}
```

### Lifecycle Methods

```javascript
class Lifecycle extends Component {
    connectedCallback() {
        // Called when added to DOM
        console.log('Connected!')
    }
    
    disconnectedCallback() {
        // Called when removed from DOM
        console.log('Disconnected!')
    }
    
    adoptedCallback() {
        // Called when moved to new document
        console.log('Adopted!')
    }
}
```

## 🏗️ Project Structure

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
│       └── icon/
└── examples/             # Usage examples
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

MIT License - feel free to use this in your projects!

## 🙏 Acknowledgments

Built with ❤️ by the AKAO team.

Special thanks to the web standards community for making this possible with Web Components.

---

**Why choose AKAO UI?**

- **Future Proof**: Built on web standards that will last
- **No Lock-in**: Your components work anywhere
- **Performance**: No virtual DOM, no diffing, just native speed
- **Simple**: No complex build tools or configurations
- **Powerful**: Everything you need for modern UIs

Start building better UIs today with AKAO! 🚀