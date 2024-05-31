const api = {
    endpoint: "https://api.openweathermap.org/data/2.5/",
    key: "216b014c467cec3df8df469798626982"
}
const input = document.querySelector("#input");
input.addEventListener("keypress", enter);

function enter(e) {
    if (e.keyCode === 13) {
        getInfo(input.value);
    }
}

async function getInfo(data) {
    const res = await fetch(`${api.endpoint}weather?q=${data}&units=metric&appID=${api.key}`);
    const resReceived = await res.json();
    console.log(resReceived);
    displayResult(resReceived);
}

function displayResult(resReceived) {
    let city = document.querySelector("#city");
    city.textContent = `${resReceived.name}, ${resReceived.sys.country}`;
    city.style. display = "block";
    getOurDate();

    let temperature = document.querySelector("#temperature");
    temperature.innerHTML = `${Math.round(resReceived.main.temp)}<span>°</span>`
    temperature.style. display = "block";

    let feelsLike = document.querySelector("#feelsLike");
    feelsLike.innerHTML = `${Math.round(resReceived.main.feels_like)}<span>°</span>`
    feelsLike.style. display = "block";

    let condition = document.querySelector("#condition");
    condition.textContent = `${resReceived.weather[0].description}`
    condition.style. display = "block";

    let varation = document.querySelector("#varation");
    varation.innerHTML = "Min: " + `${Math.round(resReceived.main.temp_min)}<span>°</span>` + " " + "Max: " + `${Math.round(resReceived.main.temp_max)}<span>°</span>`
    varation.style. display = "block";
}

function getOurDate() {
    const myDate = new Date();
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    
    let day = days[myDate.getDay()];
    let todayDate = myDate.getDate();
    let month = months[myDate.getMonth()];
    let year = myDate.getFullYear();

    let showDate = document.querySelector("#date");
    showDate.textContent = `${day}` + " " + `${todayDate}` + " " + `${month}` + " " + `${year}`;
    showDate.style. display = "block";
}