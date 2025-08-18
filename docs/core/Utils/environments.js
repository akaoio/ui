// Environment detection utilities

export const BROWSER =
  typeof window !== "undefined" && typeof document !== "undefined";
export const NODE =
  typeof process !== "undefined" && process.versions && process.versions.node;
export const WEB_WORKER =
  typeof self === "object" &&
  self.constructor &&
  self.constructor.name === "DedicatedWorkerGlobalScope";

export default {
  BROWSER,
  NODE,
  WEB_WORKER,
};
