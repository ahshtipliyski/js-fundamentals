
const howManyHundreds = function(num) {
  return((num / 100) - ((num % 100) / 100))  // logic (8.94) - (94 / 100) => 8.94 - 0.94 => 8
}
console.log(howManyHundreds(1000), "=?", 10);
console.log(howManyHundreds(894), "=?", 8);
console.log(howManyHundreds(520), "=?", 5);
console.log(howManyHundreds(99), "=?", 0);
console.log(howManyHundreds(0), "=?", 0);

/* Alternative code: 
const howManyHundreds = function(num){
  let result = num/100;
  return Math.floor(result); 
}

console.log(howManyHundreds(1000));
console.log(howManyHundreds(894));
console.log(howManyHundreds(520));
console.log(howManyHundreds(99));
console.log(howManyHundreds(0));
*/
