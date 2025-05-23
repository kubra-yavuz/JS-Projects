let userInput = document.getElementById("username");
let passwordInput = document.getElementById("password");
let buttonLogin = document.getElementById("btn-login");
let errorMessage = document.getElementById("errorMessage");

//Username Validate
function userValidate() {
  if (userInput.value == "") {
    errorMessage.innerHTML = "Username boş olamaz.";
    alert("Username boş olamaz!");
  } else if (userInput.value.length < 3) {
    errorMessage.innerHTML = "Username 3 karakterden fazla olmalı.";
    alert("Username 3 karakterden büyük olmalı");
    userInput.classList.add("red-border");
  } else {
    userInput.classList.add("green-border");
  }
}
//Password Validate
function passwordValidate() {
  if (passwordInput.value == "") {
    errorMessage.indexHTML = "Şifre boş olamaz";
    userInput.classList.add("red-border");
  } else if (passwordInput.value.length < 4) {
    errorMessage.innerHTML = "Şifre 4 karakterden fazla olmalı";
    passwordInput.classList.add("red-border");
  } else {
    passwordInput.classList.add("green-border");
  }
}

//Login
function login() {
  errorMessage.innerHTML = "Hoşgeldin Admin";
  userValidate();
  passwordValidate();
}

//ShowPassword
function showPassword() {
  if (passwordInput.type == "password") {
    passwordInput.type = "text";
  } else {
    passwordInput.type = "password";
  }
}
