document.addEventListener("DOMContentLoaded", function() {
  // Aguarda o DOM ser completamente carregado para executar o código dentro desta função

  const produtosContainer = document.querySelector(".produtos-container");
  const produtos = document.querySelectorAll(".produto");
  const botaoEsquerda = document.querySelector(".botao-esquerda");
  const botaoDireita = document.querySelector(".botao-direita");

  let indiceAtual = 0; // Variável que armazena o índice atual do carrossel
  const numProdutosPorLinha = 5; // Número de produtos exibidos por linha no carrossel

  // Adiciona um ouvinte de evento ao botão de seta esquerda
  botaoEsquerda.addEventListener("click", function() {
    // Verifica se não estamos no início do carrossel para poder retroceder
    if (indiceAtual > 0) {
      indiceAtual -= numProdutosPorLinha; // Decrementa o índice atual para retroceder no carrossel
      atualizarCarrossel(); // Chama a função para atualizar a exibição do carrossel
    }
  });

  // Adiciona um ouvinte de evento ao botão de seta direita
  botaoDireita.addEventListener("click", function() {
    // Verifica se é possível avançar no carrossel sem ultrapassar o número total de produtos
    if (indiceAtual + numProdutosPorLinha < produtos.length) {
      indiceAtual += numProdutosPorLinha; // Incrementa o índice atual para avançar no carrossel
      atualizarCarrossel(); // Chama a função para atualizar a exibição do carrossel
    }
  });

  // Função para atualizar a exibição do carrossel com base no índice atual
  function atualizarCarrossel() {
    produtosContainer.style.transform = `translateX(-${indiceAtual * (100 / numProdutosPorLinha)}%)`;
    // Atualiza o estilo de transformação do container para mostrar os produtos correspondentes
  }
});









let isRunning = false; // Variável para controlar se o timer está em execução
let timer; // Variável para armazenar o intervalo do timer
let initialTimeInSeconds = 48 * 60 * 60; // Tempo inicial em segundos (48 horas)
let currentTimeInSeconds; // Variável para armazenar o tempo atual em segundos

const timerDisplay = document.getElementById('timer'); // Referência ao elemento HTML onde o timer será exibido

// Função para formatar o tempo em horas:minutos:segundos
function formatTime(seconds) {
  const hours = Math.floor(seconds / 3600);
  seconds %= 3600;
  const minutes = Math.floor(seconds / 60);
  seconds %= 60;
  return `${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)}`;
}

// Função para atualizar o timer a cada segundo
function updateTimer() {
  if (currentTimeInSeconds <= 0) {
    clearInterval(timer); // Limpa o intervalo do timer quando o tempo chega a zero
    // Remove e adiciona classes para manipular o estado de um botão (startStopButton)
    startStopButton.classList.remove('pause');
    startStopButton.classList.add('play');
    isRunning = false; // Define que o timer não está mais em execução
  } else {
    currentTimeInSeconds--; // Decrementa o tempo atual em segundos
    timerDisplay.textContent = formatTime(currentTimeInSeconds); // Atualiza o display com o tempo restante
  }
}

// Função para adicionar um zero à esquerda se o valor for menor que 10
function padZero(value) {
  return value < 10 ? `0${value}` : value;
}

// Verifica se há um tempo salvo no armazenamento local
const storedTimeInSeconds = localStorage.getItem('currentTimeInSeconds');
if (storedTimeInSeconds) {
  currentTimeInSeconds = parseInt(storedTimeInSeconds, 10); // Converte o tempo salvo para um número
} else {
  currentTimeInSeconds = initialTimeInSeconds; // Define o tempo inicial se não houver tempo salvo
}

// Inicializa o display do timer com o tempo atual
timerDisplay.textContent = formatTime(currentTimeInSeconds);

// Inicia o timer automaticamente se não estiver em execução
if (!isRunning) {
  timer = setInterval(updateTimer, 1000); // Executa a função updateTimer a cada segundo
  isRunning = true; // Define que o timer está em execução
}

// Salva o tempo atual no armazenamento local ao sair da página
window.onbeforeunload = function() {
  localStorage.setItem('currentTimeInSeconds', currentTimeInSeconds); // Salva o tempo atual no armazenamento local
}



