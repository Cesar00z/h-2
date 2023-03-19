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

// arr.forEach( item => {
//   let lowerStr = item[0];
//   let upperStr = item[0].toUpperCase();
//   let str = item.replace(lowerStr, upperStr);
//   result.push(str);
// })

result = arr.map(str => {
  let upperLetter = str.charAt(0).toUpperCase()
  let lowerLetter = str.slice(1)
  return upperLetter.concat(lowerLetter)
})

//export result
module.exports = result;