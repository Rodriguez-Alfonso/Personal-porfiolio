document.addEventListener('DOMContentLoaded', function() {
  const unsplashAccessKey = 'YOUR_UNSPLASH_ACCESS_KEY'; 
  const sanDiegoPhotos = document.querySelectorAll('.san-diego-photo');

  async function fetchSanDiegoPhoto() {
    try {
      const response = await fetch(`https://api.unsplash.com/photos/random?query=san-diego&client_id=${unsplashAccessKey}`);
      const data = await response.json();
      return data.urls.regular;
    } catch (error) {
      console.error('Error fetching San Diego photo:', error);
      return null;
    }
  }

  sanDiegoPhotos.forEach(async (photo) => {
    const imageUrl = await fetchSanDiegoPhoto();
    if (imageUrl) {
      photo.style.backgroundImage = `url(${imageUrl})`;
    }
  });
});