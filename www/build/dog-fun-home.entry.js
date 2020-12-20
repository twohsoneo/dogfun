import { r as registerInstance, h } from './index-6113ce3c.js';

const dogFunHomeCss = "";

const DogFunHome = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return (h("div", { class: "dog-fun-home" }, h("image-gallery", { breed: this.breed })));
  }
};
DogFunHome.style = dogFunHomeCss;

export { DogFunHome as dog_fun_home };
