import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor() { }

  slideOpts = {
    initialSlide: 1,
    speed: 400,
    autoplay: true
  };
  imgSlides = [
    {
      url: 'http://www.hand2buy.com/product/upload/photos/43169/201609080932110.jpg'
    },
    {
      url: 'http://www.hand2buy.com/product/upload/photos/43169/201609080932110.jpg'
    },
    {
      url: 'http://www.hand2buy.com/product/upload/photos/43169/201609080932110.jpg'
    },
    {
      url: 'http://www.hand2buy.com/product/upload/photos/43169/201609080932110.jpg'
    }
  ];

}
