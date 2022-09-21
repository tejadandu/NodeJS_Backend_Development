function fun(x) {
    // body...
    console.log(x + 10);
    return x * 10;
}

let x = fun(10);
console.log(x);


//
function print(x) {
    // body...
    x += 10;
    return x;
}
let rv = print(10);
console.log(rv);


// returns statement terminates the function
// return statement not used then undefined is printedon screen
// console.log()
console.log(10);
console.log(console.log(10));

//
let y = console.log;
y(9);
