
const menuToggle = document.getElementById('menuToggle');
const snb = document.querySelector('.snb');
const snbOverlay = document.getElementById('snbOverlay');

if (menuToggle && snb && snbOverlay) {
    menuToggle.addEventListener('click', function () {
        snb.classList.toggle('open');
        snbOverlay.classList.toggle('show');
    });

    snbOverlay.addEventListener('click', function () {
        snb.classList.remove('open');
        snbOverlay.classList.remove('show');
    });

    window.addEventListener('resize', function () {
        if (window.innerWidth > 1024) {
            snb.classList.remove('open');
            snbOverlay.classList.remove('show');
        }
    });
}
