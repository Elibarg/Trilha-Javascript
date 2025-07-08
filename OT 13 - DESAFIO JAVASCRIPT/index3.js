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