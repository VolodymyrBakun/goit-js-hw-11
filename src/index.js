import Notiflix from 'notiflix';
import axios from 'axios';
import { refs } from './refs';
import { getPhotos } from './fechSearch';
import { renderPhotos } from './RenderPhotos';

refs.formEl.addEventListener('submit', (e) => {
  e.preventDefault();
  const toSearch = refs.formEl.elements.searchQuery.value;
  getPhotos(toSearch).then(renderPhotos)

})
  