import { Component, Prop, h } from '@stencil/core';
import { MatchResults } from '@stencil/router';
import { capitalizeBreed, getUrl } from '../../utils/utils'

@Component({
    tag: 'popup-image',
    styleUrl: 'popup-image.css',
    shadow: true,
  })

  export class PopupImage {

    @Prop() match: MatchResults;
    breed: string;
    subbreed: string;

    tempUrl:string;

    imageUrl: string;
    async componentWillLoad() {
      this.breed= this.match.params.breed
      this.subbreed = this.match.params.subbreed
      this.tempUrl = getUrl(this.breed, this.subbreed);
      const response = await fetch(this.tempUrl);
      let json = await response.json();
      this.imageUrl = await json.message
    }

      
    render() {
      return <div class="popup-image">
        <h2>Here is your random image</h2>
        <h3>{capitalizeBreed(this.breed)} {capitalizeBreed(this.subbreed)}</h3>
        <img src={this.imageUrl}></img>
        
      </div>
    }

}