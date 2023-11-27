document.getElementById('year').innerHTML = new Date().getFullYear();
document.getElementById('last-update').innerHTML = "Last Updated: " + document.lastModified;


// FETCH THE DATA FROM projects.json
fetch('js/projects.json')
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject); 
    const projects = jsonObject['projects'];
    for (let i = 0; i < projects.length; i++) {
        let card = document.createElement('section');
        let title = document.createElement('h3');
        let urlSite = document.createElement('a');
        let description = document.createElement('p');
        let technologies = document.createElement('p');

        let div = document.createElement('div');

        title.textContent = projects[i].title;
        description.innerHTML = projects[i].description;
        technologies.innerHTML = 'Technologies: ' + projects[i].technologies;
        urlSite.innerHTML = projects[i].urlSite;
        urlSite.href = projects[i].urlSite;
        urlSite.target = "_blank";
         
        div.appendChild(title);
        div.appendChild(description);
        div.appendChild(technologies);
        div.appendChild(urlSite);

        card.appendChild(div);

        document.querySelector('div.cards').appendChild(card);
    }

  });

