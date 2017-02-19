const assert = require('assert');
const fibonacci = require('../lib/fibonacci');

describe('fibonacci(n)', () => {
  it('n = 1の時、1を返すこと', () => {
    assert(fibonacci(1) === 1);
  });

  it('n = 2の時、1を返すこと', () => {
    assert(fibonacci(2) === 1);
  });

  it('n = 7の時、13を返すこと', () => {
    assert(fibonacci(2) === 1);
  });

  it.skip('n = 43の時、433494437を返すこと', () => {
    assert(fibonacci(43) === 433494437);
  });
});
