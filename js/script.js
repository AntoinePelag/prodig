function toggleMenuMobile() {
    var menu = document.querySelector('#nav-menu-mobile') // Using a class instead, see note below.
    menu.classList.toggle('nav-mobile-active');
}