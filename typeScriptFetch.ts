// This code will fetch data from below JSON:
// https://jsonplaceholder.typicode.com/todos/1

import axios from "axios";

const url = "https://jsonplaceholder.typicode.com/todos/1";

// Asynchronous promise:
axios.get(url).then(response => {
    const todo = response.data;

    const id = todo.id;
    const title = todo.title;
    const finished = todo.finished;


    console.log(`
    Todo ID: ${id}
    Title: ${title}
    Is to be finished by: ${finished}
    `)
});
