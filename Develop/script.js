// Assignment Code
var generateBtn = document.querySelector("#generate");




// Write password to the #password input
function writePassword() {
  answer = prompt("What is the length of your password?");
  if (answer < 8) {
    alert("Password too short, enter a number greater than or equal to 128 characters.");
    writePassword()
  } else if (answer > 128) {
    alert("Password is too long, enter a number less than or equal to 128 characters.");
    writePassword()
  } else {
   lcConfirm = confirm("Do you want lowercase characters");
   if (lcConfirm){
     charLow = "abcdefghijklmnopqrstuvwxyz"
   }
   else{
    charLow = ""}
   upConfirm = confirm("Do you want uppercase characters");
   if (upConfirm){
    charUp = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  }
  else{
    charUp = ""}
   numConfirm = confirm("Do you want numeric characters");
   if (numConfirm){
    charNum = "0123456789"
  }
  else {
    charNum = ""}
   spConfirm = confirm("Do you want special characters");
   if (spConfirm){
    charSpec = "!@#$%^&*"
  }
  else {
    charSpec = ""}

  var password = generatePassword(charLow, charUp, charNum, charSpec);
  
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  }
}

// var lPrompt = var lcConfirm = var upConfirm = var numConfirm = var spConfirm = 


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// prompt and confirms for user input




// loop that contains the string for all of the characters
function generatePassword(charLow, charUp, charNum, charSpec, answer) {
  var length = answer,
    charset = charSpec + charNum + charUp + charLow,
    retVal = "";

  for (i = 0, n = charset.length; i < length; ++i) {
  retVal += charset.charAt(Math.floor(Math.random() * n));
  }
  return retVal;
}
