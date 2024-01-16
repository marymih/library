window.addEventListener('DOMContentLoaded', () => {
  // burger menu

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

  //   dropdown menu
  const dropdownBtn = document.querySelector('.dropdown-btn'),
    dropdownMenu = document.querySelector('.dropdown-menu'),
    dropdownItem = document.querySelectorAll('.dropdown-item');

  dropdownBtn.addEventListener('click', () => {
    dropdownMenu.classList.toggle('hide');
  });

  document.addEventListener('click', (e) => {
    if (!dropdownMenu.contains(e.target) && e.target !== dropdownBtn) {
      dropdownMenu.classList.add('hide');
    }
  });

  // slider
  let position = 1;
  let slidesToShow = 1;
  if (window.innerWidth >= 1024) {
    slidesToShow = 2;
  }
  if (window.innerWidth >= 1440) {
    slidesToShow = 3;
  }

  const slidesToScroll = 1,
    track = document.querySelector('.slider-items'),
    items = document.querySelectorAll('.slider-item'),
    btnItem = document.querySelector('.slider-pagination-bg'),
    btnContainer = document.querySelector('.slider-pagination-container'),
    btnLeft = document.querySelector('.btn-left'),
    btnRight = document.querySelector('.btn-right');

  btnLeft.style.display = 'none';
  if (items.length < 2) {
    btnRight.style.display = 'none';
  }

  const showSlides = (btns, n) => {
    if (btns.length < 2) {
      return;
    }
    position = n;
    btnLeft.style.display = 'block';
    btnRight.style.display = 'block';
    if (n >= items.length - slidesToShow + 1) {
      position = items.length - slidesToShow + 1;
      btnRight.style.display = 'none';
    }
    if (n <= 1) {
      position = 1;
      btnLeft.style.display = 'none';
    }

    btns.forEach((btn) => {
      btn.classList.remove('active');
    });

    btns[position - 1].classList.add('active');
    track.style.left = -(position - 1) * 475 + 'px';
  };

  for (
    let i = 0;
    i < Math.round((items.length - slidesToShow) / slidesToScroll);
    i++
  ) {
    const newBtnContainer = btnItem.cloneNode(true);
    const newBtn = newBtnContainer.querySelector('.slider-pagination');
    newBtn.classList.remove('active');
    btnContainer.innerHTML += newBtnContainer.outerHTML;
  }

  const btns = document.querySelectorAll('.slider-pagination');
  btns.forEach((btn, index) => {
    btn.addEventListener('click', () => {
      showSlides(btns, index + 1);
    });
  });

  btnLeft.addEventListener('click', () => {
    showSlides(btns, position - 1);
  });

  btnRight.addEventListener('click', () => {
    showSlides(btns, position + 1);
  });

  // tabs
  const tabsInput = document.querySelectorAll('.season-choice-input'),
    tabsContent = document.querySelectorAll('.book-card-full'),
    tabsParent = document.querySelector('.season-choice');

  const hideTabContent = () => {
    tabsContent.forEach((item) => {
      item.classList.add('hide');
      item.classList.remove('show', 'fade');
      item.parentNode.style.marginBottom = '0';
    });

    tabsInput.forEach((item) => {
      item.removeAttribute('checked');
    });
  };

  const showTabContent = (i = 'winter') => {
    tabsContent.forEach((item) => {
      if (item.classList.contains(i)) {
        item.classList.add('show', 'fade');
        item.classList.remove('hide');
        item.parentNode.style.marginBottom = '40px';
      }
    });
    tabsInput.forEach((item) => {
      if (item.id === i) {
        item.setAttribute('checked', 'checked');
      }
    });
  };

  hideTabContent();
  showTabContent();

  tabsParent.addEventListener('click', (event) => {
    const target = event.target;

    if (target && target.classList.contains('season-choice-input')) {
      tabsInput.forEach((item) => {
        if (target == item) {
          hideTabContent();
          showTabContent(item.id);
        }
      });
    }
  });

  // modal

  const modalLoginShow = document.querySelectorAll('[data-login]'),
    modalRegisterShow = document.querySelectorAll('[data-register]'),
    modalLogin = document.querySelector('.login'),
    modalRegister = document.querySelector('.register'),
    modalClose = document.querySelectorAll('[data-close]');

  modalLoginShow.forEach((btn) => {
    btn.addEventListener('click', () => {
      modalLogin.classList.add('show');
      modalLogin.classList.remove('hide');
      modalRegister.classList.add('hide');
      document.body.style.overflow = 'hidden';
    });
  });

  modalRegisterShow.forEach((btn) => {
    btn.addEventListener('click', () => {
      modalRegister.classList.add('show');
      modalRegister.classList.remove('hide');
      document.body.style.overflow = 'hidden';
    });
  });

  const closeModal = () => {
    modalLogin.classList.add('hide');
    modalLogin.classList.remove('show');
    modalRegister.classList.add('hide');
    modalRegister.classList.remove('show');
    document.body.style.overflow = '';
  };

  modalClose.forEach((btn) => {
    btn.addEventListener('click', closeModal);
  });

  modalLogin.addEventListener('click', (e) => {
    if (e.target === modalLogin) {
      closeModal();
    }
  });

  modalRegister.addEventListener('click', (e) => {
    if (e.target === modalRegister) {
      closeModal();
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.code === 'Escape' && modalLogin.classList.contains('show')) {
      closeModal();
    }
    if (e.code === 'Escape' && modalRegister.classList.contains('show')) {
      closeModal();
    }
  });

  // registration

  // modalRegister
  const registerForm = document.querySelector('.register-form'),
    registerInput = document.querySelectorAll('.register-input'),
    registerBtn = document.querySelector('#register-btn');

  registerBtn.addEventListener('click', (e) => {
    e.preventDefault();

    const data = Array.from(registerInput).reduce((acc, input) => {
      acc[input.name] = input.value;
      return acc;
    }, {});

    localStorage.setItem('registerData', JSON.stringify(data));
  });

  const loginForm = document.querySelector('.login-form'),
    loginInput = document.querySelectorAll('.login-input'),
    loginBtn = document.querySelector('#login-btn');

  loginBtn.addEventListener('click', (e) => {
    e.preventDefault();

    const loginData = Array.from(loginInput).reduce((acc, input) => {
      acc[input.name] = input.value;
      return acc;
    }, {});

    const registerData = JSON.parse(localStorage.getItem('registerData'));

    if (
      loginData.username === registerData.username &&
      loginData.password === registerData.password
    ) {
      console.log('Login successful!');
    } else {
      console.log('Invalid username or password.');
    }
  });
});
