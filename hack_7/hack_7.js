/**
 * ["foo","bar","baz","qux","echo"] 
 * 
 * modificar a mayúscula el primer caracter de cada item string del array
 *  
 * 
 * output => ["Foo","Bar","Baz","Qux","Echo"]   
 */
let arr = ["foo","bar","baz","qux","echo"];
let result = [];

arr.forEach( item => {
  let primeraLetraMinuscula = item[0];
  let primeraletraMayuscula = item[0].toUpperCase();
  let palabras = item.replace(primeraLetraMinuscula, primeraletraMayuscula);
  result.push(palabras);
})

//export result
module.exports = result;