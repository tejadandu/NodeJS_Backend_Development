let id = setInterval(function (){
    console.log("task done again");
}, 3000);

setTimeout(function (){
    clearInterval(id);  // clearInterval is clear off the timer id
}, 13000);
