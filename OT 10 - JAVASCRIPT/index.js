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
    constructor (nota){
         this.nota=[nota];
    }
    calcularMedia()
    {
        console.log(this.nota)
    }
}

