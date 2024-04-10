const url = 'https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json';
const cards = document.querySelector('#cards');

async function getProphetData() {
  const response = await fetch(url);
  const data = await response.json();
  displayProphets(data.prophets);
}

getProphetData();

const displayProphets = (prophets) => {
  prophets.forEach((prophet) => {
    let card = document.createElement('section');
    let fullName = document.createElement('h2');
    let birthDate = document.createElement('p');
    let deathDate = document.createElement('p');
    let length = document.createElement('p');
    let birthPlace = document.createElement('p');
    let numOfChildren = document.createElement('p');
    let portrait = document.createElement('img');

    fullName.textContent = `${prophet.name} ${prophet.lastname}`;
    birthDate.textContent = `Birthdate: ${prophet.birthdate}`;
    deathDate.textContent = `Death: ${prophet.death || 'Still Alive'}`;
    length.textContent = `Length of Service: ${prophet.length} years`;
    birthPlace.textContent = `Birthplace: ${prophet.birthplace}`;
    numOfChildren.textContent = `Number of Children: ${prophet.numofchildren}`;
    
    portrait.setAttribute('src', prophet.imageurl);
    portrait.setAttribute('alt', `Portrait of ${prophet.name} ${prophet.lastname}`);
    portrait.setAttribute('loading', 'lazy');
    portrait.setAttribute('width', '340');
    portrait.setAttribute('height', '440');

    card.appendChild(fullName);
    card.appendChild(birthDate);
    card.appendChild(deathDate);
    card.appendChild(length);
    card.appendChild(birthPlace);
    card.appendChild(numOfChildren);
    card.appendChild(portrait);

    cards.appendChild(card);
  });
}
