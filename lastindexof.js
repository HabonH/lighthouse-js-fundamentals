function lastIndexOf(fromIndex, searchElement){
  for (let i = fromIndex.length - 1; i >= 0; i--){
    if (fromIndex[i] === searchElement){
      return i;
    }
  }
  return -1;
} 

console.log(lastIndexOf([], 3), "=?", -1);