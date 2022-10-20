function test() {
    // body...
    for(var i = 0; i < 3; i++){
        setTimeout(function exec(){
            console.log(`i: ${i}`);
        }, i*1000);
    }
}


test()
// var is function scope that is why
// i: 3
// i: 3
// i: 3
