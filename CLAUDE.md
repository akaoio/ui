# UI - Vanilla JavaScript Framework Codebase Documentation for AI Assistants

> **Last Updated**: August 2025  
> **Version**: 1.1.0  
> **Language**: JavaScript (ES6+ modules)  
> **Status**: Production Ready

## Project Overview

@akaoio/ui is a powerful vanilla JavaScript UI framework with Web Components, focusing on zero dependencies and modern web standards. It provides a complete component system, CSS-in-JS capabilities, and shadow DOM support without requiring any build tools or frameworks.

## Critical Information for AI Assistants

### Pure Vanilla JavaScript & ES Modules

**IMPORTANT**: This project uses pure vanilla JavaScript with ES modules. Key characteristics:

1. **No build step required** - Components work directly in browsers
2. **ES module imports** - All imports use `.js` extensions:
   ```javascript
   import { UI } from './src/core/UI.js';
   import { Button } from './src/components/button/index.js';
   ```

3. **Web Components** - Custom elements with shadow DOM:
   ```javascript
   class MyComponent extends Component {
     render() {
       return html`<div>Content</div>`;
     }
   }
   ```

### Framework Architecture

The framework is built around these core concepts:

1. **Component System**: Web Components with lifecycle management
2. **CSS-in-JS**: Style definitions as JavaScript modules
3. **Shadow DOM**: Encapsulated component styling and behavior
4. **No Dependencies**: Pure vanilla JavaScript implementation

### Directory Structure

```
src/
├── components/          # UI Components
│   ├── button/         # Button component with styles and templates
│   ├── card/           # Card component
│   ├── modal/          # Modal dialog
│   └── ...            # Other components
├── core/               # Framework core
│   ├── Component.js    # Base component class
│   ├── UI.js          # Main UI framework
│   └── Utils/         # Utility functions
└── css/               # CSS-in-JS modules
    ├── elements/      # Element-specific styles
    ├── animations/    # Animation definitions
    ├── dark.css.js    # Dark theme
    ├── light.css.js   # Light theme
    └── vars.css.js    # CSS variables
```

## Component Development Patterns

### Creating Components

All components follow this structure:
```
component-name/
├── index.js           # Component class definition
├── styles.css.js      # Component styles
└── template.js        # HTML template
```

### Component Base Class

```javascript
import { Component } from '../../core/Component.js';

class MyComponent extends Component {
  constructor() {
    super();
  }

  render() {
    // Return HTML template
    return this.template();
  }

  template() {
    return `<div class="my-component">Content</div>`;
  }
}
```

### CSS-in-JS Pattern

Styles are defined as JavaScript modules:
```javascript
export default `
  .my-component {
    display: flex;
    padding: var(--spacing-md);
    color: var(--color-text);
  }
`;
```

## Development Workflow

### Adding New Components

1. **Create component directory** in `src/components/`
2. **Implement component class** extending base Component
3. **Define styles** in `styles.css.js`
4. **Create template** in `template.js`
5. **Export component** from `index.js`

### Working with Themes

The framework supports light/dark themes:
- Theme switching via component state
- CSS variables for consistent theming
- Automatic theme persistence

### Testing Components

Components can be tested directly in HTML:
```html
<script type="module">
  import { UI } from './src/index.js';
  // Components auto-register
</script>
```

## Integration Patterns

### Framework Integration

The UI framework integrates with:
- **@akaoio/composer**: Documentation generation
- **@akaoio/builder**: Build processes (optional)
- **@akaoio/battle**: Component testing

### Runtime Environments

Supports all modern browsers with:
- ES6+ module support
- Web Components API
- Shadow DOM v1
- CSS Custom Properties

## Best Practices for AI Assistants

### When Working with Components

1. **Follow the directory structure** - Each component in its own folder
2. **Use CSS-in-JS** - Define styles as JavaScript modules
3. **Extend Component base class** - Don't create components from scratch
4. **Use shadow DOM** - Encapsulation is key to the framework

### When Modifying Styles

1. **Use CSS variables** - Defined in `src/css/vars.css.js`
2. **Support themes** - Light and dark mode compatibility
3. **Follow naming conventions** - BEM-style class names
4. **Responsive design** - Mobile-first approach

### When Adding Features

1. **Keep it vanilla** - No external dependencies
2. **Web standards first** - Use modern browser APIs
3. **Component composition** - Build complex UIs from simple components
4. **Performance conscious** - Lazy loading and minimal DOM manipulation

## Security Considerations

1. **No external dependencies** - Reduces attack surface
2. **Shadow DOM isolation** - Component encapsulation
3. **CSP friendly** - No inline scripts or styles
4. **XSS protection** - Proper template escaping

## Performance Guidelines

1. **Lazy component loading** - Components load on demand
2. **Minimal DOM queries** - Cache element references
3. **Event delegation** - Efficient event handling
4. **CSS containment** - Use CSS contain property

---

**Important for AI Assistants**: This is a zero-dependency vanilla JavaScript framework. Focus on web standards, component architecture, and modern JavaScript patterns rather than build tools or external libraries.

The power is in simplicity and native web platform capabilities.