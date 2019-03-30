const serverPort = 3000;
const http = require('http');
const routes = require('./routes');

const server = http.createServer(routes.handler);

//1) Spin up a Node.js Server (on port 3000)
server.listen(serverPort);