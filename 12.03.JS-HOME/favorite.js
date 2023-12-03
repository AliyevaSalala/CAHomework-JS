let boxes = document.querySelector(".boxes");
let favorite = getProductsToLocalSotarge() ?? [];

function drawBoxes(data) {
  boxes.innerHTML = "";
  data.forEach((element) => {
    let divElem = document.createElement("div");
    divElem.className = "box";
    divElem.innerHTML = `
      <div class="box-icon">
      <h4>${element.product.title}</h4>
      <a href="#" onclick=addToFav(${element.product.id})> <i class="fa-regular fa-heart"></i></a>
    </div>
    <p>${element.product.price}</p>
    <p>
     ${element.product.description}
    </p>
      `;
    boxes.append(divElem);
  });
}



drawBoxes(favorite);
function setProductsToLocalSotarge(arr) {
  localStorage.setItem("boxesALL", JSON.stringify(arr));
}

function getProductsToLocalSotarge() {
  return JSON.parse(localStorage.getItem("boxesAll"));
}
