//  Exercício 2:

// Implemente uma classe `CalculadoraPolimorfica` que possui um método `calcular` que pode receber diferentes tipos de operações (soma, subtração, multiplicação, divisão) e realiza o cálculo de acordo com o tipo de operação fornecido, demonstrando assim uma forma de sobrecarga de método.

class CalculadoraPolimorfica {
  calcular(tipoCalculo, primeiroNumero, segundoNumero) {
    let resultado = 0
    if(tipoCalculo == '+') {
      resultado = primeiroNumero + segundoNumero
      console.log(`O resultado de ${primeiroNumero} ${tipoCalculo} ${segundoNumero} é: ${resultado}`)
      return
    } else if(tipoCalculo == '-') {
      resultado = primeiroNumero - segundoNumero
      console.log(`O resultado de ${primeiroNumero} ${tipoCalculo} ${segundoNumero} é: ${resultado}`)
      return
    } else if(tipoCalculo == '*') {
      resultado = primeiroNumero * segundoNumero
      console.log(`O resultado de ${primeiroNumero} ${tipoCalculo} ${segundoNumero} é: ${resultado}`)
      return
    } else if(tipoCalculo == '/') {
      resultado = primeiroNumero / segundoNumero
      console.log(`O resultado de ${primeiroNumero} ${tipoCalculo} ${segundoNumero} é: ${resultado}`)
      return
    } else {
      console.error('Tipo de operação inválida!')
    }
  }
}

const calculadora = new CalculadoraPolimorfica()
calculadora.calcular('+', 3, 5); // Resultado esperado: 8
calculadora.calcular('-', 10, 5); // Resultado esperado: 5
calculadora.calcular('*', 2, 3); // Resultado esperado: 6
calculadora.calcular('/', 9, 3); // Resultado esperado: 3