import {Directive, ElementRef, Input, Renderer2} from '@angular/core';
import {DigitsToWordsRomanianService} from '../service/digits-to-words-romanian.service';
import {NgxDigitsToWordsHelper} from '../ngx-digits-to-words.helper';

@Directive({
  selector: '[vlahioDigitsToWordsRO]'
})
export class DigitsToWordsRomanianDirective {
  @Input() currency: 'RON' | 'EUR' | 'USD' | 'DECIMAL';

  constructor(private elRef: ElementRef,
              private renderer: Renderer2,
              private digitsToWordsService: DigitsToWordsRomanianService) {
  }

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
}
