import { Component, inject, OnInit } from '@angular/core';
import { Navigation } from '../../shared/navigation/navigation';
import { Pokeapi } from '../../../services/pokeapi';
import { RouterLink } from '@angular/router';
import { TitleCasePipe } from '@angular/common';

@Component({
  selector: 'app-pokemons',
  imports: [Navigation, RouterLink, TitleCasePipe],
  templateUrl: './pokemons.html',
  styleUrl: './pokemons.css',
})
export class Pokemons implements OnInit {
  private pokeapi = inject(Pokeapi);
  pokemons!: any[];

  ngOnInit(): void {
    this.pokeapi.getPokemonList().subscribe((res: any) => {
      this.pokemons = res.results;
    });
  }
}
