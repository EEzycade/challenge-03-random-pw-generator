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
    while (lowerCaseConfirm === false && upperCaseConfirm === false && numericConfirm === false && specialConfirm === false) {

        lowerCaseConfirm = confirm("Would you like lowercase characters in your password?");

        upperCaseConfirm = confirm("Would you like uppercase characters in your password?");

        numericConfirm = confirm("Would you like numeric characters in your password?");

        specialConfirm = confirm("Would you like special characters in your password?");
    }

    var howMany = prompt("How many characters?");
    while (howMany <= 7 || howMany >= 129 || isNaN(howMany)) {
        prompt("How many characters would you like your password to be. Select a number between 8-128.");
    }

    console.log(howMany);

    var lowerCase = ["a", "b", "c", "d"]
    var upperCase = ["A", "B", "C", "D"]
    var numeric = ["1", "2", "3", "4"]
    var special = ["#", "&", "$", "!"]

    var characterBank = []

    // var finalPassword = ""

    if (lowerCaseConfirm) {
        characterBank = characterBank.concat(lowerCase);
        // passCode += characterBank(lowerCase);
    }

    if (upperCaseConfirm) {
        characterBank = characterBank.concat(upperCase);
    }

    if (numericConfirm) {
        characterBank = characterBank.concat(numeric);
    }

    if (specialConfirm) {
        characterBank = characterBank.concat(special);
    }


    console.log(characterBank);
    // var finalPassword = "";

    // for (var i = 0; i < howMany; i++) {
    //     finalPassword += characterBank.charAt[Math.floor(Math.random() * characterBank.length)];
    //     return finalPassword
    // }


    // for (var i = 0; i < 6; i++) {

    //     finalPassword += characterBank.charAt[Math.floor(Math.random() * characterBank.length)];
    //     return finalPassword
    // }

    var finalPassword = "";

    // for (var i = 0; i < howMany; i++) {
    //     var finalPassword = Math.floor(Math.random() * characterBank.length);
    //     return finalPassword;

    // }



    finalPassword = characterBank[Math.floor(Math.random() * characterBank.length)];
    return finalPassword
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
