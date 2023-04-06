var lowerCaseA = ['a', 'b', 'c','d', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r','s', 't', 'u', 'v', 'w', 'x', 'y','z']
var upperCaseA = [ 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L','M', 'N', 'O', 'P', 'Q', 'R','S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z' ]
var numbersA = ['1','2','3','4','5','6','7','8','9']
var symbolsA = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_', '+', '=', '{', '}', '[', ']', ';', ':', '|', '\\', '/', '<', '>', ',', '.', '?']


// function to generate password
function generatePassword() {
  console.log("prompt should start")
  var passLength = prompt("pick a password length between 8-128")
  var upperCase = confirm("do you want to include capital letters?")
  var lowerCase = confirm("would you like lowercase letters as well?")
  var symbols = confirm("do your need special symbols in there?")
  
  // store the results of the functions
  var result = lengthLogged(passLength)

  //create an if statement that will store the concatenated data
  // create an array to store the info provided
  var passVariables = [] 

  if (upperCase === true) {
    passVariables.push[upperCaseA]
  }
  if (lowerCase === true) {
    passVariables.push[LowerCaseA]
  }
  if (symbols === true) {
    passVariables.push[symbolsA]
  }

  // validate that a data set was chosen
  if (!upperCase && !lowerCase && !symbols) {
    alert("you must specify a character set")
  }else {
    console.log("validated input")
    //math on arrays?? 
  }
// function that stores uses selected number to run math random
function mathRando() {
  function getRandomInt(lengthLogged) {
    return Math.floor(Math.random() * lengthLogged) 
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
