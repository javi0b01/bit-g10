import { Component } from '@angular/core';
import { CounterChild } from '../counter-child/counter-child';

@Component({
  selector: 'app-counter-parent',
  imports: [CounterChild],
  templateUrl: './counter-parent.html',
  styleUrl: './counter-parent.css',
})
export class CounterParent {
  quantity: number = 0;
  double: number = 0;

  handleOnEvent(num: number) {
    this.double = num * 2;
  }
}
