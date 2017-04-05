var request = require('request');
var fs = require('fs');
var express = require('express');
var app = express();
var port = process.env.PORT || 80;

app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res, next) {
    request('http://alerts.ncdr.nat.gov.tw/RssAtomFeed.ashx').pipe(fs.createWriteStream('public/ncdr.xml'))
})

app.get('/ncdr', function(req, res) {
    res.sendFile(__dirname + '/public/ncdr.xml')
})

app.listen(port, function() {
    console.log('Express app listening on port ' + port + '.');
});
