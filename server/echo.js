var wss = new (require('ws')).Server({port: (process.env.PORT || 8080)});
var users = {};


console.log('listening on port: ' + 8080);

wss.on('connection', function connection(ws, req) {
    var userID = req.url.substr(1);
    users[userID] = ws;
    console.log(userID);
    var receiver = '';

	ws.on('message', function(message) {

        var msg = JSON.parse(message);
		console.log(msg);

        if ( msg['sender'] in users ) {
            receiver = users[msg['sender']];
            receiver.send(JSON.stringify(msg));
            if ( msg['receiver'] in users ) {
                receiver = users[msg['receiver']];
                receiver.send(JSON.stringify(msg));
            }
        }
	});

	console.log('new client connected!');

});