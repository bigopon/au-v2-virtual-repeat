import Aurelia, { RouterConfiguration } from 'aurelia';
import { MyApp } from './my-app';
import { DefaultVirtualRepeatConfiguration, VirtualRepeat } from 'aurelia-v2-virtual-repeat';
import { Scrollbar } from './shared/scrollbar';

VirtualRepeat.prototype['created'] = function() {
  window['virtualRepeat'] = this;
};

Aurelia
  .register(
    RouterConfiguration,
    DefaultVirtualRepeatConfiguration,
    Scrollbar,
  )
  // To use HTML5 pushState routes, replace previous line with the following
  // customized router config.
  // .register(RouterConfiguration.customize({ useUrlFragmentHash: false }))
  .app(MyApp)
  .start();
