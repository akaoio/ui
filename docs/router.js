export class Router {
    constructor() {
        this.routes = new Map();
        this.currentRoute = null;
        this.params = {};
        this.contentContainer = null;
        
        // Listen to browser navigation
        window.addEventListener('popstate', () => this.handleRoute());
        
        // Intercept all link clicks
        document.addEventListener('click', (e) => {
            const link = e.target.closest('a[href^="/"]');
            if (link && !link.hasAttribute('data-external')) {
                e.preventDefault();
                this.navigate(link.getAttribute('href'));
            }
        });
    }
    
    addRoute(path, component) {
        this.routes.set(path, component);
    }
    
    setContentContainer(container) {
        this.contentContainer = container;
    }
    
    navigate(path) {
        window.history.pushState({}, '', path);
        this.handleRoute();
    }
    
    handleRoute() {
        const path = window.location.pathname;
        let component = null;
        let params = {};
        
        // Try exact match first
        if (this.routes.has(path)) {
            component = this.routes.get(path);
        } else {
            // Try pattern matching
            for (const [pattern, comp] of this.routes) {
                const match = this.matchRoute(pattern, path);
                if (match) {
                    component = comp;
                    params = match;
                    break;
                }
            }
        }
        
        if (component && this.contentContainer) {
            this.currentRoute = path;
            this.params = params;
            this.renderComponent(component);
        }
    }
    
    matchRoute(pattern, path) {
        const patternParts = pattern.split('/').filter(Boolean);
        const pathParts = path.split('/').filter(Boolean);
        
        if (patternParts.length !== pathParts.length) {
            return null;
        }
        
        const params = {};
        
        for (let i = 0; i < patternParts.length; i++) {
            if (patternParts[i].startsWith(':')) {
                const paramName = patternParts[i].slice(1);
                params[paramName] = pathParts[i];
            } else if (patternParts[i] !== pathParts[i]) {
                return null;
            }
        }
        
        return params;
    }
    
    renderComponent(Component) {
        if (this.contentContainer) {
            // Clear current content
            this.contentContainer.innerHTML = '';
            
            // Create and render new component
            const instance = new Component(this.params, this);
            const element = instance.render();
            this.contentContainer.appendChild(element);
            
            // Call lifecycle method if exists
            if (instance.onMount) {
                instance.onMount();
            }
        }
    }
    
    start() {
        this.handleRoute();
    }
    
    getParams() {
        return this.params;
    }
    
    getCurrentRoute() {
        return this.currentRoute;
    }
}