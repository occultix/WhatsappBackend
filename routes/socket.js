var express = require('express');
// var router = express.Router();
var socket = require('socket.io');
var app = express();

/* start Socket*/
//socket.io

server = app.listen(5001, function () {
  console.log('socket run 5001')
})
io = socket(server);

io.on('connection', (socket) => {
  console.log(socket.id);

  socket.on('SEND_MESSAGE', function (data) {
    io.emit('RECEIVE_MESSAGE', data);
  })
});
// catch 404 and forward to error handler

module.exports = app;
