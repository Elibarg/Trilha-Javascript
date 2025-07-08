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
    return console.log("Não temos a informação do time que está nessa posição.");
  }
  return  console.log(`O time que está em ${posicao}º lugar é o ${teams[posicao - 1]}.`);
}

/*
Escolha 4 times do campeonato selecionado e mostre a posição dele, usando a função acima. 
Entre esses 4, adicione 1 que não esteja entre os 5 primeiros.
*/
showTeamPosition(1); // "O time que está em 1º lugar é o Corinthians."
showTeamPosition(2); // "O time que está em 2º lugar é o Palmeiras."
showTeamPosition(3); // "O time que está em 3º lugar é o São Paulo."
showTeamPosition(4); // "O time que está em 2º lugar é o Santos."
showTeamPosition(5); // "O time que está em 3º lugar é o Ponte Preta."
showTeamPosition(6); // "Não temos a informação do time que está nessa posição."