document.addEventListener("DOMContentLoaded", function() {
  const produtosContainer = document.querySelector(".produtos-container");
  const produtos = document.querySelectorAll(".produto");
  const botaoEsquerda = document.querySelector(".botao-esquerda");
  const botaoDireita = document.querySelector(".botao-direita");

  let indiceAtual = 0;
  const numProdutosPorLinha = 5;

  botaoEsquerda.addEventListener("click", function() {
    if (indiceAtual > 0) {
      indiceAtual -= numProdutosPorLinha;
      atualizarCarrossel();
    }
  });

  botaoDireita.addEventListener("click", function() {
    if (indiceAtual + numProdutosPorLinha < produtos.length) {
      indiceAtual += numProdutosPorLinha;
      atualizarCarrossel();
    }
  });

  function atualizarCarrossel() {
    produtosContainer.style.transform = `translateX(-${indiceAtual * (100 / numProdutosPorLinha)}%)`;
  }
});





let isRunning = false;
let timer;
let initialTimeInSeconds = 48 * 60 * 60;
let currentTimeInSeconds;

const timerDisplay = document.getElementById('timer');

function formatTime(seconds) {
  const hours = Math.floor(seconds / 3600);
  seconds %= 3600;
  const minutes = Math.floor(seconds / 60);
  seconds %= 60;
  return `${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)}`;
}

function updateTimer() {
  if (currentTimeInSeconds <= 0) {
    clearInterval(timer);
    startStopButton.classList.remove('pause');
    startStopButton.classList.add('play');
    isRunning = false;
  } else {
    currentTimeInSeconds--;
    timerDisplay.textContent = formatTime(currentTimeInSeconds);
  }
}

function padZero(value) {
  return value < 10 ? `0${value}` : value;
}

// Verifique se há um tempo salvo no armazenamento local
const storedTimeInSeconds = localStorage.getItem('currentTimeInSeconds');
if (storedTimeInSeconds) {
  currentTimeInSeconds = parseInt(storedTimeInSeconds, 10);
} else {
  currentTimeInSeconds = initialTimeInSeconds;
}

// Inicialize o timer com o tempo atual
timerDisplay.textContent = formatTime(currentTimeInSeconds);

// Inicie o timer automaticamente se não estiver em execução
if (!isRunning) {
  timer = setInterval(updateTimer, 1000);
  isRunning = true;
}

window.onbeforeunload = function() {
  // Salve o tempo atual no armazenamento local ao sair da página
  localStorage.setItem('currentTimeInSeconds', currentTimeInSeconds);
}


