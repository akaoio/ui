// AKAO UI Framework
// A powerful vanilla JavaScript UI framework with Web Components

// Core UI functions
export { html, css, init, render } from './core/UI.js'

// CSS utilities
export * as animations from './css/animations/index.js'
export * as elements from './css/elements/index.js'
export { default as globalCSS } from './css/global.css.js'
export { default as darkTheme } from './css/dark.css.js'
export { default as lightTheme } from './css/light.css.js'
export { default as vars } from './css/vars.css.js'

// Component utilities
export { Component } from './core/Component.js'

// Version
export const version = '1.0.0'