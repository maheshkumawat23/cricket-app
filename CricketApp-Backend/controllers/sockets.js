var uuid = require('uuid');
var sentiment = require('sentiment');



var users = [];
var history = [];
var HIST_THRS = 5;


module.exports = function (io) {

    io.sockets.on('connection', function (socket, username) {

        socket.on('connect', function (msg) {
            console.log('hi');
        });

        //socket.emit('message', 'You are connected!');

        //socket.broadcast.emit('message', 'Another client has just connected!');


        socket.on('little_newbie', function (username) {
            socket.username = username;
            var id = uuid.v4();
            socket.emit('id', id);

            users.push({ username: id, sckt: socket });

            if (history.length <= HIST_THRS) {
                history.map(function (obj) {
                    socket.emit('message', obj.username + "$$" + obj.comment);
                });
            } else {
                for (i = history.length - HIST_THRS; i < history.length; i++) {
                    socket.emit('message', history[i].username + "$$" + history[i].comment);
                }
            }
        });


        socket.on('message', function (message) {
            io.sockets.emit('message', message);

            var n = message.indexOf('$$');

            var uname = message.slice(0, n);
            var msg = message.slice(n + 2);

            history.push({ username: uname, comment: msg });

            //socket.broadcast.emit('message', message);

            //var res = sentiment(msg);
            //console.log(JSON.stringify(res, null, 4));
            //console.log(res.score);

        });


        socket.on('disconnect', function () {
            console.log('Client disconnected');
        });
    });
};