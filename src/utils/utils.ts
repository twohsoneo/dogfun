export function format(first: string, middle: string, last: string): string {
  return (first || '') + (middle ? ` ${middle}` : '') + (last ? ` ${last}` : '');
}

export function getUrl(breed: string, subbreed:string){
  let urlString = "https://dog.ceo/api/breed/"
  if (breed) {
		urlString += breed + '/'
	} 
	if (subbreed) {
		urlString += subbreed + '/'
	}
	urlString += "images/random"
	return urlString
}

export function capitalizeBreed(name: string) {
	if (name) {
		return name.substr(0,1).toUpperCase() + name.substr(1).toLowerCase();
	}
	return '';
}

