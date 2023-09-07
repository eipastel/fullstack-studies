// Exercício 3:

// Construa uma classe Paciente que encapsula atributos como nome, idade e histórico médico (como uma lista de strings) como campos privados. Implemente métodos para adicionar uma entrada ao histórico médico, obter uma cópia do histórico médico (mas não a lista original, para manter a encapsulação) e outros métodos acessores e modificadores conforme necessário.

class Paciente {
  #nome
  #idade
  #historico

  constructor(nome, idade, historico = []) {
    this.#nome = nome;
    this.#idade = idade;
    this.#historico = historico;
  }

  adicionarVisita(data, medico, observacoes, sintomas, prescricao) {
    let novaVisita = {
      data,
      medico,
      observacoes,
      sintomas,
      prescricao
    }
    this.#historico.push(novaVisita)
    console.log(`Nova visita em ${data}, com o médico ${medico} adicionada com sucesso:`)
  }

  copiaHistorico() {
    let copiaHistorico = JSON.parse(JSON.stringify(this.#historico));
    console.log(`Cópia do histórico médico do ${this.#nome} de ${this.#idade} anos:`)
    console.log(copiaHistorico)
  }
}

let novoPaciente = new Paciente('Paulo Francisco', 57, [
  {
    data: '2023-09-08',
    medico: 'Dr. Thiago',
    observacoes: 'Pressão arterial: 120/80',
    sintomas: 'Fadiga e dores de cabeça ocasionais',
    prescricao: 'Repouso e hidratação adequada' 
  },
  {
    data: '2023-06-15',
    medico: 'Dra. Fernandes',
    observacoes: 'Peso estável, alimentação balanceada',
    sintomas: 'Nenhum',
    prescricao: 'Manter a rotina alimentar'
  }
])

novoPaciente.copiaHistorico()

novoPaciente.adicionarVisita('2023-10-01', 'Dr. Pereira', 'Paciente apresentou melhora nos sintomas de fadiga', 'Leve Desconforto abdominal', 'Exames de sangue para check-up de rotina e avaliação do desconforto abdominial')

novoPaciente.copiaHistorico()