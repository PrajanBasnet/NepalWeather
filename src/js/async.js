let getLocation = document.getElementById("getLocation");

getLocation.addEventListener("click",()=>{
    getData()
})

async function getData() {
    let url = "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/pokhara?unitGroup=us&key=HF9YTHVFRDDSUMPKNZK3M648F&contentType=json";
    
    try {
        const response = await fetch(url);
        if(!response.ok){
            throw new Error(`There was an Error ${response.status}`)
        }
        const responseInJson = await response.json();
        console.log(responseInJson)
    }catch(error){
        console.error("There was an Error: " + error.message);
    }
}

export { getData }