function todo(task){
    setTimeout(function fun() {
        // body...
        console.log("Completed", task);
    }, 5000);
    task = "tejadandu";
    console.log("end of todo");
}

console.log("Starting");
todo("assignments");
console.log("Ending");
