const navbarToggle = document.getElementById('navbar__toggle');
const navbarUl = document.getElementById('navbar__ul');

navbarToggle.addEventListener('click', () => {
    navbarUl.classList.toggle('active');
});