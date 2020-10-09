import { Component, OnInit, AfterViewInit } from '@angular/core';
import $ from 'jquery';
import { Movie } from '../../../../core/models/movies';
import { PhimService } from '../../../../core/services/phim.service'
declare var $ : any;
@Component({
  selector: 'app-phim-dang-chieu',
  templateUrl: './phim-dang-chieu.component.html',
  styleUrls: ['./phim-dang-chieu.component.scss']
})
export class PhimDangChieuComponent implements OnInit , AfterViewInit{
  danhSachPhim: Movie[];
  loading: boolean = false;
  error: boolean = false;

  constructor(private moviesService: PhimService) {}
  
  ngOnInit(): void {
    this.loading = true;

    this.moviesService.layDanhSachPhim().subscribe({
      next: (result) => {
        this.loading = false;
      },
      error: (err) => {
        console.log(err);
        this.error = true;
        this.loading = false;
      },
    });

    this.moviesService.movieList.subscribe({
      next: (result) => {
        this.danhSachPhim = result;
      },
    });
  }
  
  ngAfterViewInit(){
    $('.owl-carousel').owlCarousel({
      loop:true,
      margin:10,
      nav:true,
      responsive:{
          0:{
              items:1
          },
          600:{
              items:3
          },
          1000:{
              items:4
          }
      }
  })
  }
}