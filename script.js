import burgerMenu from './js/burgerMenu.js';
import dropdownMenu from './js/dropdownMenu.js';
import slider from './js/slider.js';
import tabs from './js/tabs.js';
import registration from './js/registration.js';
import authorization from './js/auth.js';

window.addEventListener('DOMContentLoaded', () => {
  burgerMenu();

  dropdownMenu();

  slider();

  tabs();

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

  const closeModal = (modalWindow) => {
    modalWindow.classList.add('hide');
    modalWindow.classList.remove('show');
    document.body.style.overflow = 'overlay';
  };

  modalClose.forEach((btn) => {
    btn.addEventListener('click', () => closeModal(modalLogin));
    btn.addEventListener('click', () => closeModal(modalRegister));
  });

  modalLogin.addEventListener('click', (e) => {
    if (e.target === modalLogin) {
      closeModal(modalLogin);
    }
  });

  modalRegister.addEventListener('click', (e) => {
    if (e.target === modalRegister) {
      closeModal(modalRegister);
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.code === 'Escape' && modalLogin.classList.contains('show')) {
      closeModal(modalLogin);
    }
    if (e.code === 'Escape' && modalRegister.classList.contains('show')) {
      closeModal(modalRegister);
    }
  });

  // registration

  registration(modalRegister, modalRegisterShow);

  // authorization

  const loginForm = document.querySelector('.login-form'),
    loginInput = document.querySelectorAll('.login-input'),
    loginBtn = document.querySelector('#login-btn'),
    profileIcon = document.querySelector('.profile-icon'),
    profileInitials = document.querySelector('.profile-initials');

  loginBtn.addEventListener('click', (e) => {
    e.preventDefault();

    const loginData = Array.from(loginInput).reduce((acc, input) => {
      acc[input.name] = input.value;
      return acc;
    }, {});

    const keys = Object.keys(localStorage);

    const getInitials = (name, lastName) => {
      return name[0] + lastName[0];
    };

    // check data in local storage to login

    for (let i = 0; i < keys.length; i++) {
      const data = JSON.parse(localStorage.getItem(keys[i]));

      if (
        loginData.email === data.email &&
        loginData.password === data.password
      ) {
        console.log('Login successful!');
        // close modal login
        loginInput.forEach((input) => (input.value = ''));
        modalLogin.classList.remove('show');
        modalLogin.classList.add('hide');

        // change profile icon to initials
        const initials = getInitials(data.name, data.last_name).toUpperCase();

        profileInitials.textContent = initials;

        profileIcon.classList.add('hide');
        profileInitials.classList.remove('hide');

        return data;
      }
    }
    if (
      !loginData.email === data.email ||
      !loginData.password === data.password
    ) {
      console.log('Invalid e-mail or password.');
    }
  });
});
