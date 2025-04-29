// 1. Adicionando Elementos a um Array
let animais = [];
animais.push("Gato", "Passaro", "Rato");
console.log(animais); // ["Gato", "Passaro", "Rato"]

// 2. Removendo o Primeiro Elemento do Array
animais.shift();
console.log(animais); // ["Passaro", "Rato"]

// 3. Inserindo Elementos no Início do Array
animais.unshift("Cabra", "Cobra");
console.log(animais); // ["Cabra", "Cobra", "Passaro", "Rato"]

// 4. Alterando Elementos Específicos do Array
animais[1] = "Girafa";
console.log(animais); // ["Cabra", "Girafa", "Passaro", "Rato"]

// 5. Usando Length para Contar Elementos
let frutas = ["Pera", "Banana", "Morango"];
let totalFrutas = frutas.length;
console.log("Total de frutas:", totalFrutas); // Total de frutas: 3

// 6. Percorrendo um Array com Loop For
for (let i = 0; i < frutas.length; i++) {
    console.log(frutas[i]);
}