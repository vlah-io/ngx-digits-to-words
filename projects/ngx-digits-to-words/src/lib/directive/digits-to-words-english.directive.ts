import {Directive, ElementRef, Input, Renderer2} from '@angular/core';
import {NgxDigitsToWordsHelper} from '../ngx-digits-to-words.helper';
import {DigitsToWordsEnglishService} from '../service/digits-to-words-english.service';

@Directive({
  selector: '[vlahioDigitsToWordsEN]'
})
export class DigitsToWordsEnglishDirective {
  @Input() currency: 'RON' | 'EUR' | 'USD' | 'DECIMAL';

  @Input('digits')
  set digits(nr: number) {
    NgxDigitsToWordsHelper.generateWords(
      nr,
      this.currency,
      this.elRef,
      this.renderer,
      this.digitsToWordsService
    );
  }

  constructor(private elRef: ElementRef,
              private renderer: Renderer2,
              private digitsToWordsService: DigitsToWordsEnglishService) {
  }
}
