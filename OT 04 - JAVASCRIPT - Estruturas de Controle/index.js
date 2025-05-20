let idade = 20; 
let categoria;

if (idade < 13) {
    categoria = 'criança';
} else if (idade >= 13 && idade <= 17) {
    categoria = 'adolescente';
} else if (idade >= 18 && idade <= 64) {
    categoria = 'adulto';
} else {
    categoria = 'idoso';
}

console.log(categoria);


let adiv = 3;
let numeroCorreto = 3;

switch (adiv) {
    case 1:
    case 2:
    case 4:
    case 5:
        console.log("Não acertou");
        break;
    case 3:
        console.log("Acertou!");
        break;
    default:
        console.log("Número inválido");
        break;
}

switch (adiv) 
{
    case 1:
    case 2:
    case 4:
    case 5:
        console.log("Reprovado");
    break;

    case 6:
    case 7:
        console.log("Recuperação");
    break;

    case 8:
        console.log("Aprovado");
    break;
    default:
    break;
}