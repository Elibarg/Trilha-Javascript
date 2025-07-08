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