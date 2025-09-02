
const http = require('http');
const PORT = 3000;
const server = http.createServer((req, res) => {
  if (req.url === '/') {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello World');
} else {
  res.writeHead(404);
  res.end('Page Not Found');
}
});

server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
