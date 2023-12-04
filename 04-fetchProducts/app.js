//-----------API supp

// const BASE_URL = "https://northwind.vercel.app/api";

// function getAllData() {
//   fetch(`${BASE_URL}/suppliers`)
//     .then((res) => res.json())
//     .then((data) => console.log(data))
//     .catch((err) => console.log(err));
// }
// getAllData();

// function addNewData(endpoint, obj) {
//   fetch(`${BASE_URL}/${endpoint}`, {
//     method: "POST",
//     headers: {
//       "Content-type": "application/json",
//     },
//     body: JSON.stringify(obj),
//   });
// }

// let obj = {
//   companyName: "Sharifa",
//   contactName: "Aliyevaa",
//   address: {
//     city: "Ganja",
//     country: "AZerbaycan",
//     phone: "055665656",
//   },
// };
// addNewData("suppliers", obj);

// --------------------------------------HOMEWORK

const BASE_URL = "https://api.escuelajs.co/api/v1";

let form = document.querySelector("form");
let productsDiv = document.querySelector(".products-div");

let inputs = document.querySelectorAll("input");

function getAllData(endpoint) {
  fetch(`${BASE_URL}/${endpoint}`)
    .then((res) => res.json())
    .then((data) => drawCards(data))
    .catch((err) => {
      console.log(err);
    });
}
getAllData("products");

function drawCards(arr) {
  productsDiv.innerHTML = "";
  arr.forEach((element) => {
    productsDiv.innerHTML += `
    <div class="product">
          <div class="product-image">
            <img src="${element.images}" style="width: 100%" alt="" />
          </div>
          <div class="product-heading">
            <p class="title">${element.title}</p>
            <p class="description">${element.description}</p>
            <span>${element.price}</span>
            <div><button class="deleteBtn" onclick=deleteProduct(${element.id})>Delete</button></div>
          </div>
        </div>
    `;
  });
}

form.addEventListener("submit", function (e) {
  e.preventDefault();
  let obj = {
    title: inputs[0].value,
    price: inputs[1].value,
    description: inputs[2].value,
    images: [inputs[3].value],
    category: 1,
  };
  console.log(obj);

  fetch(`${BASE_URL}/products`, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(obj),
  }).then(() => {
    fetch(`${BASE_URL}/products`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        drawCards(data);
      })
      .catch((err) => console.log(err));
  });

  inputs.forEach((item) => (item.value = ""));
});

function deleteProduct(productId, deleteBtn) {
  fetch(`${BASE_URL}/products/${productId}`, {
    method: "DELETE",
  });
    console.log(deleteBtn);
  //   deleteBtn.closest(".productsDiv").remove();
}
