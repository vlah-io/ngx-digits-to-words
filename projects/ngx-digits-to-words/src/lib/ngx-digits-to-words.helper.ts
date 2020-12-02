import {ElementRef, Renderer2} from '@angular/core';
import {DigitsToWordsRomanianService} from './service/digits-to-words-romanian.service';
import {DigitsToWordsEnglishService} from './service/digits-to-words-english.service';

export class NgxDigitsToWordsHelper {
  static parseTenths(tenths: number): number[] {
    const arr = (('00' + Math.trunc(tenths)).substr(-2).match(/(\d)(\d)/) || []).map(str => +str);

    return [arr[1], arr[2]];
  }

  static extractUpToTwoDecimalPlaces(nr: number): number {
    return Math.trunc(nr * 100) - Math.trunc(nr) * 100;
  }

  static isNaN(nr: any): boolean {
    return isNaN(nr) || nr === '' || [
      '[object String]',
      '[object Number]'
    ].indexOf(Object.prototype.toString.call(nr)) === -1;
  }

  static init(nr: number, currency: 'RON' | 'EUR' | 'USD' | 'DECIMAL' = 'DECIMAL'): [number, boolean, string[]] {
    const strArr = [];

    if (Object.prototype.toString.call(nr) !== '[object Number]') {
      nr = +nr;
    }

    if (nr < 0) {
      strArr.push('(minus)');
    }

    return [Math.abs(nr), currency !== 'DECIMAL', strArr];
  }

  static generateWords(nr: number | undefined,
                       currency: 'RON' | 'EUR' | 'USD' | 'DECIMAL' | undefined,
                       elRef: ElementRef,
                       renderer: Renderer2,
                       digitsToWordsService: DigitsToWordsRomanianService | DigitsToWordsEnglishService
  ): void {
    (elRef.nativeElement as HTMLElement)
      .childNodes
      .forEach(
        (child: Node) => {
          renderer.removeChild(elRef.nativeElement, child);
        }
      );
    if (nr && !isNaN(nr)) {
      renderer.appendChild(
        elRef.nativeElement,
        renderer.createText(
          digitsToWordsService.parse(nr, currency)
        )
      );
    }
  }
}
