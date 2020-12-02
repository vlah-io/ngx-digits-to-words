import {Directive, ElementRef, Input, Renderer2} from '@angular/core';
import {DigitsToWordsRomanianService} from '../service/digits-to-words-romanian.service';
import {NgxDigitsToWordsHelper} from '../ngx-digits-to-words.helper';

@Directive({
  selector: '[vlahioDigitsToWordsRO]'
})
export class DigitsToWordsRomanianDirective {
  @Input() currency: 'RON' | 'EUR' | 'USD' | 'DECIMAL' | undefined;

  constructor(private elRef: ElementRef,
              private renderer: Renderer2,
              private digitsToWordsService: DigitsToWordsRomanianService) {
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
