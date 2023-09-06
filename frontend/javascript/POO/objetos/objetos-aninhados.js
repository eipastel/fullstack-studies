// Objetos Aninhados

// Crie um objeto que represente uma casa, que contém uma propriedade que é um objeto representando o endereço da casa.

let casa = {
  endereco: {
    rua: 'João Dembinski',
    numero: 2700,
    bairro: 'Cidade Industrial',
    cidade: 'Curitiba',
    estado: 'Paraná',
    pais: 'Brasil',
  }
}

// console.log(casa.endereco.bairro)

// Adicione uma propriedade ao objeto casa que seja um array contendo objetos que representem os cômodos da casa.

let casa2 = {
  endereco: {
    rua: 'João Dembinski',
    numero: 2700,
    bairro: 'Cidade Industrial',
    cidade: 'Curitiba',
    estado: 'Paraná',
    pais: 'Brasil',
  },
  comodos: [
    {
      nome: 'Quarto',
      tamanho: 3
    },
    {
      nome: 'Sala',
      tamanho: 5
    },
    {
      nome: 'Cozinha',
      tamanho: 6
    },

  ]
}

// console.log(casa2.comodos[0].nome)