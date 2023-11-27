// Exemplo de dados do carrinho (pode ser substituído por dados reais do seu e-commerce)
const cartItems = [
    { id: 1, imagem: 'img/produtos/Gabinete NZXT/1.jpg', produto: 'Gabinete Gamer NZXT H511 Flow, MId Tower, com FAN, Lateral em Vidro Temperado, Branco', tipo: 'Gabinete Gamer', quantidade: 1, preco: 568.72 },
    { id: 2, imagem: 'img/produtos/PS5 - Spiderman Edition/ps5 1.jpg', produto: 'Console PlayStation® 5 - Sony, SSD 825GB, Marvel Spider-Man 2 Limited Edition 2', tipo: 'Console', quantidade: 1, preco: 4649.99 },
    // Adicionar mais itens se necessário
];

// Função para exibir os itens do carrinho
function displayCartItems() {
    const cartContainer = document.getElementById('cart-items');
    let subtotal = 0;

    cartItems.forEach(item => {
        const { id, imagem, produto, tipo, quantidade, preco } = item;
        const totalItem = preco * quantidade;
        subtotal += totalItem;

        const productDiv = document.createElement('div');
        productDiv.classList.add('produto');
        productDiv.innerHTML = `
            <img src="${imagem}" alt="${produto}">
            <div class="detalhes">
                <h3>${produto}</h3>
                <p>Tipo: ${tipo}</p>
                <p>Quantidade: 
                    <button onclick="diminuirQuantidade(${id}, ${preco})">-</button>
                    <span id="quantity-${id}">${quantidade}</span>
                    <button onclick="aumentarQuantidade(${id}, ${preco})">+</button>
                </p>
                <p>Total: R$ ${totalItem.toFixed(2)}</p>
            </div>
        `;
        cartContainer.appendChild(productDiv);
    });

    const subtotalElement = document.getElementById('subtotal');
    subtotalElement.textContent = `R$ ${subtotal.toFixed(2)}`;

    const opcoesEntrega = document.querySelectorAll('.opcoes-entrega');
    opcoesEntrega.forEach(select => select.addEventListener('change', updateTotal));

    updateTotal();
}

// Função para aumentar a quantidade de um produto
function aumentarQuantidade(itemId, preco) {
    const quantityElement = document.getElementById(`quantity-${itemId}`);
    let quantidadeAtual = parseInt(quantityElement.textContent);
    quantidadeAtual++;
    quantityElement.textContent = quantidadeAtual;

    const totalElement = document.getElementById(`total-${itemId}`);
    const totalItem = quantidadeAtual * preco;
    totalElement.textContent = `R$ ${totalItem.toFixed(2)}`;

    updateTotal();
}

// Função para diminuir a quantidade de um produto
function diminuirQuantidade(itemId, preco) {
    const quantityElement = document.getElementById(`quantity-${itemId}`);
    let quantidadeAtual = parseInt(quantityElement.textContent);
    if (quantidadeAtual > 1) {
        quantidadeAtual--;
        quantityElement.textContent = quantidadeAtual;

        const totalElement = document.getElementById(`total-${itemId}`);
        const totalItem = quantidadeAtual * preco;
        totalElement.textContent = `R$ ${totalItem.toFixed(2)}`;

        updateTotal();
    }
}

// Função para atualizar o total com base no subtotal e nas opções de entrega selecionadas
function updateTotal() {
    const subtotal = parseFloat(document.getElementById('subtotal').textContent.replace('R$ ', ''));
    let total = subtotal;

    const opcoesEntrega = document.querySelectorAll('.opcoes-entrega');
    opcoesEntrega.forEach(select => {
        total += parseFloat(select.value);
    });

    document.getElementById('total').textContent = `R$ ${total.toFixed(2)}`;
}

// Event listener para o botão de finalizar compra
document.getElementById('checkout').addEventListener('click', function(event) {
    event.preventDefault(); // Evita que o link redirecione para outra página (usando "#" por enquanto)

    // Aqui você pode adicionar a lógica para finalizar a compra, redirecionar para o checkout, etc.
    console.log('Implemente a lógica de finalizar compra aqui.');
});

// Exibir os itens do carrinho ao carregar a página
displayCartItems();
