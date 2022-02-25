/*
1.variable value not assigned
2. function but didn't write return anything 
3.Just wrote return but didn't return anything
4.Parameter that isn't passed
5.Property thak doesn't exist in an object
6.accessing array element out of range
7.accessing delete array element
8.explicitly set value to undefined

*/
let first;
// console.log(first)

function second(x, y) {
    const sum = x + y;
}

const result = second(14, 15);
console.log(result)