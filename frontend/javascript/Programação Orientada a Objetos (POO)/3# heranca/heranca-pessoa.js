// Exercício 2: 

// Construa uma classe "Pessoa" com propriedades "nome" e "idade" e um método "seApresentar". Crie duas subclasses: "Aluno" e "Professor". "Aluno" deve ter uma propriedade adicional chamada "matricula" e um método "estudar". "Professor" deve ter uma propriedade adicional chamada "disciplinaQueEnsina" e um método "ensinar".

class Pessoa {
  constructor(nome, idade) {
    this.nome = nome;
    this.idade = idade;
  }
  seApresentar() {
    console.log(`Olá, eu sou o(a) ${this.nome}`)
  }
}

class Professor extends Pessoa {
  constructor(nome, idade, disciplinaQueEnsina) {
    super(nome, idade)
    this.disciplinaQueEnsina = disciplinaQueEnsina;
  }
  ensinar() {
    console.log(`Ensinando ${this.disciplinaQueEnsina}.`)
  }
}

class Aluno extends Pessoa {
  constructor(nome, idade, matricula) {
    super(nome, idade)
    this.matricula = matricula;
  }
  estudar() {
    this.seApresentar()
    console.log('Começando a estudar...')
  }
}

let novoAluno = new Aluno('Thiago Diogo', 21, 29082002)
let novoProfessor = new Professor('Emanuelly Valenga', 22, 'Matemática')

// novoAluno.estudar()
// novoProfessor.ensinar()

// console.log(novoAluno)
// console.log(novoProfessor)