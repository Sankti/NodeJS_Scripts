"use strict";
exports.__esModule = true;
var fs = require('fs');
fs.readFile('./reed.xml', 'utf8', function (err, data) {
    if (err) {
        console.error(err);
        return;
    }
    console.log(data);
});
