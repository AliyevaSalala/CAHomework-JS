let products = document.querySelector(".products");
let customerBtn = document.querySelector(".customer-btn");
let allInputs = document.querySelector(".form-control");
let form = document.querySelector("form");

const BASE_URL = `https://northwind.vercel.app/api`;

fetch(`${BASE_URL}/customers`)
  .then((res) => res.json())
  .then((data) => drawCards(data))
  .catch((err) => console.log(err));

function drawCards(arr) {
  products.innerHTML = "";
  arr.forEach((element) => {
    products.innerHTML += `
        <div class="col-12 col-md-6 col-lg-3 mb-4">
        <div class="card" style="width: 18rem">
          <div class="card-body">
            <h5 class="card-title">Company Name: <em> ${element.companyName}</em></h5>
            <p class="card-text title">
              ${element.contactTitle}
            </p>
            <p class="card-text"> ${element.address?.city}, ${element.address?.county}</p>
            <button class="btn btn-danger" onclick=deleteCustomer("${element.id}",this)>Delete</button>
          </div>
        </div>
      </div>
        `;
  });
}





  