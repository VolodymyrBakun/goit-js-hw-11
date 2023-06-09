
export function createMarkup(photos) {
    if (photos === undefined) {
        return
    }
    const markup = photos.data.hits
      .map(photo => {
        return `<div class="photo-card">
  <img src="${photo.webformatURL}" alt="${photo.tags}" loading="lazy" width=300px />
  <div class="info">
    <p class="info-item">
      <b>Likes ${photo.likes}</b>
    </p>
    <p class="info-item">
      <b>Views ${photo.views}</b>
    </p>
    <p class="info-item">
      <b>Comments ${photo.comments}</b>
    </p>
    <p class="info-item">
      <b>Downloads ${photo.downloads}</b>
    </p>
  </div>
</div>`;
      })
        .join('');
    return markup
}