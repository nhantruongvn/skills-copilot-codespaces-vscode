// Create web server
// Create a web server that listens on port 3000. It should respond to requests to the /comments endpoint with a JSON string. The JSON string should have a key comments whose value is an array of strings.

const http = require('http');

const server = http.createServer((req, res) => {
  if (req.url === '/comments') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end('{"comments":["first comment","second comment","third comment"]}');
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not Found');
  }
});

server.listen(3000);