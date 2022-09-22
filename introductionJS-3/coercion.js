//
console.log(1 - "-1");
console.log(1 - "1");

console.log("stirng" + "ster1");
console.log("1" - "1");

console.log(undefined + "10");  //'undefined10'
console.log("123" + null);  // '123null'

console.log(undefined + 10);    //NaN

console.log(null + 10);
console.log(typeof NaN);

console.log(1 - "abcd");

console.log(1 / "-1");
console.log(1 * null);
console.log(1 ** null);
console.log(NaN - NaN);
console.log(3 / 0);
console.log(3 / "abcd");
console.log(true - 8);  // true converted to 1
console.log(false - 8); // false converted to 0

// "" ---> 0
// "0" ---> 0
// "-0" ---> -0
// "3.145" --> 3.145
// "0." --> 0
// "12 + 3" ---> NaN
// [null] --> 0
// [undefined] --> 0
// ["0"] --> 0
// ["-0"] -->
// "acalskdj" ---> NaN




console.log("abc" - 5);

console.log("a" - 4);
console.log(true - "false");
console.log(false - false);
console.log(false - "true");
console.log(false - true);


console.log([null] - 0);
console.log(10 - "070");
console.log("070" - 10);
console.log("10" - "070");

console.log(10 - {"a": 10});
// use of valueOf
console.log(10 - {"a": 10, valueOf() {return 5;}});

console.log( 10 - undefined);
console.log({"x":2, "x":3});



console.log(45 + {"a": 56});    // '45[object Object]'
console.log(45 - {"a": 10});    // NaN
