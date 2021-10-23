const numberOfVowels = function(data) {
  let vowels = [];
  let sum = 0;
  for(let j = 0; j < data.length; j++){
    if((data[j] === "a") || (data[j] === "e") || (data[j] === "i") || (data[j] === "o") || (data[j] === "u")){
      vowels.push(data[j]);{
        sum += 1;
      }
    }
  }
  return sum;
}

console.log(numberOfVowels("lighthouse labs"));