module.exports = (input, option) => {
  var algorithms = {
    'basic': basic,
    'noConditional': noConditional,
    'reduce': reduce,
    'mapReduce': mapReduce
  };
  var algorithm = algorithms[option] || basic
  return algorithm(input);
};

var basic = input => {
  var isMultipleOfThree = (input % 3 == 0);
  var isMultipleOfFive = (input % 5 == 0);

  if (isMultipleOfThree && isMultipleOfFive) {
    return 'FizzBuzz';
  }
  if (isMultipleOfThree) {
    return 'Fizz';
  }
  if (isMultipleOfFive) {
    return 'Buzz';
  }
  return input;
};

var noConditional = input => {
  var isMultipleOfThree = (input % 3 == 0);
  var isMultipleOfFive = (input % 5 == 0);
  var key = `${isMultipleOfThree}|${isMultipleOfFive}`;

  var methods = {
    'true|true': 'FizzBuzz',
    'true|false': 'Fizz',
    'false|true': 'Buzz',
    'false|false': input
  };

  return methods[key];
};

var reduce = input => {
  var methods = [
    x => { return (x % 3 == 0) ? 'Fizz' : null },
    x => { return (x % 5 == 0) ? 'Buzz' : null },
    x => { return x }
  ];

  return methods.reduce((prev, algorithm) => {
    var current = algorithm(input);
    if (prev != null && typeof current == typeof prev) {
      return `${prev}${current}`;
    }
    return (typeof prev == 'string') ? prev : current;
  }, null);
};

var mapReduce = input => {
  var methods = [
    x => { return { value: (x % 3 == 0) ? 'Fizz' : null, priority: 1}; },
    x => { return { value: (x % 5 == 0) ? 'Buzz' : null, priority: 1}; },
    x => { return { value: x, priority: 0 }; }
  ];

  var mapped = methods.map(current => {
    return current(input);
  });

  var reduced = mapped.reduce((prev, current) => {
    if (prev.value !== null) {
      if (prev.priority > current.priority || current.value == null) {
        return prev;
      }
      if (prev.priority == current.priority) {
        current.value = `${prev.value}${current.value}`;
      }
    }
    return current;
  }, {value: null, priority: 0});

  return reduced.value;
}
