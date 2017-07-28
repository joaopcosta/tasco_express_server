const express = require('express');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');

const api = require('./services/api');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', api);

const port = process.env.PORT || '3000';
app.set('port', port);

const server = http.createServer(app);

server.listen(port, () => console.log('Tasco Express server running on localhost:' + port)); 