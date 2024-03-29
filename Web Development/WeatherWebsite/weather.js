const cityInput = document.querySelector(".input input");
const searchButton = document.querySelector(".input button");

const API_KEY = "2f5c7f15392692d4214eb9121b7b151a";
const API_URL = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";

async function checkweather(city) {
    const response=await fetch(API_URL+ city+ ` &appid=${API_KEY}`);
    if (response.status == 404) {
        document.querySelector(".error").style.display = "block";
        document.querySelector(".data").style.display = "none";
    }
    else {
        var data = await response.json();
        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = data.main.temp + " °C";
        document.querySelector(".wind").innerHTML = data.wind.speed + " Km/hr";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".Pressure").innerHTML = data.main.pressure + " Pa";
        document.querySelector(".Visibility").innerHTML = data.visibility + " !!";

        document.querySelector(".data").style.display = "block";
        document.querySelector(".error").style.display = "none";
    }
}

searchButton.addEventListener("click", () => {
    checkweather(cityInput.value);
});