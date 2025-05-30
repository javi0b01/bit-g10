'use strict';
export function showPokemons(pokemons) {
  let html = '<section>';
  for (const pokemon of pokemons) {
    html += `
<figure>
  <img src="${pokemon.imgPokemon}" alt="Image of ${pokemon.namePokemon}">
  <figcaption>${pokemon.namePokemon}</figcaption>
</figure>
  `;
  }
  html += '</section>';
  const $main = document.querySelector('main');
  $main.innerHTML = html;
}

export function showError(msg) {
  alert(msg);
}
