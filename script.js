const apiKey = 'WnHbaBWUkKZHqYanQCB2FAGQJ58DOVDfI1iPewLxa1F8lPKQZZpDTBtl';
const cityButton = document.querySelector('.container-md .btn-lg:first-child');
const countrysideButton = document.querySelector('.container-md .btn-lg:last-child');

cityButton.addEventListener('click', () => {
  fetchImages('city');
});

countrysideButton.addEventListener('click', () => {
  fetchImages('countryside');
});

function fetchImages(query) {
  fetch(`https://api.pexels.com/v1/search?query=${query}`, {
    headers: {
      Authorization: apiKey
    }
  })
    .then(response => response.json())
    .then(data => {
      const photos = data.photos;
      const cards = photos.map(photo => {
        return `<div class="card col-3 m-3" style="width: 18rem;">
          <img src="${photo.src.medium}" class="card-img-top" alt="${photo.url}">
          <div class="card-body">
            <h5 class="card-title">${photo.photographer}</h5>
            <p class="card-text">${photo.url}</p>
          </div>
        </div>`;
      });
      const container = document.querySelector('.album');
      container.querySelectorAll('.card').forEach(card => card.remove());
      container.insertAdjacentHTML('beforeend', cards.join(''));
    });
}
