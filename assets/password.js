var passwordLength 

function generate() {

passwordLength = prompt('How many characters on password would you like? (Choose between 8 to 125)');

if ((passwordLength >= 8) && (passwordLength <= 125)) {
    alert
    ('Your password will be ' + passwordLength + ' characters.');
    getParams()
}
else {
    alert
    ('Password character has to be greater than 8 characters and less than 125 characters.');
}
}

function getParams(){
var askLow = confirm("Do you want to add lower case letters?");
var askUp = confirm("Do you want to add upper case letters?");
var askNum = confirm("Do you want to add numbers?");
var askSpe = confirm("Do you want to add special characters?");
var charLow = 'abcdefghijklmnopqrstuvwxyz';
var charNum = '0123456789';
var charSpe = '~!@#$%^&*';
var charCap = charLow.toUpperCase();
var charMix = "";

charMix += askLow ? charLow : "";
charMix += askNum ? charNum : "";
charMix += askSpe ? charSpe : "";
charMix += askUp ? charCap : "";

if (!askLow && !askUp && !askNum && !askSpe) {
    alert ("You must choose at least one character type.");
}else{
    document.getElementById("display").value =  generatePW(passwordLength, charMix);
}
}

function generatePW(passwordLength, charMix) {
    var newPw = ""
        for (var i = 0; i < passwordLength; i++) {
            newPw += charMix.charAt(Math.floor(Math.random() * charMix.length)+1);
        }
    return newPw;
}

function copy() {
    var copyPw = document.getElementById("display");
    copyPw.select();
    document.execCommand("copy");
    alert("Random password " + copyPw.value + " is copied to clip board.");
}