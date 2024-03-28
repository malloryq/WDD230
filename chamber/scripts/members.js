const url = 'https://malloryq.github.io/wdd230/chamber/data/members.json';
const membersContainer = document.querySelector('article.grid');
const menu = document.querySelector('.menu');

async function getMembersData() {
    try {
        const response = await fetch(url);
        const data = await response.json();
        displayMembers(data);
    } catch (error) {
        console.error('Error fetching member data:', error);
    }
}

function displayMembers(members) {

    const container = document.getElementById("members-container");

    membersContainer.innerHTML = ''; // Clear previous content
    members.forEach(member => {
        const memberCard = document.createElement('div');
        memberCard.classList.add('member-card');
        
        const name = document.createElement('h2');
        name.textContent = member.name;
        
        const address = document.createElement('p');
        address.textContent = `Address: ${member.address}`;
        
        const phone = document.createElement('p');
        phone.textContent = `Phone: ${member.phone}`;
        
        const website = document.createElement('p');
        website.innerHTML = `Website: <a href="${member.website}">${member.website}</a>`;
        
        const membershipLevel = document.createElement('p');
        membershipLevel.textContent = `Membership Level: ${member.membershipLevel}`;
        
        // Add more fields as needed
        
        memberCard.appendChild(name);
        memberCard.appendChild(address);
        memberCard.appendChild(phone);
        memberCard.appendChild(website);
        memberCard.appendChild(membershipLevel);
        
        membersContainer.appendChild(memberCard);
    });
}

// Toggle view between grid and list
menu.addEventListener('click', function(event) {
    if (event.target.tagName === 'BUTTON') {
        const view = event.target.id;
        if (view === 'grid') {
            membersContainer.classList.add('grid');
            membersContainer.classList.remove('list');
        } else if (view === 'list') {
            membersContainer.classList.add('list');
            membersContainer.classList.remove('grid');
        }
    }
});

// Load members data
getMembersData();
