function fun(){
    console.log(x); // due to lexical scoping
    var x = 10;
    console.log(x);
}
{
    var y = 8; // becomes global due to var
}
console.log(y);

if(true){
    var z = 30;

}
if(false){
    var a = 20;
}
console.log(z);
console.log(a);
console.log(x); // x is not global scope
fun();
