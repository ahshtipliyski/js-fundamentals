function range(start, end, step) {
  let rangeArray = [];

  if (start === undefined || end === undefined || step === undefined || start > end || step <= 0) {
    return rangeArray;
  } else {
    for (start; start <= end; start += step) {
      rangeArray.push(start);
    }
    return rangeArray;
  }
}
console.log(range(0, 10, 2));
console.log(range(10, 30, 5));
console.log(range(-5, 2, 3));


