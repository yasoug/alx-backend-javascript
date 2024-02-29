const assert = require("assert");
const calculateNumber = require("./0-calcul.js");

describe('calculateNumber', () => {
  it('round the first argument', () => {
    assert.equal(calculateNumber(1.3, 0), 1);
  });

  it('round the second argument', () => {
    assert.equal(calculateNumber(1, 1.7), 3);
  });

  it('round both arguments', () => {
    assert.equal(calculateNumber(1.3, 1.7), 3);
  });
});
