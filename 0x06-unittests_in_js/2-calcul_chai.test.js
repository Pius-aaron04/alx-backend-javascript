// this file contains test suite for CalculateNumer function

const expect = require('chai').expect;
const calculateNumber = require('./2-calcul_chai.js');


describe('Tests on calculateNumber', function () {
  // tests suites on sum
  describe('SUM', function () {
    it('Calculate the sum of two integers', function (){
      expect(calculateNumber('SUM', 2, 4)).to.equal(6);
      expect(calculateNumber('SUM', 1, 4)).to.equal(5);
   });

    it('Calculate the sum of two floats rounded', function () {
      expect(calculateNumber('SUM', 1.4, 1.5)).to.equal(3);
      expect(calculateNumber('SUM', 0.8, 2.02)).to.equal(3);
    });
  });

  // tests suites on subtraction
  describe('SUBTRACT', function () {
    it('Calculate the  of two integers', function (){
      expect(calculateNumber('SUBTRACT', 2, 4)).to.equal(-2);
      expect(calculateNumber('SUBTRACT', 4, 1)).to.equal(3);
   });

    it('Calculate the difference of two floats rounded', function () {
      expect(calculateNumber('SUBTRACT', 1.4, 1.5)).to.equal(-1);
      expect(calculateNumber('SUBTRACT', 0.8, 2.02)).to.equal(-1);
    });

  });

  // tests suites on division
  describe('DIVIDE', function () {
  it('calculate the quotient of two integers', function (){
      expect(calculateNumber('DIVIDE', 2, 4)).to.equal(0.5);
      expect(calculateNumber('DIVIDE', 1, 4)).to.equal(0.25);
   });

    it('Calculte the quotuent of two floats rounded', function () {
      expect(calculateNumber('DIVIDE', 1.4, 1.5)).to.equal(0.5);
      expect(calculateNumber('DIVIDE', 0.0, 1.0)).to.equal(0);
      expect(calculateNumber('DIVIDE', 2.02, 0.8)).to.equal(2);
      expect(calculateNumber('DIVIDE', Infinity, 0.8)).to.equal(Infinity);
    });

  });

  // tests suites on invalid operation type
  describe('Invalid Operaions', function () {
    it('Catch invalid operation type', function () {
      expect(calculateNumber('MUL', 1.2, 1.4)).to.equal('Error');
    });
    it('Catch Zero division', function () {
      expect(calculateNumber('DIVIDE', 2, 0.0)).to.equal('Error');
      expect(calculateNumber('DIVIDE', 2.0, 0.0)).to.equal('Error');
      expect(calculateNumber('DIVIDE', 2.0, 0)).to.equal('Error');
      expect(calculateNumber('DIVIDE', 0.0, 0.0)).to.equal('Error');
    });
  });
});
