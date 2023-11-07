//------------------Array-in ilk ve son elementini cemini return eden function yazin.

const getSum = (array) => {
//   sum = array[0] + array.length-1;
  sum = array[0] + array[2];
  return sum;
};
console.log(getSum([1, 2, 3]));

console.log(getSum([80, 5, 58, 17,100]));
console.log(getSum([15,-500,0,50]));