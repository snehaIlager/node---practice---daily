const express = require("express");
const app = express();

//middleware for reading json
app.use(express.json());


app.post("/tasks",(req,res) => {
    const task = req.body.task;
    res.send(`task recieved: ${task}`);
});
app.listen(3000);

app.post("/echo",(req,res) => {
    const msg = req.body.msg;
    res.send(`You said :${msg}`);
});

//calculator add function
app.post("/add",(req,res)=>{
    const a = req.body.a;
    const b = req.body.b;
    const result = a + b;
    res.send(`result: ${result}`);
});

//route parameters
app.get("/student/ :name",(req,res) => {
    const name = req.params.name;
    res.send(`Hello ${name}`);
})

