let availableMoney = prompt("Qual a quantidade inicial de dinheiro que você possui disponível?")
availableMoney = parseFloat(availableMoney)

let option

do {
  option = prompt(`Quantidade de dinheiro: ${availableMoney}\n\nOpções disponíveis:\n1) Adicionar dinheiro\n2) Remover dinheiro\n3) Sair`)

  switch (option) {
    case "1":
      let addingMoney = prompt("Qual quantidade você deseja adicionar?")
      availableMoney += parseFloat(addingMoney)
      break
    case "2":
      let removingMoney = prompt("Qual quantidade você deseja remover?")
      availableMoney -= parseFloat(removingMoney)
      break
    case "3":
      alert("Programa finalizado!")
      break
    default:
      alert("Insira um valor válido!")
  }
} while (option !== "3")