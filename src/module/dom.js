import rain from '../asset/img/rain.avif'
import bg from '../asset/img/bg.avif'
import spring from '../asset/img/spring.avif'
import sunny from '../asset/img/sunny.avif'

function myImg(l,sel){

    const img = document.createElement('img');
    img.src = l;
    img.alt = 'Description of the image';
    img.classList = "myIcon"
    img.width = 100;
    img.height = 100;
    sel.appendChild(img)

}

export function domOfInfo(selector, temp, feelslike, name , icon ,w) {
    console.log(w.name)
    let sel = document.querySelector(`${selector}`);
    if (sel) {
        sel.innerHTML = `
        <div class="top">${name} </div><br>
        <h1>${temp}   </h1> `;
        if(icon==="rain"){
            myImg(rain ,sel)
        }else if(icon === "partly-cloudy-day"){
            myImg(sunny,sel)
    
        }else if(icon === "sunny"){
            myImg(spring,sel)

        }else if(icon === "winter"){
            myImg(bg,sel)
        }
        else{
            console.log(icon)
        }

    }
}
export function tom(selector,data){
    let sel = document.querySelector(`${selector}`);
    if(sel){
         sel.innerHTML = `
            <div class="top">Tommorow Weather ${data.days[1].feelslike} </div><br>
            <h1>${data.days[1].temp} </h1>
            ;
         `
    }
}