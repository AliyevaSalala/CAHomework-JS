let arr = [1, 2, 2, 2, 4, 3, 3, 2, 4, 7, 5, 7, 6];

//1. remove dublicated values

function removeDuplicates(arr) {
  return arr.filter((item, index) => arr.indexOf(item) === index);
}
console.log(removeDuplicates(arr));

//-----2. Yuxaridaki arrayda hər hansı ədədin neçe defe tekrarlandigini tapan funksiya yazın

function findCountDigitOfArray(array, number) {
  let count = 0;
  arr.forEach((num) => num === number && count++);
  return ` ${number} ededi ${count} defe tekrarlanir `;
}

console.log(findCountDigitOfArray(arr, 7));
console.log(findCountDigitOfArray(arr, 2));

//-----------3. generate otp (4 rəqəmli otp kodu yaradan funksiya yazın)

function generateOtp() {
  let digits = "0123456789";
  let OTP = "";
  for (let i = 0; i < 4; i++) {
    OTP += digits[Math.floor(Math.random() * 10)];
  }
  return OTP;
}
console.log(generateOtp());

//-----------4. find all truth values in myArr

let myArr = [1, 4, true, false, 0, 5, "hello", NaN, undefined];

// let allTrue = myArr.filter(Boolean);
// console.log(allTrue);
console.log(myArr.filter((item) => Boolean(item)));   // All trues values
// console.log(myArr.filter((item) => !Boolean(item)));   // All false values
//5. Arraydaki en boyuk reqemi tapan ve nece defe tekrarlandigini gosteren funksiya yazın.

let max = Math.max(...arr);
function findMaxDigitOfArray(arr, number) {
  let count = 0;
  arr.forEach((num) => num === max && count++);
  return count;
}

console.log(findMaxDigitOfArray(arr));
// console.log(` ${Math.max(...arr)}  ${findMaxDigitOfArray(arr, 7)}`);
