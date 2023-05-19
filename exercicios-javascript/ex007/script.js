do {
  let options = prompt("Escolhe uma das 5 opções\n\n1) Anna Flávia\n2) Emanuelly Valenga\n3) Thiago Diogo\n4) Camila Alcantara\n5) Encerrar")
  optionsChoose = parseFloat(options)

  switch (optionsChoose) {
    case 1:
      alert("A Pulga não ama mais a Anna.")
      break
    case 2:
      alert("A Anna Flávia é uma gostosa.")
      break
    case 3:
      alert("As duas são muito grudenda nojentas. OBS: Não gosto de gay")
      break
    case 4:
      alert("O amor da minha vida.")
      break
    case 5:
      alert("Programa encerrado.")
      break
  }
} while (optionsChoose != 5)