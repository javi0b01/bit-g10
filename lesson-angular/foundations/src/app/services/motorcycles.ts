import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MotorcyclesService {
  private motorcycles = ['honda', 'yamaha', 'suzuki', 'ducati'];
  // all
  getMotorcycles(): string[] {
    return this.motorcycles;
  }
  // one
  getMotorcycle(id: number): string {
    return this.motorcycles[id];
  }
}
