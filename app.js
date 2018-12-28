const express = require('express');
const app = express();
const port = 80;

app.listen(process.env.PORT || port);


var path = require('path');

app.use(express.static('assets'));


app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + '/views/index.html'));
});

app.listen(port, function () {
    console.log(`Example app listening on port ${port}!`);
});


