var fs = require("fs"),
    parseString = require("xml2js").parseString,
    xml2js = require("xml2js");

const amendXml = (file) => { 
    fs.readFile(file, "utf-8", function(err, data) {
        if (err) console.log(err);
        console.log(data);
        parseString(data, function(err, result) {
            if (err) console.log(err);
            console.log(result);

            var json = result;

            json.root.graph[0].node[0].weight = "99";

            var builder = new xml2js.Builder();
            var xml = builder.buildObject(json);

            fs.writeFile(file, xml, function(err, data) {
                if (err) console.log(err);

                console.log(`XML updated at ${file}`);
            });
        });
    })
};

amendXml("test.xml");