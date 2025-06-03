import rain from "../asset/img/rain.svg";
import bg from "../asset/img/cloudy.svg";
import spring from "../asset/img/spring.avif";
import sunny from "../asset/img/sunny.avif";
let imgsec = document.querySelector("#imgsec");

function iconForWeather(ig, statusOfWeather) {
    imgsec.innerHTML  = ""
    let img = document.createElement("img");
    img.src = statusOfWeather;
    img.classList = "weatherIcon"
    img.alt = "Did not Show the image";
    imgsec.append(img);
}

export function domOfInfo(selector, winInfo, temp) {
  let sel = document.querySelector(`${selector}`);

  if (sel) {
    if (winInfo.icon == "rain") {
        console.log(winInfo.icon)
      iconForWeather(imgsec, rain);
    } else if (winInfo.icon == "Partially cloudy") {
      iconForWeather(imgsec, cloudy);
    } else if(winInfo.icon == "cloudy") {
      iconForWeather(imgsec, sunny);
    }else {
      iconForWeather(imgsec, bg);

    }

    sel.innerHTML = ` <b>Tempreature: </b> ${temp}<br>
                           <b>WindSpeed:</b> ${winInfo.windSpeed} <br>
                           <b>FeelsLike: </b> ${winInfo.feelsLike}<br>
                           <b>Description: </b><br> ${winInfo.description}
                           `;
  }
}
export function tom(selector, data, temp) {
  let sel = document.querySelector(`${selector}`);
  if (sel) {
    sel.innerHTML = "";
    for (let i = 0; i < 4; i++) {
      let p = document.createElement("div");
      p.classList = "upComming";
      p.innerHTML = ` <b>Tempreature: </b> ${temp}<br>
            <b>WindSpeed:</b> ${data.days[i].windspeed} <br>
            <b>FeelsLike: </b> ${data.days[i].feelslike}<br>
            <b>Description: </b><br> ${data.days[i].description}
            `;
      sel.appendChild(p);
    }
  }
}
