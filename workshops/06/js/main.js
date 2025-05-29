'use strict';
import { getPokemons } from './api.js';
import { showPokemons, showError } from './shows.js';

const d = document;

d.addEventListener('DOMContentLoaded', async () => {
  const pokemons = await getPokemons();
  if (pokemons.message === 'success') showPokemons(pokemons.data.results);
  else showError(pokemons.message);
});
