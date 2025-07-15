import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class SigninService {
  private httpClient = inject(HttpClient);
  private router = inject(Router);
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

  logutUser() {
    localStorage.removeItem('token');
    this.router.navigate(['/']);
  }
}
