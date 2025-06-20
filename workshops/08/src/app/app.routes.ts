import { Routes } from '@angular/router';
import { Home } from './components/pages/home/home';
import { Pokemon } from './components/pages/pokemon/pokemon';
import { Pokemons } from './components/pages/pokemons/pokemons';
import { PageNotFound } from './components/pages/page-not-found/page-not-found';

export const routes: Routes = [
  { path: 'home', component: Home, title: 'Home' },
  { path: 'pokemon/:name', component: Pokemon, title: 'Pokemon Detail' },
  { path: 'pokemons', component: Pokemons, title: 'Pokemons' },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: PageNotFound, title: 'Page Not Found' },
];
