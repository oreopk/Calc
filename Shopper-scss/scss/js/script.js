const mobileMenu = document.querySelector('.mobile-menu');
mobileMenu
  .querySelector('.mobile-menu__close')
  .addEventListener('click', (event) => {
    mobileMenu.classList.add('hidden');
  });
