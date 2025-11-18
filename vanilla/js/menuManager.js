const openMenuBtn = document.querySelector('header .menu');
const closeMenuBtn = document.querySelector('.mainMenu .top .menu');
const menu = document.querySelector('.mainMenu');

openMenuBtn.addEventListener('click', () => {
    menu.classList.add('active');
})

closeMenuBtn.addEventListener('click', () => {
    menu.classList.remove('active');
})