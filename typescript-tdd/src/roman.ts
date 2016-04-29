export default class Roman {
  toRoman(input : number) : string {
    if (input <= 0) {
      return '';
    }
    return numerals.reduce((prev, current) : string => {
      var count = Math.floor(input / current.value) + 1;
      input = input % current.value;
      return prev + new Array(count).join(current.numeral);
    }, '');
  }
}

class Numeral {
  numeral : string;
  value : number;

  constructor(numeral: string, value: number) {
    this.numeral = numeral;
    this.value = value;
  }
}

let numerals : Array<Numeral> = [
  new Numeral('X', 10),
  new Numeral('IX', 9),
  new Numeral('V', 5),
  new Numeral('IV', 4),
  new Numeral('I', 1)
];
