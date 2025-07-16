import { Injectable, inject } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class SigninService {
  constructor() {}

  private router = inject(Router);
  private httpClient = inject(HttpClient);
  private apiUrl = 'http://localhost:4100/users/sign-in';

  loginUser(payload: any) {
    return this.httpClient.post(this.apiUrl, payload);
  }

  isUserLogged() {
    if (localStorage.getItem('token')) {
      return true;
    } else {
      return false;
    }
  }

  logoutUser() {
    localStorage.removeItem('token');
    this.router.navigate(['/']);
  }
}
