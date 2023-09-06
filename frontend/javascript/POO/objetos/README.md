# Objetos
Objetos são entidades que representam coisas, pessoas, conceitos ou qualquer entidade no mundo real ou virtual. Eles possuem dois principais componentes: propriedades (atributos) e métodos (comportamentos).

## Propriedades (Atributos)
As propriedades são características que descrevem o objeto. Eles podem representar qualidades ou estados de um objeto.

## Métodos (Comportamentos)
Os métodos são funções associadas a um objeto, que representam as ações que o objeto pode realizar.

## Criando Objetos em JavaScript
Em JavaScript, você pode criar objetos usando chaves `{}` para definir um objeto literal. Aqui está um exemplo:

```javascript
let livro = {
  titulo: "1984",
  autor: "George Orwell",
  anoPublicacao: 1949,
  genero: "Ficção Distópica",
  ler: function() {
    console.log(`Lendo o livro ${this.titulo}...`);
  }
};
```

### Neste exemplo:
titulo, autor, anoPublicacao, e genero são propriedades.
ler é um método que, quando chamado, executa a ação de "ler" o livro.
Acessando Propriedades e Métodos
Você pode acessar propriedades e métodos de um objeto usando a notação de ponto ou a notação de colchetes.

```javascript
// Notação de ponto
console.log(livro.titulo); // 1984
livro.ler(); // Lendo o livro 1984...

// Notação de colchetes
console.log(livro['autor']); // George Orwell
livro['ler'](); // Lendo o livro 1984...
```

## Objetos Aninhados
Um objeto pode conter outros objetos como propriedades, o que é chamado de objeto aninhado.

```javascript
let biblioteca = {
  nome: "Biblioteca Central",
  endereco: {
    rua: "Rua Principal",
    numero: 123,
    cidade: "Fictícia"
  },
  livros: [livro]
};

console.log(biblioteca.endereco.rua); // Rua Principal
```

## Exercícios
Agora, vamos a alguns exercícios para você praticar:

### Criando Objetos
Crie um objeto que represente um carro, com propriedades como marca, modelo, ano, e métodos como ligar e desligar.
Crie um objeto que represente uma pessoa, com propriedades como nome, idade, e métodos como falar e andar.

### Manipulando Propriedades
Adicione novas propriedades aos objetos que você criou (como cor para o carro, e profissão para a pessoa).
Remova uma propriedade de um dos objetos.

### Manipulando Métodos
Adicione um novo método aos objetos que você criou (como acelerar para o carro, e trabalhar para a pessoa).
Altere um dos métodos existentes nos objetos.

### Objetos Aninhados
Crie um objeto que represente uma casa, que contém uma propriedade que é um objeto representando o endereço da casa.
Adicione uma propriedade ao objeto casa que seja um array contendo objetos que representem os cômodos da casa.