/// <reference path="../typings/mocha/mocha.d.ts" />
/// <reference path="../typings/node/node.d.ts" />

import Roman from '../src/roman';
import * as assert from 'assert';

describe('Roman', () => {
  var subject : Roman;

  beforeEach(() => {
    subject = new Roman();
  });

  describe('toRoman', () => {
    let testToRoman = (input : number, expected : string) => {
      it(`should convert ${input} to ${expected}`, () => {
        var result = subject.toRoman(input);
        assert.equal(result, expected);
      });
    };

    testToRoman(1, 'I');
    testToRoman(2, 'II');
    testToRoman(3, 'III');
    testToRoman(4, 'IV');
    testToRoman(5, 'V');
    testToRoman(6, 'VI');
    testToRoman(7, 'VII');
    testToRoman(8, 'VIII');
    testToRoman(9, 'IX');
    testToRoman(10, 'X');
    testToRoman(13, 'XIII');
    testToRoman(17, 'XVII');
    testToRoman(20, 'XX');
    testToRoman(34, 'XXXIV');
    testToRoman(38, 'XXXVIII');

    it('should treat nulls as 0', () => {
      var result = subject.toRoman(null);
      assert.equal(result, '');
    });

    it('should treat negative numbers as 0', () => {
      var result = subject.toRoman(-1);
      assert.equal(result, '');
    });
  });
});
