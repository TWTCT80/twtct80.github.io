let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.gbar');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('open');
};