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

export { capitalizeBreed as c, format as f, getUrl as g };
