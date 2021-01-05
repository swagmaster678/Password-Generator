var generateBtn = document.querySelector("#generate");
// Moved var passwordText = document.querySelector("#password"); for organization.
var passwordText = document.querySelector("#password");

// Write password to the #password input
function writePassword() {
var password = generatePassword();


passwordText.value = password;

}
function generatePassword() { 
// Had to create a function for generatePassword().
  var pwLength = Number(prompt("How many characters would you like in your password?"));
      console.log(pwLength);
    
    if (pwLength < 8)  {     
    alert("Your password must have at least 8 characters."); 
  }  
  
    if (pwLength > 128)  {     
    alert("Your password must have at least 128 characters."); 
  }  
   // Made the password length between 8 and 128.
  var NlS = "";
  // Variable NlS console logging the confirmations to use for the randomized password.
  var pwupperCase = confirm("Any lower case letters?");
    console.log(pwupperCase);
    if (pwupperCase == true) {
      NlS += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      console.log(NlS);
  }
  var pwlowerCase = confirm("Any upper case letters?");
    console.log(pwlowerCase);
    if (pwlowerCase == true) {
      NlS += "abcdefghijklmnopqrstuvwxyz";
      console.log(NlS);
  }
  var pwspecialChar = confirm("Any special characters?");
    console.log(pwspecialChar);
    if (pwspecialChar == true) {
      NlS += "!#$%&'()*+,-./:;<=>?@[^_`{|}~";
      console.log(NlS);
  }
  var pwNumbers = confirm("Any numbers?");
    console.log(pwNumbers);
    if (pwNumbers == true) {
      NlS += "1234567890";
      console.log(NlS);
  }
  // Made variables for Numbers,upper and lower case letters, and special characters.
  var retVal = "";
    console.log(retVal);
  // Made a for loop to gather all the variables and put it in a string.
  for (var i = 0; i < pwLength; i++) {
    retVal += NlS.charAt(Math.floor(Math.random() * NlS.length));
  }
  return retVal;  

}
  // Add event listener to generate button
  generateBtn.addEventListener("click", writePassword);
