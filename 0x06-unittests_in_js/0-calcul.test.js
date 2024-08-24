const calculateNumber = require('./0-calcul.js');
const assert = require('assert');

describe("Calculates sum of two numbers", function () {
  it("checks sum of two Numbers", function () {
    assert.equal(calculateNumber(1, 3), 4);
  });
  it("Checks sum of one floating number and Number", function () {
    assert.equal(calculateNumber(1.4, 3), 4);
  });
  it("Checks sum of two floats each rounded before summation", function () {
    assert.equal(calculateNumber(1.5, 1.2), 3);
    assert.notEqual(calculateNumber(1.5, 1.2), 2.7);
    assert.equal(calculateNumber(2.5, 1.5), 5);
  });
  it("Checks sum of two zeros", function () {
    assert.equal(calculateNumber(0, 0), 0);
    assert.equal(calculateNumber(0.0, 0.0), 0);
  });
});
