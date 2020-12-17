import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Controller | play', function(hooks) {
  setupTest(hooks);

  test('property resource should be updated on setResource action', function(assert) {
    let controller = this.owner.lookup('controller:play');
    assert.equal(
      controller.resource,
      'people',
      'default value of resource'
    );
    controller.setResource('starships');
    assert.equal(
      controller.resource,
      'starships',
      'value of resource was changed'
    );

  });

  test('properties idLeft and idRight should be updated on setResource action', function(assert) {
    let controller = this.owner.lookup('controller:play');
    assert.equal(
      controller.idLeft,
      null,
      'default value of idLeft'
    );
    assert.equal(
      controller.idRight,
      null,
      'default value of idLeft'
    );
    controller.applyGame();
    assert.notEqual(
      controller.idLeft,
      null,
      'value of idRight was changed'
    );
    assert.notEqual(
      controller.idLeft,
      null,
      'value of idRight was changed'
    );

  });
});
