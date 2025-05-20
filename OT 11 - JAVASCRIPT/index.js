let nome = "João";
let evento = "festa de aniversário";
let data = "25 de maio de 2025";
let convite = "Olá " + nome + ", você está convidado para a " + evento + " no dia " + data + "!";
console.log(convite);

let dia = "20/05/2025";
let local = "Praia do Sol";
let descricao = "Foi um dia ensolarado e perfeito para relaxar e nadar.";
let diario = `Diário de Bordo
Data: ${dia}
Local: ${local}
Descrição: ${descricao}`;
console.log(diario);

let noticia = "O evento começará às 18h da manhã.";
let noticiaCorrigida = noticia.replace("18h da manhã", "18h da noite");
console.log(noticiaCorrigida);


let comentarioBruto = "     Muito bom o conteúdo!     ";
let comentarioLimpo = comentarioBruto.trim();
console.log("Comentário publicado:", comentarioLimpo);

let carta = "Olá Marcos,\nEspero que você esteja bem.\nVamos nos encontrar neste fim de semana?\nAbraços,\nPedro";
console.log(carta);

let citacao = "Albert Einstein disse: \"A imaginação é mais importante que o conhecimento.\"";
console.log(citacao);
