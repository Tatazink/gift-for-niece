// Controlar a troca de telas (intro -> mapa -> final)
const introScreen = document.getElementById('intro-screen');
const mapScreen = document.getElementById('map-screen');
const finalScreen = document.getElementById('final-screen');
const startBtn = document.getElementById('start-btn');

const modal = document.getElementById('message-modal');
const modalTitle = document.getElementById('modal-title');
const modalMessage = document.getElementById('modal-message');
const modalClose = document.getElementById('modal-close');

const progressText = document.getElementById('progress-text');
const finalMessage = document.getElementById('final-message');

const spots = document.querySelectorAll('.map-spot');
const totalSpots = spots.length;
const visited = new Set ();

function showScreen(screen) {
    [introScreen, mapScreen, finalScreen].forEach((s) => s.classList.remove('active'));
    screen.classList.add('active');
}

startBtn.addEventListener('click', () => {
    showScreen(mapScreen);
});


