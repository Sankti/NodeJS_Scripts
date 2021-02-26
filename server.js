const express = require("express");

const app = express();

app.use(express.urlencoded({extended: false}));
app.use(express.json());

app.get("/:id", (req, res) => {

    console.log(req.params);

    res.status(404).send("Not found.");
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