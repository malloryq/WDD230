// links.js

// Define baseURL and linksURL
const baseURL = "https://malloryq.github.io/wdd230/";
const linksURL = "https://malloryq.github.io/wdd230/data/links.json";

// Asynchronous function to get the links data from the JSON file
async function getLinks() {
    try {
      const response = await fetch(linksURL);
      const data = await response.json();
      console.log(data); // Log the data to the console for testing
      return data; // Return the data if needed for further processing
    } catch (error) {
      console.error("Error fetching or parsing JSON data:", error);
    }
  }
  
  // Call the getLinks function to test fetching the data
  getLinks();