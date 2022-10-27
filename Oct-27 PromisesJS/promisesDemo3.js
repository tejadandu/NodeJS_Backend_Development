function fetchData(url){
    return new Promise(function (resolve, reject) {
        // body...
        console.log("going to start teh download");
        setTimeout(function process(){
            let data = "Dummy downloaded data";
            console.log("download completed");
            resolve(data);
        }, 10000);
        console.log("Timer to mimic download started");
    });

}

console.log("Starting the program");
console.log("We are expecting to mimic a downloader");
x = fetchData("www.google.com");
console.log("Now promise object created successfully, but downloading still going on");
