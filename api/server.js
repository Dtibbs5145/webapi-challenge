const express = require('express');
const server = express();
const helmet = require('helmet');

const choresRouter = require('../chores/chores-router');

server.use(express.json());
server.use('/api/chores', choresRouter);

server.get('/', (req, res) => {
    res.send(`<h1>Web API Sprint Challenge</h1>`)
});

module.exports = server;