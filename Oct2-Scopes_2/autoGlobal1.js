var teacher = "Teja";
function fun() {
    var teacher = "Dandu";
    console.log(teacher, teachingAssistant);
    teachingAssistant = "Mama"; // eligible for becoming autoglobal

}

function gun() {
    var student; // scope of gun
    console.log(subject, typeof subject);
    var subject = "Javascript";
    console.log(teacher, student);
}


console.log(teacher);
gun();
