import { Component, inject } from '@angular/core';
import { ApiService } from '../../services/api';
import { ApiData } from '../../interfaces/api-data';

@Component({
  selector: 'app-api-example',
  imports: [],
  templateUrl: './api-example.html',
  styleUrl: './api-example.css',
})
export class ApiExample {
  apiService = inject(ApiService);

  info: ApiData | null = null;

  handleClick() {
    this.apiService.getData().subscribe((response: any) => {
      this.info = response;
    });
  }
}
