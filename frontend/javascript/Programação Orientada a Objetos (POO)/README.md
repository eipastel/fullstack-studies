# Polimorfismo

O polimorfismo, outro pilar fundamental da programação orientada a objetos (OOP), permite que objetos de diferentes classes sejam tratados como objetos de uma superclasse comum, facilitando a escrita de código mais flexível e reutilizável. Aqui está uma análise profunda deste conceito, acompanhada por dicas e exercícios práticos:

## 1. Sobreposição de Métodos (Override)

A sobreposição de métodos ocorre quando uma classe herda de outra classe e então modifica o comportamento de um ou mais métodos herdados para adaptá-los às suas necessidades específicas.

```javascript
class Animal {
  falar() {
    console.log('O animal está fazendo um som.');
  }
}

class Cachorro extends Animal {
  falar() {
    console.log('O cachorro está latindo.');
  }
}
```

## 2. Sobrecarga de Métodos (Overload)

A sobrecarga de métodos é um conceito onde múltiplos métodos podem ter o mesmo nome, mas com parâmetros diferentes. Infelizmente, JavaScript não suporta sobrecarga de métodos diretamente, mas você pode simular isso verificando os argumentos recebidos na função.

```javascript
class Calculadora {
  somar(...args) {
    return args.reduce((acc, current) => acc + current, 0);
  }
}
```

# Dicas:

## Reutilização de Código:

### Herança para Reutilização:
Utilize a herança para promover a reutilização de código, evitando a duplicação de código comum entre várias classes.

### Flexibilidade de Código:
O polimorfismo facilita a adição de novas classes ao seu sistema, muitas vezes sem exigir nenhuma modificação nas classes existentes.

## Exercícios Práticos:

### Exercício 1:
Desenvolva uma classe `Funcionario` com métodos para calcular o salário anual e o bônus anual. Em seguida, crie classes como `Gerente` e `Desenvolvedor` que herdam de `Funcionario` e sobrescrevem o método de cálculo do bônus de acordo com as regras específicas de cada cargo.
#### Regras de Bônus
##### Gerente:
1. **Bônus de Participação em Projetos:** Um bônus adicional de 2% pode ser concedido com base no número de projetos nos quais o gerente participou.
2. **Bônus de Longevidade:** Um bônus incremental com base no número de anos de serviço na empresa.
##### Desenvolvedor:
1. **Bônus de Participação em Projetos:** Um bônus adicional de 2% pode ser concedido com base no número de projetos nos quais o desenvolvedor participou.

### Exercício 2:
Implemente uma classe `CalculadoraPolimorfica` que possui um método `calcular` que pode receber diferentes tipos de operações (soma, subtração, multiplicação, divisão) e realiza o cálculo de acordo com o tipo de operação fornecido, demonstrando assim uma forma de sobrecarga de método.