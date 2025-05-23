'use strict';
const $p1 = document.getElementById('p1');
const $p2 = document.getElementById('p2');
const $l1 = document.getElementById('l1');
const $l2 = document.getElementById('l2');
const $f1 = document.getElementById('f1');
const $f2 = document.getElementById('f2');
const $b1 = document.getElementById('b1');

const miVaribleConstante = 'Contenido una variable constante';
const miArreglo = ['Anne', 'John'];
const miObjeto = {
  marca: 'Ferrari',
  color: 'Rojo',
};

$p1.textContent = 'Contenido desde JavaScript';
$p2.textContent = miVaribleConstante;

let items = '';

for (let i = 0; i < miArreglo.length; i++) {
  items += `<li>${miArreglo[i]}</li>`;
}

$l1.innerHTML = items;
$l2.innerHTML = `<li>${miObjeto.marca}</li><li>${miObjeto['color']}</li>`;

/* API (Application Programming Interface) */
/* Promise: Pending, Resolve, Reject  */
/* Manejo de errores */
/* Asyncronia */

fetch('https://random-d.uk/api/v2/random')
  .then((response) => response.json())
  .then((data) => {
    console.log('data:', data);
    $f1.innerHTML = `<img src="${data.url}" alt="${data.message}">
      <figcaption>${data.message}</figcaption>`;
  })
  .catch((error) => {
    alert('Ha ocurrido un error, por favor intente más tarde.');
    console.log('error:', error);
  });

$b1.addEventListener('click', () => {
  obtenerInfo();
});

async function obtenerInfo() {
  try {
    const response = await fetch('https://dog.ceo/api/breeds/image/random');
    const data = await response.json();
    console.log('data:', data);
    $f2.innerHTML = `<img src="${data.message}" alt="Image">
      <figcaption>${data.status}</figcaption>`;
  } catch (error) {
    alert('Ha ocurrido un error, por favor intente más tarde.');
    console.log('error:', error);
  }
}
