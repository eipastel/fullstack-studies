// 1. Criando Classes

//1.1. Crie uma classe que represente um carro, com propriedades como marca, modelo, e ano, e métodos como ligar e desligar.

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

let novoCarro = new Carro('Gol', 'Gol Bolinha', 2005)

// novoCarro.ligar()
// novoCarro.desligar()
// console.log(novoCarro.ano)

// 1.2. Crie uma classe que represente uma casa, com propriedades como endereço (que deve ser um objeto) e uma lista de cômodos (que deve ser um array de objetos).

class Casa {
  constructor(rua, numero, bairro, cidade, comodos) {
    this.endereco = {
      rua,
      numero,
      bairro,
      cidade
    };
    this.comodos = comodos;
  }
}

let Docas = new Casa('João Dembinski', 2700, 'Cidade Industrial', 'Curitiba',
  [
    {
      nome: "Sala de Estar",
      tamanho: 20,
      mobiliado: true,
      moveis: ["sofá", "televisão"]
    },
    {
      nome: "Cozinha",
      tamanho: 15,
      mobiliado: true,
      moveis: ["geladeira", "fogão"]
    }
  ]
)

console.log(Docas.comodos)