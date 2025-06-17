import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-counter-child',
  imports: [],
  templateUrl: './counter-child.html',
  styleUrl: './counter-child.css',
})
export class CounterChild {
  @Input() counter: number = -1;

  @Output() onEvent: EventEmitter<number> = new EventEmitter<number>();

  decrement() {
    this.onEvent.emit(--this.counter);
  }

  increment() {
    this.onEvent.emit(++this.counter);
  }
}
