import { html } from "../../core/UI.js"

export class SVG extends HTMLElement {
    constructor() {
        super()
        this.attachShadow({ mode: "open" })
    }

    connectedCallback() {
        const src = this.getAttribute("src")
        if (src) {
            fetch(src)
                .then(response => response.text())
                .then(svg => {
                    this.shadowRoot.innerHTML = svg
                })
                .catch(err => {
                    console.error("Failed to load SVG:", err)
                })
        }
    }
}

customElements.define("ui-svg", SVG)

export default SVG