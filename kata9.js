const camelCase = function(input) {
  let newCase = input.split(" ");
  for(let i = 0; i < newCase.length; i++){
    if(i >= 1){
      newCase[i] = newCase[i].charAt(0).toUpperCase() + newCase[i].slice(1);
    }
  }
  return newCase.join("");
}

console.log(camelCase("this is a string"));
console.log(camelCase("loopy lighthouse"));
console.log(camelCase("supercalifragalisticexpialidocious"));