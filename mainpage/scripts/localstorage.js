document.addEventListener('DOMContentLoaded', function() {
    // Get the current date
    var currentDate = new Date();
    var currentTimestamp = currentDate.getTime();

    // Get the stored visit date from localStorage
    var storedTimestamp = localStorage.getItem('lastVisit');

    if (!storedTimestamp) {
        // This is the user's first visit
        document.getElementById('visitMessage').textContent = "Welcome! Let us know if you have any questions.";
    } else {
        // Calculate the difference in days
        var differenceInDays = Math.floor((currentTimestamp - storedTimestamp) / (1000 * 60 * 60 * 24));

        if (differenceInDays < 1) {
            // Less than a day has passed since the last visit
            document.getElementById('visitMessage').textContent = "Back so soon! Awesome!";
        } else if (differenceInDays === 1) {
            // Exactly one day has passed since the last visit
            document.getElementById('visitMessage').textContent = "You last visited 1 day ago.";
        } else {
            // More than one day has passed since the last visit
            document.getElementById('visitMessage').textContent = "You last visited " + differenceInDays + " days ago.";
        }
    }

    // Store the current visit date in localStorage
    localStorage.setItem('lastVisit', currentTimestamp);
});
