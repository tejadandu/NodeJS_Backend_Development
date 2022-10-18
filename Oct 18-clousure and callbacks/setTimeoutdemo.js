
let id1 = setTimeout(function execute(){
    // some task
    console.log("task completed 1");
}, 10000);

let id2 = setTimeout(function execute2(){
    console.log("task completed 2");
    clearTimeout(id1);  // stop the clear the timer off id2
}, 5000);


