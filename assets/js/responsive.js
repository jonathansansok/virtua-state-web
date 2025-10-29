// assets/js/responsive.js
/* document.addEventListener('DOMContentLoaded', () => {
    
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
   */
  // assets/js/responsive.js
document.addEventListener("DOMContentLoaded", () => {
  const btn  = document.querySelector(".menu-btn");
  const menu = document.querySelector(".cieloLista");
  const body = document.body;

  if (!btn || !menu) return;

  // estado inicial cerrado en mobile
  menu.classList.remove("show");
  btn.setAttribute("aria-expanded", "false");
  btn.setAttribute("aria-controls", "nav-cielo");
  menu.id = "nav-cielo";

  btn.addEventListener("click", () => {
    const open = menu.classList.toggle("show"); //aca: toggle clase show
    btn.setAttribute("aria-expanded", open ? "true" : "false");

    //aca: bloquear scroll fondo sólo si está abierto (mobile overlay)
    if (open) {
      body.classList.add("no-scroll");
    } else {
      body.classList.remove("no-scroll");
    }
  });

  //aca: si el usuario cambia a desktop (resize grande) reseteamos para no dejar body bloqueado
  function handleResize() {
    const isDesktop = window.matchMedia("(min-width: 911px)").matches;
    if (isDesktop) {
      // menú siempre visible inline en desktop => limpiamos estados móviles
      menu.classList.remove("show");
      body.classList.remove("no-scroll");
      btn.setAttribute("aria-expanded", "false");
    }
  }

  window.addEventListener("resize", handleResize);
  handleResize();
});
