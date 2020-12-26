import { Component, h } from '@stencil/core';

@Component({
  tag: 'app-root',
  styleUrl: 'app-root.css',
  shadow: true,
})
export class AppRoot {
  render() {
    return (
      <div>
        <header>
          <h1>Dog Fun Image Site</h1>
        </header>

        <main>
        
          <stencil-router>
            <stencil-route-switch scrollTopOffset={0}>
              <stencil-route url="/" component="dog-fun-home" exact={true} />
              <stencil-route url="/image/:breed/:subbreed" component="popup-image" />
              <stencil-route url="/image/:breed" component="popup-image" />
              <stencil-route url="/:breed" component="dog-fun-home"/>
            </stencil-route-switch>
          </stencil-router>
          <stencil-route-link url='/'><button>Start Over</button></stencil-route-link>
          </main>

      </div>
    );
  }
}