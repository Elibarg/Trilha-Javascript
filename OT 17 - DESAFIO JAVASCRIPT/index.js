/*
Vamos falar um pouco sobre "Futebol". Escolha um campeonato estadual qualquer para começar o desafio.
Declare uma variável chamada `championship` que receberá o nome do campeonato.
*/
let championship = 'Campeonato Paulista';

// Imprima o nome desse campeonato no console.
console.log(championship);

/*
Declare uma variável chamada `teams`, que receberá um array com 5 elementos.
Os elementos serão nomes de times do campeonato escolhido.
*/
let teams = ['Corinthians', 'Palmeiras', 'São Paulo', 'Santos', 'Ponte Preta'];

console.log('Times que estão participando do campeonato:', teams);

/*
Crie uma função chamada `showTeamPosition` com as seguintes características:
*/
function showTeamPosition(posicao) {
  if (posicao < 1 || posicao > 5) {
    return "Não temos a informação do time que está nessa posição.";
  }
  return `O time que está em ${posicao}º lugar é o ${teams[posicao - 1]}.`;
}

/*
Escolha 4 times do campeonato selecionado e mostre a posição dele, usando a função acima. 
Entre esses 4, adicione 1 que não esteja entre os 5 primeiros.
*/
showTeamPosition(1); // "O time que está em 1º lugar é o Corinthians."
showTeamPosition(2); // "O time que está em 2º lugar é o Palmeiras."
showTeamPosition(3); // "O time que está em 3º lugar é o São Paulo."
showTeamPosition(6); // "Não temos a informação do time que está nessa posição."

/*  
Mostre os números de 20 a 30 no console (inclusive o 30), usando a estrutura de repetição "while".
*/
let numero = 20;
while (numero <= 30) {
  console.log(numero);
  numero++;
}

/*  
Crie uma função chamada `convertToHex`, com as seguintes características:  
*/
function convertToHex(cor) {
  let hex;
  switch (cor.toLowerCase()) {
    case 'vermelho':
      hex = '#FF0000';
      break;
    case 'verde':
      hex = '#00FF00';
      break;
    case 'azul':
      hex = '#0000FF';
      break;
    case 'amarelo':
      hex = '#FFFF00';
      break;
    case 'roxo':
      hex = '#800080';
      break;
    default:
      return `Não temos o equivalente hexadecimal para ${cor}.`;
  }
  return `O hexadecimal para a cor ${cor} é ${hex}.`;
}

/*  
Tente mostrar o hexadecimal de 8 cores diferentes usando a função criada acima.  
*/
console.log(convertToHex('vermelho'));    // Vermelho
console.log(convertToHex('verde'));      // Verde
console.log(convertToHex('azul'));       // Azul
console.log(convertToHex('amarelo'));    // Amarelo
console.log(convertToHex('roxo'));       // Roxo
console.log(convertToHex('rosa'));       // Cor não existente
console.log(convertToHex('laranja'));    // Cor não existente
console.log(convertToHex('preto'));      // Cor não existente