let id = new URLSearchParams(window.location.search).get("id");
const details = document.querySelector(".details");
let DeatilsBtn = document.querySelector(".details-btn");

const BASE_URL = "http://localhost:8000";

async function detailsData() {
  try {
    const res = await axios(`${BASE_URL}/blogs/${id}`);
    console.log(res.data);

    details.innerHTML += `
    <h2>${res.data.title}</h2>
    <p>${res.data.body}</p>
    <p>${res.data.author}</p>
    <button><a href="#" onclick=goBack()>GO BACK</a></button>
   
    `;
  } catch (error) {
    console.log(error);
  }
}

detailsData();

function goBack() {
  window.history.back();
}
