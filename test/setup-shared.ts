import { BrowserPlatform } from '@aurelia/platform-browser';
import { setPlatform } from '@aurelia/testing';

export function $setup(platform: BrowserPlatform) {
  setPlatform(platform);
  BrowserPlatform.set(globalThis, platform);
}
