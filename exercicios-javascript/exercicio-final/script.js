let escolhaDoMenu
let vagas = [
  {
    codigo: 1,
    nomeDaVaga: "Dev Front-end",
    descDaVaga: "Vaga afirmativa para PCD",
    limiteDaVaga: "10/07/2023",
    candidatos: ["Thiago Diogo", "Emanuelly Valenga"]
  },
  {
    codigo: 2,
    nomeDaVaga: "Dev Back-end",
    descDaVaga: "Requisitos: Residir em Sorocaba",
    limiteDaVaga: "15/08/2023",
    candidatos: ["Julia Vendramello", "Anna Flávia", "Lucas Lima"]
  },
  {
    codigo: 3,
    nomeDaVaga: "Dev Full-stack",
    descDaVaga: "Vaga afirmativa para Mulheres",
    limiteDaVaga: "15/08/2023",
    candidatos: ["Gabi Haenle"]
  }
]

do {

  escolhaDoMenu = prompt(
    "Menu - Escolha:\n\n" +
    "1. Listar vagas disponíveis\n2. Criar uma nova vaga\n3. Visualizar uma vaga\n4. Inscrever um candidato em uma vaga\n5. Excluir uma vaga\n6. Sair"
  )

  switch (escolhaDoMenu) {
    case "1":
      listarVagas()
      break
    case "2":
      criarVaga()
      break
    case "3":
      visualizarVaga()
      break
    case "4":
      inscreverCandidato()
      break
    case "5":
      excluirVaga()
      break
    case "6":
      alert("Saindo do menu.")
      break
    default:
      alert("Opção inválida!")
      break
  }

} while (escolhaDoMenu != "6")


function listarVagas() {
  let todasAsVagas = ''
  for(i = 0; i < vagas.length; i++) {
    todasAsVagas += "\nCódigo da vaga: " + vagas[i].codigo +
    "\nNome da Vaga: " + vagas[i].nomeDaVaga +
    "\nQuantidade de candidatos inscritos: " + vagas[i].candidatos.length + "\n"
  }

  alert(
    "Todas as Vagas:\n" + todasAsVagas
  )
}

function criarVaga() {
  const vaga = {}

  vaga.codigo = vagas.length + 1
  vaga.nomeDaVaga = prompt("Insira o nome da vaga:")
  vaga.descDaVaga = prompt("Insira uma curta descrição da vaga:")
  vaga.limiteDaVaga = prompt("Qual a data limite para a vaga?")
  vaga.candidatos = []

  let confirmar = confirm(
    "Você tem certeza que deseja adicionar essa nova vaga?\n" + 
    "\nNome da Vaga: " + vaga.nomeDaVaga + 
    "\nDescrição da vaga: " + vaga.descDaVaga +
    "\nData limite da vaga: " + vaga.limiteDaVaga
  )

  if(confirmar) {
    alert("Vaga '" + vaga.nomeDaVaga + "' criada com sucesso!")
    vagas.push(vaga)
    return
  } else {
    alert("Criação de vaga cancelada!")
    return
  }
}

function visualizarVaga() {

  let indice = parseFloat(prompt("Digite o código da vaga que você deseja visualizar:"))

  let todosCandidatos = ""
  for(i = 0; i < vagas[indice - 1].candidatos.length; i++) {
    todosCandidatos += "\nNome do candidato: " + vagas[indice - 1].candidatos[i]
  }

  alert(
    "Informações da vaga:\n" + 
    "\nCódigo da vaga: " + vagas[indice - 1].codigo +
    "\nNome da vaga: " + vagas[indice - 1].nomeDaVaga + 
    "\nDescrição da vaga: " + vagas[indice - 1].descDaVaga +
    "\nData limite da vaga: " + vagas[indice - 1].limiteDaVaga +
    "\n\nCandidatos inscritos: " + vagas[indice - 1].candidatos.length + todosCandidatos
  )
}

function inscreverCandidato() {

  let novoCandidato = prompt("Digite o nome do candidato à adicionar:")
  let indice = parseFloat(prompt("Digite o código da vaga que você deseja adicionar o candidato:"))


  let confirmar = confirm(
    "Tem certeza que deseja adicionar o candidato à vaga?\n" + 
    "\nNome do candidato: " + novoCandidato + 
    "\nNome da Vaga: " + vagas[indice - 1].nomeDaVaga
  )

  if(confirmar) {
    alert(novoCandidato + " adicionado com sucesso à vaga " + vagas[indice - 1].nomeDaVaga + "!")
    vagas[indice - 1].candidatos.push(novoCandidato)
  } else {
    alert("Inscrição de candidato cancelada!")
  }

}

function excluirVaga() {

  let indice = parseFloat(prompt("Digite o código da vaga que você deseja excluir:")) - 1

  let confirmar = confirm(
    "Você tem certeza que deseja excluir essa vaga?\n" + 
    "\nCódigo da Vaga: " + vagas[indice].codigo +
    "\nNome da Vaga: " + vagas[indice].nomeDaVaga + 
    "\nDescrição da vaga: " + vagas[indice].descDaVaga
  )

  if(confirmar) {
    vagas.splice(indice, 1)
  }

}