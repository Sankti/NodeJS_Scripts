// This code will fetch data from below JSON:
// https://jsonplaceholder.typicode.com/todos/1

import axios from "axios";

const url = "https://jsonplaceholder.typicode.com/todos/1";

interface Todo {
    id: number;
    title: string;
    completed: boolean;
}

// Asynchronous promise:
axios.get(url).then(response => {
    const todo = response.data;

    const id = todo.id;
    const title = todo.title;
    const completed = todo.completed;


    console.log(`
    Todo ID: ${id}
    Title: ${title}
    Has it been finished: ${completed}
    `)
});
