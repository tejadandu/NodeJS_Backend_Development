function fun(inputString, fn){
    // executes some algorithm on the string
    let output = inputString.split(',');  // output is an array
    for(let i = 0; i < output.length; i++){
        fn(output[i]);
        fn(output[i])
    }
}



fun("name:sanket,subject:cse",function process(ip){
    let arr = ip.split(":");
    console.log("{", arr[0], "=>", arr[1],"}")
})
