import { BROWSER } from "../Utils/environments.js";
// import { SPLASH } from "UIs/Vanilla/components/splash/index.js";

export function splash(state = false) {
  if (!BROWSER) return;
  // Splash functionality disabled for now
  // Can be implemented with a custom splash component
  return state;
}
