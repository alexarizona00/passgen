// Assignment Code by AA
var generateBtn = document.querySelector("#generate");
let lilLetters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
let bigLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"] // AA
let numeros = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
let symbols = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")"] //AA
let usableArray = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
let thePass = [];


function generatePassword() {
  let passLength = prompt("How long of a password do you need to generate?")
  let useCaps = confirm("Press OK to include Capital letters")//AA
  let useNumeros = confirm("Press OK to include numbers")
  let useSymbols = confirm("Press OK to include symbols")



  console.log(passLength)
  console.log(useCaps)
  console.log(useNumeros)
  console.log(useSymbols)

  if (useCaps) {
    usableArray = usableArray.concat(bigLetters)
  }

  if (useNumeros) {
    usableArray = usableArray.concat(numeros)
  }

  if (useSymbols) {
    usableArray = usableArray.concat(symbols)
  }

  console.log(usableArray)


   for (i = 0; i < passLength; i++) {
    thePass +=  usableArray[Math.floor(Math.random() * usableArray.length)]

    }



console.log(thePass)
  return thePass

}
// Write password to the #password input  AA 
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


// Add event listener to generate button  AA
generateBtn.addEventListener("click", writePassword);
