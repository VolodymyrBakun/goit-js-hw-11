import Notiflix from 'notiflix';
import axios from 'axios';
import { refs } from './js/refs';
import { getPhotos } from './js/fechSearch';
import { createMarkup } from './js/createMarkup';
import { renderMorePhotos, renderPhotos } from './js/renderPhotos';
import { responseCheck, responseCheckOnLoadMore } from './js/responseCheck';

let page = 1;

refs.formEl.addEventListener('submit', async e => {
  e.preventDefault();

  page = 1;
  const toSearch = refs.formEl.elements.searchQuery.value.trim();
  const response = await getPhotos(toSearch);
  const checkedResponse = await responseCheck(response, page);
  const markup = await createMarkup(checkedResponse);
  const render = await renderPhotos(markup);

  // getPhotos(toSearch).then(createMarkup).then(renderPhotos);
});

refs.loadMoreEl.addEventListener('click', async () => {
  page += 1;
  const toSearch = refs.formEl.elements.searchQuery.value.trim();

  const response = await getPhotos(toSearch, page);
  const checkedResponseOnLoadMore = responseCheckOnLoadMore(response, page);
  const markup = await createMarkup(checkedResponseOnLoadMore);
  const render = renderMorePhotos(markup);

  // getPhotos(toSearch, page).then(createMarkup).then(renderMorePhotos);
});
