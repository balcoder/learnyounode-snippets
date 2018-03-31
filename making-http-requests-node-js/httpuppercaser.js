// Write an HTTP server that receives only POST requests and converts
//  incoming POST body characters to upper-case and returns it to the client.
//
//  Your server should listen on the port provided by the first argument to
//  your program.

const http = require('http');
const fs = require('fs');

const port = process.argv[2];
