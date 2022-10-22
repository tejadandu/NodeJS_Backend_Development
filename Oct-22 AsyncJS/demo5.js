function fun(){
    console.log("Fun called");
    setTimeout(function exec1(){
        console.log("Inside the 5s timeout");

    }, 5000);
    setTimeout(function exec3(){
        console.log("Inside the 3s timeout");

    }, 3000);
}
fun();
setTimeout(function exec2(){
    console.log("last  7s timeout");
},0);
