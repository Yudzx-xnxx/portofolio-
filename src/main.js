/*

Credate By: Fauzialifatah
Follow me: https://whatsapp.com/channel/0029VawsCnQ9mrGkOuburC1z
Youtube: https://www.youtube.com/@Fauzialifatah


*/
lucide.createIcons();

/*

Credate By: Fauzialifatah
Follow me: https://whatsapp.com/channel/0029VawsCnQ9mrGkOuburC1z
Youtube: https://www.youtube.com/@Fauzialifatah


*/
const mobileMenuButton = document.querySelector('.mobile-menu-button');
const mobileMenu = document.querySelector('.mobile-menu');
const menuIcon = document.querySelector('.menu-icon');

mobileMenuButton.addEventListener('click', () => {
  mobileMenu.classList.toggle('hidden');
  menuIcon.setAttribute('data-lucide', 
    mobileMenu.classList.contains('hidden') ? 'menu' : 'x'
  );
  lucide.createIcons();
});

/*

Credate By: Fauzialifatah
Follow me: https://whatsapp.com/channel/0029VawsCnQ9mrGkOuburC1z
Youtube: https://www.youtube.com/@Fauzialifatah


*/
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, {
  threshold: 0.1
});

/*

Credate By: Fauzialifatah
Follow me: https://whatsapp.com/channel/0029VawsCnQ9mrGkOuburC1z
Youtube: https://www.youtube.com/@Fauzialifatah


*/
document.querySelectorAll('.skill-card').forEach((card, index) => {
  card.style.opacity = '0';
  card.style.transform = 'translateY(20px)';
  card.style.transition = `all 0.3s ease ${index * 0.1}s`;
  observer.observe(card);
});

/*

Credate By: Fauzialifatah
Follow me: https://whatsapp.com/channel/0029VawsCnQ9mrGkOuburC1z
Youtube: https://www.youtube.com/@Fauzialifatah


*/
const navbar = document.querySelector('.navbar');
navbar.animate([
  { transform: 'translateY(-100%)' },
  { transform: 'translateY(0)' }
], {
  duration: 500,
  easing: 'ease-out',
  fill: 'forwards'
});

/*

Credate By: Fauzialifatah
Follow me: https://whatsapp.com/channel/0029VawsCnQ9mrGkOuburC1z
Youtube: https://www.youtube.com/@Fauzialifatah


*/
const heroContent = document.querySelector('.hero-content');
heroContent.animate([
  { opacity: 0, transform: 'translateY(20px)' },
  { opacity: 1, transform: 'translateY(0)' }
], {
  duration: 1000,
  easing: 'ease-out',
  fill: 'forwards'
});