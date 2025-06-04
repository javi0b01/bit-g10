'use strict';
import { getData } from './api.js';
import { showPokemon, showPokemons, showError } from './shows.js';

let pokemons = [];

document.addEventListener('DOMContentLoaded', () => {
  if (location.href.endsWith('products.html')) {
    getPokemons('https://pokeapi.co/api/v2/pokemon/');
  }
});

document.getElementById('close').addEventListener('click', () => {
  document.getElementById('detail').style.display = 'none';
});

window.addEventListener('click', function (event) {
  if (event.target === this.document.getElementById('detail')) {
    document.getElementById('detail').style.display = 'none';
  }
});

async function getPokemons(url) {
  const res = await getData(url);
  if (res.message === 'success') {
    const { next, previous } = res.data;
    setPokemons(res.data.results);
    setPagination({ next, previous });
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

function watchPokemons() {
  const $pokemons = document.querySelectorAll('.pokemon');
  $pokemons.forEach(($pokemon) => {
    $pokemon.addEventListener('click', () => {
      const pokemonSelected = pokemons.filter(
        (pokemon) => pokemon.id == $pokemon.id
      );
      showPokemon(pokemonSelected[0]);
    });
  });
}

function setPagination(pagination) {
  const $left = document.getElementById('left');
  const $right = document.getElementById('right');

  if (pagination.next) {
    $right.classList.remove('d-none');
  } else {
    $right.classList.add('d-none');
  }
  if (pagination.previous) {
    $left.classList.remove('d-none');
  } else {
    $left.classList.add('d-none');
  }

  $left.addEventListener('click', () => {
    if (pagination.previous) getPokemons(pagination.previous);
  });
  $right.addEventListener('click', () => {
    if (pagination.next) getPokemons(pagination.next);
  });
}
