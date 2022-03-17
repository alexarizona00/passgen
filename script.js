// Assignment Code by AA
var generateBtn = document.querySelector("#generate");
let lilLetters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
let bigLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"] // AA
let numeros = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
let symbols = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")","!", "@", "#", "$", "%", "^", "&", "*", "(", ")"] //AA
let usableArray = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
let thePass = [];


function generatePassword() {
  let passLength = prompt("How long of a password do you need to generate?")
  if(passLength < 8 ){
    alert("You need a minimum of 8 characters for your password!")
      return thePass     
  }
  else if(passLength > 128){
    alert("Your password cannot be more than 128 characters!")
      return thePass    
  }
  else{
  let useCaps = confirm("Press OK to include Capital letters")//AA
  let useNumeros = confirm("Press OK to include numbers")
  let useSymbols = confirm("Press OK to include symbols")
  


  console.log(passLength)
  console.log(useCaps)
  console.log(useNumeros)
  console.log(useSymbols)
// these if statements check to see what chars they want in their password and adds them to an array that the for loop will eventually iterate through
  if (useSymbols) {
    usableArray = usableArray.concat(symbols)
    
  }
  if (useCaps) {
    usableArray = usableArray.concat(bigLetters)
  }
  if (useNumeros) {
    usableArray = usableArray.concat(numeros)
  }
 
  console.log(usableArray)

  for (i = 0; i < passLength; i++) {
    thePass += usableArray[Math.floor(Math.random() * usableArray.length)]

  }
}

// this stores the password in another variable to return, so that we can reset the variables to initial values in case they run app back to back
let displayedPass = thePass;
thePass = [];
usableArray= ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']; 


  return displayedPass;
}
// Write password to the #password input....  not written by AA, but much appreciated by him
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


// not written by AA, but much appreciated by him. Add event listener to generate button  
generateBtn.addEventListener("click", writePassword);
