import { Component, Prop, h} from '@stencil/core';
import { MatchResults } from '@stencil/router';
import { capitalizeBreed, getUrl } from '../../utils/utils'


@Component({
    tag: 'popup-image',
    styleUrl: 'popup-image.css',
    assetsDirs: ['assets'],
    shadow: false,
  })

  export class PopupImage {

    @Prop() match: MatchResults;
    breed: string;
    subbreed: string;

    tempUrl:string;
    mailTo: string;
    imageUrl: string;
    async componentWillLoad() {
      this.breed= this.match.params.breed
      this.subbreed = this.match.params.subbreed
      this.tempUrl = getUrl(this.breed, this.subbreed);
      const response = await fetch(this.tempUrl);
      let json = await response.json();
      this.imageUrl = await json.message
      this.mailTo = "mailto:?subject=Fun%20Dog%20Images&body=" + this.imageUrl
    }

    

      
    render() {
      return (
      
      <div>
        <div class="popup-image">
        <h2>Here is your random image</h2>
        <h3>{capitalizeBreed(this.breed)} {capitalizeBreed(this.subbreed)}</h3>
        <img src={this.imageUrl}></img>
        
        </div>
        
        <div>
          <h2>Share:</h2>
          <a href={this.mailTo} title="Share by Email"><i class="fas fa-envelope-square"></i></a>
          <a target="_blank" href="https://twitter.com/share?ref_src=twsrc%5Etfw" class="twitter-share-button" data-show-count="false">
            <i class="fab fa-twitter-square"></i>
          </a>
          <a target="_blank" href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fdevelopers.facebook.com%2Fdocs%2Fplugins%2F&amp;src=sdkpreparse" class="fb-xfbml-parse-ignore">
            <i class="fab fa-facebook-square"></i>
            </a>
          
        </div>
        


      </div>
      
      )
    }

}