const express = require('express');
const server = express();

server.get('/', (request, response) => {
  response.send('Hello, World!');
});

server.listen(3000, () => {
  console.log('Server running at port 3000');
});
