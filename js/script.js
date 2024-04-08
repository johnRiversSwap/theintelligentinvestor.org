const images = document.querySelectorAll('.fullWidthToggle');

images.forEach(image => {
  image.addEventListener('click', () => {
    image.classList.toggle('fullWidth');
  });
});

document.addEventListener('click', (event) => {
  if (!event.target.closest('.fullWidthToggle')) {
    images.forEach(image => {
      image.classList.remove('fullWidth');
    });
  }
});
