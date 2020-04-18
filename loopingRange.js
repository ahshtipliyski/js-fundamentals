function range (start, end, step) {
  var numbers = []

for (var i = start; i <= end; i = i + step) {
  numbers.push (i)
  }
  return numbers;
}
console.log(range(0, 10, 2));
console.log(range(10, 30, 5));
console.log(range(-5, 2, 3));