import { createFixture, assert } from '@aurelia/testing';
import { DefaultVirtualRepeatConfiguration, VirtualRepeat } from '../src/index';
import './setup-browser';

describe('virtual-repeat', function () {
  const virtualRepeats: VirtualRepeat[] = [];

  beforeAll(() => {
    VirtualRepeat.prototype.created = function() {
      virtualRepeats.push(this);
    };
  });

  beforeEach(() => {
    virtualRepeats.length = 0;
  });

  it('renders', async function () {
    const { startPromise, tearDown } = createFixture(
      '<div style="height: 600px; overflow: auto;"><div virtual-repeat.for="item of items" style="height: 50px">${item}</div></div>',
      class App {
        items = Array.from({ length: 100 }, (_, idx) => {
          return { idx, name: 'item ' + idx };
        });
      },
      [DefaultVirtualRepeatConfiguration]
    );

    await startPromise;

    const virtualRepeat = virtualRepeats[0];
    const { top, bottom } = virtualRepeat['dom'];

    assert.strictEqual(top.style.height, '0px');
    assert.strictEqual(bottom.style.height, ((100 - (600 / 50) * 2) * 50) + 'px');

    await tearDown();
  })
});

