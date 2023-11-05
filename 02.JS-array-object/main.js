let array = Array();
let numbers = [12, 7, 3, 9, 6, 15, 8];

//----------Task-1
// #Array-in bütün elementlərini kvadrata yüksəldib yeni array qaytaran proqram yazın.

// let square = [];
// for (let i = 0; i < numbers.length; i++) {
//   square.push(numbers[i] ** 2);
// }
// console.log("SQUARE:", square);

//---------Task-2
//--------Verilmiş array-in min elementi ilə max elementinin yerini dəyişən proqram tərtib edin

// let maxIndex = 0;
// let minIndex = 0;

// for (let i = 1; i < numbers.length; i++) {
//   if (numbers[i] < numbers[minIndex]) {
//     minIndex = i;
//   } else if (numbers[i] > numbers[maxIndex]) {
//     maxIndex = i;
//   }
//   let temp = numbers[maxIndex];
//   numbers[maxIndex] = numbers[minIndex];
//   numbers[minIndex] = temp;
// }
// console.log(numbers);

//------Task-3
//-----------Verilmiş array-in min elementinin indeksini çapa verən proqram tərtib edin.

// let min = numbers[0];
// let maxIndex = 0;
// for (let i = 0; i < numbers.length; i++) {
//   if (numbers[i] < min) {
//     min = numbers[i];
//     maxIndex=i

//   }
// }  console.log(" Min elementin indeksi:", maxIndex);

//----------------- Task-4
const employees = [
  { name: "Jamil", salary: 50000, department: "IT" },
  { name: "Jale", salary: 60000, department: "HR" },
  { name: "Bayram", salary: 55000, department: "IT" },
  { name: "Sahil", salary: 75000, department: "HR" },
  { name: "Maryam", salary: 65000, department: "IT" },
  { name: "Elnara", salary: 80000, department: "HR" },
  { name: "Davud", salary: 70000, department: "IT" },
];

// // --------- Ortalama maaşı 65000-dən çox olan departamentləri çapa verən program tərtib edin.

// for (let i = 0; i < employees.length; i++) {
//   if (employees[i].salary > 65000) {
//     console.log(employees[i]);
//   }
// }

//----------Task-5

//-------------Ortalama maaşı 65000-dən çox olan və departamenti "IT" olanları çapa verən program tərtib edin.

// for (let i = 0; i < employees.length; i++) {
//   if (employees[i].salary > 65000 && employees[i].department === "IT") {
//     console.log(employees[i]);
//   }
// }

//----------------Task-6

//--------------Sadecə department "HR" olanları yeni array'a yığıb, həmin arrayı console edin

// for (let i = 0; i < employees.length; i++) {
//   if (employees[i].department === "HR") {
//     console.log(employees[i]);
//   }
// }

// const newEmployess= [];
// for (let i = 0; i < employees.length; i++) {
// if(employees[i].department==="HR"){
//   newEmployess.push(employees[i])
// }

// }console.log(newEmployess);

//------------Task-7

//---------- Ölkələrin neçə hərfdən ibarət olduğunu çap edən proqram yazırsınız. Cavab konsolda bu şəkildə olmalıdır:

let countries = [
  "Afghanistan",
  "Albania",
  "Algeria",
  "Andorra",
  "Angola",
  "Austria",
  "Azerbaijan",
  "Bahamas",
  "Bahrain",
  "Brazil",
  "British Virgin Islands",
  "Brunei",
  "Bulgaria",
  "Burkina Faso",
  "Burundi",
  "Estonia",
  "Ethiopia",
  "Falkland Islands",
  "Faroe Islands",
];

for (let i = 0; i < countries.length; i++) {
  console.log(`${countries[i]} - ${countries[i].length}`);

}

//------------------------Task-8---------------------

// -----------------------Baş hərfi ilə son hərfi A olan  ölkələrin adını çap edən proqram yazırsınız


const newCountries = [];
for (let i = 0; i < countries.length; i++) {
  if (
    countries[i].toLocaleLowerCase()[0] === "a" &&
    countries[i].toLocaleUpperCase()[countries[i].length - 1] === "A"
  ) {
    newCountries.push(countries[i]);
  }
}
console.log(newCountries);
