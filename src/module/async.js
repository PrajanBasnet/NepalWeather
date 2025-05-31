import { changeInfo } from "./infoOfWeather.js";
let getLocation = document.getElementById("getLocation");
let degree = document.querySelector("#degree");
let celcius = "celcius";
let fahrenheit = "fahrenheit";

getLocation.addEventListener("click", () => {
    if (degree.textContent === celcius) {
        console.log("Celcuis clicked")
    getData("c")
    } else if (degree.textContent === fahrenheit) {
    getData("f")
        console.log("Ferah clicked")
    }
})

degree.addEventListener("click", (e) => {
    if (degree.textContent === celcius) {
        degree.textContent = "fahrenheit";
        getData("f")

    } else if (degree.textContent === fahrenheit) {
        degree.textContent = "celcius";
        getData("c")
    }
})

async function getData(drg) {
    let location = document.getElementById("location").value;
    let url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?unitGroup=us&key=HF9YTHVFRDDSUMPKNZK3M648F&contentType=json`;

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`There was an Error ${response.status}`)
        }
        const responseInJson = await response.json();
        changeInfo(responseInJson, drg)
    } catch (error) {
        console.error("There was an Error: " + error.message);
    }
}

export { getData }