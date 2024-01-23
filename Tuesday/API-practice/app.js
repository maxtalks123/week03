//find api that is interesting to me and make a request and display on the screen

const data = ["name", 42];
const footballPredictor = document.getElementById("footyPredictor");

function createUI() {
  data.forEach(function (item) {
    let newDiv = document.createElement("div");
    let myP = document.createElement("p");
    myP.innerText = item.result;
    newDiv.appendChild(myP);
  });
}

const fetchData = async (sort = "fixture") => {
  const url =
    "https://football-prediction-api.p.rapidapi.com/api/v2/predictions?market=classic&iso_date=2024-01-23&federation=UEFA";
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      "X-RapidAPI-Key": "8df1a22961mshe5a265dbd7f3759p10e4acjsnd5af394b4ad0",
      "X-RapidAPI-Host": "football-prediction-api.p.rapidapi.com",
    },
  };
  try {
    const response = await fetch(url, options);
    const result = await response.json();
    console.log(result);
    data.push(result);
    createUI(result);
  } catch (error) {
    console.error(error);
  }
};

fetchData();
console.log(data);
createUI();

// footballPredictor.appendChild("fetchData");

//push each item from fetch data to the array of data
//create foreach loop to create a div and p tags for fixtures and display on page
//create UI function - check cookie clicker SAM example. The function will take an array
//call the createUI function within data function (json). The JSON is the object parameters.
