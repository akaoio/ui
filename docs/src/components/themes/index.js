import template from "./template.js"

export class THEMES extends HTMLElement {
    constructor() {
        super()
        this.attachShadow({ mode: "open" })
        this.shadowRoot.appendChild(template.cloneNode(true))
    }

    connectedCallback() {
        const button = this.shadowRoot.querySelector("button")
        const currentTheme = document.documentElement.getAttribute('data-theme') || 'light'
        button.classList.add(currentTheme)
        
        button.addEventListener("click", () => {
            const currentTheme = document.documentElement.getAttribute('data-theme') || 'light'
            const newTheme = currentTheme === "dark" ? "light" : "dark"
            document.documentElement.setAttribute('data-theme', newTheme)
            button.classList.remove(currentTheme)
            button.classList.add(newTheme)
        })
    }
}

customElements.define("ui-themes", THEMES)

export default THEMES