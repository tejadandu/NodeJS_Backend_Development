function a(name){
    return function b(){
        // body...
        console.log(name);
    }
}


let x = a("Teja");
for(let i = 0; i < 1000000000; i++){

}
console.log(x);
x();

// clousure is remembering the lexical scope of variable
