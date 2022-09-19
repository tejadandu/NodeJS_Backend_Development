// types of operators

// arithmetic operators

console.log(10 + 4);    // 14 --> addition
console.log(10 - 4);    // 6 ---> substraction
console.log(10 * 4);    // 40 ---> multiplication
console.log(10 / 4);    // gives float value 2.5 ---> division
console.log(10 % 3);    // 1 ---> remainder


// Note if you want have floor divisions
// 1 way ---> parseInt(5/4)
console.log(parseInt(5/4));
// 2 way ---> Math.floor(5/2);
console.log(Math.floor(5/2));

// assignment operators

let x = 10;
x += 2; // x = x + 2
x -= 2; // x = x - 2
x *= 2; // x = x * 2
x /= 2; // x = x / 2
x %= 2; // x = x % 2


// logical operators
// &&(AND) , ||(OR), !(NOT)
// && first express evaluates --> True then always
// return second expresion statement is about to excute
console.log((10 > 3) && (7 < 6));   // first express ev
console.log((10 > 3) || (7 < 6));   // if first express evaluates to true always return first states of result

console.log( 4 && 0);   // 0
console.log( 4 || 0);   // 4
console.log(0 && 4);    // 0
console.log(0 || 4);    // 4

console.log(-0 && 9);
console.log(-0 || 9);
console.log(-4 || 5);



