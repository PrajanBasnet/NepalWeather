import { domOfInfo } from "./dom.js";

let degree = document.querySelector("#degree");
let infoOfWeather = document.querySelector("#infoOfWeather");

export function changeInfo(data,derg){
    let temp = parseInt(data.days[0].temp)
    let cTemp =  ` ${(temp - 30 )/  2}  C` 
    let icon = data.days[0].icon
    let feelslike = parseInt(data.days[0].feelslike)

    let windspeed = parseInt(data.days[0].windspeed);
    console.log(data)
    
    if(derg === "f"){
        domOfInfo("#temp",temp + " F",feelslike,icon)

    }else if(derg === "c"){
        domOfInfo("#temp",cTemp,feelslike,icon)
    }
}


