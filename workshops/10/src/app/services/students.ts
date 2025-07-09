import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class Students {
  private httpClient = inject(HttpClient);
  private apiUrl = 'http://localhost:4100/students';

  getAllStudents() {
    return this.httpClient.get(this.apiUrl);
  }
}
