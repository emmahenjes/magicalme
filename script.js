function about() {
   var password = document.getElementById("passwordBox2");
  /*add .toUpperCase() String function so that even if the user types in the password in lower-case, it will check against uppercase password text*/
   var passwordText = password.value;
   if(passwordText == "20s") {
    return true;
   }
   alert("That is incorrect, try again!");
   return false;
   }