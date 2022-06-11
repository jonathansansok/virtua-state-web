
document.addEventListener("DOMContentLoaded", () => {
    document.querySelector('.cieloLista').classList.remove('show');
});
document.querySelector('.menu-btn').addEventListener('click', function() {
    document.querySelector('.cieloLista').classList.toggle('show');
});

