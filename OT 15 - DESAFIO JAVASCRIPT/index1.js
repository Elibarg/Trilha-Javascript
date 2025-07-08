/*
Declare uma variável chamada ‘isTruthy’, e atribua a ela uma função que recebe um único parâmetro como argumento.
Essa função deve retornar ‘true’ se o equivalente booleano para o valor passado no argumento for ‘true’, ou ‘false’ para o contrário.
*/
let isTruthy = function(param) {
    // Converte o valor para booleano usando !!
    // O primeiro ! nega o valor, e o segundo ! inverte de novo, retornando o valor booleano original
    return !!param;
  };
  // Invoque a função criada acima, passando todos os tipos de valores ‘falsy’.
  // Esses são os 6 valores que sempre retornam false em uma conversão booleana
  isTruthy(false);       // false → boolean false
  isTruthy(null);        // false → ausência de valor
  isTruthy(undefined);   // false → valor não definido
  isTruthy(0);           // false → número zero
  isTruthy(NaN);         // false → Not a Number (resultado de uma operação inválida)
  isTruthy('');          // false → string vazia
  // Invoque a função criada acima passando como parâmetro 10 valores ‘truthy’.
  // Qualquer valor que não seja falsy será considerado truthy (equivalente a true)
  isTruthy(true);             // true → boolean true
  isTruthy(1);                // true → número positivo
  isTruthy('a');              // true → string não vazia
  isTruthy([]);               // true → array vazio ainda é um objeto, portanto truthy
  isTruthy({});               // true → objeto vazio também é truthy
  isTruthy(function() {});    // true → funções são objetos, então são truthy
  isTruthy(-1);               // true → número negativo é truthy
  isTruthy(3.14);             // true → número decimal é truthy
  isTruthy('false');          // true → string com conteúdo (mesmo que seja "false") é truthy
  isTruthy(new Date());       // true → objetos de data são truthy
  
  