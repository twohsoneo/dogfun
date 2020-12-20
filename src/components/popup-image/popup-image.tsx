import { Component, Prop, h } from '@stencil/core';
import { MatchResults } from '@stencil/router';
import { getUrl } from '../../utils/utils'

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
      console.log(this.subbreed)
      this.tempUrl = getUrl(this.breed, this.subbreed);
      console.log(this.tempUrl)
      const response = await fetch(this.tempUrl);
      let json = await response.json();
      this.imageUrl = await json.message
      console.log(this.imageUrl)
    }

      
    render() {
      return <img src={this.imageUrl}></img>;
    }

}