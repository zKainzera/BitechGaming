const mainImage = document.getElementById('main-image'); // Obtém a referência da imagem principal
const thumbnails = document.querySelectorAll('.thumbnail'); // Obtém referências para todas as miniaturas

thumbnails.forEach(thumbnail => {
    thumbnail.addEventListener('click', () => {
        // Quando uma miniatura for clicada, esta função será executada

        // Remove a classe 'active' de todas as miniaturas
        thumbnails.forEach(t => t.classList.remove('active'));
        // Adiciona a classe 'active' apenas à miniatura clicada
        thumbnail.classList.add('active');
        // Troca a imagem principal pela imagem correspondente à miniatura clicada
        mainImage.src = thumbnail.getAttribute('data-src');
    });
});

const productImage = document.getElementById('zoom-image'); // Obtém a referência da imagem de zoom
const zoomContainer = document.querySelector('.zoom-container'); // Obtém a referência do contêiner de zoom

zoomContainer.addEventListener('mousemove', (e) => {
    // Quando o mouse se move sobre o contêiner de zoom, esta função será executada

    // Obtém as coordenadas e o tamanho do contêiner de zoom
    const { left, top, width, height } = zoomContainer.getBoundingClientRect();
    // Calcula a posição relativa do mouse dentro do contêiner de zoom
    const x = (e.clientX - left) / width;
    const y = (e.clientY - top) / height;

    // Calcula o valor da transformação para a imagem de zoom
    const transformValue = `scale(2) translate(${-x * 50}px, ${-y * 50}px)`;
    // Aplica a transformação na imagem de zoom
    productImage.style.transform = transformValue;
});

zoomContainer.addEventListener('mouseleave', () => {
    // Quando o cursor do mouse deixa o contêiner de zoom, esta função será executada

    // Retorna a escala da imagem de zoom para o tamanho original
    productImage.style.transform = 'scale(1)';
});
