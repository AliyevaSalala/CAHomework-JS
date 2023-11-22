let number = document.querySelector(".number");
let inputOne = document.querySelector("#input-one");
let inputTwo = document.querySelector("#input-two");
let additionBtn = document.querySelector(".addition");
let substractBtn = document.querySelector(".substract");
let multiplyBtn = document.querySelector(".multiply");
let divisionBtn = document.querySelector(".division");
let resetBtn = document.querySelector(".reset");

number.style.background = "black";
number.style.color = "white";
number.style.padding = "15px 30px";
number.style.border = "none";
number.style.borderRadius = "5px";
number.style.width = "20%";

inputOne.style.padding="10px"
inputTwo.style.padding="10px"
additionBtn.style.padding = "10px";
additionBtn.style.width = "23%";
substractBtn.style.width = "23%";
substractBtn.style.padding = "10px";
multiplyBtn.style.width = "23%";
multiplyBtn.style.padding = "10px";
divisionBtn.style.width = "23%";
divisionBtn.style.padding = "10px";
resetBtn.style.width = "23%";
resetBtn.style.padding = "10px";

resetBtn.style.background = "red";

let count = 0;
let countInterval;
additionBtn.addEventListener("click", function () {
  count += +inputOne.value + +inputTwo.value;
  number.innerText = count;
});

substractBtn.addEventListener("click", function () {
  count += +inputOne.value - +inputTwo.value;
  number.innerText = count;
});
multiplyBtn.addEventListener("click", function () {
  count += +inputOne.value * +inputTwo.value;
  number.innerText = count;
});
divisionBtn.addEventListener("click", function () {
  count += +inputOne.value / +inputTwo.value;
  number.innerText = count;
});

resetBtn.addEventListener("click", function () {
  count = 0;
  number.innerText = 0;
  clearInterval(countInterval);
});
