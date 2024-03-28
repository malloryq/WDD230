
    // Your JavaScript code here
    const baseURL = "https://malloryq.github.io/wdd230/chamber/directory.html";
    const membersURL = 'https://malloryq.github.io/wdd230/chamber/data/members.json';

    const membersContainer = document.getElementById("members-container");
    const gridViewButton = document.getElementById("grid-view");
    const listViewButton = document.getElementById("list-view");

    async function getMembersData() {
        try {
            const response = await fetch(membersURL);
            const data = await response.json();
            return data;
        } catch (error) {
            console.error('Error fetching member data:', error);
        }
    }

    function displayMembers(members) {
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
    /*
    document.getElementById("grid-view").addEventListener("click", function() {
        console.log("Grid view button clicked");
        // Add toggling logic here
    });
    
    document.getElementById("list-view").addEventListener("click", function() {
        console.log("List view button clicked");
        // Add toggling logic here
    });
    */



    // Toggle between grid and list views
    gridViewButton.addEventListener("click", function() {
        console.log("Grid view button clicked");
        membersContainer.classList.remove("list-view");
        membersContainer.classList.add("grid-view");
    });
    
    listViewButton.addEventListener("click", function() {
       
        membersContainer.classList.remove("grid-view");
        membersContainer.classList.add("list-view");
    });


    // Load members data and display
    getMembersData()
    .then(data => {
        displayMembers(data);
    })
    .catch(error => {
        console.error("Error fetching or displaying members:", error);
    });

