fetch('/finalProject/js/directory.json')
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject); 
    const organizations = jsonObject['organizations'];
    for (let i = 0; i < organizations.length; i++) {
        let card = document.createElement('section');
        let h2 = document.createElement('h2');
        let webSite = document.createElement('h3');
        let yearFounded = document.createElement('p');
        let div = document.createElement('div');

        h2.textContent = organizations[i].name;
        webSite.innerHTML = organizations[i].webSite;
        yearFounded.innerHTML = 'Year Founded: ' + organizations[i].yearFounded;
         
        div.appendChild(h2);
        div.appendChild(webSite);
        div.appendChild(yearFounded);
        card.appendChild(div);

        document.querySelector('div.cards').appendChild(card);
    }

  });

