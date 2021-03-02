"use strict";
// This code will fetch data from below JSON:
// https://jsonplaceholder.typicode.com/todos/1
exports.__esModule = true;
var axios_1 = require("axios");
var url = "https://jsonplaceholder.typicode.com/todos/1";
// Asynchronous promise:
axios_1["default"].get(url).then(function (response) {
    console.log(response.data);
});
