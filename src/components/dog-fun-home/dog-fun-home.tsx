import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'dog-fun-home',
  styleUrl: 'dog-fun-home.css',
  shadow: true,
})




export class DogFunHome {
  @Prop() breed: string
  render() {
    return (
      <div class="dog-fun-home">
        <image-gallery breed={this.breed}></image-gallery>
      </div>
    );
  }
}
