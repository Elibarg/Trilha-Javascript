// Declare uma nova variável, sem valor.
let novaVariavel;
console.log("Variável declarada sem valor:", novaVariavel); // undefined

/*
Crie uma função que adicione um valor à variável criada acima, e retorne a string:
O valor da variável agora é VALOR.
*/
function adicionaValor(valor) {
  novaVariavel = valor;
  return `O valor da variável agora é ${novaVariavel}.`;
}

// Invoque a função criada acima.
console.log(adicionaValor(10)); // "O valor da variável agora é 10."