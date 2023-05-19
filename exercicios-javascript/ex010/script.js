let fromLeftToRight = prompt("Insira uma palavra para verificar se é um palíndromo:")

let fromRightToLeft = ''

for (i = 0; i < fromLeftToRight.length; i++) {
  fromRightToLeft = fromLeftToRight[i] + fromRightToLeft
}

if (fromLeftToRight == fromRightToLeft) {
  alert("Parabéns! Essa palavra é um palíndromo.")
} else {
  alert(`Infelizmente, a palavra:\n"${fromLeftToRight}", não é um palíndromo\nPorque escrevendo ela dessa forma:\n"${fromRightToLeft}", ela não é igual como é escrita normalmente.`)
}