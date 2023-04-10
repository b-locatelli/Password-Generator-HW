// Assignment Code
var generateBtn = document.querySelector("#generate");

// function for generated passowrd
function generatePassword(){
  // chose character amount
  var length = prompt("Chose password length between 8 and 128 charcters");
  // makes sure you pick a number no strings
  if(isNaN(length)) {
    alert("Must chose a number");
    return null;
  }

  // Declines numbers over 128 and under 8
  if(length < 8 || length > 128) {
    alert("Must choose a number between 8 and 128.")
    return null;
  }

  // asks the user what characters they want in their password
  var lower = confirm("Would you like lowercase in your password?");
  var upper = confirm("Would you like uppercase in your Password?");
  var numb = confirm("Would you like numbers in your password?");
  var spec = confirm("Would you like special characters in you password?");

  // makes sure atleast one character is chosen
  if(!lower && !upper && !numb && !spec) {
    alert("You must have atleast 1 character type.")
    return null;
  }

  // my variables
  var lowerLet = "abcdefghijklmnopqrstuvwxyz";
  var upperLet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  var specLet = "!@$%?*."
  var num = "1234567890";
  var conf = ""
  passwordText = ""

  // combines variables so all characters chosen can be used in the generated password
  if(lower) {
    conf += lowerLet
    passwordText += lowerLet.charAt(Math.floor(Math.random() * lowerLet.length))
  }

  if(upper) {
    conf += upperLet
    passwordText += upperLet.charAt(Math.floor(Math.random() * upperLet.length))
  }

  if(numb) {
    conf += num
    passwordText += num.charAt(Math.floor(Math.random() * num.length))
  }

  if(spec) {
    conf += specLet
    passwordText += specLet.charAt(Math.floor(Math.random() * specLet.length))
  }
  
  for(var i = passwordText.length; i < length; i++) {
  passwordText += conf.charAt(Math.floor(Math.random() * conf.length))
  }
  return passwordText
};

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
