'use strict';
const d = document;

const $root = d.getElementById('root');

let cards = `
<div class="d-flex flex-wrap">
`;

fetch('file.json')
  .then((res) => res.json())
  .then((info) => {
    for (let i = 0; i < info.length; i++) {
      cards += `
<div class="card">
  <img src="..." class="card-img-top" alt="...">
  <div class="card-body">
  <h5 class="card-title">${info[i].student}</h5>
  </div>
  <div class="card-body">
  <a href="#" class="card-link">Card link</a>
  </div>
</div>
      `;
    }
    cards += '</div>';
    $root.innerHTML = cards;
  })
  .catch((err) => {
    console.log('error:', err);
  });
