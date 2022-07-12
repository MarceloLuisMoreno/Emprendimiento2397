(function(){
    const navBar = document.querySelector('.gridNav');
    const menuMobile = document.querySelector('.menuImg');
    const menuClose = document.querySelector('.close');


    menuMobile.addEventListener('click', () => navBar.classList.toggle('menu-show'));
    menuClose.addEventListener('click', () => navBar.classList.toggle('menu-show'));
})();