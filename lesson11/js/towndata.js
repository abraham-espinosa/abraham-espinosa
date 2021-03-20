const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';
fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject); 
    const towns = jsonObject['towns'];
    for (let i = 0; i < towns.length; i++) {
      if (towns[i].name == 'Fish Haven' || towns[i].name == 'Preston' || towns[i].name == 'Soda Springs') {
        let card = document.createElement('section');
        let h2 = document.createElement('h2');
        let motto = document.createElement('h3');
        let yearFounded = document.createElement('p');
        let currentPopulation = document.createElement('p');
        let averageRainfall = document.createElement('p');
        let img = document.createElement('img');
        let div = document.createElement('div');

        h2.textContent = towns[i].name;
        motto.innerHTML = towns[i].motto;
        yearFounded.innerHTML = 'Year Founded: ' + towns[i].yearFounded;
        currentPopulation.innerHTML = 'Population: ' + towns[i].currentPopulation;
        averageRainfall.innerHTML = 'Annual Rain Fall: ' + towns[i].averageRainfall;

        if (towns[i].name == 'Fish Haven') {
          img.setAttribute('src', 'images/fish-medium.jpg');
          img.setAttribute('alt', towns[1].name + ' landscape ');
        } else if (towns[i].name == 'Preston') {
          img.setAttribute('src', 'images/preston-medium.jpg');
          img.setAttribute('alt', towns[1].name + ' landscape ');
        } else if (towns[i].name == 'Soda Springs') {
          img.setAttribute('src', 'images/soda-medium.jpg');
          img.setAttribute('alt', towns[1].name + ' landscape ');
        }
         
        card.appendChild(img);
        div.appendChild(h2);
        div.appendChild(motto);
        div.appendChild(yearFounded);
        div.appendChild(currentPopulation);
        div.appendChild(averageRainfall);
        card.appendChild(div);

        document.querySelector('div.cards').appendChild(card);
      }
    }

  });

