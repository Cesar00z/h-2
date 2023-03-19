/**
 * ["foo","bar","baz","qux","echo","octo","cat","foobar","quux"]
 * 
 * anexar al array result los items con los indices impares
 * formula (n % 2 == 1) para obtener un indice impar
 * 
 * example =>
 * if(indice % 2 == 1){
 *   ...
 * }  
 * 
 * 
    output => ["bar","qux","octo","foobar"]   
 */
let arr = ["foo","bar","baz","qux","echo","octo","cat","foobar","quux"];
let result = [];

// arr.forEach( ( item, index ) => {
//    if ( index % 2 == 1 ) result.push(item)
// })

let i = 0;
let limite = arr.length
for(; i < limite; i++) {
   if (i % 2 !== 0) {
      console.log(arr[i])
      result.push(i);
   }
}

//export result
module.exports = result;