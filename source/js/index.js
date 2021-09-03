const header = document.querySelector('.page-header');
const nav = document.querySelector('.nav-menu');
const navToggle = document.querySelector('.page-header__burger-btn');


const ppBtn = document.querySelector('.page-footer__pp-btn');
const ppText = document.querySelector('.page-footer__pp-text');

if (nav) {
  nav.classList.remove('nav-menu--no-js');
}

if (navToggle) {
  navToggle.addEventListener('click', function(e) {
    e.preventDefault();
    nav.classList.toggle('nav-menu--open');
    header.classList.toggle('page-header--close');
    navToggle.classList.toggle('page-header__burger-btn--active');
  })
}

if (ppText) {
  ppText.classList.add('page-footer__pp-text--close');
}

if (ppBtn) {
  ppBtn.addEventListener('click', function(e) {
    e.preventDefault();
    ppText.classList.toggle('page-footer__pp-text--close');
  })
}
