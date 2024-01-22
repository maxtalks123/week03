const form = document.querySelector("form");
const imgContainer = document.querySelector("imgcontainer");

let images = [];
let currentImgIndex = 0;

form.addEventListener("submit", (event) => {
  event.preventDefault();
  let searchQuery = event.target.input.value;
  search("searchQuery");
  console.log(searchQuery);
});
