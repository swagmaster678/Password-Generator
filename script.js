var generateBtn = document.querySelector("#generate");
var passwordText = document.querySelector("#password");


// Write password to the #password input
function writePassword() {
var password = generatePassword();


passwordText.value = password;

}

function generatePassword () { 
  var text = "";
  var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+";
  for (var i = 0; i < pwLength; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length));
    var pwLength = Number(prompt("How long do you want you password to be?"));
    
    if (pwLength < 8)  {     
    alert("Your password must have at least 8 characters."); 
      console.log(pwLength);
  }  
  
    if (pwLength > 128)  {     
    alert("Your password must have at least 128 characters."); 
      console.log(pwLength);
  }  
    
  var pwlowerCase = confirm("Any lower case letters?")
  
    if (pwlowerCase == true){
    console.log(pwlowerCase);
  }
   else if(pwlowerCase = false) {
     console.log(pwlowerCase);
   }
  
  var pwupperCase = confirm("Any upper case letters?")
  
    if (pwupperCase == true){
    console.log(pwupperCase);
  }
    else if(pwupperCase = false) {
    console.log(pwupperCase);
  }
  
  var pwnumBers = confirm("Any numbers?")
  
    if (pwnumBers == true){
    console.log(pwnumBers);
  }
    else if(pwnumBers = false) {
    console.log(pwnumBers);
  }
  
  var pwspecialChar = confirm("Any special characters?")
  
    if (pwspecialChar == true){
    console.log(pwspecialChar);
  }
    else if(pwspecialChar = false) {
    console.log(pwspecialChar);
  }
    return text;
  }
  
  console.log(generatePassword());
  // Add event listener to generate button
  generateBtn.addEventListener("click", writePassword);
