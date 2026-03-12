const express = require("express");
const app = express();

app.use((req, res, next) => {
    console.log("First middleware");
    next();
});

app.use((req, res, next) => {
    console.log("Second middleware");
    next();
});

app.get("/", (req, res) => {
    res.send("hello");
});

app.listen(3000, () => {
    console.log("server is running on port 3000");
});