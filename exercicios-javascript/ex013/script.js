let quantidadeDeImoveis = 0

let imoveis = []

let escolha

let proprietarioDoImovel, quantidadeQuartosDoImovel, quantidadeBanheirosDoImovel, comOuSemGaragem

let todosOsImoveis = "Todos os imóveis cadastrados:\n\n"

do {
  escolha = parseFloat(prompt(`Quantidade de imóveis cadastrados: ${imoveis.length}

1- Salvar um imóvel
2- Mostrar todos os imóveis
3- Sair`))

  switch (escolha) {
    case 1:

      proprietarioDoImovel = prompt("Insira o nome do proprietário do imóvel:")
      quantidadeQuartosDoImovel = parseFloat(prompt("Quantidade de quartos do imóvel:"))
      quantidadeBanheirosDoImovel = parseFloat(prompt("Quantidade de banheiros do imóvel:"))
      comOuSemGaragem = prompt("O imóvel possui garagem?")

      let novoImovel = new Imovel(proprietarioDoImovel, quantidadeQuartosDoImovel, quantidadeBanheirosDoImovel, comOuSemGaragem)
      imoveis.push(novoImovel)

      break
    case 2:
    // MOSTRAR TODOS OS IMÓVEIS
      for(i = 0; i < imoveis.length; i++) {
        todosOsImoveis += `Nome do proprietário: ${imoveis[i].proprietarioDoImovel}\n`
      }
      alert(todosOsImoveis)
      break
    case 3:
      break
    default:
      alert("Opção inválida!")
  }
} while (escolha != 3)

function Imovel(proprietarioDoImovel, quantidadeQuartosDoImovel, quantidadeBanheirosDoImovel, comOuSemGaragem) {
  this.proprietarioDoImovel = proprietarioDoImovel;
  this.quantidadeQuartosDoImovel = quantidadeQuartosDoImovel;
  this.quantidadeBanheirosDoImovel = quantidadeBanheirosDoImovel;
  this.comOuSemGaragem = comOuSemGaragem;
}