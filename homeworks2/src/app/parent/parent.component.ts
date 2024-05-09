import { Component } from '@angular/core';
import { ChildComponent } from '../child/child.component';
import { petsData } from './petsData';

interface Pet {
  name: string;
  species?: string;
  favFoods?: string[];
  birthYear?: number;
  photo?: string;
}

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css'
})

export class ParentComponent {
  pets: Pet[] = petsData;
}
