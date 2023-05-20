const imoveis = []

let opcao = ""

let todosImoveis = "Todos os imóveis:\n\n"

do {

  opcao = prompt(
    "Bem vindo(a) ao Cadastro de Imóveis!\n" +
    "Total de Imóveis: " + imoveis.length +
    "\n\nEscolha uma opção:\n1. Novo imóvel\n2. Lista de imóveis\n3. Sair"
  )

  switch (opcao) {
    case "1":
      const imovel = {}

      imovel.proprietario = prompt("Insira o nome do proprietário:")
      imovel.qntdQuartos = prompt("Insira a quantidade de quartos:")
      imovel.qntdBanheiros = prompt("Insira a quantidade de banheiros:")
      imovel.garagem = prompt("A propriedade possui garagem?")

      imoveis.push(imovel)
      break
    case "2":
      for(i = 0; i < imoveis.length; i++) {
        todosImoveis += "Proprietário: "  + imoveis[i].proprietario + "\n"
      }
      alert(todosImoveis)
      break
    case "3":
      alert("Finalizado...")
      break
    default:
      alert("Opção inválida!")
  }
  
} while(opcao !== "3")