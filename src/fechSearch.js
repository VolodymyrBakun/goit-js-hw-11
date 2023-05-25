import { refs } from "./refs";
import axios from 'axios';
import Notiflix from 'notiflix';


export async function getPhotos(toGet, page = 1) {
    
    
  try {
    const response = await axios.get(
      `https://pixabay.com/api/?key=36594676-c6f23ee7c090487a3a64019ea&q=${toGet}&image_type=photo&orientation=horizontal&safesearch=true&per_page=40&page=${page}`
    );
    if (response.data.hits.length === 0) {
      Notiflix.Notify.warning(
        'Sorry, there are no images matching your search query. Please try again.'
      );
    }
    return response;
  } catch (error) {
    console.error(error);
  }
}

