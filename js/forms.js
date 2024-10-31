// Show the form when the button is clicked
document.getElementById('nameButton').addEventListener('click', function() {
    document.getElementById('userForm').style.display = 'block'; // Show the form
});

// Add an event listener to the form for the 'submit' event
document.getElementById('userForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission behavior

    // Create an object to store form data
    const formData = {
        username: document.getElementById('username').value, // Get the value of the username input
        email: document.getElementById('email').value, // Get the value of the email input
        age: document.getElementById('age').value, // Get the value of the age input
        gender: document.querySelector('input[name="gender"]:checked')?.value, // Get the checked radio button value for gender
        // Get all checked checkboxes for interests and convert them to an array of values
        interests: Array.from(document.querySelectorAll('input[name="interests"]:checked')).map(el => el.value),
        feedback: document.getElementById('feedback').value // Get the value of the feedback textarea
    };

    // Store the form data in local storage as a JSON string
    localStorage.setItem('formData', JSON.stringify(formData));
    // Alert the user that their data has been saved
    alert('Data saved to local storage!');
});

// Add an event listener to the clear button for the 'click' event
document.getElementById('clearButton').addEventListener('click', function() {
    // Remove the stored form data from local storage
    localStorage.removeItem('formData'); // Optional: clears the stored data when clear button is clicked

    // Optionally, clear the form fields
    document.getElementById('userForm').reset(); // Reset the form fields
    alert('Form data cleared!');
});
