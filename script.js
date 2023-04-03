// Assignment Code
var generateBtn = document.querySelector("#generate");
function generatePassword(){
  var length = prompt("Chose password length between 8 and 128 charcters");
  if(isNaN(length)) {
    alert("Must chose a number");
    return;
  }

  if(length < 8 || length > 128) {
    alert("Must choose a number between 8 and 128.")
    return;
  }

  var lower = confirm("Would you like lowercase in your password?");
  var upper = confirm("Would you like uppercase in your Password?");
  var numb = confirm("Would you like numbers in your password?");
  var spec = confirm("Would you like special characters in you password?");

  if(!lower && !upper && !numb && !spec) {
    alert("You must have atleast 1 character type.")
    return
  }
  
  var lowerLet = "abcdefghijklmnopqrstuvwxyz";
  var upperLet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  var specLet = "!@$%?*."
  var num = "1234567890";
  var conf = ""
  passwordText = ""

  if(lower) {
    conf += lowerLet
  }

  if(upper) {
    conf += upperLet
  }

  if(numb) {
    conf += num
  }

  if(spec) {
    conf += specLet
  }
  
  for(var i = 0; i < length; i++) {
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
