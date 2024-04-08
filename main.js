let firstName, lastName, email, password, passwordAgain;
const videoUrl = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTkiZyX9fREccoIao12Lyg0Bf48tKiTppV8Whs4dl2YQ&s";

function validateInput(inputElement) {
    const value = inputElement.value.trim();

    if (value === "") {
        inputElement.classList.add("is-invalid", "border", "border-danger");
        return false; 
    } else if (inputElement === email && !isValidEmail(value)) {
        inputElement.classList.add("is-invalid");
        return false; 
    } else if (inputElement === password && !isValidPassword(value)) {
        inputElement.classList.add("is-invalid", "border", "border-danger");
        return false; 
    } else if (inputElement === passwordAgain && !isValidPasswordAgain()) {
        inputElement.classList.add("is-invalid", "border", "border-danger");
        return false; 
    } else {
        inputElement.classList.remove("is-invalid", "border", "border-danger");
        return true; 
    }
}

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function isValidPassword(password) {
    return password.length >= 8 && /[A-Z]/.test(password);
}

function isValidPasswordAgain() {
    return password.value === passwordAgain.value;
}

function nextPage() {
    const validFields = [
        validateInput(firstName),
        validateInput(lastName),
        validateInput(email),
        validateInput(password),
        validateInput(passwordAgain)
    ];

    if (validFields.every(field => field)) {
        window.open(videoUrl, '_blank');
    }
}

function resetForm() {
    location.reload();
}

document.addEventListener("DOMContentLoaded", function () {
    firstName = document.getElementById("firstName");
    lastName = document.getElementById("lastName");
    email = document.getElementById("emailInput");
    password = document.getElementById("passwordInput");
    passwordAgain = document.getElementById("passwordInputAgain");
    
    firstName.addEventListener("input", function() {
        validateInput(firstName);
    });
    lastName.addEventListener("input", function() {
        validateInput(lastName);
    });
    email.addEventListener("input", function() {
        validateInput(email);
    });
    password.addEventListener("input", function() {
        validateInput(password);
    });
    passwordAgain.addEventListener("input", function() {
        validateInput(passwordAgain);
    });
});
