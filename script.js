// Assignment code
document.querySelector("#generate").addEventListener("click", writePassword);

// Character arrays
const lowerCase = ["a", "b", "c", "d", "e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
const upperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
const number = ["1","2","3","4","5","6","7","8","9","0"]
const specialChar = ["!","@","#","$","%","^","&","*","(",")"]

// Variable customization
var confirmLength = "";
var confirmSpecialCharacter;
var confirmNumericCharacter;
var confirmUpperCase;
var confirmLowerCase;

// Desired number of characters
function generatePassword() {
  var confirmLength = (prompt("How many characters would you like your password to contain?"));

// Error message and loop if user inputs number of characters outside range
  while(confirmLength <= 5 || confirmLength >= 100) {
      alert("Password length must be between 5-100 characters Try again");
      var confirmLength = (prompt("How many characters would you like your password to contain?"));
      } 

// Confirm user input of number of characters  
      alert(`Your password will have ${confirmLength} characters`);

// Determine password parameters 
    var confirmSpecialCharacter = confirm("Click OK to confirm if you would like to include special characters");
    var confirmNumericCharacter = confirm("Click OK to confirm if you would like to include numeric characters");    
    var confirmLowerCase = confirm("Click OK to confirm if you would like to include lowercase characters");
    var confirmUpperCase = confirm("Click OK to confirm if you would like to include uppercase characters");
      
// Error message and loop if all four questions are answered with NO
      while(confirmUpperCase === false && confirmLowerCase === false && confirmSpecialCharacter === false && confirmNumericCharacter === false) {
        alert("You must choose at least one parameter");
        var confirmSpecialCharacter = confirm("Click OK to confirm if you would like to include special characters");
        var confirmNumericCharacter = confirm("Click OK to confirm if you would like to include numeric characters");    
        var confirmLowerCase = confirm("Click OK to confirm if you would like to include lowercase characters");
        var confirmUpperCase = confirm("Click OK to confirm if you would like to include uppercase characters");   
    } 

// Password parameters
      var passwordCharacters = []
      
    if (confirmSpecialCharacter) {
      passwordCharacters = passwordCharacters.concat(specialChar)
    }
    if (confirmNumericCharacter) {
      passwordCharacters = passwordCharacters.concat(number)
    }
    if (confirmLowerCase) {
      passwordCharacters = passwordCharacters.concat(lowerCase)
    }
    if (confirmUpperCase) {
      passwordCharacters = passwordCharacters.concat(upperCase)
    }
      console.log(passwordCharacters)

// Empty string for password parameters
      var randomPassword = ""
      
      for (var i = 0; i < confirmLength; i++) {
        randomPassword = randomPassword + passwordCharacters[Math.floor(Math.random() * passwordCharacters.length)];
        console.log(randomPassword)
      }
      return randomPassword;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}
