import { html } from "../src/index.js";

export function TemplatesPage() {
  const templates = [
    {
      name: "Dashboard",
      description: "Admin dashboard with sidebar navigation and data widgets",
      preview: "📊",
      features: [
        "Responsive Layout",
        "Charts & Graphs",
        "Data Tables",
        "Dark Mode",
      ],
      code: "https://github.com/akaoio/ui-templates/dashboard",
    },
    {
      name: "E-commerce",
      description:
        "Complete online store with product catalog and shopping cart",
      preview: "🛍️",
      features: [
        "Product Grid",
        "Shopping Cart",
        "Checkout Flow",
        "User Account",
      ],
      code: "https://github.com/akaoio/ui-templates/ecommerce",
    },
    {
      name: "Landing Page",
      description:
        "Modern landing page with hero section and feature highlights",
      preview: "🚀",
      features: [
        "Hero Section",
        "Feature Cards",
        "Testimonials",
        "CTA Sections",
      ],
      code: "https://github.com/akaoio/ui-templates/landing",
    },
    {
      name: "Blog",
      description: "Blog template with article listings and content management",
      preview: "📝",
      features: ["Article List", "Categories", "Search", "Comments"],
      code: "https://github.com/akaoio/ui-templates/blog",
    },
    {
      name: "Portfolio",
      description: "Personal portfolio to showcase projects and skills",
      preview: "🎨",
      features: ["Project Gallery", "About Section", "Skills", "Contact Form"],
      code: "https://github.com/akaoio/ui-templates/portfolio",
    },
    {
      name: "SaaS Application",
      description: "Software as a Service application template",
      preview: "💼",
      features: ["User Dashboard", "Billing", "Settings", "API Integration"],
      code: "https://github.com/akaoio/ui-templates/saas",
    },
    {
      name: "Social Network",
      description: "Social media platform with posts and interactions",
      preview: "👥",
      features: ["User Profiles", "Posts & Feed", "Messages", "Notifications"],
      code: "https://github.com/akaoio/ui-templates/social",
    },
    {
      name: "Documentation",
      description: "Technical documentation site with search and navigation",
      preview: "📚",
      features: ["Sidebar Nav", "Search", "Code Examples", "Version Selector"],
      code: "https://github.com/akaoio/ui-templates/docs",
    },
  ];

  return html`
    <div class="templates-page">
      <div class="container">
        <header class="page-header">
          <h1>Templates</h1>
          <p>
            Production-ready templates built with AKAO UI. Start your project
            with a solid foundation.
          </p>
        </header>

        <div class="templates-grid">
          ${templates.map(
            (template) => html`
              <div class="template-card">
                <div class="template-preview">
                  <span class="preview-icon">${template.preview}</span>
                </div>
                <div class="template-content">
                  <h3>${template.name}</h3>
                  <p>${template.description}</p>
                  <div class="template-features">
                    ${template.features.map(
                      (feature) => html`
                        <span class="feature-tag">${feature}</span>
                      `,
                    )}
                  </div>
                  <div class="template-actions">
                    <button
                      class="button primary small"
                      onclick="previewTemplate('${template.name}')"
                    >
                      Preview
                    </button>
                    <a
                      href="${template.code}"
                      class="button secondary small"
                      target="_blank"
                    >
                      View Code
                    </a>
                  </div>
                </div>
              </div>
            `,
          )}
        </div>

        <section class="create-template">
          <h2>Create Your Own Template</h2>
          <p>
            Build custom templates with AKAO UI's flexible component system.
          </p>

          <div class="steps">
            <div class="step">
              <div class="step-number">1</div>
              <h3>Install AKAO UI</h3>
              <pre><code>npm install @akaoio/ui</code></pre>
            </div>
            <div class="step">
              <div class="step-number">2</div>
              <h3>Import Components</h3>
              <pre><code>import { html, css, Component } from '@akaoio/ui';</code></pre>
            </div>
            <div class="step">
              <div class="step-number">3</div>
              <h3>Build Your Template</h3>
              <pre><code>class MyTemplate extends Component {
    render() {
        return html\`
            &lt;div class="template"&gt;
                &lt;!-- Your template code --&gt;
            &lt;/div&gt;
        \`;
    }
}</code></pre>
            </div>
          </div>
        </section>

        <section class="contribute">
          <div class="contribute-content">
            <h2>Contribute a Template</h2>
            <p>Share your templates with the AKAO UI community!</p>
            <a
              href="https://github.com/akaoio/ui-templates"
              class="button primary"
              target="_blank"
            >
              Submit Template
            </a>
          </div>
        </section>
      </div>
    </div>

    <script>
      window.previewTemplate = function (name) {
        // Open template preview in modal or new window
        alert("Preview for " + name + " template coming soon!");
      };
    </script>
  `;
}
