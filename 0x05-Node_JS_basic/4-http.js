const { createServer } = require('http');

const app = createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello Holberton School!');
});

app.listen(1245, () => {
  console.log('Server listening on port 1245');
});

module.exports = app;
