const passwordField = document.getElementById("password");
let btn = document.getElementById("btn");

btn.addEventListener("click", function() {
    const chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const passwordLength = 8; 
    let password = "";

    for (let i = 0; i < passwordLength; i++) {
        const randomNumber = Math.floor(Math.random() * chars.length);
        password += chars[randomNumber];
    }

    passwordField.value = password;
});

