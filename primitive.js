/* 
Data type :

// primitive
1.number
2.string
3.boolean
4.undefine
5.null
6.simbol

// non-primitive
7.object
*/

let a = 'hellow'
let b = a;
// console.log(a, b);
a = 'Galo';
// console.log(a, b);


// object 
const x = { job: 'web developer' };
const y = x;
console.log(x, y);
// x.job = 'font end developer';
y.job = 'font end developer';
console.log(x, y);
