/* -----------------------------------------------------------
TIME
--------------------------------------------------------- */
var currentDate = new Date();
nameMonth = currentDate.toLocaleString('default', {
    month: 'short'
});
numDay = currentDate.toLocaleString('default', {
    day: 'numeric'
});
nameDay = currentDate.toLocaleString('default', {
    weekday: 'long'
});
numYear = currentDate.getFullYear();
document.getElementById('date').innerHTML = nameDay + ", " + numDay + " " + nameMonth + " " + numYear;


/* -----------------------------------------------------------
HAMBURGUER MENU
--------------------------------------------------------- */
const hambutton = document.querySelector('.ham');

const mainnav = document.querySelector('.navigation')
hambutton.addEventListener('click', () => {
    mainnav.classList.toggle('responsive')
}, false);
// Medium View
window.onresize = () => {   
    if (window.innerWidth > 760) mainnav.classList.remove('responsive')
};


/*-----------------------------------------------------------
BANNER MESSAGE
--------------------------------------------------------- */
dayOfWeek = currentDate.getDay();
if (dayOfWeek != 5) {
    document.getElementById("banner").style.display = "none";
}

/*-----------------------------------------------------------
WATHER API
--------------------------------------------------------- */
var page = document.getElementById("idAPI").textContent;
if ( page == "Preston" || page == "Home") {
    var idAPI = "5604473";
} else if ( page == "Soda Springs" ){
    var idAPI = "5585010";
} else if ( page == "Fish Haven" ){
    var idAPI = "5607916";
}
const forecastAPI = "https://api.openweathermap.org/data/2.5/forecast?id=" + idAPI + "&units=imperial&appid=46a8bd75a625e7e9e10f5de7b8a2ac4d";
fetch(forecastAPI)
    .then(response => response.json())
    .then(jsObject => {
        console.log(jsObject);

        const forecast = jsObject.list.filter(x => x.dt_txt.includes('18:00:00'));

        const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
        for (let day = 0; day < forecast.length; day++) {
            const d = new Date(forecast[day].dt_txt);
            const imagesrc = 'https://openweathermap.org/img/wn/' + forecast[day].weather[0].icon + '@2x.png';
            const desc = forecast[day].weather[0].description;
            document.getElementById(`day${day+1}`).textContent = weekdays[d.getDay()];
            document.getElementById(`temp${day+1}`).textContent = Math.round(forecast[day].main.temp);
            document.getElementById(`img${day+1}`).setAttribute('src', imagesrc);
            document.getElementById(`img${day+1}`).setAttribute('alt', desc);
        }
    });

const weatherAPI = "https://api.openweathermap.org/data/2.5/weather?id=" + idAPI + "&units=imperial&appid=46a8bd75a625e7e9e10f5de7b8a2ac4d";
fetch(weatherAPI)
.then((response) => response.json())
.then((jsObject) => {
    console.log(jsObject);
    let t = parseFloat(jsObject.main.temp);
    let s = parseFloat(jsObject.wind.speed);
    document.getElementById('currently').textContent = jsObject.weather[0].description;
    document.getElementById('temp').textContent =  Math.round(t) + "°F";
    let windchill = "N/A";
    document.getElementById('huminity').textContent = jsObject.main.humidity + "%";
    document.getElementById('windspeed').textContent = jsObject.wind.speed + " mph";
    const imagesrc = 'https://openweathermap.org/img/w/' + jsObject.weather[0].icon + '.png';
    const desc = jsObject.weather[0].description; 
    document.getElementById('icon').setAttribute('src', imagesrc);
    document.getElementById('icon').setAttribute('alt', desc);
    if (t <= 50 && s >= 3) {
        let f = (35.74 + (0.6215 * t)) - (35.75 * (Math.pow(s, 0.16))) + (0.4275 * (t * (Math.pow(s, 0.16))));
        windchill = Math.round(f);
        document.getElementById("windchill").innerHTML = windchill + "°F";
    }else{
        document.getElementById("windchill").innerHTML = windchill;
    };
});