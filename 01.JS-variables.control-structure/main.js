// 1) Verilmiş 3 rəqəmli ədədin rəqəmlərinin cəmini, hasilini və ədədi ortasını tapan proqram tərtib edin.

// let a= 243;
// let first =a%10;
// let second =((a-first)/10)%10;
// let third =(((a-first)/10)-second)/10;
// let sum=first + second + third;
// let multiply= first * second * third;
// let average =sum/3;

// console.log(`Reqemlerin cemi: ${sum}, hasili: ${multiply}, ededi ortasi: ${average}`);

//            2) Verilmiş ədədin bütün bölənlərini console'a çıxaran proqram tərtib edin.

// function divisors(numbers) {
//   let divisors = [];
//   for (let i = 1; i <= numbers; i++) {
//     if (numbers % i === 0) {
//       divisors.push(i);
//     }
//   }
//   return divisors.length>1 ? divisors: `${numbers}`
// }
// console.log(divisors(30));

//2

// let a = 30;
// for (let i = 0; i <=a; i++) {
//   if (a % i === 0) {
//     console.log(i);
//   }
// }

// 3)Verilmiş ədədin bölənlərinin sayını tapan proqram tərtib edin.

// let number = 10;
// let count = 0;
// for (let i = 0; i <= 10; i++) {
//   if (number % i == 0) {
//     count++;
//   }
// }
// console.log(`${count}`);

//             4)for loop'undan isrifade ederek asagidaki console'da asagidaki goruntunu adin.

// let a = 10;
// let result;

// for (let i = 0; i<=10; i++) {
//     let result = i*i
//     console.log(`${i} * ${i} = ${result}`);
// }

// 2ci usul

// for (let i = 0; i <=10; i++) {
//    console.log( `${i} * ${i} =${i *i}`)

// }

//           5)for loop'undan istifade ederek asagidaki console'dan asagidaki goruntunu alin.

// let main ="i i^2 i^3"
// console.log(`${main}`)
// for (let i = 0; i <= 10; i++) {
//   let result2 = i * i;
//   let result3 = i * i * i;
//   console.log(`${i},  ${result2}, ${result3}`);
// }

//6)0 - 100 arası yalnız sadə ədədləri console'da çap edin.

//7) 0 - 100 arası tək ədədlərin və cüt ədədlərin cəmini tapın.

let count ;
let oddSum = 0;
let evenSum = 0;
for (let index = 1; index < 100; index++) {
  if (index % 2 === 1) {
    count++;
    console.log(`${oddSum} tek ededlerin cemi`);
  } else {
    console.log(`${evenSum} cüt ededlerin cemi`);
  }
}
