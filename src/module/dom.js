let infoOfWeather = document.querySelector("#infoOfWeather");
let degree = document.querySelector("#degree");

export function domOfInfo(selector, temp, feelslike, icon) {


    let sel = document.querySelector(`${selector}`);
    if (sel) {

     
            sel.innerHTML = `
            <h1>${temp} degree </h1>`
            ;

       
    }
}


