//Navbar Fixed
window.onscroll = function(){
    const header = document.querySelector('header');
    const fixedNav = header.offsetTop;

    if(window.pageYOffset > fixedNav){
        header.classList.add('navbar-fixed');
    } else {
       header.classList.remove('navbar-fixed');
    }
}

//Hamburger
const hamburger = document.querySelector('#hamburger');
const navMenu = document.querySelector('#nav-menu')

hamburger.addEventListener('click', function() {
  hamburger.classList.toggle('hamburger-active');
  navMenu.classList.toggle('hidden');
});
const text = document.querySelector(".animasi-text");

const textLoad = () => {
    setTimeout(() => {
        text.textContent = "Syamlithani";
    }, 0);
    setTimeout(() => {
        text.textContent = "Welcome";
    }, 4000);
    setTimeout(() => {
        text.textContent = "Enjoy✌️";
    }, 8000);
}

textLoad();
setInterval(textLoad, 12000);