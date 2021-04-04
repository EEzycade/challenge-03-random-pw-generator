// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
    var finalPassword = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = finalPassword;

}

function generatePassword() {
    var lowerCaseConfirm = false
    var upperCaseConfirm = false
    var numericConfirm = false
    var specialConfirm = false
    while (!lowerCaseConfirm || !upperCaseConfirm || !numericConfirm || !specialConfirm) {

        lowerCaseConfirm = confirm("Would you like lowercase characters in your password?");

        upperCaseConfirm = confirm("Would you like uppercase characters in your password?");

        numericConfirm = confirm("Would you like numeric characters in your password?");

        specialConfirm = confirm("Would you like special characters in your password?");
    }
    
    var howMany = 0
    while (howMany <= 7 || howMany >= 129 || isNaN(howMany)) {
        howMany = prompt("How many characters would you like your password to be. Select a number between 8-128.");
    }
    
    var lowerCase = ["a", "b", "c", "d"]
    var characterBank = []
    // var passCode = ""
    if (lowerCaseConfirm) {
        characterBank = characterBank.concat(lowerCase);
        // passCode += characterBank(lowerCase);
    }
    var finalPassword = characterBank[Math.floor(Math.random() * characterBank.length)];
    return finalPassword
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
