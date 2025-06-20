import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgOptimizedImage, TitleCasePipe } from '@angular/common';
import { Navigation } from '../../shared/navigation/navigation';
import { Pokeapi } from '../../../services/pokeapi';
import { IPokemon } from '../../../interfaces/pokemon';

@Component({
  selector: 'app-pokemon',
  imports: [Navigation, NgOptimizedImage, TitleCasePipe],
  templateUrl: './pokemon.html',
  styleUrl: './pokemon.css',
})
export class Pokemon implements OnInit {
  private pokeapi = inject(Pokeapi);
  private route = inject(ActivatedRoute);
  pokemon!: IPokemon;
  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const name = params['name'];
      this.pokeapi.getPokemonDetail(name).subscribe((res: any) => {
        const { id, name, height, weight, base_experience, sprites } = res;
        this.pokemon = {
          id,
          name,
          height,
          weight,
          base_experience,
          front_default: sprites.front_default,
        };
      });
    });
  }
}
