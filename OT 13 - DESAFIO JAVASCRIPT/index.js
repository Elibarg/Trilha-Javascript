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

function val(val1,val2,val3) 
{
  val1 = 2;
  val2 = 3;
  val3 = 4;
 
  do {
    console.log("Preencha todos os valores corretamente!")
  } while (va1 === null && val2 === null && val3 === null);
  return val1*val2*val3+2
}
val(3,4);//50

val(3,4,5);//62

function name(va1, val2, val3) {
  
}