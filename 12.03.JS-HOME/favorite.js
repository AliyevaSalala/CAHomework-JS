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
       <i class="fa-solid fa-heart" onclick=addToRemove(${element.product.id},this) ></i>
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
  return JSON.parse(localStorage.getItem("boxesALL"));
}

function addToRemove(id, i) {
  favorite = favorite.filter((item) => item.product.id !== id);
  setProductsToLocalSotarge(favorite);
  i.parentElement.parentElement.remove();
  console.log(i);
}
