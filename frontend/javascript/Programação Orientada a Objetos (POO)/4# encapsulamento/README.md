# Encapsulamento

O encapsulamento é um dos pilares da programação orientada a objetos (OOP), proporcionando uma maneira de proteger os atributos de uma classe contra o acesso direto e não autorizado, bem como controlar a maneira como as interações com esses atributos são realizadas. A seguir, você encontrará uma análise aprofundada deste conceito, juntamente com dicas e exercícios práticos:

## 1. Métodos Acessores e Modificadores

Os métodos acessores (também conhecidos como getters) e modificadores (também conhecidos como setters) são usados para controlar o acesso aos atributos de uma classe.

### Métodos Acessores (Getters)
Os getters são métodos que permitem ler o valor de um atributo particular de um objeto.

```javascript
class Pessoa {
  constructor(nome) {
    this._nome = nome;
  }
  
  get nome() {
    return this._nome;
  }
}
```

### Métodos Modificadores (Setters)
Os setters são métodos que permitem modificar o valor de um atributo particular de um objeto, permitindo, muitas vezes, a validação do novo valor antes de ser atribuído.

```javascript
class Pessoa {
  // ... (como acima)

  set nome(novoNome) {
    if (typeof novoNome === 'string') {
      this._nome = novoNome;
    } else {
      console.error('Nome deve ser uma string');
    }
  }
}
```

## 2. Atributos Privados:
Em JavaScript, uma convenção comum é prefixar atributos privados com um sublinhado (`_`). No entanto, os atributos ainda são tecnicamente acessíveis de fora da classe. Com a introdução do ECMAScript 6, agora é possível criar verdadeiros atributos privados usando `#`.

```javascript
class Pessoa {
  #nome;

  constructor(nome) {
    this.#nome = nome;
  }

  get nome() {
    return this.#nome;
  }

  set nome(novoNome) {
    if (typeof novoNome === 'string') {
      this.#nome = novoNome;
    } else {
      console.error('Nome deve ser uma string');
    }
  }
}
```

# Dicas:

## Utilização Correta de Atributos Privados:
### Encapsulamento de Implementação: 
Oculte os detalhes internos da classe para proteger a integridade dos dados.

### Facilidade de Manutenção: 
Encapsulamento facilita a manutenção do código, pois você pode alterar os atributos internos sem afetar as classes que usam sua classe.

### Validação de Dados: 
Use métodos setters para validar novos valores antes de atribuí-los a atributos privados.

## Exercícios Práticos:

### Exercício 1:
Crie uma classe ContaBancaria que encapsula o saldo como um atributo privado. Implemente métodos para depositar, sacar e consultar o saldo, garantindo que o saldo não possa se tornar negativo.

### Exercício 2:
Desenvolva uma classe Produto que tem atributos privados para preço e quantidade em estoque. Implemente métodos para ajustar o preço (com validação) e para vender um produto (reduzindo a quantidade em estoque, mas não permitindo que ela vá abaixo de zero).

### Exercício 3:
Construa uma classe Paciente que encapsula atributos como nome, idade e histórico médico (como uma lista de strings) como campos privados. Implemente métodos para adicionar uma entrada ao histórico médico, obter uma cópia do histórico médico (mas não a lista original, para manter a encapsulação) e outros métodos acessores e modificadores conforme necessário.