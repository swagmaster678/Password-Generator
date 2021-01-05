var generateBtn = document.querySelector("#generate");
var passwordText = document.querySelector("#password");


// Write password to the #password input
function writePassword() {
var password = generatePassword();


passwordText.value = password;

}

function generatePassword () { 
  var passwordLength = Number(prompt("How many characters would you like in your password?"));
      console.log(passwordLength);
    
    if (pwLength < 8)  {     
    alert("Your password must have at least 8 characters."); 
      console.log(pwLength);
  }  
  
    if (pwLength > 128)  {     
    alert("Your password must have at least 128 characters."); 
      console.log(pwLength);
  }  
  var NLS = ""
  var pwlowerCase = confirm("Any lower case letters?")
  
    if (pwlowerCase == true){
      NLS += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      console.log(NLS);
  }
    else if(pwlowerCase = false) {
     console.log(pwlowerCase);
   }
  
  var pwupperCase = confirm("Any upper case letters?")
  
    if (pwupperCase == true){
      NLS += "abcdefghijklmnopqrstuvwxyz";
      console.log(pwupperCase);
  }
    else if(pwupperCase = false) {
    console.log(pwupperCase);
  }
  
  var pwnumBers = confirm("Any numbers?")
  
    if (pwnumBers == true){
      NLS += "1234567890";
      console.log(pwnumBers);
  }
    else if(pwnumBers = false) {
    console.log(pwnumBers);
  }
  
  var pwspecialChar = confirm("Any special characters?")
  
    if (pwspecialChar == true){
      NLS += "!#$%&'()*+,-./:;<=>?@[^_`{|}~";
      console.log(pwspecialChar);
  }
    else if(pwspecialChar = false) {
    console.log(pwspecialChar);
  }

  for (var i = 0; i < passwordLength; i++) {
    //picks a character within charSet at index of random number
    retVal += charSet.charAt(Math.floor(Math.random() * charSet.length));
  }
  return retVal;  
}
  console.log(generatePassword());
  // Add event listener to generate button
  generateBtn.addEventListener("click", writePassword);
