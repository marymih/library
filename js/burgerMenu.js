const menuBurgerBtn = document.querySelector('.menu-burger-btn'),
      menuBurger = document.querySelector('.nav-list'),
      menuBurgerItem = document.querySelectorAll('.nav-item');


const burgerMenu = () => {

  menuBurgerBtn.addEventListener('click', () => {
    menuBurgerBtn.classList.toggle('menu-burger-btn-active');
    menuBurger.classList.toggle('menu-burger-open');
  });

  document.addEventListener('click', (e) => {
    if (!menuBurger.contains(e.target) && e.target !== menuBurgerBtn) {
      menuBurger.classList.remove('menu-burger-open');
      menuBurgerBtn.classList.remove('menu-burger-btn-active');
    }
  });

  menuBurgerItem.forEach((item) => {
    item.addEventListener('click', () => {
      menuBurger.classList.remove('menu-burger-open');
      menuBurgerBtn.classList.remove('menu-burger-btn-active');
    });
  });
};

export default burgerMenu;
