let livros = new Map();
livros.set('titulo','autor');

console.log(livros.get(titulo));

for(let [titulo,autor]of livros)
{
    console.log(`${titulo}: ${autor}`);
}

console.log(livros.size);
livros.delete('titulos');
console.log(livros.has(titulos));

let colecao = new Map();
let string = "ret";
let number =324;
let object ={
    a: 're', 
    b: 324,
    c: true
 }
 colecao.set(string);
 colecao.set(number);
 colecao.set(object);