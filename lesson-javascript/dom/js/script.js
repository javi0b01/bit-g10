'use strict';
/* DOM
  CRUD (Create, Read, Update, Delete)
  Manipulación DOM
  - Eventos
*/
const $root = window.document.getElementById('root');
const $p = window.document.createElement('p');

$p.textContent = 'Hola, Equipo!';

$p.innerHTML = `<span>Hola, </span><strong>DEVS</strong>!`;

$root.appendChild($p);

$p.remove();

$root.innerHTML = `<button>Click me</button>`;

const $button = document.querySelector('button');

$button.addEventListener('click', () => {
  console.log('El usuario hizo click en el botón');
});
