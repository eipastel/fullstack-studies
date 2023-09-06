// Criando Objetos

// Crie um objeto que represente um carro, com propriedades como marca, modelo, ano, e métodos como ligar e desligar. 

let carro = {
  marca: 'Toyota',
  modelo: 'Qualquer',
  ano: 2015,
  estado: 'desligado',
  ligar: function() {
    if(this.estado == 'desligado') {
      console.log('Ligando o carro...')
      this.estado = 'ligado'
    } else {
      console.log('O carro já está ligado!')
    }
  },
  desligar: function() {
    if(this.estado == 'ligado') {
      console.log('Desligando o carro...')
      this.estado = 'desligado'
    } else {
      console.log('O carro já está desligado!')
    }
  }
}

// Validando e testando os 2 métodos do objeto.
// carro.desligar()
// carro.ligar()

// Crie um objeto que represente uma pessoa, com propriedades como nome, idade, e métodos como falar e andar.

let pessoa = {
  nome: 'Thiago Diogo',
  idade: 21,
  falar: function() {
    console.log('Olá, mundo!')
  },
  andar: function() {
    console.log('Andando...')
  }
}

pessoa.andar()
pessoa.falar()

// Fim!