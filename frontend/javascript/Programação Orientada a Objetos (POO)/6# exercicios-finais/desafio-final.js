// Desafio Final

// Classe Pessoa
class Pessoa {
  constructor(nome, idade, endereco) {
    this.nome = nome;
    this.idade = idade;
    this.endereco = endereco;
  }

  // Método para ver as informações da Pessoa
  verInfo() {
    console.log(`Nome: ${this.nome};`)
    console.log(`Idade: ${this.idade};`)
    console.log(`Endereço: ${this.endereco}.`)
  }
}

// Classe Funcionario (herdeiro de Pessoa)
class Funcionario extends Pessoa {
  // Atributo privado (informação sensível) 
  #salario
  constructor(nome, idade, endereco, cargo, salario) {
    super(nome, idade, endereco)
    this.cargo = cargo;
    this.#salario = salario;
  }

  // Método calcular o bonus com base no cargo
  calcularBonus() {
    let bonus = 0
    if(this.cargo == 'Gerente') {
      bonus = 0.10 // 10% de bonus anual
    } else if(this.cargo == 'Vendedor') {
      bonus = 0.05 // 5% de bonus anual
    } else {
      console.error('Cargo inválido!')
    }

    return (bonus * 100)
  }

  getSalario() {
    return this.#salario
  }

  // Sobescrevendo o método de pessoal com todas as informações de Funcionário
  verInfo() {
    console.log(`Nome: ${this.nome};`)
    console.log(`Idade: ${this.idade};`)
    console.log(`Endereço: ${this.endereco};`)
    console.log(`Cargo: ${this.cargo};`)
    console.log(`Salário: ${this.#salario} por mês.`)
    console.log(`Bonus Anual: ${this.calcularBonus()}%`)
  }
}

// Classe Cliente (herdeiro de Pessoa)
class Cliente extends Pessoa {
  constructor(nome, idade, endereco, vezesQueAlugou) {
    super(nome, idade, endereco)
    this.vezesQueAlugou = vezesQueAlugou
  }

  // Calculando desconto com base na quantidade de alugueis pagos
  calcularDesconto() {
    let desconto = 0
    if(this.vezesQueAlugou >= 5 && this.vezesQueAlugou < 10) {
      desconto = 5
    } else if(this.vezesQueAlugou >= 10) {
      desconto = 10
    } else if(this.vezesQueAlugou < 0) {
      console.error('Alugúeis pagos não podem ser negativos.')
    }
    return desconto
  }

    // Sobescrevendo o método de pessoal com todas as informações de Cliente
  verInfo() {
    console.log(`Nome: ${this.nome};`)
    console.log(`Idade: ${this.idade};`)
    console.log(`Endereço: ${this.endereco};`)
    if(this.vezesQueAlugou >= 5) {
      console.log(`Desconto disponível: ${this.calcularDesconto()}% no próximo aluguel.`)
      console.log(`Quantidade de vezes que o(a) ${this.nome} alugou um veículo: ${this.vezesQueAlugou}`)
    } else {
      console.log(`Cliente sem descontos disponíveis.`)
    }
  }
}

// Classe Veículo
class Veiculo {
  constructor(marca, modelo, ano, valorAluguelPorDia) {
    this.marca = marca;
    this.modelo = modelo;
    this.ano = ano;
    this.valorAluguelPorDia = valorAluguelPorDia;
  }

  // Método para calcular o aluguel já com os descontos do cliente
  calcularAluguel(dias, cliente) {
    // Verificando quantidade de desconto do cliente
    let descontoCliente = cliente.calcularDesconto()

    // Verificando o valor do aluguel no período de N dias
    let valorAluguelPeriodo = dias * this.valorAluguelPorDia

    // Estrutura condicional para tratar caso haja ou não desconto
    if(descontoCliente >= 1) {
      // Caso haja desconto
      console.log(`O Sr(a). ${cliente.nome} possui um desconto de ${descontoCliente}% disponível.`)
      console.log(`Preço do aluguel sem desconto: R$ ${valorAluguelPeriodo},00.`)
      console.log(`Preço do ${this.modelo} - ${this.ano} com o desconto: ${valorAluguelPeriodo - (valorAluguelPeriodo * (descontoCliente / 100))}`)

    } else if(descontoCliente < 0) {
      // Caso o desconto seja negativo
      console.error(`Erro não identificado`)

    } else {
      // Caso não haja desconto
      console.log(`O Sr(a). ${cliente.nome} não possui nenhum desconto disponível.`)
      console.log(`Preço do aluguel do ${this.modelo} - ${this.ano} no período de ${dias} dias: R$ ${valorAluguelPeriodo},00.`)
    }
  }
}

class Loja {
  #funcionarios
  #clientes
  constructor(nome, endereco, veiculoDisp = [], funcionarios = [], clientes = []) {
    this.nome = nome;
    this.endereco = endereco;
    this.veiculoDisp = veiculoDisp;
    this.#funcionarios = funcionarios;
    this.#clientes = clientes;
  }

  // Método responsável por alugar um veículo (remover do veiculos disponíveis e adicionar um aluguel para o cliente)
  alugar(cliente, veiculo) {
    if(this.veiculoDisp.includes(veiculo)) {
      // Removendo o veículo do array de veículos
      this.veiculoDisp.splice(this.veiculoDisp.indexOf(veiculo), 1)

      // Adicionando 1 vez a mais na quantidade de vezes que o cliente alugou veículos
      cliente.vezesQueAlugou += 1
  
      // Passando o feedback do aluguel bem sucedido e atualizando quantidade veículos que há disponível.
      console.log(`Veículo '${veiculo.marca} - ${veiculo.ano}' alugado com sucesso pelo(a) ${cliente.nome}!
      Quantidade de veículos restantes: ${this.veiculoDisp.length}.`)

    } else {

      // Caso o veículo escolhido não esteja em 'veiculoDisp'
      console.error('Veículo não encontrado')
    }
  }

  devolver(cliente, veiculo) {
    // Verificando se o veículo já está no array de veículos
    if(this.veiculoDisp.includes(veiculo)) {

      // Caso já esteja, tratar com esse erro
      console.error(`Veículo já se encontra disponível no estoque.`)
    } else {

      // Caso não esteja
      // Adicionando novamente o veículo ao array de veículos
      this.veiculoDisp.push(veiculo)

      // Passando o feedback da devolução bem sucedida e atualizando quantidade veículos que há disponível.
      console.log(`Veículo '${veiculo.marca} - ${veiculo.ano}' devolvido com sucesso pelo(a) ${cliente.nome}!
      Quantidade de veículos restantes: ${this.veiculoDisp.length}.`)
    }
  }

  calcularSalarioTotalAnual() {
    console.log(`O cálculo do salário total anual de todos os funcionários, considerando os bônus, é: R$ ${this.#funcionarios.map((func) => {
      let bonusFuncionario = func.calcularBonus()
      let salarioFuncionaro = func.getSalario()

      return (salarioFuncionaro * 12) + (salarioFuncionaro * (bonusFuncionario / 100))
    }).reduce((acumulador, atual) => acumulador + atual).toLocaleString('pt-BR')}.`)
  }


  // Método para adicionar veículo/funcionário/cliente.
  adicionarUniversal(tipoAdicao, item1, item2, item3, item4, item5) {
    if(tipoAdicao == 'v') {
      // Adição de um veículo: 'marca, modelo, ano, valorAluguelPorDia'
      let novoVeiculo = new Veiculo(item1, item2, item3, item4)
      this.veiculoDisp.push(novoVeiculo)
      console.log(`Veículo ${item2} adicionado com sucesso!`)

    } else if(tipoAdicao == 'f') {
      // Adição de um funcionário: 'nome, idade, endereco, cargo, salario'
      let novoFuncionario = new Funcionario(item1, item2, item3, item4, item5)
      this.#funcionarios.push(novoFuncionario)
      console.log(`Funcionário ${item1} contratado com sucesso!`)

    } else if(tipoAdicao == 'c') {
      // Adição de um cliente: 'nome, idade, endereco, vezesQueAlugo'
      let novoCliente = new Cliente(item1, item2, item3, item4)
      this.#clientes.push(novoCliente)
      console.log(`Cliente ${item1} adicionado com sucesso!`)

    } else {
      console.error('Erro não identificado.')
    }
  }

  // Método para excluir veículo/funcionário/cliente.
  removerUniversal(tipoExclusao, identificador) {
    if(tipoExclusao == 'v') {
      // Exclusão de um veículo: 'marca'
      for(let index = 0; index < this.veiculoDisp.length; index++) {
        if(this.veiculoDisp[index].marca == identificador) {
          this.veiculoDisp.splice(index, 1)
          console.log(`Exclusão do veículo realizada com sucesso!`)
          return
        }
      }
      console.log('Veículo não encontrado!')

    } else if(tipoExclusao == 'f') {
      // Exclusão de um funcionário: 'nome'
      for(let index = 0; index < this.#funcionarios.length; index++) {
        if(this.#funcionarios[index].nome == identificador) {
          this.#funcionarios.splice(index, 1)
          console.log(`Funcionário demitido com sucesso!`)
          return
        }
      }
      console.log('Funcionário não encontrado!')    

    } else if(tipoExclusao == 'c') {
      // Exclusão de um cliente: 'nome'
      for(let index = 0; index < this.#clientes.length; index++) {
        if(this.#clientes[index].nome == identificador) {
          this.#clientes.splice(index, 1)
          console.log(`Exclusão do cliente realizada com sucesso!`)
          return
        }
      }
      console.log('Cliente não encontrado!') 

    } else {
      console.log('Erro não identificado.')
    }
  }


}

// Instanciando alguns veículos de exemplo
let volks = new Veiculo('Volkswagen', 'Voyage', '2020', 140)
let suv = new Veiculo('SUV Familiar', 'Toyota', '2021', 350)
let hatch = new Veiculo('Hatch Esportivo', 'Ford', '2023', 200)
let todosVeiculos = [volks, suv, hatch]

// Instanciando alguns funcionários de exemplo
let carlos = new Funcionario('Carlos Silva', 35, 'Rua das Flores, 123, São Paulo, SP', 'Gerente', 7000)
let juliana = new Funcionario('Juliana Almeida', 28, 'Avenida das Américas, 500, Rio de Janeiro, RJ', 'Vendedor', 2500)
let roberto = new Funcionario('Roberto Oliveira', 42, 'Rua São João, 789, Salvador, BA', 'Vendedor', 2500)
let todosFuncionarios = [carlos, juliana, roberto]

// Instanciando alguns clientes de exemplo
let thiago = new Cliente('Thiago Diogo', 21, 'João Dembinski, 2700, Curitiba, PR', 10)
let ana = new Cliente('Ana Pereira', 30, 'Rua das Pedras, 400, Florianópolis, SC', 5)
let beatriz = new Cliente('Beatriz Souza', 33, 'Rua Marechal Deodoro, 300, Curitiba, PR', 3)
let todosClientes = [thiago, ana, beatriz]

// Instanciando a loja de exemplo
let nexotron = new Loja('Nexotron', 'Rua da Nexotron, 5000, Curitiba, PR', todosVeiculos, todosFuncionarios, todosClientes)

// nexotron.alugar(ana, hatch)
// nexotron.devolver(ana, hatch)
// ana.verInfo()
// nexotron.calcularSalarioTotalAnual()
// nexotron.adicionarUniversal('c', 'Thiago Fernades', 21, 'João sei la', 5)
// nexotron.removerUniversal('c', 'Thiago Diogo')