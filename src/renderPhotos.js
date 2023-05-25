import { refs } from './refs';

export function renderPhotos(markup) {
    if (markup === undefined) {
      return;
    }
  return (refs.galleryEl.innerHTML = markup);
}

export function renderMorePhotos(markup) {
    if (markup === undefined) {
      return;
    }
  return refs.galleryEl.insertAdjacentHTML('beforeend', markup);
}
