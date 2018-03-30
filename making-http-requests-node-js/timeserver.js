var net = require('net');


var getTime = function(){
  //zero fill days, months, hours and minutes
  var date = new Date();
  var year = date.getFullYear();
  var days = ( '0'  + date.getDate()).slice(-2);
  var month = ( '0'  + (date.getMonth() + 1)).slice(-2);
  var hours =( '0'  + date.getHours()).slice(-2);
  var minutes =( '0'  + date.getMinutes()).slice(-2);

  var time = year + "-" + month + "-" + days + " " + hours + ":" + minutes + "\n";
  return time;
}

var server = net.createServer(function (socket) {
 socket.end(getTime());
})

server.listen(process.argv[2]);
