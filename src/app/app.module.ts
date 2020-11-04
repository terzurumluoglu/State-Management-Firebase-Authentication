import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeModule } from './_components/home/home.module';
import { AppStateModule, FirebaseModule } from "./_module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule,

    FirebaseModule,
    AppStateModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }