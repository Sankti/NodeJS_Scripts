const express = require("express");

const app = express();

app.get("/", (req, res) => {
    const user = {
        name: "John",
        hobby: "Ornithology"
    }

    res.send(user)
})

app.listen(3000);