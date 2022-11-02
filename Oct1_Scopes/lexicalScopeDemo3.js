var teacher = "Teja";

function fun() {
    // body...
    console.log(subject); // auto global
    var teacher = "Dandu";
    var subject = "Javascript";
    teachingAssistant = "Khasim";
    console.log(teacher);
    console.log(teachingAssistant);


}


// console.log(teachingAssistant);
fun();
console.log(teachingAssistant);
console.log(teacher);  // Teja
