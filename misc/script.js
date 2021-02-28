const fs = require("fs");

fs.readFile("./hello.txt", (err, data) => {
    if (err) {
        throw err;
    };
    console.log("Asynchronous:", data.toString("utf8"));
});

const file = fs.readFileSync("./hello.txt");
console.log("Synchronous:", file.toString());