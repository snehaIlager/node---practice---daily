//TASK 1
let students = []
function addStudent (name, grade,age){
const student ={
    id :student.length +1,
    name : name,
    grade : grade,
    age: age,
    isActive : true

}
if (name === ""){
   console.log("name cannot be empty");
   return;

}
if ( age < 5){
    console.log("invalid age");
    return;
}
students.push(student);
}

addStudent("sneha", "A",2);
addStudent("", "C", 19);
console.log(students);

function getAllStudents(){
    
}