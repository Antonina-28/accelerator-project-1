document.addEventListener('DOMContentLoaded', () => {
  const lists = document.querySelectorAll('.price__sublist');
  const links = document.querySelectorAll('.price__link');

  function toggleFaqList(el) {
    links.forEach((el, index) => {
      if (el.classList.contains('price__link--current')) {
        el.classList.remove('price__link--current');
      }
      if (lists[index].classList.contains('price__sublist--current')) {
        lists[index].classList.remove('price__sublist--current');
      }
    });

    el.classList.toggle('price__link--current');
  }

  links.forEach((el, index) => {
    el.addEventListener('click', (e) => {
      e.preventDefault();
      toggleFaqList(el);

      lists[index].classList.toggle('price__sublist--current');
    });
  });
});