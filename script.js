
var generateBtn = document.querySelector("#generate");



var lowerCaseA = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
var upperCaseA = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
var numbersA = ['1', '2', '3', '4', '5', '6', '7', '8', '9']
var symbolsA = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_', '+', '=', '{', '}', '[', ']', ';', ':', '|', '\\', '/', '<', '>', ',', '.', '?']

var passString = null;
var passVariablesArray = null;
var passLength = null;
var wantsUppercase = null; 
var wantsLowercase = null;
var wantsSymbols = null;
var wantsNumbers = null;


function generatePassword() {
  passString = "";
  passVariablesArray = [];
 
  passLength = prompt("pick a password length between 8-128");

 
  if (isNaN(parseInt(passLength))) {
    alert('Please enter an actual number for password length');
    return;
  }

  if ((passLength > 128 || passLength < 8)) {
    alert('Please enter an actual number between 8 and 128 characters');
    return;
  }

  wantsUppercase = confirm("do you want to include capital letters?");
  wantsLowercase = confirm("would you like lowercase letters as well?");
  wantsSymbols = confirm("do your need special symbols in there?");
  wantsNumbers = confirm("do you want numbers too?");


  if (!wantsUppercase && !wantsLowercase && !wantsSymbols && !wantsNumbers) {
    alert("you must specify a character set")
    return;
  } else {
    console.log("validated input")
   
    if (wantsUppercase === true) {
      passVariablesArray.push(upperCaseA)
    }
    if (wantsLowercase === true) {
      passVariablesArray.push(lowerCaseA)
    }
    if (wantsSymbols === true) {
      passVariablesArray.push(symbolsA)
    }
    if (wantsNumbers === true) {
      passVariablesArray.push(numbersA)
    }

    

    for (var i = 0; i < passLength; i++) {
      var choice = Math.floor(Math.random() * passVariablesArray.length);
      passString += passVariablesArray[choice][Math.floor(Math.random() * passVariablesArray[choice].length)];
    }
    return passString
  }
  
}


function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}


generateBtn.addEventListener("click", writePassword)
