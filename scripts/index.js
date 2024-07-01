const menu = document.getElementsByClassName('menu');
const menuItemsExpand = document.getElementsByClassName('menu-expand');
const subMenu = document.getElementsByClassName('submenu');
const arrow = document.getElementsByClassName('arrow');

for (let i = 0; i < menuItemsExpand.length; i += 1) {
  menuItemsExpand[i].addEventListener('click', () => {
    if (subMenu[i].classList.contains('show')) {
      subMenu[i].classList.remove('show');
      arrow[i].classList.remove('arrow_up')
    } else {
      subMenu[i].classList.add('show');
      arrow[i].classList.add('arrow_up')
    }
  })
}
