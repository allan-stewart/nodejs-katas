var roman = require('../lib/roman.js');
var assert = require('assert');

describe('toRoman', function () {
	it('converts 1 to I', function () {
		assert.equal(roman.toRoman(1), 'I');
	});
	
	it('converts 2 to II', function () {
		assert.equal(roman.toRoman(2), 'II');
	});
	
	it('converts 4 to IV', function() {
		assert.equal(roman.toRoman(4), 'IV');
	});
	
	it('converts 5 to V', function () {
		assert.equal(roman.toRoman(5), 'V');
	});
	
	it('converts 10 to X', function () {
		assert.equal(roman.toRoman(10), 'X');
	});
	
	it('converts 20 to XX', function() {
		assert.equal(roman.toRoman(20), 'XX');
	});
	
	it('converts 38 to XXXVIII', function () {
		assert.equal(roman.toRoman(38), 'XXXVIII');
	});
});
