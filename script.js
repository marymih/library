window.addEventListener('DOMContentLoaded', () => {
  // бургер-меню
  const menuBurgerBtn = document.querySelector('.menu-burger-btn'),
    menuBurger = document.querySelector('.nav-list'),
    menuBurgerItem = document.querySelectorAll('.nav-item');

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

  // слайдер
  let position = 1;
  const slidesToShow = 3;
  const slidesToScroll = 1;
  const container = document.querySelector('.slider-container');
  const track = document.querySelector('.slider-items');
  const items = document.querySelectorAll('.slider-item');
  const btnPrev = document.querySelector('.btn-prev');
  const btnMid = document.querySelector('.btn-mid');
  const btnNext = document.querySelector('.btn-next');

  const showSlides = (n) => {
    if (n > items.length - slidesToShow + 1) {
      position = items.length - slidesToShow + 1;
    }
    if (n < 1) {
      position = 1;
    }

    items.forEach((item) => {
      item.style.display = 'block';
    });

    items.forEach((item, n) => {
      if (n < position - 1 || n > position + slidesToShow - 1) {
        item.style.display = 'none';
      }
    });
    // move items to the left
    // position dynamically changes
    // track.style.position = 'relative';
    // track.style.left = -(position - 1) * 100 + '%';

    // items[position - 1].style.position = 'relative';
  };

  const nextSlide = (n) => {
    showSlides((position += n));
  };

  btnPrev.addEventListener('click', () => {
    nextSlide(-1);
  });

  btnNext.addEventListener('click', () => {
    nextSlide(1);
  });
});
