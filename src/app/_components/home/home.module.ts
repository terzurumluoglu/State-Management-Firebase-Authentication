import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { SocialComponent } from './social/social.component';
import { HomeComponent } from './home.component';


@NgModule({
  declarations: [
    HomeComponent,
    SocialComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
  ]
})
export class HomeModule { }
