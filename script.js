// Assignment code here

function generatePassword() {
  console.log("prompt should start")
  var passLength = prompt("pick a password length between 8-128")
  var upperCase = confirm("do you want to include capital letters?")
  
  function lengthLogged() {
    if (passLength > 128 || passLength < 8) {
      alert('your password must meet the criteria')
      console.log("retry")
      generatePassword()
     
      } else {
        
      }
    }

  }
//gather information from user using prompts
//length 8-128
//uppercase prompt
//lowercase prompt
//special characters

//validate input 

//display password




return ' enter password variable'
}
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
