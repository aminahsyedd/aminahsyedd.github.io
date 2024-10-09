document.getElementById('nameButton').addEventListener('click', function() {
    const name = prompt("Please enter your name:");
    if (name) {
        document.getElementById('greeting').innerText = `Hello, ${name}! Welcome to my homepage!`; // Corrected syntax
    }
});

function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
        const dropdowns = document.getElementsByClassName("dropdown-content");
        for (let i = 0; i < dropdowns.length; i++) {
            const openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}
