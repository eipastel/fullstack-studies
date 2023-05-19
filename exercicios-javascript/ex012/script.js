let escolha

let cartasDoBaralho = []

let numeroDeCartas = 0;

do {
  let i = 0;
  let todasCartas = "Cartas no Baralho:";
  while (i < cartasDoBaralho.length) {
  todasCartas += `\n${i + 1}º- ${cartasDoBaralho[i]}`
  i++
  }

  escolha = prompt(`Quantidade de Cartas: ${numeroDeCartas}\n\n${todasCartas}\n\nSelecione uma das opções:\nA) Adicionar uma carta\nP) Puxar uma carta\nS) Sair`)

  switch(escolha) {
    case "A":
      let novaCarta = prompt("Digite o nome da carta:")
      cartasDoBaralho.unshift(novaCarta)
      numeroDeCartas++;
      break
    case "P":
      if (cartasDoBaralho.length > 0) {
        let cartaRemovida = cartasDoBaralho.shift()
        alert("Você removeu a carta '" + cartaRemovida + "'.")
        if (numeroDeCartas > 0) {
          numeroDeCartas--;
        } else {
          numeroDeCartas = 0;
        }      
      } else {
        alert("O baralho não tem nenhuma carta, adicione uma antes de puxar.")
      }
      break
    case "S":
      alert("Programa finalizado!")
      break
    default:
      alert("Escolha uma das opções válidas!")
      break
  }
} while (escolha !== "S")