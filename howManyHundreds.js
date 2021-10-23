const howManyHundreds = bottles => {
  let container = (bottles / 100); 
  return Math.trunc(container);
}
  console.log(howManyHundreds(1234))
