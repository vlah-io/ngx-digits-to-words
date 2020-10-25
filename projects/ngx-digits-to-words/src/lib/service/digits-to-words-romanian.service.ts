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
export class DigitsToWordsRomanianService {
  readonly lessThanTwenty = [
    'zero',
    'unu',
    'doi',
    'trei',
    'patru',
    'cinci',
    'șase',
    'șapte',
    'opt',
    'nouă',
    'zece',
    'unsprezece',
    'doisprezece',
    'treisprezece',
    'paisprezece',
    'cincisprezece',
    'șaisprezece',
    'șaptesprezece',
    'optsprezece',
    'nouăsprezece'
  ];

  readonly tenthsLessThanHundred = [
    'zero',
    'zece',
    'douăzeci',
    'treizeci',
    'patruzeci',
    'cincizeci',
    'șaizeci',
    'șaptezeci',
    'optzeci',
    'nouăzeci'
  ];

  readonly numberUnitsSingular = ['', 'mie', 'milion', 'miliard', 'trilion'];

  readonly numberUnitsPlural = ['', 'mii', 'milioane', 'miliarde', 'triliarde'];

  readonly currenciesSingular = {
    DECIMAL: ['întreg', 'sutime'],
    RON: ['leu', 'ban'],
    EUR: ['euro', 'euro cent'],
    USD: ['dolar', 'cent']
  };

  readonly currenciesPlural = {
    DECIMAL: ['întregi', 'sutimi'],
    RON: ['lei', 'bani'],
    EUR: ['euro', 'euro cenți'],
    USD: ['dolari', 'cenți']
  };

  private assertHundreds(nr: number): string {
    let str = '';

    if (nr > 0) {
      switch (true) {
        case nr === 1:
          str += 'o sută';
          break;
        case nr === 2:
          str += 'două sute';
          break;
        default:
          str += this.lessThanTwenty[nr];
          str += ' sute';
      }
    }

    return str;
  }

  private assertTenths([hundreds, tenths, position]: number[]): string {
    let str = '';

    if (tenths > 0) {
      switch (true) {
        case tenths === 1 && hundreds === 0 && position === 1:
          str = 'o';
          break;
        case tenths === 1 && hundreds !== 0 && position > 0:
          str = 'una';
          break;
        case tenths === 1 && hundreds === 0 && position > 1:
          str = 'un';
          break;
        case tenths === 2 && position !== 0:
          str = 'două';
          break;
        case tenths < 20:
          str = this.lessThanTwenty[tenths];
          break;
        default:
          const [integer, digit] = NgxDigitsToWordsHelper.parseTenths(tenths);
          str += this.tenthsLessThanHundred[integer];
          if (digit !== 0) {
            str += ' și ';
            str += this.lessThanTwenty[digit];
          }
      }
    }

    return str;
  }

  private assertDecimal(tenths: number, currency: 'RON' | 'EUR' | 'USD' | 'DECIMAL' = 'DECIMAL'): string {
    const isCurrency = currency !== 'DECIMAL';
    const strArr = [];

    if (tenths > 0) {
      strArr.push('și');
      switch (true) {
        case tenths === 1:
          strArr.push(isCurrency ? 'un' : 'o');
          strArr.push(this.currenciesSingular[currency][1]);
          break;
        case tenths === 2 && !isCurrency:
          strArr.push('două');
          strArr.push(this.currenciesPlural[currency][1]);
          break;
        case tenths < 20:
          strArr.push(this.lessThanTwenty[tenths]);
          strArr.push(this.currenciesPlural[currency][1]);
          break;
        default:
          const [integer, digit] = NgxDigitsToWordsHelper.parseTenths(tenths);
          strArr.push(this.tenthsLessThanHundred[integer]);
          if (digit !== 0) {
            strArr.push('și');
            strArr.push(this.lessThanTwenty[digit]);
          }
          strArr.push('de');
          strArr.push(this.currenciesPlural[currency][1]);
      }
    }

    // return strArr.filter(str => str.length).join(' ');
    return strArr.join(' ');
  }

  private prefix([hundreds, tenths, position]: number[]): string {
    let str = '';

    if (position !== 0) {
      switch (true) {
        case hundreds === 0 && tenths === 1:
          str = this.numberUnitsSingular[position];
          break;
        case tenths > 0 && tenths < 20:
          str = this.numberUnitsPlural[position];
          break;
        case tenths > 19:
          str += 'de ';
          str += this.numberUnitsPlural[position];
          break;
      }
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
        strArr.push('un');
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
        strArr.push('un');
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
          if (arr[10] === 0 || arr[10] >= 20) {
            strArr.push('de');
          }
          strArr.push(
            nr > 1 || nr === 0 ? this.currenciesPlural[currency][0] : this.currenciesSingular[currency][0]
          );
        }

        strArr.push(this.assertDecimal(arr[11], currency));
    }

    // return strArr.filter(str => str.length).join(' ');
    return strArr.join(' ').replace(/\s\s+/g, ' ').trim();
  }
}
