import { domOfInfo, tom } from "./dom.js";

export function changeInfo(data, derg) {
  let winInfo = {
    name: data.resolvedAddress,
    tempInF: `${parseInt(data.days[0].temp)} Degree F `,
    tempInC: ` ${parseInt((data.days[0].temp - 30) / 2)}  Degree C`,
    feelsLike: parseInt(data.days[0].feelslike),
    windSpeed: parseInt(data.days[0].windspeed),
    icon: data.days[0].icon,
    description: data.days[0].description,
  };

  if (derg === "f") {
    domOfInfo("#temp", winInfo, winInfo.tempInF);
    tom("#tomorow", data, winInfo.tempInF);
  } else if (derg === "c") {
    domOfInfo("#temp", winInfo, winInfo.tempInC);
    tom("#tomorow", data, winInfo.tempInC);
  }
}
