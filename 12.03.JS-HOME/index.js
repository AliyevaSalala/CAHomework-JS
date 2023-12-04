const products = [
  {
    id: 1,
    title: "Smartphone",
    description: "A high-end smartphone with the latest features.",
    price: 799.99,
  },
  {
    id: 2,
    title: "Laptop",
    description: "Powerful laptop with a large screen and fast processor.",
    price: 1299.99,
  },
  {
    id: 3,
    title: "Coffee Maker",
    description: "An automatic coffee maker with a built-in grinder.",
    price: 99.99,
  },
  {
    id: 4,
    title: "Headphones",
    description: "Wireless over-ear headphones with noise-cancellation.",
    price: 199.99,
  },
  {
    id: 5,
    title: "Smart TV",
    description: "55-inch 4K Smart TV with streaming apps built-in.",
    price: 699.99,
  },
  {
    id: 6,
    title: "Fitness Tracker",
    description:
      "Track your steps, heart rate, and more with this fitness tracker.",
    price: 49.99,
  },
  {
    id: 7,
    title: "Digital Camera",
    description: "High-resolution digital camera with various lenses.",
    price: 799.99,
  },
  {
    id: 8,
    title: "Wireless Keyboard and Mouse",
    description: "Ergonomic keyboard and mouse combo for your workstation.",
    price: 39.99,
  },
  {
    id: 9,
    title: "Microwave Oven",
    description: "Compact microwave oven for quick and easy cooking.",
    price: 69.99,
  },
  {
    id: 10,
    title: "Bluetooth Speaker",
    description: "Portable Bluetooth speaker with rich, clear sound.",
    price: 49.99,
  },
  {
    id: 11,
    title: "Coffee Table",
    description: "Modern coffee table with storage and a glass top.",
    price: 149.99,
  },
];

let boxes = document.querySelector(".boxes");
// console.log(boxes);

let favorite = getProductsToLocalSotarge() ?? [];
function drawBoxes(data) {
  boxes.innerHTML = "";
  data.forEach((element) => {
    let divElem = document.createElement("div");
    divElem.className = "box";
    divElem.innerHTML = `
    <div class="box-icon">
    <h4>${element.title}</h4>
    <a href="#" onclick=addToFav(${element.id})> <i class="fa-regular fa-heart"></i></a>
  </div>
  <p>${element.price}</p>
  <p>
   ${element.description}
  </p>
    `;
    boxes.append(divElem);
  });
}

drawBoxes(products);

function addToFav(id) {
  // console.log(id);

  let product = products.find((item) => {
    return item.id == id;
  });

  let index = favorite?.findIndex((item) => {
    return item.product.id == id;
  });
  if (index > -1) {
    favorite[index].count = favorite[index].count + 1;
    console.log(favorite[index]);
  } else {
    favorite.push({ count: 1, product: product });
  }

  setProductsToLocalSotarge(favorite);
}

function setProductsToLocalSotarge(arr) {
  localStorage.setItem("boxesALL", JSON.stringify(arr));
}
function getProductsToLocalSotarge() {
  return JSON.parse(localStorage.getItem("boxesALL"));
}
