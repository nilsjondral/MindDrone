var neurosky = require('node-neurosky');
var WebSocketServer = require('ws').Server
var wss = new WebSocketServer({port: 8080});
var client;

// broadcast function (broadcasts message to all clients)
wss.broadcast = function(data) {
    for (var i in this.clients) {
        this.clients[i].send(JSON.stringify(data));
    }
};

// bind each connection
wss.on('connection', function(ws) {
    ws.on('message', function(message) {
        console.log('[CLIENT] %s', message);
    });
    ws.send('You are connected to Mindwave Mobile');
});

wss.on('start', function(ws) {
    client = neurosky.createClient({
        appName:'NodeNeuroSky',
        appKey:'0fc4141b4b45c675cc8d3a765b8d71c5bde9390'
    })
    
    // bind receive data event
    client.on('data',function(data){
        
        console.log(data);
    });
    // initiate connection
    client.connect();
});

wss.on('stop', function(ws) {
    client.destory();
});