var numerals = [
    {value: 10, numeral: 'X'},
    {value: 9, numeral: 'IX'},
	{value: 5, numeral: 'V'},
	{value: 4, numeral: 'IV'},
	{value: 1, numeral: 'I'}
];

exports.toRoman = function (input) {
	var output = '';
	for (var index = 0; index < numerals.length; index++) {
		while (input >= numerals[index].value) {
			input -= numerals[index].value;
			output += numerals[index].numeral;
		}
	}
	return output;
};
