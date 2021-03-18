
function countPositiveAndSumNegative(array) {
  var result = []
  let countPositive = 0;
  let sumOfNegative = 0;

  if (array.length === 0)
    return "It's empty !";

  else {
    for (let i = 0; i < array.length; i++) {
      if (array[i] > 0) {
        countPositive++;

      } else if (array[i] <= -1) {
        sumOfNegative += array[i];
      }

    }

  }

  result[0] = countPositive;
  result[1] = sumOfNegative;

  return result;
}

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15];

console.log(countPositiveAndSumNegative(numbers))