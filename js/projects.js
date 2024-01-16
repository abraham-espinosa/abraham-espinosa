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
        let description = document.createElement('p');
        let technologies = document.createElement('p');

        let aSite = document.createElement('a');
        let aGithub = document.createElement('a');

        let siteImg = document.createElement('img');
        let githubImg = document.createElement('img');

        let aYoutube = document.createElement('a');
        let youtubeImg = document.createElement('img');

        let div = document.createElement('div');

        title.textContent = projects[i].title;
        description.innerHTML = projects[i].description;
        technologies.innerHTML = projects[i].technologies;

        aSite.href = projects[i].siteUrl;
        aSite.target = "_blank";
        siteImg.src = projects[i].siteImg;
        siteImg.alt = "site-logo"
        aSite.appendChild(siteImg);

        aGithub.href = projects[i].githubUrl;
        aGithub.target = "_blank";
        githubImg.src = projects[i].githubImg;
        githubImg.alt = "site-logo"
        aGithub.appendChild(githubImg);

        aYoutube.href = projects[i].youtubeUrl;
        aYoutube.target = "_blank";
        youtubeImg.src = projects[i].youtubeImg;
        youtubeImg.alt = "youtube-logo"
        aYoutube.appendChild(youtubeImg);

        div.appendChild(title);
        div.appendChild(description);
        div.appendChild(technologies);
        if (projects[i].siteUrl != "") {
          div.appendChild(aSite);
        }
        div.appendChild(aGithub);
        div.appendChild(aYoutube);
        

        card.appendChild(div);

        document.querySelector('div.cards-project').appendChild(card);
    }

  });