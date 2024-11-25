{/* <script>
    // Add event listener to the Apply button
    document.getElementById('apply').addEventListener('click', function (e) {
        e.preventDefault(); // Prevent default anchor behavior

        // Create a form dynamically
        const formContainer = document.createElement('div');
        formContainer.id = 'applyForm';
        formContainer.style.border = '1px solid #ccc';
        formContainer.style.padding = '20px';
        formContainer.style.margin = '20px 0';
        formContainer.style.width = '300px';
        formContainer.style.backgroundColor = '#f9f9f9';

        formContainer.innerHTML = `
            <h3>Apply for the Job</h3>
            <form id="applicationForm">
                <label for="email">Email:</label><br>
                <input type="email" id="email" name="email" required><br><br>
                <label for="password">Password:</label><br>
                <input type="password" id="password" name="password" required><br><br>
                <button type="submit">Submit</button>
            </form>
            <div id="successMessage" style="display: none; color: green; margin-top: 10px;">
                Application Successful! We will contact you soon.
            </div>
        `;

        // Append the form container to the document
        const container = document.getElementById('container');
        container.appendChild(formContainer);

        // Handle form submission
        document.getElementById('applicationForm').addEventListener('submit', function (event) {
            event.preventDefault(); // Prevent form submission

            // Display success message
            const successMessage = document.getElementById('successMessage');
            successMessage.style.display = 'block';

            // Optionally clear the form inputs
            this.reset();
        });

        // Disable the Apply button to prevent multiple forms
        document.getElementById('apply').disabled = true;
    });
</script> */}
