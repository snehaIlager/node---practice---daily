let movies = [
    {id:1, title:"inception", genre:"sci-fi",rating:9},
    {id:2, title:"titanic",genre:"romance",rating:8}
]

exports.getMovies = (req,res)=>{
    res.json(movies);

}

exports.getmovieById = (req,res)=>{
    const id = Number(req.params.id);
    const movie = movies.find(m => m.id === id);
    res.json(movie);
}

exports.createMovie = (req,res)=>{
    const newMovie = {
        id: movies.length+1,
        title: req.body.title,
        genre: req.body.genre,
        rating :req.body.rating
    };
    movies.push(newMovie);
    res.json(newMovie);
}

exports.deleteMovie = (req,res)=>{
    const id = Number(req.params.id);
    const index = movies.find(m=> m.id === id);
    if(index !== -1){
        const deletedMovie = movies.splice(index,1);
        res.status(200).json({message:"movie deleted"});
    }
    else{
        res.status(404).json({message:"movie not found"});
    }
};

exports.moviegenre = (req,res) =>{
    const genre = req.query.genre;
    const filteredMovies = movies.filter( m => m.genre === genre);
    res.json(filteredMovies);
}