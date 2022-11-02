var teacher = "Teja";
function fun() {
    var teacher = "Dandu";
    teachingAssistant = "Mama";
    console.log(teacher);
    console.log(teachingAssistant);
}


console.log(teachingAssistant);  // referenced Error
fun();
console.log(teacher); // Teja
