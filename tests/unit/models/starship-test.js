import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Model | starship', function(hooks) {
  setupTest(hooks);

  // Replace this with your real tests.
  test('propert crew was parsed', function(assert) {
    let store = this.owner.lookup('service:store');
    let starships1 = store.createRecord('starships', {crew: '4'});
    assert.equal(starships1.get('metric'), 4, 'crew was parsed');

    let starships2 = store.createRecord('starships', {crew: '4-100'});
    assert.equal(starships2.get('metric'), 100, 'crew with \'-\' was parsed');

    let starships3 = store.createRecord('starships', {crew: '4,100'});
    assert.equal(starships3.get('metric'), 104, 'crew with \',\' was parsed');
  });
});
