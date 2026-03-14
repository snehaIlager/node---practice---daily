const express = require("express");
const router = express.Router();

const {getMovies, getMovieByID, createMovie, deleteMovie, updateMovie} = require("../controllers/movieController");

router.get("/",getMovies);
router.get("/:id",getMovieById);
router.post("/",createMovie);
router.delete("/:id",deleteMovie);
router.put("/:id",updateMovie);
router.get("/search",moviegenre);

module.exports = router;