var express = require('express');
var cf = require('aws-cloudfront-sign');

var app = express();

var PORT = process.env.PORT || 3000

var options = { keypairId: process.env.CLOUDFRONT_KEY_PAIRID, privateKeyString: process.env.CLOUDFRONT_KEY};
var Url = 'http://' + process.env.CLOUDFRONT_BASE_URL + '/*';
var signedCookies = cf.getSignedCookies(Url, options);

app.get('/', function (req, res) {
    for (var cookieId in signedCookies) {
        res.cookie(cookieId, signedCookies[cookieId], { domain: process.env.COOKIE_BASE_URL });
    }
    imageUrl = '<img src="http://' + process.env.CLOUDFRONT_BASE_URL + '/image.jpg" />';
    res.send(imageUrl);
});

app.listen(PORT);