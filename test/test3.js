const assert = require('assert');

describe('SECRET_KEY', function() {
    it('ACTION_TEST_SECRET should be correct', function() {
      console.log({ processEnvACTION_TEST_SECRET: process.env.ACTION_TEST_SECRET })
      assert.equal(process.env.ACTION_TEST_SECRET, 'ThisIsMyActionTestSecret');
    })
})