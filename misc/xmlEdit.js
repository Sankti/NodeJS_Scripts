fs = require("fs"),
parseString = require("xml2js").parseString;

var xmlFile = "./reed.xml";

myFunction = (file) => {
    fs.readFile(file, "utf-8", function(err, data) {
        if (err) console.log(err);
            console.log(data);
        parseString(data, function(err, result) {
            if (err) console.log(err);
            console.dir(result);
            return result;
        });
    });
};

console.log(myFunction(xmlFile));

let jsonFile = myFunction(xmlFile);
console.log(jsonFile);

// parseString(file, function(err, result) {
//     console.dir(result);
// });