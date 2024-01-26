let position = 1;
let slidesToShow = 1;
const slidesToScroll = 1,
    track = document.querySelector('.slider-items'),
    items = document.querySelectorAll('.slider-item'),
    btnItem = document.querySelector('.slider-pagination-bg'),
    btnContainer = document.querySelector('.slider-pagination-container'),
    btnLeft = document.querySelector('.btn-left'),
    btnRight = document.querySelector('.btn-right');

const slider = () => {

  if (window.innerWidth >= 1024) {
    slidesToShow = 2;
  }
  if (window.innerWidth >= 1440) {
    slidesToShow = 3;
  }

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
};

export default slider;

