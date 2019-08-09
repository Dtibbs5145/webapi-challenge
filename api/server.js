const express = require('express');
const helmet = require('helmet');

const choresRouter = require('../chores/chores-router');

server.use(express.json());
server.use(helmet());
server.use('/api/chores', choresRouter);

module.exports = server;