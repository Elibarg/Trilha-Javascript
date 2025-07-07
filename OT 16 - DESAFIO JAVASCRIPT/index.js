/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios - ao menos 5
*/
let arrayAleatorio = [10, 'texto', true, {nome: 'objeto'}, [1, 2, 3]];

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
function retornaArray(arr) {
  return arr;
}

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
console.log(retornaArray(arrayAleatorio)[1]); // 'texto'

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o segundo, um número. 
A função deve retornar o valor de um índice do array que foi passado no primeiro parâmetro. 
O índice usado para retornar o valor, deve ser o número passado no segundo parâmetro.
*/
function retornaPorIndice(arr, indice) {
  return arr[indice];
}

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
let arrayTiposDiferentes = ['string', 123, true, null, {prop: 'valor'}];

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último array criado.
*/
console.log(retornaPorIndice(arrayTiposDiferentes, 0));// 'string'
console.log(retornaPorIndice(arrayTiposDiferentes, 1) );// 123
console.log(retornaPorIndice(arrayTiposDiferentes, 2));// true
console.log(retornaPorIndice(arrayTiposDiferentes, 3));// null
console.log(retornaPorIndice(arrayTiposDiferentes, 4) );// {prop: 'valor'}

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
  
  return nomeLivro ? livros[nomeLivro] : livros;
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