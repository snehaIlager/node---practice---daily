let tasks = [
    {id:1 , title:"learn express", completed:false},
    {id:2 , title:"build API", completed: false}
];

exports.getTasks = (req,res) =>{
    res.json(tasks);
};

exports.getTaskById = (req,res)=>{
    const id = Number(req.params.id);
    const task = tasks.find(t=> t.id === id);
    res.json(task);
};

exports.createTask = (req,res)=>{
    const newTask = {
        id: tasks.length+1,
        title: req.body.title,
        completed: false
    };
    tasks.push(newTask);
    res.json(newTask);
};

exports.deleteTask = (req,res)=>{
    const id = Number(req.params.id);
    const index = tasks.findIndex(t =>  t.id === id);
    if(index !== -1){
        const deletedTask = tasks.splice(index,1);
        res.status(200).json({message: "task deleted"});
    }
    else{
        res.status(404).json({message: "task not found"});
    }
};

exports.updateTask = (req,res)=>{
    const id = Number(req.params.id);
    const task = tasks.find(t => t.id === id);
    if(task){
        task.name = req.body.name !== undefined ? req.body.name : task.name;
        task.completed = req.body.completed !== undefined ? req.body.completed : task.completed;
        res.json(task);
    }   else{
        res.status(404).json({message: "task not found"});
    }
}