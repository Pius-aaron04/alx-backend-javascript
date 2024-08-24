const calcul = require('./1-calcul.js');
const assert = require('assert');


describe('Tests on calculateNumber', function () {
  // tests suites on sum
  describe('SUM', function () {
    it('Calculate the sum of two integers', function (){
      assert.equal(calcul('SUM', 2, 4), 6);
      assert.equal(calcul('SUM', 1, 4), 5);
   });

    it('Calculate the sum of two floats rounded', function () {
      assert.equal(calcul('SUM', 1.4, 1.5), 3);
      assert.equal(calcul('SUM', 0.8, 2.02), 3);
    });
  });

  // tests suites on subtraction
  describe('SUBTRACT', function () {
    it('Calculate the  of two integers', function (){
      assert.equal(calcul('SUBTRACT', 2, 4), -2);
      assert.equal(calcul('SUBTRACT', 4, 1), 3);
   });

    it('Calculate the difference of two floats rounded', function () {
      assert.equal(calcul('SUBTRACT', 1.4, 1.5), -1);
      assert.equal(calcul('SUBTRACT', 0.8, 2.02), -1);
    });

  });

  // tests suites on division
  describe('DIVIDE', function () {
  it('calculate the quotient of two integers', function (){
      assert.equal(calcul('DIVIDE', 2, 4), 0.5);
      assert.equal(calcul('DIVIDE', 1, 4), 0.25);
   });

    it('Calculte the quotuent of two floats rounded', function () {
      assert.equal(calcul('DIVIDE', 1.4, 1.5), 0.5);
      assert.equal(calcul('DIVIDE', 0.0, 1.0), 0);
      assert.equal(calcul('DIVIDE', 2.02, 0.8), 2);
      assert.equal(calcul('DIVIDE', Infinity, 0.8), Infinity);
    });

  });

  // tests suites on invalid operation type
  describe('Invalid Operaions', function () {
    it('Catch invalid operation type', function () {
      assert.equal(calcul('MUL', 1.2, 1.4), 'Error');
    });
    it('Catch Zero division', function () {
      assert.equal(calcul('DIVIDE', 2, 0.0), 'Error');
      assert.equal(calcul('DIVIDE', 2.0, 0.0), 'Error');
      assert.equal(calcul('DIVIDE', 2.0, 0), 'Error');
      assert.equal(calcul('DIVIDE', 0.0, 0.0), 'Error');
    });
  });
});
