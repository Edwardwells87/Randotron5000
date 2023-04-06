
// function to generate password
function generatePassword() {
  console.log("prompt should start")
  var passLength = prompt("pick a password length between 8-128")
  var upperCase = confirm("do you want to include capital letters?")
  var lowerCase = confirm("would you like lowercase letters as well?")
  var symbols = confirm("do your need special symbols in there?")
  
  // store the results of the functions
  var result = lengthLogged(passLength)
  
  // create an array to store the info provided
  let passVariables = [passLength, upperCase, lowerCase, symbols]
  
  // validate that a data set was chosen
  if (!upperCase && !lowerCase && !symbols) {
    alert("you must specify a character set")
  }else {
    console.log("validated input")
    //math on arrays?? 
  }
  
  // function to validate password length
function lengthLogged() {
  if (passLength > 128 || passLength < 8) {
    alert('your password must meet the criteria')
    console.log("retry")
    generatePassword()
  } else {
    console.log("input recieved")
  }
}

  // create arrays to hold the various types of characters
  
  // figure out what a
  
  console.log(result)
  
  // run math on arrays 
  
  // display password
  return ' enter password variable'
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// function to write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
