const express = require("express");

const app = express();

app.get("/", (req, res) => {
    res.sendFile("./public/index.html", {root: __dirname});
});

app.get("/profile", (req, res) => {
    res.sendFile("./public/profile.html", {root: __dirname});
});

app.get('/api/projects', (req, res) => {
    res.send([1, 2, 3])
})



app.listen(3000, () => {
    console.log("Server listening on port 3000.");
});