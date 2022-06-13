const assert = require('assert');

describe('SECRET_KEY', function() {
    it('ACTION_TEST_SECRET should be correct', function() {
      console.dir( process.env )
      assert.equal(process.env.ACTION_TEST_SECRET, 'ThisIsMyActionTestSecret');
    })
})