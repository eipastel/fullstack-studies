# Super Desafio POO

**Objetivo**: Desenvolver um sistema simplificado para uma loja de aluguel de veículos, aplicando conceitos avançados de Programação Orientada a Objetos (POO).

## Especificações

### Classe Pessoa

- **Propriedades**:
  - Nome (string)
  - Idade (number)
  - Endereço (string)

- **Métodos**:
  - Um método para retornar uma descrição com todas as informações da pessoa.

### Classe Funcionario (herda de Pessoa)

- **Propriedades adicionais**:
  - Cargo (string)
  - Salário (number)

- **Métodos adicionais**:
  - Um método para calcular o bônus anual. O bônus será calculado como se segue:
    - Se o cargo for "Gerente": Recebe um bônus de 10% do salário anual.
    - Se o cargo for "Vendedor": Recebe um bônus de 5% do salário anual.
  - Um método para retornar uma descrição com todas as informações do funcionário, incluindo o bônus anual calculado (sobrescreve o método da classe Pessoa).

### Classe Cliente (herda de Pessoa)

- **Propriedades adicionais**:
  - Número de alugueis realizados (number)

- **Métodos adicionais**:
  - Um método para calcular descontos, o desconto será calculado da seguinte forma:
    - Se alugou mais de 5 vezes: Recebe um desconto de 5% no próximo aluguel.
    - Se alugou mais de 10 vezes: Recebe um desconto de 10% no próximo aluguel.
  - Um método para retornar uma descrição com todas as informações do cliente, incluindo o desconto disponível (sobrescreve o método da classe Pessoa).

### Classe Veiculo

- **Propriedades**:
  - Marca (string)
  - Modelo (string)
  - Ano (number)
  - Preço do aluguel por dia (number)
  
- **Métodos**:
  - Um método para calcular o preço do aluguel baseado no número de dias e possíveis descontos do cliente.

### Classe Loja

- **Propriedades**:
  - Nome (string)
  - Endereço (string)
  - Veículos disponíveis (array de objetos da classe Veiculo)
  - Funcionários (array de objetos da classe Funcionario)
  - Clientes (array de objetos da classe Cliente)

- **Métodos**:
  - Um método para alugar um veículo (deve diminuir a quantidade de veículos disponíveis e aumentar o número de alugueis realizados pelo cliente).
  - Um método para retornar o veículo (deve aumentar a quantidade de veículos disponíveis).
  - Um método para calcular o salário anual total pago aos funcionários, incluindo os bônus.
  - Um método para adicionar novos veículos, funcionários ou clientes à loja.
  - Um método para remover veículos, funcionários ou clientes da loja.

**Encapsulamento**: Assegure-se de que todas as propriedades das classes estejam devidamente encapsuladas, e apenas os métodos necessários estejam acessíveis publicamente.

**Polimorfismo**: Utilize polimorfismo para permitir que os métodos de descrição nas classes Funcionario e Cliente sobrescrevam o método de descrição na classe Pessoa, adicionando informações relevantes.

---

**Dica**: Comece desenvolvendo cada classe individualmente, testando suas propriedades e métodos antes de avançar para a próxima classe. Após desenvolver todas as classes, integre-as na classe Loja.

# **Boa sorte!**