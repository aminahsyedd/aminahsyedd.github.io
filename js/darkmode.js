// Select the button
const darkModeButton = document.getElementById("dark-mode-button");

// Check saved theme preference in localStorage
const savedTheme = localStorage.getItem("theme");
if (savedTheme === "dark") {
    document.body.classList.add("dark-mode");
    darkModeButton.textContent = "Light Mode"; // Update button text
}

// Add event listener for the button
darkModeButton.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    // Update button text and save theme preference
    if (document.body.classList.contains("dark-mode")) {
        darkModeButton.textContent = "Light Mode";
        localStorage.setItem("theme", "dark");
    } else {
        darkModeButton.textContent = "Dark Mode";
        localStorage.setItem("theme", "light");
    }
});