import { Component } from '@angular/core';
import { Parent } from '../../parent/parent';

@Component({
  selector: 'app-foundations',
  imports: [Parent],
  templateUrl: './foundations.html',
  styleUrl: './foundations.css',
})
export class Foundations {
  // Interpolation
  greet = 'Hello';
  framework: string = 'Angular';
  num1: number = 8;
  num2: number = 2;
  // Control Flow
  // Conditionals
  isLoggedIn: boolean = true;
  // Loops
  devs = [
    {
      id: 1,
      name: 'Anne',
    },
    {
      id: 2,
      name: 'Pepita',
    },
    {
      id: 3,
      name: 'John',
    },
  ];
  // Property binding
  disableEnter: boolean = true;
  imageUrl =
    'https://bitinstitute.online/images/Logo-BIT-institute-cursos-40lg.png';
  // Event handling
  handleClick() {
    console.log('handle click works!');
  }
  cssClassName: string = 'initial-color';
  handleMouseover() {
    this.cssClassName = 'mouseover-color';
  }
  handleMouseleave() {
    this.cssClassName = 'mouseleave-color';
  }
}
