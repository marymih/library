const registerForm = document.querySelector('.register-form'),
  registerInput = document.querySelectorAll('.register-input'),
  registerBtn = document.querySelector('#register-btn'),
  profileIcon = document.querySelector('.profile-icon'),
  profileInitials = document.querySelector('.profile-initials');

const registration = (modalRegister, modalRegisterShow) => {
  // show modalRegister window
  modalRegisterShow.forEach((btn) => {
    btn.addEventListener('click', () => {
      modalRegister.classList.add('show');
      modalRegister.classList.remove('hide');
      document.body.style.overflow = 'hidden';
    });
  });

  registerBtn.addEventListener('click', (e) => {
    e.preventDefault();

    // check the form data
    if (!isValidForm(registerForm, registerInput)) {
      return;
    }
    // generate cardNumber
    let cardNumber = generateCardNumber();
    // save data to localStorage
    saveData(registerInput, cardNumber, 0, 1);

    registerInput.forEach((input) => (input.value = ''));

    modalRegister.classList.remove('show');
    modalRegister.classList.add('hide');

    const registerData = JSON.parse(localStorage.getItem(cardNumber));
    const initials = getInitials(registerData.name, registerData.last_name).toUpperCase();

    profileInitials.textContent = initials;

    profileIcon.classList.add('hide');
    profileInitials.classList.remove('hide');
  });
};

const saveData = (registerInput, cardNumber, books, visits) => {
  // save data to localStorage
  // email, last_name, name, password, books, visits

  const data = Array.from(registerInput).reduce((acc, input) => {
    acc[input.name] = input.value;
    return acc;
  }, {});
  data['books'] = books;
  data['visits'] = visits;

  localStorage.setItem(cardNumber, JSON.stringify(data));
};

const isValidForm = (form, inputs) => {
  let isValid = true;
  // check the form data not empty
  inputs.forEach((input) => {
    correctData(input);
    if (input.value.trim() === '') {
      wrongData(input, 'This field is required');
      isValid = false;
    }
    if (input.name == 'password') {
      if (input.value.length < 8) {
        wrongData(input, 'Password must be at least 8 characters');
        isValid = false;
      }
    }
    if (input.name == 'email') {
      if (!input.value.includes('@') || !input.value.includes('.')) {
        wrongData(input, 'Email must contain @');
        isValid = false;
      } else if (!isUniqueEmail(input.value)) {
        wrongData(input, 'Email is already in use');
        isValid = false;
      }
    }
  });

  return isValid;
};

const wrongData = (input, message) => {
  input.classList.add('modal_wrong_input');
  input.classList.remove('modal_input');
  input.value = '';
  input.placeholder = message;
};
const correctData = (input) => {
  input.classList.remove('modal_wrong_input');
  input.classList.add('modal_input');
};

const isUniqueEmail = (newEmail) => {
  // get all the keys in local storage
  const keys = Object.keys(localStorage);

  for (let i = 0; i < keys.length; i++) {
    const data = JSON.parse(localStorage.getItem(keys[i]));

    if (data.email === newEmail) {
      return false;
    }
  }

  return true;
};

const generateCardNumber = () => {
  // generate hex number 9 digits
  let cardNumber = '';
  while (cardNumber.toString().length != 9) {
    cardNumber += Math.floor(Math.random() * 16).toString(16);
  }

  cardNumber = cardNumber.toUpperCase();
  console.log(cardNumber);
  return cardNumber;
};

// get the user's initials
const getInitials = (name, lastName) => {
  return name[0] + lastName[0];
};

export default registration;
