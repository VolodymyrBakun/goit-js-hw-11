import { refs } from "./refs";
import axios from 'axios';


export async function getPhotos(toGet) {
    
    
  try {
    const response = await axios.get(
      `https://pixabay.com/api/?key=36594676-c6f23ee7c090487a3a64019ea&q=${toGet}&image_type=photo&orientation=horizontal&safesearch=true`
    );
    return response;
  } catch (error) {
    console.error(error);
  }
}

