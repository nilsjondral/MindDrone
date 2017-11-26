var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var neurosky = require('node-thinkgear');

var started = false;
var paused = false;
var client;

io.on('connection', function (socket) {
    console.log('a user connected');

    socket.on('disconnect', function () {
        console.log('user disconnected');
    });

    socket.on('start', function () {
        console.log('start');
        if (!started) {
            client = neurosky.createClient({
                appName: 'NodeNeuroSky',
                appKey: '0fc4141b4b45c675cc8d3a765b8d71c5bde9390'
            })

            // bind receive data event
            client.on('data', function (data) {
                if (!paused) {
                    io.emit('data', data);
                }
                console.log(data, paused);
            });
            // initiate connection
            client.connect();
            started = true;
            console.log('neurosky client started');
        }
    });

    socket.on('pause', function () {
        console.log('pause', paused);
        paused = !paused;
    });
});

http.listen(3000, function () {
    console.log('listening on *:3000');
});
