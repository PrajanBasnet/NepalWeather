let infoOfWeather = document.querySelector("#infoOfWeather");
let degree = document.querySelector("#degree");

export function domOfInfo(selector, temp, feelslike, name , icon) {

    let sel = document.querySelector(`${selector}`);
    if (sel) {
            sel.innerHTML = `
            <div class="top">${name} </div><br>
            <h1>${temp}    </h1>`
            ;

       
    }
}


