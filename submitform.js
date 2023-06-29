function validateForm() {
    var fullName = document.forms["myForm"]["fullName"].value;
    var email = document.forms["myForm"]["email"].value;
    var phoneNumber = document.forms["myForm"]["phoneNumber"].value;
    var password = document.forms["myForm"]["password"].value;
    var confirmPassword = document.forms["myForm"]["confirmPassword"].value;

    var errorMessages = [];

    // Validate Full Name
    if (fullName.length < 5) {
        errorMessages.push("Full Name must be at least 5 characters long.");
    }

    // Validate Email
    if (!email.includes("@")) {
        errorMessages.push("Please enter a valid email address.");
    }

    // Validate Phone Number
    if (phoneNumber === "123456789" || phoneNumber.length !== 10 || isNaN(phoneNumber)) {
        errorMessages.push("Please enter a valid 10-digit phone number.");
    }

    // Validate Password
    if (password === "password" || password === fullName || password.length < 8) {
        errorMessages.push("Please enter a strong password (at least 8 characters long) that is not a common choice.");
    }

    // Validate Confirm Password
    if (password !== confirmPassword) {
        errorMessages.push("Password and Confirm Password do not match.");
    }

    var errorContainer = document.getElementById("errorContainer");
    errorContainer.innerHTML = "";

    if (errorMessages.length > 0) {
        errorContainer.style.display = "block";

        for (var i = 0; i < errorMessages.length; i++) {
            var errorMessage = document.createElement("p");
            errorMessage.className = "error";
            errorMessage.innerHTML = errorMessages[i];
            errorContainer.appendChild(errorMessage);
        }

        return false;
    }

    return true;
}
