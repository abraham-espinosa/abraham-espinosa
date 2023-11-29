fetch('js/skills.json')
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject); 
    const skills = jsonObject['skills'];
    for (let i = 0; i < skills.length; i++) {
        let card = document.createElement('section');

        let title = document.createElement('p');
        let urlSvg = document.createElement('img');
        let div = document.createElement('div');

        if (skills[i].category == 'Proficiency'){
            title.innerHTML = skills[i].title;
            urlSvg.src = skills[i].urlSvg;
            urlSvg.alt = skills[i].title + '-logo'; 
            div.appendChild(urlSvg);
            div.appendChild(title);
            
            card.appendChild(div);
    
            document.querySelector('div.cards-proficiency').appendChild(card);      
            }else{
            title.innerHTML = skills[i].title;
            urlSvg.src = skills[i].urlSvg;
            urlSvg.alt = skills[i].title + '-logo';
            div.appendChild(urlSvg);
            div.appendChild(title);
            
            card.appendChild(div);
    
            document.querySelector('div.cards-familiar').appendChild(card);
            }
    }

  });