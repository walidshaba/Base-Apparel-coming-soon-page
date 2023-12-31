const email = document.getElementById('email');
const form = document.querySelector('form');
const errorIcon = document.getElementById('error');
const submit = document.querySelector('button');
const errorMessage = document.querySelector('form p.bastard');

form.addEventListener('submit', (e) => {
  if (!email.value.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
    e.preventDefault();
    // errorIcon.classList.toggle('active');
    errorIcon.className = 'error active';
    errorMessage.className = 'bastard active';
    // errorMessage.classList.toggle('active');
  }
});
