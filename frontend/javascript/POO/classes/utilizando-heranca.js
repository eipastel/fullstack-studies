// 2. Utilizando Herança

// 2.1. Crie uma subclasse de Pessoa que represente um estudante, que tenha uma nova propriedade chamada curso.

class Pessoa {
  constructor(nome, cidade, anoNascimento) {
    this.nome = nome;
    this.cidade = cidade;
    this.anoNascimento = anoNascimento;
  }

  falar() {
    console.log(`${this.nome} começou a falar.`)
  }
}

class Estudante extends Pessoa {
  constructor(nome, cidade, anoNascimento, curso) {
    super(nome, cidade, anoNascimento)
    this.curso = curso;
  }

  estudar() {
    console.log(`O(a) ${this.nome} começou a estudar ${this.curso}.`)
  }

}

let novoEstudante = new Estudante('Thiago Diogo', 'Curitiba', 2002, 'Análise e Desenvolvimento de Sistemas')

// novoEstudante.falar()
// novoEstudante.estudar()

// console.log(novoEstudante)
// console.log(novoEstudante.curso)


// 2.2. Crie uma subclasse de Carro que represente um carro elétrico, que tenha uma nova propriedade chamada autonomiaDaBateria.

class Carro {
  constructor(marca, modelo, ano) {
    this.marca = marca;
    this.modelo = modelo;
    this.ano = ano;
  }
  ligar() {
    console.log(`Ligando o ${this.modelo}`)
  }
  desligar() {
    console.log(`Desligando o ${this.modelo}`)
  }
}

class CarroEletrico extends Carro {
  constructor(marca, modelo, ano, autonomiaDaBateria) {
    super(marca, modelo, ano)
    this.autonomiaDaBateria = autonomiaDaBateria;
  }

  tocarMusica() {
    if(this.autonomiaDaBateria > 0) {
      console.log('Tocando musica. Autonomia da bateria diminuida em 1')
      console.log(`Bateria atual: ${this.autonomiaDaBateria}`)
      this.autonomiaDaBateria -= 1
    } else {
      console.log('Você não tem bateria o suficiente para tocar música.')
    }

  }

}

let tesla = new CarroEletrico('TeslaX', 'Tesla', 2021, 1)

// console.log(tesla)
// tesla.ligar()
// tesla.desligar()
// tesla.tocarMusica()
// tesla.tocarMusica()