const infos = document.querySelector('#infos')

// Informações do usuário
let nome = prompt('Por favor, digite seu nome:')
let sobreNome = prompt('Por favor, digite seu sobrenome:')
let campoDeEstudo = prompt('Qual o seu campo de estudo?')
let anoDeNascimento = prompt('Qual o seu ano de nascimento?')

// Calculo idade
let idade =  2023 - anoDeNascimento

infos.textContent = `Olá, ${nome} ${sobreNome}, você atualmente está estudando ${campoDeEstudo} e tem ${idade} de idade.`


