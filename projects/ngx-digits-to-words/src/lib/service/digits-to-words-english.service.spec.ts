import {TestBed} from '@angular/core/testing';

import {DigitsToWordsEnglishService} from './digits-to-words-english.service';

describe('DigitsToWordsEnglishService', () => {
  let service: DigitsToWordsEnglishService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DigitsToWordsEnglishService);
  });

  it(
    'should be created',
    () => {
      expect(service)
        .toBeTruthy();
    }
  );

  it(
    'should return `(minus) one`',
    () => {
      expect(service.parse(-1))
        .toBe('(minus) one');
    }
  );

  it(
    'should return `zero integers and one hundredths`',
    () => {
      expect(service.parse(0.01))
        .toBe('zero integers and one hundredths');
    }
  );

  it(
    'should return `zero integers and nineteen hundredths`',
    () => {
      expect(service.parse(0.19))
        .toBe('zero integers and nineteen hundredths');
    }
  );

  it(
    'should return `zero integers and eighty three hundredths`',
    () => {
      expect(service.parse(0.83))
        .toBe('zero integers and eighty three hundredths');
    }
  );

  it(
    'should return `one`',
    () => {
      expect(service.parse(1))
        .toBe('one');
    }
  );

  it(
    'should return `one integer and eleven hundredths`',
    () => {
      expect(service.parse(1.11))
        .toBe('one integer and eleven hundredths');
    }
  );

  it(
    'should return `one integer and twenty hundredths`',
    () => {
      expect(service.parse(1.20))
        .toBe('one integer and twenty hundredths');
    }
  );

  it(
    'should return `one integer and sixty seven hundredths`',
    () => {
      expect(service.parse(1.67))
        .toBe('one integer and sixty seven hundredths');
    }
  );

  it(
    'should return `two integers and two hundredths`',
    () => {
      expect(service.parse(2.02))
        .toBe('two integers and two hundredths');
    }
  );

  it(
    'should return `two`',
    () => {
      expect(service.parse(2))
        .toBe('two');
    }
  );

  it(
    'should return `twenty four`',
    () => {
      expect(service.parse(24))
        .toBe('twenty four');
    }
  );

  it(
    'should return `one hundred four integers and forty seven hundredths`',
    () => {
      expect(service.parse(104.47))
        .toBe('one hundred four integers and forty seven hundredths');
    }
  );

  it(
    'should return `one thousand four`',
    () => {
      expect(service.parse(1004.00))
        .toBe('one thousand four');
    }
  );

  it(
    'should return `one thousand four integers and one hundredths`',
    () => {
      expect(service.parse(1004.01))
        .toBe('one thousand four integers and one hundredths');
    }
  );

  it(
    'should return `one million one thousand one integers and ten hundredths`',
    () => {
      expect(service.parse(1001001.10))
        .toBe('one million one thousand one integers and ten hundredths');
    }
  );

  it(
    'should return `(minus) one leu`',
    () => {
      expect(service.parse(-1, 'RON'))
        .toBe('(minus) one leu');
    }
  );

  it(
    'should return `one leu`',
    () => {
      expect(service.parse(1, 'RON'))
        .toBe('one leu');
    }
  );

  it(
    'should return `zero lei`',
    () => {
      expect(service.parse(0, 'RON'))
        .toBe('zero lei');
    }
  );

  it(
    'should return `zero lei and one bani`',
    () => {
      expect(service.parse(0.01, 'RON'))
        .toBe('zero lei and one bani');
    }
  );

  it(
    'should return `one leu and two bani`',
    () => {
      expect(service.parse(1.02, 'RON'))
        .toBe('one leu and two bani');
    }
  );

  it(
    'should return `one leu and eighty four bani`',
    () => {
      expect(service.parse(1.84, 'RON'))
        .toBe('one leu and eighty four bani');
    }
  );

  it(
    'should return `one euro`',
    () => {
      expect(service.parse(1, 'EUR'))
        .toBe('one euro');
    }
  );

  it(
    'should return `one euro and three euro cents`',
    () => {
      expect(service.parse(1.03, 'EUR'))
        .toBe('one euro and three euro cents');
    }
  );

  it(
    'should return `one dollar`',
    () => {
      expect(service.parse(1, 'USD'))
        .toBe('one dollar');
    }
  );

  it(
    'should return `one dollar and one cents`',
    () => {
      expect(service.parse(1.01, 'USD'))
        .toBe('one dollar and one cents');
    }
  );

  it(
    'should return `two lei`',
    () => {
      expect(service.parse(2, 'RON'))
        .toBe('two lei');
    }
  );

  it(
    'should return `two lei and forty six bani`',
    () => {
      expect(service.parse(2.46, 'RON'))
        .toBe('two lei and forty six bani');
    }
  );

  it(
    'should return `three lei`',
    () => {
      expect(service.parse(3, 'RON'))
        .toBe('three lei');
    }
  );

  it(
    'should return `ten lei`',
    () => {
      expect(service.parse(10, 'RON'))
        .toBe('ten lei');
    }
  );

  it(
    'should return `sixteen lei`',
    () => {
      expect(service.parse(16, 'RON'))
        .toBe('sixteen lei');
    }
  );

  it(
    'should return `twenty lei`',
    () => {
      expect(service.parse(20, 'RON'))
        .toBe('twenty lei');
    }
  );

  it(
    'should return `thirty six lei`',
    () => {
      expect(service.parse(36, 'RON'))
        .toBe('thirty six lei');
    }
  );

  it(
    'should return `one hundred lei`',
    () => {
      expect(service.parse(100, 'RON'))
        .toBe('one hundred lei');
    }
  );

  it(
    'should return `one hundred one lei`',
    () => {
      expect(service.parse(101, 'RON'))
        .toBe('one hundred one lei');
    }
  );

  it(
    'should return `two hundred lei`',
    () => {
      expect(service.parse(200, 'RON'))
        .toBe('two hundred lei');
    }
  );

  it(
    'should return `one thousand lei`',
    () => {
      expect(service.parse(1000, 'RON'))
        .toBe('one thousand lei');
    }
  );

  it(
    'should return `one thousand one lei`',
    () => {
      expect(service.parse(1001, 'RON'))
        .toBe('one thousand one lei');
    }
  );

  it(
    'should return `one thousand nineteen lei`',
    () => {
      expect(service.parse(1019, 'RON'))
        .toBe('one thousand nineteen lei');
    }
  );

  it(
    'should return `two thousands lei`',
    () => {
      expect(service.parse(2000, 'RON'))
        .toBe('two thousands lei');
    }
  );

  it(
    'should return `two thousands one lei`',
    () => {
      expect(service.parse(2001, 'RON'))
        .toBe('two thousands one lei');
    }
  );

  it(
    'should return `two thousands four hundred one lei`',
    () => {
      expect(service.parse(2401, 'RON'))
        .toBe('two thousands four hundred one lei');
    }
  );

  it(
    'should return `three thousands lei`',
    () => {
      expect(service.parse(3000, 'RON'))
        .toBe('three thousands lei');
    }
  );

  it(
    'should return `ten thousands lei`',
    () => {
      expect(service.parse(10000, 'RON'))
        .toBe('ten thousands lei');
    }
  );

  it(
    'should return `nineteen thousands lei`',
    () => {
      expect(service.parse(19000, 'RON'))
        .toBe('nineteen thousands lei');
    }
  );

  it(
    'should return `one hundred one thousands lei`',
    () => {
      expect(service.parse(101000, 'RON'))
        .toBe('one hundred one thousands lei');
    }
  );

  it(
    'should return `one hundred two thousands lei`',
    () => {
      expect(service.parse(102000, 'RON'))
        .toBe('one hundred two thousands lei');
    }
  );

  it(
    'should return `one hundred two thousands twenty lei`',
    () => {
      expect(service.parse(102020, 'RON'))
        .toBe('one hundred two thousands twenty lei');
    }
  );

  it(
    'should return `one million lei`',
    () => {
      expect(service.parse(1000000, 'RON'))
        .toBe('one million lei');
    }
  );

  it(
    'should return `one million one lei`',
    () => {
      expect(service.parse(1000001, 'RON'))
        .toBe('one million one lei');
    }
  );

  it(
    'should return `one million one lei and nineteen bani`',
    () => {
      expect(service.parse(1000001.19, 'RON'))
        .toBe('one million one lei and nineteen bani');
    }
  );

  it(
    'should return `one million one thousand one lei`',
    () => {
      expect(service.parse(1001001, 'RON'))
        .toBe('one million one thousand one lei');
    }
  );

  it(
    'should return `four millions one lei`',
    () => {
      expect(service.parse(4000001, 'RON'))
        .toBe('four millions one lei');
    }
  );

  it(
    'should return `four millions two hundred three thousands one lei`',
    () => {
      expect(service.parse(4203001, 'RON'))
        .toBe('four millions two hundred three thousands one lei');
    }
  );

  it(
    'should return `four millions two hundred twenty three thousands four hundred one lei`',
    () => {
      expect(service.parse(4223401, 'RON'))
        .toBe('four millions two hundred twenty three thousands four hundred one lei');
    }
  );

  it(
    'should return `one hundred one millions four hundred fifty six thousands three hundred seventy five lei`',
    () => {
      expect(service.parse(101456375, 'RON'))
        .toBe('one hundred one millions four hundred fifty six thousands three hundred seventy five lei');
    }
  );

  it(
    'should return `one billion four millions ten lei and sixty three bani`',
    () => {
      expect(service.parse(1004000010.6375, 'RON'))
        .toBe('one billion four millions ten lei and sixty three bani');
    }
  );
});
