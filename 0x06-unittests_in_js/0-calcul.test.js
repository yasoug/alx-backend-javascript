const assert = require('assert');
const calculateNumber = require('./0-calcul.js');

describe('calculateNumber', () => {
  it('rounding a', () => {
    assert.equal(calculateNumber(1.4, 1), 2);
    assert.equal(calculateNumber(2.6, 2), 5);
  });

  it('rounding b', () => {
    assert.equal(calculateNumber(0, 1.4), 1);
    assert.equal(calculateNumber(1, 1.7), 3);
  });
