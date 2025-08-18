import { html, css, init, render } from '../src/index.js';
import { Router } from './router.js';
import { Layout } from './components/Layout.js';
import { HomePage } from './pages/Home.js';
import { ComponentsPage } from './pages/Components.js';
import { DocumentationPage } from './pages/Documentation.js';
import { PlaygroundPage } from './pages/Playground.js';

class App {
    constructor() {
        this.router = new Router();
        this.setupRoutes();
        this.init();
    }

    setupRoutes() {
        this.router.addRoute('/', HomePage);
        this.router.addRoute('/components', ComponentsPage);
        this.router.addRoute('/components/:component', ComponentsPage);
        this.router.addRoute('/documentation', DocumentationPage);
        this.router.addRoute('/documentation/:topic', DocumentationPage);
        this.router.addRoute('/playground', PlaygroundPage);
    }

    async init() {
        // Initialize UI system
        await init();
        
        // Create app structure
        const app = document.getElementById('app');
        
        // Render layout with router content
        const layout = new Layout(this.router);
        app.appendChild(layout.render());
        
        // Start router
        this.router.start();
    }
}

// Start the application
new App();