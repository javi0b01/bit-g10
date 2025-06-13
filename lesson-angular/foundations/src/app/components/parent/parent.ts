import { Component } from '@angular/core';
import { Child } from '../child/child';

@Component({
  selector: 'app-parent',
  imports: [Child],
  templateUrl: './parent.html',
  styleUrl: './parent.css',
})
export class Parent {
  arr: string[] = [];

  handleAddElementEvent(element: string) {
    this.arr.push(element);
    console.log(this.arr);
  }
}
