const express = require("express");

const app = express();

app.get("/", (req, res) => {
    res.sendFile("./public/index.html", {root: __dirname});
});

app.get("/profile", (req, res) => {
    res.sendFile("./public/profile.html", {root: __dirname});
});

// PROJECTS
app.get('/api/projects', (req, res) => {
    res.send([1, 2, 3]);
});

// PROJECT ID's
app.get('/api/projects/:id', (req, res) => {
    res.send(req.params.id);
});


// PORT
const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server listening on port ${port}.`);
});



// XML Read & Write Test
var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

app.get("/breakfast", (req, res) => {
    res.sendFile("./reed.xml", {root: __dirname});
});

function amendFile() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        document.getElementById("demo").innerHTML = this.responseText;
    };
    xhttp.open("GET", "ajax_info.txt", true);
    xhttp.send();
}

amendFile();