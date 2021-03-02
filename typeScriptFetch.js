"use strict";
// This code will fetch data from below JSON:
// https://jsonplaceholder.typicode.com/todos/1
exports.__esModule = true;
var axios_1 = require("axios");
var url = "https://jsonplaceholder.typicode.com/todos/1";
// Asynchronous promise:
axios_1["default"].get(url).then(function (response) {
    var todo = response.data;
    var id = todo.id;
    var title = todo.title;
    var finished = todo.finished;
    console.log("\n    Todo ID: " + id + "\n    Title: " + title + "\n    Is to be finished by: " + finished + "\n    ");
});
