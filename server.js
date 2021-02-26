const express = require("express");

const app = express();

app.get("/profile", (req, res) => {
    const user = {
        name: "John",
        hobby: "Ornithology"
    }

    res.send(user)
})

app.get("/", (req, res) => {
    res.send("<h1>Root Directory</h1>")
})

app.listen(3000);