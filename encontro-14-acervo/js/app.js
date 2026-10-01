const listaLivros = document.querySelector("#lista-livros");
console.log(listaLivros);

if (!listaLivros) {
  throw new Error("Lista de livros não encontrada.");
}

const livro = {
  id: 1,
  titulo: "JavaScript para iniciantes",
  categoria: "Tecnologia",
  total: 8,
  emprestados: 5,
  ativo: true,
};

const item = document.createElement("li");
const titulo = document.createElement("h3");
const detalhes = document.createElement("p");

titulo.textContent = livro.titulo;
detalhes.textContent =
  `${livro.categoria} — ${livro.total - livro.emprestados} disponível(is)`;

  item.append(titulo, detalhes);
listaLivros.append(item);