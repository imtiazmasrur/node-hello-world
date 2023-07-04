'use strict';

const express = require('express');

const port = 3000;
const app = express();

app.listen(port, () => {
    console.info(`API server started on PORT: ${port}`);
});

app.get('/', (req, res) => {
    res.send('Hello World');
});
