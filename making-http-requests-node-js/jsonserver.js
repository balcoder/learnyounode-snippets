const http = require('http');
const url = require('url');
const port = process.argv[2];

const server = http.createServer((request, response) => {
  const myUrlObj = url.parse(request.url,true);
  const urlPath = myUrlObj.pathname;
  console.log(urlPath);
  if(urlPath === '/api/parsetime') {

    const time = myUrlObj.query.iso;
    const date = new Date(time);
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    const parsedTime = {"hour": hours,"minute": minutes,"second": seconds};

    response.writeHead(200, {'Content-Type':'text/plain'});
    console.log(parsedTime);
    response.write(JSON.stringify(parsedTime));
    response.end();
  } else {
      const time = myUrlObj.query.iso;
      const date = new Date(time);
      const unixtime = date.getTime();
      const parsedTime = {"unixtime": unixtime};
      response.writeHead(200, {'Content-Type':'text/plain'});

      response.write(JSON.stringify(parsedTime));
      response.end();
      }
})
server.listen(port);


// solution
// var http = require('http')
//    var url = require('url')
//
//    function parsetime (time) {
//      return {
//        hour: time.getHours(),
//        minute: time.getMinutes(),
//        second: time.getSeconds()
//      }
//    }
//
//    function unixtime (time) {
//      return { unixtime: time.getTime() }
//    }
//
//    var server = http.createServer(function (req, res) {
//      var parsedUrl = url.parse(req.url, true)
//      var time = new Date(parsedUrl.query.iso)
//      var result
//
//      if (/^\/api\/parsetime/.test(req.url)) {
//        result = parsetime(time)
//      } else if (/^\/api\/unixtime/.test(req.url)) {
//        result = unixtime(time)
//      }
//
//      if (result) {
//        res.writeHead(200, { 'Content-Type': 'application/json' })
//        res.end(JSON.stringify(result))
//      } else {
//        res.writeHead(404)
//        res.end()
//      }
//    })
//    server.listen(Number(process.argv[2]))
