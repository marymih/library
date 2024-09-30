const tabsInput = document.querySelectorAll('.season-choice-input'),
    tabsContent = document.querySelectorAll('.book-card-full'),
    tabsParent = document.querySelector('.season-choice');

const tabs = () => {

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
};

export default tabs;
