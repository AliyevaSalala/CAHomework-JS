let openShopping = document.querySelector(".shopping");
let closeShopping = document.querySelector(".closehopping");
let list = document.querySelector(".list");
let listCard = document.querySelector(".listCard");
let total = document.querySelector(".total");
let body = document.querySelector("body");
let quantify = document.querySelector(".quantify");

openShopping.addEventListener("click", () => {
  body.classList.add("item");
});

closeShopping.addEventListener("click", () => {
  body.classList.remove("active");
});

let products = [
  {
    id: 1,
    name: "PRODUCTS",
    price: 20000,
    thumbnail:
      "https://deery.com.tr/21709-thickbox_default/hakiki-suet-vizon-rengi-loafer-kadin-ayakkabi-01903zvznp01.jpg",
  },
  {
    id: 1,
    name: "PRODUCTS",
    price: 20000,
    thumbnail: "https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-x.jpg",
  },
  {
    id: 1,
    name: "PRODUCTS",
    price: 20000,
    thumbnail: "https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-x.jpg",
  },
  {
    id: 1,
    name: "PRODUCTS",
    price: 20000,
    thumbnail: "https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-x.jpg",
  },
  {
    id: 1,
    name: "PRODUCTS",
    price: 20000,
    thumbnail: "https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-x.jpg",
  },
];

let listCards = [];
let initApp = () => {
  products.forEach((value, key) => {
    let newDiv = document.createElement("div");
    newDiv.classList.add("item");
    newDiv.innerHTML = `
        <img src="img/${value.thumbnail}">
       <div class "title" > ${value.image}</div>
       <div class="price"> ${value.price}</div>
       <button onclikc="addToCard($(key))">Add to Card</button>  `;

    list.appendChild(newDiv);
  });
};
initApp();

const addToCard = (key) => {
  if (listCards[key] == null) {
    listCards[key] = JSON.parse(JSON.stringify(products[key]));
    listCards[key].quantify = 1;
  }
  reloadCard();
};
const reloadCard = () => {
  listCard.innerHTML = "";
  let count = 0;
  let totalPrice = 0;
  listCards.forEach((value, key) => {
    totalPrice = totalPrice + value.price;
    count = count + value.quantify;

    if (value != null) {
      let newDiv = document.createElement("li");
      newDiv.innerHTML = `
         <div> <img src="img/${value.thumbnail}"</div>
         <div class=cardTitle>${value.name}</div>
         <div class="cardPrice">${value.price}</div>
         
         <div>
         <button style="background-color:#000 class="cardButton" onclick="changeQuantify(${key}.${
        value.quantify - 1
      })"
      }"
         ></button>
         <button style="background-color:#000 class="cardButton" onclick="changeQuantify(${key}.${
        value.quantify + 1
      }"
         ></button>
         </div>`;
      listCard.appendChild(newDiv);
    }
    total.innerText = totalPrice.toLocaleString();
    quantify.innerText = count;
  });
};
