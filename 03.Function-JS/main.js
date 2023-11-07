//------------------Array-in ilk ve son elementini cemini return eden function yazin.

const getSum = (array) => {
  let sum;
  for (let i = 0; i < array.length; i++) {
    sum = array[0] + array[array.length - 1];
  }
  return sum;
};
console.log(getSum([1, 2, 3]));
console.log(getSum([80, 5, 58, 17, 100]));
console.log(getSum([15, -500, 0, 50]));

function findElements(array, num) {
  let bool = false;
  for (let i = 0; i < array.length; i++) {
    if (array[i] === num) {
      bool = true;
      break;
    }
  }
  return bool ? `${num} arrayda var` : `${num} arrayda yoxdur`;
}
console.log(findElements([33, 28,45,17],45));
console.log(findElements([33,28,45,17],38));
console.log(findElements(["a", "g", "y", "d"], "d"));