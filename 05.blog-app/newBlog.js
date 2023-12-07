const form = document.querySelector("form");
const input = document.querySelector(".input");
const textarea = document.querySelector("textarea");
const option = document.querySelector("select");
let authorName;

const BASE_URL = "http://localhost:8000";

const id = new URLSearchParams(window.location.search).get("id");

// console.log(id);

async function getData() {
  const res = await axios(`${BASE_URL}/blogs/${id}`);
  console.log(res.data);

  input.value = res.data.title;
  textarea.value = res.data.body;
  option.value = res.data.author;
}

if (id) {
  getData();
}




form.addEventListener("submit", function (e) {
  e.preventDefault();
  let newBlogs = {
    title: input.value,
    body: textarea.value,
    author: option.value,
  };
  if (!id) {
    axios.post(`${BASE_URL}/blogs`, newBlogs);
  } else {
    axios.patch(`${BASE_URL}/blogs/${id}`, newBlogs);
  }

  input.forEach((item) => (item.value = ""));
});




option.addEventListener("change", function (e) {
  authorName = e.target.value;
  console.log(authorName);
});


