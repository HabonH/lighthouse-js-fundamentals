const conditionalSum = function(values, condition) {
  let evenNum = [];
  let oddNum = [];
  let sum = 0;
  for(let i = 0; i < values.length; i++){
    if(values[i] % 2 === 0 && condition === "even"){
      evenNum.push(values[i]);{
        sum += values[i];
      }
    } else if(!(values[i] % 2 === 0) && condition === "odd"){
      oddNum.push(values[i]);{
        sum += values[i];
      }
    }
  }
  return sum;
}

console.log(conditionalSum([], "odd"));
