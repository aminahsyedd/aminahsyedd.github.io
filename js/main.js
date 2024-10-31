// main.js

// Add an event listener to the name button
document.getElementById('nameButton').addEventListener('click', function() {
    const name = prompt("Please enter your name:"); // Prompt the user to enter their name
    if (name) {
        // Display a greeting message if a name is provided
        document.getElementById('greeting').innerText = `Hello, ${name}! Welcome to my homepage!`; // Use backticks for template literals
    }
});

// Function to toggle the dropdown menu
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show"); // Toggle the 'show' class to display or hide the dropdown
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
    // Check if the clicked target is not the dropdown button
    if (!event.target.matches('.dropbtn')) {
        const dropdowns = document.getElementsByClassName("dropdown-content"); // Get all dropdown contents
        for (let i = 0; i < dropdowns.length; i++) {
            const openDropdown = dropdowns[i];
            // If the dropdown is open, remove the 'show' class to hide it
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}
