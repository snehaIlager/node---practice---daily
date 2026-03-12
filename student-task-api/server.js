const express = require ("express");
const app = express();

//json middleware
app.use(express.json());

//global middleware
app.use((req,res,next) =>{
    console.log("request received");
    next();
});

app.use((req,res,next) => {
 console.log(req.method, req.url);
 next();});

 //routes
 //base route
 app.get("/",(req,res)=>{
    res.send("Student Task API Runnning");
 });

 //all tasks
 app.get("/tasks",(req,res)=>{
    res.send("ALL student tasks");
 })

 //create a task
 app.post("/tasks",(req,res) => {
    res.send("task created uccessfully");
 });

 //update a task 
 app.put("/tasks/:id",(req,res) =>{
    res.send(`TASK ${req.params.id} UPDATED`);
 });

//delte a task
app.delete("/tasks/:id",(req,res,next)=>{
    console.log("admin authorization check");
    next();
}
,(req,res)=>{res.send(`task ${req.params.id} deleted`);});

app.listen(3000 ,() => {
    console.log("server running on port 3000");
});