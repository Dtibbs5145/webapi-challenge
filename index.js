const express = require('express');

const server = express();

const port = process.env.PORT || 5500;
server.listen(port, () => console.log(` Running on port 5500`));