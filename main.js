// Menu Show & Hide
const menuToggle = document.querySelector('.toggle'),
    menuClose = document.querySelector('.close_menu'),
    menuNav= document.querySelector('.nav_menu'),
    menuLinks = document.querySelectorAll('.link');

menuToggle.addEventListener('click', () => {
    menuNav.classList.toggle('active');
})
menuClose.addEventListener('click', () => {
    menuNav.classList.remove('active');
})

menuLinks.forEach(link => {
    link.addEventListener('click', () => {
        menuNav.classList.remove('active');
    })
})

