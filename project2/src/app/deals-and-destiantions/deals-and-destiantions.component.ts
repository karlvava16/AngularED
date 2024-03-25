import { Component } from '@angular/core';
import { articles2 } from '../articles';


@Component({
  selector: 'app-deals-and-destiantions',
  templateUrl: './deals-and-destiantions.component.html',
  styleUrl: './deals-and-destiantions.component.css'
})
export class DealsAndDestiantionsComponent {
  articles2 = articles2;
}
