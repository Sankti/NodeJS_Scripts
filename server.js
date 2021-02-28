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


// PORT
const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server listening on port ${port}.`);
});