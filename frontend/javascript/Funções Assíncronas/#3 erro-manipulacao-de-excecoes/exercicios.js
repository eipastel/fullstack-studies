// Validação de conhecimento

// Exercício 1: Identificando e Capturando Erros
// Crie uma função que aceite um número como argumento e calcule o quadrado dele. Se o número for negativo, lance um erro com uma mensagem adequada.
// Crie um bloco try...catch separado para capturar qualquer erro lançado e logar a mensagem de erro no console.

function numeroQuadrado(num) {
  try {
    if(typeof num !== 'number') throw new Error('Entrada inválida!')
    if(num < 0) throw new Error('O número deve ser positivo!')
    return num * num
  } catch(error) {
    console.error(error.message)
    return null
  }
}
// console.log(numeroQuadrado(-1))


// Exercício 2: Manipulação de Erros com a Fetch API
// Faça uma chamada para um endpoint inválido (por exemplo, 'https://jsonplaceholder.typicode.com/invalid_endpoint') usando fetch.
// Adicione um bloco .catch na promise para capturar erros de rede e logar a mensagem de erro no console.

fetch('https://jsonplaceholder.typicode.com/invalid_endpoint')
  .then(response => {
    if(!response.ok) {
      // throw new Error('Erro de rede', response.statusText)
    }
    return response.json()
  })
  .then(data => console.log(data))
  .catch(error => console.error(error.message))



// Exercício 3: Criando uma Classe de Erro Personalizada
// Crie uma classe de erro personalizada chamada InvalidInputError que estenda a classe Error.
// Use esta classe para lançar um erro com uma mensagem personalizada quando uma entrada inválida for fornecida em uma função.
// Crie uma função que aceite uma string como argumento e cheque se a string tem mais de 5 caracteres. Se não, lance um InvalidInputError.
// Capture esse erro personalizado com um bloco try...catch e logar a mensagem de erro no console.

class InvalidInputError extends Error {
  constructor(message) {
    super(message)
    this.name = 'InvalidInputError';
  }
}

function aceitaString(str) {
  if(str.length < 5) {
    throw new InvalidInputError('Input inválido')
  }
}

try {
  aceitaString('Olá')
} catch (error) {
  //console.error(error.message)
}



// Exercício 4: Manipulação de Erros em Funções Assíncronas
// Crie uma função que retorne uma promise que será rejeitada com uma mensagem de erro após 5 segundos.
// Use um bloco .catch para capturar o erro e logar a mensagem de erro no console.

function funcaoRejeitada() {

  const promiseTeste = new Promise( (resolve, reject) => {
    setTimeout(() => {
      reject('Erro não identificado')
    }, 5000)
  })

  return promiseTeste
}

funcaoRejeitada()
  .catch(error => {
    console.log(error)
  })