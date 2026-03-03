let notes =[]
function addNote(title){
const note = {
    id : notes.length +1 ,
    title : title,
    completed : false
}
notes.push(note);
}

addNote("eheh");
addNote("haha");

console.log(notes);

function markCompleted(id){
    const note = notes.find( n => n.id === id);
    if(note){
        note.completed = true;
    }
    else{
        console.log("note not found");
    }
}

markCompleted(1);
markCompleted(3);
console.log(notes);

function deleteNote(id){
    notes = notes.filter( n => n.id !== id);
}

deleteNote(1);
console.log(notes);

function findNote(title){
    const note = notes.find( n => n.title === title);
    if(note){
        console.log("note found");
    }
    else{
        console.log("note not found");
    }
}

findNote("haha");

