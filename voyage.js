const menuAtivo = document.querySelector('.menu-ativo');
const menuDesceu = document.querySelector('.menu-desceu');
const heroSection = document.querySelector('.hero');

function checkMenuVisibility() {
    const heroRect = heroSection.getBoundingClientRect();
    if (heroRect.bottom >= 0 && heroRect.top <= window.innerHeight) {
        menuAtivo.style.display = 'block';
    } else {
        menuAtivo.style.display = 'none';   
        menuDesceu.style.display = 'none';  
    }
}

menuAtivo.addEventListener('click', () => {
    menuDesceu.style.display = menuDesceu.style.display === 'block' ? 'none' : 'block';
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetSection = document.querySelector(this.getAttribute('href'));
        targetSection.scrollIntoView({
            behavior: 'smooth'
        });
        menuDesceu.style.display = 'none';
    });
});

window.addEventListener('scroll', checkMenuVisibility);
window.addEventListener('load', checkMenuVisibility);
