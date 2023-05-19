let escolha

let pacientesAtivos = ["Thiago Diogo", "Emanuelly Valenga"]

do {
  let i = 0;
  let osPacientes = "Pacientes:";
  while (i < pacientesAtivos.length) {
  osPacientes += `\n${i + 1}º) ${pacientesAtivos[i]}`
  i++
  }

  escolha = prompt(`Selecione uma das opções:\nN) Novo Paciente\nC) Consultar Paciente\nS) Sair\n\n${osPacientes}`)

  switch(escolha) {
    case "N":
      let novoPaciente = prompt("Digite o nome de um paciente:")
      pacientesAtivos.push(novoPaciente)
      break
    case "C":
      pacientesAtivos.shift()
      break
    case "S":
      alert("Programa finalizado!")
      break
    default:
      alert("Escolha uma das opções válidas!")
      break
  }
} while (escolha !== "S")