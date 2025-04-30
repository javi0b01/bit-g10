'use strict';
const $form = document.getElementById('form');

$form.addEventListener('submit', (event) => {
  event.preventDefault();
  const name = $form.name.value;
  const message = $form.message.value;
  const result = `${name}, gracias por tu mensaje: "${message}".  Pronto te responderemos.`;
  alert(result);
  $form.reset();
});
