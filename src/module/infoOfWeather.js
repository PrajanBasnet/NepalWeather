import { domOfInfo, tom } from "./dom.js";
export function changeInfo(data,derg){
    let temp = parseInt(data.days[0].temp)
    let cTemp =  ` ${(temp - 30 )/  2}  Degree C` 
    let icon = data.days[0].icon
    let feelslike = parseInt(data.days[0].feelslike)
    let name = data.resolvedAddress;
    let windspeed = parseInt(data.days[0].windspeed);

    let winInfo = {
        name: data.resolvedAddress,
        tempInF: parseInt(data.days[0].temp),
        tempInC:` ${(temp - 30 )/  2}  Degree C` ,
        feelslike : parseInt(data.days[0].feelslike),
        windspeed : parseInt(data.days[0].windspeed),
        icon : data.days[0].icon,
    }
    
    if(derg === "f"){
        domOfInfo("#temp",temp + " Degree F",feelslike, name, icon ,winInfo)
        tom("#tomorow",data)
    }else if(derg === "c"){
        domOfInfo("#temp",cTemp,feelslike,name,icon)
        tom("#tomorow",data)

    }
}


