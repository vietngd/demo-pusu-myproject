//For loop
// for (var i = 1; i < 10; i++) {
//   console.log(i);
// }

function getRandNumbers(min, max, length) {
  var result = [];
  for (var i = 0; i < length; i++) {
    var random = Math.floor(Math.random() * (max - min) + min);
    result.push(random); //gan gia tri random vao mang
  }
  return result;
}
var result = getRandNumbers(1, 10, 7);
console.log(result);

function getTotal(arr) {
  const sum = 0;
  for (var i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  console.log(sum);
  return sum;
}
