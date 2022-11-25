/**
 * mediante el loop map agregar los números 7,5,3,1
 * dentro del array result 
 * 
 * 
 * output => [7,5,3,1]
 */
let result = [];

let i = 7;
let numeros = [];
for (; i >= 1; i-- ) {
  if ( i % 2 == 1) numeros.push(i)
}

result = numeros.map( n => n );

//export result
module.exports = result;