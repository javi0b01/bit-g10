import { Component } from '@angular/core';
import { CounterParent } from '../../counter-parent/counter-parent';
import { ApiExample } from '../../api-example/api-example';

@Component({
  selector: 'app-challenges',
  imports: [CounterParent, ApiExample],
  templateUrl: './challenges.html',
  styleUrl: './challenges.css',
})
export class Challenges {}
