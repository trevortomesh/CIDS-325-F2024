const express = require('express');

const app = express(); // Create an express application

app.get('/', (req,res) => {
    res.send('This is the main route');
});

app.get('/hello', (req,res) => {
    res.send('Hello, World!');
});

app.get('/users/:id', (req,res) => {
    const userId = req.params.id;
    res.send(`User ID: ${userId}`);
})

app.listen(3000, () => {
    console.log('Server running at http://localhost:3000/');
});

// const http = require('http');
//
// const server = http.createServer((req,res) =>{
// 	res.statusCode = 200;
// 	res.setHeader('Content-Type', 'text/plain');
// 	res.end('Hello, World!\n');
// });
//
// server.listen(3000,'127.0.0.1',()=>{
// 	console.log('Server running at http://127.0.0.1:3000');
// })
