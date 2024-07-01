const menuItemsExpand = document.getElementsByClassName('menu-expand');
const subMenu = document.getElementsByClassName('submenu');
const arrow = document.getElementsByClassName('arrow');

const navigation = document.getElementById('navigation');
const switchFixMenu = document.getElementById('fix-switch');
const btnMenu = document.getElementById('btn-menu');
const main = document.getElementById('main');

for (let i = 0; i < menuItemsExpand.length; i += 1) {
  menuItemsExpand[i].addEventListener('click', () => {
    if (subMenu[i].classList.contains('submenu_show')) {
      subMenu[i].classList.remove('submenu_show');
      arrow[i].classList.remove('arrow_up')
    } else {
      subMenu[i].classList.add('submenu_show');
      arrow[i].classList.add('arrow_up')
    }
  })
}

btnMenu.addEventListener('click', () => {
  navigation.classList.toggle('navigation_show');
  checkBtnMenuCondition();
});

function checkBtnMenuCondition() {
  if (btnMenu.classList.contains('btn-menu_cliked')) {
    btnMenu.classList.remove('btn-menu_cliked');
  } else btnMenu.classList.add('btn-menu_cliked');
}

switchFixMenu.addEventListener('change', () => {
  if (switchFixMenu.checked) localStorage.fixMenu = 'true';
  else localStorage.removeItem('fixMenu');
  checkFixMenu();
});

function checkFixMenu() {
  if (localStorage.fixMenu) {
    switchFixMenu.checked = true;
    navigation.classList.add('small');
    btnMenu.classList.add('hide');
    btnMenu.classList.add('btn-menu_cliked');
    navigation.classList.add('navigation_show');
    main.classList.add('main_padding');
  } else {
    switchFixMenu.checked = false;
    btnMenu.classList.remove('hide');
    navigation.classList.remove('small');
    main.classList.remove('main_padding');
  }
}

checkFixMenu();
