function test() {
    // body...
    for(var i = 0; i < 3; i++){
        let j = i;
        setTimeout(function exec(){
            console.log(`j: ${j}`);
        }, j*1000);
    }
}


test()

// let is block scope thats why
