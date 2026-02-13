document.addEventListener("DOMContentLoaded", function () {

  var loginForm = document.querySelector("form");

  
  loginForm.addEventListener("submit", function (event) {
  
    event.preventDefault();

  
    var usernameInput = document.querySelector('input[type="text"]');
    var passwordInput = document.querySelector('input[type="password"]');

    var username = usernameInput.value;
    var password = passwordInput.value;

 
    console.log("Username:", username);
    console.log("Password:", password);


  });
});
            