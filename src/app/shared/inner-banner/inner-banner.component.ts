import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-inner-banner',
  templateUrl: './inner-banner.component.html',
  styleUrls: ['./inner-banner.component.scss']
})
export class InnerBannerComponent implements OnInit {

  @Input() title : string = 'Title Here';

  constructor() { }

  slides = [
    {img: "assets/images/dummy-2.jpg"}
  ];
  slideConfig = {
    "slidesToShow": 1, 
    "slidesToScroll": 1
  };

  ngOnInit(): void {
  }

}
