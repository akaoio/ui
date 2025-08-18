import { html, css, init, render } from "./src/index.js";
import "./src/components/theme-switcher/index.js";
import "./src/components/circle-nav/index.js";

// Simple Router
class Router {
  constructor() {
    this.routes = new Map();
    this.currentRoute = null;
    this.contentElement = null;
  }

  addRoute(path, handler) {
    this.routes.set(path, handler);
  }

  navigate(path) {
    window.history.pushState({}, "", path);
    this.handleRoute();
  }

  handleRoute() {
    const path = window.location.pathname;
    const handler = this.routes.get(path) || this.routes.get("/");

    if (handler && this.contentElement) {
      this.currentRoute = path;
      const content = handler();
      render(content, this.contentElement);
      this.updateActiveNav();
    }
  }

  updateActiveNav() {
    document.querySelectorAll("nav a").forEach((link) => {
      if (link.getAttribute("href") === this.currentRoute) {
        link.classList.add("active");
      } else {
        link.classList.remove("active");
      }
    });
  }

  start(contentElement) {
    this.contentElement = contentElement;

    window.addEventListener("popstate", () => this.handleRoute());

    document.addEventListener("click", (e) => {
      if (
        e.target.tagName === "A" &&
        e.target.getAttribute("href")?.startsWith("/")
      ) {
        e.preventDefault();
        this.navigate(e.target.getAttribute("href"));
      }
    });

    this.handleRoute();
  }
}

// Pages
import { HomePage } from "./pages/Home.js";
import { ComponentsPage } from "./pages/Components.js";
import { DocumentationPage } from "./pages/Documentation.js";
import { PlaygroundPage } from "./pages/Playground.js";
import { TemplatesPage } from "./pages/Templates.js";
import { ExamplesPage } from "./pages/Examples.js";

// Main App
class App {
  constructor() {
    this.router = new Router();
    this.theme = localStorage.getItem("theme") || "light";
  }

  async init() {
    // await init(); // CSS is now loaded via <link> tag

    // Apply theme
    document.documentElement.setAttribute("data-theme", this.theme);

    // Setup routes
    this.router.addRoute("/", () => HomePage());
    this.router.addRoute("/components", () => ComponentsPage());
    this.router.addRoute("/documentation", () => DocumentationPage());
    this.router.addRoute("/playground", () => PlaygroundPage());
    this.router.addRoute("/templates", () => TemplatesPage());
    this.router.addRoute("/examples", () => ExamplesPage());

    // Render layout
    const app = document.getElementById("app");
    render(this.createLayout(), app);

    // Start router
    const content = document.getElementById("content");
    this.router.start(content);
    
    // Setup theme switcher
    setTimeout(() => {
      const themeSwitcher = document.getElementById("themeSwitcher");
      if (themeSwitcher) {
        themeSwitcher.addEventListener("theme-change", (e) => {
          this.theme = e.detail.theme;
          document.documentElement.setAttribute("data-theme", this.theme);
          localStorage.setItem("theme", this.theme);
        });
      }
    }, 100);
  }

  toggleTheme() {
    this.theme = this.theme === "light" ? "dark" : "light";
    document.documentElement.setAttribute("data-theme", this.theme);
    localStorage.setItem("theme", this.theme);
  }

  createLayout() {
    return html`
      <div class="app-container">
        <header class="app-header">
          <div class="container">
            <div class="header-content">
              <a href="/" class="logo">
                <span class="logo-icon">🎨</span>
                <span class="logo-text">AKAO UI</span>
              </a>

              <nav class="main-nav">
                <a href="/">Home</a>
                <a href="/components">Components</a>
                <a href="/documentation">Docs</a>
                <a href="/playground">Playground</a>
                <a href="/templates">Templates</a>
                <a href="/examples">Examples</a>
              </nav>

              <div class="header-actions">
                <theme-switcher 
                  id="themeSwitcher"
                  theme="${this.theme}"
                ></theme-switcher>
                <a
                  href="https://github.com/akaoio/ui"
                  class="github-link"
                  target="_blank"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </header>

        <main id="content" class="app-content"></main>

        <footer class="app-footer">
          <div class="container">
            <div class="footer-content">
              <div class="footer-section">
                <h4>Resources</h4>
                <a href="/documentation">Documentation</a>
                <a href="/components">Components</a>
                <a href="/examples">Examples</a>
              </div>
              <div class="footer-section">
                <h4>Community</h4>
                <a href="https://github.com/akaoio/ui" target="_blank"
                  >GitHub</a
                >
                <a href="https://npmjs.com/package/@akaoio/ui" target="_blank"
                  >NPM</a
                >
              </div>
              <div class="footer-section">
                <h4>About</h4>
                <p>
                  AKAO UI - A modern, dependency-free UI framework built with
                  vanilla JavaScript
                </p>
              </div>
            </div>
            <div class="footer-bottom">
              <p>© 2024 AKAO UI. MIT License.</p>
            </div>
          </div>
        </footer>
      </div>
    `;
  }
}

// Initialize app
const app = new App();
app.init();

// Make app globally available for theme toggle
window.app = app;
