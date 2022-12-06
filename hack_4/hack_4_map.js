/**
 * mediante el map for agregar los números 1,3,5,7
 * dentro del array result 
 * 
 * 
 * output => [1,3,5,7]
 */
let result = [];
let i = 0;

let numeros = []
for (; i <= 7; i++ ) {
  if ( i % 2 == 1) numeros.push(i);
};

result = numeros.map( n => n );

//export result
module.exports = result;