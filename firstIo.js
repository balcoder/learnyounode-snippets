var fs = require('fs');

var myPath = process.argv[2];

var stringBuff = fs.readFileSync(myPath).toString();

var lines = stringBuff.split("\n");

console.log(lines.length - 1)
