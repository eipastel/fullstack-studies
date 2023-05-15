const calcAntes = document.querySelector('.calcAntes');
const calcDepois = document.querySelector('.calcDepois');
const calcSoma = document.querySelector('.calcSoma');
const calcSub = document.querySelector('.calcSub');
const calcMult = document.querySelector('.calcMult');
const calcDiv = document.querySelector('.calcDiv');

let numeroUm = prompt('Digite o primeiro número:');
let numeroDois = prompt('Digite o segundo número:');

let numberUm = parseInt(numeroUm)
let numberDois = parseInt(numeroDois)


let soma = numberUm + numberDois;
let sub = numberUm - numberDois;
let mult = numberUm * numberDois;
let div = numberUm / numberDois;

calcAntes.textContent = `Você escolheu os números ${numeroUm} e ${numeroDois}.`
calcDepois.textContent = `Agora aqui estão todos os cálculos equivalentes:`
calcSoma.textContent = `${numeroUm} + ${numeroDois} = ${soma}`
calcSub.textContent = `${numeroUm} - ${numeroDois} = ${sub}`
calcMult.textContent = `${numeroUm} x ${numeroDois} = ${mult}`
calcDiv.textContent = `${numeroUm} % ${numeroDois} = ${div}`
