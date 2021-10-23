function range(start, end, step){ 
  let newRange = []; 
  if (((start === undefined) || (end === undefined) || (step === undefined)) || (start > end) || (step <= 0)){
    return newRange;
    
  } else {
    for (let i = start; i <= end; i += step) {   
      newRange.push(i);
      
    }
    return newRange;
    
  }
  
}
