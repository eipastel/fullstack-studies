//  Exercício 1:

// Desenvolva uma classe `Funcionario` com métodos para calcular o salário anual e o bônus anual. Em seguida, crie classes como `Gerente` e `Desenvolvedor` que herdam de `Funcionario` e sobrescrevem o método de cálculo do bônus de acordo com as regras específicas de cada cargo.

// Regras de Bônus

// Gerente:
// 1. **Bônus de Participação em Projetos:** Um bônus adicional de 2% pode ser concedido com base no número de projetos nos quais o gerente participou.
// 2. **Bônus de Longevidade:** Um bônus incremental com base no número de anos de serviço na empresa.

// Desenvolvedor:
// 1. **Bônus de Participação em Projetos:** Um bônus adicional de 2% pode ser concedido com base no número de projetos nos quais o desenvolvedor participou.

class Funcionario {
  #salario

  constructor(nome, idade, cargo, salario, anosContrato) {
    this.nome = nome;
    this.idade = idade;
    this.cargo = cargo;
    this.#salario = salario;
    this.anosContrato = anosContrato;
  }

  bonusAnual() {
    return 0.02 * 100 // Bônus de 2% para o funcionário padrão.
  }

  calcularSalarioAnual() {
    let salarioAnual = (this.#salario * 12) + ((this.#salario * 12) * this.bonusAnual() / 100)
    console.log(`O salário anual de ${this.nome} com o acréscimo anual de ${this.bonusAnual()}% é de ${salarioAnual} mil reais!`)
  }
}

class Gerente extends Funcionario {
  constructor(nome, idade, cargo, salario, anosContrato, projetos) {
    super(nome, idade, cargo, salario, anosContrato)
    this.projetos = projetos;
  }

  bonusAnual() {
    let acrescimoDeBonus = 1
    if(this.anosContrato == 1) {
      acrescimoDeBonus = 2
    } else {
      acrescimoDeBonus += this.anosContrato
    }
    let totalAcresc = acrescimoDeBonus + this.projetos
    return Math.round((0.02 * totalAcresc) * 100)
  }
}

class Desenvolvedor extends Funcionario {
  constructor(nome, idade, cargo, salario, projetos) {
    super(nome, idade, cargo, salario)
    this.projetos = projetos;
  }

  bonusAnual() {
    let acrescimoDeBonus = 1
    if(this.projetos == 1) {
      acrescimoDeBonus = 2
    } else {
      acrescimoDeBonus += this.projetos
    }
    return Math.round((0.02 * acrescimoDeBonus) * 100)
  }
}

let novoDesenvolvedor = new Desenvolvedor('Thiago Diogo', 21, 'Dev Fullstack', 1800, 4)
let novoFuncionario = new Funcionario('Emanuelly Valenga', 22, 'Professora', 1500, 3)
let novoGerente = new Gerente('Emanuelly Valenga', 22, 'Professora', 1500, 2, 4)

novoDesenvolvedor.calcularSalarioAnual()
novoFuncionario.calcularSalarioAnual()
novoGerente.calcularSalarioAnual()