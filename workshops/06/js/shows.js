'use strict';
export function showPokemon(pokemon) {
  showSpinner(true);
  const html = `
<figure id="${pokemon.id}" class="pokemon">
  <img src="${pokemon.sprites.front_default}" alt="Image of ${pokemon.name}">
  <figcaption>#${pokemon.id} ${pokemon.name}</figcaption>
</figure>
<ul>
  <li>Ability: ${pokemon.abilities[0].ability.name}</li>
  <li>Base experience: ${pokemon.base_expirience}</li>
  <li>Type: ${pokemon.types[0].type.name}</li>
  <li>Height: ${pokemon.height}</li>
  <li>weight: ${pokemon.weight}</li>
</ul>
    `;
  const $card = document.getElementById('card');
  $card.innerHTML = html;

  setTimeout(() => {
    showSpinner(false);
    document.getElementById('detail').style.display = 'flex';
  }, 750);
}

export function showPokemons(pokemons) {
  showSpinner(true);
  let html = '';
  for (const pokemon of pokemons) {
    html += `
<figure id="${pokemon.id}" class="pokemon">
  <img src="${pokemon.sprites.back_default}" alt="Image of ${pokemon.name}">
  <figcaption>${pokemon.name}</figcaption>
</figure>
  `;
  }
  const $pokemons = document.querySelector('.pokemons');
  $pokemons.innerHTML = html;

  setTimeout(() => {
    showSpinner(false);
  }, 1500);
}

export function showError(msg) {
  alert(msg);
}

function showSpinner(visible) {
  const $spinner = document.getElementById('spinner');
  const $main = document.querySelector('main');
  if (visible) {
    $spinner.classList.remove('d-none');
    $spinner.classList.add('spinner');
    $main.classList.add('d-none');
  } else {
    $spinner.classList.remove('spinner');
    $spinner.classList.add('d-none');
    $main.classList.remove('d-none');
  }
}
