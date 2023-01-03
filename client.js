const dgram = require('dgram');

const HOST = '0.0.0.0';
const PORT = 30001;
const message = new Buffer('My KungFu is Good!');
const client = dgram.createSocket('udp4');

client.send(message, 0, message.length, PORT, HOST, function(err, bytes) {
    if (err) throw err;
    console.log('UDP message sent to ' + HOST +':'+ PORT);
    client.close();
});