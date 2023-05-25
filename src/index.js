import Notiflix from 'notiflix';
import axios from 'axios';
import { refs } from './refs';
import { getPhotos } from './fechSearch';
import { createMarkup } from './createMarkup';
import { renderMorePhotos, renderPhotos } from './renderPhotos'

refs.loadMoreEl.style.visibility = 'hidden';
let page = 1;

refs.formEl.addEventListener('submit', e => {
  e.preventDefault();

  page = 1;
  const toSearch = refs.formEl.elements.searchQuery.value;
  getPhotos(toSearch).then(createMarkup).then(renderPhotos)
});

refs.loadMoreEl.addEventListener('click', () => {
  page += 1;
  const toSearch = refs.formEl.elements.searchQuery.value;
  getPhotos(toSearch, page).then(createMarkup).then(renderMorePhotos);
});


function checkIfEnd(params) {
  
}