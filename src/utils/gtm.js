// src/utils/gtm.js
export function pushEcomEvent(evtName, payload = {}) {
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push(Object.assign({ event: evtName }, payload));
}
