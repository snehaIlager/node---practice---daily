const expresss = require ("express");
const app = express();

//read json  midleware
app.use(express.json());

//global middleware
app.use((req,res,next) => {
    console.log("Request received");
    next();
}
);

//middleware
app.use((req,res,next) => {
    console.log(req.method,req.url);
    next();
});


//routes

//base route
app.get("/",(req,res)=>{
    res.send("student assignment api running");
});

const students = [];
app.post("/students",(req,res) => {
    const newStudent = {
        id : students.length + 1,
        name : req.body.name,
        course : req.body.course
    };
    students.push(newStudent);
    res.json(newStudent);
});

//get student by id

app.get("/students/:id",(req,res) =>{
    const id = req.params.id;
    const student = students.find(s=> s.id == id);
    res.json(student);
});

const newStudent = {
    id : students.length + 1,
    name : "name",
    course : "course"
};
students.push(newStudent);

