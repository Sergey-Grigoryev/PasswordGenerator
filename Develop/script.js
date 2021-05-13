// Assignment Code
var generateBtn = document.querySelector("#generate");

// arrays of types of chars
var specialChars = ["!", "\"", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\\", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "|", "}", "~"];
var lowercaseLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var uppercaseLetters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var numbers = ["0","1","2","3","4","5","6","7","8","9"];
var passwordArray = [];
var passwordText = [];

console.log(specialChars);
console.log(lowercaseLetters);
console.log(uppercaseLetters);
console.log(numbers);
console.log(passwordArray);

// Write password to the #password input

// prompt to get length of pw
function writePassword() {
  var pwLength = prompt("Password Length?")
  console.log(pwLength)
  var passwordText = [];


  // error + restart if < 8 or > 128
  if (pwLength < 8 || pwLength > 128) {
  alert("Password must be 8-128 characters")
  writePassword()
  };

  // Let user choose which chars they want
  var useSpecial = confirm("Do you want to include special characters? (eg. !@#$%)");
  var useLower = confirm("Do you want to include lowercase letters?");
  var useUpper = confirm("Do you want to include uppercase letters?");
  var useNumber = confirm("Do you want to include numbers?");
  

  console.log(useSpecial);
  console.log(useUpper);
  console.log(useLower);
  console.log(useNumber);

  // if none were chosen
    if (useLower === false && useNumber === false && useSpecial === false && useUpper === false) {
      alert("Must choose at lease 1 character type!")
      writePassword()
    };

  // add all chosen chars to passwordArray array
    if (useSpecial) {
     passwordArray.push(...specialChars);
    };

    if (useLower) {
      passwordArray.push(...lowercaseLetters);
    };

    if (useUpper) {
      passwordArray.push(...uppercaseLetters);
    };

    if (useNumber) {
      passwordArray.push(...numbers);
    };
    console.log(passwordArray);

    // loop through function pwLength times, randomly choosing index in passwordArray and adding to passwordText

    for (i = 0; i < pwLength; i++) {
      var randomIndex = function(pwArrayLength) {
        return Math.floor(Math.random() * pwArrayLength);
      }
      passwordText.push(...passwordArray[randomIndex(passwordArray.length)]);
    };

    console.log(passwordText);


  // var password = generatePassword();

  var password = document.querySelector("#password");
  password.value = passwordText.join("");

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
