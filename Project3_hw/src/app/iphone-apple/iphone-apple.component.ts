import { Component } from '@angular/core';

type Iphone = {
  text: string;
  colorHex: string;
  pictureSrc: string;
}

@Component({
  selector: 'app-iphone-apple',
  templateUrl: './iphone-apple.component.html',
  styleUrl: './iphone-apple.component.css'
})



export class IphoneAppleComponent {
  public currentImage: Iphone;
  public iphones: Iphone[] = [
    { text: "6.7 iPhone 15 Plus and 6.1 iPhone 15 in Pink", colorHex: "#e6d0d1", pictureSrc: "../../assets/iPhones/pink.jpg" },

    { text: "6.7 iPhone 15 Plus and 6.1 iPhone 15 in Yellow", colorHex: "#eae5c8", pictureSrc: "../../assets/iPhones/yellow.jpg" },

    { text: "6.7 iPhone 15 Plus and 6.1 iPhone 15 in Green", colorHex: "#d0d8c9", pictureSrc: "../../assets/iPhones/green.jpg" },

    { text: "6.7 iPhone 15 Plus and 6.1 iPhone 15 in Blue", colorHex: "#d5dcdf", pictureSrc: "../../assets/iPhones/blue.jpg" },

    { text: "6.7 iPhone 15 Plus and 6.1 iPhone 15 in Black", colorHex: "#3f4244", pictureSrc: "../../assets/iPhones/black.jpg" }
  ];


  constructor() {
    this.currentImage = this.iphones[0];
  }

  changeImage(img: Iphone) {
    this.currentImage = img;
  }
}



