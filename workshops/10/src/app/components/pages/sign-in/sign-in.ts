import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import {
  ReactiveFormsModule,
  FormGroup,
  FormControl,
  Validators,
} from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { SigninService } from '../../../services/signin';

@Component({
  selector: 'app-sign-in',
  imports: [ReactiveFormsModule],
  templateUrl: './sign-in.html',
  styleUrl: './sign-in.css',
})
export class SignIn {
  router = inject(Router);
  toastrService = inject(ToastrService);
  signinService = inject(SigninService);

  loginForm = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });

  handleSubmit() {
    if (this.loginForm.valid) {
      this.signinService.loginUser(this.loginForm.value).subscribe(
        (data: any) => {
          console.log('data:', data);
          if (data.allOK) {
            this.toastrService.success(data.message);
            localStorage.setItem('token', data.data);
            this.router.navigateByUrl('/dashboard');
          }
        },
        (error: any) => {
          //console.log('* error:', error);
          this.toastrService.error(
            error.statusText || 'An error occured',
            'Warning',
            { positionClass: 'toast-top-center', timeOut: 1000 }
          );
          /*
          iconClasses = {
            error: 'toast-error',
            info: 'toast-info',
            success: 'toast-success',
            warning: 'toast-warning',
          };
          positionClass: {
            toast-top-right
            toast-bottom-right
            toast-bottom-left
            toast-top-left
            toast-top-full-width
            toast-bottom-full-width
            toast-top-center
            toast-bottom-center
          }
          this.toastrService.success('Message', 'Title', {
            positionClass: 'toast-top-center',
            timeOut: 3000,
          });
          */
        }
      );
    } else {
      this.toastrService.warning('Invalid form');
    }
  }
}
