let inputNumber = prompt("Qual número você deseja ter a tabuada?");

let completeResult = "- 0";

for (let i = 1; i <= 20; i++) {

  let result = inputNumber * i
  completeResult += '\n- ' + result

}

alert(completeResult)