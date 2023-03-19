/**
 * [1,2,3,4,5]
 * ["foo","bar","baz","qux","echo"]
 * 
 * 1) incluir los 2 array en 1 solo array
 * 2) los items del number array 1,3,5 se reescriben one,three,five
 * del string array todos sus items mutan de acuerdo a lo siguiente:
 * foo => f00
 * bar => Bar
 * baz => b@z   
 * qux => quX
 * echo => 3ch0
 * 3) anexar al inicio, al final y entre la unión de los array el string "h@ck"
 * 
 * 
 * output => ["h@ck","one",2,"three",4,"five","h@ck","f00","Bar","b@z","quX","3ch0","h@ck"]   
 */
let numberArray = [1,2,3,4,5];
let stringArray = ["foo","bar","baz","qux","echo"];
let result = [];

let arr = [...numberArray, ...stringArray];


// for ( let item of arr ) {
//   switch ( item ) {
//     case 1:
//       item = "one";
//       break;
//     case 3:
//       item = "three";
//       break;
//     case 5:
//       item = "five";
//       break;
//     case "foo":
//       item = "f00";
//       break;
//     case "bar":
//       item = "Bar";
//       break;
//     case "baz":
//       item = "b@z";
//       break;
//     case "qux":
//       item = "quX";
//       break;
//     case "echo":
//       item = "3ch0";
//       break;
//   }
//   result.push(item)
// }
// result.unshift("h@ck");
// result.push("h@ck");
// result.splice(6, 0, "h@ck");

let mutar = {
  1: "one",
  3: "three",
  5: "five",
  foo: "f00",
  bar: "Bar",
  baz: "b@z",
  qux: "quX",
  echo: "3ch0"
};

result = arr.map(item => {
  for (let [k,v] of Object.entries(mutar)) {
    if ( item == k) {
      return item.toString().replace(k,v);
    }
  }
  return item;
})

let i = 0;
let limite = result.length - 1;
let mitad = Math.round(limite / 2) + 1;

for (; i <= limite; i++) {
  if (i == 0) {
    result.unshift("h@ck");
  } else if (i == mitad) {
    result.splice(i, 0, "h@ck");
  } else if (i == limite) {
    result.push("h@ck");
  }
}

//export result
module.exports = result;