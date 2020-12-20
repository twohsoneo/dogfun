import { r as registerInstance, h } from './index-6113ce3c.js';

const appRootCss = "h1{text-align:center}";

const AppRoot = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return (h("div", null, h("header", null, h("h1", null, "Dog Fun Image Site")), h("main", null, h("stencil-router", null, h("stencil-route-switch", { scrollTopOffset: 0 }, h("stencil-route", { url: "/", component: "dog-fun-home", exact: true }), h("stencil-route", { url: "/image/:breed/:subbreed", component: "popup-image" }), h("stencil-route", { url: "/:breed", component: "dog-fun-home" }))))));
  }
};
AppRoot.style = appRootCss;

export { AppRoot as app_root };
