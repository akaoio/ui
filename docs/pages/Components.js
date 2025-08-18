import { html } from "../src/index.js";

export function ComponentsPage() {
  const components = [
    {
      name: "Buttons",
      category: "Basic",
      description: "Various button styles and states",
      examples: [
        {
          code: '<button class="button primary">Primary</button>',
          label: "Primary",
        },
        {
          code: '<button class="button secondary">Secondary</button>',
          label: "Secondary",
        },
        {
          code: '<button class="button success">Success</button>',
          label: "Success",
        },
        {
          code: '<button class="button danger">Danger</button>',
          label: "Danger",
        },
        {
          code: '<button class="button warning">Warning</button>',
          label: "Warning",
        },
        { code: '<button class="button ghost">Ghost</button>', label: "Ghost" },
        {
          code: '<button class="button primary large">Large</button>',
          label: "Large",
        },
        {
          code: '<button class="button primary small">Small</button>',
          label: "Small",
        },
        {
          code: '<button class="button primary" disabled>Disabled</button>',
          label: "Disabled",
        },
      ],
    },
    {
      name: "Form Controls",
      category: "Forms",
      description: "Input fields, selects, and form elements",
      examples: [
        {
          code: '<input type="text" class="input" placeholder="Text input">',
          label: "Text Input",
        },
        {
          code: '<input type="email" class="input" placeholder="Email">',
          label: "Email Input",
        },
        {
          code: '<input type="password" class="input" placeholder="Password">',
          label: "Password",
        },
        {
          code: '<textarea class="textarea" placeholder="Enter text..."></textarea>',
          label: "Textarea",
        },
        {
          code: '<select class="select"><option>Option 1</option><option>Option 2</option></select>',
          label: "Select",
        },
        {
          code: '<input type="checkbox" class="checkbox"> <label>Checkbox</label>',
          label: "Checkbox",
        },
        {
          code: '<input type="radio" name="radio" class="radio"> <label>Radio</label>',
          label: "Radio",
        },
      ],
    },
    {
      name: "Cards",
      category: "Layout",
      description: "Content containers with various styles",
      examples: [
        {
          code: `<div class="card">
    <div class="card-header">Card Title</div>
    <div class="card-body">Card content goes here</div>
    <div class="card-footer">Footer</div>
</div>`,
          label: "Basic Card",
        },
        {
          code: `<div class="card elevated">
    <div class="card-body">Elevated card with shadow</div>
</div>`,
          label: "Elevated Card",
        },
      ],
    },
    {
      name: "Alerts",
      category: "Feedback",
      description: "Alert messages and notifications",
      examples: [
        {
          code: '<div class="alert info">Information message</div>',
          label: "Info Alert",
        },
        {
          code: '<div class="alert success">Success message</div>',
          label: "Success Alert",
        },
        {
          code: '<div class="alert warning">Warning message</div>',
          label: "Warning Alert",
        },
        {
          code: '<div class="alert danger">Error message</div>',
          label: "Danger Alert",
        },
      ],
    },
    {
      name: "Badges",
      category: "Data Display",
      description: "Small count and labeling components",
      examples: [
        { code: '<span class="badge">Default</span>', label: "Default" },
        {
          code: '<span class="badge primary">Primary</span>',
          label: "Primary",
        },
        {
          code: '<span class="badge success">Success</span>',
          label: "Success",
        },
        { code: '<span class="badge danger">Danger</span>', label: "Danger" },
        {
          code: '<span class="badge warning">Warning</span>',
          label: "Warning",
        },
      ],
    },
    {
      name: "Modal",
      category: "Overlay",
      description: "Modal dialogs and popups",
      examples: [
        {
          code: `<button class="button primary" onclick="showModal()">Open Modal</button>`,
          label: "Modal Trigger",
        },
      ],
    },
    {
      name: "Tabs",
      category: "Navigation",
      description: "Tab navigation components",
      examples: [
        {
          code: `<div class="tabs">
    <div class="tab-list">
        <button class="tab active">Tab 1</button>
        <button class="tab">Tab 2</button>
        <button class="tab">Tab 3</button>
    </div>
    <div class="tab-content">
        Tab 1 content
    </div>
</div>`,
          label: "Basic Tabs",
        },
      ],
    },
    {
      name: "Progress",
      category: "Feedback",
      description: "Progress bars and loading indicators",
      examples: [
        {
          code: '<div class="progress"><div class="progress-bar" style="width: 60%"></div></div>',
          label: "Progress Bar",
        },
        { code: '<div class="spinner"></div>', label: "Spinner" },
      ],
    },
    {
      name: "Tables",
      category: "Data Display",
      description: "Data tables with various styles",
      examples: [
        {
          code: `<table class="table">
    <thead>
        <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>John Doe</td>
            <td>john@example.com</td>
            <td>Admin</td>
        </tr>
        <tr>
            <td>Jane Smith</td>
            <td>jane@example.com</td>
            <td>User</td>
        </tr>
    </tbody>
</table>`,
          label: "Basic Table",
        },
      ],
    },
  ];

  const categories = [...new Set(components.map((c) => c.category))];

  return html`
    <div class="components-page">
      <div class="container">
        <header class="page-header">
          <h1>Component Library</h1>
          <p>A comprehensive collection of UI components built with AKAO UI</p>
        </header>

        <div class="components-layout">
          <aside class="components-sidebar">
            <h3>Categories</h3>
            <nav class="category-nav">
              ${categories.map(
                (cat) => html`
                  <a href="#${cat.toLowerCase()}" class="category-link"
                    >${cat}</a
                  >
                `,
              )}
            </nav>
          </aside>

          <main class="components-content">
            ${categories.map(
              (category) => html`
                <section
                  id="${category.toLowerCase()}"
                  class="component-section"
                >
                  <h2>${category}</h2>
                  ${components
                    .filter((c) => c.category === category)
                    .map(
                      (component) => html`
                        <div class="component-group">
                          <h3>${component.name}</h3>
                          <p class="component-description">
                            ${component.description}
                          </p>
                          <div class="component-examples">
                            ${component.examples.map(
                              (example) => html`
                                <div class="example">
                                  <div class="example-label">
                                    ${example.label}
                                  </div>
                                  <div class="example-preview">
                                    ${html([example.code])}
                                  </div>
                                  <div class="example-code">
                                    <pre><code>${example.code}</code></pre>
                                  </div>
                                </div>
                              `,
                            )}
                          </div>
                        </div>
                      `,
                    )}
                </section>
              `,
            )}
          </main>
        </div>
      </div>
    </div>
  `;
}
