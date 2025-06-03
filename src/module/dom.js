import rain from "../asset/img/rain.avif";
import bg from "../asset/img/bg.avif";
import spring from "../asset/img/spring.avif";
import sunny from "../asset/img/sunny.avif";

function iconForWeather() {

}


export function domOfInfo(selector, winInfo, temp) {
    let sel = document.querySelector(`${selector}`);
    if (sel) {
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
            p.classList = "upComming"
            p.innerHTML = ` <b>Tempreature: </b> ${temp}<br>
            <b>WindSpeed:</b> ${data.days[i].windspeed} <br>
            <b>FeelsLike: </b> ${data.days[i].feelslike}<br>
            <b>Description: </b><br> ${data.days[i].description}
            `;
            sel.appendChild(p);
                }
    }
}
