// forms.js

// Prevent default form submission and handle the form data
document.getElementById('userForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Gather form data
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const contactMethod = document.querySelector('input[name="contactMethod"]:checked').value;
    const message = document.getElementById('message').value;
    const interests = Array.from(document.querySelectorAll('input[name="interests"]:checked')).map(checkbox => checkbox.value);

    // Log the data or send it to a server
    console.log({
        name,
        email,
        phone,
        contactMethod,
        message,
        interests
    });

    // Optionally, show a success message
    alert('Form submitted successfully!');
});
