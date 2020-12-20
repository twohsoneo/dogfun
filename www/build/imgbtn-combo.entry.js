import { r as registerInstance, h } from './index-6113ce3c.js';

function format(first, middle, last) {
  return (first || '') + (middle ? ` ${middle}` : '') + (last ? ` ${last}` : '');
}
function getUrl(breed, subbreed) {
  let urlString = "https://dog.ceo/api/breed/";
  if (breed) {
    urlString += breed + '/';
  }
  if (subbreed) {
    urlString += subbreed + '/';
  }
  urlString += "images/random";
  return urlString;
}
function capitalizeBreed(name) {
  if (name) {
    return name.substr(0, 1).toUpperCase() + name.substr(1).toLowerCase();
  }
  return '';
}

const imgbtnComboCss = ":host{display:block;color:black;text-shadow:1px 0 0 #fff, 0 -1px 0 #fff, 0 1px 0 #fff, -1px 0 0 #fff}.imgbtn-combo{width:150px;height:150px;position:relative}.imgbtn{height:100px;width:100px;border-radius:5%;opacity:0.7;background-size:cover;text-align:center;padding:25px}.imgbtn:hover{opacity:1.0}.imgbtn-combo p{position:absolute;top:50%;width:100%;text-align:center;font-size:18px}";

const ImgbtnCombo = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  capitalizeBreed(name) {
    return capitalizeBreed(name);
  }
  getUrl() {
    return getUrl(this.breed, this.subbreed);
  }
  async componentWillLoad() {
    const response = await fetch(this.getUrl());
    let json = await response.json();
    this.imageUrl = await json.message;
  }
  render() {
    return h("div", { class: 'imgbtn-combo' }, h("div", { class: 'imgbtn', style: { 'background-image': `url(${this.imageUrl})` } }), h("p", null, this.capitalizeBreed(this.subbreed) ? this.capitalizeBreed(this.subbreed) + " " + this.capitalizeBreed(this.breed) : this.capitalizeBreed(this.breed)));
  }
};
ImgbtnCombo.style = imgbtnComboCss;

export { ImgbtnCombo as imgbtn_combo };
