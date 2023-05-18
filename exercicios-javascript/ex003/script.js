let nomePrimeiroVeiculo = prompt("Qual o nome do primeiro veículo?");
let velocidadePrimeiro = prompt("Qual velocidade do primeiro veículo?");
let nomeSegundoVeiculo = prompt("Qual o nome do segundo veículo?");
let velocidadeSegundo = prompt("Qual a velocidade do segundo veículo?");

let velocidadePrimeiroVeiculo = parseFloat(velocidadePrimeiro)
let velocidadeSegundoVeiculo = parseFloat(velocidadeSegundo)

if (velocidadePrimeiroVeiculo > velocidadeSegundoVeiculo) {
  console.log(`O ${nomePrimeiroVeiculo} é mais rápido que o ${nomeSegundoVeiculo}!`)
} else if (velocidadePrimeiroVeiculo === velocidadeSegundoVeiculo) {
  console.log(`Os veículos ${nomePrimeiroVeiculo} e ${nomeSegundoVeiculo} tem a mesma velocidade!`)
} else if (velocidadePrimeiroVeiculo < velocidadeSegundoVeiculo) {
  console.log(`O ${nomeSegundoVeiculo} é mais rápido que o ${nomePrimeiroVeiculo}!`)
} else {
  console.log("Algo deu errado, tente novamente!")
}