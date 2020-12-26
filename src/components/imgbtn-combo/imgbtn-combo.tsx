import { Component, Prop, h } from '@stencil/core';
import { getSBUrl, getUrl, capitalizeBreed } from '../../utils/utils'

@Component({
    tag: 'imgbtn-combo',
    styleUrl: 'imgbtn-combo.css',
    shadow: true,
  })

  export class ImgbtnCombo {
    @Prop() breed: string;

    @Prop() subbreed: string;

    sbToggle: boolean = false;
    linkUrl: string;
    imageUrl: string; 
    sbUrl: string;
    private capitalizeBreed(name: string): string {
      return capitalizeBreed(name)
    }
    private getUrl(): string {
      return getUrl(this.breed, this.subbreed);
    }
    private getSBUrl(): string {
      return getSBUrl(this.breed)
    }

    private breedLink(): string {
      if (this.subbreed) {
        this.linkUrl = "/image/" + this.breed +"/" + this.subbreed
        
      }
      else if (this.breed) {
        if (this.sbToggle){
          this.linkUrl = "/"+this.breed
        } else {
          this.linkUrl = "/image/" + this.breed 
        
        }

        
      }
      else {
        this.linkUrl = "/"+this.breed 
        
      }
        
      return this.linkUrl
    }

    async componentWillLoad() {
      const sbResponse = await fetch(this.getSBUrl())
      let sbJson = await sbResponse.json()
      this.sbUrl = await sbJson.message
      if(this.sbUrl.length> 0){
        this.sbToggle = !this.sbToggle
      }
      
      const response = await fetch(this.getUrl());
      let json = await response.json();
      this.imageUrl = await json.message
            
    }

      
    render() {
      return (
        <stencil-route-link url={this.breedLink()}>
      <div  class='imgbtn-combo'>
        <div class='imgbtn'  style={{'background-image': `url(${this.imageUrl})`}} >
          
        </div>
        <p>{this.capitalizeBreed(this.subbreed)?this.capitalizeBreed(this.subbreed) + " " + this.capitalizeBreed(this.breed):this.capitalizeBreed(this.breed)}</p> 
      </div>
      </stencil-route-link>
      )
    }

}