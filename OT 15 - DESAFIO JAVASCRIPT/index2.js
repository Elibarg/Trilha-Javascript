/*
Declare uma variável chamada ‘carro’, atribuindo à ela um objeto com as seguintes propriedades:
*/
let carro = {
  marca: 'Ford',
  modelo: 'Fiesta',
  placa: 'ABC-1234',
  ano: 2018,
  cor: 'Prata',
  quantasPortas: 4,
  assentos: 5,
  quantidadePessoas: 0,
  
  // Método para mudar cor
  mudarCor: function(novaCor) {
    this.cor = novaCor;
  },
  
  // Método para obter cor
  obterCor: function() {
    return this.cor;
  },
  
  // Método para obter modelo
  obterModelo: function() {
    return this.modelo;
  },
  
  // Método para obter marca
  obterMarca: function() {
    return this.marca;
  },
  
  // Método para obter marca e modelo
  obterMarcaModelo: function() {
    return `Esse carro é um ${this.obterMarca()} ${this.obterModelo()}`;
  },
  
  // Método para adicionar pessoas
  adicionarPessoas: function(numero) {
    let totalPessoas = this.quantidadePessoas + numero;
    
    if (this.quantidadePessoas === this.assentos) {
      return "O carro já está lotado!";
    }
    
    if (totalPessoas > this.assentos) {
      let cabem = this.assentos - this.quantidadePessoas;
      let plural = cabem === 1 ? "pessoa" : "pessoas"; /*Operador Ternário: if else compactado*/
      return `Só cabem mais ${cabem} ${plural}!`;
    }
    
    this.quantidadePessoas = totalPessoas;
    return `Já temos ${this.quantidadePessoas} pessoas no carro!`;
  }
};

// Qual a cor atual do carro?
console.log(carro.obterCor());// 'Prata'

// Mude a cor do carro para vermelho.
console.log(carro.mudarCor('Vermelho'));


// E agora, qual a cor do carro?
console.log(carro.obterCor() );// 'Vermelho'

// Mude a cor do carro para verde musgo.
console.log(carro.mudarCor('Verde Musgo'));

// E agora, qual a cor do carro?
console.log(carro.obterCor());// 'Verde Musgo'

// Qual a marca e modelo do carro?
console.log(carro.obterMarcaModelo() );// 'Esse carro é um Ford Fiesta'

// Adicione 2 pessoas no carro.
console.log(carro.adicionarPessoas(2));// 'Já temos 2 pessoas no carro!'

// Adicione mais 4 pessoas no carro.
console.log(carro.adicionarPessoas(4));// 'Só cabem mais 3 pessoas!'

// Faça o carro encher.
console.log(carro.adicionarPessoas(3));// 'Já temos 5 pessoas no carro!'

// Tire 4 pessoas do carro.
console.log(carro.quantidadePessoas = 1);

// Adicione 10 pessoas no carro.
console.log(carro.adicionarPessoas(10));// 'Só cabem mais 4 pessoas!'

// Quantas pessoas temos no carro?
console.log(carro.quantidadePessoas);// 1