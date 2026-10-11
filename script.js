const filterButtons = document.querySelectorAll('.filter-btn');
const carItems = document.querySelectorAll('.car-item');

filterButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const category = button.dataset.filter;

    filterButtons.forEach((btn) => btn.classList.toggle('active', btn === button));

    carItems.forEach((item) => {
      const matches = category === 'all' || item.dataset.category === category;
      item.classList.toggle('hidden', !matches);
    });
  });
});
