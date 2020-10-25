import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DigitsToWordsRomanianDirective} from './directive/digits-to-words-romanian.directive';
import {DigitsToWordsEnglishDirective} from './directive/digits-to-words-english.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    DigitsToWordsRomanianDirective,
    DigitsToWordsEnglishDirective
  ],
  exports: [
    DigitsToWordsRomanianDirective,
    DigitsToWordsEnglishDirective
  ]
})
export class NgxDigitsToWordsModule {
}
