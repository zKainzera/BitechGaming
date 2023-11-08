const mainImage = document.getElementById('main-image');
const thumbnails = document.querySelectorAll('.thumbnail');

thumbnails.forEach(thumbnail => {
    thumbnail.addEventListener('click', () => {
        // Remova a classe 'active' de todas as miniaturas
        thumbnails.forEach(t => t.classList.remove('active'));
        // Adicione a classe 'active' apenas à miniatura clicada
        thumbnail.classList.add('active');
        // Troque a imagem principal pela imagem correspondente à miniatura
        mainImage.src = thumbnail.getAttribute('data-src');
    });
});

const productImage = document.getElementById('zoom-image');
const zoomContainer = document.querySelector('.zoom-container');

zoomContainer.addEventListener('mousemove', (e) => {
    const { left, top, width, height } = zoomContainer.getBoundingClientRect();
    const x = (e.clientX - left) / width;
    const y = (e.clientY - top) / height;
    
    const transformValue = `scale(2) translate(${-x * 50}px, ${-y * 50}px)`;
    productImage.style.transform = transformValue;
});

zoomContainer.addEventListener('mouseleave', () => {
    productImage.style.transform = 'scale(1)';
});
