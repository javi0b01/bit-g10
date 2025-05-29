export function showPokemons(pokemons) {
  let list = '<ol>';
  for (const pokemon of pokemons) list += `<li>${pokemon.name}</li>`;
  list += '</ol>';
  const $main = document.querySelector('main');
  $main.innerHTML = list;
}

export function showError(msg) {
  alert(msg);
}
