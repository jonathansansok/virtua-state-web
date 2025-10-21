'use strict';

// Tabs accesibles y con soporte para múltiples contenedores
document.querySelectorAll('.contenedor').forEach((container) => {
  const tabs   = container.querySelectorAll('.ul .li');
  const panels = container.querySelectorAll('.subcontenedor .bloque');

  // Activa por índice (modo compatible con tu HTML actual)
  function activateByIndex(idx) {
    tabs.forEach((t, i) => {
      const active = i === idx;
      t.classList.toggle('activo', active);
      t.setAttribute('aria-selected', active ? 'true' : 'false');
      t.setAttribute('tabindex', active ? '0' : '-1');
    });
    panels.forEach((p, i) => p.classList.toggle('activo', i === idx));
  }

  // Activa por clave de data-tab (si existen ids tipo #tab-CLAVE)
  function activateByKey(key, btnEl) {
    const target = container.querySelector('#tab-' + key);
    if (!target) { // fallback por índice
      const idx = Array.from(tabs).indexOf(btnEl);
      return activateByIndex(idx);
    }
    tabs.forEach((t) => {
      const active = t === btnEl;
      t.classList.toggle('activo', active);
      t.setAttribute('aria-selected', active ? 'true' : 'false');
      t.setAttribute('tabindex', active ? '0' : '-1');
    });
    panels.forEach((p) => p.classList.remove('activo'));
    target.classList.add('activo');
  }

  // Listeners de interacción
  tabs.forEach((tabEl, i) => {
    // Click
    tabEl.addEventListener('click', () => {
      const key = tabEl.dataset.tab;
      key ? activateByKey(key, tabEl) : activateByIndex(i);
    });

    // Teclado: Enter/Espacio activan; flechas navegan
    tabEl.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        tabEl.click();
      }
      if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') {
        e.preventDefault();
        const dir  = e.key === 'ArrowRight' ? 1 : -1;
        const next = (i + dir + tabs.length) % tabs.length;
        tabs[next].focus();
      }
    });

    // Atributos ARIA básicos
    tabEl.setAttribute('role', 'tab');
    tabEl.setAttribute('tabindex', tabEl.classList.contains('activo') ? '0' : '-1');
    tabEl.setAttribute('aria-selected', tabEl.classList.contains('activo') ? 'true' : 'false');
  });

  // Role para paneles
  panels.forEach((p) => p.setAttribute('role', 'tabpanel'));

  // Estado inicial seguro
  const hasActive = Array.from(tabs).some(t => t.classList.contains('activo'));
  if (!hasActive && tabs.length) activateByIndex(0);
});
