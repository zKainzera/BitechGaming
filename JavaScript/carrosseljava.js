var slideIndex = 1; // Variável que controla o índice do slide atual
showSlides(slideIndex); // Chama a função showSlides para exibir o slide atual

// Função para avançar ou retroceder os slides
function plusSlides(n) {
  showSlides(slideIndex += n); // Altera o slideIndex para avançar ou retroceder o slide
}

// Função para exibir um slide específico ao clicar em uma miniatura
function currentSlide(n) {
  showSlides(slideIndex = n); // Define o slideIndex para exibir o slide correspondente
}

// Função principal para exibir os slides
function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides"); // Obtém todos os slides
  var dots = document.getElementsByClassName("dot"); // Obtém os pontos (indicadores) de navegação
  
  // Verifica se o número do slide é maior que a quantidade de slides disponíveis
  if (n > slides.length) { slideIndex = 1; } // Volta para o primeiro slide
  
  // Verifica se o número do slide é menor que 1 (índice negativo)
  if (n < 1) { slideIndex = slides.length; } // Vai para o último slide
  
  // Oculta todos os slides
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  
  // Remove a classe "active" de todos os pontos (indicadores)
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  
  // Exibe o slide atual e marca como ativo o ponto correspondente
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}
