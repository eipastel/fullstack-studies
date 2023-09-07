// Exercício 1:

// Crie uma classe chamada "Veiculo" com propriedades como "marca" e "velocidadeMaxima", e um método chamado "acelerar". Em seguida, crie duas subclasses: Carro e Moto, que herdam de "Veiculo", e adicione a cada uma delas uma propriedade única e um método único.

class Veiculo {
  constructor(marca, velocidadeMaxima) {
    this.marca = marca;
    this.velocidadeMaxima = velocidadeMaxima;
  }

  acelerar() {
    console.log(`Acelerando o ${this.marca} à ${this.velocidadeMaxima}km/h...`)
  }
}

class Carro extends Veiculo {
  constructor(marca, velocidadeMaxima, assentos) {
    super(marca, velocidadeMaxima)
    this.assentos = assentos;
  }
  abrirPorta() {
    console.log(`Abrindo todas as ${this.assentos} portas do ${this.marca}.`)
  }
}

class Moto extends Veiculo {
  constructor(marca, velocidadeMaxima, assentos) {
    super(marca, velocidadeMaxima)
    this.assentos = assentos;
  }
  tirarRetrovisor() {
    console.log(`Tirando os 2 retrovisores da ${this.marca}.`)
  }
}

let moto = new Moto('Suzuki', 80, 2)
let carro = new Carro('Gol Quadrado', 130, 4)

// console.log(moto)
// moto.acelerar()
// moto.tirarRetrovisor()

// console.log(carro)
// carro.acelerar()
// carro.abrirPorta()