(function(){
    const navBar = document.querySelector('.gridNav');
    const menuMobile = document.querySelector('.menuMobile');


    menuMobile.addEventListener('click', () => navBar.classList.toggle('menu-show'));
})();