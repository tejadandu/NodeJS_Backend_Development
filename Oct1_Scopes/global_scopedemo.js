let name = 'teja';

function greet() {
    // body...
    console.log("greetings:", name);
    var x = 10;
    function test() {
        // body...
        console.log("test!", x);
    }
    test();
    console.log(x);
}

function fun() {
    // body...
    console.log("have fun!:", name);
}

greet();
fun();
// console.log(x);
