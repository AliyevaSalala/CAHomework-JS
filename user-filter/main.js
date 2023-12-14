const BASE_URL = "https://randomuser.me/api/?results=100";

const cardBottom = document.querySelector(".card-bottom");
const search = document.querySelector("#search");

async function getAllData() {
  const res = await axios(`${BASE_URL}`);
  console.log(res.data);
  drawCard(res.data.results);
}
getAllData();

function drawCard(arr) {
  arr.forEach((element) => {
    cardBottom.innerHTML += `
   <img src="${element.picture.thumbnail}" alt="" />
      <p>${element.name.first} ${element.name.last}</p>
      <p>${element.location.city} ${element.location.country}</p>
    `;
  });
}

search.addEventListener("input", async function (e) {
  const res = await axios(`${BASE_URL}`);
  let filtered = res.data.results.filter((item) => {
    return item.name.first
      .toLocaleLowerCase()
      .includes(e.target.value.toLocaleLowerCase());
  });
  drawCard(filtered);
});
