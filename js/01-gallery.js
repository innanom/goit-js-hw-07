import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryEl = document.querySelector(".gallery");
const galleryMarkUp = createGalleryItems(galleryItems);

galleryEl.insertAdjacentHTML('beforeend', galleryMarkUp);

function createGalleryItems(galleryItems) {
    return galleryItems.map(
        ({ preview, original, description }) => {
            return `<li class="gallery__item">
        <a class="gallery__link" href="${original}" >
            <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
            />
        </a>
    </li>`;
        }
    ).join("");
}

galleryEl.addEventListener('click', onShowGalleryEl)

function onShowGalleryEl(event) {
    event.preventDefault()
    if (event.target.nodeName !== 'IMG') {
        return;
    }
    
    const instance = basicLightbox.create(`
    <img src="${event.target.dataset.source}">
`)
    
    instance.show();

    galleryEl.addEventListener('keydown', (event) => {
        if (event.code === "Escape") {
            instance.close()
        }  
})
}



