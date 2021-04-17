import { BrowserModule } from '@angular/platform-browser';
import { APP_INITIALIZER, NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DecodeBase64Component } from './decode-base64/decode-base64.component';
import { EncodeBase64Component } from './encode-base64/encode-base64.component';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import { AppConfig } from './model/AppConfig.model';
import { AppConfigService } from './services/app-config.service';

import { ToastrModule } from 'ngx-toastr';
// import {MatTableDataSource} from '@angular/material/table';
// import {MatPaginator} from '@angular/material/paginator';4
export function initializerFn(jsonAppConfigService: AppConfigService) {
    return () => {
      return jsonAppConfigService.load();
    };
  }
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
    ToastrModule.forRoot(),
    // MatTableDataSource,
    // MatPaginator,
  ],
  providers: [ {
    provide: AppConfig,
    deps: [HttpClient],
    useExisting: AppConfigService
  },
  {
    provide: APP_INITIALIZER,
    multi: true,
    deps: [AppConfigService],
    useFactory: initializerFn
  }
],
  bootstrap: [AppComponent]
})
export class AppModule { }
