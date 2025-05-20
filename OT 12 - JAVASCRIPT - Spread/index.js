let item1 = ["a","b","c"]; 
let item2 = ["z","y","v"];
let cob = [... item1,...item2]
console.log(cob);

let usuario =
{
    nome: 'Jó', 
    email: 'jo@gmail.com',
}
let novoObj =
{ 
    ... usuario,
    status: "ativo"
}
console.log(novoObj);

// 3.Festa de Aniversário: Crie uma função que aceita um número variável
// de nomes e os imprime como lista de convidados para uma festa de
// aniversário, usando o operador spread para coletar os nomes.

let musicas = ["musica1","musica2","musica3"];
let copia = [...musicas,]

let a =
{
    título: 'Jó', 
    diretor: 'Joel'
}
let b =
{
    ano: '2000', 
    gênero: 'Ação'
}
let comb = {...a,...b};

function criarMenu(entradas, pratosPrincipais, sobremesas) {
    let entradas = "a";
    let pratosPrincipais = "b";
    let sobremesas = "c";
}
let menu =[... criarMenu];