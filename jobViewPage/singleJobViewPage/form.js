document.getElementById('submit-btn').addEventListener('click', function () {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const message = document.getElementById('message');

    if (email && password) {
        // Simulating a successful application
        message.textContent = "Application Success! We will contact you soon.";
        message.style.color = "green";
    } else {
        // Simulating an application failure
        message.textContent = "Application Failed! Please fill all the fields.";
        message.style.color = "red";
    }
});