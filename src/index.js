import Notiflix from 'notiflix';
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

  if (toSearch === '') {
    Notiflix.Notify.info('Please fill in');
    return;
  }

  const response = await getPhotos(toSearch);
  const checkedResponse = responseCheck(response, page);
  const markup = createMarkup(checkedResponse);
  const render = renderPhotos(markup);
});

refs.loadMoreEl.addEventListener('click', async () => {
  page += 1;
  const toSearch = refs.formEl.elements.searchQuery.value.trim();

  const response = await getPhotos(toSearch, page);
  const checkedResponseOnLoadMore = responseCheckOnLoadMore(response, page);
  const markup = createMarkup(checkedResponseOnLoadMore);
  const render = renderMorePhotos(markup);
});
