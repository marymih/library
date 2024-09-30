const dropdownBtn = document.querySelectorAll('.dropdown-btn'),
    dropdownMenuList = document.querySelector('.dropdown-menu'),
    dropdownItem = document.querySelectorAll('.dropdown-item');

const dropdownMenu = () => {

  dropdownBtn.forEach((btn) => {
    btn.addEventListener('click', () => {
    dropdownMenuList.classList.toggle('hide');
  });
});

  document.addEventListener('click', (e) => {
    const isDropdownBtn = Array.from(dropdownBtn).some(btn => btn.contains(e.target));

    if (!dropdownMenuList.contains(e.target) && !isDropdownBtn) {
      dropdownMenuList.classList.add('hide');
    }
  });
};

export default dropdownMenu;
