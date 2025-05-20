class Animal {
    constructor(nome, som) {
        this.nome = nome;
        this.som = som;
    }

    falar() {
        console.log(`${this.nome} faz: ${this.som}`);
    }
}


class Veiculo {
    constructor(marca, modelo, velocidadeMaxima) {
        this.marca = marca;
        this.modelo = modelo;
        this.velocidadeMaxima = velocidadeMaxima;
    }

    descrever() {
        console.log(`Veículo: ${this.marca} ${this.modelo}, Velocidade Máxima: ${this.velocidadeMaxima} km/h`);
    }
}


class Estudante {
    constructor(nome, notas) {
        this.nome = nome;
        this.notas = notas; // array de notas
    }

    calcularMedia() {
        const soma = this.notas.reduce((acc, nota) => acc + nota, 0);
        const media = soma / this.notas.length;
        return media;
    }
}



class Utilitario {
    static celsiusParaFahrenheit(celsius) {
        return (celsius * 9/5) + 32;
    }
}



class Jogo {
    static jogar(palpite) {
        const numero = Math.floor(Math.random() * 100) + 1;
        console.log(`Número gerado: ${numero}`);
        if (palpite === numero) {
            return "Parabéns! Você acertou!";
        } else {
            return "Tente novamente.";
        }
    }
}



class ContaBancaria {
    constructor(saldoInicial) {
        this.saldo = saldoInicial;
    }

    sacar(valor) {
        if (valor <= this.saldo) {
            this.saldo -= valor;
            console.log(`Saque de R$${valor} realizado. Saldo atual: R$${this.saldo}`);
        } else {
            console.log("Saldo insuficiente para saque.");
        }
    }
}
