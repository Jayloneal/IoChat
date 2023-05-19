const express = require("express");
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = require("socket.io")(server);

app.get('/', (req, res) => {
    //route for localhost:3001/
    res.sendFile(__dirname + "/index.html");
});

io.on('connection', (socket) => {
    // Sending a message to everyone and yourself!
    socket.on('chat message', (msg) => {
        io.emit('chat message', msg);
        });
    });

server.listen(3001, () => {
console.log("Server is listening!");
});