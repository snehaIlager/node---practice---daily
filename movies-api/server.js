const express = require("express");
const app = express();
app.use(express.json());

const movieRoutes = require("./routes/movieRoutes");
app.use("/movies",movieRoutes);
app.listen(3000, () => {
    console.log("server running on port 3000");
})