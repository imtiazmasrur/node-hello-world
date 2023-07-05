'use strict';
require('dotenv').config();
const express = require('express');
const app = express();

const port = process.env.NODE_ENV | 3000;

app.listen(port, () => {
    console.info(`API server started on PORT: ${port}`);
});

app.get('/', (req, res) => {
    res.send(`Hello World`);
});

app.get('/port', (req, res) => {
    res.send(`Server PORT ${process.env.DB_DIALECT}`);
});
