const mainContent = document.getElementById('main-section')

const playerPosition = document.getElementById('playerPosition')
const playerName = document.getElementById('playerName')
const shirtNumber = document.getElementById('shirtNumber')
const shirtNumberToRemove = document.getElementById('shirtNumberToRemove')

const scalledPlayers = document.getElementById('jogadores-escalados')

let jogadoresEscalados = [
  {
  nome: "Thiago Diogo",
  posicao: "Atacante",
  camisa: "10"
  }, 
  {
      nome: "Emanuelly Valenga",
      posicao: "Goleiro",
      camisa: "1"
  }
]

function escalarJogador() {

  if (playerName.value != "" && playerPosition != "") {
    let temCerteza = confirm(
      "Você tem certeza que deseja escalar esse jogador?\n" +
      "\nNome do jogador: " + playerName.value +
      "\nPosição do jogador: " + playerPosition.value +
      "\nNúmero da camisa: " + shirtNumber.value
    )

    if (temCerteza) {

      let novoJogador = {}

      const playerDiv = document.createElement('div')
      playerDiv.id = 'camisa' + shirtNumber.value
  
      const title = document.createElement('h4')
      title.innerText = playerName.value
  
      const novaLista = document.createElement('ul')
  
      const newPlayerPosition = document.createElement('li')
      newPlayerPosition.innerText = "Posição do Jogador: " + playerPosition.value
      novaLista.appendChild(newPlayerPosition)
  
      const newShirtNumber = document.createElement('li')
      newShirtNumber.innerText = "Número da Camisa: " + shirtNumber.value
      novaLista.appendChild(newShirtNumber)
  
      playerDiv.append(title, novaLista)
      scalledPlayers.append(playerDiv)
  
      novoJogador.nome = playerName.value
      novoJogador.posicao = playerPosition.value
      novoJogador.camisa = shirtNumber.value
  
      jogadoresEscalados.push(novoJogador)
  
      playerName.value = null
      playerPosition.value = null
      shirtNumber.value = ""
  
    } else {
      alert("Escalação cancelada!")
    }

  } else {
    alert("Preencha todos os campos!")
  }

}

function removerJogador() {
  for (let i = 0; i < jogadoresEscalados.length; i++) {

    if(jogadoresEscalados[i].camisa == shirtNumberToRemove.value) {
      let temCerteza = confirm(
        "Você tem certeza que deseja excluir esse jogador da escalação?\n" + 
        "\nNome do jogador: " + jogadoresEscalados[i].nome +
        "\nPosição do jogador: " + jogadoresEscalados[i].posicao +
        "\nCamisa do jogador: " + jogadoresEscalados[i].camisa
      )
      if (temCerteza) {
        jogadoresEscalados.splice(i, 1)

        const jogadorRemovido = document.getElementById("camisa" + shirtNumberToRemove.value)

        scalledPlayers.removeChild(jogadorRemovido)
        alert("Jogador removido com sucesso!")
        break
      } else { 
        alert("Jogador não removido!")
      }
      break
    }
  }

  shirtNumberToRemove.value = ""
}