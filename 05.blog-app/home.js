const BASE_URL = "http://localhost:8000";
const cards = document.querySelector(".cards");
const search = document.querySelector("#search");

let home = null;
let homeCopy = null;

// async () => {
//   const res = await axios(`${BASE_URL}/blogs`);
// };

async function getAllData() {
  const res = await axios(`${BASE_URL}/blogs`);
  //  console.log(res.data);

  home = res.data;
  homeCopy = structuredClone(home);
  drawCards(res.data);
}

getAllData();
function drawCards(arr) {
  cards.innerHTML = "";
  arr.forEach((element) => {
    cards.innerHTML += `
        <div class="card">
        <h2>${element.title}</h2>
        <p>${element.body.slice(0, 100)}... <a href="details.html?id=${
      element.id
    }">Read More</a></p>
        <span>${element.author}</span>
        <div class="button">
          <button class="btn delete-btn"  onclick=deleteData(${
            element.id
          },this)>Delete</button>
          <button class="edit-btn"><a href="newBlog.html?id=${
            element.id
          }">Edit</a></button>
        </div>
      </div>
        `;
  });
}

async function deleteData(id, btn) {
  if (confirm("are u sure to delete?")) {
    await axios.delete(`${BASE_URL}/blogs/${id}`);
    btn.closest("card").remove();
  }
}

search.addEventListener("input", function (e) {
  let filtered = home.filter((item) => {
    return item.title
      .toLocaleLowerCase()
      .includes(e.target.value.toLocaleLowerCase());
  });
  console.log(filtered);
  drawCards(filtered);
});
