// password show/hide toggle---------------------------

let toggleButton = document.querySelector("#btnToggle");

let passwordInput = document.querySelector("#password");

let icon = document.querySelector("#eyeIcon");

let logBtn = document.getElementById("logIn");

let message = document.getElementById("alertText");

let logIn = document.getElementById("log-in");

var successMessage = document.querySelector(".success-text");

toggleButton.addEventListener("click" , function (){
    if (passwordInput.type === 'password'){
        passwordInput.type = 'text';
        icon.classList.add("ri-eye-line");
        icon.classList.remove("ri-eye-off-line");
    }
    else{
        passwordInput.type = 'password';
        icon.classList.add("ri-eye-off-line");
        icon.classList.remove("ri-eye-line");
    }
})

// ------------------------------------------------ 

// password length

logBtn.addEventListener("click" , function(){
    if (passwordInput.value.length < 6) {
        message.classList.add('text-red-600');
        message.innerText = `fill the password with 6 charecters`;
    }
    else{
        message.classList.remove('text-red-800');
        message.innerText = ``;
        setTimeout(() =>{
          logIn.style.display="none";
          successMessage.innerText = `Congratulations You are successfully logged in`;
        },3000);
        
    }
})

// ----------------------------

