// Informações Herói
const nomeHeroi = prompt("Insira o nome de um herói:");
let poderDoHeroi = prompt("Insira o poder de ataque desse personagem:");
let poderHeroi = parseFloat(poderDoHeroi);

// Informações Dragão
const nomeDragao = "Dragão"
let vidasDoDragao = prompt("Insira quantos pontos de vida o Dragão possui:");
let defesaDoDragao = prompt("Insira quantos pontos de defesa o Dragão possui:");
let temEscudo = prompt("O dragão possui escudo?\nResposta com 'S' ou 'N'");
let vidaDragao = parseFloat(vidasDoDragao);
let defDragao = parseFloat(defesaDoDragao);

// Condições para verificar os danos
if (poderHeroi > defDragao && temEscudo === "N") {
  let dano = poderHeroi - defDragao
  vidaDragao = vidaDragao - dano
  console.log(`O dano total causado foi de ${dano}!`);

} else if (poderHeroi > defDragao && temEscudo === "S") {
  let dano = poderHeroi - defDragao
  let danoComEscudo = dano / 2
  vidaDragao = vidaDragao - danoComEscudo
  console.log(`O dragão tem escudo e protegeu metade do ataque!`);

} else if (poderHeroi <= defDragao) {
  console.log(`O ${nomeHeroi} não tem poder o suficiente para causar dano no ${nomeDragao}! =C`)
}

// Alerta atualizando as informações
alert(
  "Status atual dos personagens:\n\n" + 
  "Nome do Heroi: " + nomeHeroi + "\n" + 
  "Poder do Heroi: " + poderHeroi +  "\n\n" + 

  "Nome do Dragão: " + nomeDragao + "\n" + 
  "Vida Atual do Dragão: " + vidaDragao +  "\n" + 
  "Defesa do Dragão: " + defDragao +  "\n" + 
  "Com ou sem escudo: " + temEscudo
)