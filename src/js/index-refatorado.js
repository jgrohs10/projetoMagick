const botaoFiltrar = document.querySelector(".btn-filtrar");

botaoFiltrar.addEventListener("click", aplicarFiltros);

function aplicarFiltros() {
  const categoriaSelecionada = pegarCategoriaSelecionada();
  const precoMaximoSelecionado = pegarPrecoMaximoSelecionado();
  const cartas = pegarCartas();

  cartas.forEach(function (carta) {
    const categoriaValida = verificarCategoria(carta, categoriaSelecionada);
    const precoValido = verificarPreco(carta, precoMaximoSelecionado);

    const deveMostrarCarta = categoriaValida && precoValido;

    mostrarOuEsconderCarta(carta, deveMostrarCarta);
  });
}

function pegarCategoriaSelecionada() {
  return document.querySelector("#categoria").value;
}

function pegarPrecoMaximoSelecionado() {
  return document.querySelector("#preco").value;
}

function pegarCartas() {
  return document.querySelectorAll(".carta");
}

function verificarCategoria(carta, categoriaSelecionada) {
  const categoriaCarta = carta.dataset.categoria;
  return (
    categoriaSelecionada === "" ||
    categoriaSelecionada.toLowerCase() === categoriaCarta.toLowerCase()
  );
}

function verificarPreco(carta, precoMaximoSelecionado) {
  const precoCarta = carta.dataset.preco;
  return (
    precoMaximoSelecionado === "" ||
    parseFloat(precoCarta) <= parseFloat(precoMaximoSelecionado)
  );
}

function mostrarOuEsconderCarta(carta, deveMostrar) {
  if (deveMostrar) {
    carta.classList.add("mostrar");
    carta.classList.remove("esconder");
  } else {
    carta.classList.remove("mostrar");
    carta.classList.add("esconder");
  }
}
