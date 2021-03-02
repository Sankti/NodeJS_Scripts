// This code will fetch data from below JSON:
// https://jsonplaceholder.typicode.com/todos/1

import axios from "axios";

const url = "https://jsonplaceholder.typicode.com/todos/1";

// Asynchronous promise:
axios.get(url).then(response => {
    console.log(response.data);
});
