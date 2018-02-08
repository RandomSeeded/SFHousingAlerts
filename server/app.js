'use strict';

const express = require('express');
const path = require('path');

const PORT = 9752;
const app = express();

app.use(express.static(path.join(__dirname, '../client')));
app.get('*', (req, res, next) =>
    res.sendFile('/index.html', { root: path.join(__dirname, '../client') }));

app.listen(PORT);
