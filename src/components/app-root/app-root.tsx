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
              <stencil-route url="/:breed" component="dog-fun-home"/>
              <stencil-route url="/breed/:subbreed" component="dog-fun-home" />
              <stencil-route url="/image" component="imgbtn-combo" />
            </stencil-route-switch>
          </stencil-router>
        </main>
      </div>
    );
  }
}