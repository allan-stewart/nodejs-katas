var luhn = require('../luhn.js');
var should = require('should');

describe('luhn kata', function () {
	describe('when calculating value for an odd-indexed digit', function () {
		it('returns 0 when given 0', function () {
			luhn.valueForOddIndexedDigit(0).should.equal(0);
		});
		it('returns 5 when given 5', function () {
			luhn.valueForOddIndexedDigit(5).should.equal(5);
		});
		it('returns 9 when given 9', function () {
			luhn.valueForOddIndexedDigit(9).should.equal(9);
		});
	});
	describe('when calculating value for an even-indexed digit', function () {
		it('returns 2 when given 1', function () {
			luhn.valueForEvenIndexedDigit(1).should.equal(2);
		});
		it('returns 3 when given 6', function () {
			luhn.valueForEvenIndexedDigit(6).should.equal(3);
		});
	});
	describe('when summing digits', function () {
		it('returns 1 when given 10', function () {
			luhn.sumDigits(10).should.equal(1);
		});
		it('returns 1 when given 10', function () {
			luhn.sumDigits(11).should.equal(2);
		});
	});
	describe('when getting a value from the account number', function () {
		it('returns 2 when given 1', function () {
			luhn.getAccountNumberValue(1).should.equal(2);
		});
		it('returns 1 when given 10', function () {
			luhn.getAccountNumberValue(10).should.equal(1);
		});
	});
	describe('when generating the check digit', function () {
		it('returns 8 when given 1', function () {
			luhn.generateCheckDigit(1).should.equal(8);
		});
		it('returns 9 when given 10', function () {
			luhn.generateCheckDigit(10).should.equal(9);
		});
		it('returns 1 when given 411111111111111', function () {
			luhn.generateCheckDigit(411111111111111).should.equal(1);
		});
		it('returns 0 when given 57', function () {
			luhn.generateCheckDigit(57).should.equal(0);
		});
	});
});
