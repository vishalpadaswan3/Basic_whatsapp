const express = require('express');
const { Server } = require('socket.io');
const http = require('http');


const app = express();

const httpServer = http.createServer(app);

httpServer.listen(3000);

const wss = new Server(httpServer);

wss.on('connection', (socket) => {
    console.log('client connected');

    socket.on('msg', (data) => {
        console.log(data);
        socket.broadcast.emit('msg', data);
    });
});


app.get('/', (req, res) => {
    res.send('Welcome to the backend !');
});