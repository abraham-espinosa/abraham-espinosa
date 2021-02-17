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