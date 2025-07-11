import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import {
  ReactiveFormsModule,
  FormGroup,
  FormControl,
  Validators,
} from '@angular/forms';
import { SigninService } from '../../../services/signin';

@Component({
  selector: 'app-sign-in',
  imports: [ReactiveFormsModule],
  templateUrl: './sign-in.html',
  styleUrl: './sign-in.css',
})
export class SignIn {
  router = inject(Router);
  signinService = inject(SigninService);

  loginForm = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });

  handleSubmit() {
    if (this.loginForm.valid) {
      this.signinService
        .loginUser(this.loginForm.value)
        .subscribe((res: any) => {
          if (res.allOK) {
            console.log('res:', res);
            localStorage.setItem('token', res.data);
            this.router.navigateByUrl('/dashboard');
          } else {
            // TODO: notify
            console.log('An error occurred');
          }
        });
    } else {
      // TODO: notify
      console.log('Invalid form');
    }
  }
}
