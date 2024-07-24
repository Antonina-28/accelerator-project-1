document.addEventListener('DOMContentLoaded', () => {
  const lists = document.querySelectorAll('.faq__sublist');
  const links = document.querySelectorAll('.faq__link');

  function toggleFaqList(el) {
    links.forEach((el, index) => {
      if (el.classList.contains('faq__link--current')) {
        el.classList.remove('faq__link--current');
      }
      if (lists[index].classList.contains('faq__sublist--current')) {
        lists[index].classList.remove('faq__sublist--current');
      }
    });

    el.classList.toggle('faq__link--current');
  }

  links.forEach((el, index) => {
    el.addEventListener('click', (e) => {
      e.preventDefault();
      toggleFaqList(el);

      lists[index].classList.toggle('faq__sublist--current');
    });
  });

});
