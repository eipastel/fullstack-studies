// Exercício 1:

// Crie uma classe ContaBancaria que encapsula o saldo como um atributo privado. Implemente métodos para depositar, sacar e consultar o saldo, garantindo que o saldo não possa se tornar negativo.

class ContaBancaria {
  #saldo
  #cpfDono

  constructor(nomeDono, cpfDono, saldoInicial) {
    this.nomeDono = nomeDono
    this.#cpfDono = cpfDono
    this.#saldo = saldoInicial
  }

  depositar(qntdDeposito) {
    if(qntdDeposito > 0) {
      this.#saldo += qntdDeposito
      console.log(`Depósito de R$ ${qntdDeposito},00 realizado com sucesso!`)
    } else {
      console.error(`É necessário que a quantidade de depósito seja positiva para fazer o depósito!`)
    }
  }

  sacar(qntdSaque) {
    if(qntdSaque <= this.#saldo && qntdSaque > 0) {
      this.#saldo -= qntdSaque
      console.log(`Saque de R$ ${qntdSaque},00 realizado com sucesso!`)
    } else if (qntdSaque > this.#saldo) {
      console.log(`Você não possui ${qntdSaque} na sua conta.`)
    } else {
      console.error(`Somente é possível sacar um valor positivo.`)
    }
  }

  consultar() {
    console.log(`Saldo atual em conta: ${this.#saldo}`)
  }
  
}

let contaThiago = new ContaBancaria('Thiago Diogo', 47655315892, 0)

// console.log(contaThiago)

// contaThiago.depositar(100)
// contaThiago.sacar(65)
// contaThiago.consultar()