// Assignment Code
var generateBtn = document.querySelector("#generate");
var copyBtn = document.querySelector("#copybtn");

// Write password to the #password input
function writePassword() {
    var finalPassword = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = finalPassword;

}

function generatePassword() {
    // ask user which character sets they want to be in their password
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

    // ask user how many characters they want in their password
    var howMany = parseInt(prompt("How many characters would you like your password to be? Select a number between 8-128."));
    while (howMany <= 7 || howMany >= 129 || isNaN(howMany)) {
        alert("Password must be between 8-128")
        var howMany = parseInt(prompt("How many characters would you like your password to be? Select a number between 8-128."));
    }

    console.log(howMany);

    // create arrays for each character set
    var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
    var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
    var numeric = ["1", "2", "3", "4", "5", "6", "7", "8", "9"]
    var special = ["!", "#", "$", "&", "?", "+", "="]

    // create combined character array
    var characterBank = []

    // add user-chosen character sets to the combined characterBank array
    if (lowerCaseConfirm) {
        characterBank = characterBank.concat(lowerCase);
        alert("You chose to have lowercase characters in your password!")
    }

    if (upperCaseConfirm) {
        characterBank = characterBank.concat(upperCase);
        alert("You chose to have uppercase characters in your password!")
    }

    if (numericConfirm) {
        characterBank = characterBank.concat(numeric);
        alert("You chose to have numeric characters in your password!")
    }

    if (specialConfirm) {
        characterBank = characterBank.concat(special);
        alert("You chose to have special characters in your password!")
    }

    console.log(characterBank);

    // create empty string for password to fill
    var finalPassword = "";
    // create loop to find random values a user-specified number of times
    for (var i = 0; i < howMany; i++) {
        finalPassword += characterBank[Math.floor(Math.random() * characterBank.length)];
    }

    return finalPassword
}

// function to copy password
function copyPassword() {
    var copyText = document.getElementById("password");
    copyText.select();
    copyText.setSelectionRange(0 , 99999);
    document.execCommand("copy");
    alert("Copied the password: " + copyText.value)
}

// Add event listener to trigger writePassword function
generateBtn.addEventListener("click", writePassword);
// Add event listener to trigger copyPassword function
copyBtn.addEventListener("click", copyPassword);
