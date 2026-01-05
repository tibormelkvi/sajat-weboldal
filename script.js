// script.js
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// A header háttérszínének változtatása görgetéskor (opcionális)
window.addEventListener('scroll', () => {
    const header = document.querySelector('.main-header');
    if (window.scrollY > 50) {
        header.style.backgroundColor = 'rgba(52, 58, 64, 0.95)'; // Enyhén áttetsző
    } else {
        header.style.backgroundColor = 'var(--bg-dark)';
    }
});