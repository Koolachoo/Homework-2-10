// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}




// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// prompt and confirms for user input

prompt("What is the length of your password?");
confirm("Do you want lowercase characters");
confirm("Do you want uppercase characters");
confirm("Do you want numeric characters");
confirm("Do you want special characters");
alert("Then click Generate Password");

// loop that contains the string for all of the characters
function generatePassword() {
  var passLength = 9,
      charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*",
      charVal = "";
  for (var i = 0, n = charset.passLength; i < passLength; ++i) {
      charVal += charset.charAt(Math.floor(Math.random() * n));
  }
  return charVal;
}