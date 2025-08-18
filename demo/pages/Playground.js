export class PlaygroundPage {
    constructor() {
        this.defaultCode = `class MyComponent extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.count = 0;
    }
    
    connectedCallback() {
        this.render();
    }
    
    increment() {
        this.count++;
        this.render();
    }
    
    render() {
        this.shadowRoot.innerHTML = \`
            <style>
                :host {
                    display: inline-block;
                    font-family: sans-serif;
                }
                
                .container {
                    padding: 20px;
                    background: linear-gradient(135deg, #667eea, #764ba2);
                    border-radius: 12px;
                    color: white;
                    text-align: center;
                }
                
                button {
                    background: white;
                    color: #667eea;
                    border: none;
                    padding: 10px 20px;
                    border-radius: 6px;
                    font-size: 16px;
                    font-weight: 600;
                    cursor: pointer;
                    transition: transform 0.2s;
                }
                
                button:hover {
                    transform: scale(1.05);
                }
                
                button:active {
                    transform: scale(0.95);
                }
                
                .count {
                    font-size: 48px;
                    font-weight: bold;
                    margin: 20px 0;
                }
            </style>
            
            <div class="container">
                <h2>Counter Component</h2>
                <div class="count">\${this.count}</div>
                <button onclick="this.getRootNode().host.increment()">
                    Increment
                </button>
            </div>
        \`;
    }
}

customElements.define('my-component', MyComponent);`;
    }
    
    render() {
        const container = document.createElement('div');
        container.className = 'playground-page';
        
        container.innerHTML = `
            <style>
                .playground-page {
                    height: calc(100vh - 128px);
                    display: flex;
                    flex-direction: column;
                }
                
                .playground-header {
                    padding: 20px;
                    background: var(--bg-primary);
                    border-radius: var(--radius);
                    margin-bottom: 20px;
                    box-shadow: var(--shadow-md);
                }
                
                .playground-title {
                    font-size: 28px;
                    font-weight: 700;
                    color: var(--text-primary);
                    margin-bottom: 8px;
                }
                
                .playground-description {
                    color: var(--text-secondary);
                }
                
                .playground-container {
                    flex: 1;
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 20px;
                    min-height: 0;
                }
                
                .editor-panel, .preview-panel {
                    background: var(--bg-primary);
                    border-radius: var(--radius);
                    box-shadow: var(--shadow-md);
                    display: flex;
                    flex-direction: column;
                    overflow: hidden;
                }
                
                .panel-header {
                    padding: 16px 20px;
                    background: var(--bg-secondary);
                    border-bottom: 1px solid var(--border);
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                }
                
                .panel-title {
                    font-weight: 600;
                    color: var(--text-primary);
                }
                
                .panel-actions {
                    display: flex;
                    gap: 8px;
                }
                
                .action-button {
                    padding: 6px 12px;
                    background: var(--bg-primary);
                    color: var(--text-secondary);
                    border: 1px solid var(--border);
                    border-radius: 6px;
                    font-size: 14px;
                    cursor: pointer;
                    transition: all 0.2s;
                }
                
                .action-button:hover {
                    background: var(--primary);
                    color: white;
                    border-color: var(--primary);
                }
                
                .action-button.primary {
                    background: var(--primary);
                    color: white;
                    border-color: var(--primary);
                }
                
                .action-button.primary:hover {
                    background: var(--primary-dark);
                }
                
                .editor-container {
                    flex: 1;
                    position: relative;
                    overflow: hidden;
                }
                
                .code-editor {
                    width: 100%;
                    height: 100%;
                    padding: 20px;
                    background: var(--bg-tertiary);
                    color: var(--text-primary);
                    font-family: 'Consolas', 'Monaco', 'Courier New', monospace;
                    font-size: 14px;
                    line-height: 1.6;
                    border: none;
                    outline: none;
                    resize: none;
                    tab-size: 4;
                }
                
                .preview-container {
                    flex: 1;
                    padding: 20px;
                    overflow: auto;
                    background: var(--bg-secondary);
                }
                
                .preview-frame {
                    width: 100%;
                    height: 100%;
                    border: none;
                    background: white;
                    border-radius: var(--radius);
                }
                
                .error-message {
                    background: rgba(239, 68, 68, 0.1);
                    border: 1px solid #ef4444;
                    color: #ef4444;
                    padding: 12px;
                    border-radius: 6px;
                    margin-bottom: 12px;
                    font-family: 'Consolas', 'Monaco', 'Courier New', monospace;
                    font-size: 13px;
                }
                
                .examples-bar {
                    display: flex;
                    gap: 8px;
                    margin-bottom: 20px;
                    flex-wrap: wrap;
                }
                
                .example-button {
                    padding: 8px 16px;
                    background: var(--bg-primary);
                    color: var(--text-secondary);
                    border: 1px solid var(--border);
                    border-radius: 6px;
                    cursor: pointer;
                    transition: all 0.2s;
                    font-size: 14px;
                }
                
                .example-button:hover {
                    background: var(--primary);
                    color: white;
                    border-color: var(--primary);
                }
                
                @media (max-width: 1024px) {
                    .playground-container {
                        grid-template-columns: 1fr;
                        grid-template-rows: 1fr 1fr;
                    }
                }
            </style>
            
            <div class="playground-header">
                <h1 class="playground-title">Component Playground</h1>
                <p class="playground-description">Write and test AKAO UI components in real-time. Edit the code on the left to see live updates on the right.</p>
                
                <div class="examples-bar">
                    <button class="example-button" data-example="counter">Counter</button>
                    <button class="example-button" data-example="button">Custom Button</button>
                    <button class="example-button" data-example="card">Card Component</button>
                    <button class="example-button" data-example="list">Dynamic List</button>
                    <button class="example-button" data-example="form">Form Component</button>
                </div>
            </div>
            
            <div class="playground-container">
                <div class="editor-panel">
                    <div class="panel-header">
                        <span class="panel-title">Code Editor</span>
                        <div class="panel-actions">
                            <button class="action-button" id="copy-code">Copy</button>
                            <button class="action-button" id="reset-code">Reset</button>
                            <button class="action-button primary" id="run-code">Run →</button>
                        </div>
                    </div>
                    <div class="editor-container">
                        <textarea 
                            class="code-editor" 
                            id="code-editor"
                            spellcheck="false"
                            placeholder="Write your component code here..."
                        >${this.defaultCode}</textarea>
                    </div>
                </div>
                
                <div class="preview-panel">
                    <div class="panel-header">
                        <span class="panel-title">Preview</span>
                        <div class="panel-actions">
                            <button class="action-button" id="refresh-preview">Refresh</button>
                        </div>
                    </div>
                    <div class="preview-container" id="preview-container">
                        <div id="preview-content"></div>
                    </div>
                </div>
            </div>
        `;
        
        // Add event listeners after render
        setTimeout(() => {
            this.setupEventListeners();
            this.runCode();
        }, 0);
        
        return container;
    }
    
    setupEventListeners() {
        const editor = document.getElementById('code-editor');
        const runButton = document.getElementById('run-code');
        const copyButton = document.getElementById('copy-code');
        const resetButton = document.getElementById('reset-code');
        const refreshButton = document.getElementById('refresh-preview');
        
        // Run code
        runButton?.addEventListener('click', () => this.runCode());
        refreshButton?.addEventListener('click', () => this.runCode());
        
        // Copy code
        copyButton?.addEventListener('click', () => {
            navigator.clipboard.writeText(editor.value);
            copyButton.textContent = 'Copied!';
            setTimeout(() => {
                copyButton.textContent = 'Copy';
            }, 2000);
        });
        
        // Reset code
        resetButton?.addEventListener('click', () => {
            editor.value = this.defaultCode;
            this.runCode();
        });
        
        // Handle tab key in editor
        editor?.addEventListener('keydown', (e) => {
            if (e.key === 'Tab') {
                e.preventDefault();
                const start = editor.selectionStart;
                const end = editor.selectionEnd;
                editor.value = editor.value.substring(0, start) + '    ' + editor.value.substring(end);
                editor.selectionStart = editor.selectionEnd = start + 4;
            }
        });
        
        // Example buttons
        const exampleButtons = document.querySelectorAll('.example-button');
        exampleButtons.forEach(button => {
            button.addEventListener('click', () => {
                const example = button.dataset.example;
                editor.value = this.getExampleCode(example);
                this.runCode();
            });
        });
    }
    
    runCode() {
        const code = document.getElementById('code-editor').value;
        const preview = document.getElementById('preview-content');
        
        // Clear previous content
        preview.innerHTML = '';
        
        try {
            // Create a sandboxed environment
            const sandbox = document.createElement('div');
            sandbox.style.width = '100%';
            
            // Execute the code
            const func = new Function(code);
            func();
            
            // Get the custom element name from the code
            const match = code.match(/customElements\.define\(['"]([^'"]+)['"]/);
            if (match) {
                const elementName = match[1];
                sandbox.innerHTML = `<${elementName}></${elementName}>`;
            }
            
            preview.appendChild(sandbox);
        } catch (error) {
            preview.innerHTML = `
                <div class="error-message">
                    <strong>Error:</strong> ${error.message}
                </div>
            `;
        }
    }
    
    getExampleCode(example) {
        const examples = {
            counter: this.defaultCode,
            
            button: `class CustomButton extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }
    
    static get observedAttributes() {
        return ['variant', 'size'];
    }
    
    connectedCallback() {
        this.render();
    }
    
    attributeChangedCallback() {
        this.render();
    }
    
    get variant() {
        return this.getAttribute('variant') || 'primary';
    }
    
    get size() {
        return this.getAttribute('size') || 'medium';
    }
    
    render() {
        const variants = {
            primary: 'background: linear-gradient(135deg, #667eea, #764ba2); color: white;',
            secondary: 'background: transparent; color: #667eea; border: 2px solid #667eea;',
            success: 'background: #10b981; color: white;',
            danger: 'background: #ef4444; color: white;'
        };
        
        const sizes = {
            small: 'padding: 8px 16px; font-size: 14px;',
            medium: 'padding: 12px 24px; font-size: 16px;',
            large: 'padding: 16px 32px; font-size: 18px;'
        };
        
        this.shadowRoot.innerHTML = \`
            <style>
                button {
                    \${variants[this.variant]}
                    \${sizes[this.size]}
                    border: none;
                    border-radius: 8px;
                    font-weight: 600;
                    cursor: pointer;
                    transition: all 0.3s;
                }
                
                button:hover {
                    transform: translateY(-2px);
                    box-shadow: 0 4px 12px rgba(0,0,0,0.15);
                }
            </style>
            <button>
                <slot>Click me</slot>
            </button>
        \`;
    }
}

customElements.define('custom-button', CustomButton);

// Create multiple variants
const container = document.createElement('div');
container.style.cssText = 'display: flex; gap: 12px; flex-wrap: wrap;';

['primary', 'secondary', 'success', 'danger'].forEach(variant => {
    const btn = document.createElement('custom-button');
    btn.setAttribute('variant', variant);
    btn.textContent = variant.charAt(0).toUpperCase() + variant.slice(1);
    container.appendChild(btn);
});

document.currentScript.parentElement.appendChild(container);`,
            
            card: `class CardComponent extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }
    
    connectedCallback() {
        this.shadowRoot.innerHTML = \`
            <style>
                :host {
                    display: block;
                    max-width: 400px;
                }
                
                .card {
                    background: white;
                    border-radius: 12px;
                    overflow: hidden;
                    box-shadow: 0 4px 6px rgba(0,0,0,0.1);
                    transition: transform 0.3s, box-shadow 0.3s;
                }
                
                .card:hover {
                    transform: translateY(-4px);
                    box-shadow: 0 10px 20px rgba(0,0,0,0.15);
                }
                
                .card-image {
                    width: 100%;
                    height: 200px;
                    background: linear-gradient(135deg, #667eea, #764ba2);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 48px;
                }
                
                .card-body {
                    padding: 24px;
                }
                
                .card-title {
                    font-size: 24px;
                    font-weight: 600;
                    margin-bottom: 12px;
                    color: #2d3748;
                }
                
                .card-text {
                    color: #4a5568;
                    line-height: 1.6;
                    margin-bottom: 20px;
                }
                
                .card-actions {
                    display: flex;
                    gap: 12px;
                }
                
                button {
                    padding: 10px 20px;
                    border-radius: 6px;
                    font-weight: 600;
                    cursor: pointer;
                    transition: all 0.2s;
                }
                
                .btn-primary {
                    background: #667eea;
                    color: white;
                    border: none;
                }
                
                .btn-secondary {
                    background: transparent;
                    color: #667eea;
                    border: 1px solid #667eea;
                }
                
                button:hover {
                    transform: scale(1.05);
                }
            </style>
            
            <div class="card">
                <div class="card-image">🎨</div>
                <div class="card-body">
                    <h2 class="card-title">Beautiful Card</h2>
                    <p class="card-text">
                        This is a beautifully styled card component built with Web Components
                        and Shadow DOM for perfect encapsulation.
                    </p>
                    <div class="card-actions">
                        <button class="btn-primary">Learn More</button>
                        <button class="btn-secondary">Share</button>
                    </div>
                </div>
            </div>
        \`;
    }
}

customElements.define('card-component', CardComponent);`,
            
            list: `class DynamicList extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.items = [
            { id: 1, text: 'Learn Web Components', done: true },
            { id: 2, text: 'Build with AKAO UI', done: false },
            { id: 3, text: 'Create awesome apps', done: false }
        ];
    }
    
    connectedCallback() {
        this.render();
    }
    
    addItem() {
        const input = this.shadowRoot.querySelector('.input');
        if (input.value.trim()) {
            this.items.push({
                id: Date.now(),
                text: input.value,
                done: false
            });
            input.value = '';
            this.render();
        }
    }
    
    toggleItem(id) {
        const item = this.items.find(i => i.id === id);
        if (item) {
            item.done = !item.done;
            this.render();
        }
    }
    
    deleteItem(id) {
        this.items = this.items.filter(i => i.id !== id);
        this.render();
    }
    
    render() {
        this.shadowRoot.innerHTML = \`
            <style>
                :host {
                    display: block;
                    max-width: 500px;
                    font-family: sans-serif;
                }
                
                .container {
                    background: white;
                    border-radius: 12px;
                    padding: 24px;
                    box-shadow: 0 4px 6px rgba(0,0,0,0.1);
                }
                
                h2 {
                    color: #2d3748;
                    margin-bottom: 20px;
                }
                
                .input-group {
                    display: flex;
                    gap: 8px;
                    margin-bottom: 20px;
                }
                
                .input {
                    flex: 1;
                    padding: 10px;
                    border: 1px solid #e2e8f0;
                    border-radius: 6px;
                    font-size: 16px;
                }
                
                .add-btn {
                    padding: 10px 20px;
                    background: #667eea;
                    color: white;
                    border: none;
                    border-radius: 6px;
                    cursor: pointer;
                    font-weight: 600;
                }
                
                .list {
                    list-style: none;
                    padding: 0;
                    margin: 0;
                }
                
                .list-item {
                    display: flex;
                    align-items: center;
                    padding: 12px;
                    margin-bottom: 8px;
                    background: #f7fafc;
                    border-radius: 6px;
                    transition: all 0.2s;
                }
                
                .list-item:hover {
                    background: #edf2f7;
                }
                
                .list-item.done {
                    opacity: 0.6;
                }
                
                .list-item.done .item-text {
                    text-decoration: line-through;
                }
                
                .checkbox {
                    width: 20px;
                    height: 20px;
                    margin-right: 12px;
                    cursor: pointer;
                }
                
                .item-text {
                    flex: 1;
                    color: #2d3748;
                }
                
                .delete-btn {
                    padding: 4px 8px;
                    background: #ef4444;
                    color: white;
                    border: none;
                    border-radius: 4px;
                    cursor: pointer;
                    font-size: 12px;
                }
                
                .stats {
                    margin-top: 20px;
                    padding-top: 20px;
                    border-top: 1px solid #e2e8f0;
                    color: #718096;
                    font-size: 14px;
                }
            </style>
            
            <div class="container">
                <h2>📝 Todo List</h2>
                
                <div class="input-group">
                    <input 
                        type="text" 
                        class="input" 
                        placeholder="Add a new task..."
                        onkeypress="if(event.key === 'Enter') this.getRootNode().host.addItem()"
                    >
                    <button class="add-btn" onclick="this.getRootNode().host.addItem()">
                        Add
                    </button>
                </div>
                
                <ul class="list">
                    \${this.items.map(item => \`
                        <li class="list-item \${item.done ? 'done' : ''}">
                            <input 
                                type="checkbox" 
                                class="checkbox"
                                \${item.done ? 'checked' : ''}
                                onchange="this.getRootNode().host.toggleItem(\${item.id})"
                            >
                            <span class="item-text">\${item.text}</span>
                            <button 
                                class="delete-btn"
                                onclick="this.getRootNode().host.deleteItem(\${item.id})"
                            >
                                Delete
                            </button>
                        </li>
                    \`).join('')}
                </ul>
                
                <div class="stats">
                    Total: \${this.items.length} | 
                    Completed: \${this.items.filter(i => i.done).length} | 
                    Remaining: \${this.items.filter(i => !i.done).length}
                </div>
            </div>
        \`;
    }
}

customElements.define('dynamic-list', DynamicList);`,
            
            form: `class FormComponent extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.formData = {
            name: '',
            email: '',
            message: ''
        };
    }
    
    connectedCallback() {
        this.render();
    }
    
    handleInput(field, value) {
        this.formData[field] = value;
    }
    
    handleSubmit(e) {
        e.preventDefault();
        
        // Simple validation
        if (!this.formData.name || !this.formData.email || !this.formData.message) {
            alert('Please fill in all fields');
            return;
        }
        
        if (!this.formData.email.includes('@')) {
            alert('Please enter a valid email');
            return;
        }
        
        // Show success message
        const result = this.shadowRoot.querySelector('.result');
        result.innerHTML = \`
            <div style="padding: 16px; background: #10b981; color: white; border-radius: 8px;">
                ✅ Form submitted successfully!<br>
                <small>Name: \${this.formData.name}<br>
                Email: \${this.formData.email}</small>
            </div>
        \`;
        
        // Reset form
        this.formData = { name: '', email: '', message: '' };
        this.render();
    }
    
    render() {
        this.shadowRoot.innerHTML = \`
            <style>
                :host {
                    display: block;
                    max-width: 500px;
                    font-family: sans-serif;
                }
                
                .form-container {
                    background: white;
                    border-radius: 12px;
                    padding: 32px;
                    box-shadow: 0 4px 6px rgba(0,0,0,0.1);
                }
                
                h2 {
                    color: #2d3748;
                    margin-bottom: 24px;
                }
                
                .form-group {
                    margin-bottom: 20px;
                }
                
                label {
                    display: block;
                    margin-bottom: 8px;
                    color: #4a5568;
                    font-weight: 600;
                }
                
                input, textarea {
                    width: 100%;
                    padding: 10px 12px;
                    border: 1px solid #e2e8f0;
                    border-radius: 6px;
                    font-size: 16px;
                    font-family: inherit;
                    transition: border-color 0.2s;
                }
                
                input:focus, textarea:focus {
                    outline: none;
                    border-color: #667eea;
                    box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
                }
                
                textarea {
                    resize: vertical;
                    min-height: 100px;
                }
                
                .submit-btn {
                    width: 100%;
                    padding: 12px;
                    background: linear-gradient(135deg, #667eea, #764ba2);
                    color: white;
                    border: none;
                    border-radius: 6px;
                    font-size: 16px;
                    font-weight: 600;
                    cursor: pointer;
                    transition: transform 0.2s;
                }
                
                .submit-btn:hover {
                    transform: translateY(-2px);
                }
                
                .submit-btn:active {
                    transform: translateY(0);
                }
                
                .result {
                    margin-top: 20px;
                }
            </style>
            
            <div class="form-container">
                <h2>📬 Contact Form</h2>
                
                <form onsubmit="this.getRootNode().host.handleSubmit(event)">
                    <div class="form-group">
                        <label>Name</label>
                        <input 
                            type="text"
                            value="\${this.formData.name}"
                            oninput="this.getRootNode().host.handleInput('name', this.value)"
                            placeholder="Enter your name"
                        >
                    </div>
                    
                    <div class="form-group">
                        <label>Email</label>
                        <input 
                            type="email"
                            value="\${this.formData.email}"
                            oninput="this.getRootNode().host.handleInput('email', this.value)"
                            placeholder="your@email.com"
                        >
                    </div>
                    
                    <div class="form-group">
                        <label>Message</label>
                        <textarea
                            oninput="this.getRootNode().host.handleInput('message', this.value)"
                            placeholder="Type your message here..."
                        >\${this.formData.message}</textarea>
                    </div>
                    
                    <button type="submit" class="submit-btn">
                        Send Message
                    </button>
                </form>
                
                <div class="result"></div>
            </div>
        \`;
    }
}

customElements.define('form-component', FormComponent);`
        };
        
        return examples[example] || this.defaultCode;
    }
}