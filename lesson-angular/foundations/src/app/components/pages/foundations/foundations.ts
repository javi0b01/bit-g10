import { Component } from '@angular/core';

@Component({
  selector: 'app-foundations',
  imports: [],
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

  arr = [1, 2, 3, 4];

  myMethod() {}
}
