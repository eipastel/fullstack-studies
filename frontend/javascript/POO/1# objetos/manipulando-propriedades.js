// Manipulando Propriedades

// Adicione novas propriedades aos objetos que você criou (como cor para o carro, e profissão para a pessoa).

let carro = {
  marca: 'Toyota',
  modelo: 'Qualquer',
  cor: 'Preto',
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

let pessoa = {
  nome: 'Thiago Diogo',
  idade: 21,
  profissao: 'Médico',
  falar: function() {
    console.log('Olá, mundo!')
  },
  andar: function() {
    console.log('Andando...')
  }
}


// Remova uma propriedade de um dos objetos.

let carro2 = {
  marca: 'Toyota',
  modelo: 'Qualquer',
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

let pessoa2 = {
  nome: 'Thiago Diogo',
  idade: 21,
  falar: function() {
    console.log('Olá, mundo!')
  },
  andar: function() {
    console.log('Andando...')
  }
}