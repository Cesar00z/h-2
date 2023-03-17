/**
 * mediante el loop for agregar los números 1,3,5,7
 * dentro del array result 
 * 
 * 
 * output => [1,3,5,7]
 */
let result = [];

let i = 0;
let limite = 7;
for (; i <= limite; i++ ) {
  if (i % 2 == 1) {
    result.push(i);
  }
}
//export result
module.exports = result;