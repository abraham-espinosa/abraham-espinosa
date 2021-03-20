
const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';
fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject); 
    const towns = jsonObject['towns'];
    const nameCity = document.getElementById("idAPI").textContent;
    for (let i = 0; i < towns.length; i++) {
        let card = document.createElement('section');
      if (towns[i].name == nameCity) {
        let h2 = document.createElement('h2');
        h2.innerHTML = 'Future events';
        card.appendChild(h2);
        towns[i].events.forEach(element => {
          let dateEvent = document.createElement('p');
          dateEvent.innerHTML = element;
          card.appendChild(dateEvent);
        });
      }              
      document.querySelector('div.events').appendChild(card);
    }
  });