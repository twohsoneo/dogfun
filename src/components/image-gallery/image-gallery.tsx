import { Component, Prop, h } from '@stencil/core';
//import { getUrl, capitalizeBreed } from '../../utils/utils'
//import { ImgbtnCombo } from '../imgbtn-combo/imgbtn-combo';

@Component({
    tag: 'image-gallery',
    styleUrl: 'image-gallery.css',
    shadow: true,
  })

export class ImageGallery {

@Prop() breed: string;
dogsUrl = 'https://dog.ceo/api/breeds/list/all';
dogsSubUrlStart = 'https://dog.ceo/api/breed/';
dogsSubUrlEnd = '/list';
dogsArray:string[];
@Prop() subbreed:string;
dogsList: string[];
dogsMap: string[];


async componentWillLoad() {
    if (this.breed){
        var subbreedUrl = this.dogsSubUrlStart + this.breed + this.dogsSubUrlEnd
        var response = await fetch(subbreedUrl)
        
        let json = await response.json();
        this.dogsList = await json.message
        this.dogsMap = this.dogsList.map((subbreed)=> 
        <imgbtn-combo class="flexbox" breed={this.breed} subbreed={subbreed}></imgbtn-combo>
        )
    }else {
        var response = await fetch(this.dogsUrl);
            
        let json = await response.json();
        this.dogsArray = await json.message

        this.dogsList = Object.keys(this.dogsArray)
        this.dogsMap = this.dogsList.map((breed)=> 
        <imgbtn-combo class="flexbox" breed={breed}></imgbtn-combo>
    )
    }





  }


//  dogImageMap = this.dogsArray.map()
 

render() {
return <div class='image-gallery'>
  {this.dogsMap}

</div>;
    }
}