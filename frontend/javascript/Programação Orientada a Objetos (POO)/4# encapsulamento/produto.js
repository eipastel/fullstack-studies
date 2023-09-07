// Exercício 2:

// Desenvolva uma classe Produto que tem atributos privados para preço e quantidade em estoque. Implemente métodos para ajustar o preço (com validação) e para vender um produto (reduzindo a quantidade em estoque, mas não permitindo que ela vá abaixo de zero).

class Produto {
  #preco
  #qntEstoque

  constructor(nome, preco, qntEstoque) {
    this.nome = nome;
    this.#preco = preco;
    this.#qntEstoque = qntEstoque;
  }

  ajustarPreco(novoPreco) {
    if(novoPreco > 0) {
      this.#preco = novoPreco
      console.log(`Preço do ${this.nome} modificado para R$ ${this.#preco},00`)
    } else {
      console.error(`O novo preço do ${this.nome} deve ser positivo.`)
    }
  }

  venderProduto() {
    if(this.#qntEstoque > 0) {
      this.#qntEstoque -= 1
      console.log(`Venda realizada com sucesso!`)
      console.log(`Estoque atual: ${this.#qntEstoque}`)
    } else {
      console.error(`Não há estoque!`)
    }
  }
}

let carrinho = new Produto('Carrinho de Bebê', 120, 5)

console.log(carrinho)

carrinho.ajustarPreco(150)
carrinho.venderProduto()