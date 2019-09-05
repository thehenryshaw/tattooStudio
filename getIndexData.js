'use strict';

const modalImage = document.querySelector('.modal-image');
const imagesContainer = document.querySelector('.preview-image__container');
const imagesList = document.querySelector('.preview-list');

const script = document.createElement('SCRIPT');
script.src = "https://api.vk.com/method/photos.get?owner_id=119292577&album_id=264988421&access_token=f80d6e95f80d6e95f80d6e95b9f861dbc2ff80df80d6e95a57db8cdbb8d27fb5b24cdf7&v=5.101&callback=callbackFunc";
document.getElementsByTagName("head")[0].appendChild(script);

function callbackFunc(result) {
  imagesList.innerHTML = result.response.items.reduce((prev, el) => {
    const src = el.sizes.find(size => size.type === 'y');
    return prev + `<li class="d-flex flex-column align-items-center">
    <img src=${src.url} class="preview-item__img" data-src=${src.url} data-toggle="modal" data-target="#modalCenter">
    <button type="button" class="btn mt-3 text-uppercase text-white preview-button" data-src=${src.url} data-toggle="modal" data-target="#modalCenter">Увеличить</button>
    </li>`
  }, '')
};

window.addEventListener('load', () => {
  imagesList.addEventListener('click', event => {
    if (event.target.dataset.src !== undefined ) {
      showModal(event.target.dataset.src);
    }
  });
});

function showModal(src) {
  modalImage.src = src;
};