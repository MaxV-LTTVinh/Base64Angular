import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DecodeBase64Component } from './decode-base64/decode-base64.component';
import { EncodeBase64Component } from './encode-base64/encode-base64.component';

const routes: Routes = [
{path:'decode-base64',component:DecodeBase64Component},
{path:'encode-base64',component:EncodeBase64Component},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
