// Exercícios de Operações Síncronas e Assíncronas
// Dica: Não esqueça de testar seu código após cada exercício para garantir que está funcionando como esperado.


// Exercícios de Operações Síncronas

// Exercício 1
// 1. Crie uma função que aceite um número como argumento e retorne a soma de todos os números de 1 até o número fornecido. Log o resultado no console.

function somarTudo(num) {
  // Variável que irá guardar o valor total
  let acmumualdor = 0
  if(num <= 0) {
    console.error(`Número deve ser maior ou igual a um`)
    return
  } else {

    for(let index = 0; index <= num; index++) {
      acmumualdor += index
    }
    console.log(`O resultado da soma de todos os números de 1 à ${num} é: ${acmumualdor}`)
  }

}
// somarTudo(5)

// Exercício 2
// 1. Crie uma função que aceite uma string como argumento e reverta-a. Log o resultado no console.

function inverterString(str) {
  // Split para separar em array = ['t', 'h', 'i', 'a', 'g', 'o']
  // Reverse para inverter o array = ['o', 'g', 'a', 'i', 'h', 't']
  // Join para juntar tudo novamente em um string = ogaiht
  let stringReversa = str.split('').reverse().join('')
  return stringReversa
}
// console.log(inverterString('thiago'))



// Exercícios de Operações Assíncronas

// Exercício 1
// 1. Crie uma função assíncrona que use `setTimeout` para logar uma mensagem no console após 3 segundos.
// 2. Execute a função e observe o comportamento assíncrono.

async function depoisDeTres() {
  console.log(`Carregando mensagem...`)

  setTimeout(() => {
    console.log(`Olá, mundo!`)
  }, 3000);
}
// depoisDeTres()