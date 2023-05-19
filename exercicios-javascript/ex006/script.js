const personName = prompt("Digite o seu nome:");

let response = prompt("Você já visitou alguma cidade?\nResponda:\n1) Sim \n2) Não");

let cities = ''
let numberOfCities = 0

while(response == 1) {
  let cityName = prompt("Qual o nome da cidade?");
  cities = cities + cityName + " - "
  numberOfCities++

  let isThereAny = prompt("Tem mais alguma?\nResponda:\n1) Sim \n2) Não");

  if (isThereAny == 2) {
    alert(`Olá ${personName}, parabéns por já ter visitado ${numberOfCities} cidades.\nEssas são as ${numberOfCities} cidades que você já visitou:\n\n\n${cities}`);
    break
  }
}