import {Directive, ElementRef, Input, Renderer2} from '@angular/core';
import {NgxDigitsToWordsHelper} from '../ngx-digits-to-words.helper';
import {DigitsToWordsEnglishService} from '../service/digits-to-words-english.service';

@Directive({
  selector: '[vlahioDigitsToWordsEN]'
})
export class DigitsToWordsEnglishDirective {
  @Input() currency: 'RON' | 'EUR' | 'USD' | 'DECIMAL' | undefined;

  constructor(private elRef: ElementRef,
              private renderer: Renderer2,
              private digitsToWordsService: DigitsToWordsEnglishService) {
  }

  @Input()
  set digits(nr: number | undefined) {
    NgxDigitsToWordsHelper.generateWords(
      nr,
      this.currency,
      this.elRef,
      this.renderer,
      this.digitsToWordsService
    );
  }
}
