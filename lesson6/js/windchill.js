/* -----------------------------------------------------------
WIND CHILL
--------------------------------------------------------- */
var windspeed = document.getElementById("windspeed").innerHTML;
var speed = Math.pow(windspeed, .16);
var temp = document.getElementById("temp").innerHTML;

var windchill = Math.round(35.74 + (.6215 * temp) - (35.75 * speed) + (.4275 * temp * speed));

if (temp <= 50 && windspeed >= 3) {
    document.getElementById("windchill").innerHTML = windchill + "&#8457;";
} else {
    document.getElementById("windchill").innerHTML = "N/A";
}

document.getElementById("windspeed").innerHTML = windspeed + "MPH";
document.getElementById("temp").innerHTML = temp + "&#8457;";