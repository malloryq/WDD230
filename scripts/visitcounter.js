document.addEventListener('DOMContentLoaded', function() {
    // Get the visit count from localStorage or set it to 0 if not available
    let visitCount = localStorage.getItem('visitCount') || 0;

    // Increment the visit count
    visitCount++;

    // Update the visit count in localStorage
    localStorage.setItem('visitCount', visitCount);

    // Display the visit count on the page
    document.getElementById('visit-count').textContent = visitCount;
});
