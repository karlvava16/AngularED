import { Component } from '@angular/core';
import { Input } from '@angular/core';



@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})

export class ChildComponent {
  @Input() pet?: any; 
  calculateAge(birthYear: number): string {
    const currentYear = new Date().getFullYear();
    const age = currentYear - birthYear;
    return age > 1 ? age + ' years' :'up to one year';
  }
}

