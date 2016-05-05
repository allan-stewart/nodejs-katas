var fizzbuzz = require('../fizzbuzz.js');
var assert = require('assert');

describe('fizzbuzz', () => {
  describe('basic', () => {
    var test = (input, expected) => {
      it(`prints ${expected} when given ${input}`, () => {
        assert.equal(fizzbuzz(input), expected);
      });
    };

    test(1, 1);
    test(2, 2);
    test(3, 'Fizz');
    test(4, 4);
    test(5, 'Buzz');
    test(6, 'Fizz');
    test(7, 7);
    test(8, 8);
    test(9, 'Fizz');
    test(10, 'Buzz');
    test(11, 11);
    test(12, 'Fizz');
    test(13, 13);
    test(14, 14);
    test(15, 'FizzBuzz');
    test(16, 16);
    test(17, 17);
    test(18, 'Fizz');
    test(19, 19);
    test(20, 'Buzz');
    test(21, 'Fizz');
  });

  describe('noConditional', () => {
    var test = (input) => {
      var expected = fizzbuzz(input);
      it(`matches the basic output of ${expected} for ${input}`, () => {
        assert.equal(fizzbuzz(input, 'noConditional'), expected);
      });
    };

    for (var i = 1; i <= 100; i++) {
      test(i);
    }
  });

  describe('reduce', () => {
    var test = (input) => {
      var expected = fizzbuzz(input);
      it(`matches the basic output of ${expected} for ${input}`, () => {
        assert.equal(fizzbuzz(input, 'reduce'), expected);
      });
    };

    for (var i = 1; i <= 21; i++) {
      test(i);
    }
  });

  describe('mapReduce', () => {
    var test = (input) => {
      var expected = fizzbuzz(input);
      it(`matches the basic output of ${expected} for ${input}`, () => {
        assert.equal(fizzbuzz(input, 'mapReduce'), expected);
      });
    };

    for (var i = 1; i <= 21; i++) {
      test(i);
    }
  });
});
