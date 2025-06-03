'use strict';
export function showPokemon(pokemon) {
  showSpinner(true);
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
  const ability = abilities[0].ability.name;
  const type = types[0].type.name;
  let html = `
<figure>
  <img src="${sprites.front_default}" alt="Front image ${name}">
  <figcaption>#${id} ${name}</figcaption>
</figure>
<ul>
  <li><span>Ability </span> ${ability}</li>
  <li><span>Base experience </span> ${base_experience}</li>
  <li><span>Type </span> ${type}</li>
  <li><span>Height </span> ${height} dm.</li>
  <li><span>Weight </span> ${weight} hg.</li>
</ul>
    `;
  const $card = document.getElementById('card');
  $card.innerHTML = html;
  setTimeout(() => {
    showSpinner(false);
    document.getElementById('detail').style.display = 'flex';
  }, 1000);
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
  }, 2000);
}

export function showError(msg) {
  alert(msg);
}

function showSpinner(visible) {
  const $main = document.querySelector('main');
  const $aside = document.getElementById('spinner');
  if (visible) {
    $aside.classList.add('spinner');
    $aside.classList.remove('d-none');
    $main.classList.add('d-none');
  } else {
    $aside.classList.add('d-none');
    $aside.classList.remove('spinner');
    $main.classList.remove('d-none');
  }
}
