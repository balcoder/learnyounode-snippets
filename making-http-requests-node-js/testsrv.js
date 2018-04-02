const http = require('http');

const server = http.createServer((request, response) => {
  response.writeHead(200, {'Content-Type': 'text/plain'});
  response.write("You got a server baby!");
  response.end()
});
server.listen(3000);
