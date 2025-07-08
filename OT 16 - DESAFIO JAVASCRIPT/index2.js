/*
Crie uma função chamada `book`, que recebe um parâmetro, que será o nome do livro. 
Dentro dessa função, declare uma variável que recebe um objeto com as seguintes características:
*/
function book(nomeLivro) {
  let livros = {
    'O Senhor dos Anéis': {
      quantidadePaginas: 1000,
      autor: 'J.R.R. Tolkien',
      editora: 'Allen & Unwin'
    },
    'Harry Potter': {
      quantidadePaginas: 400,
      autor: 'J.K. Rowling',
      editora: 'Bloomsbury'
    },
    'Dom Quixote': {
      quantidadePaginas: 863,
      autor: 'Miguel de Cervantes',
      editora: 'Francisco de Robles'
    }
  };
  
  return nomeLivro ? livros[nomeLivro] : livros; /*Operador Ternário: if else compactado*/
}

/*
Usando a função criada acima, imprima o objeto com todos os livros.
*/
book(); // Retorna o objeto completo com todos os livros

/*
Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer
*/
let livro = 'O Senhor dos Anéis';
console.log(`O livro ${livro} tem ${book(livro).quantidadePaginas} páginas!`);

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer
*/
console.log(`O autor do livro ${livro} é ${book(livro).autor}.`);

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer
*/
console.log(`O livro ${livro} foi publicado pela editora ${book(livro).editora}.`);