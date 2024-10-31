// Add an event listener to the button with ID 'nameButton'
document.getElementById('nameButton').addEventListener('click', function() {
    // Prompt the user to enter their name and store it in a variable
    const name = prompt("Please enter your name:");
    // Check if the user entered a name
    if (name) {
        // Update the greeting paragraph with a personalized message
        document.getElementById('greeting').innerText = `Hello, ${name}! Welcome to my homepage!`;
    }
});

// Function to toggle the dropdown menu
function myFunction() {
    // Toggle the 'show' class on the dropdown menu to display or hide it
    document.getElementById("myDropdown").classList.toggle("show");
}

// Event listener for clicks on the window to close dropdowns
window.onclick = function(event) {
    // Check if the clicked element is not the dropdown button
    if (!event.target.matches('.dropbtn')) {
        // Get all elements with the class 'dropdown-content'
        const dropdowns = document.getElementsByClassName("dropdown-content");
        // Loop through each dropdown
        for (let i = 0; i < dropdowns.length; i++) {
            const openDropdown = dropdowns[i];
            // If the dropdown is open (has the 'show' class), remove that class to hide it
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show'); // Closes the dropdown
            }
        }
    }
};
