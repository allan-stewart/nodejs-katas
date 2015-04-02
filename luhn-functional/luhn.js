exports.valueForOddIndexedDigit = function (digit) {
	return digit;
};

exports.valueForEvenIndexedDigit = function (digit) {
	return exports.sumDigits(2 * digit);
};

exports.sumDigits = function (number) {
	return sum(splitDigits(number));
};

function splitDigits(number) {
	return ('' + number).split('').map(function (x) {
		return parseInt(x, 10);
	});
}

function sum(array) {
	return array.reduce(function (total, value) { return total + value; }, 0);
}

exports.getAccountNumberValue = function (number) {
	var digits = splitDigits(number).reverse();
	var values = digits.map(function (digit, index) {
		var even = index % 2 == 0;
		return even ?
			exports.valueForEvenIndexedDigit(digit) :
			exports.valueForOddIndexedDigit(digit);
	});	
	return sum(values);
};

exports.generateCheckDigit = function (accountNumber) {
	return (10 - exports.getAccountNumberValue(accountNumber) % 10) % 10;
};
