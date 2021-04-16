import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DecodeBase64Component } from './decode-base64/decode-base64.component';
import { EncodeBase64Component } from './encode-base64/encode-base64.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
// import {MatTableDataSource} from '@angular/material/table';
// import {MatPaginator} from '@angular/material/paginator';
@NgModule({
  declarations: [
    AppComponent,
    DecodeBase64Component,
    EncodeBase64Component
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatInputModule,
    // MatTableDataSource,
    // MatPaginator,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
