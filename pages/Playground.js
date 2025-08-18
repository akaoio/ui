import { html } from "../src/index.js";

export function PlaygroundPage() {
  const defaultCode = `import { html, css, Component } from '@akaoio/ui';

class InteractiveDemo extends Component {
    constructor() {
        super();
        this.state = {
            count: 0,
            message: 'Hello AKAO UI!'
        };
    }
    
    styles() {
        return css\`
            .demo-container {
                padding: 30px;
                background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                border-radius: 12px;
                text-align: center;
                color: white;
            }
            
            .counter {
                font-size: 48px;
                font-weight: bold;
                margin: 20px 0;
            }
            
            .buttons {
                display: flex;
                gap: 10px;
                justify-content: center;
            }
            
            .btn {
                padding: 12px 24px;
                background: white;
                color: #667eea;
                border: none;
                border-radius: 6px;
                font-size: 16px;
                cursor: pointer;
                transition: transform 0.2s;
            }
            
            .btn:hover {
                transform: translateY(-2px);
            }
        \`;
    }
    
    increment() {
        this.state.count++;
        this.update();
    }
    
    decrement() {
        this.state.count--;
        this.update();
    }
    
    reset() {
        this.state.count = 0;
        this.update();
    }
    
    render() {
        return html\`
            <div class="demo-container">
                <h2>\${this.state.message}</h2>
                <div class="counter">\${this.state.count}</div>
                <div class="buttons">
                    <button class="btn" onclick="\${() => this.decrement()}">
                        Decrease
                    </button>
                    <button class="btn" onclick="\${() => this.reset()}">
                        Reset
                    </button>
                    <button class="btn" onclick="\${() => this.increment()}">
                        Increase
                    </button>
                </div>
            </div>
        \`;
    }
}

// Render the component
const demo = new InteractiveDemo();
document.getElementById('output').appendChild(demo.render());`;

  return html`
    <div class="playground-page">
      <div class="container">
        <header class="page-header">
          <h1>Interactive Playground</h1>
          <p>Experiment with AKAO UI components in real-time</p>
        </header>

        <div class="playground-layout">
          <div class="editor-panel">
            <div class="panel-header">
              <h3>Code Editor</h3>
              <div class="editor-actions">
                <button class="button small primary" onclick="runCode()">
                  ▶ Run Code
                </button>
                <button class="button small secondary" onclick="resetCode()">
                  Reset
                </button>
              </div>
            </div>
            <div class="editor-container">
              <textarea id="code-editor" class="code-editor">
${defaultCode}</textarea
              >
            </div>
          </div>

          <div class="preview-panel">
            <div class="panel-header">
              <h3>Preview</h3>
              <div class="preview-actions">
                <button class="button small ghost" onclick="clearOutput()">
                  Clear
                </button>
              </div>
            </div>
            <div class="preview-container">
              <div id="output" class="output"></div>
            </div>
            <div class="console-panel">
              <div class="panel-header">
                <h3>Console</h3>
              </div>
              <div id="console" class="console-output"></div>
            </div>
          </div>
        </div>

        <div class="examples-section">
          <h2>Example Templates</h2>
          <div class="example-cards">
            <div class="example-card" onclick="loadExample('counter')">
              <h4>Counter Component</h4>
              <p>Interactive counter with state management</p>
            </div>
            <div class="example-card" onclick="loadExample('todo')">
              <h4>Todo List</h4>
              <p>Dynamic list with add/remove functionality</p>
            </div>
            <div class="example-card" onclick="loadExample('form')">
              <h4>Form Validation</h4>
              <p>Form with real-time validation</p>
            </div>
            <div class="example-card" onclick="loadExample('animation')">
              <h4>Animations</h4>
              <p>CSS animations and transitions</p>
            </div>
            <div class="example-card" onclick="loadExample('fetch')">
              <h4>Data Fetching</h4>
              <p>Async data loading example</p>
            </div>
            <div class="example-card" onclick="loadExample('custom')">
              <h4>Custom Element</h4>
              <p>Web Component registration</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <script>
      window.runCode = function () {
        const code = document.getElementById("code-editor").value;
        const output = document.getElementById("output");
        const console = document.getElementById("console");

        try {
          // Clear previous output
          output.innerHTML = "";
          console.innerHTML =
            '<div class="console-line success">Code executed successfully</div>';

          // Create a function from the code and execute it
          const func = new Function(code);
          func();
        } catch (error) {
          console.innerHTML =
            '<div class="console-line error">Error: ' +
            error.message +
            "</div>";
        }
      };

      window.resetCode = function () {
        document.getElementById("code-editor").value = \`${defaultCode}\`;
        runCode();
      };

      window.clearOutput = function () {
        document.getElementById("output").innerHTML = "";
        document.getElementById("console").innerHTML = "";
      };

      window.loadExample = function (type) {
        // Load different example templates based on type
        let exampleCode = "";

        switch (type) {
          case "todo":
            exampleCode = getTodoExample();
            break;
          case "form":
            exampleCode = getFormExample();
            break;
          default:
            exampleCode = defaultCode;
        }

        document.getElementById("code-editor").value = exampleCode;
        runCode();
      };

      function getTodoExample() {
        return \`// Todo List Example
import { html, css, Component } from '@akaoio/ui';

class TodoList extends Component {
    constructor() {
        super();
        this.state = {
            todos: [],
            inputValue: ''
        };
    }
    
    addTodo() {
        if (this.state.inputValue.trim()) {
            this.state.todos.push({
                id: Date.now(),
                text: this.state.inputValue,
                done: false
            });
            this.state.inputValue = '';
            this.update();
        }
    }
    
    toggleTodo(id) {
        const todo = this.state.todos.find(t => t.id === id);
        if (todo) {
            todo.done = !todo.done;
            this.update();
        }
    }
    
    deleteTodo(id) {
        this.state.todos = this.state.todos.filter(t => t.id !== id);
        this.update();
    }
    
    render() {
        return html\\\`
            <div class="todo-list">
                <h2>My Todo List</h2>
                <div class="add-todo">
                    <input 
                        type="text" 
                        placeholder="Add a todo..."
                        value="\\\${this.state.inputValue}"
                        onchange="\\\${(e) => { this.state.inputValue = e.target.value; }}"
                    >
                    <button onclick="\\\${() => this.addTodo()}">Add</button>
                </div>
                <ul>
                    \\\${this.state.todos.map(todo => html\\\`
                        <li class="\\\${todo.done ? 'done' : ''}">
                            <input 
                                type="checkbox" 
                                checked="\\\${todo.done}"
                                onchange="\\\${() => this.toggleTodo(todo.id)}"
                            >
                            <span>\\\${todo.text}</span>
                            <button onclick="\\\${() => this.deleteTodo(todo.id)}">×</button>
                        </li>
                    \\\`)}
                </ul>
            </div>
        \\\`;
    }
}\`;
      }

      function getFormExample() {
        return \`// Form Validation Example
import { html, css, Component } from '@akaoio/ui';

class FormValidator extends Component {
    constructor() {
        super();
        this.state = {
            email: '',
            password: '',
            errors: {}
        };
    }
    
    validate() {
        const errors = {};
        
        if (!this.state.email.includes('@')) {
            errors.email = 'Invalid email address';
        }
        
        if (this.state.password.length < 8) {
            errors.password = 'Password must be at least 8 characters';
        }
        
        this.state.errors = errors;
        this.update();
        
        return Object.keys(errors).length === 0;
    }
    
    handleSubmit() {
        if (this.validate()) {
            alert('Form submitted successfully!');
        }
    }
    
    render() {
        return html\\\`
            <form class="validation-form">
                <h2>Sign Up Form</h2>
                
                <div class="form-group">
                    <label>Email</label>
                    <input 
                        type="email"
                        value="\\\${this.state.email}"
                        onchange="\\\${(e) => { this.state.email = e.target.value; this.validate(); }}"
                    >
                    \\\${this.state.errors.email && html\\\`
                        <span class="error">\\\${this.state.errors.email}</span>
                    \\\`}
                </div>
                
                <div class="form-group">
                    <label>Password</label>
                    <input 
                        type="password"
                        value="\\\${this.state.password}"
                        onchange="\\\${(e) => { this.state.password = e.target.value; this.validate(); }}"
                    >
                    \\\${this.state.errors.password && html\\\`
                        <span class="error">\\\${this.state.errors.password}</span>
                    \\\`}
                </div>
                
                <button type="button" onclick="\\\${() => this.handleSubmit()}">
                    Submit
                </button>
            </form>
        \\\`;
    }
}\`;
      }

      // Run default code on load
      setTimeout(() => runCode(), 100);
    </script>
  `;
}
