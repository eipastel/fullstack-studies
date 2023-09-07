# Introdução à Programação Orientada a Objetos (POO)

A Programação Orientada a Objetos (POO) é um paradigma de programação que utiliza objetos e classes para organizar o código. Vamos explorar os conceitos básicos passo a passo:

## 1. Objetos

Objetos são instâncias de classes que contêm propriedades (atributos) e comportamentos (métodos). Você pode pensar em um objeto como um "item" individual que possui certas características e pode realizar determinadas ações.

```javascript
let carro = {
  marca: "Toyota",
  modelo: "Corolla",
  ano: 2005,
  ligar: function() {
    console.log("O carro está ligando...");
  }
};
```

## 2. Classes

Classes são "moldes" a partir dos quais os objetos são criados. Elas encapsulam propriedades e métodos que serão compartilhados por todos os objetos criados a partir dela.

```javascript
class Carro {
  constructor(marca, modelo, ano) {
    this.marca = marca;
    this.modelo = modelo;
    this.ano = ano;
  }

  ligar() {
    console.log("O carro está ligando...");
  }
}

let meuCarro = new Carro("Toyota", "Corolla", 2005);
```

## 3. Herança
A herança permite que você crie uma nova classe com base em uma classe existente, herdando suas propriedades e comportamentos, e permitindo a adição de novas propriedades e comportamentos.

```javascript
class VeiculoEletrico extends Carro {
  constructor(marca, modelo, ano, autonomiaBateria) {
    super(marca, modelo, ano);
    this.autonomiaBateria = autonomiaBateria;
  }

  carregarBateria() {
    console.log("Carregando a bateria...");
  }
}

let meuVeiculoEletrico = new VeiculoEletrico("Tesla", "Model S", 2020, 500);
```

## 4. Encapsulamento
O encapsulamento é o processo de proteger os dados internos de um objeto e garantir que a interação com os atributos do objeto seja feita através de métodos específicos.

```javascript
class ContaBancaria {
  constructor(saldo) {
    this._saldo = saldo; // Atributo privado
  }

  depositar(valor) {
    this._saldo += valor;
  }

  sacar(valor) {
    if (valor <= this._saldo) {
      this._saldo -= valor;
    } else {
      console.log("Saldo insuficiente");
    }
  }

  verificarSaldo() {
    console.log("Saldo atual: " + this._saldo);
  }
}
```

## 5. Polimorfismo
O polimorfismo permite que métodos com o mesmo nome comportem-se de maneira diferente dependendo da classe ou do objeto que os está chamando.

```javascript
class Animal {
  fazerSom() {
    console.log("Um som genérico de animal");
  }
}

class Cao extends Animal {
  fazerSom() {
    console.log("Latido");
  }
}

class Gato extends Animal {
  fazerSom() {
    console.log("Miau");
  }
}

let meuAnimal = new Animal();
let meuCao = new Cao();
let meuGato = new Gato();

meuAnimal.fazerSom(); // Um som genérico de animal
meuCao.fazerSom();    // Latido
meuGato.fazerSom();   // Miau
```