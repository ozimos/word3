const myApp = require('../src/words');


const assert = require('chai').assert;

describe('words', () => {
  it('returns an object', () => {
    assert.deepEqual(myApp.words('olly olly in come free'), {
      olly: 2,
      in: 1,
      come: 1,
      free: 1
    });
  });
});
