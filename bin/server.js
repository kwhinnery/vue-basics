'use strict';

const http = require('http');
const app = require('../src/server/webapp');
const port = process.env.PORT || 3000;

let server = http.createServer(app);

server.listen(port, () => {
  console.log(`Express server listening on port *:${port}`);
});