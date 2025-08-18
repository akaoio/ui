import { BROWSER } from "../Utils/environments.js";

export async function render(element, target) {
  if (!BROWSER) return;
  // Simple render function that appends element to target
  if (target && element) {
    if (typeof element === 'string') {
      target.innerHTML = element;
    } else if (element instanceof Node) {
      target.innerHTML = '';
      target.appendChild(element);
    }
  }
}

export default render;
