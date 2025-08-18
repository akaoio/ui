import { html } from "../src/index.js";

export function ExamplesPage() {
  const examples = [
    {
      title: "Todo Application",
      description: "Full-featured todo app with local storage",
      difficulty: "Beginner",
      code: `
class TodoApp extends Component {
    constructor() {
        super();
        this.state = {
            todos: JSON.parse(localStorage.getItem('todos') || '[]'),
            filter: 'all'
        };
    }
    
    saveTodos() {
        localStorage.setItem('todos', JSON.stringify(this.state.todos));
    }
    
    addTodo(text) {
        this.state.todos.push({
            id: Date.now(),
            text,
            completed: false
        });
        this.saveTodos();
        this.update();
    }
    
    render() {
        const filtered = this.state.todos.filter(todo => {
            if (this.state.filter === 'active') return !todo.completed;
            if (this.state.filter === 'completed') return todo.completed;
            return true;
        });
        
        return html\`
            <div class="todo-app">
                <!-- Todo app UI -->
            </div>
        \`;
    }
}`,
    },
    {
      title: "Real-time Chat",
      description: "WebSocket-based chat application",
      difficulty: "Advanced",
      code: `
class ChatApp extends Component {
    constructor() {
        super();
        this.state = {
            messages: [],
            connected: false
        };
        this.ws = null;
    }
    
    connect() {
        this.ws = new WebSocket('wss://chat-server.example.com');
        
        this.ws.onopen = () => {
            this.state.connected = true;
            this.update();
        };
        
        this.ws.onmessage = (event) => {
            const message = JSON.parse(event.data);
            this.state.messages.push(message);
            this.update();
        };
    }
    
    sendMessage(text) {
        if (this.ws && this.state.connected) {
            this.ws.send(JSON.stringify({
                text,
                timestamp: Date.now()
            }));
        }
    }
    
    render() {
        return html\`
            <div class="chat-app">
                <!-- Chat UI -->
            </div>
        \`;
    }
}`,
    },
    {
      title: "Data Grid",
      description: "Sortable and filterable data table",
      difficulty: "Intermediate",
      code: `
class DataGrid extends Component {
    constructor(data) {
        super();
        this.state = {
            data,
            sortColumn: null,
            sortDirection: 'asc',
            filterText: ''
        };
    }
    
    sort(column) {
        if (this.state.sortColumn === column) {
            this.state.sortDirection = 
                this.state.sortDirection === 'asc' ? 'desc' : 'asc';
        } else {
            this.state.sortColumn = column;
            this.state.sortDirection = 'asc';
        }
        this.update();
    }
    
    getSortedData() {
        let filtered = this.state.data;
        
        if (this.state.filterText) {
            filtered = filtered.filter(row =>
                Object.values(row).some(val =>
                    String(val).toLowerCase()
                        .includes(this.state.filterText.toLowerCase())
                )
            );
        }
        
        if (this.state.sortColumn) {
            filtered.sort((a, b) => {
                const aVal = a[this.state.sortColumn];
                const bVal = b[this.state.sortColumn];
                const dir = this.state.sortDirection === 'asc' ? 1 : -1;
                return aVal > bVal ? dir : -dir;
            });
        }
        
        return filtered;
    }
    
    render() {
        const data = this.getSortedData();
        return html\`
            <div class="data-grid">
                <!-- Grid UI -->
            </div>
        \`;
    }
}`,
    },
    {
      title: "Image Gallery",
      description: "Responsive image gallery with lightbox",
      difficulty: "Intermediate",
      code: `
class ImageGallery extends Component {
    constructor(images) {
        super();
        this.state = {
            images,
            selectedImage: null,
            filter: 'all'
        };
    }
    
    openLightbox(image) {
        this.state.selectedImage = image;
        this.update();
    }
    
    closeLightbox() {
        this.state.selectedImage = null;
        this.update();
    }
    
    render() {
        return html\`
            <div class="gallery">
                <div class="gallery-grid">
                    \${this.state.images.map(img => html\`
                        <div class="gallery-item" 
                             onclick="\${() => this.openLightbox(img)}">
                            <img src="\${img.thumb}" alt="\${img.title}">
                        </div>
                    \`)}
                </div>
                
                \${this.state.selectedImage && html\`
                    <div class="lightbox" onclick="\${() => this.closeLightbox()}">
                        <img src="\${this.state.selectedImage.full}">
                    </div>
                \`}
            </div>
        \`;
    }
}`,
    },
    {
      title: "Form Builder",
      description: "Dynamic form generator with validation",
      difficulty: "Advanced",
      code: `
class FormBuilder extends Component {
    constructor() {
        super();
        this.state = {
            fields: [],
            values: {},
            errors: {}
        };
    }
    
    addField(field) {
        this.state.fields.push(field);
        this.update();
    }
    
    validate() {
        const errors = {};
        
        this.state.fields.forEach(field => {
            const value = this.state.values[field.name];
            
            if (field.required && !value) {
                errors[field.name] = 'This field is required';
            }
            
            if (field.pattern && value && !field.pattern.test(value)) {
                errors[field.name] = field.errorMessage || 'Invalid format';
            }
        });
        
        this.state.errors = errors;
        return Object.keys(errors).length === 0;
    }
    
    render() {
        return html\`
            <form class="dynamic-form">
                \${this.state.fields.map(field => this.renderField(field))}
            </form>
        \`;
    }
}`,
    },
    {
      title: "Infinite Scroll",
      description: "Load content as user scrolls",
      difficulty: "Intermediate",
      code: `
class InfiniteScroll extends Component {
    constructor() {
        super();
        this.state = {
            items: [],
            page: 1,
            loading: false,
            hasMore: true
        };
        this.observer = null;
    }
    
    async loadMore() {
        if (this.state.loading || !this.state.hasMore) return;
        
        this.state.loading = true;
        this.update();
        
        const newItems = await fetchItems(this.state.page);
        
        this.state.items = [...this.state.items, ...newItems];
        this.state.page++;
        this.state.hasMore = newItems.length > 0;
        this.state.loading = false;
        this.update();
    }
    
    setupObserver() {
        this.observer = new IntersectionObserver(
            entries => {
                if (entries[0].isIntersecting) {
                    this.loadMore();
                }
            },
            { threshold: 0.1 }
        );
    }
    
    render() {
        return html\`
            <div class="infinite-scroll">
                \${this.state.items.map(item => html\`
                    <div class="item">\${item}</div>
                \`)}
                <div class="loader" ref="\${el => this.observer?.observe(el)}">
                    \${this.state.loading ? 'Loading...' : ''}
                </div>
            </div>
        \`;
    }
}`,
    },
  ];

  return html`
    <div class="examples-page">
      <div class="container">
        <header class="page-header">
          <h1>Code Examples</h1>
          <p>Learn by example with these practical implementations</p>
        </header>

        <div class="examples-filter">
          <button class="filter-btn active" onclick="filterExamples('all')">
            All
          </button>
          <button class="filter-btn" onclick="filterExamples('beginner')">
            Beginner
          </button>
          <button class="filter-btn" onclick="filterExamples('intermediate')">
            Intermediate
          </button>
          <button class="filter-btn" onclick="filterExamples('advanced')">
            Advanced
          </button>
        </div>

        <div class="examples-list">
          ${examples.map(
            (example) => html`
              <div
                class="example-card"
                data-difficulty="${example.difficulty.toLowerCase()}"
              >
                <div class="example-header">
                  <h3>${example.title}</h3>
                  <span
                    class="difficulty-badge ${example.difficulty.toLowerCase()}"
                  >
                    ${example.difficulty}
                  </span>
                </div>
                <p class="example-description">${example.description}</p>
                <div class="example-code">
                  <pre><code>${example.code}</code></pre>
                </div>
                <div class="example-actions">
                  <button
                    class="button primary small"
                    onclick="runExample('${example.title}')"
                  >
                    Try It Live
                  </button>
                  <button
                    class="button secondary small"
                    onclick="copyCode(this)"
                  >
                    Copy Code
                  </button>
                </div>
              </div>
            `,
          )}
        </div>

        <section class="learning-path">
          <h2>Learning Path</h2>
          <div class="path-steps">
            <div class="path-step">
              <div class="step-icon">1</div>
              <h3>Basics</h3>
              <ul>
                <li>Component Structure</li>
                <li>HTML Templating</li>
                <li>Event Handling</li>
              </ul>
            </div>
            <div class="path-step">
              <div class="step-icon">2</div>
              <h3>Intermediate</h3>
              <ul>
                <li>State Management</li>
                <li>Lifecycle Methods</li>
                <li>CSS-in-JS</li>
              </ul>
            </div>
            <div class="path-step">
              <div class="step-icon">3</div>
              <h3>Advanced</h3>
              <ul>
                <li>Custom Elements</li>
                <li>Performance</li>
                <li>Testing</li>
              </ul>
            </div>
          </div>
        </section>

        <section class="resources">
          <h2>Additional Resources</h2>
          <div class="resource-cards">
            <a href="/documentation" class="resource-card">
              <div class="resource-icon">📖</div>
              <h3>API Reference</h3>
              <p>Complete API documentation</p>
            </a>
            <a href="/playground" class="resource-card">
              <div class="resource-icon">🎮</div>
              <h3>Playground</h3>
              <p>Interactive coding environment</p>
            </a>
            <a
              href="https://github.com/akaoio/ui"
              class="resource-card"
              target="_blank"
            >
              <div class="resource-icon">💻</div>
              <h3>Source Code</h3>
              <p>View on GitHub</p>
            </a>
          </div>
        </section>
      </div>
    </div>

    <script>
      window.filterExamples = function (difficulty) {
        const cards = document.querySelectorAll(".example-card");
        const buttons = document.querySelectorAll(".filter-btn");

        buttons.forEach((btn) => {
          btn.classList.remove("active");
          if (btn.textContent.toLowerCase() === difficulty) {
            btn.classList.add("active");
          }
        });

        cards.forEach((card) => {
          if (difficulty === "all" || card.dataset.difficulty === difficulty) {
            card.style.display = "block";
          } else {
            card.style.display = "none";
          }
        });
      };

      window.runExample = function (title) {
        window.location.href =
          "/playground?example=" + encodeURIComponent(title);
      };

      window.copyCode = function (button) {
        const code = button
          .closest(".example-card")
          .querySelector("code").textContent;
        navigator.clipboard.writeText(code);
        button.textContent = "Copied!";
        setTimeout(() => {
          button.textContent = "Copy Code";
        }, 2000);
      };
    </script>
  `;
}
