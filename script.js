var generateBtn = document.querySelector("#generate");
var passwordText = document.querySelector("#password");

// Write password to the #password input
function writePassword() {
var password = generatePassword();


passwordText.value = password;

}
function generatePassword() { 

  var pwLength = Number(prompt("How many characters would you like in your password?"));
      console.log(pwLength);
    
    if (pwLength < 8)  {     
    alert("Your password must have at least 8 characters."); 
  }  
  
    if (pwLength > 128)  {     
    alert("Your password must have at least 128 characters."); 
  }  
  
  var NlS = "";
  
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
  
  var retVal = "";
    console.log(retVal);

  for (var i = 0; i < pwLength; i++) {
    retVal += NlS.charAt(Math.floor(Math.random() * NlS.length));
  }
  return retVal;  

}
  // Add event listener to generate button
  generateBtn.addEventListener("click", writePassword);
