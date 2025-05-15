'use strict';
const $msg = document.getElementById('message');
const $form = document.getElementById('loginForm');

$form.addEventListener('submit', (event) => {
  event.preventDefault();
  login();
});

function login() {
  const username = $form.username.value;
  const password = $form.password.value;
  let message = '';
  if (username === 'pepa' && password === 'ABC123') {
    $msg.classList.add('success');
    message = 'Bienvenida';
    $form.style.display = 'none';
  } else {
    $msg.classList.add('warning');
    message = 'Acceso denegado';
  }
  $msg.textContent = message;
}

/* function login(username, password) {
  if (username === 'pepa' && password === 'ABC123') {
    console.log('Bienvenida');
  } else {
    console.log('Acceso denegado');
  }
} */
