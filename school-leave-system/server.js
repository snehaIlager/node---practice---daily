const express = require ("express");
const app = express();

//middleware

//global middleware
app.use((req,res,next) =>{
 console.log("request received");
 next();
});

app.use((req,res,next) => {
    console.log(req.method, req.url);
    next();
})

//middleware for approve - leave
app.use("/approve-leave",(req,res,next)=>{
    console.log("teacher authorization check");
    next();
});

//routes
app.get("/",(req,res)=>{
    res.send("school leave API runing");
});

//leave requests
app.get("/leaves",(req,res)=>{
    res.send("All leave requests");
});

//apply leave
app.post("/apply-leave",(req,res)=>{
    res.send("leave request submitted");
});

//approve leave
app.post("/approve-leave",(req,res) => {
    res.send("leave approved");
});

app.listen(3000, () => {
    console.log("server is running on port 3000");
});

