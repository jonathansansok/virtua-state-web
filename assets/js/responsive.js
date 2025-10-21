// assets/js/responsive.js
document.addEventListener('DOMContentLoaded', () => {
    
    const btn  = document.querySelector('.menu-btn');
    const menu = document.querySelector('.cieloLista');
    if (!btn || !menu) return;
  
    // estado inicial: cerrado
    menu.classList.remove('show');
    btn.setAttribute('aria-expanded', 'false');
    btn.setAttribute('aria-controls', 'nav-cielo');
    menu.id = 'nav-cielo';
  
    btn.addEventListener('click', () => {
      const open = menu.classList.toggle('show');
      btn.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
  });
  