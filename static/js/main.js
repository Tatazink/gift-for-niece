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

spots.forEach((spot) => {
    spot.addEventListener('click', () => {
        const id = spot.dataset.id;
        const name = spot.dataset.name;
        const message = spot.dataset.message;
        const isFinal = spot.dataset.final === 'true';

        // Abre o modal com mensagem daquele lugar
        modalTitle.textContent = name;
        modalMessage.textContent = message;
        modal.classList.add('active');

        // Marca como visitado e atualiza o progresso
        if (!visited.has(id)) {
            visited.add(id);
            spot.classList.add('visited');
            progressText.textContent = `${visited.size} de ${totalSpots} lugares descobertos`;
        }

        // Se for o ponto final e todos já tiverem sido visitados, guarda a intenção
        spot.dataset.pendingFinal = isFinal ? 'true' : 'false';
    });
});

modalClose.addEventListener('click', () => {
    const wasFinal = document.querySelector('.map-spot.visited[data-final="true"]');
    modal.classList.remove('active');

    // Se todos os lugares já foram descobertos, mostra a tela final
    if (visited.size === totalSpots) {
        finalMessage.textContent = 'Espero que você tenha gostado dessa pequena aventura! Feito com muito carinho pra você. 💖';
        setTimeout(() => showScreen(finalScreen), 300);
    } 
});
