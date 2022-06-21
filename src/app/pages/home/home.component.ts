import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  slides = [
    {img: "assets/images/dummy-1.jpg"},
    {img: "assets/images/dummy-2.jpg"}
  ];
  slideConfig = {
    "slidesToShow": 1, 
    "slidesToScroll": 1
  };

  ngOnInit(): void {
  }

}
