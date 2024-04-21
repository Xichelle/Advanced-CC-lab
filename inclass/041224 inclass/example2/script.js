const api_key="bd1493de68d3281b2f252b2b8b1027d6"

const apiUrlBase="https://api.openweathermap.org/data/2.5/weather?q="

let city;
let btn = document.querySelector("button")
btn.addEventListener('click',()=>{
    let form = document.getElementById("form");
    city = form.elements[0].value;
    let cityEncoded = encodeURI(city)
    fetchWeatherData(cityEncoded);
    
})

async function fetchWeatherData(city){
    let apiUrl=`${apiUrlBase}${city}&appid=${api_key}&units=metric`
    console.log(apiUrl)

    try{
        const response=await fetch(apiUrl);
        if(!response.ok){
            throw new Error(`HTTP error. Status:${response.status}`)
        }
        const data = await response.json();
        console.log(data);
        displayWeatherData(data);
    }
    catch(error){

    }
}

function displayWeatherData(data){
    const temp= data.main.temp;
    if(temp <= 60){
        emoji = "❄️"
    }else{
        emoji ="☀️"
    }

    document.getElementById("result").innerHTML=`The temperture in ${city} is ${temp}°C ${emoji}`
}

const choice= document.getElementById("choice");
choice.addEventListener('keypress',event => {
    if(event.key==="Enter"){
        event.preventDefault();
        btn.click();
    }
})