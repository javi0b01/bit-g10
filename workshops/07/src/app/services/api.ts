import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor() {}
  httpClient = inject(HttpClient);

  getData() {
    return this.httpClient.get('https://catfact.ninja/fact');
  }
}
