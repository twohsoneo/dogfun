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
        <image-gallery breed={this.match.params.breed} subbreed={this.match.params.subbreed}></image-gallery>
      </div>
    );
  }
}
