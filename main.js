// password show/hide toggle---------------------------

let toggleButton = document.querySelector("#btnToggle");

let passwordInput = document.querySelector("#password");

let icon = document.querySelector("#eyeIcon");

let logBtn = document.getElementById("logIn");

let message = document.getElementById("alertText");

let logIn = document.getElementById("log-in");

var successMessage = document.querySelector(".success-text");

toggleButton.addEventListener("click", function () {
    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        icon.classList.add("ri-eye-line");
        icon.classList.remove("ri-eye-off-line");
    }
    else {
        passwordInput.type = 'password';
        icon.classList.add("ri-eye-off-line");
        icon.classList.remove("ri-eye-line");
    }
})

// ------------------------------------------------ 

// password length

logBtn.addEventListener("click", function () {
    if (passwordInput.value.length < 6) {
        message.classList.add('text-red-600');
        message.innerText = `fill the password with 6 charecters`;
    }
    else {
        message.innerText = ``;
        setTimeout(() => {
            logIn.classList.add('hidden');
            logIn.classList.remove('block')
            successMessage.innerText = `Congratulations You are successfully logged in`;
        }, 3000);

    }
})

// ----------------------------

// forget password reset form
function resetPassword() {
    logIn.reset();
}
// ----------------------

// registration

function signUp() {
    logIn.classList.add('hidden');
    logIn.classList.remove('block');
    document.querySelector(".registration-form").classList.add('block');
    document.querySelector(".registration-form").classList.remove('hidden');
}
function logAction() {
    logIn.classList.add('block');
    logIn.classList.remove('hidden');
    document.querySelector(".registration-form").classList.remove('block');
    document.querySelector(".registration-form").classList.add('hidden');
}

let createPassword = document.querySelector("#create-password");
let confirmPassword = document.querySelector("#confirm-password");
let eyeToggle = document.querySelector("#eyeToggle");


eyeToggle.addEventListener("click", function () {
    if (confirmPassword.type === 'password') {
        confirmPassword.type = 'text';
        document.querySelector("#eyeBtn").classList.add("ri-eye-line");
        document.querySelector("#eyeBtn").classList.remove("ri-eye-off-line");
    }
    else {
        confirmPassword.type = 'password';
        document.querySelector("#eyeBtn").classList.add("ri-eye-off-line");
        document.querySelector("#eyeBtn").classList.remove("ri-eye-line");
    }
})

let signUpBtn = document.getElementById("signUp-btn");
let alertMessage = document.getElementById("alertMessage");

signUpBtn.addEventListener("click", function () {

    switch (true) {
        case confirmPassword.value.length < 6:
            alertMessage.classList.add('text-red-600');
            alertMessage.innerText = `Fill the password with at least 6 characters`;
            break;

        case !(createPassword.value === confirmPassword.value):
            alertMessage.classList.add('text-red-600');
            alertMessage.innerText = `Fill the same password`;
            break;

        default:
            alertMessage.innerText = ``;

            setTimeout(() => {
                document.getElementById("registration").style.display = "none";
                successMessage.innerText = `Congratulations your registration is successfull`;
            }, 3000);

            break;
    }

})


