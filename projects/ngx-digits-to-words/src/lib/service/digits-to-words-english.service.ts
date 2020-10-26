import {Injectable} from '@angular/core';
import {NgxDigitsToWordsHelper} from '../ngx-digits-to-words.helper';

// https://www.academia.edu/22810913/CUM_SE_SCRIE_CORECT_NUMERALELE
// http://publications.europa.eu/code/ro/ro-4100400.htm
// https://stackoverflow.com/questions/14766951/convert-digits-into-words-with-javascript
// https://github.com/virgil-av/numbers-to-words-romanian
// https://github.com/salmanm/num-words
@Injectable({
  providedIn: 'root'
})
export class DigitsToWordsEnglishService {
  readonly lessThanTwenty = [
    'zero',
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'seven',
    'eight',
    'nine',
    'ten',
    'eleven',
    'twelve',
    'thirteen',
    'fourteen',
    'fifteen',
    'sixteen',
    'seventeen',
    'eighteen',
    'nineteen'
  ];

  readonly tenthsLessThanHundred = [
    'zero',
    'ten',
    'twenty',
    'thirty',
    'forty',
    'fifty',
    'sixty',
    'seventy',
    'eighty',
    'ninety'
  ];

  readonly numberUnitsSingular = ['', 'thousand', 'million', 'billion', 'trillion'];

  readonly numberUnitsPlural = ['', 'thousands', 'millions', 'billions', 'trillions'];

  readonly currenciesSingular = {
    DECIMAL: ['integer', 'hundredth'],
    RON: ['leu', 'ban'],
    EUR: ['euro', 'euro cent'],
    USD: ['dollar', 'cent']
  };

  readonly currenciesPlural = {
    DECIMAL: ['integers', 'hundredths'],
    RON: ['lei', 'bani'],
    EUR: ['euro', 'euro cents'],
    USD: ['dollars', 'cents']
  };

  parse(nr: number, currency: 'RON' | 'EUR' | 'USD' | 'DECIMAL' = 'DECIMAL'): string {
    let isCurrency: boolean;
    let strArr: string[];

    if (NgxDigitsToWordsHelper.isNaN(nr)) {
      return 'NaN';
    }

    [nr, isCurrency, strArr] = NgxDigitsToWordsHelper.init(nr, currency);

    switch (true) {
      case nr === 0:
        strArr.push('zero');
        if (isCurrency) {
          strArr.push(this.currenciesPlural[currency][0]);
        }
        break;
      case nr === 1 && isCurrency:
        strArr.push('one');
        strArr.push(this.currenciesSingular[currency][0]);
        break;
      case nr > 0 && nr < 1:
        strArr.push('zero');
        strArr.push(this.currenciesPlural[currency][0]);
        strArr.push(
          this.assertDecimal(
            NgxDigitsToWordsHelper.extractUpToTwoDecimalPlaces(nr),
            currency
          )
        );
        break;
      case nr > 1 && nr < 2:
        strArr.push('one');
        strArr.push(this.currenciesSingular[currency][0]);
        strArr.push(
          this.assertDecimal(
            NgxDigitsToWordsHelper.extractUpToTwoDecimalPlaces(nr),
            currency
          )
        );
        break;
      default:
        const r = /(\d)(\d{2})(\d)(\d{2})(\d)(\d{2})(\d)(\d{2})(\d)(\d{2})(\d{2})/;
        const arr = (('00000000000000000' + Math.trunc(nr * 100)).substr(-17).match(r) || []).map(str => +str);
        strArr.push(this.match([arr[1], arr[2], 4]));
        strArr.push(this.match([arr[3], arr[4], 3]));
        strArr.push(this.match([arr[5], arr[6], 2]));
        strArr.push(this.match([arr[7], arr[8], 1]));
        strArr.push(this.match([arr[9], arr[10], 0]));
        if (isCurrency || arr[11]) {
          strArr.push(
            nr > 1 || nr === 0 ? this.currenciesPlural[currency][0] : this.currenciesSingular[currency][0]
          );
        }

        strArr.push(this.assertDecimal(arr[11], currency));
    }

    // return strArr.filter(str => str.length).join(' ');
    return strArr.join(' ').replace(/\s\s+/g, ' ').trim();
  }

  private assertHundreds(nr: number): string {
    return nr > 0 ? `${this.lessThanTwenty[nr]} hundred` : '';
  }

  private assertTenths([, tenths]: number[]): string {
    let str = '';

    if (tenths > 19) {
      const [integer, digit] = NgxDigitsToWordsHelper.parseTenths(tenths);
      str += this.tenthsLessThanHundred[integer];
      if (digit !== 0) {
        str += ' ';
        str += this.lessThanTwenty[digit];
      }
    } else {
      str += tenths > 0 ? this.lessThanTwenty[tenths] : '';
    }

    return str;
  }

  private assertDecimal(tenths: number, currency: 'RON' | 'EUR' | 'USD' | 'DECIMAL' = 'DECIMAL'): string {
    const strArr = [];

    if (tenths > 0) {
      strArr.push('and');
      if (tenths < 20) {
        strArr.push(this.lessThanTwenty[tenths]);
        strArr.push(this.currenciesPlural[currency][1]);
      } else {
        const [integer, digit] = NgxDigitsToWordsHelper.parseTenths(tenths);
        strArr.push(this.tenthsLessThanHundred[integer]);
        if (digit !== 0) {
          strArr.push(this.lessThanTwenty[digit]);
        }
        strArr.push(this.currenciesPlural[currency][1]);
      }
    }

    // return strArr.filter(str => str.length).join(' ');
    return strArr.join(' ');
  }

  private prefix([hundreds, tenths, position]: number[]): string {
    let str = '';

    if (hundreds || tenths) {
      str = hundreds === 0 && tenths === 1 ? this.numberUnitsSingular[position] : this.numberUnitsPlural[position];
    }

    return str;
  }

  private match(param: [number, number, number]
  ): string {
    const [hundreds] = param;
    const strArr = [];
    strArr.push(this.assertHundreds(hundreds));
    strArr.push(this.assertTenths(param));
    strArr.push(this.prefix(param));

    // return strArr.filter(str => str.length).join(' ');
    return strArr.join(' ');
  }
}
