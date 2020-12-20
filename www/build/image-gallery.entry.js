import { r as registerInstance, h } from './index-0626a90e.js';

const imageGalleryCss = ".image-gallery{display:flex;flex-wrap:wrap;justify-content:space-around;align-content:space-around}";

const ImageGallery = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.dogsUrl = 'https://dog.ceo/api/breeds/list/all';
    this.dogsSubUrlStart = 'https://dog.ceo/api/breed/';
    this.dogsSubUrlEnd = '/list';
  }
  async componentWillLoad() {
    if (this.breed) {
      var subbreedUrl = this.dogsSubUrlStart + this.breed + this.dogsSubUrlEnd;
      var response = await fetch(subbreedUrl);
    }
    else {
      var response = await fetch(this.dogsUrl);
    }
    let json = await response.json();
    this.dogsArray = await json.message;
    this.dogsList = Object.keys(this.dogsArray);
    this.dogsMap = this.dogsList.map((name) => h("imgbtn-combo", { class: "flexbox", breed: name }));
    console.log(this.dogsMap);
  }
  //  dogImageMap = this.dogsArray.map()
  render() {
    return h("div", { class: 'image-gallery' }, this.dogsMap);
  }
};
ImageGallery.style = imageGalleryCss;

export { ImageGallery as image_gallery };
