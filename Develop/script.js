// Assignment Code
var generateBtn = document.querySelector("#generate");




// Write password to the #password input
function writePassword() {
  answer = prompt("What is the length of your password?");
   lcConfirm = confirm("Do you want lowercase characters");
   upConfirm = confirm("Do you want uppercase characters");
   numConfirm = confirm("Do you want numeric characters");
   spConfirm = confirm("Do you want special characters");
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// var lPrompt = var lcConfirm = var upConfirm = var numConfirm = var spConfirm = 


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// prompt and confirms for user input




// loop that contains the string for all of the characters
function generatePassword() {
  var length = answer,
    charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*",
    retVal = "";

  for (i = 0, n = charset.length; i < length; ++i) {
  retVal += charset.charAt(Math.floor(Math.random() * n));
  }
  return retVal;
}
