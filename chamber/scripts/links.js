// links.js

// Define baseURL and linksURL
const baseURL = "https://malloryq.github.io/wdd230/";
const linksURL = "https://malloryq.github.io/wdd230/data/links.json";

// Asynchronous function to get the links data from the JSON file
async function getLinks() {
    try {
      const response = await fetch(linksURL);
      const data = await response.json();
      
      return data; // Return the data if needed for further processing
    } catch (error) {
      console.error("Error fetching or parsing JSON data:", error);
    }
  }
  function displayLinks(weeks) {
    // Get the container element where the links will be added
    const container = document.getElementById("activityLinks");
  
    // Clear existing content
    container.innerHTML = "";
  
    // Loop through each week in the JSON data
    weeks.forEach((week) => {
      // Create a heading for the week
      const weekHeading = document.createElement("h3");
      weekHeading.textContent = week.week;
  
      // Append the week heading to the container
      container.appendChild(weekHeading);
  
      // Create a list for the activity links
      const linksList = document.createElement("ul");
  
      // Loop through each activity link in the week
      week.links.forEach((link) => {
        // Create a list item for the activity link
        const linkItem = document.createElement("li");
  
        // Create a hyperlink for the activity link
        const linkAnchor = document.createElement("a");
        linkAnchor.href = baseURL + link.url;
        linkAnchor.textContent = link.title;
  
        // Append the hyperlink to the list item
        linkItem.appendChild(linkAnchor);
  
        // Append the list item to the list of activity links
        linksList.appendChild(linkItem);
      });
  
      // Append the list of activity links to the container
      container.appendChild(linksList);
    });
  }
  
  // Call the getLinks function to test fetching the data
  getLinks();