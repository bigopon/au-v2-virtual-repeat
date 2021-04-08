import Aurelia, { RouterConfiguration } from 'aurelia';
import { MyApp } from './my-app';
import { VirtualRepeat } from './virtual-repeat/virtual-repeat';
import { CollectionStrategyLocator } from './virtual-repeat/collection-strategy';
import { ScrollerObserverLocator } from './virtual-repeat/scroller-observer';
import { DefaultDomRenderer } from './virtual-repeat/virtual-repeat-dom-renderer';
import { Scrollbar } from './shared/scrollbar';

VirtualRepeat.prototype['created'] = function() {
  window['virtualRepeat'] = this;
};

Aurelia
  .register(
    RouterConfiguration,
    // ...DefaultComponents,
    ScrollerObserverLocator,
    CollectionStrategyLocator,
    DefaultDomRenderer,
    VirtualRepeat,
    Scrollbar,
  )
  // To use HTML5 pushState routes, replace previous line with the following
  // customized router config.
  // .register(RouterConfiguration.customize({ useUrlFragmentHash: false }))
  .app(MyApp)
  .start();
