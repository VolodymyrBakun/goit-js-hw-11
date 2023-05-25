import { refs } from './refs';

export function renderPhotos(markup) {
  return (refs.galleryEl.innerHTML = markup);
}

export function renderMorePhotos(markup) {
  return refs.galleryEl.insertAdjacentHTML('beforeend', markup);
}
