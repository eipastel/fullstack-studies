// Exercício 3:

// Crie uma classe "Forma" com um método "calcularArea". Crie duas subclasses: "Circulo" e "Quadrado". Ambas devem implementar o método 'calcularArea' de uma maneira que seja específica para cada forma.

class Forma {
  calcularArea() { 
    throw new Error('O método "calcularArea" deve ser implementado por uma subclasse')
  }
}

class Circulo extends Forma {
  constructor(raio) {
    super()
    this.raio = raio;
  }
  calcularArea() {
    return `A area do círculo é de ${(Math.PI * (this.raio * this.raio)).toFixed(2)}`
  }
}

class Quadrado extends Forma {
  constructor(lado) {
    super()
    this.lado = lado;
  }
  calcularArea() {
    return `A area do quadrado é ${this.lado * this.lado} metros quadrados.`
  }
}

let novoQuadrado = new Quadrado(4)
let novoCirculo = new Circulo(3)

// console.log(novoCirculo)
// console.log(novoCirculo.calcularArea())

// console.log(novoQuadrado)
// console.log(novoQuadrado.calcularArea())