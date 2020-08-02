// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


function generatePassword() {

  // Setting length of password, will dictate the number of loops
  var stringLength  = prompt("How many characters long should your passoword be? (8-128)");
  var charLength = parseInt(stringLength, 10);

  // Adding a validation loop to make sure that the length meets the requirements, stopping the process if not

  if (charLength<8 || charLength>128) {
    alert("Please select a length between 8 and 128 characters");
    return;
  };


  // Lowercase?

  var lowerCase = confirm("Press OK to include lowercase letters in your password, or cancel to exclude");

  // Uppercase?

  var upperCase = confirm("Press OK to include uppercase letters in your password, or cancel to exclude");

  // Numbers?

  var numericChar = confirm("Press OK to include numbers in your password, or cancel to exclude");

  // Special characters?

  var specialChar = confirm("Press OK to include special characters (*!$&/?), or cancel to exclude");


  // Setting the array that will house the chosen variables
  var availChar = [];

  // Dictating which characters will be included in the array based on user input.

  if (lowerCase == true) {
    var lowerCaseAr = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m",
    "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    availChar = availChar.concat(lowerCaseAr);
  };

  if (upperCase == true) {
    var upperCaseAr = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M",
    "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    availChar = availChar.concat(upperCaseAr);
  };

  if (numericChar == true) {
    var numberAr = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
    availChar = availChar.concat(numberAr);
  };

  if (specialChar == true) {
    var specialCharAr = ["*", "!", "$", "&", "/", "?"]
    availChar = availChar.concat(specialCharAr);
  };

  // Validation loop that makes sure the user selected at least one set of characters

  if (availChar.length == "") {
    alert("You have not chosen any characters, please refresh and try again");
  };

  // Setting the created password as blank, will be filled by for loop
  var passCreate = "";
  
  // Looping and setting each character of the new password randomly from array of available options
  // i represents the position in our created password that is being filled (first zero position, then one, two, etc)
  // x represents a random position chosen from our array, which will correspond to one of our available characters
  // We are slotting the character that is in position x of our available characters array into position i, adding a 
  // character each loop, until we reach the length set by the user.

  for (var i=0; i<charLength; i++) {
    var x  = Math.floor(Math.random()*(availChar.length-1));
    passCreate += availChar[x];
  };
  return passCreate;
};  