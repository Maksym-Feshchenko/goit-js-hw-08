import { galleryItems } from './gallery-items';

import SimpleLightbox from "simplelightbox";
import SimpleLightbox from "simplelightbox/dist/simple-lightbox.esm";



// Change code below this line

const galleryContainer = document.querySelector('.js-gallery')
const markupGallery = createGallaryMarkup(galleryItems);

galleryContainer.insertAdjacentHTML('beforeend', markupGallery);

galleryContainer.addEventListener('click', onGalleryContainerClick)

function createGallaryMarkup(galleryItems) {
    return galleryItems.map(({ preview, original, description }) => {
      return `
        <div class="gallery__item">
          <a class="gallery__link" href="${original}">
            <img
              class="gallery__image"
              src="${preview}"
              data-source="${original}"
              alt="${description}"
            />
          </a>
        </div>
      `;
    })
    .join('');
  }

function onGalleryContainerClick(e) {
  e.preventDefault();
  
  if (e.target.nodeName !== 'IMG') {
    return;
  }
  const imageSrc = e.target.dataset.source;
  const imageModalSrc = basicLightbox.create(`<img src="${imageSrc}" width="1200">`);
  imageModalSrc.show();
}




