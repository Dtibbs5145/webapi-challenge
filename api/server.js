const express = require('express');
const helmet = require('helmet');

const server = express();

const choresRouter = require('../chores/chores-router');

server.use(express.json());
server.use(helmet());
// server.use(logger);

server.use('/api/chores', choresRouter);

server.get('/', (req, res) => {
    res.send('Chore List');
});

module.exports = server;