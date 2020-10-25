import {TestBed} from '@angular/core/testing';

import {DigitsToWordsRomanianService} from './digits-to-words-romanian.service';

describe('DigitsToWordsRomanianService', () => {
  let service: DigitsToWordsRomanianService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DigitsToWordsRomanianService);
  });

  it(
    'should be created',
    () => {
      expect(service)
        .toBeTruthy();
    }
  );

  it(
    'should return `(minus) unu`',
    () => {
      expect(service.parse(-1))
        .toBe('(minus) unu');
    }
  );

  it(
    'should return `zero întregi și o sutime`',
    () => {
      expect(service.parse(0.01))
        .toBe('zero întregi și o sutime');
    }
  );

  it(
    'should return `zero întregi și nouăsprezece sutimi`',
    () => {
      expect(service.parse(0.19))
        .toBe('zero întregi și nouăsprezece sutimi');
    }
  );

  it(
    'should return `zero întregi și optzeci și trei de sutimi`',
    () => {
      expect(service.parse(0.83))
        .toBe('zero întregi și optzeci și trei de sutimi');
    }
  );

  it(
    'should return `unu`',
    () => {
      expect(service.parse(1))
        .toBe('unu');
    }
  );

  it(
    'should return `un întreg și unsprezece sutimi`',
    () => {
      expect(service.parse(1.11))
        .toBe('un întreg și unsprezece sutimi');
    }
  );

  it(
    'should return `un întreg și douăzeci de sutimi`',
    () => {
      expect(service.parse(1.20))
        .toBe('un întreg și douăzeci de sutimi');
    }
  );

  it(
    'should return `un întreg și șaizeci și șapte de sutimi`',
    () => {
      expect(service.parse(1.67))
        .toBe('un întreg și șaizeci și șapte de sutimi');
    }
  );

  it(
    'should return `doi întregi și două sutimi`',
    () => {
      expect(service.parse(2.02))
        .toBe('doi întregi și două sutimi');
    }
  );

  it(
    'should return `doi`',
    () => {
      expect(service.parse(2))
        .toBe('doi');
    }
  );

  it(
    'should return `douăzeci și patru`',
    () => {
      expect(service.parse(24))
        .toBe('douăzeci și patru');
    }
  );

  it(
    'should return `o sută patru întregi și patruzeci și șapte de sutimi`',
    () => {
      expect(service.parse(104.47))
        .toBe('o sută patru întregi și patruzeci și șapte de sutimi');
    }
  );

  it(
    'should return `o mie patru`',
    () => {
      expect(service.parse(1004.00))
        .toBe('o mie patru');
    }
  );

  it(
    'should return `o mie patru întregi și o sutime`',
    () => {
      expect(service.parse(1004.01))
        .toBe('o mie patru întregi și o sutime');
    }
  );

  it(
    'should return `un milion o mie unu întregi și zece sutimi`',
    () => {
      expect(service.parse(1001001.10))
        .toBe('un milion o mie unu întregi și zece sutimi');
    }
  );

  it(
    'should return `(minus) un leu`',
    () => {
      expect(service.parse(-1, 'RON'))
        .toBe('(minus) un leu');
    }
  );

  it(
    'should return `un leu`',
    () => {
      expect(service.parse(1, 'RON'))
        .toBe('un leu');
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
    'should return `zero lei și un ban`',
    () => {
      expect(service.parse(0.01, 'RON'))
        .toBe('zero lei și un ban');
    }
  );

  it(
    'should return `un leu și doi bani`',
    () => {
      expect(service.parse(1.02, 'RON'))
        .toBe('un leu și doi bani');
    }
  );

  it(
    'should return `un leu și optzeci și patru de bani`',
    () => {
      expect(service.parse(1.84, 'RON'))
        .toBe('un leu și optzeci și patru de bani');
    }
  );

  it(
    'should return `un euro`',
    () => {
      expect(service.parse(1, 'EUR'))
        .toBe('un euro');
    }
  );

  it(
    'should return `un euro și trei euro cenți`',
    () => {
      expect(service.parse(1.03, 'EUR'))
        .toBe('un euro și trei euro cenți');
    }
  );

  it(
    'should return `un dolar`',
    () => {
      expect(service.parse(1, 'USD'))
        .toBe('un dolar');
    }
  );

  it(
    'should return `un dolar și un cent`',
    () => {
      expect(service.parse(1.01, 'USD'))
        .toBe('un dolar și un cent');
    }
  );

  it(
    'should return `doi lei`',
    () => {
      expect(service.parse(2, 'RON'))
        .toBe('doi lei');
    }
  );

  it(
    'should return `doi lei și patruzeci și șase de bani`',
    () => {
      expect(service.parse(2.46, 'RON'))
        .toBe('doi lei și patruzeci și șase de bani');
    }
  );

  it(
    'should return `trei lei`',
    () => {
      expect(service.parse(3, 'RON'))
        .toBe('trei lei');
    }
  );

  it(
    'should return `zece lei`',
    () => {
      expect(service.parse(10, 'RON'))
        .toBe('zece lei');
    }
  );

  it(
    'should return `șaisprezece lei`',
    () => {
      expect(service.parse(16, 'RON'))
        .toBe('șaisprezece lei');
    }
  );

  it(
    'should return `douăzeci de lei`',
    () => {
      expect(service.parse(20, 'RON'))
        .toBe('douăzeci de lei');
    }
  );

  it(
    'should return `treizeci și șase de lei`',
    () => {
      expect(service.parse(36, 'RON'))
        .toBe('treizeci și șase de lei');
    }
  );

  it(
    'should return `o sută de lei`',
    () => {
      expect(service.parse(100, 'RON'))
        .toBe('o sută de lei');
    }
  );

  it(
    'should return `o sută unu lei`',
    () => {
      expect(service.parse(101, 'RON'))
        .toBe('o sută unu lei');
    }
  );

  it(
    'should return `două sute de lei`',
    () => {
      expect(service.parse(200, 'RON'))
        .toBe('două sute de lei');
    }
  );

  it(
    'should return `o mie de lei`',
    () => {
      expect(service.parse(1000, 'RON'))
        .toBe('o mie de lei');
    }
  );

  it(
    'should return `o mie unu lei`',
    () => {
      expect(service.parse(1001, 'RON'))
        .toBe('o mie unu lei');
    }
  );

  it(
    'should return `o mie nouăsprezece lei`',
    () => {
      expect(service.parse(1019, 'RON'))
        .toBe('o mie nouăsprezece lei');
    }
  );

  it(
    'should return `două mii de lei`',
    () => {
      expect(service.parse(2000, 'RON'))
        .toBe('două mii de lei');
    }
  );

  it(
    'should return `două mii unu lei`',
    () => {
      expect(service.parse(2001, 'RON'))
        .toBe('două mii unu lei');
    }
  );

  it(
    'should return `două mii patru sute unu lei`',
    () => {
      expect(service.parse(2401, 'RON'))
        .toBe('două mii patru sute unu lei');
    }
  );

  it(
    'should return `trei mii de lei`',
    () => {
      expect(service.parse(3000, 'RON'))
        .toBe('trei mii de lei');
    }
  );

  it(
    'should return `zece mii de lei`',
    () => {
      expect(service.parse(10000, 'RON'))
        .toBe('zece mii de lei');
    }
  );

  it(
    'should return `nouăsprezece mii de lei`',
    () => {
      expect(service.parse(19000, 'RON'))
        .toBe('nouăsprezece mii de lei');
    }
  );

  it(
    'should return `o sută una mii de lei`',
    () => {
      expect(service.parse(101000, 'RON'))
        .toBe('o sută una mii de lei');
    }
  );

  it(
    'should return `o sută două mii de lei`',
    () => {
      expect(service.parse(102000, 'RON'))
        .toBe('o sută două mii de lei');
    }
  );

  it(
    'should return `o sută două mii douăzeci de lei`',
    () => {
      expect(service.parse(102020, 'RON'))
        .toBe('o sută două mii douăzeci de lei');
    }
  );

  it(
    'should return `un milion de lei`',
    () => {
      expect(service.parse(1000000, 'RON'))
        .toBe('un milion de lei');
    }
  );

  it(
    'should return `un milion unu lei`',
    () => {
      expect(service.parse(1000001, 'RON'))
        .toBe('un milion unu lei');
    }
  );

  it(
    'should return `un milion unu lei și nouăsprezece bani`',
    () => {
      expect(service.parse(1000001.19, 'RON'))
        .toBe('un milion unu lei și nouăsprezece bani');
    }
  );

  it(
    'should return `un milion o mie unu lei`',
    () => {
      expect(service.parse(1001001, 'RON'))
        .toBe('un milion o mie unu lei');
    }
  );

  it(
    'should return `patru milioane unu lei`',
    () => {
      expect(service.parse(4000001, 'RON'))
        .toBe('patru milioane unu lei');
    }
  );

  it(
    'should return `patru milioane două sute trei mii unu lei`',
    () => {
      expect(service.parse(4203001, 'RON'))
        .toBe('patru milioane două sute trei mii unu lei');
    }
  );

  it(
    'should return `patru milioane două sute douăzeci și trei de mii patru sute unu lei`',
    () => {
      expect(service.parse(4223401, 'RON'))
        .toBe('patru milioane două sute douăzeci și trei de mii patru sute unu lei');
    }
  );

  it(
    'should return `o sută una milioane patru sute cincizeci și șase de mii trei sute șaptezeci și cinci de lei`',
    () => {
      expect(service.parse(101456375, 'RON'))
        .toBe('o sută una milioane patru sute cincizeci și șase de mii trei sute șaptezeci și cinci de lei');
    }
  );

  it(
    'should return `un miliard patru milioane zece lei și șaizeci și trei de bani`',
    () => {
      expect(service.parse(1004000010.6375, 'RON'))
        .toBe('un miliard patru milioane zece lei și șaizeci și trei de bani');
    }
  );
});
