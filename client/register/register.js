const bcrypt = require('bcryptjs')

function togglePasswordVisibility(){
  var x = document.getElementById("passwordInput");
  if (x.type === "password") {  
    x.type = "text";
  } else {
    x.type = "password";
  }
}

function toggleConfirmPasswordVisibility(){
    var x = document.getElementById("confirmPasswordInput");
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
}

function validateInput(username, email, password, confirmPassword){
  return true;
}

async function attemptRegister() {
  let usernameInput = document.getElementById("usernameInput").value;
  let emailInput = document.getElementById("emailInput").value;
  const salt = await bcrypt.genSalt(10);
  let passwordInput = await bcrypt.hash(document.getElementById("passwordInput").value, salt);
  let confirmPasswordInput = await bcrypt.hash(document.getElementById("confirmPasswordInput").value, salt);

  const validated = validateInput(usernameInput, emailInput, passwordInput, confirmPasswordInput);

  if(validated){
    let url = "http://localhost:3000/users"
    let data = JSON.stringify({
      username: usernameInput,
      email: emailInput,
      password: passwordInput
    });
  
    let response = await fetch(url, {
      method: "POST",
      body: data,
      headers: {
        "Content-Type": "application/json"
      }
    });
  } 
}

window.attemptRegister = attemptRegister;
window.togglePasswordVisibility = togglePasswordVisibility;
window.toggleConfirmPasswordVisibility = toggleConfirmPasswordVisibility;