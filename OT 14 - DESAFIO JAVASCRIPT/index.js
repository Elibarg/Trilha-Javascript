// Declarar uma variável qualquer, que receba um objeto vazio.
let objetoVazio = {};

/*
Declarar uma variável `pessoa`, que receba suas informações pessoais.
*/
let pessoa = {
  nome: "João",
  sobrenome: "Silva",
  sexo: "Masculino",
  idade: 25,
  altura: 1.75,
  peso: 70,
  andando: false,
  caminhouQuantosMetros: 0,
  
  // Método para fazer aniversário
  fazerAniversario: function() {
    this.idade++;
  },
  
  // Método para andar
  andar: function(metros) {
    this.caminhouQuantosMetros += metros;
    this.andando = true;
  },
  
  // Método para parar
  parar: function() {
    this.andando = false;
  },
  
  // Método para nome completo
  nomeCompleto: function() {
    return `Olá! Meu nome é ${this.nome} ${this.sobrenome}!`;
  },
  
  // Método para mostrar idade
  mostrarIdade: function() {
    return `Olá, eu tenho ${this.idade} anos!`;
  },
  
  // Método para mostrar peso
  mostrarPeso: function() {
    return `Eu peso ${this.peso}Kg.`;
  },
  
  // Método para mostrar altura
  mostrarAltura: function() {
    return `Minha altura é ${this.altura}m.`;
  },
  
  // Método de apresentação
  apresentacao: function() {
    let artigo = this.sexo === "Feminino" ? "a" : "o";
    let anos = this.idade === 1 ? "ano" : "anos";
    let metros = this.caminhouQuantosMetros === 1 ? "metro" : "metros";
    
    return `Olá, eu sou ${artigo} ${this.nome} ${this.sobrenome}, tenho ${this.idade} ${anos}, ${this.altura}m, meu peso é ${this.peso}kg e, só hoje, eu já caminhei ${this.caminhouQuantosMetros} ${metros}!`;
  }
};

// Testes com console.log():
console.log(pessoa.nomeCompleto()); // "Olá! Meu nome é João Silva!"
console.log(pessoa.mostrarIdade()); // "Olá, eu tenho 25 anos!"
console.log(pessoa.mostrarPeso()); // "Eu peso 70Kg."
console.log(pessoa.mostrarAltura()); // "Minha altura é 1.75m."

// 3 aniversários
pessoa.fazerAniversario();
pessoa.fazerAniversario();
pessoa.fazerAniversario();
console.log(pessoa.mostrarIdade()); // "28 anos"

// Caminhar
pessoa.andar(100);
pessoa.andar(50);
pessoa.andar(200);
console.log("Ainda andando?", pessoa.andando); // true

// Parar
pessoa.parar();
console.log("Ainda andando?", pessoa.andando); // false
console.log("Metros andados:", pessoa.caminhouQuantosMetros); // 350

// Apresentação final
console.log(pessoa.apresentacao());

