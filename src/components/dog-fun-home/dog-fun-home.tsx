import { Component, h, Prop } from '@stencil/core';
import { MatchResults } from '@stencil/router';

@Component({
  tag: 'dog-fun-home',
  styleUrl: 'dog-fun-home.css',
  shadow: true,
})




export class DogFunHome {
  
  @Prop() breed: string
  @Prop() subbreed: string
  @Prop() match: MatchResults;

  render() {
    return (
      <div class="dog-fun-home">
        <h2>Welcome the best random dog image website. Click on an image to search by breed/subbreed.</h2>
        
        <image-gallery breed={this.match.params.breed} subbreed={this.match.params.subbreed}></image-gallery>
      </div>
    );
  }
}
