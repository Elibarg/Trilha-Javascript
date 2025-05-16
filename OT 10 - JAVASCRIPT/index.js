class Animal
{
    constructor (nome,som){
        this.nome=nome;
        this.som=som;
    }
    falar()
    {
        console.log(this.nome,this.som)
    }
}

class Veiculo
{
    constructor (marca,modelo,velocidadeMaxima){
        this.marca=marca;
        this.modelo=modelo;
        this.velocidadeMaxima=velocidadeMaxima;
    }
    descrever()
    {
        console.log(this.marca,this.modelo,this.velocidadeMaxima)
    }
}


class Estudante
{
    constructor (nota,media){
         this.nota=[nota];
         let media;
         for(let i;i<div;i++)
         {
            media += nota[i];
         }
    }
    calcularMedia()
    {
        let media
        media /= nota.length
        console.log(this.media)
    }
}

// 4. Método Estático para Conversão de Temperatura: Na classe
// Utilitario, adicione um método estático que converte temperatura de
// Celsius para Fahrenheit.


class Jogo
{
    static numeroAleatorio()
    {
        return Math.floor(Math.random()*100);
    }
    constructor(numF)
    {
        let numF

        if(numF === numeroAleatorio)
        {
            console.log("Número certo")
        }else
        {
            console.log("Número Errado")
        }
    }
}


class ContaBancaria
{
    constructor (){
       
    }
    sacar()
    {
        console.log()
    }
}