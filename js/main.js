const toggleBtn = document.querySelector('.header__toggleBtn');
const menu = document.querySelector('.header__menu');
const util = document.querySelector('.header__util');

toggleBtn.addEventListener('click',() => {
    menu.classList.toggle('active');
    util.classList.toggle('active');
});