// This works in nodejs
import fetch from 'node-fetch';

const theUrl = 'https://jsonplaceholder.typicode.com/todos/1';

function callback (result) {
    console.log(JSON.stringify(result, null, 2));
}

async function getFile(url, callback) {
    const response = await fetch(url);
    const myJson = await response.json();
    await callback(myJson);
    /* Or with traditional promise notation:
        fetch(url)
            .then(response => response.json())
            .then(json => callback(json));
    */
}

getFile(theUrl, callback);
