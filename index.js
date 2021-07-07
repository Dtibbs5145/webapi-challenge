const express = require('express');
const server = require('./api/server');

const port = 5500;
server.listen(port, () => console.log(` Running on port 5500`));