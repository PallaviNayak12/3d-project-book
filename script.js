const pages = document.querySelectorAll('.page');
let current = 0;

pages.forEach((page, index) => {
  page.addEventListener('click', () => {
    if (index === current) {
      page.classList.add('flipped');
      current++;
    } else if (index === current - 1) {
      page.classList.remove('flipped');
      current--;
    }
  });
});
