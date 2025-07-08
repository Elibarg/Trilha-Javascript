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