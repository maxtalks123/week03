const form = document.querySelector("form");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  let query = event.target.input.value;
  search(query);
});

async function search(queryParam) {
  let response = await fetch(
    `https://api.unsplash.com/search/photos?page=1&query=${queryParam}&client_id=1MVJG3TuQ6ewSSXZEgn6uvIv985P0-hkSsMv5ukEx3w`
  );
  let data = await response.json();
  console.log(data.results[0].urls.raw);

  let img = document.createElement("img");
  img.src = data.results[0].urls.raw;

  imgcontainer.appendChild(img);
}
