'use strict';
import { getData } from './api.js';
import { showPokemons, showPokemon, showError } from './shows.js';

let pokemons = [];

document.addEventListener('DOMContentLoaded', () => {
  if (location.href.endsWith('products.html'))
    getPokemons('https://pokeapi.co/api/v2/pokemon/');
});

document.getElementById('close').addEventListener('click', function () {
  document.getElementById('detail').style.display = 'none';
});

window.addEventListener('click', function (event) {
  if (event.target === document.getElementById('detail')) {
    document.getElementById('detail').style.display = 'none';
  }
});

async function getPokemons(url) {
  const res = await getData(url);
  if (res.message === 'success') {
    const { count, next, previous, results } = res.data;
    setPokemons(results);
    setPagination({ count, next, previous });
  } else showError(res.message);
}

async function getPokemon(result) {
  const res = await getData(result.url);
  if (res.message === 'success') {
    const pokemon = res.data;
    const {
      id,
      name,
      height,
      weight,
      abilities,
      base_experience,
      types,
      sprites,
    } = pokemon;
    return {
      id,
      name,
      height,
      weight,
      abilities,
      base_experience,
      types,
      sprites,
    };
  } else showError(res.message);
}

async function setPokemons(results) {
  const arr = [];
  for (const result of results) {
    const pokemon = await getPokemon(result);
    arr.push(pokemon);
  }
  pokemons = [...arr];
  showPokemons(pokemons);
  watchPokemons();
}

function setPagination(pagination) {
  if (pagination) {
    const $aLeft = document.getElementById('aLeft');
    const $aRight = document.getElementById('aRight');
    if (pagination.next) $aRight.classList.remove('d-none');
    else $aRight.classList.add('d-none');
    if (pagination.previous) $aLeft.classList.remove('d-none');
    else $aLeft.classList.add('d-none');
    $aLeft.addEventListener('click', () => {
      if (pagination.previous) getPokemons(pagination.previous);
    });
    $aRight.addEventListener('click', () => {
      if (pagination.next) getPokemons(pagination.next);
    });
  }
}

function watchPokemons() {
  const $pokemons = document.querySelectorAll('.pokemon');
  $pokemons.forEach((p) => {
    p.addEventListener('click', () => {
      const pokemonSelected = pokemons.filter((i) => i.id == p.id);
      showPokemon(pokemonSelected[0]);
    });
  });
}
