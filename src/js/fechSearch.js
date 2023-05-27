import axios from 'axios';

export function getPhotos(toGet, page = 1) {
  return axios.get(
    `https://pixabay.com/api/?key=36594676-c6f23ee7c090487a3a64019ea&q=${toGet}&image_type=photo&orientation=horizontal&safesearch=true&per_page=40&page=${page}`
  );
}
