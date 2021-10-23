const sumLargestNumbers = function(data) {
  let maximum = [0, 0];
  for(let i = 0; i < data.length; i++){
    if (data[i] > maximum[0] && data[i] > maximum[1]){
      maximum[0] = maximum[1]
      maximum[1] = data[i];      
  } else if (data[i] > maximum[0]){
    maximum[0] = data[i]
  } else {
    continue;
  }
  }
  return maximum[0] + maximum[1];
  }
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]))