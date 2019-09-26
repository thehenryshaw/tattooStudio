'use srtict';

const list = document.querySelector('.menu-list');
const links = Array.from(document.querySelectorAll('.menu-item a'));
const submitForm = document.querySelector('#submitForm');
const closeForm = document.querySelector('.close-form');
const questionarySection = document.querySelector('.questionary');
const aboutSection = document.querySelector('.about');
const contactsSection = document.querySelector('.contacts');

links.forEach(el => {
  el.addEventListener('click', (e) => {
    links.forEach(el => {
      el.classList.remove('active');
    })
    e.currentTarget.classList.add('active');
  })
});


list.addEventListener('click', event => {
  if (event.target.classList.contains('menu-list')) {
    return;
  }
  let top;

  switch (event.target.dataset.id) {
    case 'Записаться':
      top = questionarySection.offsetTop;
      break;
    case 'Обо мне':
      top = aboutSection.offsetTop;
      break;
    case 'Контакты':
      top = contactsSection.offsetTop;
      break;
  }

  window.scrollTo({
    top: top,
    behavior: 'smooth'
  })
});

submitForm.addEventListener('submit', event => {
  event.preventDefault();
  fetch('http://localhost:3000', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      firstName: submitForm.querySelector('input[name="firstName"]').value,
      lastName: submitForm.querySelector('input[name="lastName"]').value,
      age: submitForm.querySelector('input[name="age"]').value,
      phone: submitForm.querySelector('input[name="phone"]').value,
      email: submitForm.querySelector('input[name="email"]').value,
      body: submitForm.querySelector('input[name="body"]').value,
      tattooHeight: submitForm.querySelector('input[name="tattooHeight"]').value,
      tattooWidth: submitForm.querySelector('input[name="tattooWidth"]').value,
      text: submitForm.querySelector('textarea[name="text"]').value
    })
  })
  closeForm.click();
})
