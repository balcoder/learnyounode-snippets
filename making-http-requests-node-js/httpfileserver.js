// Write an HTTP server that serves the same text file for each request it
//  receives.
//
//  Your server should listen on the port provided by the first argument to
//  your program.
//
//  You will be provided with the location of the file to serve as the second
//  command-line argument. You must use the fs.createReadStream() method to
//  stream the file contents to the response.

var http = require('http');
var fs = require('fs');

const port = process.argv[2];
const filePath = process.argv[3];

// Node HTTP server
var server = http.createServer(function (req, res) {
  // request handling logic...
  res.writeHead(200, {'Content-Type': 'text/plain'});
  var readStream = fs.createReadStream(filePath);
  //readStream.pipe(res.write());
  readStream.pipe(res);
  //readStream.on('finish',)

})
server.listen(port)


//solution
// var http = require('http')
//    var fs = require('fs')
//
//    var server = http.createServer(function (req, res) {
//      res.writeHead(200, { 'content-type': 'text/plain' })
//
//      fs.createReadStream(process.argv[3]).pipe(res)
//    })
//
//    server.listen(Number(process.argv[2]))
//
// ────────────────────────────────────────────────────────
