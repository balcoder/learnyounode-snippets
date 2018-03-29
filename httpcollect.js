const http = require('http');
const concat = require('../../node_modules/concat-stream');

const url = process.argv[2];

http.get(url, (response) => {
  response.on('error', console.error);
  response.setEncoding("utf8");
  response.pipe(concat((data) => {
    console.log(data.length);
    console.log(data);
  }));  
}).on('error', console.error)



// solution
// var http = require('http')
//    var bl = require('bl')
//
//    http.get(process.argv[2], function (response) {
//      response.pipe(bl(function (err, data) {
//        if (err) {
//          return console.error(err)
//        }
//        data = data.toString()
//        console.log(data.length)
//        console.log(data)
//      }))
//    })
