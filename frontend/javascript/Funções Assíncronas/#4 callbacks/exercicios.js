// Exercício 1: Callback Básico

// Objetivo: Criar uma função que aceita um callback e o executa após imprimir uma mensagem no console.

// Instruções:
// Crie uma função chamada exibirMensagem que aceita um callback como argumento.
// Dentro da função exibirMensagem, imprima a mensagem "Executando uma operação..." no console.
// Em seguida, execute o callback fornecido.


function exibirMensagem(callback) {
  let msg = 'Olá, mundo!'
  console.log('Carregando a mensagem...')
  callback(null, msg)
}

exibirMensagem((erro, msg) => {
  if(erro) {
    console.error(erro)
  } else {
    console.log(msg)
  }
})


// Exercício 2: Simulando Operações Assíncronas com Callbacks

// Objetivo: Simular uma operação assíncrona usando setTimeout e um callback.

// Instruções:
// Crie uma função chamada operacaoAssincrona que aceita um callback como argumento.
// Use setTimeout para simular uma operação assíncrona que demora 2 segundos para completar.
// Após 2 segundos, execute o callback passando um valor de sua escolha.

function operacaoAssincrona(callback) {
  let value = [15, 5]
  setTimeout(() => {
    callback(null, value)
  }, 2000);
}

operacaoAssincrona((err, arr) => {
  if(err) {
    console.error(err)
  } else {
    let result = 0
    for(let index = 0; index < arr.length; index++) {
      result += arr[index]
    }
    console.log(result)
  }
})

// Exercício 3: Manipulação de Erros com Callbacks

// Objetivo: Criar uma função que simula uma operação assíncrona com a possibilidade de erro e usa um callback para relatar o sucesso ou falha.

// Instruções:
// Crie uma função chamada operacaoComErro que aceita um callback como argumento.
// Gere um número aleatório e, se o número for ímpar, passe um objeto de erro (com uma mensagem de erro de sua escolha) para o callback.
// Se o número for par, passe null para o objeto de erro e um valor de sucesso de sua escolha para o callback.

// Teste:
// Chame a função operacaoComErro passando uma função callback que verifica o objeto de erro e imprime uma mensagem de erro ou sucesso no console, conforme apropriado.

function operacaoComErro(callback) {
  let randomNumber = Math.floor(Math.random() * (1000 - 1) - 1)

  if(randomNumber % 2 === 0) {
    callback(null, 'Deu bom caralho!!')
  } else {
    callback(new Error('Deu ruim demais, ta doido!'), randomNumber)
  }
}

operacaoComErro((erro, msgSucess) => {
  if(erro) {
    console.log(erro)
  } else {
    console.log(msgSucess)
  }
})