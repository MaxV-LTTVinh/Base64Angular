import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DecodeBase64Component } from './decode-base64/decode-base64.component';
import { EncodeBase64Component } from './encode-base64/encode-base64.component';

@NgModule({
  declarations: [
    AppComponent,
    DecodeBase64Component,
    EncodeBase64Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
