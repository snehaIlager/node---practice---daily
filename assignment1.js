const express = require("express");
const app = express();
app.use(express.json());

app.get("/student",(req,res) => {
    res.json({
        "name" : "sneha",
        "age" : 22,
        "course" : "bba"
    })
});

const students = [
    {id: 1, name: "sneha",age: 22},
    {id: 1, name: "sneha",age: 22},
    {id: 1, name: "sneha",age: 22}

];

app.get("/students",(req,res) => {
    res.json(students);
});

app.get("/students/:id",(req,res) => {
    const id = req.params.id;
    const student = students.find(s=> id == s.id);
    res.json(student);
});

app.post("/students",(req,res=>{
    const newStudent ={
        "name": req.body.name,
        "age":req.body.age
    };
    students.push(newStudent);
    res.json(newStudent);
}));