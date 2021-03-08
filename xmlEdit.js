fs = require("fs"),
parseString = require("xml2js").parseString;

var file = "./reed.xml";

// fs.readFile(file, "utf-8", function(err, data) {
//     if (err) console.log(err);
//         console.log(data);
//     parseString(data, function(err, result) {
//         if (err) console.log(err);
//         console.log(result);
//     });
// });

parseString(file, function(err, result) {
    console.log(result);
});