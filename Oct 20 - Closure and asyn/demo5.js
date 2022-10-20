function test() {
    // body...
    for(let i = 0; i < 3; i++){
        setTimeout(function exec(){
            console.log(`i: ${i}`);
        }, i*1000);
    }
}


test()

// let is block scope thats why
