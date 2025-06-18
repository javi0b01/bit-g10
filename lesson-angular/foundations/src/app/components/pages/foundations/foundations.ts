import { Component, inject } from '@angular/core';
import {
  FormsModule,
  ReactiveFormsModule,
  FormGroup,
  FormControl,
} from '@angular/forms';
import {
  DecimalPipe,
  LowerCasePipe,
  UpperCasePipe,
  DatePipe,
  CurrencyPipe,
  TitleCasePipe,
} from '@angular/common';
import { IUser } from '../../../interfaces/example';
import { MotorcyclesService } from '../../../services/motorcycles';
import { Parent } from '../../parent/parent';

@Component({
  selector: 'app-foundations',
  imports: [
    Parent,
    FormsModule,
    ReactiveFormsModule,
    UpperCasePipe,
    LowerCasePipe,
    TitleCasePipe,
    DecimalPipe,
    DatePipe,
    CurrencyPipe,
  ],
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
  // Form, template-driven
  name: string = '';
  handleName() {
    console.log(this.name);
  }
  // Form, reactive
  loginForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });
  handleSubmit() {
    console.log(this.loginForm.value);
  }
  // Pipes
  text: string = 'heLLo, tEaM!';
  num: number = 999.1234;
  date = new Date(2025, 5, 17);
  price = 4500.96;
  // Interfaces
  user: IUser = {
    firstName: 'Anne',
    lastname: 'Doe',
  };
  // Services - inject
  motorcyclesService = inject(MotorcyclesService);
}
