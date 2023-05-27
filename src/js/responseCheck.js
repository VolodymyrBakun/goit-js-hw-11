import Notiflix from 'notiflix';
import { refs } from './refs';

export function responseCheck(response, page) {
  if (response === undefined) {
    refs.loadMoreEl.hidden = true;

    return;
  }
  if (response.data.hits.length === 0) {
    Notiflix.Notify.warning(
      'Sorry, there are no images matching your search query. Please try again.'
    );
    refs.loadMoreEl.hidden = true;

    return;
  } else {
    Notiflix.Notify.success(
      `Hooray! We found ${response.data.totalHits} images`
    );
  }

  if (response.data.totalHits / 40 <= page) {
    refs.loadMoreEl.hidden = true;
  } else {
    refs.loadMoreEl.hidden = false;
  }

  return response;
}

export function responseCheckOnLoadMore(response, page) {
  if (response === undefined) {
    refs.loadMoreEl.hidden = true;

    return;
  }

  if (response.data.totalHits / 40 <= page) {
    Notiflix.Notify.info(
      "We're sorry, but you've reached the end of search results."
    );
    refs.loadMoreEl.hidden = true;
  }
  return response;
}
