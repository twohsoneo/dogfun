import { r as registerInstance, h } from './index-6113ce3c.js';

const dogFunHomeCss = "";

const DogFunHome = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return (h("div", { class: "dog-fun-home" }, h("image-gallery", { breed: this.match.params.breed, subbreed: this.match.params.subbreed })));
  }
};
DogFunHome.style = dogFunHomeCss;

export { DogFunHome as dog_fun_home };
