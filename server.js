const express = require("express");

const app = express();

app.use(express.urlencoded({extended: false}));
app.use(express.json());

app.get("/", (req, res) => {
    res.send("<h1>Root Directory</h1>");
});

app.get("/profile", (req, res) => {
    console.log(req.body);
    const user = {
        name: "John",
        hobby: "Ornithology"
    };

    res.send(user);
});

app.post("/profile", (req, res) => {
    console.log(req.body);
    res.send("Success");
});

app.listen(3000);