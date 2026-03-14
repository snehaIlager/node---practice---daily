
const app = express();
app.use(express.json());

let notes = [{id: 1, text: "studeynote"},
    {id:2,text:"build project"}
]

exports.getNotes = (req,res) => {
    res.json(notes);
};

exports.getNoteByid = (req,res)=>{
    const id = Number(req.params.id);
    const note = notes.find(n => n.id === id);
    res.json(note);
};

exports.createNote = (req,res) => {
    const newNote = {
        "id": new notes.length+1,
        "text" : req.body.text
    };
    notes.push(newNote);
    res.json(newNote);
}

exports.deleteNote = (req,res) => {
    const id = Number(req.params.id);
    const index = notes.findIndex(n => n.id === id);
    if(index !== -1){
        const deletedNote = notes.splice(index,1);
        res.status(200).json({message: "note deleted"});
    }else{
        res.status(404).json({message: "note not found"});
    }
}