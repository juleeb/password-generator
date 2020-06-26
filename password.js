function generate() {

var passwordLength = prompt('How many characters on password would you like? (Choose between 8 to 125)');

if ((passwordLength >= 8) && (passwordLength <= 125)) {
    alert
    ('Your password will be ' + passwordLength + ' characters.');
}
else {
    alert
    ('Password character has to be greater than 8 characters and less than 125 characters.');
}

var askLow = confirm("Do you want to add lower case letters?");
var askUp = confirm("Do you want to add upper case letters?");
var askNum = confirm("Do you want to add numbers?");
var askSpe = confirm("Do you want to add special characters?");

var newPw = '';

var charLow = 'abcdefghijklmnopqrstuvwxyz';
var charNum = '0123456789';
var charSpe = '~!@#$%^&*';
var charCap = charLow.toUpperCase();

var charMix = {
allChar : charLow + charNum + charSpe + charCap,
 a : charSpe + charNum + charLow,
 b : charSpe + charNum + charCap,
 c : charSpe + charLow + charCap,
 d : charNum + charLow + charCap,
 e : charSpe + charNum,
 f : charSpe + charLow,
 g : charSpe + charCap,
 h : charNum + charLow,
 j : charNum + charCap,
 k : charLow + charCap,
 l : charLow,
 m : charNum,
 n : charSpe,
 o : charCap,
}

function generatePW(passwordLength, charMix) {
        for (var i = 0; i < passwordLength; i++) {
            newPw += charMix.charAt(Math.floor(Math.random() * charMix.length)+1);
        }
}
if (askLow !== true && askUp !== true && askNum !== true && askSpe !== true) {
    alert ("You must choose at least one character type.");
}

else if (askLow == true && askUp == true && askNum == true && askSpe == true) {
    generatePW(passwordLength, charMix.allChar);
    }

else if (askLow == true && askUp !== true && askNum !== true && askSpe !== true) {
    generatePW(passwordLength, charMix.l );
    }

else if (askLow !== true && askUp == true && askNum !== true && askSpe !== true) {
    generatePW(passwordLength, charMix.o);
    }
else if (askLow !== true && askUp !== true && askNum !== true && askSpe == true) {
    generatePW(passwordLength, charMix.n);
    }
else if (askLow !== true && askUp !== true && askNum == true && askSpe !== true) {
    generatePW(passwordLength, charMix.m);
    }
else if (askLow !== true && askUp !== true && askNum !== true && askSpe == true) {
    generatePW(passwordLength, charMix.n);
    }
else if (askLow == true && askUp !== true && askNum == true && askSpe == true) {
    generatePW(passwordLength, charMix.a);
    }
else if (askLow !== true && askUp == true && askNum == true && askSpe == true) {
    generatePW(passwordLength, charMix.b);
    }
else if (askLow == true && askUp == true && askNum !== true && askSpe == true) {
    generatePW(passwordLength, charMix.c);
    }
else if (askLow == true && askUp == true && askNum == true && askSpe !== true) {
    generatePW(passwordLength, charMix.d);
    }
else if (askLow !== true && askUp !== true && askNum == true && askSpe == true) {
    generatePW(passwordLength, charMix.e);
    }
else if (askLow == true && askUp !== true && askNum !== true && askSpe == true) {
    generatePW(passwordLength, charMix.f);
    }
else if (askLow !== true && askUp == true && askNum !== true && askSpe == true) {
    generatePW(passwordLength, charMix.g);
    }
else if (askLow == true && askUp !== true && askNum == true && askSpe !== true) {
    generatePW(passwordLength, charMix.h);
    }
else if (askLow !== true && askUp == true && askNum == true && askSpe !== true) {
    generatePW(passwordLength, charMix.j);
    }
else if (askLow == true && askUp == true && askNum !== true && askSpe !== true) {
    generatePW(passwordLength, charMix.k);
    }
    
    document.getElementById("display").value = newPw;

}

function copy() {
    var copyPw = document.getElementById("display");
    copyPw.select();
    document.execCommand("copy");
    alert("Random password " + copyPw.value + " is copied to clip board.");
}