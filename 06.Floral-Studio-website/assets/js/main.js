// $(document).ready(function () {
//   $(".owl-carousel").owlCarousel();
// });

// $(".owl-carousel").owlCarousel({
//   loop: true,
//   margin: 10,
//   nav: true,
//   responsive: {
//     0: {
//       items: 1,
//     },
//     600: {
//       items: 3,
//     },
//     1000: {
//       items: 5,
//     },
//   },
// });

const menuIcon = document.querySelector("#menu");
const nav = document.querySelector(".nav");
const products = document.querySelector(".products");
const search = document.querySelector("#search");
const sortBtn = document.querySelector(".sort-btn");

const BASE_URL = "http://localhost:8080/products";

let arr = [];
let productCopy = [];

async function getAllData() {
  const res = await axios(`${BASE_URL}`);
  // console.log(res.data);
  arr = res.data;
  productCopy = structuredClone(arr);
  drawCards(res.data);
}

getAllData();

menuIcon.addEventListener("click", function () {
  nav.classList.toggle("show");
  this.classList.contains("fa-bars")
    ? (this.classList = "fa-solid fa-xmark")
    : (this.classList = "fa-solid fa-bars");
});

function drawCards(data) {
  products.innerHTML = "";
  data.forEach((element) => {
    const divElement = document.createElement("div");
    divElement.className = "products-card";
    const imgEelement = document.createElement("img");
    imgEelement.src = element.image;
    const productsTitleEelement = document.createElement("h3");
    productsTitleEelement.textContent = element.title;
    const productsPriceElement = document.createElement("p");
    productsPriceElement.textContent = element.price;

    divElement.append(imgEelement, productsTitleEelement, productsPriceElement);

    products.append(divElement);
  });
}

search.addEventListener("input", async function (e) {
  const res = await axios(`${BASE_URL}`);
  let filtered = res.data.filter((item) => {
    return item.title
      .toLocaleLowerCase()
      .includes(e.target.value.toLocaleLowerCase());
  });
  drawCards(filtered);
});

sortBtn.addEventListener("click", function () {
  let sorted;
  if (sortBtn.innerText === "Ascending") {
    sortBtn.innerText = "Descending";
    sorted = productCopy.sort((a, b) => a.price - b.price);
  } else if (sortBtn.innerText === "Descending") {
    sortBtn.innerText = "Deafult";
    sorted = productCopy.sort((a, b) => b.price - a.price);
  } else {
    sortBtn.innerText = "Ascending";
    sorted = arr;
  }
  drawCards(sorted);
});
