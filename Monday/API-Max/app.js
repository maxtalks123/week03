// console.log("hello, world");
// // const gazeValue = document.createElement("div");

// async function getMyStuffFromOverThere() {
//   const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
//   console.log("HTTP Response:", response);
//   const json = await response.json();
//   console.log("JSON Data:", json);
// }
// getMyStuffFromOverThere();

// fetch("https://jsonplaceholder.typicode.com/todos/1")
//   .then(function (response) {
//     console.log("HTTP Response:", response);
//     return response.json();
//   })
//   .then(function (json) {
//     console.log("JSON Data:", json);
//   });

// const stargazecount = data.stargazers_count

async function getGithubRepo() {
  const response = await fetch(
    "https://api.github.com/repos/maxtalks123/week03"
  );
  console.log("Http response:", response);
  let data = await response.json();
  console.log(data);

  let gazeCount = document.createElement("div");
  stargazecount.appendChild(gazeCount);
  gazeCount.textContent = data.stargazers_count;
}

getGithubRepo();
//show multiple images on api demo
//put images in flexbox
//make sure to clear dom after searching for something new
