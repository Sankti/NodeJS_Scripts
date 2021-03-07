fs = require("fs"),
parseString = require("xml2js").parseString;

fs.readFile("reed.xml", "utf-8", function(err, data) {
    if (err) console.log(err);
        console.log(data);
    parseString(data, function(err, result) {
        if (err) console.log(err);
        console.log(result);
    });
});