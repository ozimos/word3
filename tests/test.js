import words from '../src/words';

const {
  assert
} = require('chai').assert;

describe('words', () => {
  it('returns an object', () => {
    assert.deepEqual(words('A sentence'), {
      A: 1,
      sentence: 1
    });
  });
});
