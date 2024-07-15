const hamburger = document.getElementById('hamburger');
const menuNavbar = document.getElementById('menu-navbar');
const silang = document.getElementById('silang');
const navButton = document.querySelectorAll('.nav-button');

hamburger.addEventListener('click', () => {
  menuNavbar.classList.remove('hidden');
});

silang.addEventListener('click', () => {
  menuNavbar.classList.add('hidden');
});

for (let i = 0; i < navButton.length; i++) {
  navButton[i].addEventListener('click', () => {
    menuNavbar.classList.add('hidden');
  });
}
