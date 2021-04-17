const express = require('express');
const app = express();
app.use(express.static('public'));


app.get('/home', function (req, res, next) {
    res.sendFile(__dirname + '/views/home.html')
})

app.get('/about', function (req, res, next) {
    res.sendFile(__dirname + '/views/about.html')
})

app.get('/contact', function (req, res, next) {
    res.sendFile(__dirname + '/views/contact.html')
})

app.listen(3000)