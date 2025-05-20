// 1. Função que calcula a área de um retângulo
function calcularAreaRetangulo(largura, altura) {
    return largura * altura;
}

// 2. Função para verificar se um número é par
function ehPar(numero) {
    return numero % 2 === 0;
}

// 3. Converter polegadas em centímetros (1 polegada = 2.54 cm)
function polegadasParaCentimetros(polegadas) {
    return polegadas * 2.54;
}

// 4. Calcular o IMC (IMC = peso / altura²)
function calcularIMC(peso, altura) {
    return peso / (altura * altura);
}

// 5. Converter string para letras minúsculas
function paraMinusculas(texto) {
    return texto.toLowerCase();
}

// 6. Arrow function que multiplica por 10
const multiplicaPorDez = numero => numero * 10;
