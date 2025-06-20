import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class Pokeapi {
  constructor() {}
  private httpClient = inject(HttpClient);
  private apiUrl = 'https://pokeapi.co/api/v2/pokemon';

  getPokemonList() {
    return this.httpClient.get(this.apiUrl);
  }

  getPokemonDetail(name: string) {
    return this.httpClient.get(`${this.apiUrl}/${name}`);
  }
}
