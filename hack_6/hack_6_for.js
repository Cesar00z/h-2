/**
 * mediante el loop for iterar cada una de las letras del string "fooziman"
 * debes anexar los caracteres de string al array result
 * ["f","o","o","z","i","m","a,"n"] 
 *
 *
 * output => ["f","o","o","z","i","m","a,"n"]
 */
let str = "fooziman";
let result = [];
let i = 0;
let limite = str.length
for (; i < limite; i++ ) {
  let letras = str[i];
  result.push(letras);
}

//export result
module.exports = result;