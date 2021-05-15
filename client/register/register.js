function togglePasswordVisibility(){
    var x = document.getElementById("passwordInput");
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
  console.log("logging works");
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

function attemptRegister() {
  usernameInput = document.getElementById("usernameInput").value;
  emailInput = document.getElementById("emailInput").value;
  passwordInput = document.getElementById("passwordInput").value;
  confirmPasswordInput = document.getElementById("confirmPasswordInput").value;

  const validated = validateInput(usernameInput, emailInput, passwordInput, confirmPasswordInput);

  if(validated){
    url = "http://localhost:3000/users"
    data = JSON.stringify({
      username: usernameInput,
      email: emailInput,
      password: passwordInput
    });
  
    fetch(url, {
      method: 'POST',
      body: data,
      headers: {
        "Content-Type": "application/json"
      }
    });
  } 
}