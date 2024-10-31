// form.js

// Handle form submission and store data in local storage
document.getElementById('userForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission

    const formData = {
        username: document.getElementById('username').value,
        email: document.getElementById('email').value,
        age: document.getElementById('age').value,
        gender: document.querySelector('input[name="gender"]:checked')?.value,
        interests: Array.from(document.querySelectorAll('input[name="interests"]:checked')).map(el => el.value),
        feedback: document.getElementById('feedback').value
    };

    localStorage.setItem('formData', JSON.stringify(formData));
    alert('Data saved to local storage!');
});

// Clear button functionality
document.getElementById('clearButton').addEventListener('click', function() {
    localStorage.removeItem('formData'); // Optional: clear stored data
});