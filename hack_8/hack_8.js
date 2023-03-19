/**
 * ["foo","bar","baz","qux","echo"] 
 * 
 * 1) anexar al array result los items [bar,baz,qux]
 * 2) los 2 primeros items reescribir el caracter "a" por @
 * modificar el último item "quz" a mayúscula
 *  
 * 
 * output => ["b@r","b@z","QUX"]   
 */
let arr = ["foo","bar","baz","qux","echo"];
let result = [];

// let palabras = arr.slice(1, 3);
// let palabraMayuscula = arr[3].toUpperCase();
// let arrFinal = [...palabras, palabraMayuscula];

// arrFinal.forEach( item => {
//   let reemplazo = item.replace('a', '@');
//   result.push(reemplazo);
// })

result = arr.splice(1, 3)
result = result.map(item => {
  if (item.startsWith('b') || item.startsWith('q')) {
    return (item.includes('a') ? item.replace('a', '@') : item.toUpperCase())
  }
})

//export result
module.exports = result;