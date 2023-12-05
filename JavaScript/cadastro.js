// Função $id para buscar elementos pelo ID usando um atalho
let $id = id => document.getElementById(id);

// Mapeamento dos IDs 'login', 'register' e 'form' para variáveis usando a função $id
let [login, register, form] = ['login', 'register', 'form'].map(id => $id(id));

// Adiciona um evento de clique aos elementos 'login' e 'register'
[login, register].forEach(element => {
  element.onclick = function () {
    // Remove a classe 'active' de todos os elementos 'login' e 'register'
    [login, register].forEach($ele => {
      $ele.classList.remove("active");
    });

    // Adiciona a classe 'active' ao elemento clicado (login ou register)
    this.classList.add("active");

    // Verifica se o elemento clicado é 'register', então adiciona ou remove a classe 'active' do elemento 'form'
    if (this.getAttribute("id") === "register") {
      form.classList.add("active");
    } else {
      form.classList.remove("active");
    }
  };
});
