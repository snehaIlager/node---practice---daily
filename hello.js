function greet(name){
    console.log("Hello "+name);

}

greet("sneha");
greet("world");

function add(a,b){
    console.log("the sum is" + (a+b ))
}
add(5,10);

//arrays
let notes = [];
notes.push("a");
notes.push("b");
console.log(notes);

//objects
let user = {
    id : 1,
    name : "sneha",
    role: "student"

};
console.log(user.name);
console.log(user.role);
console.log(user.id);