import { Component } from '@angular/core';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
  showHello: boolean = false;

  toggleMessage() {
    this.showHello = !this.showHello;
  }
}
