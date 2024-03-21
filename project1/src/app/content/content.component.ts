import { Component } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrl: './content.component.css'
})
export class ContentComponent {
  items: { title: string, content: string }[] = [];

  constructor() {
    for (let i = 0; i < 5; i++) {
      this.items.push({
        title: 'Lorem Ipsum',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
      });
    }
  }
}
