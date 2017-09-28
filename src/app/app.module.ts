import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Router, RouterModule } from '@angular/router'
import { routes,declaration } from './app.router';
import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';
import { Angular2SocialLoginModule } from "angular2-social-login";
import {HttpClientModule} from '@angular/common/http';

import { FacebookModule } from 'ngx-facebook';
let providers = {
 
  "google": {
    "clientId": "GOOGLE_CLIENT_ID",
    "apiVersion": "<version>" //like v2.4
  }
}
@NgModule({
  declarations: declaration,
  imports: [
    BrowserModule,
    routes,
    HttpModule,
    FacebookModule.forRoot(),
    Angular2SocialLoginModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
Angular2SocialLoginModule.loadProvidersScripts(providers);
