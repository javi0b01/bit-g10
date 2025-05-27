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
  <img class="card-img-top" src="https://github.com/${info[i].usernameGithub}.png" alt="Imagen de perfil de ${info[i].student}">
  <div class="card-body">
  <h5 class="card-title">${info[i].student}</h5>
  </div>
  <div class="card-body">
  <a href="https://github.com/${info[i].usernameGithub}" target="_blank" rel="noopener noreferrer" class="card-link">GitHub</a>
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
