// Crie uma função que receba dois argumentos e retorne a soma dos mesmos.
function soma(a, b) {
  return a + b;
}

// Declare uma variável que receba a invocação da função criada acima,
// passando dois números quaisquer por argumento, e somando ‘5’ ao resultado
// retornado da função.
let resultado = soma(3, 4) + 5;
console.log(resultado); // 12

// Qual o valor atualizado dessa variável?
console.log("Valor atualizado:", resultado); // 12

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

/*
Crie uma função com as seguintes características:
1. Recebe 3 argumentos;
2. Se faltar algum, retorna mensagem de erro;
3. Retorna a multiplicação dos 3 argumentos somando 2.
*/
function multiplicaESoma(a, b, c) {
  if (a === undefined || b === undefined || c === undefined) {
    return "Preencha todos os valores corretamente!";
  }
  return a * b * c + 2;
}

// Invoque passando só dois números
console.log(multiplicaESoma(2, 3)); // "Preencha todos os valores corretamente!"

// Invoque com todos os três argumentos
console.log(multiplicaESoma(2, 3, 4)); // 26 (2*3*4=24 +2=26)

/*
Crie uma função flexível que:
- Com 1 arg: retorna o valor
- Com 2 args: retorna a soma
- Com 3 args: retorna (a+b)/c
- Sem args: retorna false
*/
function operacaoFlexivel(a, b, c) {
  if (arguments.length === 0) return false;
  if (arguments.length === 1) return a;
  if (arguments.length === 2) return a + b;
  if (arguments.length === 3) return (a + b) / c;
  return null;
}

// Teste todas as possibilidades
console.log(operacaoFlexivel()); // false
console.log(operacaoFlexivel(5)); // 5
console.log(operacaoFlexivel(5, 3)); // 8
console.log(operacaoFlexivel(5, 3, 2)); // 4