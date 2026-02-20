document.addEventListener("DOMContentLoaded", function () {

    const submitBtn = document.getElementById("submit");
    const emailInput = document.querySelector("input[type='email']");
    const passwordInput = document.querySelector("input[type='password']");

    submitBtn.addEventListener("click", function (e) {
        e.preventDefault();

        const email = emailInput.value.trim();
        const password = passwordInput.value.trim();

        // Email pattern
        const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,}$/;

        // Password pattern:
        // Minimum 6 characters, at least 1 letter and 1 number
        const passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;

        // Check empty fields
        if (email === "" || password === "") {
            Swal.fire({
                icon: "warning",
                title: "Incomplete Information",
                text: "Please fill in all fields."
            });
            return;
        }

        // Validate email
        if (!email.match(emailPattern)) {
            Swal.fire({
                icon: "error",
                title: "Invalid Email",
                text: "Enter a valid email address."
            });
            return;
        }


        // If everything is valid
        Swal.fire({
            title: "Logging in...",
            allowOutsideClick: false,
            didOpen: () => {
                Swal.showLoading();
            }
        });

        setTimeout(() => {

            // Save login session
            localStorage.setItem("loggedInUser", email);

            Swal.fire({
                icon: "success",
                title: "Login Successful!",
                text: "Welcome to Motorcycle Apex!"
            }).then(() => {
                window.location.href = "home.html";
            });

        }, 1500);

    });

});
