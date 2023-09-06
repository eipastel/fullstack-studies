// Manipulando Métodos

// Adicione um novo método aos objetos que você criou (como acelerar para o carro, e trabalhar para a pessoa).

let pessoa = {
  nome: 'Thiago Diogo',
  idade: 21,
  profissao: 'Bibliotecário',
  trabalhando: false,
  falar: function() {
    if(this.trabalhando) {
      console.log('Não é possível falar no trabalho.')
    } else 
    console.log('Oi galera, tudo bem?')
  },
  andar: function() {
    console.log('Andando...')
  },
  trabalhar: function() {
    if(!this.trabalhando) {
      console.log('Indo para o trabalho...')
      this.trabalhando = !this.trabalhando
    } else {
      console.log('Você já está trabalhando!')
    }
  }
}

// pessoa.falar()
// pessoa.trabalhar()
// pessoa.falar()
// pessoa.trabalhar()
// pessoa.falar()

// Altere um dos métodos existentes nos objetos.

let pessoa2 = {
  nome: 'Thiago Diogo',
  idade: 21,
  profissao: 'Bibliotecário',
  trabalhando: false,
  estado: 'parado',
  falar: function() {
    if(this.trabalhando) {
      console.log('Não é possível falar no trabalho.')
    } else 
    console.log('Oi galera, tudo bem?')
  },
  andar: function() {
    if(this.estado == 'parado') {
      console.log('Começando a andar...')
      this.estado = 'andando'
    } else {
      console.log('Você já está andando, doido!')
    }
  },
  trabalhar: function() {
    if(!this.trabalhando) {
      console.log('Indo para o trabalho...')
      this.trabalhando = !this.trabalhando
    } else {
      console.log('Você já está trabalhando!')
    }
  }
}

// pessoa2.andar()
// pessoa2.andar()