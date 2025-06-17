import { Component } from '@angular/core';
import { CounterParent } from '../../counter-parent/counter-parent';

@Component({
  selector: 'app-challenges',
  imports: [CounterParent],
  templateUrl: './challenges.html',
  styleUrl: './challenges.css',
})
export class Challenges {}
