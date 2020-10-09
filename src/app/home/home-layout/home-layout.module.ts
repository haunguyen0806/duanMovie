import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SliderModule } from './slider/slider.module';
import { HomeLayoutComponent } from './home-layout.component'
import { MoviesModule } from './movies/movies.module'

@NgModule({
  declarations: [HomeLayoutComponent],
  imports: [
    CommonModule,
    SliderModule,
    MoviesModule
  ],
  exports:[
    HomeLayoutComponent
  ]
})
export class HomeLayoutModule { }
