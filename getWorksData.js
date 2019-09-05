'use strict';

const modalImage = document.querySelector('.modal-image');
const imagesWorksContainer = document.querySelector('.works-image__container');
const imagesWorksList = document.querySelector('.works-list');

const script = document.createElement('SCRIPT');
script.src = "https://api.vk.com/method/photos.get?owner_id=119292577&album_id=264988478&access_token=f80d6e95f80d6e95f80d6e95b9f861dbc2ff80df80d6e95a57db8cdbb8d27fb5b24cdf7&v=5.101&callback=callbackWorksFunc";
document.getElementsByTagName("head")[0].appendChild(script);

function callbackWorksFunc(result) {
  imagesWorksList.innerHTML = result.response.items.reduce((prev, el) => {
    const src = el.sizes.find(size => size.type === 'y');
    return prev + `<li class="d-flex flex-column works-item">
    <img src=${src.url} class="works-item__img" data-src=${src.url} data-toggle="modal" data-target="#modalCenter">
    <button class="btn mt-3 w-50 text-uppercase text-white works-button" data-src=${src.url} data-toggle="modal" data-target="#modalCenter">Увеличить</button>
    </li>`
  }, '')
}

window.addEventListener('load', () => {
  imagesWorksList.addEventListener('click', event => {
    if (event.target.dataset.src !== undefined ) {
      showModal(event.target.dataset.src);
    }
  });
})

function showModal(src) {
  modalImage.src = src;
}
