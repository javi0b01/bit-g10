import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  imports: [],
  templateUrl: './child.html',
  styleUrl: './child.css',
})
export class Child {
  @Input() favoriteColor: string = '';

  @Output() addElementEvent: EventEmitter<string> = new EventEmitter<string>();

  handleClick() {
    this.addElementEvent.emit('abc');
  }
}
