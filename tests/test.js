import words from '../src/words';

const {
  assert
} = require('chai').assert;

describe('words', () => {
  it('returns an object', () => {
    assert.isObject(words('A sentence'));
  });
});
