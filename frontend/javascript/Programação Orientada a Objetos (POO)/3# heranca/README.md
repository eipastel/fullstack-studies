# Herança

A herança é um mecanismo onde você pode criar uma nova classe utilizando uma classe já existente, herdando assim suas propriedades e comportamentos. A nova classe, conhecida como subclasse, pode então adicionar novas propriedades ou modificar as propriedades herdadas. Vamos explorar esse conceito detalhadamente:

## 1. Utilizando extends
Para criar uma subclasse de uma classe existente em JavaScript, utilizamos a palavra-chave `extends`. Isso indica que a nova classe irá herdar todas as propriedades e métodos da classe pai.

```javascript
class Animal {
  constructor(nome) {
    this.nome = nome;
  }

  falar() {
    console.log(`${this.nome} faz um barulho.`);
  }
}

class Cachorro extends Animal {
  falar() {
    console.log(`${this.nome} late.`);
  }
}
```

## 2. O Método constructor e super

Na subclasse, você pode usar o método `constructor` para definir novas propriedades ou métodos. Dentro do `constructor`, você deve chamar o método `super` antes de usar a palavra-chave `this`. O super chama o constructor da classe pai.

```javascript
class Gato extends Animal {
  constructor(nome, vidas) {
    super(nome);
    this.vidas = vidas;
  }
  
  mostrarVidas() {
    console.log(`${this.nome} tem ${this.vidas} vidas.`);
  }
}
```

## Dicas:

### Sobrescrevendo Métodos:
Se a subclasse tiver um método com o mesmo nome que um método na classe pai, o método na subclasse irá sobrescrever o método na classe pai.

### Relação "é um":
Certifique-se de que a sua subclasse tem uma relação "é um" com a classe pai. Por exemplo, um "Gato" é um "Animal", mas um "Carro" não é um "Animal".

## Exercícios Práticos:

### Exercício 1:
Crie uma classe chamada "Veiculo" com propriedades como "marca" e "velocidadeMaxima", e um método chamado "acelerar". Em seguida, crie duas subclasses: Carro e Moto, que herdam de "Veiculo", e adicione a cada uma delas uma propriedade única e um método único.

### Exercício 2: 
Construa uma classe "Pessoa" com propriedades "nome" e "idade" e um método "seApresentar". Crie duas subclasses: "Aluno" e "Professor". "Aluno" deve ter uma propriedade adicional chamada "matricula" e um método "estudar". "Professor" deve ter uma propriedade adicional chamada "disciplinaQueEnsina" e um método "ensinar".

### Exercício 3:
Crie uma classe "Forma" com um método "calcularArea". Crie duas subclasses: "Circulo" e "Quadrado". Ambas devem implementar o método 'calcularArea' de uma maneira que seja específica para cada forma.