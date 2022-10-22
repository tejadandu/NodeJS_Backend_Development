function process() {
    // body...
    console.log("Start");
    setTimeout(function exec() {
        // body...
        console.log("Executed some task1")
    }, 10000);
    setTimeout(function exec() {
        // body...
        console.log("Executed some task2")
    }, 5000);
    for(let i = 0; i < 100000000; i++){

    }
    console.log("End");
}


process();
console.log("TATA");
