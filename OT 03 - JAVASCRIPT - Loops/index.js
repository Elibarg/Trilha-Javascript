// 1. Loop de 0 a 10
for (let i = 0; i <= 10; i++) {
    console.log(i);
}

// 2. Loop com condição: Números ímpares de 0 a 20
for (let i = 0; i <= 20; i++) {
    if (i % 2 === 1) {
        console.log(i);
    }
}

// 3. Usando while de 0 a 10
let i = 0;
while (i <= 10) {
    console.log(i);
    i++;
}

// 4. Interrompendo no número 50
for (let i = 0; i <= 100; i++) {
    console.log(i);
    if (i === 50) {
        break;
    }
}

// 5. Pulando a impressão do número 13
for (let i = 0; i <= 20; i++) {
    if (i === 13) {
        continue;
    }
    console.log(i);
}

// 6. Iterando um array de nomes
let nomes = ["Marcelo", "Lais", "Bia"];
for (let nome of nomes) {
    console.log(nome);
}
