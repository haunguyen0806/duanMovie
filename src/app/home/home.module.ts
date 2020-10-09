import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home.component';
import { HomeLayoutModule } from './home-layout/home-layout.module';



@NgModule({
  declarations: [ HeaderComponent, FooterComponent, HomeComponent],
  imports: [
    CommonModule,
    HomeLayoutModule
    
  ],
  exports: [
    HeaderComponent, FooterComponent, HomeComponent
  ]
})
export class HomeModule { }
