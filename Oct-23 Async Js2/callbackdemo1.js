function fetchCustom(url, fn) {  // we are mimicing the function
    // download the content of the url
    //
    // body...



    console.log("Starting downloading from", url);
    setTimeout(function process(){
        console.log("Download completed");
        let response = "Dummy data";
        fn(response);
        // console.log("Ending the function");
    }, 3000)
}


// Tasks:
// 1. Write a function to download data from a url
// 2. Write a function to save that downloaded data in a file and return the filename
// 3. Write a function to upload the file written in previous step to a newurl


function writeFile(data, fn){
    console.log("Started writing data");
    setTimeout(function process(){
        console.log("Writing completed");
        let filenameResponse = "output.txt";
        fn(filenameResponse);
        // console.log("writing ended");
    }, 4000);
}


function uploadFile(filename, newurl, fn) {
    // body...
    console.log("Uploaded started");
    setTimeout(function process() {
        // body...
        console.log("File", filename, "Uploaded successfully on ", newurl)
        let uploadResponse = "SUCCESS";
        fn(uploadResponse);
        // console.log("upload ended")
    }, 2000)
}


fetchCustom("www.google.com", function downloadCallback(response){
    console.log("Downloaded response is", response);
    writeFile(response, function writeCallback(filenameResponse) {
        console.log("New file written is", filenameResponse);
        uploadFile(filenameResponse, "www.drive.google.com", function uploadCallback(uploadResponse) {
            console.log("Successfully uploaded", uploadResponse);
            // body...
        })
        // body...
    })
})

