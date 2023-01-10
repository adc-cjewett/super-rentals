import { _deprecatedExperimentsDeprecationsIssued } from 'ember-cli/lib/experiments';
import { module, test } from 'qunit';
import { setupTest } from 'super-rentals/tests/helpers';

module('Unit | Model | rental', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    const model = this.owner.lookup('service:store').createRecord('rental');
    assert.true(true, 'boolean true');
  });
});
