// Function to toggle dropdown visibility
function myFunction() {
    console.log("Dropdown toggle clicked.");
    document.getElementById("myDropdown").classList.toggle("show");
}

// Function to enlarge the text
function enlargeText() {
    var textElement = document.getElementById("text-example");
    var currentSize = window.getComputedStyle(textElement, null).getPropertyValue('font-size');
    var newSize = parseFloat(currentSize) * 1.2 + "px";
    textElement.style.fontSize = newSize;
}

// Function to toggle dark mode
function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    
    // Save the user's dark mode preference in localStorage
    if (document.body.classList.contains('dark-mode')) {
        localStorage.setItem('darkMode', 'enabled');
    } else {
        localStorage.setItem('darkMode', 'disabled');
    }
}

// JavaScript for Displaying Alt Text
function displayAltText(imageId) {
    // Get the image by its ID
    const image = document.getElementById(imageId);

    // Get the alt text of the image
    const altText = image.alt;

    // Get the element where alt text will be displayed
    const displayElement = document.getElementById('alt-text-display');

    // Display the alt text
    displayElement.textContent = `Alt-Text: ${altText}`;
};
