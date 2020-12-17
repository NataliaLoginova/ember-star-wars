import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | card', function(hooks) {
  setupRenderingTest(hooks);

  test('should be shown title, default message, badge should not be visible', async function(assert) {
    assert.expect(3);

    this.set('metric', null);
    this.set('resource', 'people');
    this.set('isWin', false);
    await render(hbs`<Card @resource={{this.resource}} @metric={{this.metric}} @isWin={{this.isWin}}/>`);
    assert.dom('.card-text').hasText('data were not loaded');
    assert.dom('.card-title').hasText('Card with people');
    assert.dom('.badge').doesNotExist();

  });

  test('should be shown title, metric and badge should be visible', async function(assert) {
    assert.expect(3);

    this.set('metric', 12);
    this.set('resource', 'starships');
    this.set('isWin', true);
    await render(hbs`<Card @resource={{this.resource}} @metric={{this.metric}} @isWin={{this.isWin}}/>`);
    assert.dom('.card-text').hasText('Metric: 12');
    assert.dom('.card-title').hasText('Card with starships');
    assert.dom('.badge').exists();

  });
});
