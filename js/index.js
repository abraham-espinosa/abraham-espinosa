document.getElementById('year').innerHTML = new Date().getFullYear();
document.getElementById('last-update').innerHTML = "Last Updated: " + document.lastModified;

// SCROLL TO TOP ----------------------------------------------------------------
// Get element by id
let scrollBtn = document.getElementById("scrollBtn");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
    scrollBtn.style.display = "block";
  } else {
    scrollBtn.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function scrollTopFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}


