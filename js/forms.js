// form.js

// Listen for the form submission event
document.getElementById('userForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission behavior

    // Gather form data into an object
    const formData = {
        name: document.getElementById('name').value, // Get the name input value
        email: document.getElementById('email').value, // Get the email input value
        phone: document.getElementById('phone').value, // Get the phone input value (if applicable)
        contactMethod: document.querySelector('input[name="contactMethod"]:checked')?.value, // Get the selected contact method
        interests: Array.from(document.querySelectorAll('input[name="interests"]:checked')).map(el => el.value), // Get selected interests
        message: document.getElementById('message').value // Get the message input value
    };

    // Store the form data in local storage as a JSON string
    localStorage.setItem('formData', JSON.stringify(formData));
    alert('Data saved to local storage!'); // Notify the user that data is saved
});

// Add functionality for the clear button
document.getElementById('clearButton').addEventListener('click', function() {
    localStorage.removeItem('formData'); // Optionally clear the stored data from local storage
    document.getElementById('userForm').reset(); // Reset the form fields to their default values
});
