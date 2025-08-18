/**
 * Base Component class for AKAO UI Framework
 * Provides common functionality for all components
 */
export class Component extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this._listeners = new Map();
  }

  /**
   * Helper method to add event listeners that are automatically cleaned up
   */
  addListener(element, event, handler) {
    if (!this._listeners.has(element)) {
      this._listeners.set(element, new Map());
    }

    const elementListeners = this._listeners.get(element);
    if (elementListeners.has(event)) {
      // Remove existing listener for this event
      element.removeEventListener(event, elementListeners.get(event));
    }

    elementListeners.set(event, handler);
    element.addEventListener(event, handler);
  }

  /**
   * Clean up all event listeners
   */
  removeAllListeners() {
    this._listeners.forEach((events, element) => {
      events.forEach((handler, event) => {
        element.removeEventListener(event, handler);
      });
    });
    this._listeners.clear();
  }

  /**
   * Lifecycle: Called when element is added to DOM
   */
  connectedCallback() {
    // Override in subclasses
  }

  /**
   * Lifecycle: Called when element is removed from DOM
   */
  disconnectedCallback() {
    this.removeAllListeners();
    // Override in subclasses for additional cleanup
  }

  /**
   * Helper to query shadow DOM
   */
  $(selector) {
    return this.shadowRoot.querySelector(selector);
  }

  /**
   * Helper to query all in shadow DOM
   */
  $$(selector) {
    return this.shadowRoot.querySelectorAll(selector);
  }
}
