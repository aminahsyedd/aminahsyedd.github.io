// Function to toggle dropdown visibility
function myFunction() {
    console.log("Dropdown toggle clicked.");
    document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
    console.log("Click event detected.");
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        for (var i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                console.log("Closing dropdown.");
                openDropdown.classList.remove('show');
            }
        }
    }
};