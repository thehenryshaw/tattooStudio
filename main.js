'use srtict';

const list = document.querySelector('.menu-list');
const links = Array.from(document.querySelectorAll('.menu-item a'));

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
