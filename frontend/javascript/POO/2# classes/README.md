# Classes

Classes são um modelo ou um 'molde' usado para criar objetos que compartilham as mesmas propriedades e métodos. Em outras palavras, uma classe encapsula os detalhes de um objeto. Desde ECMAScript 6 (ES6), o JavaScript suporta classes como uma sintaxe açucarada sobre a sua herança prototípica existente. Vamos explorar a sintaxe e as características das classes em JavaScript.

## Sintaxe de Classe

Você pode declarar uma classe em JavaScript usando a palavra-chave `class` seguida do nome da classe. Os membros de uma classe (propriedades e métodos) são definidos dentro de um bloco `{}`. Aqui está um exemplo básico:

```javascript
class Pessoa {
  constructor(nome, idade) {
    this.nome = nome;
    this.idade = idade;
  }

  falar() {
    console.log(`${this.nome} está falando.`);
  }
}
```
## Construtor

O método constructor é um método especial em uma classe que é chamado automaticamente quando um novo objeto é criado. É geralmente utilizado para inicializar as propriedades do objeto.

## Métodos

Os métodos são funções associadas à classe, e podem ser chamadas em qualquer objeto criado a partir dessa classe. Eles são definidos sem a palavra-chave function.

## Criando Objetos a partir de Classes (Instanciação)

Para criar um objeto a partir de uma classe, você usa a palavra-chave `new` seguida pelo nome da classe com argumentos (se necessário). Por exemplo:

```javascript
let thiago = new Pessoa("Thiago Diogo", 21);
thiago.falar(); // Thiago Diogo está falando.
```

## Herança

A herança permite que você crie uma nova classe que herde as propriedades e métodos de uma classe existente. A palavra-chave `extends` é usada para criar uma subclasse, e `super` é usada para chamar o construtor da classe pai. Vejamos um exemplo:

```javascript
class Empregado extends Pessoa {
  constructor(nome, idade, profissao) {
    super(nome, idade);
    this.profissao = profissao;
  }

  trabalhar() {
    console.log(`${this.nome} está trabalhando como ${this.profissao}.`);
  }
}


let thiagoEmpregado = new Empregado("Thiago Diogo", 21, "Bibliotecário");
thiagoEmpregado.trabalhar(); // Thiago Diogo está trabalhando como Bibliotecário.
```

## Exercícios

### 1. Criando Classes
1.1. Crie uma classe que represente um carro, com propriedades como marca, modelo, e ano, e métodos como ligar e desligar.

1.2. Crie uma classe que represente uma casa, com propriedades como endereço (que deve ser um objeto) e uma lista de cômodos (que deve ser um array de objetos).

### 2. Utilizando Herança
2.1. Crie uma subclasse de Pessoa que represente um estudante, que tenha uma nova propriedade chamada curso.

2.2. Crie uma subclasse de Carro que represente um carro elétrico, que tenha uma nova propriedade chamada autonomiaDaBateria.