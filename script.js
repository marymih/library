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

    menuBurgerItem.forEach(item => {
        item.addEventListener('click', () => {
            menuBurger.classList.remove('menu-burger-open');
            menuBurgerBtn.classList.remove('menu-burger-btn-active');
        });
    });


    // слайдер
    let position = 0;
    const slidesToShow = 3;
    const slidesToScroll = 1;
    const container = document.querySelector('.slider-container');
    const track = document.querySelector('.slider-items');
    const item = document.querySelectorAll('.slider-item');
    const btnPrev = document.querySelector('.btn-prev');
    const btnMid = document.querySelector('.btn-mid');
    const btnNext = document.querySelector('.btn-next');

    btnPrev.addEventListener('click', () => {
        alert(btnPrev);
    })



});
