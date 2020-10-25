import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {NgxDigitsToWordsModule} from '../../../ngx-digits-to-words/src/lib/ngx-digits-to-words.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxDigitsToWordsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
