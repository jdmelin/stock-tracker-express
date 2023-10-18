const http = require('http');
const express = require('express');
const app = express();
const server = http.createServer(app);
const port = 3000;
const stockRouter = require('./routes/stocks');

app.use(stockRouter);

server.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
