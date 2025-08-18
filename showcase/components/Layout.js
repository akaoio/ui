import { html, css } from '../../src/index.js';

export class Layout {
    constructor(router) {
        this.router = router;
        this.menuOpen = false;
    }
    
    render() {
        const container = document.createElement('div');
        container.className = 'app-layout';
        
        // Add styles
        this.injectStyles();
        
        // Create header
        const header = this.createHeader();
        
        // Create sidebar
        const sidebar = this.createSidebar();
        
        // Create main content area
        const main = document.createElement('main');
        main.className = 'main-content';
        main.id = 'router-content';
        
        // Create mobile menu overlay
        const overlay = document.createElement('div');
        overlay.className = 'menu-overlay';
        overlay.onclick = () => this.toggleMenu();
        
        // Set router content container
        this.router.setContentContainer(main);
        
        // Append all elements
        container.appendChild(header);
        container.appendChild(sidebar);
        container.appendChild(main);
        container.appendChild(overlay);
        
        return container;
    }
    
    createHeader() {
        const header = document.createElement('header');
        header.className = 'app-header';
        
        header.innerHTML = `
            <div class="header-content">
                <button class="menu-toggle" id="menu-toggle">
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
                <div class="brand">
                    <a href="/" class="brand-link">
                        <span class="brand-icon">🎨</span>
                        <span class="brand-text">AKAO UI</span>
                    </a>
                </div>
                <nav class="header-nav">
                    <a href="/components" class="nav-link">Components</a>
                    <a href="/documentation" class="nav-link">Docs</a>
                    <a href="/playground" class="nav-link">Playground</a>
                    <a href="https://github.com/akaoio/ui" class="nav-link github-link" data-external>
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                        </svg>
                    </a>
                </nav>
                <button class="theme-toggle" id="theme-toggle" title="Toggle theme">
                    <span class="theme-icon">🌙</span>
                </button>
            </div>
        `;
        
        // Add menu toggle functionality
        setTimeout(() => {
            const menuToggle = document.getElementById('menu-toggle');
            if (menuToggle) {
                menuToggle.onclick = () => this.toggleMenu();
            }
            
            const themeToggle = document.getElementById('theme-toggle');
            if (themeToggle) {
                themeToggle.onclick = () => this.toggleTheme();
            }
        }, 0);
        
        return header;
    }
    
    createSidebar() {
        const sidebar = document.createElement('aside');
        sidebar.className = 'app-sidebar';
        sidebar.id = 'app-sidebar';
        
        sidebar.innerHTML = `
            <nav class="sidebar-nav">
                <div class="nav-section">
                    <h3 class="nav-title">Getting Started</h3>
                    <a href="/" class="nav-item">Introduction</a>
                    <a href="/documentation/installation" class="nav-item">Installation</a>
                    <a href="/documentation/quickstart" class="nav-item">Quick Start</a>
                    <a href="/documentation/philosophy" class="nav-item">Philosophy</a>
                </div>
                
                <div class="nav-section">
                    <h3 class="nav-title">Core Concepts</h3>
                    <a href="/documentation/web-components" class="nav-item">Web Components</a>
                    <a href="/documentation/shadow-dom" class="nav-item">Shadow DOM</a>
                    <a href="/documentation/css-in-js" class="nav-item">CSS-in-JS</a>
                    <a href="/documentation/state-management" class="nav-item">State Management</a>
                </div>
                
                <div class="nav-section">
                    <h3 class="nav-title">Components</h3>
                    <a href="/components/button" class="nav-item">Button</a>
                    <a href="/components/modal" class="nav-item">Modal</a>
                    <a href="/components/form" class="nav-item">Form Elements</a>
                    <a href="/components/card" class="nav-item">Card</a>
                    <a href="/components/tabs" class="nav-item">Tabs</a>
                    <a href="/components/accordion" class="nav-item">Accordion</a>
                    <a href="/components/tooltip" class="nav-item">Tooltip</a>
                    <a href="/components/dropdown" class="nav-item">Dropdown</a>
                    <a href="/components/toast" class="nav-item">Toast</a>
                    <a href="/components/table" class="nav-item">Table</a>
                </div>
                
                <div class="nav-section">
                    <h3 class="nav-title">Layout</h3>
                    <a href="/components/grid" class="nav-item">Grid System</a>
                    <a href="/components/container" class="nav-item">Container</a>
                    <a href="/components/flexbox" class="nav-item">Flexbox</a>
                </div>
                
                <div class="nav-section">
                    <h3 class="nav-title">Utilities</h3>
                    <a href="/documentation/animations" class="nav-item">Animations</a>
                    <a href="/documentation/theming" class="nav-item">Theming</a>
                    <a href="/documentation/typography" class="nav-item">Typography</a>
                    <a href="/documentation/colors" class="nav-item">Colors</a>
                </div>
                
                <div class="nav-section">
                    <h3 class="nav-title">Advanced</h3>
                    <a href="/documentation/custom-components" class="nav-item">Custom Components</a>
                    <a href="/documentation/performance" class="nav-item">Performance</a>
                    <a href="/documentation/typescript" class="nav-item">TypeScript</a>
                    <a href="/documentation/testing" class="nav-item">Testing</a>
                </div>
            </nav>
        `;
        
        return sidebar;
    }
    
    toggleMenu() {
        this.menuOpen = !this.menuOpen;
        const sidebar = document.getElementById('app-sidebar');
        const overlay = document.querySelector('.menu-overlay');
        const menuToggle = document.getElementById('menu-toggle');
        
        if (this.menuOpen) {
            sidebar?.classList.add('open');
            overlay?.classList.add('active');
            menuToggle?.classList.add('active');
        } else {
            sidebar?.classList.remove('open');
            overlay?.classList.remove('active');
            menuToggle?.classList.remove('active');
        }
    }
    
    toggleTheme() {
        const body = document.body;
        const currentTheme = body.getAttribute('data-theme') || 'light';
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        body.setAttribute('data-theme', newTheme);
        
        const themeIcon = document.querySelector('.theme-icon');
        if (themeIcon) {
            themeIcon.textContent = newTheme === 'light' ? '🌙' : '☀️';
        }
        
        // Save preference
        localStorage.setItem('theme', newTheme);
    }
    
    injectStyles() {
        if (document.getElementById('layout-styles')) return;
        
        const style = document.createElement('style');
        style.id = 'layout-styles';
        style.textContent = `
            * {
                margin: 0;
                padding: 0;
                box-sizing: border-box;
            }
            
            :root {
                --primary: #667eea;
                --primary-dark: #5a67d8;
                --secondary: #764ba2;
                --accent: #f093fb;
                --bg-primary: #ffffff;
                --bg-secondary: #f7fafc;
                --bg-tertiary: #edf2f7;
                --text-primary: #2d3748;
                --text-secondary: #4a5568;
                --text-tertiary: #718096;
                --border: #e2e8f0;
                --shadow-sm: 0 1px 3px rgba(0,0,0,0.12);
                --shadow-md: 0 4px 6px rgba(0,0,0,0.1);
                --shadow-lg: 0 10px 15px rgba(0,0,0,0.1);
                --shadow-xl: 0 20px 25px rgba(0,0,0,0.1);
                --radius: 8px;
                --header-height: 64px;
                --sidebar-width: 280px;
                --transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
            }
            
            [data-theme="dark"] {
                --bg-primary: #1a202c;
                --bg-secondary: #2d3748;
                --bg-tertiary: #4a5568;
                --text-primary: #f7fafc;
                --text-secondary: #e2e8f0;
                --text-tertiary: #cbd5e0;
                --border: #4a5568;
            }
            
            body {
                font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
                background: var(--bg-secondary);
                color: var(--text-primary);
                line-height: 1.6;
                transition: var(--transition);
            }
            
            .app-layout {
                min-height: 100vh;
                display: flex;
            }
            
            .app-header {
                position: fixed;
                top: 0;
                left: 0;
                right: 0;
                height: var(--header-height);
                background: var(--bg-primary);
                border-bottom: 1px solid var(--border);
                z-index: 1000;
                box-shadow: var(--shadow-sm);
            }
            
            .header-content {
                height: 100%;
                padding: 0 24px;
                display: flex;
                align-items: center;
                gap: 24px;
            }
            
            .menu-toggle {
                display: none;
                flex-direction: column;
                justify-content: center;
                gap: 4px;
                width: 24px;
                height: 24px;
                background: transparent;
                border: none;
                cursor: pointer;
            }
            
            .menu-toggle span {
                display: block;
                width: 100%;
                height: 2px;
                background: var(--text-primary);
                transition: var(--transition);
            }
            
            .menu-toggle.active span:nth-child(1) {
                transform: translateY(6px) rotate(45deg);
            }
            
            .menu-toggle.active span:nth-child(2) {
                opacity: 0;
            }
            
            .menu-toggle.active span:nth-child(3) {
                transform: translateY(-6px) rotate(-45deg);
            }
            
            .brand {
                display: flex;
                align-items: center;
                font-size: 20px;
                font-weight: 600;
            }
            
            .brand-link {
                display: flex;
                align-items: center;
                gap: 8px;
                text-decoration: none;
                color: var(--text-primary);
                transition: var(--transition);
            }
            
            .brand-link:hover {
                color: var(--primary);
            }
            
            .brand-icon {
                font-size: 24px;
            }
            
            .header-nav {
                flex: 1;
                display: flex;
                align-items: center;
                justify-content: flex-end;
                gap: 24px;
            }
            
            .nav-link {
                color: var(--text-secondary);
                text-decoration: none;
                font-weight: 500;
                transition: var(--transition);
                display: flex;
                align-items: center;
                gap: 4px;
            }
            
            .nav-link:hover {
                color: var(--primary);
            }
            
            .github-link {
                display: flex;
                align-items: center;
            }
            
            .theme-toggle {
                background: transparent;
                border: 1px solid var(--border);
                border-radius: var(--radius);
                padding: 8px;
                cursor: pointer;
                transition: var(--transition);
                display: flex;
                align-items: center;
                justify-content: center;
            }
            
            .theme-toggle:hover {
                background: var(--bg-secondary);
            }
            
            .app-sidebar {
                position: fixed;
                top: var(--header-height);
                left: 0;
                bottom: 0;
                width: var(--sidebar-width);
                background: var(--bg-primary);
                border-right: 1px solid var(--border);
                overflow-y: auto;
                transition: var(--transition);
            }
            
            .sidebar-nav {
                padding: 24px;
            }
            
            .nav-section {
                margin-bottom: 32px;
            }
            
            .nav-title {
                font-size: 12px;
                font-weight: 600;
                text-transform: uppercase;
                letter-spacing: 0.5px;
                color: var(--text-tertiary);
                margin-bottom: 12px;
            }
            
            .nav-item {
                display: block;
                padding: 8px 12px;
                color: var(--text-secondary);
                text-decoration: none;
                border-radius: var(--radius);
                transition: var(--transition);
                margin-bottom: 4px;
            }
            
            .nav-item:hover {
                background: var(--bg-secondary);
                color: var(--primary);
            }
            
            .nav-item.active {
                background: linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%);
                color: white;
            }
            
            .main-content {
                flex: 1;
                margin-left: var(--sidebar-width);
                margin-top: var(--header-height);
                padding: 32px;
                min-height: calc(100vh - var(--header-height));
            }
            
            .menu-overlay {
                display: none;
                position: fixed;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                background: rgba(0, 0, 0, 0.5);
                z-index: 999;
                opacity: 0;
                transition: opacity 0.3s;
            }
            
            .menu-overlay.active {
                display: block;
                opacity: 1;
            }
            
            @media (max-width: 1024px) {
                .menu-toggle {
                    display: flex;
                }
                
                .app-sidebar {
                    transform: translateX(-100%);
                    z-index: 1001;
                }
                
                .app-sidebar.open {
                    transform: translateX(0);
                }
                
                .main-content {
                    margin-left: 0;
                }
                
                .header-nav {
                    display: none;
                }
            }
            
            @media (max-width: 640px) {
                .main-content {
                    padding: 16px;
                }
                
                .brand-text {
                    display: none;
                }
            }
        `;
        
        document.head.appendChild(style);
        
        // Apply saved theme
        const savedTheme = localStorage.getItem('theme') || 'light';
        document.body.setAttribute('data-theme', savedTheme);
    }
}