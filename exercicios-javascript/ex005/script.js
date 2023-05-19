let valueToConvert = prompt("Insira o valor em metros que você deseja converter:");
let chooseValue = parseFloat(valueToConvert);

let optionToConvert = prompt("Agora escolhe qual método de conversão você deseja:\n 1) Milímetro(mm) \n 2) Centímetro(cm) \n 3) Decímetro(dm) \n 4) Decâmetro(dam) \n 5) Hectômetro(hm) \n 6) Quilômetro(km)")
let option = parseFloat(optionToConvert);

switch (option) {
  case 1:
    let resultadomm = chooseValue * 1000;
    alert("O resultado da conversão para Milímetro é " + resultadomm);
    break
  case 2:
    let resultadocm = chooseValue * 100;
    alert("O resultado da conversão para Centímetro é " + resultadocm);
    break
  case 3:
    let resultadodm = chooseValue * 10;
    alert("O resultado da conversão para Decímetro é " + resultadodm);
    break
  case 4:
    let resultadodam = chooseValue / 10;
    alert("O resultado da conversão para Decâmetro é " + resultadodam);
    break
  case 5:
    let resultadohm = chooseValue / 100;
    alert("O resultado da conversão para Hectômetro é " + resultadohm);
    break
  case 6:
    let resultadokm = chooseValue / 1000;
    alert("O resultado da conversão para Quilômetro é " + resultadokm);
    break
  default:
    alert("Você não selecionou nenhuma das opções válidas, tente novamente!")
}
