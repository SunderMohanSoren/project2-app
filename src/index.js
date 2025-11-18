const http = require('http');
const port = process.env.PORT || 3000;
const version = process.env.APP_VERSION || 'dev';

const server = http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end(`Hello from Project-2! Version: ${version}\n`);
});

server.listen(port, () => {
  console.log(`Server running on port ${port}, version ${version}`);
});
