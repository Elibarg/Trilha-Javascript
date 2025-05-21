// Crie uma função que receba dois argumentos e retorne a soma dos mesmos.
function soma(a, b) {
  return a + b;
}


let resultado = soma(3, 7) + 5;
// resultado = 15

// Declare uma nova variável, sem valor.
let valorAtualizado;

function atualizarValor(novoValor) {
  valorAtualizado = novoValor;
  return `O valor da variável agora é ${valorAtualizado}.`;
}

// Invoque a função criada acima.
let retorno = atualizarValor(42);
/*
O valor da variável agora é 42.
*/
