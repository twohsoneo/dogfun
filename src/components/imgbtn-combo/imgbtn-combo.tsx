import { Component, Prop, h } from '@stencil/core';
import { getUrl, capitalizeBreed } from '../../utils/utils'

@Component({
    tag: 'imgbtn-combo',
    styleUrl: 'imgbtn-combo.css',
    shadow: true,
  })

  export class ImgbtnCombo {
    @Prop() breed: string;

    @Prop() subbreed: string;

    

    imageUrl: string; 
    private capitalizeBreed(name: string): string {
      return capitalizeBreed(name)
    }
    private getUrl(): string {
      return getUrl(this.breed, this.subbreed);
    }


    async componentWillLoad() {
      const response = await fetch(this.getUrl());
      let json = await response.json();
      this.imageUrl = await json.message
    }

      
    render() {
      return <div  class='imgbtn-combo'>
        <div class='imgbtn' style={{'background-image': `url(${this.imageUrl})`}} >
          
        </div>
        <p>{this.capitalizeBreed(this.subbreed)?this.capitalizeBreed(this.subbreed) + " " + this.capitalizeBreed(this.breed):this.capitalizeBreed(this.breed)}</p> 
      </div>;
    }

}