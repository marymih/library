let menuBurgerBtn = document.querySelector('.menu-burger-btn');
let menuBurger = document.querySelector('.nav-list');

menuBurgerBtn.addEventListener('click', function() {
    menuBurgerBtn.classList.toggle('menu-burger-btn-active');
    menuBurger.classList.toggle('menu-burger-open');
});

document.addEventListener('click', (e) => {
    if (!menuBurger.contains(e.target) && e.target !== menuBurgerBtn) {
        menuBurger.classList.remove('menu-burger-open');
        menuBurgerBtn.classList.remove('menu-burger-btn-active');
      }
  });
