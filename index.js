const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');

const app = express();
app.use(bodyParser.json());
const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});

app.get('/', function (req, res) {
    res.send('Hello World!')
})

app.get('/user', function (req, res) {
    res.send('Welcome James!')
})

