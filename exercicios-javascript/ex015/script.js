let opcoes

do {
  opcoes = prompt(
    "Bem vindo(a) ao programa de cálculo geométrico!\n\n" +
    "Escolha uma das opções de cálculo:\n" +
    "1. Área do triângulo\n2. Área do retângulo\n3. Área do quadrado\n4. Área do Trapézio\n5. Área do círculo\n6. Sair"
  )

  switch (opcoes) {
    case "1":
      let baseTriangulo = parseFloat(prompt("Insira a base do triângulo:"))
      let alturaTriangulo = parseFloat(prompt("Insira a altura do triângulo:"))
      let resultadoTriangulo = calculoTriangulo(baseTriangulo, alturaTriangulo)
      alert(
        "A área do triângulo é: " + resultadoTriangulo + "."
      )
      break
    case "2":
      let baseRetangulo = parseFloat(prompt("Insira a base do retângulo:"))
      let alturaRetangulo = parseFloat(prompt("Insira a altura do retângulo:"))
      let resultadoRetangulo = calculoRetangulo(baseRetangulo, alturaRetangulo)
      alert(
        "A área do retângulo é: " + resultadoRetangulo + "."
      )
      break
    case "3":
      let ladoQuadrado = parseFloat(prompt("Insira o lado do quadrado:"))
      let resultadoQuadrado = calculoQuadrado(ladoQuadrado)
      alert(
        "A área do quadrado é: " + resultadoQuadrado + "."
      )
      break
    case "4":
      let baseMaior = parseFloat(prompt("Insira a base maior do trapézio:"))
      let baseMenor = parseFloat(prompt("Insira a base menor do trapézio:"))
      let alturaTrapezio = parseFloat(prompt("Insira a altura do trapézio:"))
      let resultadoTrapezio = calculoTrapezio(baseMaior, baseMenor, alturaTrapezio)
      alert(
        "A área do trapézio é: " + resultadoTrapezio + "."
      )
      break
    case "5":
      let raioCirculo = parseFloat(prompt("Insira o raio do círculo:"))
      let resultadoCirculo = calculoCirculo(raioCirculo)
      alert(
        "A área do círculo é: " + resultadoCirculo + "."
      )
      break
    case "6":
      alert("Programa finalizado.")
      break
    default:
      alert("Opção inválida!")
      break
  }

} while (opcoes != "6")


function calculoTriangulo(x, y) {
  return x * y / 2
}

function calculoRetangulo(x, y) {
  return x * y
}

function calculoQuadrado(x) {
  return x * x
}

function calculoTrapezio(x, y, z) {
  return x * x
}

function calculoCirculo(x, pi = 3.14) {
  return pi * (x * x)
}