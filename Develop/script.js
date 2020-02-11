// Assignment Code
var generateBtn = document.querySelector("#generate");




// Write password to the #password input
function writePassword() {
  // prompts determine the length of the password
  answer = prompt("What is the length of your password?");
  if (answer < 8) {
    alert("Password too short, enter a number greater than or equal to 128 characters.");
    writePassword()
  } else if (answer > 128) {
    alert("Password is too long, enter a number less than or equal to 128 characters.");
    writePassword()
  } else {
    // confirm determine string size 
    lcConfirm = confirm("Do you want lowercase characters");
    if (lcConfirm) {
      charLow = "abcdefghijklmnopqrstuvwxyz"
    }
    else {
      charLow = ""
    }
    upConfirm = confirm("Do you want uppercase characters");
    if (upConfirm) {
      charUp = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    }
    else {
      charUp = ""
    }
    numConfirm = confirm("Do you want numeric characters");
    if (numConfirm) {
      charNum = "0123456789"
    }
    else {
      charNum = ""
    }
    spConfirm = confirm("Do you want special characters");
    if (spConfirm) {
      charSpec = "!@#$%^&*"
    }
    else {
      charSpec = ""
    }

    var password = generatePassword(charLow, charUp, charNum, charSpec);

    var passwordText = document.querySelector("#password");

    passwordText.value = password;
  }
}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);




//  function that generates password, uses confirms to determine length of string
function generatePassword(charLow, charUp, charNum, charSpec) {
  var length = answer,
    charset = charSpec + charNum + charUp + charLow,
    retVal = "";

  for (i = 0, n = charset.length; i < length; ++i) {
    retVal += charset.charAt(Math.floor(Math.random() * n));
  }
  return retVal;
}
