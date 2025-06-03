import { changeInfo } from "./infoOfWeather.js";
let getLocation = document.getElementById("getLocation");
let degree = document.querySelector("#degree");
let getTheLocation = document.querySelector("#getTheLocation");
let celcius = "celcius";
let fahrenheit = "fahrenheit";

getLocation.addEventListener("click", () => {
  if (degree.textContent === celcius) {
    getData("c");
  } else if (degree.textContent === fahrenheit) {
    getData("f");
  }
});

getTheLocation.addEventListener("click", (e) => {
  datafromLongitude();
});

degree.addEventListener("click", (e) => {
  if (degree.textContent === celcius) {
    degree.textContent = "fahrenheit";
    getData("f");
  } else if (degree.textContent === fahrenheit) {
    degree.textContent = "celcius";
    getData("c");
  }
});
async function getData(drg) {
  let location = document.getElementById("location").value;
  let url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?unitGroup=us&key=HF9YTHVFRDDSUMPKNZK3M648F&contentType=json`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`There was an Error ${response.status}`);
    }
    const responseInJson = await response.json();

    changeInfo(responseInJson, drg);
  } catch (error) {
    console.error("There was an Error: " + error.message);
  }
}

function getPosition() {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
}

async function datafromLongitude() {
  let position = await getPosition();
  let lat = position.coords.latitude;
  let long = position.coords.longitude;
  let url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${lat},${long}?unitGroup=us&key=HF9YTHVFRDDSUMPKNZK3M648F&contentType=json`;

  try {
    const response = await fetch(url);
    const responsInJson = await response.json();

    console.log("Data success ", responsInJson);
    changeInfo(responsInJson, "c");
  } catch (err) {
    console.error("There was Error in Latitude and Longitude ", err);
  }
}
export { getData };
