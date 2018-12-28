const express = require('express');
const app = express();
const port = 80;

var path = require('path');

app.use(express.static('assets'));


app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + '/views/index.html'));
});

app.listen(process.env.PORT || port, function () {
    console.log(`Example app listening on port ${port}!`);
});


