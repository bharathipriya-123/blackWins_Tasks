document.getElementById("submit").addEventListener("click", function () {
    const username = document.getElementById("user_name").value.trim();
    const password = document.getElementById("user_passwrd").value.trim();
    const message = document.getElementById("message");

    if (username && password) {
       message.style.color = "green";
       message.textContent = "Registration Successful";
    } else {
       message.style.color = "red";
       message.textContent = "Registration failed ";
    }
 });